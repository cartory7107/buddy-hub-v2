import { ChevronDown, ArrowUp } from "lucide-react";

type Props = {
  targetId: string;
  label?: string;
  /** If true, arrow points up (used on last section to return to top) */
  up?: boolean;
};

export function NextArrow({ targetId, label = "Click here", up = false }: Props) {
  const onClick = () => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else if (up) window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative z-30 flex justify-center -mt-4 mb-10 md:mb-14 pointer-events-none">
      <button
        onClick={onClick}
        aria-label={label}
        className="next-arrow-3d pointer-events-auto group inline-flex items-center gap-3 select-none"
      >
        {/* Animated "Click here" label */}
        <span className="next-arrow-label hidden sm:inline-flex items-center gap-2 rounded-full glass-dark ring-luxe px-4 h-10 font-display font-semibold text-white text-xs tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--neon)] opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--neon)]" />
          </span>
          {label}
        </span>

        {/* 3D Arrow disc */}
        <span className="next-arrow-disc relative grid place-items-center h-14 w-14 md:h-16 md:w-16 rounded-full">
          <span className="next-arrow-ring absolute inset-0 rounded-full" />
          <span className="next-arrow-core absolute inset-1 rounded-full hybrid-gradient" />
          <span className="relative text-[var(--obsidian)]">
            {up ? (
              <ArrowUp className="h-6 w-6 md:h-7 md:w-7" strokeWidth={3} />
            ) : (
              <ChevronDown className="h-7 w-7 md:h-8 md:w-8 next-arrow-bounce" strokeWidth={3} />
            )}
          </span>
        </span>

        {/* Mobile-only inline label */}
        <span className="sm:hidden font-display font-semibold text-white text-xs">
          {label}
        </span>
      </button>
    </div>
  );
}