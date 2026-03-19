import { CSSProperties, forwardRef, useContext, useMemo } from "react";
import { ThemeContext } from "../hooks/ThemeContext";
import { BLACK, RADIUS, SPACING, WHITE, createColors } from "../tokens";
import { Image } from "../image";
import { VideoProps } from "./Video.types";

function clampProgress(progress: number) {
  return Math.min(100, Math.max(0, progress));
}

function PlayIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 6V18L18 12L8 6Z" fill={color} />
    </svg>
  );
}

function LockIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 10V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <rect x="6" y="10" width="12" height="10" rx="3" stroke={color} strokeWidth="1.5" />
      <path d="M12 14V16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export const Video = forwardRef<HTMLDivElement, VideoProps>(
  (
    {
      src,
      posterSrc,
      posterAlt = "视频封面",
      variant = "player",
      progress = 32,
      currentTime = "02:34",
      duration = "08:12",
      showPlayButton = true,
      locked = false,
      lockTitle = "为了您的安全",
      lockDescription = "车辆行驶中无法播放视频",
      aspectRatio = "16 / 9",
      isDark: isDarkProp,
      className = "",
      style,
      ...restProps
    },
    ref
  ) => {
    const ctx = useContext(ThemeContext);
    const isDark = isDarkProp ?? ctx?.isDark ?? false;
    const colors = useMemo(() => createColors(isDark), [isDark]);
    const safeProgress = clampProgress(progress);

    const containerStyle = useMemo<CSSProperties>(
      () => ({
        position: "relative",
        width: "100%",
        aspectRatio,
        overflow: "hidden",
        borderRadius: RADIUS["2xl"],
        backgroundColor: colors.bg.tertiary,
        border: `1px solid ${colors.border.subtle}`,
        ...style,
      }),
      [aspectRatio, colors, style]
    );

    const playButtonStyle = useMemo<CSSProperties>(
      () => ({
        width: 72,
        height: 72,
        borderRadius: RADIUS["4xl"],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isDark ? WHITE[24] : BLACK[30],
        backdropFilter: "blur(12px)",
      }),
      [isDark]
    );

    const bottomBarStyle = useMemo<CSSProperties>(
      () => ({
        position: "absolute",
        left: SPACING["4"],
        right: SPACING["4"],
        bottom: SPACING["4"],
        padding: `${SPACING["2"]}px ${SPACING["3"]}px`,
        borderRadius: RADIUS.xl,
        backgroundColor: isDark ? BLACK[60] : BLACK[42],
        display: "flex",
        alignItems: "center",
        gap: SPACING["3"],
        color: colors.static.white,
      }),
      [colors, isDark]
    );

    const renderMedia = () => {
      if (src && !locked) {
        return (
          <video
            src={src}
            poster={posterSrc}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        );
      }

      return (
        <Image
          src={posterSrc}
          alt={posterAlt}
          radius="2xl"
          width="100%"
          height="100%"
          placeholderLabel={variant === "thumbnail" ? "视频缩略图" : "视频封面"}
          isDark={isDark}
          showBorder={false}
        />
      );
    };

    const renderPlayer = () => (
      <>
        {showPlayButton && !locked ? (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={playButtonStyle}>
              <PlayIcon color={colors.static.white} />
            </div>
          </div>
        ) : null}
        <div style={bottomBarStyle}>
          <span style={{ fontSize: 24, lineHeight: 1 }}>{currentTime}</span>
          <div
            style={{
              flex: 1,
              height: 6,
              borderRadius: 9999,
              backgroundColor: WHITE[24],
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${safeProgress}%`,
                height: "100%",
                backgroundColor: colors.static.white,
                borderRadius: 9999,
              }}
            />
          </div>
          <span style={{ fontSize: 24, lineHeight: 1 }}>{duration}</span>
        </div>
      </>
    );

    const renderThumbnail = () => (
      <>
        {showPlayButton ? (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: RADIUS["4xl"],
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: BLACK[42],
              }}
            >
              <PlayIcon color={colors.static.white} />
            </div>
          </div>
        ) : null}
        <div
          style={{
            position: "absolute",
            right: SPACING["2"],
            bottom: SPACING["2"],
            padding: `${SPACING["2"]}px`,
            borderRadius: RADIUS.xl,
            backgroundColor: BLACK[60],
            color: colors.static.white,
            fontSize: 18,
            lineHeight: 1,
          }}
        >
          {duration}
        </div>
      </>
    );

    const renderLocked = () => (
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: SPACING["3"],
          padding: SPACING["6"],
          backgroundColor: colors.bg.overlay,
          textAlign: "center",
        }}
      >
        <LockIcon color={colors.static.white} />
        <div style={{ fontSize: 30, lineHeight: 1.2, fontWeight: 600, color: colors.static.white }}>
          {lockTitle}
        </div>
        <div style={{ fontSize: 24, lineHeight: 1.4, color: WHITE[72] }}>
          {lockDescription}
        </div>
      </div>
    );

    return (
      <div
        ref={ref}
        className={`tai-video tai-video--${variant} ${className}`.trim()}
        style={containerStyle}
        {...restProps}
      >
        {renderMedia()}
        {variant === "thumbnail" ? renderThumbnail() : null}
        {variant === "player" && !locked ? renderPlayer() : null}
        {(variant === "locked" || locked) ? renderLocked() : null}
      </div>
    );
  }
);

Video.displayName = "Video";
