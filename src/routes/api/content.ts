import { createAPIFileRoute } from "@tanstack/react-start/api";

export const APIRoute = createAPIFileRoute("/api/content")({
  GET: async ({ request }) => {
    const env = (request as any).env as { CONTENT: { get: (k: string) => Promise<string | null> } };
    const key = new URL(request.url).searchParams.get("key") || "siteContent";
    try {
      const data = await env.CONTENT.get(key);
      return new Response(data || "null", {
        headers: { "content-type": "application/json" },
      });
    } catch {
      return new Response("null", { headers: { "content-type": "application/json" } });
    }
  },
  POST: async ({ request }) => {
    const env = (request as any).env as {
      CONTENT: { put: (k: string, v: string) => Promise<void> };
    };
    const key = new URL(request.url).searchParams.get("key") || "siteContent";
    try {
      const body = await request.text();
      await env.CONTENT.put(key, body);
      return new Response(JSON.stringify({ success: true }), {
        headers: { "content-type": "application/json" },
      });
    } catch (e) {
      return new Response(JSON.stringify({ success: false, error: String(e) }), {
        status: 500,
        headers: { "content-type": "application/json" },
      });
    }
  },
});
