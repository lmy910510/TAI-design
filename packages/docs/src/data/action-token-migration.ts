/**
 * 🔄 Action Token Migration Guide
 * 
 * 本文件提供从旧 `button.*` token 到新 `action.*` token 的迁移映射和兼容层。
 * 
 * ## 迁移目标
 * - 所有组件统一使用 `action.*` 语义 token
 * - 删除旧的 `button.*` / `colors.button.*` 接口
 * - 统一命名规范：Pressed（而非 Active）
 * 
 * ## 迁移步骤
 * 1. 组件改为从 `getTokens()` 获取 token
 * 2. 将 `colors.button.xxx` 替换为 `tokens.action.xxx`
 * 3. 将 `bgActive` 等字段名替换为 `bgPressed`
 * 4. 测试所有按钮状态正常
 */

import { getTokens, type InteractiveActionToken, type ActionTokens } from './semanticTokens';
import type { ThemeName } from './primitives';

// ============================================================================
// 字段名映射（旧 -> 新）
// ============================================================================

/**
 * 字段名映射表
 * 旧命名使用 Active，新命名统一使用 Pressed
 */
export const fieldNameMapping = {
  // 背景色
  bg: 'bg',
  bgHover: 'bgHover',
  bgActive: 'bgPressed',      // ⚠️ 重命名
  bgDisabled: 'bgDisabled',
  
  // 文字色
  text: 'text',
  textHover: 'textHover',
  textActive: 'textPressed',  // ⚠️ 重命名
  textDisabled: 'textDisabled',
  
  // 图标色
  icon: 'icon',
  iconHover: 'iconHover',
  iconActive: 'iconPressed',  // ⚠️ 重命名
  iconDisabled: 'iconDisabled',
  
  // 边框色
  border: 'border',
  borderHover: 'borderHover',
  borderActive: 'borderPressed',  // ⚠️ 重命名
  borderDisabled: 'borderDisabled',
} as const;

// ============================================================================
// Variant 映射（旧 -> 新）
// ============================================================================

/**
 * 按钮 Variant 映射
 * 旧的 button.xxx 映射到新的 action.xxx
 * 
 * 注意：所有 variant 都完整映射，包括 tertiary
 */
export const variantMapping = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  ghost: 'ghost',
  danger: 'danger',
  // link 在旧版可能叫 text 或 link
  link: 'link',
  text: 'link',  // 兼容旧命名
} as const;

// ============================================================================
// 兼容层：旧接口 -> 新接口
// ============================================================================

/**
 * 旧 ButtonColorConfig 接口（供参考）
 */
export interface LegacyButtonColorConfig {
  bg: string;
  bgHover: string;
  bgActive: string;      // 旧命名
  bgDisabled: string;
  text: string;
  textHover: string;
  textActive: string;    // 旧命名
  textDisabled: string;
  icon?: string;
  iconHover?: string;
  iconActive?: string;   // 旧命名
  iconDisabled?: string;
  border?: string;
}

/**
 * 将新 action token 转换为旧 button 接口格式
 * 
 * ⚠️ 仅用于过渡期兼容，新代码请直接使用 action token
 * 
 * @param actionToken - 新的 action token
 * @returns 旧的 button color config 格式
 */
export function toLegacyButtonColorConfig(
  actionToken: InteractiveActionToken
): LegacyButtonColorConfig {
  return {
    bg: actionToken.bg,
    bgHover: actionToken.bgHover,
    bgActive: actionToken.bgPressed,
    bgDisabled: actionToken.bgDisabled,
    text: actionToken.text,
    textHover: actionToken.textHover,
    textActive: actionToken.textPressed,
    textDisabled: actionToken.textDisabled,
    icon: actionToken.icon,
    iconHover: actionToken.iconHover,
    iconActive: actionToken.iconPressed,
    iconDisabled: actionToken.iconDisabled,
    border: actionToken.border,
  };
}

/**
 * 获取兼容旧 API 的 button colors
 * 
 * ⚠️ 仅用于过渡期兼容，新代码请直接使用 `getTokens().action`
 * 
 * @param isDark - 是否深色模式
 * @param themeName - 主题色名称
 * @returns 旧格式的 button colors 对象
 */
export function getLegacyButtonColors(
  isDark: boolean,
  themeName?: ThemeName
): Record<string, LegacyButtonColorConfig> {
  const tokens = getTokens(isDark, themeName);
  const action = tokens.action;
  
  return {
    primary: toLegacyButtonColorConfig(action.primary),
    secondary: toLegacyButtonColorConfig(action.secondary),
    tertiary: toLegacyButtonColorConfig(action.tertiary),
    ghost: toLegacyButtonColorConfig(action.ghost),
    danger: toLegacyButtonColorConfig(action.danger),
  };
}

// ============================================================================
// 迁移检查工具
// ============================================================================

/**
 * 检查代码中是否使用了旧的 token 访问方式
 * 
 * 返回需要迁移的模式列表
 */
export const deprecatedPatterns = [
  // 旧的 button.* 访问
  'colors.button.',
  'c(isDark).button.',
  
  // 旧的 Active 命名
  'bgActive',
  'textActive', 
  'iconActive',
  'borderActive',
  
  // 直接使用主题色
  'theme.darkBlue[',
  'theme.teal[',
  'brand[',  // 应该通过 action 消费
  
  // 旧的状态色直接访问
  'FUNCTIONAL.danger',
  'status.red[',  // 应该通过 action.danger 消费
];

/**
 * 推荐的新访问方式
 */
export const recommendedPatterns = {
  // 按钮颜色
  '按钮背景色': 'tokens.action.{variant}.bg',
  '按钮文字色': 'tokens.action.{variant}.text',
  '按钮图标色': 'tokens.action.{variant}.icon',
  '按钮边框色': 'tokens.action.{variant}.border',
  
  // 状态获取
  'hover 状态': '{field}Hover',
  'pressed 状态': '{field}Pressed',
  'disabled 状态': '{field}Disabled',
};

// ============================================================================
// 完整迁移示例
// ============================================================================

/**
 * 迁移前后对比示例
 */
export const migrationExamples = {
  // 示例 1：获取主按钮背景色
  before1: `const colors = c(isDark);
const bg = colors.button.primary.bg;
const bgHover = colors.button.primary.bgHover;
const bgActive = colors.button.primary.bgActive;`,
  
  after1: `const tokens = getTokens(isDark, themeName);
const bg = tokens.action.primary.bg;
const bgHover = tokens.action.primary.bgHover;
const bgPressed = tokens.action.primary.bgPressed;`,
  
  // 示例 2：完整按钮样式
  before2: `function getVariantColors(colors, variant) {
  const btnColors = colors.button[variant];
  return {
    bg: btnColors.bg,
    bgHover: btnColors.bgHover,
    bgActive: btnColors.bgActive,
    // ...
  };
}`,
  
  after2: `function getVariantColors(tokens: SemanticTokens, variant: keyof ActionTokens) {
  // 直接使用，无需转换
  return tokens.action[variant];
}`,
  
  // 示例 3：危险按钮
  before3: `const dangerBg = FUNCTIONAL.danger[18];
const dangerText = FUNCTIONAL.danger.main;`,
  
  after3: `const tokens = getTokens(isDark);
const dangerBg = tokens.action.danger.bg;
const dangerText = tokens.action.danger.text;`,
};

export default {
  fieldNameMapping,
  variantMapping,
  toLegacyButtonColorConfig,
  getLegacyButtonColors,
  deprecatedPatterns,
  recommendedPatterns,
  migrationExamples,
};
