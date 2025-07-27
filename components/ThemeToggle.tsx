"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      className="p-2 rounded-full text-2xl text-accent-yellow hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  )
}
