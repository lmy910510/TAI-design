import {
  CSSProperties,
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useThemeOptional } from "../hooks/ThemeContext";
import { RADIUS, SPACING } from "../tokens";
import { ImageProps, ImageRadius } from "./Image.types";

function resolveRadius(radius: ImageRadius) {
  if (radius === "full") return 9999;
  return RADIUS[radius];
}

function PlaceholderIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6.5C4 5.11929 5.11929 4 6.5 4H17.5C18.8807 4 20 5.11929 20 6.5V17.5C20 18.8807 18.8807 20 17.5 20H6.5C5.11929 20 4 18.8807 4 17.5V6.5Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path d="M7 15L10 12L13 14.5L16 10.5L19 15.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="8.5" r="1.25" fill={color} />
    </svg>
  );
}

export const Image = forwardRef<HTMLDivElement, ImageProps>(
  (
    {
      src,
      alt = "",
      width,
      height,
      aspectRatio,
      radius = "xl",
      fit = "cover",
      placeholder,
      placeholderLabel = "图片",
      overlay,
      showBorder = false,
      isDark: isDarkProp,
      imgStyle,
      className = "",
      style,
      ...restProps
    },
    ref
  ) => {
    const { isDark: ctxDark, tokens: ctxTokens } = useThemeOptional();
    const isDark = isDarkProp ?? ctxDark;
    const tokens = ctxTokens;
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
      setHasError(false);
    }, [src]);

    const containerStyle = useMemo<CSSProperties>(
      () => ({
        position: "relative",
        width,
        height,
        aspectRatio,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: tokens.bgColor.secondaryContainer,
        borderRadius: resolveRadius(radius),
        border: showBorder ? `1px solid ${tokens.borderColor.level1}` : undefined,
        ...style,
      }),
      [width, height, aspectRatio, tokens, radius, showBorder, style]
    );

    const actualImgStyle = useMemo<CSSProperties>(
      () => ({
        width: "100%",
        height: "100%",
        objectFit: fit,
        display: "block",
        ...imgStyle,
      }),
      [fit, imgStyle]
    );

    const placeholderStyle = useMemo<CSSProperties>(
      () => ({
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: SPACING["2"],
        color: tokens.textColor.disabled,
        backgroundColor: tokens.bgColor.secondaryContainer,
      }),
      [tokens]
    );

    const showNativeImage = Boolean(src) && !hasError;

    return (
      <div
        ref={ref}
        className={`tai-image ${className}`.trim()}
        style={containerStyle}
        {...restProps}
      >
        {showNativeImage ? (
          <img
            src={src}
            alt={alt}
            style={actualImgStyle}
            onError={() => setHasError(true)}
          />
        ) : (
          <div style={placeholderStyle} aria-label={alt || placeholderLabel}>
            {placeholder ?? (
              <>
                <PlaceholderIcon color={tokens.textColor.disabled} />
                <span style={{ fontSize: tokens.typography.meta.caption.fontSize, lineHeight: tokens.typography.meta.caption.lineHeight, color: tokens.textColor.disabled }}>
                  {placeholderLabel}
                </span>
              </>
            )}
          </div>
        )}
        {overlay ? (
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
            }}
          >
            {overlay}
          </div>
        ) : null}
      </div>
    );
  }
);

Image.displayName = "Image";
