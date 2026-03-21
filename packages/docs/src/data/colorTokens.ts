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
  PRESSED_OVERLAY,
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
  // TDesign 风格新命名（车机端4类）
  TextColorTokens,
  BgColorTokens,
  BorderColorTokens,
  FunctionalColorLevel,
  FunctionalColorTokens,
  // 向后兼容别名
  ContentTokens,
  SurfaceTokens,
  BorderTokens,
  FeedbackTokens,
  FeedbackLevel,
} from "@tai-design/components";

export { getTokens as default } from "@tai-design/components";
