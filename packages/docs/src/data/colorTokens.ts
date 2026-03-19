/**
 * 🎨 TAI Design System - Color Tokens (统一入口)
 * 
 * 这是颜色 token 系统的统一导出入口。
 * 
 * 架构说明：
 * ┌─────────────────────────────────────────────────────────────────┐
 * │  Component Layer (组件层)                                        │
 * │  └── 组件直接使用语义 Token                                       │
 * ├─────────────────────────────────────────────────────────────────┤
 * │  Semantic Layer (语义层) - semanticTokens.ts                     │
 * │  └── text / icon / surface / border / action / status          │
 * ├─────────────────────────────────────────────────────────────────┤
 * │  Primitive Layer (基础层) - primitives.ts                        │
 * │  └── alpha / blueGray / status / theme / static                │
 * └─────────────────────────────────────────────────────────────────┘
 * 
 * 使用方式：
 * 
 * @example
 * ```tsx
 * // 推荐：使用语义化 Token
 * import { getTokens } from '@/data/colorTokens';
 * 
 * function MyComponent() {
 *   const { isDark } = useOutletContext();
 *   const tokens = getTokens(isDark);
 *   
 *   return (
 *     <div style={{ 
 *       color: tokens.text.primary,
 *       backgroundColor: tokens.surface.card,
 *       border: `1px solid ${tokens.border.default}`
 *     }}>
 *       Hello World
 *     </div>
 *   );
 * }
 * ```
 * 
 * @example
 * ```tsx
 * // 需要原始色板时
 * import { primitives } from '@/data/colorTokens';
 * 
 * // 访问透明度色
 * const overlay = primitives.alpha.black[60];
 * 
 * // 访问蓝灰色
 * const cardBg = primitives.blueGray[0];
 * 
 * // 访问主题色
 * const brandColor = primitives.theme.darkBlue[50];
 * ```
 */

// ============================================================================
// 从基础层导入
// ============================================================================

export {
  // 基础色板
  primitives,
  alpha,
  blueGray,
  status,
  theme,
  staticColors,
  
  // 单独导出各功能色
  statusRed,
  statusOrange,
  statusYellow,
  statusGreen,
  statusBlue,
  
  // 单独导出各主题色
  themeYellowGreen,
  themeGrassGreen,
  themeMossGreen,
  themeTeal,
  themeCyan,
  themeLightBlue,
  themeDarkBlue,
  themeIndigo,
  themeDarkPurple,
  themePurple,
  themeCopper,
  themeFuchsia,
  themePink,
  
  // 类型
  type AlphaScale,
  type BlueGrayScale,
  type StatusScale,
  type ThemeScale,
  type ThemeName,
  type StatusName,
  type Primitives,
} from './primitives';

// ============================================================================
// 从语义层导入
// ============================================================================

export {
  // 创建函数
  createSemanticTokens,
  getTokens,
  
  // 预设实例
  lightTokens,
  darkTokens,
  
  // 类型
  type ColorMode,
  type SemanticTokensConfig,
  type SemanticTokens,
  type InteractiveActionToken,
  type ActionTokens,
} from './semanticTokens';

// ============================================================================
// 迁移工具导出
// ============================================================================

export {
  fieldNameMapping,
  variantMapping,
  toLegacyButtonColorConfig,
  getLegacyButtonColors,
  deprecatedPatterns,
  recommendedPatterns,
  migrationExamples,
  type LegacyButtonColorConfig,
} from './action-token-migration';

// ============================================================================
// 兼容旧 API（逐步废弃）
// ============================================================================

import { alpha, blueGray, staticColors, status } from './primitives';
import { getTokens } from './semanticTokens';

/**
 * @deprecated 请使用 `primitives.alpha.black` 代替
 */
