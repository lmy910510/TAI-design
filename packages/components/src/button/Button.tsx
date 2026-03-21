import { forwardRef, useMemo, CSSProperties, useState } from "react";
import {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  ButtonVisualState,
} from "./Button.types";
import { type SemanticTokens, PRESSED_OVERLAY } from "../tokens/semanticTokens";
import { STATIC } from "../tokens/primitives";
import { useThemeOptional } from "../hooks/ThemeContext";

// ============================================================================
// 尺寸配置
// ============================================================================

export const BUTTON_SIZE_CONFIG: Record<
  ButtonSize,
  {
    height: number;
    paddingX: number;
    radius: number;
    iconSize: number;
    iconGap: number;
    /** 对应 tokens.typography.label 中的语义 key */
    typographyKey: "buttonLarge" | "buttonMedium" | "buttonSmall" | "buttonMini";
  }
> = {
  large: {
    height: 84,
    paddingX: 42,
    radius: 42,
    iconSize: 36,
    iconGap: 12,
    typographyKey: "buttonLarge",
  },
  medium: {
    height: 72,
    paddingX: 36,
    radius: 36,
    iconSize: 32,
    iconGap: 10,
    typographyKey: "buttonMedium",
  },
  small: {
    height: 60,
    paddingX: 30,
    radius: 30,
    iconSize: 28,
    iconGap: 8,
    typographyKey: "buttonSmall",
  },
  extraSmall: {
    height: 48,
    paddingX: 24,
    radius: 24,
    iconSize: 24,
    iconGap: 6,
    typographyKey: "buttonMini",
  },
};

// ============================================================================
// 变体配色 — 完全从公开语义层 token 派生，不再自建独立 token
//
// 车机端交互模型：
// - 无鼠标 hover（hover 态仅用于文档预览）
// - 按下态 = 默认底色 + pressedOverlay 蒙层叠加
// - 禁用态 = 降低不透明度
// ============================================================================

interface VariantColors {
  bg: string;
  text: string;
  icon: string;
  border?: string;
  /** 按下态背景（默认使用 pressedOverlay 叠加） */
  bgPressed?: string;
  /** 禁用态背景 */
  bgDisabled: string;
  /** 禁用态文字/图标 */
  textDisabled: string;
}

function resolveVariantColors(tokens: SemanticTokens, variant: ButtonVariant): VariantColors {
  switch (variant) {
    case "primary":
      return {
        bg: tokens.bgColor.brand,             // 主按钮底色 = 品牌色背景
        text: tokens.textColor.anti,          // 反色文字
        icon: tokens.textColor.anti,
        bgDisabled: tokens.bgColor.componentDisabled,
        textDisabled: tokens.textColor.disabled,
      };
    case "secondary":
      return {
        bg: tokens.bgColor.component,         // 二级按钮底色 = 组件背景
        text: tokens.textColor.primary,
        icon: tokens.textColor.primary,
        bgDisabled: tokens.bgColor.componentDisabled,
        textDisabled: tokens.textColor.disabled,
      };
    case "ghost":
      return {
        bg: STATIC.transparent,
        text: tokens.textColor.primary,
        icon: tokens.textColor.primary,
        border: tokens.borderColor.level2,
        bgDisabled: STATIC.transparent,
        textDisabled: tokens.textColor.disabled,
      };
    case "danger":
      return {
        bg: tokens.functionalColor.error.light,
        text: tokens.functionalColor.error.main,
        icon: tokens.functionalColor.error.main,
        bgDisabled: tokens.bgColor.componentDisabled,
        textDisabled: tokens.functionalColor.error.disabled,
      };
    default:
      return {
        bg: tokens.bgColor.component,
        text: tokens.textColor.primary,
        icon: tokens.textColor.primary,
        bgDisabled: tokens.bgColor.componentDisabled,
        textDisabled: tokens.textColor.disabled,
      };
  }
}

function resolveVisualState(
  disabled: boolean,
  forceState: ButtonVisualState | undefined,
  isPressed: boolean,
  isHovered: boolean
): ButtonVisualState | "disabled" {
  if (disabled) return "disabled";
  if (forceState) return forceState;
  if (isPressed) return "pressed";
  if (isHovered) return "hover";
  return "default";
}

