import React, { useState } from "react";

export default function OptimizedImage({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  style?: React.CSSProperties;
}) {
  const [loaded, setLoaded] = useState(false);
  const loading = priority ? "eager" : "lazy";
  const fetchPriority = priority ? "high" : undefined;

  const aspectStyle: React.CSSProperties = {};
  if (width && height) {
    aspectStyle.aspectRatio = `${width}/${height}`;
  }

  return (
    <div className={`relative overflow-hidden bg-secondary/30 ${className}`} style={{ ...aspectStyle, ...style }}>
      <div
        aria-hidden
        className={`absolute inset-0 transition-opacity duration-500 ease-out bg-gradient-to-t from-[var(--obsidian)]/80 to-transparent ${loaded ? "opacity-0" : "opacity-100"}`}
      />
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        width={width}
        height={height}
        fetchPriority={fetchPriority as any}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
