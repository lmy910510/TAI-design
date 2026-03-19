import { forwardRef, useMemo, useContext, CSSProperties, useState } from "react";
import {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  ButtonVisualState,
} from "./Button.types";
import { createColors, Colors } from "../tokens";
import { ThemeContext } from "../hooks/ThemeContext";

// ============================================================================
// 尺寸配置
// ============================================================================

export const BUTTON_SIZE_CONFIG: Record<
  ButtonSize,
  {
    height: number;
    paddingX: number;
    radius: number;
    fontSize: number;
    iconSize: number;
    iconGap: number;
  }
> = {
  large: {
    height: 84,
    paddingX: 42,
    radius: 42,
    fontSize: 32,
    iconSize: 36,
    iconGap: 12,
  },
  medium: {
    height: 72,
    paddingX: 36,
    radius: 36,
    fontSize: 30,
    iconSize: 32,
    iconGap: 10,
  },
  small: {
    height: 60,
    paddingX: 30,
    radius: 30,
    fontSize: 28,
    iconSize: 28,
    iconGap: 8,
  },
  extraSmall: {
    height: 48,
    paddingX: 24,
    radius: 24,
    fontSize: 24,
    iconSize: 24,
    iconGap: 6,
  },
};

// ============================================================================
// 工具函数
// ============================================================================

function getVariantColors(colors: Colors, variant: ButtonVariant) {
  const btnColors = colors.button[variant];
  return {
    bg: btnColors.bg,
    bgHover: btnColors.bgHover,
    bgActive: btnColors.bgActive,
    bgDisabled: btnColors.bgDisabled,
    text: btnColors.text,
    textHover: btnColors.textHover,
    textActive: btnColors.textActive,
    textDisabled: btnColors.textDisabled,
    icon: "icon" in btnColors ? btnColors.icon : btnColors.text,
    iconHover: "iconHover" in btnColors ? btnColors.iconHover : btnColors.textHover,
    iconActive: "iconActive" in btnColors ? btnColors.iconActive : btnColors.textActive,
    iconDisabled: "iconDisabled" in btnColors ? btnColors.iconDisabled : btnColors.textDisabled,
    border: "border" in btnColors ? btnColors.border : undefined,
  };
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
    const ctx = useContext(ThemeContext);
    const isDark = isDarkProp ?? ctx?.isDark ?? false;
    const colors = useMemo(() => createColors(isDark), [isDark]);
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const sizeConfig = BUTTON_SIZE_CONFIG[size];
    const colorConfig = getVariantColors(colors, variant);
    const visualState = resolveVisualState(disabled, forceState, isPressed, isHovered);

    const buttonStyle = useMemo<CSSProperties>(() => {
      const isIconOnly = iconPosition === "only";
      const backgroundColor =
        visualState === "disabled"
          ? colorConfig.bgDisabled
          : visualState === "pressed"
            ? colorConfig.bgActive
            : visualState === "hover"
              ? colorConfig.bgHover
              : colorConfig.bg;
      const textColor =
        visualState === "disabled"
          ? colorConfig.textDisabled
          : visualState === "pressed"
            ? colorConfig.textActive
            : visualState === "hover"
              ? colorConfig.textHover
              : colorConfig.text;

      return {
        // 尺寸
        height: sizeConfig.height,
        minWidth: isIconOnly ? sizeConfig.height : undefined,
        width: isIconOnly ? sizeConfig.height : fullWidth ? "100%" : undefined,
        paddingLeft: isIconOnly ? 0 : sizeConfig.paddingX,
        paddingRight: isIconOnly ? 0 : sizeConfig.paddingX,
        borderRadius: sizeConfig.radius,
        // 字体
        fontSize: sizeConfig.fontSize,
        fontWeight: 500,
        lineHeight: 1,
        // 颜色
        backgroundColor,
        color: textColor,
        border: colorConfig.border ? `2px solid ${colorConfig.border}` : "none",
        // 布局
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: sizeConfig.iconGap,
        // 交互
        cursor: disabled ? "not-allowed" : "pointer",
        transition:
          "background-color 150ms ease, color 150ms ease, transform 100ms ease, border-color 150ms ease",
        outline: "none",
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        // 继承
        ...style,
      };
    }, [sizeConfig, colorConfig, iconPosition, fullWidth, disabled, style, visualState]);

    const iconStyle = useMemo<CSSProperties>(() => {
      const iconColor =
        visualState === "disabled"
          ? colorConfig.iconDisabled
          : visualState === "pressed"
            ? colorConfig.iconActive
            : visualState === "hover"
              ? colorConfig.iconHover
              : colorConfig.icon;

      return {
        width: sizeConfig.iconSize,
        height: sizeConfig.iconSize,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        color: iconColor,
      };
    }, [sizeConfig.iconSize, colorConfig, visualState]);

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