// ============================================================================
// 组件
// ============================================================================

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "large",
      iconPosition = "none",
      icon,
      disabled = false,
      fullWidth = false,
      isDark: isDarkProp,
      forceState,
      htmlType = "button",
      onClick,
      onMouseEnter,
      onMouseLeave,
      onMouseDown,
      onMouseUp,
      onTouchStart,
      onTouchEnd,
      onTouchCancel,
      onBlur,
      className = "",
      children,
      style,
      ...restProps
    },
    ref
  ) => {
    const { isDark: ctxDark, tokens: ctxTokens } = useThemeOptional();
    const isDark = isDarkProp ?? ctxDark;
    const tokens = ctxTokens;
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const sizeConfig = BUTTON_SIZE_CONFIG[size];
    const variantColors = resolveVariantColors(tokens, variant);
    const visualState = resolveVisualState(disabled, forceState, isPressed, isHovered);

    const buttonStyle = useMemo<CSSProperties>(() => {
      const isIconOnly = iconPosition === "only";
      const isDisabled = visualState === "disabled";
      const isPressedState = visualState === "pressed";

      const backgroundColor = isDisabled
        ? variantColors.bgDisabled
        : variantColors.bg;
      const textColor = isDisabled
        ? variantColors.textDisabled
        : variantColors.text;
      const borderColor = variantColors.border;

      return {
        // 尺寸
        height: sizeConfig.height,
        minWidth: isIconOnly ? sizeConfig.height : undefined,
        width: isIconOnly ? sizeConfig.height : fullWidth ? "100%" : undefined,
        paddingLeft: isIconOnly ? 0 : sizeConfig.paddingX,
        paddingRight: isIconOnly ? 0 : sizeConfig.paddingX,
        borderRadius: sizeConfig.radius,
        // 字体 — 语义排版 token
        fontSize: tokens.typography.label[sizeConfig.typographyKey].fontSize,
        fontWeight: tokens.typography.label[sizeConfig.typographyKey].fontWeight,
        lineHeight: tokens.typography.label[sizeConfig.typographyKey].lineHeight,
        // 颜色
        backgroundColor,
        color: textColor,
        border: borderColor ? `2px solid ${isDisabled ? tokens.borderColor.level1 : borderColor}` : "none",
        // 按下态：统一叠加蒙层（车机端标准交互）
        backgroundImage: isPressedState ? `linear-gradient(${PRESSED_OVERLAY}, ${PRESSED_OVERLAY})` : undefined,
        // 布局
        position: "relative" as const,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: sizeConfig.iconGap,
        // 交互
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: isDisabled ? 1 : undefined,
        transition:
          "background-color 150ms ease, color 150ms ease, transform 100ms ease, border-color 150ms ease",
        outline: "none",
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        // 继承
        ...style,
      };
    }, [sizeConfig, variantColors, tokens.borderColor.level1, iconPosition, fullWidth, disabled, style, visualState]);

    const iconStyle = useMemo<CSSProperties>(() => {
      const iconColor = visualState === "disabled"
        ? variantColors.textDisabled
        : variantColors.icon;

      return {
        width: sizeConfig.iconSize,
        height: sizeConfig.iconSize,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        color: iconColor,
      };
    }, [sizeConfig.iconSize, variantColors, visualState]);

    const renderIcon = () => {
      if (!icon || iconPosition === "none") return null;
      return <span style={iconStyle}>{icon}</span>;
    };

    const renderContent = () => {
      if (iconPosition === "only") {
        return renderIcon();
      }
      if (iconPosition === "left") {
        return (
          <>
            {renderIcon()}
            {children && <span>{children}</span>}
          </>
        );
      }
      if (iconPosition === "right") {
        return (
          <>
            {children && <span>{children}</span>}
            {renderIcon()}
          </>
        );
      }
      return children;
    };

    return (
      <button
        ref={ref}
        type={htmlType}
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
        onMouseEnter={(event) => {
          setIsHovered(true);
          onMouseEnter?.(event);
        }}
        onMouseLeave={(event) => {
          setIsHovered(false);
          setIsPressed(false);
          onMouseLeave?.(event);
        }}
        onMouseDown={(event) => {
          if (event.button === 0) {
            setIsPressed(true);
          }
          onMouseDown?.(event);
        }}
        onMouseUp={(event) => {
          setIsPressed(false);
          onMouseUp?.(event);
        }}
        onTouchStart={(event) => {
          setIsPressed(true);
          onTouchStart?.(event);
        }}
        onTouchEnd={(event) => {
          setIsPressed(false);
          onTouchEnd?.(event);
        }}
        onTouchCancel={(event) => {
          setIsPressed(false);
          onTouchCancel?.(event);
        }}
        onBlur={(event) => {
          setIsHovered(false);
          setIsPressed(false);
          onBlur?.(event);
        }}
        className={`tai-button tai-button--${variant} tai-button--${size} ${className}`.trim()}
        style={buttonStyle}
        {...restProps}
      >
        {renderContent()}
      </button>
    );
  }
);

Button.displayName = "Button";
