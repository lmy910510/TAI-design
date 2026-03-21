import { useMemo, ReactNode, CSSProperties } from "react";
import { useThemeOptional } from "../hooks/ThemeContext";

// ============================================================================
// 配置
// ============================================================================

type TagVariant = "regular" | "filled" | "combined";
type TagColor = "danger" | "notice" | "success" | "info" | "default";
type TagSize = "large" | "medium" | "small";

const SIZE_CONFIG: Record<
  TagSize,
  { height: number; paddingX: number; fontSize: number; radius: number }
> = {
  large: { height: 48, paddingX: 18, fontSize: 26, radius: 8 },    // fontSize → typography.body.secondary
  medium: { height: 40, paddingX: 14, fontSize: 24, radius: 6 },   // fontSize → typography.label.tag
  small: { height: 32, paddingX: 10, fontSize: 22, radius: 4 },    // fontSize → typography.meta.time
};

// ============================================================================
// 类型
// ============================================================================

export interface TagProps {
  /** 标签变体 */
  variant?: TagVariant;
  /** 颜色 */
  color?: TagColor;
  /** 尺寸 */
  size?: TagSize;
  /** 前缀（仅 combined 变体） */
  prefix?: ReactNode;
  /** 是否可关闭 */
  closable?: boolean;
  /** 关闭回调 */
  onClose?: () => void;
  /** 是否深色模式 */
  isDark?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 标签内容 */
  children?: ReactNode;
}

// ============================================================================
// 图标
// ============================================================================

const CloseIcon = ({ size, color }: { size: number; color: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={{ cursor: "pointer" }}
  >
    <path
      d="M6 6L18 18M18 6L6 18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// ============================================================================
// 组件
// ============================================================================

export const Tag = ({
  variant = "regular",
  color = "default",
  size = "medium",
  prefix,
  closable = false,
  onClose,
  isDark: isDarkProp = false,
  className = "",
  children,
}: TagProps) => {
  const { isDark: ctxDark, tokens: ctxTokens } = useThemeOptional();
  const isDark = isDarkProp ?? ctxDark;
  const tokens = ctxTokens;
  const sizeConfig = SIZE_CONFIG[size];

  const colorConfig = useMemo(() => {
    const tagColors = tokens.tag[color];
    return {
      main: tagColors.main,
      bg6: tagColors[6],
      bg12: tagColors[12],
      bg30: tagColors[30],
    };
  }, [tokens, color]);

  const containerStyle = useMemo<CSSProperties>(() => {
    if (variant === "combined" && prefix) {
      return {
        display: "inline-flex",
        height: sizeConfig.height,
        borderRadius: sizeConfig.radius,
        overflow: "hidden",
        fontSize: sizeConfig.fontSize,
        fontWeight: tokens.typography.label.tag.fontWeight,
      };
    }

    let bgColor: string;
    let textColor: string;

    switch (variant) {
      case "filled":
        bgColor = colorConfig.bg30;
        textColor = colorConfig.main;
        break;
      case "regular":
      default:
        bgColor = colorConfig.bg6;
        textColor = colorConfig.main;
        break;
    }

    return {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: sizeConfig.height,
      paddingLeft: sizeConfig.paddingX,
      paddingRight: sizeConfig.paddingX,
      borderRadius: sizeConfig.radius,
      backgroundColor: bgColor,
      color: textColor,
      fontSize: sizeConfig.fontSize,
      fontWeight: tokens.typography.label.tag.fontWeight,
      lineHeight: tokens.typography.label.tag.lineHeight,
    };
  }, [variant, prefix, sizeConfig, colorConfig, tokens]);

  if (variant === "combined" && prefix) {
    const prefixStyle: CSSProperties = {
      display: "flex",
      alignItems: "center",
      paddingLeft: sizeConfig.paddingX,
      paddingRight: sizeConfig.paddingX,
      backgroundColor: colorConfig.bg30,
      color: colorConfig.main,
    };

    const contentStyle: CSSProperties = {
      display: "flex",
      alignItems: "center",
      gap: 6,
      paddingLeft: sizeConfig.paddingX,
      paddingRight: sizeConfig.paddingX,
      backgroundColor: colorConfig.bg12,
      color: colorConfig.main,
    };

    return (
      <div
        className={`tai-tag tai-tag--${variant} tai-tag--${color} ${className}`.trim()}
        style={containerStyle}
      >
        <span style={prefixStyle}>{prefix}</span>
        <span style={contentStyle}>
          {children}
          {closable && (
            <span onClick={onClose}>
              <CloseIcon
                size={sizeConfig.fontSize * 0.7}
                color={colorConfig.main}
              />
            </span>
          )}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`tai-tag tai-tag--${variant} tai-tag--${color} ${className}`.trim()}
      style={containerStyle}
    >
      <span>{children}</span>
      {closable && (
        <span onClick={onClose}>
          <CloseIcon
            size={sizeConfig.fontSize * 0.7}
            color={colorConfig.main}
          />
        </span>
      )}
    </div>
  );
};

Tag.displayName = "Tag";
