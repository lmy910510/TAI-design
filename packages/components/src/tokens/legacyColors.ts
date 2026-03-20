import {
  alpha,
  BLACK,
  WHITE,
  blueGray,
  COLD_GRAY,
  theme,
  BRAND,
  FUNCTIONAL,
  STATIC,
  BG,
  type ThemeName,
} from "./primitives";

const DEFAULT_THEME: ThemeName = "darkBlue";

export type LegacyButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "ghost"
  | "danger"
  | "link";

export interface LegacyActionToken {
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
  bgActive: string;
  textActive: string;
  iconActive: string;
  borderActive?: string;
}

type LegacyActionTokenInput = Omit<
  LegacyActionToken,
  "bgActive" | "textActive" | "iconActive" | "borderActive"
>;

function withPressedAliases(config: LegacyActionTokenInput): LegacyActionToken {
  return {
    ...config,
    bgActive: config.bgPressed,
    textActive: config.textPressed,
    iconActive: config.iconPressed,
    borderActive: config.borderPressed,
  };
}

/**
 * 根据主题模式生成兼容现有组件的颜色对象。
 * 这是组件运行时的主色源，`getTokens()` 会在此基础上派生更丰富的语义 token。
 */
export const createColors = (
  isDark: boolean,
  themeName: ThemeName = DEFAULT_THEME
) => {
  const accent = theme[themeName];

  const button: Record<LegacyButtonVariant, LegacyActionToken> = {
    primary: withPressedAliases({
      bg: isDark ? WHITE[92] : BLACK[92],
      bgHover: isDark ? WHITE[78] : BLACK[78],
      bgPressed: isDark ? WHITE[30] : BLACK[30],
      bgDisabled: isDark ? WHITE[6] : BLACK[6],
      text: isDark ? BLACK[92] : WHITE[92],
      textHover: isDark ? BLACK[84] : WHITE[84],
      textPressed: isDark ? BLACK[78] : WHITE[78],
      textDisabled: isDark ? WHITE[24] : BLACK[24],
      icon: isDark ? BLACK[92] : WHITE[92],
      iconHover: isDark ? BLACK[84] : WHITE[84],
      iconPressed: isDark ? BLACK[78] : WHITE[78],
      iconDisabled: isDark ? WHITE[24] : BLACK[24],
    }),
    secondary: withPressedAliases({
      bg: isDark ? WHITE[6] : BLACK[6],
      bgHover: isDark ? WHITE[24] : BLACK[24],
      bgPressed: isDark ? WHITE[6] : BLACK[6],
      bgDisabled: isDark ? WHITE[6] : BLACK[6],
      text: isDark ? WHITE[92] : BLACK[92],
      textHover: isDark ? WHITE[92] : BLACK[92],
      textPressed: isDark ? WHITE[24] : BLACK[24],
      textDisabled: isDark ? WHITE[24] : BLACK[24],
      icon: isDark ? WHITE[92] : BLACK[92],
      iconHover: isDark ? WHITE[92] : BLACK[92],
      iconPressed: isDark ? WHITE[24] : BLACK[24],
      iconDisabled: isDark ? WHITE[24] : BLACK[24],
      border: isDark ? WHITE[24] : BLACK[24],
      borderHover: isDark ? WHITE[30] : BLACK[30],
      borderPressed: isDark ? WHITE[24] : BLACK[24],
      borderDisabled: isDark ? WHITE[12] : BLACK[10],
    }),
    tertiary: withPressedAliases({
      bg: isDark ? WHITE[6] : BLACK[6],
      bgHover: isDark ? WHITE[24] : BLACK[24],
      bgPressed: isDark ? WHITE[6] : BLACK[6],
      bgDisabled: isDark ? WHITE[6] : BLACK[6],
      text: isDark ? WHITE[92] : BLACK[92],
      textHover: isDark ? WHITE[92] : BLACK[92],
      textPressed: isDark ? WHITE[24] : BLACK[24],
      textDisabled: isDark ? WHITE[24] : BLACK[24],
      icon: isDark ? WHITE[92] : BLACK[92],
      iconHover: isDark ? WHITE[92] : BLACK[92],
      iconPressed: isDark ? WHITE[24] : BLACK[24],
      iconDisabled: isDark ? WHITE[24] : BLACK[24],
    }),
    ghost: withPressedAliases({
      bg: STATIC.transparent,
      bgHover: isDark ? WHITE[6] : BLACK[6],
      bgPressed: STATIC.transparent,
      bgDisabled: STATIC.transparent,
      text: isDark ? WHITE[92] : BLACK[92],
      textHover: isDark ? WHITE[92] : BLACK[92],
      textPressed: isDark ? WHITE[24] : BLACK[24],
      textDisabled: isDark ? WHITE[24] : BLACK[24],
      icon: isDark ? WHITE[92] : BLACK[92],
      iconHover: isDark ? WHITE[92] : BLACK[92],
      iconPressed: isDark ? WHITE[24] : BLACK[24],
      iconDisabled: isDark ? WHITE[24] : BLACK[24],
      border: isDark ? WHITE[24] : BLACK[24],
      borderHover: isDark ? WHITE[24] : BLACK[24],
      borderPressed: isDark ? WHITE[24] : BLACK[24],
      borderDisabled: isDark ? WHITE[12] : BLACK[10],
    }),
    danger: withPressedAliases({
      bg: FUNCTIONAL.danger[18],
      bgHover: FUNCTIONAL.danger[30],
      bgPressed: FUNCTIONAL.danger[6],
      bgDisabled: FUNCTIONAL.danger[6],
      text: FUNCTIONAL.danger.main,
      textHover: FUNCTIONAL.danger.main,
      textPressed: FUNCTIONAL.danger[24],
      textDisabled: FUNCTIONAL.danger[24],
      icon: FUNCTIONAL.danger.main,
      iconHover: FUNCTIONAL.danger.main,
      iconPressed: FUNCTIONAL.danger[24],
      iconDisabled: FUNCTIONAL.danger[24],
    }),
    link: withPressedAliases({
      bg: STATIC.transparent,
      bgHover: STATIC.transparent,
      bgPressed: STATIC.transparent,
      bgDisabled: STATIC.transparent,
      text: isDark ? accent[40] : accent[50],
      textHover: isDark ? accent[30] : accent[60],
      textPressed: isDark ? accent[50] : accent[70],
      textDisabled: isDark ? WHITE[24] : BLACK[24],
      icon: isDark ? accent[40] : accent[50],
      iconHover: isDark ? accent[30] : accent[60],
      iconPressed: isDark ? accent[50] : accent[70],
      iconDisabled: isDark ? WHITE[24] : BLACK[24],
    }),
  };

  return {
    text: {
      primary: isDark ? WHITE[92] : BLACK[92],
      secondary: isDark ? WHITE[72] : BLACK[72],
      tertiary: isDark ? WHITE[60] : BLACK[60],
      disabled: isDark ? WHITE[30] : BLACK[30],
      placeholder: isDark ? WHITE[42] : BLACK[42],
      label: isDark ? WHITE[60] : BLACK[60],
      inverse: isDark ? BLACK[92] : WHITE[92],
      onBrand: STATIC.white,
      link: isDark ? accent[40] : accent[50],
      linkHover: isDark ? accent[30] : accent[60],
      success: FUNCTIONAL.success.main,
      warning: FUNCTIONAL.notice.main,
      error: FUNCTIONAL.danger.main,
      info: FUNCTIONAL.info.main,
    },
    icon: {
      primary: isDark ? WHITE[92] : BLACK[92],
      secondary: isDark ? WHITE[60] : BLACK[60],
      tertiary: isDark ? WHITE[42] : BLACK[42],
      disabled: isDark ? WHITE[30] : BLACK[30],
      inverse: isDark ? BLACK[92] : WHITE[92],
      brand: accent[50],
      onBrand: STATIC.white,
      success: FUNCTIONAL.success.main,
      warning: FUNCTIONAL.notice.main,
      error: FUNCTIONAL.danger.main,
      info: FUNCTIONAL.info.main,
    },
    bg: {
      primary: isDark ? COLD_GRAY[100] : STATIC.white,
      secondary: isDark ? COLD_GRAY[90] : COLD_GRAY[0],
      tertiary: isDark ? COLD_GRAY[80] : COLD_GRAY[10],
      elevated: isDark ? COLD_GRAY[90] : STATIC.white,
      subtle: isDark ? COLD_GRAY[90] : BG.lightGray,
      muted: isDark ? COLD_GRAY[80] : BG.gray,
      placeholder: isDark ? blueGray[80] : blueGray[20],
      glass: isDark ? "rgba(26, 29, 40, 0.80)" : "rgba(255, 255, 255, 0.80)",
      overlay: isDark ? alpha.black[40] : alpha.black[24],
      code: isDark ? alpha.white[8] : alpha.black[5],
      brandSubtle: isDark ? `${accent[50]}1A` : accent[0],
      successSubtle: FUNCTIONAL.success[12],
      warningSubtle: FUNCTIONAL.notice[12],
      errorSubtle: FUNCTIONAL.danger[12],
      infoSubtle: FUNCTIONAL.info[12],
    },
    border: {
      default: isDark ? WHITE[24] : BLACK[24],
      subtle: isDark ? WHITE[12] : BLACK[10],
      hover: isDark ? WHITE[30] : BLACK[30],
      focus: isDark ? WHITE[100] : BLACK[100],
      medium: isDark ? alpha.white[20] : alpha.black[20],
      strong: isDark ? alpha.white[40] : alpha.black[40],
      inverse: isDark ? alpha.black[20] : alpha.white[20],
      brand: accent[50],
      success: FUNCTIONAL.success.main,
      warning: FUNCTIONAL.notice.main,
      error: FUNCTIONAL.danger.main,
      info: FUNCTIONAL.info.main,
    },
    interactive: {
      default: isDark ? WHITE[92] : BLACK[92],
      hover: isDark ? WHITE[78] : BLACK[78],
      active: isDark ? WHITE[30] : BLACK[30],
      disabled: isDark ? WHITE[24] : BLACK[24],
    },
    state: {
      selected: {
        bg: isDark ? WHITE[10] : BLACK[10],
        border: isDark ? WHITE[100] : BLACK[100],
        text: isDark ? WHITE[100] : BLACK[100],
        bgSubtle: isDark ? `${accent[50]}26` : accent[0],
      },
      hover: {
        bg: isDark ? WHITE[6] : COLD_GRAY[10],
        overlay: isDark ? WHITE[6] : BLACK[5],
      },
      active: {
        bg: isDark ? WHITE[12] : BLACK[8],
        overlay: isDark ? WHITE[12] : BLACK[8],
      },
      focused: {
        ring: accent[50],
        ringOffset: isDark ? COLD_GRAY[100] : STATIC.white,
      },
      disabled: {
        bg: isDark ? COLD_GRAY[80] : COLD_GRAY[10],
        text: isDark ? WHITE[30] : BLACK[30],
        border: isDark ? WHITE[12] : BLACK[12],
      },
    },
    button: {
      primary: withPressedAliases({
        bg: isDark ? WHITE[92] : BLACK[92],
        bgHover: isDark ? WHITE[78] : BLACK[78],
        bgPressed: isDark ? WHITE[30] : BLACK[30],
        bgDisabled: isDark ? WHITE[6] : BLACK[6],
        text: isDark ? BLACK[92] : WHITE[92],
        textHover: isDark ? BLACK[84] : WHITE[84],
        textPressed: isDark ? BLACK[78] : WHITE[78],
        textDisabled: isDark ? WHITE[24] : BLACK[24],
        icon: isDark ? BLACK[92] : WHITE[92],
        iconHover: isDark ? BLACK[84] : WHITE[84],
        iconPressed: isDark ? BLACK[78] : WHITE[78],
        iconDisabled: isDark ? WHITE[24] : BLACK[24],
      }),
      secondary: withPressedAliases({
        bg: isDark ? WHITE[6] : BLACK[6],
        bgHover: isDark ? WHITE[24] : BLACK[24],
        bgPressed: isDark ? WHITE[6] : BLACK[6],
        bgDisabled: isDark ? WHITE[6] : BLACK[6],
        text: isDark ? WHITE[92] : BLACK[92],
        textHover: isDark ? WHITE[92] : BLACK[92],
        textPressed: isDark ? WHITE[24] : BLACK[24],
        textDisabled: isDark ? WHITE[24] : BLACK[24],
        icon: isDark ? WHITE[92] : BLACK[92],
        iconHover: isDark ? WHITE[92] : BLACK[92],
        iconPressed: isDark ? WHITE[24] : BLACK[24],
        iconDisabled: isDark ? WHITE[24] : BLACK[24],
        border: isDark ? WHITE[24] : BLACK[24],
        borderHover: isDark ? WHITE[30] : BLACK[30],
        borderPressed: isDark ? WHITE[24] : BLACK[24],
        borderDisabled: isDark ? WHITE[12] : BLACK[10],
      }),
      tertiary: withPressedAliases({
        bg: isDark ? WHITE[6] : BLACK[6],
        bgHover: isDark ? WHITE[24] : BLACK[24],
        bgPressed: isDark ? WHITE[6] : BLACK[6],
        bgDisabled: isDark ? WHITE[6] : BLACK[6],
        text: isDark ? WHITE[92] : BLACK[92],
        textHover: isDark ? WHITE[92] : BLACK[92],
        textPressed: isDark ? WHITE[24] : BLACK[24],
        textDisabled: isDark ? WHITE[24] : BLACK[24],
        icon: isDark ? WHITE[92] : BLACK[92],
        iconHover: isDark ? WHITE[92] : BLACK[92],
        iconPressed: isDark ? WHITE[24] : BLACK[24],
        iconDisabled: isDark ? WHITE[24] : BLACK[24],
      }),
      ghost: withPressedAliases({
        bg: STATIC.transparent,
        bgHover: isDark ? WHITE[6] : BLACK[6],
        bgPressed: STATIC.transparent,
        bgDisabled: STATIC.transparent,
        text: isDark ? WHITE[92] : BLACK[92],
        textHover: isDark ? WHITE[92] : BLACK[92],
        textPressed: isDark ? WHITE[24] : BLACK[24],
        textDisabled: isDark ? WHITE[24] : BLACK[24],
        icon: isDark ? WHITE[92] : BLACK[92],
        iconHover: isDark ? WHITE[92] : BLACK[92],
        iconPressed: isDark ? WHITE[24] : BLACK[24],
        iconDisabled: isDark ? WHITE[24] : BLACK[24],
        border: isDark ? WHITE[24] : BLACK[24],
        borderHover: isDark ? WHITE[24] : BLACK[24],
        borderPressed: isDark ? WHITE[24] : BLACK[24],
        borderDisabled: isDark ? WHITE[12] : BLACK[10],
      }),
      danger: withPressedAliases({
        bg: FUNCTIONAL.danger[18],
        bgHover: FUNCTIONAL.danger[30],
        bgPressed: FUNCTIONAL.danger[6],
        bgDisabled: FUNCTIONAL.danger[6],
        text: FUNCTIONAL.danger.main,
        textHover: FUNCTIONAL.danger.main,
        textPressed: FUNCTIONAL.danger[24],
        textDisabled: FUNCTIONAL.danger[24],
        icon: FUNCTIONAL.danger.main,
        iconHover: FUNCTIONAL.danger.main,
        iconPressed: FUNCTIONAL.danger[24],
        iconDisabled: FUNCTIONAL.danger[24],
      }),
      link: withPressedAliases({
        bg: STATIC.transparent,
        bgHover: STATIC.transparent,
        bgPressed: STATIC.transparent,
        bgDisabled: STATIC.transparent,
        text: isDark ? accent[40] : accent[50],
        textHover: isDark ? accent[30] : accent[60],
        textPressed: isDark ? accent[50] : accent[70],
        textDisabled: isDark ? WHITE[24] : BLACK[24],
        icon: isDark ? accent[40] : accent[50],
        iconHover: isDark ? accent[30] : accent[60],
        iconPressed: isDark ? accent[50] : accent[70],
        iconDisabled: isDark ? WHITE[24] : BLACK[24],
      }),
    },
    input: {
      bg: isDark ? "#2a2a2a" : STATIC.white,
      text: isDark ? WHITE[92] : BLACK[92],
      placeholder: isDark ? WHITE[42] : BLACK[42],
      ring: isDark ? STATIC.white : STATIC.black,
      clearIcon: isDark ? WHITE[24] : BLACK[24],
    },
    dialog: {
      bg: isDark ? COLD_GRAY[90] : STATIC.white,
      title: isDark ? WHITE[92] : BLACK[92],
      content: isDark ? WHITE[84] : BLACK[84],
      overlay: isDark ? alpha.black[40] : alpha.black[24],
    },
    toast: {
      bg: COLD_GRAY[80],
      text: WHITE[90],
    },
    tips: {
      bg: isDark ? COLD_GRAY[90] : COLD_GRAY[10],
      text: isDark ? WHITE[92] : BLACK[92],
      border: isDark ? WHITE[24] : BLACK[10],
    },
    push: {
      bg: isDark ? COLD_GRAY[90] : STATIC.white,
      title: isDark ? WHITE[92] : BLACK[92],
      content: isDark ? WHITE[72] : BLACK[72],
    },
    switch: {
      on: isDark ? WHITE[80] : BLACK[80],
      off: isDark ? WHITE[24] : BLACK[24],
      thumb: STATIC.white,
    },
    checkbox: {
      checked: isDark ? WHITE[100] : BLACK[100],
      unchecked: isDark ? WHITE[24] : BLACK[24],
      checkmark: isDark ? BLACK[100] : WHITE[100],
    },
    tag: {
      danger: FUNCTIONAL.danger,
      notice: FUNCTIONAL.notice,
      success: FUNCTIONAL.success,
      info: FUNCTIONAL.info,
      default: {
        main: COLD_GRAY[70],
        6: "rgba(108, 112, 120, 0.06)",
        12: "rgba(108, 112, 120, 0.12)",
        30: "rgba(108, 112, 120, 0.30)",
      },
    },
    list: {
      bg: isDark ? COLD_GRAY[90] : STATIC.white,
      title: isDark ? WHITE[92] : BLACK[92],
      description: isDark ? WHITE[60] : BLACK[60],
      border: isDark ? WHITE[10] : "#f0f0f0",
      arrow: isDark ? WHITE[42] : BLACK[42],
    },
    loading: {
      spinner: BRAND.primary,
      text: isDark ? WHITE[72] : BLACK[72],
    },
    brand: BRAND,
    functional: FUNCTIONAL,
    static: STATIC,
  };
};

export type Colors = ReturnType<typeof createColors>;
