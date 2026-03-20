import { getTokens, type ActionTokens, type InteractiveActionToken } from "./semanticTokens";
import type { ThemeName } from "./primitives";

export const fieldNameMapping = {
  bg: "bg",
  bgHover: "bgHover",
  bgActive: "bgPressed",
  bgDisabled: "bgDisabled",
  text: "text",
  textHover: "textHover",
  textActive: "textPressed",
  textDisabled: "textDisabled",
  icon: "icon",
  iconHover: "iconHover",
  iconActive: "iconPressed",
  iconDisabled: "iconDisabled",
  border: "border",
  borderHover: "borderHover",
  borderActive: "borderPressed",
  borderDisabled: "borderDisabled",
} as const;

export const variantMapping = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  ghost: "ghost",
  danger: "danger",
  link: "link",
  text: "link",
} as const;

export interface LegacyButtonColorConfig {
  bg: string;
  bgHover: string;
  bgActive: string;
  bgDisabled: string;
  text: string;
  textHover: string;
  textActive: string;
  textDisabled: string;
  icon?: string;
  iconHover?: string;
  iconActive?: string;
  iconDisabled?: string;
  border?: string;
}

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

export const deprecatedPatterns = [
  "colors.button.",
  "c(isDark).button.",
  "bgActive",
  "textActive",
  "iconActive",
  "borderActive",
  "theme.darkBlue[",
  "theme.teal[",
  "brand[",
  "FUNCTIONAL.danger",
  "status.red[",
];

export const recommendedPatterns = {
  "按钮背景色": "tokens.action.{variant}.bg",
  "按钮文字色": "tokens.action.{variant}.text",
  "按钮图标色": "tokens.action.{variant}.icon",
  "按钮边框色": "tokens.action.{variant}.border",
  "hover 状态": "{field}Hover",
  "pressed 状态": "{field}Pressed",
  "disabled 状态": "{field}Disabled",
};

export const migrationExamples = {
  before1: `const colors = c(isDark);
const bg = colors.button.primary.bg;
const bgHover = colors.button.primary.bgHover;
const bgActive = colors.button.primary.bgActive;`,
  after1: `const tokens = getTokens(isDark, themeName);
const bg = tokens.action.primary.bg;
const bgHover = tokens.action.primary.bgHover;
const bgPressed = tokens.action.primary.bgPressed;`,
  before2: `function getVariantColors(colors, variant) {
  const btnColors = colors.button[variant];
  return {
    bg: btnColors.bg,
    bgHover: btnColors.bgHover,
    bgActive: btnColors.bgActive,
  };
}`,
  after2: `function getVariantColors(tokens: SemanticTokens, variant: keyof ActionTokens) {
  return tokens.action[variant];
}`,
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
