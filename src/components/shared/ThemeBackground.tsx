"use client";
import { useTheme } from "next-themes";
import clsx from "clsx";

export default function ThemeBackground() {
  // Use theme from next-themes for SSR safety
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark" || !resolvedTheme;

  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
      {/* Noise overlay only */}
      <div
        className={clsx(
          "absolute inset-0 w-full h-full pointer-events-none",
          isDark ? "opacity-5" : "opacity-10"
        )}
        style={{
          backgroundImage: "url('/noise.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto"
        }}
      />
    </div>
  );
} 