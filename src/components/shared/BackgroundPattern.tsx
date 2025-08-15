"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function BackgroundPattern() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark" || !resolvedTheme;
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = layerRef.current;
    if (!el) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reduceMotion = mediaQuery.matches;

    // Apply or remove autonomous drift animation based on reduced motion
    if (!reduceMotion) {
      el.classList.add("bg-drift");
    } else {
      el.classList.remove("bg-drift");
    }

    // Subtle mouse parallax (very small range) if motion permitted
    const onMove = (e: MouseEvent) => {
      if (reduceMotion || !el) return;
      const { innerWidth, innerHeight } = window;
      const nx = (e.clientX / innerWidth - 0.5) * 2; // -1..1
      const ny = (e.clientY / innerHeight - 0.5) * 2; // -1..1
      const amplitude = 6; // px
      el.style.transform = `translate3d(${nx * amplitude}px, ${ny * amplitude}px, 0)`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, [resolvedTheme]);

  const darkPattern = `repeating-linear-gradient(-45deg,
    rgba(255, 0, 100, 0.20) 0px,
    rgba(255, 0, 100, 0.00) 2px,
    transparent 2px,
    transparent 25px
  )`;

  const lightPattern = `repeating-linear-gradient(-45deg,
    rgba(100, 116, 139, 0.25) 0px,
    rgba(100, 116, 139, 0.00) 2px,
    transparent 2px,
    transparent 25px
  )`;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div
        ref={layerRef}
        className="h-full w-full will-change-transform"
        style={{
          backgroundColor: isDark ? "#0f0f0f" : "#fafafa",
          backgroundImage: isDark ? darkPattern : lightPattern,
          backgroundSize: "auto",
          backgroundRepeat: "repeat",
          backgroundPosition: "0% 0%",
        }}
        aria-hidden="true"
      />

      {/* Keyframes for autonomous drift */}
      <style jsx global>{`
        @keyframes bg-drift-keys {
          0% { background-position: 0% 0%; }
          50% { background-position: 50% 50%; }
          100% { background-position: 100% 100%; }
        }
        .bg-drift { animation: bg-drift-keys 28s linear infinite alternate; }
      `}</style>
    </div>
  );
}
