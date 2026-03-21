import {
  alpha,
  BRAND,
  FUNCTIONAL,
  STATIC,
  WHITE,
  BLACK,
  blueGray,
  COLD_GRAY,
  BG,
  type ThemeName,
} from "./primitives";

export type ColorMode = "light" | "dark";

export interface SemanticTokensConfig {
  mode: ColorMode;
  themeName?: ThemeName;
}

// ============================================================================
// 公开语义层类型 — TDesign 风格命名（车机端适配）
//
// 车机端特性：
// 1. 无鼠标悬停，所有 hover 态已移除
// 2. 按下态统一为组件上层叠加 Black-12 蒙层 rgba(0,0,0,0.12)
//    不在 token 层逐个定义 active/pressed 色
// 3. 公开层只有 4 类：文字色、背景色、边框色、功能色
//    遮罩独立为 mask 子类挂在 bgColor 下
// ============================================================================

/**
 * 文字色 — 对标 TDesign `@text-color-*`
 * 统一用于文字与图标颜色。
 */
export interface TextColorTokens {
  /** 主要文字（标题、正文）— TDesign @text-color-primary */
  primary: string;
  /** 次要文字（副标题、说明文案）— TDesign @text-color-secondary */
  secondary: string;
  /** 辅助文字（时间戳、备注）— 无直接 TDesign 对应 */
  tertiary: string;
  /** 禁用态文字 — TDesign @text-color-disabled */
  disabled: string;
  /** 占位符文字 — TDesign @text-color-placeholder */
  placeholder: string;
  /** 反色文字（深色背景上）— TDesign @text-color-anti */
  anti: string;
  /** 品牌色文字 — TDesign @text-color-brand */
  brand: string;
  /** 链接文字 — TDesign @text-color-link */
  link: string;
}

/**
 * 背景色 — 对标 TDesign `@bg-color-*`
 *
 * 车机端说明：
 * - 不含 hover 态（无鼠标）
 * - 不含 active 态（统一由上层加 Black-12 蒙层实现按下效果）
 */
export interface BgColorTokens {
  /** 页面主背景 — TDesign @bg-color-page */
  page: string;
  /** 容器背景 — TDesign @bg-color-container */
  container: string;
  /** 次级容器背景 — TDesign @bg-color-secondarycontainer */
  secondaryContainer: string;
  /** 组件背景（蓝灰色板）— TDesign @bg-color-component */
  component: string;
  /** 组件禁用（蓝灰色板）— TDesign @bg-color-component-disabled */
  componentDisabled: string;
  /** 特殊组件背景（Button/Input 等，蓝灰色板）— TDesign @bg-color-specialcomponent */
  specialComponent: string;
  /** 悬浮卡片、弹出层背景 */
  elevated: string;
  /** 模态遮罩层 — TDesign @mask-active */
  overlay: string;
  /** 禁用遮罩 — TDesign @mask-disabled */
  maskDisabled: string;
  /** 按下态蒙层 — 车机端统一叠加色，组件按下时叠加此色 */
  pressedOverlay: string;
  /** 代码块背景 */
  code: string;
  /** 毛玻璃效果背景 */
  glass: string;
  /** 品牌色强调背景 */
  brand: string;
  /** 品牌色浅底背景 — TDesign @brand-color-light */
  brandLight: string;
  /** 成功状态浅底 — TDesign @success-color-light */
  successLight: string;
  /** 警告状态浅底 — TDesign @warning-color-light */
  warningLight: string;
  /** 错误状态浅底 — TDesign @error-color-light */
  errorLight: string;
  /** 信息状态浅底 */
  infoLight: string;
}

/**
 * 边框色 — 对标 TDesign `@border-level-*` / `@component-border`
 */
export interface BorderColorTokens {
  /** 一级分割线（轻量分隔）— TDesign @border-level-1-color */
  level1: string;
  /** 二级边框（组件描边）— TDesign @border-level-2-color */
  level2: string;
  /** 组件描边 — TDesign @component-stroke */
  component: string;
  /** 聚焦态边框 */
  focus: string;
  /** 反色边框 */
  inverse: string;
  /** 品牌色边框 */
  brand: string;
}

/**
 * 功能色 — 对标 TDesign `@brand-color` / `@warning-color` / `@error-color` / `@success-color`
 *
 * 车机端说明：
 * - 每个语义色仅提供 main + disabled + light 三态
 * - 不含 hover（无鼠标）
 * - 不含 active（按下态统一用 Black-12 蒙层叠加在 main 之上）
 * - 不含 focus（车机端聚焦由边框色 borderColor.focus 统一处理）
 */
