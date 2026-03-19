/**
 * 🎨 TAI Design System - Semantic Color Tokens
 * 
 * 语义色层（Semantic Layer）
 * 这一层基于 Primitive 色板，映射出具有 UI 语义的颜色 token。
 * 组件应该使用这一层的 token，而不是直接使用 Primitive。
 * 
 * 语义分类：
 * - text: 文字颜色
 * - icon: 图标颜色
 * - surface: 背景/容器颜色
 * - border: 边框/分割线颜色
 * - action: 交互元素颜色（按钮、链接等）
 * - status: 状态颜色（成功、警告、错误、信息）
 * - state: 交互状态颜色（hover、active、selected 等）
 */

import { primitives, type ThemeName } from './primitives';

const { alpha, blueGray, status, theme, static: staticColors } = primitives;

// ============================================================================
// 类型定义
// ============================================================================

export type ColorMode = 'light' | 'dark';

export interface SemanticTokensConfig {
  /** 颜色模式：浅色或深色 */
  mode: ColorMode;
  /** 当前主题色名称 */
  themeName?: ThemeName;
}

/**
 * 交互元素颜色 Token 类型
 * 
 * 定义了一个完整交互元素（如按钮）所需的所有颜色状态。
 * 组件应该直接使用这些 token，而不是在组件内部处理颜色逻辑。
 * 
 * 状态说明：
 * - default: 默认状态（无后缀）
 * - Hover: 鼠标悬停
 * - Pressed: 按下/激活
 * - Disabled: 禁用
 */
export interface InteractiveActionToken {
  /** 背景色 - 默认状态 */
  bg: string;
  /** 背景色 - 悬停状态 */
  bgHover: string;
  /** 背景色 - 按下状态 */
  bgPressed: string;
  /** 背景色 - 禁用状态 */
  bgDisabled: string;
  
  /** 文字色 - 默认状态 */
  text: string;
  /** 文字色 - 悬停状态 */
  textHover: string;
  /** 文字色 - 按下状态 */
  textPressed: string;
  /** 文字色 - 禁用状态 */
  textDisabled: string;
  
  /** 图标色 - 默认状态 */
  icon: string;
  /** 图标色 - 悬停状态 */
  iconHover: string;
  /** 图标色 - 按下状态 */
  iconPressed: string;
  /** 图标色 - 禁用状态 */
  iconDisabled: string;
  
  /** 边框色 - 默认状态（可选，用于描边按钮） */
  border?: string;
  /** 边框色 - 悬停状态 */
  borderHover?: string;
  /** 边框色 - 按下状态 */
  borderPressed?: string;
  /** 边框色 - 禁用状态 */
  borderDisabled?: string;
}

/**
 * Action Token 集合类型
 * 
 * 包含所有按钮 variant 的颜色定义
 */
export interface ActionTokens {
  primary: InteractiveActionToken;
  secondary: InteractiveActionToken;
  tertiary: InteractiveActionToken;
  ghost: InteractiveActionToken;
  danger: InteractiveActionToken;
  link: InteractiveActionToken;
}

// ============================================================================
// 默认主题色
// ============================================================================

const DEFAULT_THEME: ThemeName = 'darkBlue';

// ============================================================================
// 语义 Token 创建函数
// ============================================================================

/**
 * 创建语义化颜色 token
 * 
 * @param config - 配置项
 * @param config.mode - 颜色模式 ('light' | 'dark')
 * @param config.themeName - 主题色名称，默认 'darkBlue'
 * @returns 完整的语义化颜色 token 对象
 * 
 * @example
 * ```ts
 * const lightTokens = createSemanticTokens({ mode: 'light' });
 * const darkTokens = createSemanticTokens({ mode: 'dark', themeName: 'teal' });
 * 
 * // 使用
 * <div style={{ color: lightTokens.text.primary }}>Hello</div>
 * ```
 */
