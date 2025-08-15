"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function BackgroundGrid() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark" || !resolvedTheme;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // Glowing line state following the grid dots
  const targetRef = useRef<{ x: number; y: number } | null>(null);
  const lineRef = useRef<{ x: number; y: number } | null>(null);
  const sparklesRef = useRef<
    Array<{ x: number; y: number; created: number; duration: number; radius: number }>
  >([]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      // Draw smooth glowing line moving between nearest grid dots
      if (targetRef.current) {
        if (!lineRef.current) {
          lineRef.current = { x: targetRef.current.x, y: targetRef.current.y };
        }
        const prev = { x: lineRef.current.x, y: lineRef.current.y };
        const speed = 0.15; // lerp factor for smoothness
        lineRef.current.x += (targetRef.current.x - lineRef.current.x) * speed;
        lineRef.current.y += (targetRef.current.y - lineRef.current.y) * speed;
        const stroke = isDark ? "rgba(0, 255, 255, 0.45)" : "rgba(30, 64, 175, 0.45)";
        ctx.save();
        ctx.strokeStyle = stroke;
        ctx.lineWidth = 1.2;
        ctx.shadowColor = isDark ? "rgba(0,255,255,0.6)" : "rgba(30,64,175,0.55)";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(lineRef.current.x, lineRef.current.y);
        ctx.stroke();
        ctx.restore();
      }

      // Autonomous sparkles (increased density/size/duration)
      if (Math.random() < 0.06 && sparklesRef.current.length < 50) {
        sparklesRef.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          created: now,
          duration: 1600 + Math.random() * 1600,
          radius: 1.8 + Math.random() * 2.2,
        });
      }

      const isDarkLocal = isDark;
      sparklesRef.current = sparklesRef.current.filter((s) => {
        const elapsed = now - s.created;
        if (elapsed > s.duration) return false;
        const p = elapsed / s.duration; // 0..1
        // Ease-in-out for alpha
        const ease = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p; // smooth
        const alpha = 0.18 * (1 - Math.abs(0.5 - p) * 2) + 0.06 * ease;
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
      // Map to nearest grid dot center
      const cell = 26; // must match CSS backgroundSize
      const x = Math.floor(e.clientX / cell) * cell + cell / 2;
      const y = Math.floor(e.clientY / cell) * cell + cell / 2;
      targetRef.current = { x, y };
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [resolvedTheme, isDark, mounted]);

  // Avoid SSR/client style mismatches: render only after mount
  if (!mounted) {
    return null;
  }

  // Base dotted background via CSS (no grid lines) — avoid using background shorthand
  const baseStyle: React.CSSProperties = {
    backgroundColor: isDark ? "#0b0c0f" : "#f6f8fb",
    backgroundImage: isDark
      ? "radial-gradient(circle, rgba(255,255,255,0.22) 1.25px, transparent 1.25px)"
      : "radial-gradient(circle, rgba(13, 27, 61, 0.25) 1.6px, transparent 1.6px)",
    backgroundRepeat: "repeat",
    backgroundSize: "26px 26px",
    backgroundPositionX: "0px",
    backgroundPositionY: "0px",
  };

  // baseStyle set above per theme

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 pointer-events-none" style={baseStyle} aria-hidden="true" />
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />
    </div>
  );
}
