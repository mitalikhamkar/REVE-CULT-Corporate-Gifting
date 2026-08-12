import React, { createContext, useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { getTheme, DEFAULT_THEME_ID } from "@/config/themes";

const ThemeContext = createContext(getTheme(DEFAULT_THEME_ID));

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(DEFAULT_THEME_ID);

  useEffect(() => {
    const ref = doc(db, "settings", "theme");
    const unsubscribe = onSnapshot(
      ref,
      (snap) => {
        const active = snap.exists() ? snap.data().activeTheme : DEFAULT_THEME_ID;
        setThemeId(active && THEME_EXISTS(active) ? active : DEFAULT_THEME_ID);
      },
      (err) => {
        console.error("Failed to read active theme, falling back to Default:", err);
        setThemeId(DEFAULT_THEME_ID);
      }
    );
    return unsubscribe;
  }, []);

  const theme = getTheme(themeId);

  // CSS custom properties scoped to this wrapper only — the Tailwind config
  // reads these via var(--reve-x, <default hex>), so anything outside this
  // wrapper (e.g. the admin panel) always falls back to the original colors.
  const cssVars = {
    "--reve-terracotta": theme.colors.terracotta,
    "--reve-peach": theme.colors.peach,
    "--reve-brown": theme.colors.brown,
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={cssVars}>{children}</div>
    </ThemeContext.Provider>
  );
}

function THEME_EXISTS(id) {
  return getTheme(id).id === id;
}

export function useActiveTheme() {
  return useContext(ThemeContext);
}