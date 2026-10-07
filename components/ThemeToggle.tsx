"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "revealer-theme";

function readCurrentTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const syncTheme = window.requestAnimationFrame(() => setTheme(readCurrentTheme()));

    const followSystemPreference = (event: MediaQueryListEvent) => {
      if (window.localStorage.getItem(THEME_STORAGE_KEY)) return;

      const systemTheme: Theme = event.matches ? "dark" : "light";
      document.documentElement.dataset.theme = systemTheme;
      document.documentElement.style.colorScheme = systemTheme;
      setTheme(systemTheme);
    };

    mediaQuery.addEventListener("change", followSystemPreference);
    return () => {
      window.cancelAnimationFrame(syncTheme);
      mediaQuery.removeEventListener("change", followSystemPreference);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = readCurrentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // The selected theme still applies for this session when storage is unavailable.
    }

    setTheme(nextTheme);
  };

  const targetTheme = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme ? `Switch to ${targetTheme} theme` : "Toggle color theme"}
      title={theme ? `Switch to ${targetTheme} theme` : "Toggle color theme"}
      className="grid size-11 shrink-0 place-items-center rounded-full border border-line bg-content/[0.025] text-content transition-colors hover:border-accent/55 hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {theme === "light" ? (
        <Moon aria-hidden="true" size={18} />
      ) : (
        <Sun aria-hidden="true" size={18} />
      )}
    </button>
  );
}
