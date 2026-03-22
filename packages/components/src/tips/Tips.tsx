import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
  forwardRef,
  useMemo,
} from "react";
import { CloseIcon } from "tdesign-icons-react";
import { RADIUS, SHADOW, SPACING } from "../tokens";
import { useThemeOptional } from "../hooks";

type TipsPlacement = "top" | "bottom" | "left" | "right";

export interface TipsProps extends HTMLAttributes<HTMLDivElement> {
  /** 是否显示 */
  visible?: boolean;
  /** 位置 */
  placement?: TipsPlacement;
  /** 是否显示箭头 */
  showArrow?: boolean;
  /** 最大宽度 */
  maxWidth?: number | string;
  /** 关闭回调 */
  onClose?: () => void;
  /** 是否深色模式 */
  isDark?: boolean;
  /** 提示内容 */
  children?: ReactNode;
  /** 自定义类名 */
  className?: string;
}

const TIPS_CONFIG = {
  minHeight: 72,
  arrowSize: 12,
  closeSize: 36,
  textSize: 28,
};

export const Tips = forwardRef<HTMLDivElement, TipsProps>(
  (
    {
      visible = true,
      placement = "top",
      showArrow = true,
      maxWidth = 480,
      onClose,
      isDark: isDarkProp,
      className = "",
      children,
      style,
      ...restProps
    },
    ref
  ) => {
    const theme = useThemeOptional();
    const isDark = isDarkProp ?? theme.isDark;
    const tokens = theme.tokens;

    if (!visible) {
      return null;
    }

    const bubbleStyle = useMemo<CSSProperties>(
      () => ({
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: SPACING["3"],
        minHeight: TIPS_CONFIG.minHeight,
        maxWidth,
        paddingLeft: SPACING["4"],
        paddingRight: SPACING["4"],
        paddingTop: SPACING["3"],
        paddingBottom: SPACING["3"],
        boxSizing: "border-box",
        borderRadius: RADIUS["2xl"],
        backgroundColor: tokens.bgColor.container,
        color: tokens.textColor.primary,
        border: `1px solid ${tokens.borderColor.level2}`,
        boxShadow: SHADOW.xl,
        ...style,
      }),
      [tokens.bgColor.container, tokens.borderColor.level2, tokens.textColor.primary, maxWidth, style]
    );

    const arrowStyle = useMemo<CSSProperties>(() => {
      const base: CSSProperties = {
        position: "absolute",
        width: 0,
        height: 0,
      };

      switch (placement) {
        case "bottom":
          return {
            ...base,
            top: -TIPS_CONFIG.arrowSize,
            left: SPACING["4"],
            borderLeft: `${TIPS_CONFIG.arrowSize}px solid transparent`,
            borderRight: `${TIPS_CONFIG.arrowSize}px solid transparent`,
            borderBottom: `${TIPS_CONFIG.arrowSize}px solid ${tokens.bgColor.container}`,
          };
        case "left":
          return {
            ...base,
            top: "50%",
            right: -TIPS_CONFIG.arrowSize,
            transform: "translateY(-50%)",
            borderTop: `${TIPS_CONFIG.arrowSize}px solid transparent`,
            borderBottom: `${TIPS_CONFIG.arrowSize}px solid transparent`,
            borderLeft: `${TIPS_CONFIG.arrowSize}px solid ${tokens.bgColor.container}`,
          };
        case "right":
          return {
            ...base,
            top: "50%",
            left: -TIPS_CONFIG.arrowSize,
            transform: "translateY(-50%)",
            borderTop: `${TIPS_CONFIG.arrowSize}px solid transparent`,
            borderBottom: `${TIPS_CONFIG.arrowSize}px solid transparent`,
            borderRight: `${TIPS_CONFIG.arrowSize}px solid ${tokens.bgColor.container}`,
          };
        case "top":
        default:
          return {
            ...base,
            bottom: -TIPS_CONFIG.arrowSize,
            left: SPACING["4"],
            borderLeft: `${TIPS_CONFIG.arrowSize}px solid transparent`,
            borderRight: `${TIPS_CONFIG.arrowSize}px solid transparent`,
            borderTop: `${TIPS_CONFIG.arrowSize}px solid ${tokens.bgColor.container}`,
          };
      }
    }, [tokens.bgColor.container, placement]);

    return (
      <div
        ref={ref}
        className={`tai-tips tai-tips--${placement} ${className}`.trim()}
        style={bubbleStyle}
        {...restProps}
      >
        {showArrow ? <span aria-hidden="true" style={arrowStyle} /> : null}
        <div
          style={{
            flex: 1,
            minWidth: 0,
            fontSize: TIPS_CONFIG.textSize,
            lineHeight: tokens.typography.body.primary.lineHeight,
          }}
        >
          {children}
        </div>
        {onClose ? (
          <button
            type="button"
            aria-label="关闭提示"
            onClick={onClose}
            style={{
              width: TIPS_CONFIG.closeSize,
              height: TIPS_CONFIG.closeSize,
              flexShrink: 0,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              borderRadius: RADIUS.xl,
              background: "transparent",
              color: tokens.textColor.primary,
              cursor: "pointer",
            }}
          >
            <CloseIcon style={{ fontSize: 24, color: tokens.textColor.primary }} />
          </button>
        ) : null}
      </div>
    );
  }
);

Tips.displayName = "Tips";
