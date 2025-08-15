"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function BackgroundInteractive() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;
    let running = true;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reduceMotion = mediaQuery.matches;

    const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
    }> = [];

    const targetCount = Math.min(90, Math.floor((window.innerWidth * window.innerHeight) / 30000));
    for (let i = 0; i < targetCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      });
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = null;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);

    const draw = () => {
      if (!running) return;
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      // Theme-aware colors
      const isDark = resolvedTheme === "dark" || !resolvedTheme;
      const nodeColor = isDark ? "rgba(203,213,225,0.35)" : "rgba(71,85,105,0.30)"; // slate-300 / slate-600
      const lineColor = isDark ? "rgba(148,163,184,0.18)" : "rgba(100,116,139,0.16)"; // slate-400 / slate-500

      // Update
      for (const p of particles) {
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          // gentle wrap
          if (p.x < -10) p.x = w + 10;
          if (p.x > w + 10) p.x = -10;
          if (p.y < -10) p.y = h + 10;
          if (p.y > h + 10) p.y = -10;

          // faint mouse influence
          const m = mouseRef.current;
          if (m) {
            const dx = m.x - p.x;
            const dy = m.y - p.y;
            const dist2 = dx * dx + dy * dy;
            const influence = Math.min(80_000, Math.max(10_000, dist2));
            // Slight attraction
            p.vx += (dx / influence) * 8;
            p.vy += (dy / influence) * 8;
            // Dampening
            p.vx *= 0.98;
            p.vy *= 0.98;
          }
        }
      }

      // Draw nodes
      ctx.fillStyle = nodeColor;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw connections
      ctx.strokeStyle = lineColor;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const maxDist2 = 140 * 140;
          if (d2 < maxDist2) {
            const alpha = 1 - d2 / maxDist2;
            ctx.globalAlpha = Math.min(0.28, Math.max(0.04, alpha * 0.28));
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      running = false;
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      aria-hidden="true"
    />
  );
}

