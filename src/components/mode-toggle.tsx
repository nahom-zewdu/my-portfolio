"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <span className="text-sm text-muted-foreground">Dark</span>
  }

  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-sm font-medium uppercase tracking-[0.2em] text-accent transition-opacity duration-200 hover:opacity-80"
      aria-label="Toggle theme"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  )
}
