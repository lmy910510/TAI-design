export * from "./primitives";
export * from "./semanticTokens";

// @deprecated — 保留 createColors 和 Colors 供过渡
export { createColors, type Colors } from "./legacyColors";

import { getTokens, type SemanticTokens } from "./semanticTokens";
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
// Typography — 字号 / 字重 / 行高
// ============================================================================

/**
 * 字号阶梯（px）— 车机端基础字号偏大
 *
 * | Token | 值   | 典型用途                        |
 * |-------|------|---------------------------------|
 * | xs    | 18   | 倍速标签、Badge(small)           |
 * | sm    | 20   | 滑块数值(small)、加载文字(small)  |
 * | md    | 22   | Tag(small)、副标题(mini)、时间标签 |
 * | base  | 24   | 默认正文、按钮(small)、图标文字    |
 * | lg    | 26   | Tag(large)、ActionSheet 描述     |
 * | xl    | 28   | 输入提示、列表描述、正文           |
 * | 2xl   | 30   | 按钮(large)、Tabs(large)、标题(mini) |
 * | 3xl   | 32   | 按钮(xlarge)、Toast 文字、主标题   |
 * | 4xl   | 36   | Dialog 标题                      |
 * | 5xl   | 42   | 大图标、AudioPlayer 全屏标题       |
 */
export const FONT_SIZE = {
  xs: 18,
  sm: 20,
  md: 22,
  base: 24,
  lg: 26,
  xl: 28,
  "2xl": 30,
  "3xl": 32,
  "4xl": 36,
  "5xl": 42,
} as const;

/**
 * 字重
 *
 * | Token    | 值  | 典型用途            |
 * |----------|-----|---------------------|
 * | regular  | 400 | Tabs 非活跃项        |
 * | medium   | 500 | 按钮、Tag、常规交互   |
 * | semibold | 600 | 标题、Badge、强调     |
 * | bold     | 700 | AudioPlayer 播放器标题 |
 */
export const FONT_WEIGHT = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

/**
 * 行高（无单位倍数）
 *
 * | Token   | 值  | 典型用途                  |
 * |---------|-----|---------------------------|
 * | none    | 1   | 单行标签（Badge/Tag/按钮） |
 * | tight   | 1.2 | 播放器标题、紧凑标题       |
 * | snug    | 1.3 | Dialog 标题               |
 * | normal  | 1.4 | 列表描述、Checkbox 标签    |
 * | relaxed | 1.5 | 正文、Toast、列表标题      |
 * | loose   | 1.6 | Comment 正文、长文本       |
 */
export const LINE_HEIGHT = {
  none: 1,
  tight: 1.2,
  snug: 1.3,
  normal: 1.4,
  relaxed: 1.5,
  loose: 1.6,
} as const;

// ============================================================================
// Legacy compat — 以下导出均已废弃，请勿在新代码中使用
// ============================================================================

/**
 * @deprecated 请直接使用 `tokens.bgColor.*` 语义色或 `blueGray` 色板。
 * 此映射将在下一个大版本移除。
 */
export const BG_COLORS = {
  lightGray: blueGray[0],
  gray: blueGray[10],
  darkGray: blueGray[20],
  lightBlue: "#f0f6ff",
  blue50: "rgba(0, 82, 217, 0.05)",
} as const;

/** @deprecated 请使用 getTokens(isDark) */
export const c = (isDark: boolean, themeName?: ThemeName): SemanticTokens =>
  getTokens(isDark, themeName);

/** @deprecated 请使用 SemanticTokens 类型 */
export type ColorTokens = SemanticTokens;
