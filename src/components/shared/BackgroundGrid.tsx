"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const CELL_SIZE = 30; // px
const DOT_RADIUS = 1.5; // visual dot in base pattern
const HOVER_RADIUS = 6; // px radius of hover glow
const FADE_MS = 260; // fade duration ms

export default function BackgroundGrid() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark" || !resolvedTheme;

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const lastMoveRef = useRef<number>(0);
  const centerRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onMove = (e: MouseEvent) => {
      // Compute the nearest cell center (aligned to grid)
      const cx = Math.floor(e.clientX / CELL_SIZE) * CELL_SIZE + CELL_SIZE / 2;
      const cy = Math.floor(e.clientY / CELL_SIZE) * CELL_SIZE + CELL_SIZE / 2;
      centerRef.current = { x: cx, y: cy };
      lastMoveRef.current = performance.now();
      if (prefersReduced) {
        // Immediately render without continuous animation
        renderOverlay(1);
      }
    };

    const renderOverlay = (alphaOverride?: number) => {
      const { x, y } = centerRef.current;
      const now = performance.now();
      const elapsed = now - lastMoveRef.current;
      const t = Math.max(0, 1 - elapsed / FADE_MS);
      const alpha = alphaOverride ?? t;
      // Theme-aware hover color
      const hoverColor = isDark
        ? `rgba(0, 255, 255, ${0.3 * alpha})` // cyan glow on dark
        : `rgba(100, 116, 139, ${0.25 * alpha})`; // slate gray on light

      if (alpha <= 0) {
        overlay.style.backgroundImage = "none";
        return false;
      }

      overlay.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, ${hoverColor} 0px, rgba(0,0,0,0) ${HOVER_RADIUS}px)`;
      return true;
    };

    const loop = () => {
      const hasImage = renderOverlay();
      if (hasImage) rafRef.current = requestAnimationFrame(loop);
      else rafRef.current = null;
    };

    const startLoop = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(loop);
    };

    const moveHandler = (e: MouseEvent) => {
      onMove(e);
      startLoop();
    };

    window.addEventListener("mousemove", moveHandler, { passive: true });
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", moveHandler as any);
    };
  }, [isDark]);

  const baseBackground = isDark ? "#000000" : "#fafafa";
  const dotColor = isDark ? "rgba(255,255,255,0.20)" : "rgba(71,85,105,0.18)"; // light/dark dots

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Base dotted grid */}
      <div
        className="absolute inset-0"
        style={{
          background: baseBackground,
          backgroundImage: `radial-gradient(circle, ${dotColor} ${DOT_RADIUS}px, transparent ${DOT_RADIUS}px)`,
          backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
          backgroundPosition: "0 0",
        }}
        aria-hidden="true"
      />
      {/* Hover overlay for a single-cell glow */}
      <div ref={overlayRef} className="absolute inset-0" aria-hidden="true" />
    </div>
  );
}
