import { forwardRef, useMemo, CSSProperties } from "react";
import { CardProps } from "./Card.types";
import { RADIUS, SPACING, SHADOW } from "../tokens";
import { useThemeOptional } from "../hooks/ThemeContext";

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
    const { isDark: ctxDark, tokens: ctxTokens } = useThemeOptional();
    const isDark = isDarkProp ?? ctxDark;
    const tokens = ctxTokens;

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
            backgroundColor: tokens.bgColor.page,
          };
        case "elevated":
          return {
            backgroundColor: tokens.bgColor.elevated,
            boxShadow: SHADOW.xl,
          };
        case "transparent":
          return {};
        case "gray":
        default:
          return {
            backgroundColor: tokens.bgColor.container,
          };
      }
    }, [variant, tokens]);

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
