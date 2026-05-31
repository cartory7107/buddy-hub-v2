import { Link } from "@tanstack/react-router";
import logo from "@/assets/cartory-logo.png";

type Props = {
  size?: number;
  showWordmark?: boolean;
  tagline?: string;
  href?: string | null;
  className?: string;
};

export function Logo({
  size = 40,
  showWordmark = true,
  tagline = "Dropship · OS",
  href = "/",
  className = "",
}: Props) {
  const content = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className="relative shrink-0 rounded-2xl bg-white grid place-items-center ring-1 ring-white/15 shadow-[0_8px_30px_-10px_rgba(168,85,247,0.45)]"
        style={{ height: size, width: size, padding: Math.max(4, Math.round(size * 0.08)) }}
      >
        <img
          src={logo}
          alt="Cartory"
          width={size}
          height={size}
          className="h-full w-full object-contain"
          draggable={false}
        />
      </span>
      {showWordmark && (
        <span className="leading-tight">
          <span className="block font-display font-extrabold tracking-tight text-foreground text-lg">
            Cartory
          </span>
          {tagline && (
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {tagline}
            </span>
          )}
        </span>
      )}
    </span>
  );
  if (!href) return content;
  return (
    <Link to={href} aria-label="Cartory home" className="inline-flex items-center">
      {content}
    </Link>
  );
}