export function createSemanticTokens(config: SemanticTokensConfig) {
  const { mode, themeName = DEFAULT_THEME } = config;
  const isDark = mode === 'dark';
  
  // 获取当前主题色板
  const brand = theme[themeName];
  
  return {
    // ========================================================================
    // Text 文字颜色
    // ========================================================================
    text: {
      /** 主要文字：标题、重要内容 */
      primary: isDark ? alpha.white[92] : alpha.black[92],
      /** 次要文字：正文、描述 */
      secondary: isDark ? alpha.white[72] : alpha.black[72],
      /** 三级文字：辅助说明、备注 */
      tertiary: isDark ? alpha.white[60] : alpha.black[60],
      /** 占位符文字 */
      placeholder: isDark ? alpha.white[42] : alpha.black[42],
      /** 禁用文字 */
      disabled: isDark ? alpha.white[30] : alpha.black[30],
      /** 反转文字（用于深色背景上） */
      inverse: isDark ? alpha.black[92] : alpha.white[92],
      /** 品牌色上的文字 */
      onBrand: staticColors.white,
      /** 链接文字 */
      link: isDark ? brand[40] : brand[50],
      /** 链接文字 hover */
      linkHover: isDark ? brand[30] : brand[60],
      /** 成功状态文字 */
      success: isDark ? status.green[40] : status.green[60],
      /** 警告状态文字 */
      warning: isDark ? status.orange[40] : status.orange[60],
      /** 错误状态文字 */
      error: isDark ? status.red[40] : status.red[60],
      /** 信息状态文字 */
      info: isDark ? status.blue[40] : status.blue[60],
    },

    // ========================================================================
    // Icon 图标颜色
    // ========================================================================
    icon: {
      /** 主要图标 */
      primary: isDark ? alpha.white[92] : alpha.black[92],
      /** 次要图标 */
      secondary: isDark ? alpha.white[60] : alpha.black[60],
      /** 三级图标 */
      tertiary: isDark ? alpha.white[42] : alpha.black[42],
      /** 禁用图标 */
      disabled: isDark ? alpha.white[30] : alpha.black[30],
      /** 反转图标 */
      inverse: isDark ? alpha.black[92] : alpha.white[92],
      /** 品牌色图标 */
      brand: brand[50],
      /** 品牌色上的图标 */
      onBrand: staticColors.white,
      /** 成功状态图标 */
      success: isDark ? status.green[40] : status.green[50],
      /** 警告状态图标 */
      warning: isDark ? status.orange[40] : status.orange[50],
      /** 错误状态图标 */
      error: isDark ? status.red[40] : status.red[50],
      /** 信息状态图标 */
      info: isDark ? status.blue[40] : status.blue[50],
    },

    // ========================================================================
    // Surface 背景/容器颜色
    // ========================================================================
    surface: {
      /** 页面背景 */
      page: isDark ? blueGray[100] : staticColors.white,
      /** 主容器背景 */
      container: isDark ? blueGray[90] : blueGray[0],
      /** 次级容器背景 */
      containerLow: isDark ? blueGray[100] : blueGray[10],
      /** 卡片背景 */
      card: isDark ? blueGray[90] : staticColors.white,
      /** 悬浮卡片背景（带阴影的卡片） */
      cardElevated: isDark ? blueGray[80] : staticColors.white,
      /** 微妙背景（轻量级区分） */
      subtle: isDark ? blueGray[90] : blueGray[0],
      /** 柔和背景 */
      muted: isDark ? blueGray[80] : blueGray[10],
      /** 遮罩背景 */
      overlay: isDark ? alpha.black[60] : alpha.black[40],
      /** 半透明遮罩 */
      scrim: isDark ? alpha.black[80] : alpha.black[60],
      /** 反转背景 */
      inverse: isDark ? staticColors.white : blueGray[100],
      /** 代码块背景 */
      code: isDark ? alpha.white[8] : alpha.black[5],
      /** 品牌色浅底 */
      brandSubtle: isDark ? `${brand[50]}1A` : brand[0], // 1A = 10% 透明度
      /** 品牌色背景 */
      brand: brand[50],
      /** 成功状态浅底 */
      successSubtle: isDark ? `${status.green[50]}1A` : status.green[0],
      /** 警告状态浅底 */
      warningSubtle: isDark ? `${status.orange[50]}1A` : status.orange[0],
      /** 错误状态浅底 */
      errorSubtle: isDark ? `${status.red[50]}1A` : status.red[0],
      /** 信息状态浅底 */
      infoSubtle: isDark ? `${status.blue[50]}1A` : status.blue[0],
      /** 玻璃效果背景 */
      glass: isDark 
        ? 'rgba(26, 29, 40, 0.8)' // blueGray[100] with 80% opacity
        : 'rgba(255, 255, 255, 0.8)',
    },

    // ========================================================================
    // Border 边框/分割线颜色
    // ========================================================================
    border: {
      /** 默认边框 */
      default: isDark ? alpha.white[20] : alpha.black[12],
      /** 轻量边框（三级分割线） */
      subtle: isDark ? alpha.white[10] : alpha.black[6],
      /** 中等边框 */
      medium: isDark ? alpha.white[24] : alpha.black[20],
      /** 强调边框 */
      strong: isDark ? alpha.white[40] : alpha.black[40],
      /** 焦点边框 */
      focus: brand[50],
      /** 反转边框 */
      inverse: isDark ? alpha.black[20] : alpha.white[20],
      /** 品牌色边框 */
      brand: brand[50],
      /** 成功状态边框 */
      success: isDark ? status.green[40] : status.green[50],
      /** 警告状态边框 */
      warning: isDark ? status.orange[40] : status.orange[50],
      /** 错误状态边框 */
      error: isDark ? status.red[40] : status.red[50],
      /** 信息状态边框 */
      info: isDark ? status.blue[40] : status.blue[50],
    },

    // ========================================================================
    // Action 交互元素颜色
    // ========================================================================
    /**
     * Action Token 结构说明：
     * 
     * 每个 action variant 都遵循统一的 InteractiveActionToken 结构：
     * - bg / bgHover / bgPressed / bgDisabled: 背景色
     * - text / textHover / textPressed / textDisabled: 文字色
     * - icon / iconHover / iconPressed / iconDisabled: 图标色（可选，默认继承 text）
     * - border / borderHover / borderPressed / borderDisabled: 边框色（可选）
     * 
     * 组件应直接消费这些 token，而非直接使用 primitive 色板。
     */
    action: {
      /** 主要操作（实心按钮，品牌色背景） */
      primary: {
        bg: brand[50],
        bgHover: brand[60],
        bgPressed: brand[70],
        bgDisabled: isDark ? blueGray[80] : blueGray[20],
        text: staticColors.white,
        textHover: staticColors.white,
        textPressed: staticColors.white,
        textDisabled: isDark ? alpha.white[30] : alpha.black[30],
        icon: staticColors.white,
        iconHover: staticColors.white,
        iconPressed: staticColors.white,
        iconDisabled: isDark ? alpha.white[30] : alpha.black[30],
      },
      /** 次要操作（描边按钮，透明背景 + 边框） */
      secondary: {
        bg: staticColors.transparent,
        bgHover: isDark ? alpha.white[8] : alpha.black[5],
        bgPressed: isDark ? alpha.white[12] : alpha.black[8],
        bgDisabled: staticColors.transparent,
        text: isDark ? alpha.white[92] : alpha.black[92],
        textHover: isDark ? alpha.white[92] : alpha.black[92],
        textPressed: isDark ? alpha.white[72] : alpha.black[72],
        textDisabled: isDark ? alpha.white[30] : alpha.black[30],
        icon: isDark ? alpha.white[92] : alpha.black[92],
        iconHover: isDark ? alpha.white[92] : alpha.black[92],
        iconPressed: isDark ? alpha.white[72] : alpha.black[72],
        iconDisabled: isDark ? alpha.white[30] : alpha.black[30],
        border: isDark ? alpha.white[40] : alpha.black[40],
        borderHover: isDark ? alpha.white[60] : alpha.black[60],
        borderPressed: isDark ? alpha.white[40] : alpha.black[40],
        borderDisabled: isDark ? alpha.white[20] : alpha.black[20],
      },
      /** 三级操作（弱化实心按钮，灰色背景） */
      tertiary: {
        bg: isDark ? alpha.white[8] : alpha.black[5],
        bgHover: isDark ? alpha.white[12] : alpha.black[8],
        bgPressed: isDark ? alpha.white[16] : alpha.black[12],
        bgDisabled: isDark ? alpha.white[6] : alpha.black[4],
        text: isDark ? alpha.white[92] : alpha.black[92],
        textHover: isDark ? alpha.white[92] : alpha.black[92],
        textPressed: isDark ? alpha.white[72] : alpha.black[72],
        textDisabled: isDark ? alpha.white[30] : alpha.black[30],
        icon: isDark ? alpha.white[92] : alpha.black[92],
        iconHover: isDark ? alpha.white[92] : alpha.black[92],
        iconPressed: isDark ? alpha.white[72] : alpha.black[72],
        iconDisabled: isDark ? alpha.white[30] : alpha.black[30],
      },
      /** 幽灵操作（纯文字按钮，无背景） */
      ghost: {
        bg: staticColors.transparent,
        bgHover: isDark ? alpha.white[8] : alpha.black[5],
        bgPressed: isDark ? alpha.white[12] : alpha.black[8],
        bgDisabled: staticColors.transparent,
        text: isDark ? alpha.white[92] : alpha.black[92],
        textHover: isDark ? alpha.white[92] : alpha.black[92],
        textPressed: isDark ? alpha.white[72] : alpha.black[72],
        textDisabled: isDark ? alpha.white[30] : alpha.black[30],
        icon: isDark ? alpha.white[92] : alpha.black[92],
        iconHover: isDark ? alpha.white[92] : alpha.black[92],
        iconPressed: isDark ? alpha.white[72] : alpha.black[72],
        iconDisabled: isDark ? alpha.white[30] : alpha.black[30],
        border: staticColors.transparent,
        borderHover: staticColors.transparent,
        borderPressed: staticColors.transparent,
        borderDisabled: staticColors.transparent,
      },
      /** 危险操作（删除/警告按钮，红色背景） */
      danger: {
        bg: status.red[50],
        bgHover: status.red[60],
        bgPressed: status.red[70],
        bgDisabled: isDark ? blueGray[80] : blueGray[20],
        text: staticColors.white,
        textHover: staticColors.white,
        textPressed: staticColors.white,
        textDisabled: isDark ? alpha.white[30] : alpha.black[30],
        icon: staticColors.white,
        iconHover: staticColors.white,
        iconPressed: staticColors.white,
        iconDisabled: isDark ? alpha.white[30] : alpha.black[30],
      },
      /** 链接操作（纯文字链接，无背景无边框） */
      link: {
        bg: staticColors.transparent,
        bgHover: staticColors.transparent,
        bgPressed: staticColors.transparent,
        bgDisabled: staticColors.transparent,
        text: isDark ? brand[40] : brand[50],
        textHover: isDark ? brand[30] : brand[60],
        textPressed: isDark ? brand[50] : brand[70],
        textDisabled: isDark ? alpha.white[30] : alpha.black[30],
        icon: isDark ? brand[40] : brand[50],
        iconHover: isDark ? brand[30] : brand[60],
        iconPressed: isDark ? brand[50] : brand[70],
        iconDisabled: isDark ? alpha.white[30] : alpha.black[30],
      },
    },

    // ========================================================================
    // Status 状态颜色
    // ========================================================================
    status: {
      /** 成功状态 */
      success: {
        bg: status.green[50],
        bgSubtle: isDark ? `${status.green[50]}1A` : status.green[0],
        border: isDark ? status.green[40] : status.green[50],
        borderSubtle: isDark ? status.green[70] : status.green[20],
        text: isDark ? status.green[40] : status.green[60],
        icon: isDark ? status.green[40] : status.green[50],
      },
      /** 警告状态 */
      warning: {
        bg: status.orange[50],
        bgSubtle: isDark ? `${status.orange[50]}1A` : status.orange[0],
        border: isDark ? status.orange[40] : status.orange[50],
        borderSubtle: isDark ? status.orange[70] : status.orange[20],
        text: isDark ? status.orange[40] : status.orange[60],
        icon: isDark ? status.orange[40] : status.orange[50],
      },
      /** 错误状态 */
      error: {
        bg: status.red[50],
        bgSubtle: isDark ? `${status.red[50]}1A` : status.red[0],
        border: isDark ? status.red[40] : status.red[50],
        borderSubtle: isDark ? status.red[70] : status.red[20],
        text: isDark ? status.red[40] : status.red[60],
        icon: isDark ? status.red[40] : status.red[50],
      },
      /** 信息状态 */
      info: {
        bg: status.blue[50],
        bgSubtle: isDark ? `${status.blue[50]}1A` : status.blue[0],
        border: isDark ? status.blue[40] : status.blue[50],
        borderSubtle: isDark ? status.blue[70] : status.blue[20],
        text: isDark ? status.blue[40] : status.blue[60],
        icon: isDark ? status.blue[40] : status.blue[50],
      },
      /** 通知状态（黄色） */
      notice: {
        bg: status.yellow[50],
        bgSubtle: isDark ? `${status.yellow[50]}1A` : status.yellow[0],
        border: isDark ? status.yellow[40] : status.yellow[50],
        borderSubtle: isDark ? status.yellow[70] : status.yellow[20],
        text: isDark ? status.yellow[40] : status.yellow[70],
        icon: isDark ? status.yellow[40] : status.yellow[50],
      },
    },

    // ========================================================================
    // State 交互状态颜色
    // ========================================================================
    state: {
      /** Hover 状态 */
      hover: {
        bg: isDark ? alpha.white[8] : alpha.black[5],
        overlay: isDark ? alpha.white[8] : alpha.black[5],
      },
      /** Active/Pressed 状态 */
      active: {
        bg: isDark ? alpha.white[12] : alpha.black[8],
        overlay: isDark ? alpha.white[12] : alpha.black[8],
      },
      /** Selected 选中状态 */
      selected: {
        bg: isDark ? alpha.white[12] : alpha.black[8],
        bgSubtle: isDark ? `${brand[50]}26` : brand[0], // 26 = 15% 透明度
        border: brand[50],
        text: isDark ? alpha.white[100] : alpha.black[100],
      },
      /** Focused 聚焦状态 */
      focused: {
        ring: brand[50],
        ringOffset: isDark ? blueGray[100] : staticColors.white,
      },
      /** Disabled 禁用状态 */
      disabled: {
        bg: isDark ? blueGray[80] : blueGray[10],
        text: isDark ? alpha.white[30] : alpha.black[30],
        border: isDark ? alpha.white[12] : alpha.black[12],
      },
    },

    // ========================================================================
    // 特殊用途
    // ========================================================================
    special: {
      /** 分割线 */
      divider: {
        default: isDark ? alpha.white[12] : alpha.black[12],
        subtle: isDark ? alpha.white[6] : alpha.black[6],
        strong: isDark ? alpha.white[24] : alpha.black[24],
      },
      /** 阴影颜色 */
      shadow: {
        sm: 'rgba(0, 0, 0, 0.05)',
        md: 'rgba(0, 0, 0, 0.10)',
        lg: 'rgba(0, 0, 0, 0.15)',
        xl: 'rgba(0, 0, 0, 0.20)',
      },
      /** 骨架屏颜色 */
      skeleton: {
        base: isDark ? blueGray[80] : blueGray[10],
        highlight: isDark ? blueGray[70] : blueGray[0],
      },
    },

    // ========================================================================
    // 元信息
    // ========================================================================
    _meta: {
      mode,
      themeName,
      brandColor: brand[50],
    },
  };
}

// ============================================================================
// 预设 Token 实例
// ============================================================================

/** 浅色模式默认 Token */
export const lightTokens = createSemanticTokens({ mode: 'light' });

/** 深色模式默认 Token */
export const darkTokens = createSemanticTokens({ mode: 'dark' });

// ============================================================================
// 类型导出
// ============================================================================

export type SemanticTokens = ReturnType<typeof createSemanticTokens>;

// ============================================================================
// 便捷访问函数
// ============================================================================

/**
 * 根据 isDark 标志获取对应模式的 token
 * 
 * @param isDark - 是否为深色模式
 * @param themeName - 可选的主题色名称
 * @returns 对应模式的语义化 token
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { isDark } = useOutletContext();
 *   const tokens = getTokens(isDark);
 *   
 *   return <div style={{ color: tokens.text.primary }}>Hello</div>;
 * }
 * ```
 */
export function getTokens(isDark: boolean, themeName?: ThemeName): SemanticTokens {
  return createSemanticTokens({ 
    mode: isDark ? 'dark' : 'light',
    themeName,
  });
}

export default createSemanticTokens;
