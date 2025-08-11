"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function BackgroundGrid() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark" || !resolvedTheme;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const lastHoverRef = useRef<{ x: number; y: number; t: number } | null>(null);
  const sparklesRef = useRef<
    Array<{ x: number; y: number; created: number; duration: number; radius: number }>
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
    };

    resize();
    window.addEventListener("resize", resize);

    let rafId = 0;

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const now = performance.now();
      const hover = lastHoverRef.current;
      if (hover) {
        const elapsed = now - hover.t;
        const duration = 280; // ms
        if (elapsed < duration) {
          const p = 1 - elapsed / duration; // 1 -> 0
          const radius = 3 + 3 * p; // 6 -> 3 px
          const alpha = 0.35 * p; // fade out
          // Theme-aware glow color
          const glow = isDark ? `rgba(0, 255, 255, ${alpha})` : `rgba(30, 64, 175, ${alpha})`; // cyan / blue-800
          ctx.beginPath();
          ctx.fillStyle = glow;
          ctx.arc(hover.x, hover.y, radius, 0, Math.PI * 2);
          ctx.fill();
        } else {
          lastHoverRef.current = null;
        }
      }

      // Autonomous sparkles (increased density/size/duration)
      if (Math.random() < 0.22 && sparklesRef.current.length < 140) {
        sparklesRef.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          created: now,
          duration: 1800 + Math.random() * 2200,
          radius: 2.2 + Math.random() * 3.0,
        });
      }

      const isDarkLocal = isDark;
      sparklesRef.current = sparklesRef.current.filter((s) => {
        const elapsed = now - s.created;
        if (elapsed > s.duration) return false;
        const p = elapsed / s.duration; // 0..1
        // Ease-in-out for alpha
        const ease = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p; // smooth
        const alpha = 0.22 * (1 - Math.abs(0.5 - p) * 2) + 0.08 * ease;
        const color = isDarkLocal
          ? `rgba(0, 255, 255, ${alpha})`
          : `rgba(30, 64, 175, ${alpha})`;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
        return true;
      });

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);

    const onMove = (e: MouseEvent) => {
      // Map to nearest grid cell center
      const cell = 30; // 30px grid
      const x = Math.floor(e.clientX / cell) * cell + cell / 2;
      const y = Math.floor(e.clientY / cell) * cell + cell / 2;
      lastHoverRef.current = { x, y, t: performance.now() };
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [resolvedTheme, isDark]);

  // Base dotted background via CSS (no grid lines)
  const baseStyle: React.CSSProperties = {
    background: isDark ? "#0b0c0f" : "#f6f8fb",
    backgroundImage: isDark
      ? "radial-gradient(circle, rgba(255,255,255,0.22) 1.6px, transparent 1.6px)"
      : "radial-gradient(circle, rgba(13, 27, 61, 0.25) 2px, transparent 2px)",
    backgroundSize: "30px 30px",
    backgroundPosition: "0 0",
  };

  // baseStyle set above per theme

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 pointer-events-none" style={baseStyle} aria-hidden="true" />
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />
    </div>
  );
}
