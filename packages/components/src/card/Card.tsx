import { forwardRef, useMemo, useContext, CSSProperties } from "react";
import { CardProps } from "./Card.types";
import { createColors, RADIUS, SPACING, COLD_GRAY } from "../tokens";
import { ThemeContext } from "../hooks/ThemeContext";

const CARD_RADIUS = RADIUS["2xl"];
const CARD_PADDING = SPACING["4"];

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "gray",
      children,
      className = "",
      onClick,
      isDark: isDarkProp,
      style,
      ...restProps
    },
    ref
  ) => {
    const ctx = useContext(ThemeContext);
    const isDark = isDarkProp ?? ctx?.isDark ?? false;
    const colors = useMemo(() => createColors(isDark), [isDark]);

    const baseStyle = useMemo<CSSProperties>(
      () => ({
        borderRadius: CARD_RADIUS,
        padding: CARD_PADDING,
        transition: "transform 300ms",
      }),
      []
    );

    const variantStyle = useMemo<CSSProperties>(() => {
      switch (variant) {
        case "white":
          return {
            backgroundColor: colors.bg.primary,
          };
        case "elevated":
          return {
            backgroundColor: colors.bg.elevated,
            boxShadow: isDark
              ? "0 12px 48px rgba(0, 0, 0, 0.5)"
              : `0 12px 48px ${COLD_GRAY[100]}14`,
          };
        case "transparent":
          return {};
        case "gray":
        default:
          return {
            backgroundColor: colors.bg.secondary,
          };
      }
    }, [variant, colors, isDark]);

    const containerStyle = useMemo<CSSProperties>(
      () => ({
        ...baseStyle,
        ...variantStyle,
        ...style,
      }),
      [baseStyle, variantStyle, style]
    );

    return (
      <div
        ref={ref}
        className={`tai-card tai-card--${variant} ${
          onClick ? "cursor-pointer" : ""
        } ${className}`.trim()}
        style={containerStyle}
        onClick={onClick}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
