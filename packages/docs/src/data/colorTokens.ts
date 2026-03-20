/**
 * TAI Design token 兼容入口。
 * 真实的 token 单一事实源已经收敛到 `@tai-design/components`。
 * docs 侧保留该文件，只负责转发与兼容历史导入路径。
 */

export {
  alpha,
  BLACK,
  WHITE,
  blueGray,
  COLD_GRAY,
  status,
  theme,
  staticColors,
  BRAND,
  FUNCTIONAL,
  STATIC,
  BG,
  BG_COLORS,
  primitives,
  SPACING,
  RADIUS,
  SHADOW,
  createColors,
  c,
  createSemanticTokens,
  getTokens,
  lightTokens,
  darkTokens,
  fieldNameMapping,
  variantMapping,
  toLegacyButtonColorConfig,
  getLegacyButtonColors,
  deprecatedPatterns,
  recommendedPatterns,
  migrationExamples,
} from "@tai-design/components";

export type {
  AlphaScale,
  BlueGrayScale,
  StatusScale,
  ThemeScale,
  ThemeName,
  StatusName,
  Primitives,
  Colors,
  ColorTokens,
  ColorMode,
  SemanticTokensConfig,
  SemanticTokens,
  InteractiveActionToken,
  ActionTokens,
  LegacyButtonColorConfig,
} from "@tai-design/components";

export { getTokens as default } from "@tai-design/components";
