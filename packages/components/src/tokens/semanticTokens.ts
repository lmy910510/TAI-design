import { createColors, type LegacyActionToken } from "./legacyColors";
import {
  theme,
  FUNCTIONAL,
  STATIC,
  status,
  type ThemeName,
} from "./primitives";

export type ColorMode = "light" | "dark";

export interface SemanticTokensConfig {
  mode: ColorMode;
  themeName?: ThemeName;
}

export interface InteractiveActionToken {
  bg: string;
  bgHover: string;
  bgPressed: string;
  bgDisabled: string;
  text: string;
  textHover: string;
  textPressed: string;
  textDisabled: string;
  icon: string;
  iconHover: string;
  iconPressed: string;
  iconDisabled: string;
  border?: string;
  borderHover?: string;
  borderPressed?: string;
  borderDisabled?: string;
}

export interface ActionTokens {
  primary: InteractiveActionToken;
  secondary: InteractiveActionToken;
  tertiary: InteractiveActionToken;
  ghost: InteractiveActionToken;
  danger: InteractiveActionToken;
  link: InteractiveActionToken;
}

const DEFAULT_THEME: ThemeName = "darkBlue";

function toActionToken(
  token: ReturnType<typeof createColors>["button"][keyof ReturnType<typeof createColors>["button"]]
): InteractiveActionToken {
  return {
    bg: token.bg,
    bgHover: token.bgHover,
    bgPressed: token.bgPressed,
    bgDisabled: token.bgDisabled,
    text: token.text,
    textHover: token.textHover,
    textPressed: token.textPressed,
    textDisabled: token.textDisabled,
    icon: token.icon ?? token.text,
    iconHover: token.iconHover ?? token.textHover,
    iconPressed: token.iconPressed ?? token.textPressed,
    iconDisabled: token.iconDisabled ?? token.textDisabled,
    border: token.border,
    borderHover: token.borderHover,
    borderPressed: token.borderPressed,
    borderDisabled: token.borderDisabled,
  };
}