export interface FunctionalColorLevel {
  /** 标准色 — TDesign @xxx-color */
  main: string;
  /** 禁用态 — TDesign @xxx-color-disabled */
  disabled: string;
  /** 浅底色 — TDesign @xxx-color-light */
  light: string;
}

export interface FunctionalColorTokens {
  /** 品牌色 — TDesign @brand-color */
  brand: FunctionalColorLevel;
  /** 成功色 — TDesign @success-color */
  success: FunctionalColorLevel;
  /** 警告色 — TDesign @warning-color */
  warning: FunctionalColorLevel;
  /** 错误色 — TDesign @error-color */
  error: FunctionalColorLevel;
  /** 信息色 — 无直接 TDesign 对应，TAI 扩展 */
  info: FunctionalColorLevel;
}

/**
 * 车机端按下态常量：所有组件按下时统一叠加此色。
 * 使用方式：在按下态下，对组件最外层叠加一个 `backgroundColor: PRESSED_OVERLAY` 的绝对定位蒙层。
 */
export const PRESSED_OVERLAY = "rgba(0, 0, 0, 0.12)";

// ============================================================================
// 组件级 token 类型 — 直接在语义层定义，不再由 legacyColors 提供
// ============================================================================

export interface SwitchTokens {
  on: string;
  off: string;
  thumb: string;
  thumbShadow: string;
}

export interface CheckboxTokens {
  checked: string;
  unchecked: string;
  checkmark: string;
}

export interface InputTokens {
  bg: string;
  text: string;
  placeholder: string;
  ring: string;
  clearIcon: string;
}

export interface DialogTokens {
  bg: string;
  title: string;
  content: string;
  overlay: string;
}

export interface ToastTokens {
  bg: string;
  text: string;
}

export interface TipsTokens {
  bg: string;
  text: string;
  border: string;
}

export interface PushTokens {
  bg: string;
  title: string;
  content: string;
}

export interface ListTokens {
  bg: string;
  title: string;
  description: string;
  border: string;
  arrow: string;
}

export interface LoadingTokens {
  spinner: string;
  text: string;
}

export interface TagColorLevel {
  main: string;
  6: string;
  12: string;
  30: string;
}

export interface TagTokens {
  danger: TagColorLevel;
  notice: TagColorLevel;
  success: TagColorLevel;
  info: TagColorLevel;
  default: TagColorLevel;
}

// ============================================================================
// 排版语义 Token — 按内容职责定义，不按物理尺寸
//
// 使用方式：tokens.typography.title.page / tokens.typography.body.primary
// 每个 token 包含 fontSize + fontWeight + lineHeight 三个维度
// ============================================================================

/**
 * 单条排版样式 token
 */
export interface TypographyStyleToken {
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
}

/**
 * 排版语义 token — 按内容职责划分
 *
 * ┌─── title ─── 标题类：用于各级标题
 * │   page      — 页面主标题（AudioPlayer 全屏标题、歌词高亮）
 * │   section   — 区块标题（Dialog 标题、ActionSheet 标题）
 * │   card      — 卡片/列表主标题（List 标题、Toast 文字、正文标题）
 * │   subsection — 小区块标题（输入框文字、按钮大号文字）
 * │
 * ├─── body ─── 正文类：用于段落、描述内容
 * │   primary   — 主正文（列表描述、说明文字、Checkbox 标签）
 * │   secondary — 次正文（ActionSheet 描述、辅助正文）
 * │   long      — 长文本正文（Comment 正文、多行说明）
 * │
 * ├─── label ─── 控件标签类：用于交互元素上的文字
 * │   buttonLarge   — 大按钮 / xlarge 按钮文字
 * │   buttonMedium  — 中按钮 / large 按钮文字
 * │   buttonSmall   — 小按钮 / small~medium 按钮文字
 * │   buttonMini    — 迷你按钮 / extraSmall 按钮文字
 * │   tag           — 标签文字（Tag 组件）
 * │   tab           — 标签页文字（Tabs 组件）
 * │   badge         — 徽标计数文字（Badge 组件）
 * │   input         — 输入框文字
 * │
 * ├─── meta ─── 元信息类：用于时间戳、备注、辅助文字
 * │   caption   — 说明文字（图标辅助、备注）
 * │   time      — 时间标签（播放器时间、时间戳）
 * │   footnote  — 脚注（倍速标签、Badge 小号）
 * │
 * └─── display ─── 展示类：用于大尺寸展示场景
 *     hero      — 展示大标题（AudioPlayer 全屏标题、歌词）
 *     numeric   — 数据数字（操作计数、滑块当前值）
 */
