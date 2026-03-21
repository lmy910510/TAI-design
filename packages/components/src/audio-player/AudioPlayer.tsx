import { CSSProperties, forwardRef, useMemo } from "react";
import { useThemeOptional } from "../hooks/ThemeContext";
import { BLACK, RADIUS, SHADOW, SPACING, WHITE } from "../tokens";
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
    const { isDark: ctxDark, tokens: ctxTokens } = useThemeOptional();
    const isDark = isDarkProp ?? ctxDark;
    const tokens = ctxTokens;
    const safeProgress = clampProgress(progress);

    const containerStyle = useMemo<CSSProperties>(() => {
      const base: CSSProperties = {
        width: "100%",
        display: "flex",
        gap: SPACING["4"],
        borderRadius: RADIUS["2xl"],
        border: `1px solid ${tokens.borderColor.level1}`,
        color: tokens.textColor.primary,
        backgroundColor: tokens.bgColor.elevated,
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
    }, [tokens, style, variant]);

    const coverSize = variant === "full" ? 192 : variant === "mini" ? 72 : 60;
    // 标题/副标题字号根据 variant 使用不同语义 token
    const titleSize = variant === "full"
      ? tokens.typography.display.hero.fontSize   // 42 — 全屏展示标题
      : variant === "mini"
      ? tokens.typography.title.subsection.fontSize // 30 — mini 标题
      : tokens.typography.body.primary.fontSize;    // 28 — list-item 标题
    const subtitleSize = variant === "full"
      ? tokens.typography.body.primary.fontSize     // 28 — 全屏副标题
      : tokens.typography.meta.caption.fontSize;    // 24 — mini/list-item 副标题

    const coverPlaceholder = (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: tokens.bgColor.secondaryContainer,
        }}
      >
        <MusicPlaceholder color={tokens.textColor.disabled} />
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
      backgroundColor: filled ? tokens.textColor.primary : tokens.bgColor.container,
      color: filled ? tokens.textColor.anti : tokens.textColor.primary,
      flexShrink: 0,
    });

    const progressTrack = (
      <div style={{ display: "flex", flexDirection: "column", gap: SPACING["2"], width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: SPACING["2"], color: tokens.textColor.tertiary }}>
          <span style={{ fontSize: tokens.typography.meta.time.fontSize, lineHeight: tokens.typography.meta.time.lineHeight }}>{currentTime}</span>
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
                backgroundColor: tokens.textColor.primary,
              }}
            />
          </div>
          <span style={{ fontSize: tokens.typography.meta.time.fontSize, lineHeight: tokens.typography.meta.time.lineHeight }}>{duration}</span>
        </div>
      </div>
    );

    const transportControls = showTransportControls ? (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: SPACING["3"] }}>
        <button type="button" onClick={onPreviousClick} style={controlButton(60, false)} aria-label="上一首">
          <PreviousIcon color={tokens.textColor.primary} />
        </button>
        <button type="button" onClick={onPlayPauseClick} style={controlButton(84, true)} aria-label={playing ? "暂停" : "播放"}>
          {playing ? <PauseIcon color={tokens.textColor.anti} /> : <PlayIcon color={tokens.textColor.anti} />}
        </button>
        <button type="button" onClick={onNextClick} style={controlButton(60, false)} aria-label="下一首">
          <NextIcon color={tokens.textColor.primary} />
        </button>
      </div>
    ) : (
      <button type="button" onClick={onPlayPauseClick} style={controlButton(60, true)} aria-label={playing ? "暂停" : "播放"}>
        {playing ? <PauseIcon color={tokens.textColor.anti} /> : <PlayIcon color={tokens.textColor.anti} />}
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
            <div style={{ fontSize: titleSize, lineHeight: tokens.typography.title.subsection.lineHeight, fontWeight: tokens.typography.title.section.fontWeight, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {title}
            </div>
            {subtitle ? (
              <div style={{ fontSize: subtitleSize, lineHeight: tokens.typography.meta.caption.lineHeight, color: tokens.textColor.tertiary, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
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
            <div style={{ fontSize: titleSize, lineHeight: tokens.typography.body.primary.lineHeight, fontWeight: tokens.typography.title.section.fontWeight, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {title}
            </div>
            {subtitle ? (
              <div style={{ fontSize: tokens.typography.meta.time.fontSize, lineHeight: tokens.typography.meta.time.lineHeight, color: tokens.textColor.tertiary, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {subtitle}
              </div>
            ) : null}
          </div>
          <div style={{ fontSize: tokens.typography.meta.time.fontSize, lineHeight: tokens.typography.meta.time.lineHeight, color: tokens.textColor.tertiary, flexShrink: 0 }}>{duration}</div>
        </div>
      );
    }

    return (
      <div ref={ref} className={`tai-audio-player tai-audio-player--full ${className}`.trim()} style={containerStyle} {...restProps}>
        <div style={{ display: "flex", alignItems: "center", gap: SPACING["5"] }}>
          {cover}
          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: SPACING["2"] }}>
            <div style={{ fontSize: titleSize, lineHeight: tokens.typography.display.hero.lineHeight, fontWeight: tokens.typography.display.hero.fontWeight }}>{title}</div>
            {subtitle ? (
              <div style={{ fontSize: subtitleSize, lineHeight: tokens.typography.body.primary.lineHeight, color: tokens.textColor.tertiary }}>{subtitle}</div>
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
