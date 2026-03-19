import { CSSProperties, forwardRef, useContext, useMemo } from "react";
import { ThemeContext } from "../hooks/ThemeContext";
import { BLACK, RADIUS, SHADOW, SPACING, WHITE, createColors } from "../tokens";
import { Image } from "../image";
import { AudioPlayerProps } from "./AudioPlayer.types";

function clampProgress(progress: number) {
  return Math.min(100, Math.max(0, progress));
}

function PlayIcon({ color }: { color: string }) {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 6V18L18 12L8 6Z" fill={color} />
    </svg>
  );
}

function PauseIcon({ color }: { color: string }) {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="7" y="6" width="3" height="12" rx="1.5" fill={color} />
      <rect x="14" y="6" width="3" height="12" rx="1.5" fill={color} />
    </svg>
  );
}

function PreviousIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M17 7L10 12L17 17V7Z" fill={color} />
      <rect x="7" y="7" width="2" height="10" rx="1" fill={color} />
    </svg>
  );
}

function NextIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 7L14 12L7 17V7Z" fill={color} />
      <rect x="15" y="7" width="2" height="10" rx="1" fill={color} />
    </svg>
  );
}

function MusicPlaceholder({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 18V8L18 6V16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="18" r="2.5" stroke={color} strokeWidth="1.5" />
      <circle cx="16" cy="16" r="2.5" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export const AudioPlayer = forwardRef<HTMLDivElement, AudioPlayerProps>(
  (
    {
      variant = "full",
      title,
      subtitle,
      coverSrc,
      coverAlt = title,
      currentTime = "02:34",
      duration = "06:12",
      progress = 34,
      playing = true,
      showTransportControls = true,
      isDark: isDarkProp,
      onPreviousClick,
      onPlayPauseClick,
      onNextClick,
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

    const containerStyle = useMemo<CSSProperties>(() => {
      const base: CSSProperties = {
        width: "100%",
        display: "flex",
        gap: SPACING["4"],
        borderRadius: RADIUS["2xl"],
        border: `1px solid ${colors.border.subtle}`,
        color: colors.text.primary,
        backgroundColor: colors.bg.elevated,
        ...style,
      };

      if (variant === "full") {
        return {
          ...base,
          flexDirection: "column",
          padding: SPACING["6"],
          boxShadow: SHADOW.xl,
        };
      }

      if (variant === "mini") {
        return {
          ...base,
          alignItems: "center",
          padding: SPACING["4"],
        };
      }

      return {
        ...base,
        alignItems: "center",
        padding: SPACING["3"],
      };
    }, [colors, style, variant]);

    const coverSize = variant === "full" ? 192 : variant === "mini" ? 72 : 60;
    const titleSize = variant === "full" ? 42 : variant === "mini" ? 30 : 28;
    const subtitleSize = variant === "full" ? 28 : 24;

    const coverPlaceholder = (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.bg.tertiary,
        }}
      >
        <MusicPlaceholder color={colors.text.disabled} />
      </div>
    );

    const controlButton = (size: number, filled: boolean) => ({
      width: size,
      height: size,
      border: "none",
      borderRadius: RADIUS["4xl"],
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      backgroundColor: filled ? colors.button.primary.bg : colors.bg.secondary,
      color: filled ? colors.button.primary.text : colors.text.primary,
      flexShrink: 0,
    });

    const progressTrack = (
      <div style={{ display: "flex", flexDirection: "column", gap: SPACING["2"], width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: SPACING["2"], color: colors.text.tertiary }}>
          <span style={{ fontSize: 22, lineHeight: 1 }}>{currentTime}</span>
          <div
            style={{
              flex: 1,
              height: 6,
              borderRadius: 9999,
              backgroundColor: isDark ? WHITE[12] : BLACK[10],
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${safeProgress}%`,
                height: "100%",
                borderRadius: 9999,
                backgroundColor: colors.text.primary,
              }}
            />
          </div>
          <span style={{ fontSize: 22, lineHeight: 1 }}>{duration}</span>
        </div>
      </div>
    );

    const transportControls = showTransportControls ? (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: SPACING["3"] }}>
        <button type="button" onClick={onPreviousClick} style={controlButton(60, false)} aria-label="上一首">
          <PreviousIcon color={colors.text.primary} />
        </button>
        <button type="button" onClick={onPlayPauseClick} style={controlButton(84, true)} aria-label={playing ? "暂停" : "播放"}>
          {playing ? <PauseIcon color={colors.button.primary.text} /> : <PlayIcon color={colors.button.primary.text} />}
        </button>
        <button type="button" onClick={onNextClick} style={controlButton(60, false)} aria-label="下一首">
          <NextIcon color={colors.text.primary} />
        </button>
      </div>
    ) : (
      <button type="button" onClick={onPlayPauseClick} style={controlButton(60, true)} aria-label={playing ? "暂停" : "播放"}>
        {playing ? <PauseIcon color={colors.button.primary.text} /> : <PlayIcon color={colors.button.primary.text} />}
      </button>
    );

    const cover = (
      <Image
        src={coverSrc}
        alt={coverAlt}
        width={coverSize}
        height={coverSize}
        radius={variant === "list-item" ? "xl" : "2xl"}
        isDark={isDark}
        placeholder={coverPlaceholder}
      />
    );

    if (variant === "mini") {
      return (
        <div ref={ref} className={`tai-audio-player tai-audio-player--mini ${className}`.trim()} style={containerStyle} {...restProps}>
          {cover}
          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: SPACING["2"] }}>
            <div style={{ fontSize: titleSize, lineHeight: 1.2, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {title}
            </div>
            {subtitle ? (
              <div style={{ fontSize: subtitleSize, lineHeight: 1.2, color: colors.text.tertiary, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {subtitle}
              </div>
            ) : null}
          </div>
          <div style={{ flexShrink: 0 }}>{transportControls}</div>
        </div>
      );
    }

    if (variant === "list-item") {
      return (
        <div ref={ref} className={`tai-audio-player tai-audio-player--list-item ${className}`.trim()} style={containerStyle} {...restProps}>
          {cover}
          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: titleSize, lineHeight: 1.2, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {title}
            </div>
            {subtitle ? (
              <div style={{ fontSize: 22, lineHeight: 1.2, color: colors.text.tertiary, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {subtitle}
              </div>
            ) : null}
          </div>
          <div style={{ fontSize: 22, lineHeight: 1, color: colors.text.tertiary, flexShrink: 0 }}>{duration}</div>
        </div>
      );
    }

    return (
      <div ref={ref} className={`tai-audio-player tai-audio-player--full ${className}`.trim()} style={containerStyle} {...restProps}>
        <div style={{ display: "flex", alignItems: "center", gap: SPACING["5"] }}>
          {cover}
          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: SPACING["2"] }}>
            <div style={{ fontSize: titleSize, lineHeight: 1.2, fontWeight: 700 }}>{title}</div>
            {subtitle ? (
              <div style={{ fontSize: subtitleSize, lineHeight: 1.2, color: colors.text.tertiary }}>{subtitle}</div>
            ) : null}
          </div>
        </div>
        {progressTrack}
        {transportControls}
      </div>
    );
  }
);

AudioPlayer.displayName = "AudioPlayer";