export interface TypographyTokens {
  title: {
    /** 页面主标题 — 42px / semibold / 1.2 */
    page: TypographyStyleToken;
    /** 区块标题（弹窗标题、操作面板标题） — 36px / semibold / 1.3 */
    section: TypographyStyleToken;
    /** 卡片/列表标题（列表项标题、Toast） — 32px / medium / 1.5 */
    card: TypographyStyleToken;
    /** 小区块标题（输入框文字） — 30px / medium / 1.4 */
    subsection: TypographyStyleToken;
  };
  body: {
    /** 主正文（列表描述、说明文字） — 28px / regular / 1.4 */
    primary: TypographyStyleToken;
    /** 次正文（ActionSheet 描述、辅助说明） — 26px / regular / 1.5 */
    secondary: TypographyStyleToken;
    /** 长文本（Comment 正文、多行内容） — 28px / regular / 1.6 */
    long: TypographyStyleToken;
  };
  label: {
    /** 大按钮文字 — 32px / medium / 1 */
    buttonLarge: TypographyStyleToken;
    /** 中按钮文字 — 30px / medium / 1 */
    buttonMedium: TypographyStyleToken;
    /** 小按钮文字 — 28px / medium / 1 */
    buttonSmall: TypographyStyleToken;
    /** 迷你按钮文字 — 24px / medium / 1 */
    buttonMini: TypographyStyleToken;
    /** 标签文字（Tag） — 24px / medium / 1 */
    tag: TypographyStyleToken;
    /** 标签页文字（Tabs） — 28px / regular→semibold / 1 */
    tab: TypographyStyleToken;
    /** 徽标文字（Badge） — 24px / semibold / 1 */
    badge: TypographyStyleToken;
    /** 输入框文字 — 32px / regular / 1.4 */
    input: TypographyStyleToken;
  };
  meta: {
    /** 说明文字（辅助文字、标签文字） — 24px / regular / 1.5 */
    caption: TypographyStyleToken;
    /** 时间标签（播放器进度、时间戳） — 22px / regular / 1 */
    time: TypographyStyleToken;
    /** 脚注（倍速标签、Badge 小号文字） — 18px / regular / 1 */
    footnote: TypographyStyleToken;
  };
  display: {
    /** 展示大标题（全屏播放器标题） — 42px / bold / 1.2 */
    hero: TypographyStyleToken;
    /** 数据数字（操作计数、滑块值） — 24px / semibold / 1.5 */
    numeric: TypographyStyleToken;
  };
}

// ============================================================================
// 公开语义 Token 的总类型
// ============================================================================

export interface SemanticTokens {
  /** 文字色 — TDesign @text-color-* */
  textColor: TextColorTokens;
  /** 背景色 — TDesign @bg-color-* */
  bgColor: BgColorTokens;
  /** 边框色 — TDesign @border-* */
  borderColor: BorderColorTokens;
  /** 功能色 — TDesign @brand/success/warning/error-color */
  functionalColor: FunctionalColorTokens;

  // ---- 排版语义 token ----
  /** 排版 — 按内容职责定义的字号 / 字重 / 行高组合 */
  typography: TypographyTokens;

  // ---- 组件级 token（直接在语义层定义）----
  switch: SwitchTokens;
  checkbox: CheckboxTokens;
  input: InputTokens;
  dialog: DialogTokens;
  toast: ToastTokens;
  tips: TipsTokens;
  push: PushTokens;
  list: ListTokens;
  loading: LoadingTokens;
  tag: TagTokens;

  // ---- 元数据 ----
  /** 元数据（模式、主题名、品牌色） */
  _meta: { mode: ColorMode; themeName: string; brandColor: string };
}

// ============================================================================
// 工厂 — 公开语义层从 primitives 构建；组件级 token 全部引用公开语义层
//
// 原则：组件级 token → 引用公开语义层 → 语义层引用 primitive
// 允许近似对应（注释中标注偏差），不直接使用 primitive
// ============================================================================

const DEFAULT_THEME: ThemeName = "darkBlue";

