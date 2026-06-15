import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

type Env = {
  CONTENT: {
    get: (key: string) => Promise<string | null>;
    put: (key: string, value: string) => Promise<void>;
  };
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry),
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const url = new URL(request.url);

    // ── KV API Handler ──────────────────────────────────────────────────────
    if (url.pathname === "/api/content") {
      const kvEnv = env as Env;
      const key = url.searchParams.get("key") || "siteContent";

      if (request.method === "GET") {
        try {
          const data = await kvEnv.CONTENT.get(key);
          return new Response(data || "null", {
            headers: {
              "content-type": "application/json",
              "access-control-allow-origin": "*",
            },
          });
        } catch {
          return new Response("null", {
            headers: { "content-type": "application/json" },
          });
        }
      }

      if (request.method === "POST") {
        try {
          const body = await request.text();
          await kvEnv.CONTENT.put(key, body);
          return new Response(JSON.stringify({ success: true }), {
            headers: {
              "content-type": "application/json",
              "access-control-allow-origin": "*",
            },
          });
        } catch (e) {
          return new Response(JSON.stringify({ success: false, error: String(e) }), {
            status: 500,
            headers: { "content-type": "application/json" },
          });
        }
      }
    }
    // ───────────────────────────────────────────────────────────────────────

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};
