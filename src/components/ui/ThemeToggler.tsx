"use client";

import { FaSun, FaMoon } from "react-icons/fa";
// import { useTheme } from "@/contexts/theme-context"
import clsx from "clsx";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}
type Theme = "light" | "dark";

export function ThemeToggler({
  size = "md",
  showLabel = false,
  className,
}: ThemeToggleProps) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("skillvault-theme") as Theme;
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setThemeState(savedTheme);
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setThemeState(systemTheme);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      localStorage.setItem("skillvault-theme", theme);
    }
  }, [theme, mounted]);
  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
  };
  const toggleTheme = () => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div className={clsx("flex items-center space-x-2", className)}>
      {showLabel && <span className="text-secondary-text text-sm">Theme</span>}
      <button
        onClick={toggleTheme}
        className={clsx(
          "rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105",
          "bg-gray hover:bg-gray-200 text-secondary-text hover:text-secondary-text/75 cursor-pointer",
          "dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-gray-300 dark:hover:text-white",
          "light:bg-gray-200 light:hover:bg-gray-300 light:text-gray-600 light:hover:text-gray-800",
          sizeClasses[size]
        )}
        title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
}