export function createSemanticTokens(config: SemanticTokensConfig): SemanticTokens {
  const { mode, themeName = DEFAULT_THEME } = config;
  const isDark = mode === "dark";

  // ── 公开语义层（TDesign 风格命名 · 车机端适配）──

  const textColor: TextColorTokens = {
    primary: isDark ? WHITE[92] : BLACK[92],
    secondary: isDark ? WHITE[72] : BLACK[72],
    tertiary: isDark ? WHITE[60] : BLACK[60],
    disabled: isDark ? WHITE[30] : BLACK[30],
    placeholder: isDark ? WHITE[42] : BLACK[42],
    anti: isDark ? BLACK[92] : WHITE[92],
    brand: BRAND.primary,
    link: isDark ? WHITE[72] : BRAND.primary,
  };

  const bgColor: BgColorTokens = {
    page: isDark ? COLD_GRAY[100] : STATIC.white,
    container: isDark ? COLD_GRAY[90] : COLD_GRAY[0],
    secondaryContainer: isDark ? COLD_GRAY[80] : COLD_GRAY[10],
    component: isDark ? blueGray[80] : blueGray[10],
    componentDisabled: isDark ? blueGray[90] : blueGray[0],
    specialComponent: isDark ? blueGray[70] : blueGray[20],
    elevated: isDark ? COLD_GRAY[90] : STATIC.white,
    overlay: isDark ? alpha.black[40] : alpha.black[24],
    maskDisabled: isDark ? "rgba(0, 0, 0, 0.40)" : "rgba(255, 255, 255, 0.60)",
    pressedOverlay: PRESSED_OVERLAY,
    code: isDark ? alpha.white[8] : alpha.black[5],
    glass: isDark ? "rgba(26, 29, 40, 0.80)" : "rgba(255, 255, 255, 0.80)",
    brand: BRAND.primary,
    brandLight: isDark ? `${BRAND.primary}1A` : blueGray[0],
    successLight: FUNCTIONAL.success[12],
    warningLight: FUNCTIONAL.notice[12],
    errorLight: FUNCTIONAL.danger[12],
    infoLight: FUNCTIONAL.info[12],
  };

  const borderColor: BorderColorTokens = {
    level1: isDark ? WHITE[12] : BLACK[10],
    level2: isDark ? WHITE[24] : BLACK[24],
    component: isDark ? alpha.white[20] : alpha.black[20],
    focus: isDark ? WHITE[100] : BLACK[100],
    inverse: isDark ? alpha.black[20] : alpha.white[20],
    brand: BRAND.primary,
  };

  const functionalColor: FunctionalColorTokens = {
    brand: {
      main: BRAND.primary,
      disabled: isDark ? WHITE[24] : BLACK[24],
      light: isDark ? `${BRAND.primary}1A` : blueGray[0],
    },
    success: {
      main: FUNCTIONAL.success.main,
      disabled: FUNCTIONAL.success[30],
      light: FUNCTIONAL.success[12],
    },
    warning: {
      main: FUNCTIONAL.notice.main,
      disabled: FUNCTIONAL.notice[30],
      light: FUNCTIONAL.notice[12],
    },
    error: {
      main: FUNCTIONAL.danger.main,
      disabled: FUNCTIONAL.danger[30],
      light: FUNCTIONAL.danger[12],
    },
    info: {
      main: FUNCTIONAL.info.main,
      disabled: FUNCTIONAL.info[30],
      light: FUNCTIONAL.info[12],
    },
  };

  // ── 组件级 token（优先引用公开语义层，固定色直接用 STATIC）──

  const switchTokens: SwitchTokens = {
    on: bgColor.brand,                      // 开启态轨道 → 公开语义 bgColor.brand
    off: bgColor.component,                 // 关闭态轨道 → 公开语义 bgColor.component
    thumb: STATIC.white,                    // 滑块固定纯白
    thumbShadow: borderColor.component,     // 滑块阴影 → 公开语义 borderColor.component
  };

  const checkboxTokens: CheckboxTokens = {
    checked: borderColor.focus,              // 选中态描边 → 公开语义 borderColor.focus
    unchecked: borderColor.level2,           // 未选中态描边 → 公开语义 borderColor.level2
    checkmark: isDark ? STATIC.black : STATIC.white,  // 勾选标记固定色（需100%不透明度）
  };

  const inputTokens: InputTokens = {
    bg: bgColor.elevated,                    // 输入框背景 → bgColor.elevated（深色 90 vs 原 80，微差可接受）
    text: textColor.primary,                 // 输入文字 → textColor.primary
    placeholder: textColor.placeholder,      // 占位符 → textColor.placeholder
    ring: borderColor.focus,                 // 聚焦边框 → borderColor.focus
    clearIcon: borderColor.level2,           // 清除图标 → borderColor.level2
  };

  const dialogTokens: DialogTokens = {
    bg: bgColor.elevated,                    // 弹窗背景 → bgColor.elevated
    title: textColor.primary,                // 弹窗标题 → textColor.primary
    content: textColor.secondary,            // 弹窗正文 → textColor.secondary（原 84% 近似 72%，语义为次要文字）
    overlay: bgColor.overlay,                // 遮罩层 → bgColor.overlay
  };

  const toastTokens: ToastTokens = {
    bg: bgColor.secondaryContainer,          // Toast 背景 → bgColor.secondaryContainer（深色 COLD_GRAY[80] 近似原值，浅色场景实际也呈深底）
    text: textColor.anti,                    // Toast 文字 → textColor.anti（反色文字，近似原 WHITE[90]）
  };

  const tipsTokens: TipsTokens = {
    bg: bgColor.container,                   // Tips 背景 → bgColor.container（深色 COLD_GRAY[90] 精确匹配，浅色 COLD_GRAY[0] vs 原 COLD_GRAY[10] 微差）
    text: textColor.primary,                 // Tips 文字 → textColor.primary
    border: borderColor.level2,              // Tips 边框 → borderColor.level2（深色 WHITE[24] 精确匹配，浅色 BLACK[24] vs 原 BLACK[10] 有差）
  };

  const pushTokens: PushTokens = {
    bg: bgColor.elevated,                    // 推送卡片背景 → 公开语义 bgColor.elevated
    title: textColor.primary,                // 推送标题 → 公开语义 textColor.primary
    content: textColor.secondary,            // 推送内容 → 公开语义 textColor.secondary
  };

  const listTokens: ListTokens = {
    bg: bgColor.elevated,                    // 列表背景 → 公开语义 bgColor.elevated
    title: textColor.primary,                // 列表标题 → 公开语义 textColor.primary
    description: textColor.tertiary,         // 列表描述 → 公开语义 textColor.tertiary
    border: borderColor.level1,              // 列表分割线 → 公开语义 borderColor.level1
    arrow: textColor.placeholder,            // 箭头图标 → 公开语义 textColor.placeholder
  };

  const loadingTokens: LoadingTokens = {
    spinner: functionalColor.brand.main,     // 加载动画 → 公开语义 functionalColor.brand.main
    text: textColor.secondary,               // 加载文字 → 公开语义 textColor.secondary
  };

  const tagTokens: TagTokens = {
    danger: {
      main: functionalColor.error.main,      // → functionalColor.error.main
      6: bgColor.errorLight,                 // 6% 近似 → bgColor.errorLight（12%，微差可接受）
      12: bgColor.errorLight,                // 12% → bgColor.errorLight（精确匹配）
      30: functionalColor.error.disabled,    // 30% → functionalColor.error.disabled（精确匹配）
    },
    notice: {
      main: functionalColor.warning.main,    // → functionalColor.warning.main
      6: bgColor.warningLight,               // 6% 近似 → bgColor.warningLight（12%，微差可接受）
      12: bgColor.warningLight,              // 12% → bgColor.warningLight（精确匹配）
      30: functionalColor.warning.disabled,  // 30% → functionalColor.warning.disabled（精确匹配）
    },
    success: {
      main: functionalColor.success.main,    // → functionalColor.success.main
      6: bgColor.successLight,               // 6% 近似 → bgColor.successLight（12%，微差可接受）
      12: bgColor.successLight,              // 12% → bgColor.successLight（精确匹配）
      30: functionalColor.success.disabled,  // 30% → functionalColor.success.disabled（精确匹配）
    },
    info: {
      main: functionalColor.info.main,       // → functionalColor.info.main
      6: bgColor.infoLight,                  // 6% 近似 → bgColor.infoLight（12%，微差可接受）
      12: bgColor.infoLight,                 // 12% → bgColor.infoLight（精确匹配）
      30: functionalColor.info.disabled,     // 30% → functionalColor.info.disabled（精确匹配）
    },
    default: {
      main: textColor.tertiary,              // COLD_GRAY[70] 近似 → textColor.tertiary（60% 灰，语义为辅助文字色）
      6: bgColor.infoLight,                  // → bgColor.infoLight
      12: bgColor.infoLight,                 // → bgColor.infoLight
      30: functionalColor.info.disabled,     // → functionalColor.info.disabled
    },
  };

  // ── 排版语义 token ──
  //
  // 原则：每个 token 对应一种"内容职责"，不是物理尺寸
  // 组件根据自身文字角色选择对应 token，而非自行拼凑 fontSize + fontWeight + lineHeight
  //
  // 基础排版常量对照（已保留在 tokens/index.ts 供过渡）：
  //   FONT_SIZE:  xs=18, sm=20, md=22, base=24, lg=26, xl=28, 2xl=30, 3xl=32, 4xl=36, 5xl=42
  //   FONT_WEIGHT: regular=400, medium=500, semibold=600, bold=700
  //   LINE_HEIGHT: none=1, tight=1.2, snug=1.3, normal=1.4, relaxed=1.5, loose=1.6

  const typography: TypographyTokens = {
    title: {
      page:       { fontSize: 42, fontWeight: 600, lineHeight: 1.2 },
      section:    { fontSize: 36, fontWeight: 600, lineHeight: 1.3 },
      card:       { fontSize: 32, fontWeight: 500, lineHeight: 1.5 },
      subsection: { fontSize: 30, fontWeight: 500, lineHeight: 1.4 },
    },
    body: {
      primary:   { fontSize: 28, fontWeight: 400, lineHeight: 1.4 },
      secondary: { fontSize: 26, fontWeight: 400, lineHeight: 1.5 },
      long:      { fontSize: 28, fontWeight: 400, lineHeight: 1.6 },
    },
    label: {
      buttonLarge:  { fontSize: 32, fontWeight: 500, lineHeight: 1 },
      buttonMedium: { fontSize: 30, fontWeight: 500, lineHeight: 1 },
      buttonSmall:  { fontSize: 28, fontWeight: 500, lineHeight: 1 },
      buttonMini:   { fontSize: 24, fontWeight: 500, lineHeight: 1 },
      tag:          { fontSize: 24, fontWeight: 500, lineHeight: 1 },
      tab:          { fontSize: 28, fontWeight: 400, lineHeight: 1 },
      badge:        { fontSize: 24, fontWeight: 600, lineHeight: 1 },
      input:        { fontSize: 32, fontWeight: 400, lineHeight: 1.4 },
    },
    meta: {
      caption:  { fontSize: 24, fontWeight: 400, lineHeight: 1.5 },
      time:     { fontSize: 22, fontWeight: 400, lineHeight: 1 },
      footnote: { fontSize: 18, fontWeight: 400, lineHeight: 1 },
    },
    display: {
      hero:    { fontSize: 42, fontWeight: 700, lineHeight: 1.2 },
      numeric: { fontSize: 24, fontWeight: 600, lineHeight: 1.5 },
    },
  };

  return {
    // ── 公开层（4 组 TDesign 风格）──
    textColor,
    bgColor,
    borderColor,
    functionalColor,

    // ── 排版语义 token ──
    typography,

    // ── 组件级 token ──
    switch: switchTokens,
    checkbox: checkboxTokens,
    input: inputTokens,
    dialog: dialogTokens,
    toast: toastTokens,
    tips: tipsTokens,
    push: pushTokens,
    list: listTokens,
    loading: loadingTokens,
    tag: tagTokens,

    // ── 元数据 ──
    _meta: {
      mode,
      themeName,
      brandColor: BRAND.primary,
    },
  };
}

// ============================================================================
// 向后兼容类型别名 — 过渡期保留，新代码请使用上方 TDesign 命名
// ============================================================================

/** @deprecated 使用 TextColorTokens */
export type ContentTokens = TextColorTokens;
/** @deprecated 使用 BgColorTokens */
export type SurfaceTokens = BgColorTokens;
/** @deprecated 使用 BorderColorTokens */
export type BorderTokens = BorderColorTokens;
/** @deprecated 使用 FunctionalColorTokens */
export type FeedbackTokens = FunctionalColorTokens;
/** @deprecated 使用 FunctionalColorLevel */
export type FeedbackLevel = FunctionalColorLevel;

export const lightTokens = createSemanticTokens({ mode: "light" });
export const darkTokens = createSemanticTokens({ mode: "dark" });

export function getTokens(isDark: boolean, themeName?: ThemeName): SemanticTokens {
  return createSemanticTokens({
    mode: isDark ? "dark" : "light",
    themeName,
  });
}
