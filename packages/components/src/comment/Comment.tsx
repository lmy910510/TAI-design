import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
  forwardRef,
  useMemo,
} from "react";
import {
  ChatIcon,
  Edit1Icon,
  ThumbUpIcon,
  TimeIcon,
} from "tdesign-icons-react";
import { RADIUS, SPACING, createColors } from "../tokens";
import { useThemeOptional } from "../hooks";

export interface CommentAction {
  /** 唯一标识 */
  key?: string;
  /** 图标 */
  icon?: ReactNode;
  /** 文案 */
  label: ReactNode;
  /** 点击回调 */
  onClick?: () => void;
}

export interface CommentProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "content" | "title"> {
  /** 作者 */
  author: ReactNode;
  /** 评论内容 */
  content: ReactNode;
  /** 头像 */
  avatar?: ReactNode;
  /** 时间 */
  time?: ReactNode;
  /** 辅助信息 */
  meta?: ReactNode;
  /** 标签 */
  tags?: ReactNode[];
  /** 配图 */
  images?: string[];
  /** 操作项 */
  actions?: CommentAction[];
  /** 回复内容 */
  reply?: ReactNode;
  /** 是否显示分割线 */
  divided?: boolean;
  /** 是否深色模式 */
  isDark?: boolean;
  /** 自定义类名 */
  className?: string;
}

const COMMENT_CONFIG = {
  avatarSize: 72,
  imageHeight: 180,
  actionHeight: 42,
  authorFontSize: 28,
  contentFontSize: 28,
  metaFontSize: 24,
};

function getDefaultActionIcon(key?: string, color?: string) {
  const iconStyle = { fontSize: 24, color };

  switch (key) {
    case "like":
      return <ThumbUpIcon style={iconStyle} />;
    case "reply":
      return <ChatIcon style={iconStyle} />;
    case "edit":
      return <Edit1Icon style={iconStyle} />;
    default:
      return null;
  }
}

