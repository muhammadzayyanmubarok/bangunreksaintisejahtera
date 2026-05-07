import logoSrc from "@/assets/brs-logo.png";

type Props = { variant?: "light" | "dark"; className?: string };

export function Logo({ variant = "dark", className = "" }: Props) {
  const fg = variant === "light" ? "text-primary-foreground" : "text-primary";
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="BRS">
      <img
        src={logoSrc}
        alt="BRS - Bangun Reksa Inti Sejahtera"
        className={`h-11 w-auto ${variant === "light" ? "bg-primary-foreground/95 rounded-md p-1" : ""}`}
      />
      <span className={`hidden sm:inline font-display text-sm font-semibold tracking-[0.2em] ${fg}`}>
        BRS
      </span>
    </div>
  );
}
