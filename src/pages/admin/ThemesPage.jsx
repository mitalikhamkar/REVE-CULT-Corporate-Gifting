import React, { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const THEMES = [
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
  const [selected, setSelected] = useState("default");

  return (
    <div>
      <h1 className="font-heading text-2xl sm:text-3xl font-semibold text-reve-charcoal">Themes</h1>
      <p className="mt-1 text-sm text-reve-brown">
        Choose the occasion theme for the public website.
      </p>

      <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-reve-peachcream text-reve-brown text-xs font-medium">
        <Sparkles className="w-3.5 h-3.5" />
        Preview only — live theme switching is coming soon
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {THEMES.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelected(t.id)}
            className={cn(
              "text-left bg-white rounded-2xl border p-6 transition-colors",
              selected === t.id ? "border-reve-terracotta ring-1 ring-reve-terracotta" : "border-reve-border/70 hover:border-reve-terracotta/50"
            )}
          >
            <div className="flex items-center justify-between">
              <p className="font-heading text-lg font-semibold text-reve-charcoal">{t.name}</p>
              {selected === t.id && (
                <span className="w-6 h-6 rounded-full bg-reve-terracotta text-white flex items-center justify-center">
                  <Check className="w-3.5 h-3.5" />
                </span>
              )}
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
          disabled
          title="Live theme switching isn't connected yet"
          className="px-6 py-3 rounded-full bg-reve-charcoal text-white text-sm font-medium opacity-50 cursor-not-allowed"
        >
          Save Theme
        </button>
        <p className="text-xs text-reve-brown/70">
          Saving will be enabled once the theme is wired up to Firestore.
        </p>
      </div>
    </div>
  );
}
