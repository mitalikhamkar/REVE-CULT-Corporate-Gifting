import React, { createContext, useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { getTheme, DEFAULT_THEME_ID } from "@/config/themes";

const ThemeContext = createContext(getTheme(DEFAULT_THEME_ID));
const STORAGE_KEY = "reve_active_theme";

function themeExists(id) {
  return getTheme(id).id === id;
}

function readCachedThemeId() {
  try {
    const cached = window.localStorage.getItem(STORAGE_KEY);
    return cached && themeExists(cached) ? cached : null;
  } catch {
    return null;
  }
}

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => readCachedThemeId() || DEFAULT_THEME_ID);
  // "ready" starts true only if we already have a cached theme to show
  // immediately. With no cache (first-ever visit), we hold rendering back
  // until Firestore actually responds, so Default is never shown first.
  const [ready, setReady] = useState(() => readCachedThemeId() !== null);

  useEffect(() => {
    const ref = doc(db, "settings", "theme");
    const unsubscribe = onSnapshot(
      ref,
      (snap) => {
        const active = snap.exists() ? snap.data().activeTheme : DEFAULT_THEME_ID;
        const resolved = active && themeExists(active) ? active : DEFAULT_THEME_ID;
        setThemeId(resolved);
        setReady(true);
        try {
          window.localStorage.setItem(STORAGE_KEY, resolved);
        } catch {
          // ignore storage errors (private browsing, storage disabled, etc.)
        }
      },
      (err) => {
        console.error("Failed to read active theme, falling back to Default:", err);
        setThemeId(DEFAULT_THEME_ID);
        setReady(true);
      }
    );
    return unsubscribe;
  }, []);

  const theme = getTheme(themeId);

  const cssVars = {
    "--reve-terracotta": theme.colors.terracotta,
    "--reve-peach": theme.colors.peach,
    "--reve-brown": theme.colors.brown,
  };

  if (!ready) {
    // No cached theme yet and Firestore hasn't responded — show a plain
    // ivory placeholder instead of ever rendering Default's actual assets,
    // so there's nothing to visibly "flash" away from once the real theme loads.
    return <div className="min-h-screen w-full bg-reve-ivory" aria-hidden="true" />;
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div style={cssVars}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useActiveTheme() {
  return useContext(ThemeContext);
}