export function createSemanticTokens(config: SemanticTokensConfig) {
  const { mode, themeName = DEFAULT_THEME } = config;
  const isDark = mode === "dark";
  const colors = createColors(isDark, themeName);
  const accent = theme[themeName];

  return {
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      tertiary: colors.text.tertiary,
      placeholder: colors.text.placeholder,
      disabled: colors.text.disabled,
      inverse: colors.text.inverse,
      onBrand: colors.text.onBrand,
      link: colors.text.link,
      linkHover: colors.text.linkHover,
      success: colors.text.success,
      warning: colors.text.warning,
      error: colors.text.error,
      info: colors.text.info,
    },
    icon: {
      primary: colors.icon.primary,
      secondary: colors.icon.secondary,
      tertiary: colors.icon.tertiary,
      disabled: colors.icon.disabled,
      inverse: colors.icon.inverse,
      brand: colors.icon.brand,
      onBrand: colors.icon.onBrand,
      success: colors.icon.success,
      warning: colors.icon.warning,
      error: colors.icon.error,
      info: colors.icon.info,
    },
    surface: {
      page: colors.bg.primary,
      container: colors.bg.secondary,
      containerLow: colors.bg.tertiary,
      card: colors.bg.primary,
      cardElevated: colors.bg.elevated,
      subtle: colors.bg.subtle,
      muted: colors.bg.muted,
      overlay: colors.bg.overlay,
      scrim: isDark ? "rgba(0, 0, 0, 0.60)" : "rgba(0, 0, 0, 0.40)",
      inverse: isDark ? STATIC.white : colors.brand.primary,
      code: colors.bg.code,
      brandSubtle: colors.bg.brandSubtle,
      brand: accent[50],
      successSubtle: colors.bg.successSubtle,
      warningSubtle: colors.bg.warningSubtle,
      errorSubtle: colors.bg.errorSubtle,
      infoSubtle: colors.bg.infoSubtle,
      glass: colors.bg.glass,
    },
    border: {
      default: colors.border.default,
      subtle: colors.border.subtle,
      medium: colors.border.medium,
      strong: colors.border.strong,
      focus: colors.border.focus,
      inverse: colors.border.inverse,
      brand: colors.border.brand,
      success: colors.border.success,
      warning: colors.border.warning,
      error: colors.border.error,
      info: colors.border.info,
    },
    action: {
      primary: toActionToken(colors.button.primary),
      secondary: toActionToken(colors.button.secondary),
      tertiary: toActionToken(colors.button.tertiary),
      ghost: toActionToken(colors.button.ghost),
      danger: toActionToken(colors.button.danger),
      link: toActionToken(colors.button.link),
    },
    status: {
      success: {
        bg: FUNCTIONAL.success.main,
        bgSubtle: FUNCTIONAL.success[12],
        border: FUNCTIONAL.success.main,
        borderSubtle: FUNCTIONAL.success[30],
        text: FUNCTIONAL.success.main,
        icon: FUNCTIONAL.success.main,
      },
      warning: {
        bg: FUNCTIONAL.notice.main,
        bgSubtle: FUNCTIONAL.notice[12],
        border: FUNCTIONAL.notice.main,
        borderSubtle: FUNCTIONAL.notice[30],
        text: FUNCTIONAL.notice.main,
        icon: FUNCTIONAL.notice.main,
      },
      error: {
        bg: FUNCTIONAL.danger.main,
        bgSubtle: FUNCTIONAL.danger[12],
        border: FUNCTIONAL.danger.main,
        borderSubtle: FUNCTIONAL.danger[30],
        text: FUNCTIONAL.danger.main,
        icon: FUNCTIONAL.danger.main,
      },
      info: {
        bg: FUNCTIONAL.info.main,
        bgSubtle: FUNCTIONAL.info[12],
        border: FUNCTIONAL.info.main,
        borderSubtle: FUNCTIONAL.info[30],
        text: FUNCTIONAL.info.main,
        icon: FUNCTIONAL.info.main,
      },
      notice: {
        bg: status.yellow[50],
        bgSubtle: status.yellow[0],
        border: status.yellow[50],
        borderSubtle: status.yellow[20],
        text: status.yellow[70],
        icon: status.yellow[50],
      },
    },
    state: {
      hover: {
        bg: colors.state.hover.bg,
        overlay: colors.state.hover.overlay,
      },
      active: {
        bg: colors.state.active.bg,
        overlay: colors.state.active.overlay,
      },
      selected: {
        bg: colors.state.selected.bg,
        bgSubtle: colors.state.selected.bgSubtle,
        border: colors.state.selected.border,
        text: colors.state.selected.text,
      },
      focused: {
        ring: colors.state.focused.ring,
        ringOffset: colors.state.focused.ringOffset,
      },
      disabled: {
        bg: colors.state.disabled.bg,
        text: colors.state.disabled.text,
        border: colors.state.disabled.border,
      },
    },
    special: {
      divider: {
        default: colors.border.default,
        subtle: colors.border.subtle,
        strong: colors.border.strong,
      },
      shadow: {
        sm: "rgba(0, 0, 0, 0.05)",
        md: "rgba(0, 0, 0, 0.10)",
        lg: "rgba(0, 0, 0, 0.15)",
        xl: "rgba(0, 0, 0, 0.20)",
      },
      skeleton: {
        base: isDark ? colors.bg.tertiary : colors.bg.secondary,
        highlight: isDark ? colors.bg.muted : colors.bg.primary,
      },
    },
    _meta: {
      mode,
      themeName,
      brandColor: accent[50],
    },
  };
}

export const lightTokens = createSemanticTokens({ mode: "light" });
export const darkTokens = createSemanticTokens({ mode: "dark" });

export type SemanticTokens = ReturnType<typeof createSemanticTokens>;

export function getTokens(isDark: boolean, themeName?: ThemeName): SemanticTokens {
  return createSemanticTokens({
    mode: isDark ? "dark" : "light",
    themeName,
  });
}
