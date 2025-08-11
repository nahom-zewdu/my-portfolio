"use client";
import { useTheme } from "next-themes";

export default function GeometricBackground() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark" || !resolvedTheme;

  const darkPattern = `
    repeating-linear-gradient(45deg, rgba(255, 20, 147, 0.15) 0, rgba(255, 20, 147, 0.15) 2px, transparent 2px, transparent 30px),
    repeating-linear-gradient(-45deg, rgba(0, 255, 255, 0.1) 0, rgba(0, 255, 255, 0.1) 1px, transparent 1px, transparent 25px)
  `;

  const lightPattern = `
    repeating-linear-gradient(45deg, rgba(100, 116, 139, 0.12) 0, rgba(100, 116, 139, 0.12) 2px, transparent 2px, transparent 30px),
    repeating-linear-gradient(-45deg, rgba(148, 163, 184, 0.10) 0, rgba(148, 163, 184, 0.10) 1px, transparent 1px, transparent 25px)
  `;

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <div
        className={`min-h-screen w-full ${isDark ? "bg-[#0a0a0a] text-white" : "bg-[#f8f8f8] text-black"}`}
        style={{
          backgroundImage: isDark ? darkPattern : lightPattern,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