export const BLACK = {
  5: alpha.black[5],
  6: alpha.black[6],
  8: alpha.black[8],
  10: alpha.black[10],
  12: alpha.black[12],
  20: alpha.black[20],
  24: alpha.black[24],
  26: 'rgba(0, 0, 0, 0.26)',
  30: alpha.black[30],
  40: alpha.black[40],
  50: alpha.black[50],
  60: alpha.black[60],
  70: alpha.black[70],
  80: alpha.black[80],
  90: alpha.black[90],
  100: alpha.black[100],
} as const;

/**
 * @deprecated 请使用 `primitives.alpha.white` 代替
 */
export const WHITE = {
  6: alpha.white[6],
  10: alpha.white[10],
  12: alpha.white[12],
  20: alpha.white[20],
  24: alpha.white[24],
  30: alpha.white[30],
  40: alpha.white[40],
  42: alpha.white[42],
  50: alpha.white[50],
  60: alpha.white[60],
  70: alpha.white[70],
  80: alpha.white[80],
  90: alpha.white[90],
  100: alpha.white[100],
} as const;

/**
 * @deprecated 请使用 `primitives.blueGray` 代替
 */
export const COLD_GRAY = blueGray;

/**
 * @deprecated 请使用 `primitives.status` 中的对应颜色代替
 */
export const BRAND = {
  blue: '#0052D9',
  green: status.green[50],
  red: status.red[50],
} as const;

/**
 * @deprecated 请使用 `primitives.static` 代替
 */
export const STATIC = staticColors;

/**
 * @deprecated 请使用 `primitives.blueGray` 或语义 token 代替
 */
export const BG_COLORS = {
  lightGray: blueGray[0],
  gray: blueGray[10],
  darkGray: blueGray[20],
  lightBlue: '#f0f6ff',
  blue50: 'rgba(0, 82, 217, 0.05)',
} as const;

/**
 * @deprecated 请使用 `getTokens(isDark)` 代替
 * 
 * 这个函数保留是为了兼容现有代码，新代码请使用 `getTokens`
 */
export const c = (isDark: boolean) => {
  const tokens = getTokens(isDark);
  
  // 将新 token 结构映射回旧结构以保持兼容
  return {
    // 文字颜色
    text: {
      primary: tokens.text.primary,
      secondary: tokens.text.secondary,
      tertiary: tokens.text.tertiary,
      disabled: tokens.text.disabled,
      placeholder: tokens.text.placeholder,
      label: tokens.text.tertiary,
    },
    
    // 背景颜色
    bg: {
      primary: tokens.surface.page,
      secondary: tokens.surface.container,
      tertiary: tokens.surface.muted,
      elevated: tokens.surface.cardElevated,
      subtle: tokens.surface.subtle,
      muted: tokens.surface.muted,
      placeholder: blueGray[isDark ? 80 : 20],
      glass: tokens.surface.glass,
      overlay: tokens.surface.overlay,
      code: tokens.surface.code,
    },
    
    // 边框颜色
    border: {
      default: tokens.border.default,
      hover: tokens.border.medium,
      focus: tokens.border.focus,
      subtle: tokens.border.subtle,
      medium: tokens.border.medium,
      strong: tokens.border.strong,
    },
    
    // 交互元素
    interactive: {
      default: isDark ? alpha.white[100] : alpha.black[100],
      hover: isDark ? alpha.white[90] : alpha.black[90],
      active: isDark ? alpha.white[80] : alpha.black[80],
      disabled: tokens.state.disabled.text,
    },
    
    // 状态颜色
    state: {
      selected: {
        bg: tokens.state.selected.bg,
        border: tokens.state.selected.border,
        text: tokens.state.selected.text,
      },
      hover: {
        bg: tokens.state.hover.bg,
      },
    },
    
    // 品牌色
    brand: BRAND,
    
    // 静态颜色
    static: STATIC,
  };
};

/**
 * @deprecated 请使用 `SemanticTokens` 类型代替
 */
export type ColorTokens = ReturnType<typeof c>;

// ============================================================================
// 默认导出
// ============================================================================

export default getTokens;
