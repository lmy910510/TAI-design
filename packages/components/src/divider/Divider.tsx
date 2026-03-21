import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
  forwardRef,
  useMemo,
} from "react";
import { SPACING } from "../tokens";
import { useThemeOptional } from "../hooks";

type DividerOrientation = "horizontal" | "vertical";
type DividerVariant = "solid" | "dashed";
type DividerSpacing = keyof typeof SPACING;
type DividerInset = "none" | "start" | "both";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /** 方向 */
  orientation?: DividerOrientation;
  /** 线型 */
  variant?: DividerVariant;
  /** 线宽 */
  thickness?: 1 | 2;
  /** 分割线标签 */
  label?: ReactNode;
  /** 周围留白 */
  spacing?: DividerSpacing;
  /** 水平内缩 */
  inset?: DividerInset;
  /** 竖向分割线长度 */
  length?: number | string;
  /** 是否深色模式 */
  isDark?: boolean;
  /** 自定义类名 */
  className?: string;
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = "horizontal",
      variant = "solid",
      thickness = 1,
      label,
      spacing = "4",
      inset = "none",
      length,
      isDark: isDarkProp,
      className = "",
      style,
      ...restProps
    },
    ref
  ) => {
    const theme = useThemeOptional();
    const isDark = isDarkProp ?? theme.isDark;
    const tokens = theme.tokens;

    const margin = SPACING[spacing];
    const startInset = inset === "start" || inset === "both" ? SPACING["4"] : 0;
    const endInset = inset === "both" ? SPACING["4"] : 0;

    const wrapperStyle = useMemo<CSSProperties>(() => {
      if (orientation === "vertical") {
        return {
          display: "inline-flex",
          marginLeft: margin,
          marginRight: margin,
          alignSelf: "stretch",
          ...style,
        };
      }

      return {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: label ? SPACING["2"] : 0,
        marginTop: margin,
        marginBottom: margin,
        paddingLeft: startInset,
        paddingRight: endInset,
        boxSizing: "border-box",
        ...style,
      };
    }, [endInset, label, margin, orientation, startInset, style]);

    const lineStyle = useMemo<CSSProperties>(() => {
      if (orientation === "vertical") {
        return {
          width: thickness,
          height: length ?? "100%",
          minHeight: typeof length === "number" ? length : 72,
          backgroundColor: tokens.borderColor.level1,
          backgroundImage:
            variant === "dashed"
              ? `repeating-linear-gradient(to bottom, ${tokens.borderColor.level1}, ${tokens.borderColor.level1} 6px, transparent 6px, transparent 12px)`
              : undefined,
        };
      }

      return {
        flex: 1,
        minWidth: 0,
        height: thickness,
        backgroundColor: tokens.borderColor.level1,
        backgroundImage:
          variant === "dashed"
            ? `repeating-linear-gradient(to right, ${tokens.borderColor.level1}, ${tokens.borderColor.level1} 6px, transparent 6px, transparent 12px)`
            : undefined,
      };
    }, [tokens.borderColor.level1, length, orientation, thickness, variant]);

    const labelStyle = useMemo<CSSProperties>(
      () => ({
        flexShrink: 0,
        color: tokens.textColor.tertiary,
        fontSize: tokens.typography.meta.caption.fontSize,
        lineHeight: tokens.typography.meta.caption.lineHeight,
        whiteSpace: "nowrap",
      }),
      [tokens]
    );

    if (orientation === "vertical") {
      return (
        <div
          ref={ref}
          className={`tai-divider tai-divider--vertical tai-divider--${variant} ${className}`.trim()}
          style={wrapperStyle}
          {...restProps}
        >
          <div style={lineStyle} />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={`tai-divider tai-divider--horizontal tai-divider--${variant} ${className}`.trim()}
        style={wrapperStyle}
        {...restProps}
      >
        <div style={lineStyle} />
        {label ? <span style={labelStyle}>{label}</span> : null}
        {label ? <div style={lineStyle} /> : null}
      </div>
    );
  }
);

Divider.displayName = "Divider";
