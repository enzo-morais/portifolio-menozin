"use client";

import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return <>{children}</>;
}

// Kept for backward compatibility if any page imports useTheme
export function useTheme() {
  return { theme: "dark" as const, toggleTheme: () => {} };
}
