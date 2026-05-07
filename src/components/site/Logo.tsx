type Props = { variant?: "light" | "dark"; className?: string };

export function Logo({ variant = "dark", className = "" }: Props) {
  const fg = variant === "light" ? "text-primary-foreground" : "text-primary";
  const sub = variant === "light" ? "text-primary-foreground/60" : "text-muted-foreground";
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label="BARIS">
      {/* Logo placeholder — replace with uploaded image */}
      <div className={`flex h-10 w-10 items-center justify-center rounded-lg border border-dashed ${variant === "light" ? "border-primary-foreground/30" : "border-primary/30"}`}>
        <span className={`text-[10px] font-semibold tracking-widest ${sub}`}>LOGO</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-display text-xs font-semibold tracking-[0.3em] ${fg}`}>—————</span>
        <span className={`mt-1 text-[10px] tracking-widest ${sub}`}>BRAND MARK</span>
      </div>
    </div>
  );
}
