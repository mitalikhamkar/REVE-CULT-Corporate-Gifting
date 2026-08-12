export const DEFAULT_THEME_ID = "default";

export const THEMES = {
  default: {
    id: "default",
    name: "Default",
    hero: "/images/hero/hero.png",
    banner: "/images/banners/banner.png",
    decorative: "/images/branding/brand.png",
  },
  ganpati: {
    id: "ganpati",
    name: "Ganpati",
    hero: "/images/themes/ganpati/hero.png",
    banner: "/images/themes/ganpati/banner.png",
    decorative: "/images/themes/ganpati/decorative.png",
  },
  dussehra: {
    id: "dussehra",
    name: "Dussehra",
    hero: "/images/themes/dussehra/hero.png",
    banner: "/images/themes/dussehra/banner.png",
    decorative: "/images/themes/dussehra/decorative.png",
  },
  diwali: {
    id: "diwali",
    name: "Diwali",
    hero: "/images/themes/diwali/hero.png",
    banner: "/images/themes/diwali/banner.png",
    decorative: "/images/themes/diwali/decorative.png",
  },
};

export function getTheme(themeId) {
  return THEMES[themeId] || THEMES[DEFAULT_THEME_ID];
}