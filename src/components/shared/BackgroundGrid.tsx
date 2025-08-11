"use client";
import { useEffect, useRef, useState } from "react";

const CELL = 40; // px

export default function BackgroundGrid() {
  const highlightRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = highlightRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf: number | null = null;
    let targetX = -CELL;
    let targetY = -CELL;

    const move = (e: MouseEvent) => {
      const x = Math.floor(e.clientX / CELL) * CELL;
      const y = Math.floor(e.clientY / CELL) * CELL;
      targetX = x;
      targetY = y;
      if (!visible) setVisible(true);
      if (raf == null) raf = requestAnimationFrame(tick);
    };

    const leave = () => {
      setVisible(false);
    };

    const tick = () => {
      if (!el) return;
      // Snap instantly to reduce jank; small easing could be added if desired
      const transform = `translate(${targetX}px, ${targetY}px) ${visible && !reduce ? "translateY(-4px) scale(1.05)" : "scale(1)"}`;
      el.style.transform = transform;
      raf = null;
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseleave", leave);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move as any);
      window.removeEventListener("mouseleave", leave as any);
    };
  }, [visible]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Base black grid background */}
      <div
        className="absolute inset-0"
        style={{
          background: "#000000",
          backgroundImage:
            "linear-gradient(to right, rgba(75,85,99,0.4) 1px, transparent 1px)," +
            "linear-gradient(to bottom, rgba(75,85,99,0.4) 1px, transparent 1px)",
          backgroundSize: `${CELL}px ${CELL}px`,
          backgroundPosition: "0 0",
        }}
        aria-hidden="true"
      />

      {/* Highlight box that snaps to hovered cell */}
      <div
        ref={highlightRef}
        className="absolute top-0 left-0 w-[40px] h-[40px] rounded-sm opacity-0 transition-all duration-200 ease-out"
        style={{
          boxShadow: visible ? "0 0 10px rgba(255,255,255,0.4)" : "none",
          backgroundImage: visible
            ? "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)"
            : "none",
          backgroundSize: "6px 6px",
        }}
      />

      {/* Control opacity via a tiny overlay, to avoid pointer events */}
      <style jsx global>{`
        [data-bg-highlight] { opacity: 0; }
      `}</style>

      {/* Sync opacity via a small inline style change */}
      <OpacityController elRef={highlightRef} show={visible} />
    </div>
  );
}

function OpacityController({ elRef, show }: { elRef: React.MutableRefObject<HTMLDivElement | null>; show: boolean }) {
  useEffect(() => {
    if (!elRef.current) return;
    elRef.current.style.opacity = show ? "1" : "0";
  }, [show, elRef]);
  return null;
}