export const Comment = forwardRef<HTMLDivElement, CommentProps>(
  (
    {
      author,
      content,
      avatar,
      time,
      meta,
      tags,
      images,
      actions,
      reply,
      divided = false,
      isDark: isDarkProp,
      className = "",
      style,
      ...restProps
    },
    ref
  ) => {
    const theme = useThemeOptional();
    const isDark = isDarkProp ?? theme.isDark;
    const colors = useMemo(() => createColors(isDark), [isDark]);

    const containerStyle = useMemo<CSSProperties>(
      () => ({
        display: "flex",
        alignItems: "flex-start",
        gap: SPACING["4"],
        width: "100%",
        paddingTop: SPACING["4"],
        paddingBottom: SPACING["4"],
        borderBottom: divided ? `1px solid ${colors.border.subtle}` : undefined,
        boxSizing: "border-box",
        ...style,
      }),
      [colors.border.subtle, divided, style]
    );

    const avatarStyle = useMemo<CSSProperties>(
      () => ({
        width: COMMENT_CONFIG.avatarSize,
        height: COMMENT_CONFIG.avatarSize,
        borderRadius: RADIUS.xl,
        flexShrink: 0,
        overflow: "hidden",
        backgroundColor: colors.bg.tertiary,
        color: colors.text.secondary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
        fontWeight: 600,
      }),
      [colors.bg.tertiary, colors.text.secondary]
    );

    const authorStyle = useMemo<CSSProperties>(
      () => ({
        fontSize: COMMENT_CONFIG.authorFontSize,
        lineHeight: 1.5,
        fontWeight: 600,
        color: colors.text.primary,
      }),
      [colors.text.primary]
    );

    const metaStyle = useMemo<CSSProperties>(
      () => ({
        display: "flex",
        alignItems: "center",
        gap: SPACING["2"],
        color: colors.text.tertiary,
        fontSize: COMMENT_CONFIG.metaFontSize,
        lineHeight: 1.5,
        flexWrap: "wrap",
      }),
      [colors.text.tertiary]
    );

    const contentStyle = useMemo<CSSProperties>(
      () => ({
        fontSize: COMMENT_CONFIG.contentFontSize,
        lineHeight: 1.6,
        color: colors.text.primary,
        wordBreak: "break-word",
      }),
      [colors.text.primary]
    );

    const tagStyle = useMemo<CSSProperties>(
      () => ({
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 36,
        paddingLeft: SPACING["2"],
        paddingRight: SPACING["2"],
        borderRadius: RADIUS.xl,
        backgroundColor: colors.bg.tertiary,
        color: colors.text.secondary,
        fontSize: 24,
        lineHeight: 1.5,
      }),
      [colors.bg.tertiary, colors.text.secondary]
    );

    const replyStyle = useMemo<CSSProperties>(
      () => ({
        padding: SPACING["4"],
        borderRadius: RADIUS.xl,
        backgroundColor: colors.bg.secondary,
        color: colors.text.secondary,
        fontSize: 24,
        lineHeight: 1.6,
      }),
      [colors.bg.secondary, colors.text.secondary]
    );

    const actionButtonStyle = useMemo<CSSProperties>(
      () => ({
        display: "inline-flex",
        alignItems: "center",
        gap: SPACING["2"],
        minHeight: COMMENT_CONFIG.actionHeight,
        padding: 0,
        border: "none",
        background: "transparent",
        color: colors.text.tertiary,
        cursor: "pointer",
        fontSize: 24,
        lineHeight: 1.5,
      }),
      [colors.text.tertiary]
    );

    const avatarContent = useMemo(() => {
      if (!avatar) {
        const fallback = typeof author === "string" ? author.trim().slice(0, 1) : "评";
        return <span>{fallback || "评"}</span>;
      }

      if (typeof avatar === "string") {
        return (
          <img
            src={avatar}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        );
      }

      return avatar;
    }, [author, avatar]);

    return (
      <div
        ref={ref}
        className={`tai-comment ${className}`.trim()}
        style={containerStyle}
        {...restProps}
      >
        <div style={avatarStyle}>{avatarContent}</div>
        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: SPACING["3"],
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: SPACING["3"],
              flexWrap: "wrap",
            }}
          >
            <div style={authorStyle}>{author}</div>
            {(time || meta) && (
              <div style={metaStyle}>
                {time ? (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <TimeIcon style={{ fontSize: 24, color: colors.text.tertiary }} />
                    {time}
                  </span>
                ) : null}
                {meta ? <span>{meta}</span> : null}
              </div>
            )}
          </div>

          <div style={contentStyle}>{content}</div>

          {tags && tags.length > 0 ? (
            <div style={{ display: "flex", flexWrap: "wrap", gap: SPACING["2"] }}>
              {tags.map((tag, index) => (
                <span key={`tag-${index}`} style={tagStyle}>
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          {images && images.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: images.length === 1 ? "minmax(0, 1fr)" : "repeat(3, minmax(0, 1fr))",
                gap: SPACING["2"],
              }}
            >
              {images.map((image, index) => (
                <div
                  key={`image-${index}`}
                  style={{
                    width: "100%",
                    height: COMMENT_CONFIG.imageHeight,
                    borderRadius: RADIUS.xl,
                    overflow: "hidden",
                    backgroundColor: colors.bg.tertiary,
                  }}
                >
                  <img
                    src={image}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          ) : null}

          {reply ? <div style={replyStyle}>{reply}</div> : null}

          {actions && actions.length > 0 ? (
            <div style={{ display: "flex", alignItems: "center", gap: SPACING["4"], flexWrap: "wrap" }}>
              {actions.map((action, index) => (
                <button
                  key={action.key ?? `action-${index}`}
                  type="button"
                  style={actionButtonStyle}
                  onClick={action.onClick}
                >
                  {action.icon ?? getDefaultActionIcon(action.key, colors.text.tertiary)}
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
);

Comment.displayName = "Comment";
