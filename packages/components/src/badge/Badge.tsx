import {
  CSSProperties,
  ReactNode,
  Ref,
  forwardRef,
  useMemo,
} from "react";
import { createColors } from "../tokens";
import { useThemeOptional } from "../hooks";

type BadgeVariant = "standard" | "dot";
type BadgeColor = "danger" | "notice" | "success" | "info" | "brand";
type BadgeSize = "large" | "medium" | "small";

const SIZE_CONFIG: Record<
  BadgeSize,
  {
    height: number;
    minWidth: number;
    paddingX: number;
    fontSize: number;
    dotSize: number;
  }
> = {
  large: { height: 36, minWidth: 36, paddingX: 12, fontSize: 24, dotSize: 18 },
  medium: { height: 30, minWidth: 30, paddingX: 12, fontSize: 18, dotSize: 12 },
  small: { height: 24, minWidth: 24, paddingX: 6, fontSize: 18, dotSize: 12 },
};

export interface BadgeProps {
  /** 数字内容 */
  count?: number;
  /** 最大显示数字 */
  maxCount?: number;
  /** 变体 */
  variant?: BadgeVariant;
  /** 颜色 */
  color?: BadgeColor;
  /** 尺寸 */
  size?: BadgeSize;
  /** 数值为 0 时是否显示 */
  showZero?: boolean;
  /** 自定义内容 */
  content?: ReactNode;
  /** 位置偏移 [right, top] */
  offset?: [number, number];
  /** 是否深色模式 */
  isDark?: boolean;
  /** 子元素 */
  children?: ReactNode;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      count,
      maxCount = 99,
      variant = "standard",
      color = "danger",
      size = "medium",
      showZero = false,
      content,
      offset = [0, 0],
      isDark: isDarkProp,
      children,
      className = "",
      style,
    },
    ref
  ) => {
    const theme = useThemeOptional();
    const isDark = isDarkProp ?? theme.isDark;
    const colors = useMemo(() => createColors(isDark), [isDark]);
    const sizeConfig = SIZE_CONFIG[size];

    const shouldShow = useMemo(() => {
      if (variant === "dot") {
        return true;
      }
      if (content !== undefined) {
        return true;
      }
      if (count === undefined) {
        return false;
      }
      if (count === 0) {
        return showZero;
      }
      return count > 0;
    }, [content, count, showZero, variant]);

    const displayContent = useMemo(() => {
      if (variant === "dot") {
        return null;
      }
      if (content !== undefined) {
        return content;
      }
      if (count === undefined) {
        return null;
      }
      if (count > maxCount) {
        return `${maxCount}+`;
      }
      return String(count);
    }, [content, count, maxCount, variant]);

    const badgeColor = useMemo(() => {
      switch (color) {
        case "success":
          return colors.functional.success.main;
        case "notice":
          return colors.functional.notice.main;
        case "info":
          return colors.functional.info.main;
        case "brand":
          return colors.brand.primary;
        case "danger":
        default:
          return colors.functional.danger.main;
      }
    }, [color, colors.brand.primary, colors.functional.danger.main, colors.functional.info.main, colors.functional.notice.main, colors.functional.success.main]);

    const containerStyle = useMemo<CSSProperties>(
      () => ({
        position: "relative",
        display: "inline-flex",
        ...style,
      }),
      [style]
    );

    const badgeStyle = useMemo<CSSProperties>(() => {
      if (variant === "dot") {
        return {
          position: children ? "absolute" : "relative",
          top: children ? offset[1] : 0,
          right: children ? offset[0] : 0,
          transform: children ? "translate(50%, -50%)" : undefined,
          width: sizeConfig.dotSize,
          height: sizeConfig.dotSize,
          borderRadius: "50%",
          backgroundColor: badgeColor,
          border: children ? `2px solid ${colors.bg.primary}` : undefined,
          boxSizing: "border-box",
        };
      }

      const isNumber =
        typeof displayContent === "string" && /^\d+$/.test(displayContent);
      const isSingleDigit = isNumber && displayContent.length === 1;

      return {
        position: children ? "absolute" : "relative",
        top: children ? offset[1] : 0,
        right: children ? offset[0] : 0,
        transform: children ? "translate(50%, -50%)" : undefined,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: sizeConfig.height,
        minWidth: isSingleDigit ? sizeConfig.height : sizeConfig.minWidth,
        paddingLeft: isSingleDigit ? 0 : sizeConfig.paddingX,
        paddingRight: isSingleDigit ? 0 : sizeConfig.paddingX,
        borderRadius: sizeConfig.height / 2,
        backgroundColor: badgeColor,
        color: colors.static.white,
        border: children ? `2px solid ${colors.bg.primary}` : undefined,
        boxSizing: "border-box",
        fontSize: sizeConfig.fontSize,
        lineHeight: 1,
        fontWeight: 600,
        whiteSpace: "nowrap",
      };
    }, [badgeColor, children, colors.bg.primary, colors.static.white, displayContent, offset, sizeConfig, variant]);

    if (!children) {
      if (!shouldShow) {
        return null;
      }

      return (
        <span
          ref={ref as Ref<HTMLSpanElement>}
          className={`tai-badge tai-badge--${variant} tai-badge--${size} tai-badge--${color} ${className}`.trim()}
          style={badgeStyle}
        >
          {displayContent}
        </span>
      );
    }

    return (
      <div
        ref={ref}
        className={`tai-badge-wrapper ${className}`.trim()}
        style={containerStyle}
      >
        {children}
        {shouldShow ? (
          <span
            className={`tai-badge tai-badge--${variant} tai-badge--${size} tai-badge--${color}`}
            style={badgeStyle}
          >
            {displayContent}
          </span>
        ) : null}
      </div>
    );
  }
);

Badge.displayName = "Badge";
