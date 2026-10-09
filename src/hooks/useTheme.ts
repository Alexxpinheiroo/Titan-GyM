/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from "react";

export type ThemeMode = "system" | "dark" | "light";
export type ResolvedTheme = "dark" | "light";

export interface UseThemeReturn {
  theme: ThemeMode;
  resolvedTheme: ResolvedTheme;
  systemTheme: ResolvedTheme;
  isSystem: boolean;
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const STORAGE_KEY = "titan_theme";

function getSystemThemePreference(): ResolvedTheme {
  if (typeof window === "undefined" || !window.matchMedia) {
    return "dark";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme(): UseThemeReturn {
  // User selection: 'system' | 'dark' | 'light'
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "system";
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
      if (stored === "system" || stored === "dark" || stored === "light") {
        return stored;
      }
    } catch {
      // Storage access restricted (e.g. sandboxed iframe)
    }
    return "system";
  });

  // Current system preference
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemThemePreference);

  // Listen to system changes via prefers-color-scheme media query
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else if ((mediaQuery as any).addListener) {
      (mediaQuery as any).addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else if ((mediaQuery as any).removeListener) {
        (mediaQuery as any).removeListener(handleChange);
      }
    };
  }, []);

  // Compute the currently active theme
  const resolvedTheme: ResolvedTheme = theme === "system" ? systemTheme : theme;

  // Apply to documentElement
  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;

    if (resolvedTheme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
      root.setAttribute("data-theme", "light");
      root.style.colorScheme = "light";
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      root.style.colorScheme = "dark";
    }

    // Update <meta name="theme-color"> for mobile browser frames
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.setAttribute("name", "theme-color");
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute("content", resolvedTheme === "light" ? "#f2f6f5" : "#111616");
  }, [resolvedTheme]);

  const setTheme = useCallback((newMode: ThemeMode) => {
    setThemeState(newMode);
    try {
      localStorage.setItem(STORAGE_KEY, newMode);
    } catch {
      // ignore storage write errors
    }
  }, []);

  const toggleTheme = useCallback(() => {
    // Toggles between dark and light
    const next = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(next);
  }, [resolvedTheme, setTheme]);

  return {
    theme,
    resolvedTheme,
    systemTheme,
    isSystem: theme === "system",
    setTheme,
    toggleTheme,
  };
}
