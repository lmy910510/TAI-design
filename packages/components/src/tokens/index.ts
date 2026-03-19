/**
 * TAI Design - Design Tokens
 * 设计系统基础变量定义
 */

// ============================================================================
// 颜色原始值
// ============================================================================

/** 黑色透明度色阶 */
export const BLACK = {
  6: "rgba(0, 0, 0, 0.06)",
  10: "rgba(0, 0, 0, 0.10)",
  24: "rgba(0, 0, 0, 0.24)",
  30: "rgba(0, 0, 0, 0.30)",
  42: "rgba(0, 0, 0, 0.42)",
  60: "rgba(0, 0, 0, 0.60)",
  72: "rgba(0, 0, 0, 0.72)",
  78: "rgba(0, 0, 0, 0.78)",
  80: "rgba(0, 0, 0, 0.80)",
  84: "rgba(0, 0, 0, 0.84)",
  92: "rgba(0, 0, 0, 0.92)",
  100: "rgba(0, 0, 0, 1)",
} as const;

/** 白色透明度色阶 */
export const WHITE = {
  6: "rgba(255, 255, 255, 0.06)",
  10: "rgba(255, 255, 255, 0.10)",
  12: "rgba(255, 255, 255, 0.12)",
  24: "rgba(255, 255, 255, 0.24)",
  30: "rgba(255, 255, 255, 0.30)",
  42: "rgba(255, 255, 255, 0.42)",
  60: "rgba(255, 255, 255, 0.60)",
  72: "rgba(255, 255, 255, 0.72)",
  78: "rgba(255, 255, 255, 0.78)",
  80: "rgba(255, 255, 255, 0.80)",
  84: "rgba(255, 255, 255, 0.84)",
  90: "rgba(255, 255, 255, 0.90)",
  92: "rgba(255, 255, 255, 0.92)",
  100: "rgba(255, 255, 255, 1)",
} as const;

/** 冷灰色色阶 */
export const COLD_GRAY = {
  0: "#F7F8FA",
  10: "#F3F4F7",
  70: "#697181",
  80: "#444C5C",
  90: "#32394A",
  100: "#1A1D28",
} as const;

/** 品牌色 */
export const BRAND = {
  primary: "#1A1D28",
} as const;

/** 功能色 */
export const FUNCTIONAL = {
  danger: {
    main: "#ff293b",
    6: "rgba(255, 41, 59, 0.06)",
    12: "rgba(255, 41, 59, 0.12)",
    18: "rgba(255, 41, 59, 0.18)",
    24: "rgba(255, 41, 59, 0.24)",
    30: "rgba(255, 41, 59, 0.30)",
  },
  notice: {
    main: "#fa6800",
    6: "rgba(250, 104, 0, 0.06)",
    12: "rgba(250, 104, 0, 0.12)",
    30: "rgba(250, 104, 0, 0.30)",
  },
  success: {
    main: "#00b578",
    6: "rgba(0, 181, 120, 0.06)",
    12: "rgba(0, 181, 120, 0.12)",
    30: "rgba(0, 181, 120, 0.30)",
    84: "rgba(6, 173, 120, 0.84)",
  },
  info: {
    main: "#697181",
    6: "rgba(105, 113, 129, 0.06)",
    12: "rgba(105, 113, 129, 0.12)",
    30: "rgba(105, 113, 129, 0.30)",
  },
} as const;

/** 静态颜色 */
export const STATIC = {
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
} as const;

/** 背景颜色 */
export const BG = {
  lightGray: "#f6f7fa",
  gray: "#f5f5f5",
} as const;

// ============================================================================
// 间距
// ============================================================================

/** 间距（6的倍数） */
export const SPACING = {
  /** 2n = 12px — 紧凑间距 */
  "2": 12,
  /** 3n = 18px — 常规小间距 */
  "3": 18,
  /** 4n = 24px — 常规间距 */
  "4": 24,
  /** 5n = 30px — 中等间距 */
  "5": 30,
  /** 6n = 36px — 较大间距 */
  "6": 36,
} as const;

// ============================================================================
// 圆角
// ============================================================================

/** 圆角 */
export const RADIUS = {
  /** 24px — 操作按钮/输入框 */
  xl: 24,
  /** 30px — 卡片/面板 */
  "2xl": 30,
  /** 42px — 卡片/弹窗/按钮 */
  "4xl": 42,
} as const;

// ============================================================================
// 阴影
// ============================================================================

/** 阴影 */
export const SHADOW = {
  /** XL - 超高层投影：全局弹窗、模态框 */
  xl: "0px 30px 24px -6px rgba(0, 0, 0, 0.03), 0px 30px 90px -24px rgba(0, 0, 0, 0.24)",
} as const;

// ============================================================================
// 语义化颜色工厂
// ============================================================================

/**
 * 根据主题模式生成语义化颜色
 */
