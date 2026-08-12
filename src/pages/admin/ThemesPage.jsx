import React, { useEffect, useState } from "react";
import { Check, Sparkles, AlertTriangle } from "lucide-react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { DEFAULT_THEME_ID } from "@/config/themes";
import { cn } from "@/lib/utils";

const THEME_OPTIONS = [
  {
    id: "default",
    name: "Default",
    description: "The standard REVE CULT ivory, peach and terracotta identity.",
    swatches: ["#FFF9F4", "#F8D8C8", "#C98268"],
  },
  {
    id: "ganpati",
    name: "Ganpati",
    description: "Warm gold and vermillion accents for Ganesh Chaturthi campaigns.",
    swatches: ["#FBE9DF", "#E3A857", "#8A3B2E"],
  },
  {
    id: "dussehra",
    name: "Dussehra",
    description: "Deep marigold and maroon tones for Dussehra gifting.",
    swatches: ["#FDECD8", "#D97F3B", "#7A2E2E"],
  },
  {
    id: "diwali",
    name: "Diwali",
    description: "Festive gold, terracotta and diya-light warmth for Diwali.",
    swatches: ["#FFF3DF", "#E0A63A", "#C05A2C"],
  },
];

export default function ThemesPage() {
  const [activeTheme, setActiveTheme] = useState(DEFAULT_THEME_ID);
  const [selected, setSelected] = useState(DEFAULT_THEME_ID);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref = doc(db, "settings", "theme");
    const unsubscribe = onSnapshot(
      ref,
      (snap) => {
        const current = snap.exists() ? snap.data().activeTheme : DEFAULT_THEME_ID;
        setActiveTheme(current || DEFAULT_THEME_ID);
        setSelected(current || DEFAULT_THEME_ID);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error("Failed to read active theme:", err);
        setError(err.message || "Failed to load the current theme.");
        setLoading(false);
      }
    );
    return unsubscribe;
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    try {
      await setDoc(doc(db, "settings", "theme"), { activeTheme: selected }, { merge: true });
      setActiveTheme(selected);
    } catch (err) {
      console.error("Failed to save active theme:", err);
      setError(err.message || "Failed to save the theme. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const hasChanges = selected !== activeTheme;
  const activeName = THEME_OPTIONS.find((t) => t.id === activeTheme)?.name || "Default";

  return (
    <div>
      <h1 className="font-heading text-2xl sm:text-3xl font-semibold text-reve-charcoal">Themes</h1>
      <p className="mt-1 text-sm text-reve-brown">
        Choose the occasion theme for the public website.
      </p>

      {!loading && !error && (
        <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-reve-peachcream text-reve-brown text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          Live on the public site: {activeName}
        </div>
      )}

      {error && (
        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4">
          <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-red-700">Something went wrong.</p>
            <p className="mt-0.5 text-xs text-red-600">{error}</p>
          </div>
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {THEME_OPTIONS.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelected(t.id)}
            disabled={loading}
            className={cn(
              "text-left bg-white rounded-2xl border p-6 transition-colors disabled:opacity-60",
              selected === t.id
                ? "border-reve-terracotta ring-1 ring-reve-terracotta"
                : "border-reve-border/70 hover:border-reve-terracotta/50"
            )}
          >
            <div className="flex items-center justify-between">
              <p className="font-heading text-lg font-semibold text-reve-charcoal">{t.name}</p>
              <div className="flex items-center gap-2">
                {activeTheme === t.id && (
                  <span className="text-[10px] uppercase tracking-wide font-medium text-reve-terracotta">
                    Active
                  </span>
                )}
                {selected === t.id && (
                  <span className="w-6 h-6 rounded-full bg-reve-terracotta text-white flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>
            </div>
            <p className="mt-2 text-sm text-reve-brown">{t.description}</p>
            <div className="mt-4 flex gap-2">
              {t.swatches.map((color) => (
                <span
                  key={color}
                  className="w-8 h-8 rounded-full border border-black/5"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-3">
        <button
          onClick={handleSave}
          disabled={!hasChanges || saving || loading}
          className="px-6 py-3 rounded-full bg-reve-charcoal text-white text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-reve-charcoal/90 transition-colors"
        >
          {saving ? "Saving…" : "Save Theme"}
        </button>
        <p className="text-xs text-reve-brown/70">
          {hasChanges
            ? "Changes apply to the public website immediately after saving."
            : "This is the theme currently live on the public site."}
        </p>
      </div>
    </div>
  );
}