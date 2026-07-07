import { useCallback, useEffect, useState } from "react";

/**
 * Dark-by-default theme with a persisted toggle.
 * index.html applies the saved class before first paint, so this hook
 * only needs to keep React state and localStorage in sync.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage unavailable (private mode) — theme still works for the session */
    }
    // Keep the browser chrome color in step with the page background.
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0a0c10" : "#f7f7f5");
  }, [theme]);

  const toggle = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  return { theme, toggle };
}