export const createColors = (isDark: boolean) => ({
  text: {
    primary: isDark ? WHITE[92] : BLACK[92],
    secondary: isDark ? WHITE[72] : BLACK[72],
    tertiary: isDark ? WHITE[60] : BLACK[60],
    disabled: isDark ? WHITE[30] : BLACK[30],
    placeholder: isDark ? WHITE[42] : BLACK[42],
    label: isDark ? WHITE[60] : BLACK[60],
    inverse: isDark ? BLACK[92] : WHITE[92],
  },
  bg: {
    primary: isDark ? COLD_GRAY[100] : STATIC.white,
    secondary: isDark ? COLD_GRAY[90] : COLD_GRAY[0],
    tertiary: isDark ? COLD_GRAY[80] : COLD_GRAY[10],
    elevated: isDark ? COLD_GRAY[90] : STATIC.white,
    subtle: isDark ? COLD_GRAY[90] : BG.lightGray,
    muted: isDark ? COLD_GRAY[80] : BG.gray,
    overlay: isDark ? "rgba(0, 0, 0, 0.40)" : "rgba(0, 0, 0, 0.24)",
  },
  border: {
    default: isDark ? WHITE[24] : BLACK[24],
    subtle: isDark ? WHITE[12] : BLACK[10],
    hover: isDark ? WHITE[30] : BLACK[30],
    focus: isDark ? WHITE[100] : BLACK[100],
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
    },
    hover: {
      bg: isDark ? WHITE[6] : COLD_GRAY[10],
    },
  },
  button: {
    primary: {
      bg: isDark ? WHITE[92] : BLACK[92],
      bgHover: isDark ? WHITE[78] : BLACK[78],
      bgActive: isDark ? WHITE[30] : BLACK[30],
      bgDisabled: isDark ? WHITE[6] : BLACK[6],
      text: isDark ? BLACK[92] : WHITE[92],
      textHover: isDark ? BLACK[84] : WHITE[84],
      textActive: isDark ? BLACK[78] : WHITE[78],
      textDisabled: isDark ? WHITE[24] : BLACK[24],
      icon: isDark ? BLACK[92] : WHITE[92],
      iconHover: isDark ? BLACK[84] : WHITE[84],
      iconActive: isDark ? BLACK[78] : WHITE[78],
      iconDisabled: isDark ? WHITE[24] : BLACK[24],
    },
    secondary: {
      bg: isDark ? WHITE[6] : BLACK[6],
      bgHover: isDark ? WHITE[24] : BLACK[24],
      bgActive: isDark ? WHITE[6] : BLACK[6],
      bgDisabled: isDark ? WHITE[6] : BLACK[6],
      text: isDark ? WHITE[92] : BLACK[92],
      textHover: isDark ? WHITE[92] : BLACK[92],
      textActive: isDark ? WHITE[24] : BLACK[24],
      textDisabled: isDark ? WHITE[24] : BLACK[24],
    },
    tertiary: {
      bg: isDark ? WHITE[6] : BLACK[6],
      bgHover: isDark ? WHITE[24] : BLACK[24],
      bgActive: isDark ? WHITE[6] : BLACK[6],
      bgDisabled: isDark ? WHITE[6] : BLACK[6],
      text: isDark ? WHITE[92] : BLACK[92],
      textHover: isDark ? WHITE[92] : BLACK[92],
      textActive: isDark ? WHITE[24] : BLACK[24],
      textDisabled: isDark ? WHITE[24] : BLACK[24],
    },
    ghost: {
      bg: STATIC.transparent,
      bgHover: isDark ? WHITE[6] : BLACK[6],
      bgActive: STATIC.transparent,
      bgDisabled: STATIC.transparent,
      text: isDark ? WHITE[92] : BLACK[92],
      textHover: isDark ? WHITE[92] : BLACK[92],
      textActive: isDark ? WHITE[24] : BLACK[24],
      textDisabled: isDark ? WHITE[24] : BLACK[24],
      border: isDark ? WHITE[24] : BLACK[24],
    },
    danger: {
      bg: FUNCTIONAL.danger[18],
      bgHover: FUNCTIONAL.danger[30],
      bgActive: FUNCTIONAL.danger[6],
      bgDisabled: FUNCTIONAL.danger[6],
      text: FUNCTIONAL.danger.main,
      textHover: FUNCTIONAL.danger.main,
      textActive: FUNCTIONAL.danger[24],
      textDisabled: FUNCTIONAL.danger[24],
      icon: FUNCTIONAL.danger.main,
      iconHover: FUNCTIONAL.danger.main,
      iconActive: FUNCTIONAL.danger[24],
      iconDisabled: FUNCTIONAL.danger[24],
    },
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
    overlay: isDark ? "rgba(0, 0, 0, 0.40)" : "rgba(0, 0, 0, 0.24)",
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
      6: "rgba(105, 113, 129, 0.06)",
      12: "rgba(105, 113, 129, 0.12)",
      30: "rgba(105, 113, 129, 0.30)",
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
});

export type Colors = ReturnType<typeof createColors>;
