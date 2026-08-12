export const DEFAULT_THEME_ID = "default";

export const THEMES = {
  default: {
    id: "default",
    name: "Default",
    hero: "/images/hero/hero.png",
    banner: "/images/banners/banner.png",
    decorative: "/images/branding/brand.png",
    colors: {
      terracotta: "#C98268",
      peach: "#F8D8C8",
      brown: "#8A5A4A",
    },
  },
  ganpati: {
    id: "ganpati",
    name: "Ganpati",
    hero: "/images/ganpati/hero.png",
    banner: "/images/ganpati/banner.png",
    decorative: "/images/ganpati/decorative.png",
    colors: {
      terracotta: "#B9713D",
      peach: "#F0D8A8",
      brown: "#7A4A2A",
    },
  },
  dussehra: {
    id: "dussehra",
    name: "Dussehra",
    hero: "/images/dussehra/hero.png",
    banner: "/images/dussehra/banner.png",
    decorative: "/images/dussehra/decorative.png",
    colors: {
      terracotta: "#8C4A3A",
      peach: "#E8CBA0",
      brown: "#5C3826",
    },
  },
  diwali: {
    id: "diwali",
    name: "Diwali",
    hero: "/images/diwali/hero.png",
    banner: "/images/diwali/banner.png",
    decorative: "/images/diwali/decorative.png",
    colors: {
      terracotta: "#B8875A",
      peach: "#F0E0B8",
      brown: "#4A3728",
    },
  },
};

export function getTheme(themeId) {
  return THEMES[themeId] || THEMES[DEFAULT_THEME_ID];
}