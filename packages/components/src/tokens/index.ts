export * from "./primitives";
export * from "./legacyColors";
export * from "./semanticTokens";
export * from "./action-token-migration";

import { createColors, type Colors } from "./legacyColors";
import { blueGray, type ThemeName } from "./primitives";

// ============================================================================
// Spacing
// ============================================================================

export const SPACING = {
  "2": 12,
  "3": 18,
  "4": 24,
  "5": 30,
  "6": 36,
} as const;

// ============================================================================
// Radius
// ============================================================================

export const RADIUS = {
  xl: 24,
  "2xl": 30,
  "4xl": 42,
} as const;

// ============================================================================
// Shadow
// ============================================================================

export const SHADOW = {
  xl: "0px 30px 24px -6px rgba(0, 0, 0, 0.03), 0px 30px 90px -24px rgba(0, 0, 0, 0.24)",
} as const;

// ============================================================================
// Legacy compat
// ============================================================================

export const BG_COLORS = {
  lightGray: blueGray[0],
  gray: blueGray[10],
  darkGray: blueGray[20],
  lightBlue: "#f0f6ff",
  blue50: "rgba(0, 82, 217, 0.05)",
} as const;

export const c = (isDark: boolean, themeName?: ThemeName) =>
  createColors(isDark, themeName);

export type ColorTokens = Colors;
