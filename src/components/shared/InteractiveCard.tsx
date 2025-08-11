"use client";
import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  tiltDefault?: "left" | "right";
}

export default function InteractiveCard({ children, className, tiltDefault = "left" }: InteractiveCardProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  // Base default tilt values (subtle)
  const baseRotateX = -1; // slight lift
  const baseRotateY = tiltDefault === "left" ? -3 : 3; // alternate left/right

  const applyTransform = (rx: number, ry: number) => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const offsetX = ((x - centerX) / centerX) * 3.5; // tilt left/right
    const offsetY = ((y - centerY) / centerY) * -3.5; // tilt up/down
    applyTransform(baseRotateX + offsetY, baseRotateY + offsetX);
  };

  const handleMouseLeave = () => {
    applyTransform(baseRotateX, baseRotateY);
  };

  return (
    <motion.div
      ref={ref}
      className={cn("group rounded-2xl transition-transform will-change-transform", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={false}
      whileHover={reduce ? undefined : { scale: 1.03 }}
      whileTap={reduce ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      style={{
        boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
        transform: `perspective(1000px) rotateX(${baseRotateX}deg) rotateY(${baseRotateY}deg)`,
      }}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border backdrop-blur-md ring-1 ring-white/10 group-hover:ring-cyan-400/30",
          // Pure glass: no background fill
          "bg-transparent",
          "border-white/15 dark:border-white/12",
          "shadow-sm group-hover:shadow-lg transition-all"
        )}
      >
        {/* No overlays: pure glass */}
        <div className="relative">{children}</div>
      </div>
    </motion.div>
  );
}

