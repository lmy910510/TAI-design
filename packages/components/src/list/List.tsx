import {
  forwardRef,
  useMemo,
  useCallback,
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  CSSProperties,
  HTMLAttributes,
  MouseEvent,
  KeyboardEvent,
} from "react";
import { SPACING, RADIUS } from "../tokens";
import { useThemeOptional } from "../hooks/ThemeContext";

// ============================================================================
// 配置
// ============================================================================

const LIST_CONFIG = {
  singleLineHeight: 96,
  doubleLineHeight: 120,
  paddingX: SPACING["4"],
  paddingY: SPACING["4"],
  titleFontSize: 32,           // → typography.title.card.fontSize
  descriptionFontSize: 28,     // → typography.body.primary.fontSize
  prefixGap: SPACING["4"],
  suffixGap: SPACING["3"],
  titleDescGap: 6,
  arrowSize: 36,
};

// ============================================================================
// 图标
// ============================================================================

const ChevronRightIcon = ({
  size,
  color,
}: {
  size: number;
  color: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 6L15 12L9 18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ============================================================================
// List 类型
// ============================================================================

export interface ListProps extends HTMLAttributes<HTMLDivElement> {
  /** 是否显示外边框 */
  bordered?: boolean;
  /** 是否显示分割线 */
  divided?: boolean;
  /** 是否深色模式 */
  isDark?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 子元素 */
  children?: ReactNode;
}

// ============================================================================
// List 组件
// ============================================================================

export const List = forwardRef<HTMLDivElement, ListProps>(
  (
    {
      bordered = false,
      divided = true,
      isDark: isDarkProp,
      className = "",
      style,
      children,
      ...restProps
    },
    ref
  ) => {
    const { isDark: ctxDark, tokens: ctxTokens } = useThemeOptional();
    const isDark = isDarkProp ?? ctxDark;
    const tokens = ctxTokens;

    const containerStyle = useMemo<CSSProperties>(
      () => ({
        width: "100%",
        backgroundColor: tokens.bgColor.elevated,
        display: "flex",
        flexDirection: "column",
        borderRadius: bordered ? RADIUS["2xl"] : undefined,
        border: bordered ? `1px solid ${tokens.borderColor.level1}` : undefined,
        overflow: bordered ? "hidden" : undefined,
        ...style,
      }),
      [tokens, bordered, style]
    );

    const childrenWithDivider = useMemo(() => {
      if (!divided) return children;
      const childArray = Children.toArray(children);
      return childArray.map((child, index) => {
        if (index === childArray.length - 1) return child;
        if (!isValidElement(child)) return child;
        return cloneElement(child as React.ReactElement<ListItemProps>, {
          _showDivider: true,
          _dividerColor: tokens.borderColor.level1,
        });
      });
    }, [children, divided, tokens]);

    return (
      <div
        ref={ref}
        className={`tai-list ${
          bordered ? "tai-list--bordered" : ""
        } ${className}`.trim()}
        style={containerStyle}
        {...restProps}
      >
        {childrenWithDivider}
      </div>
    );
  }
);

List.displayName = "List";

// ============================================================================
// ListItem 类型
// ============================================================================

export interface ListItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 标题 */
  title: ReactNode;
  /** 描述 */
  description?: ReactNode;
  /** 前缀图标/元素 */
  prefixIcon?: ReactNode;
  /** 后缀内容 */
  suffixContent?: ReactNode;
  /** 是否显示箭头 */
  showArrow?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 点击事件 */
  onClick?: (e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => void;
  /** 是否深色模式 */
  isDark?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 内部属性：是否显示分割线 */
  _showDivider?: boolean;
  /** 内部属性：分割线颜色 */
  _dividerColor?: string;
}

// ============================================================================
// ListItem 组件
// ============================================================================

export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
  (
    {
      title,
      description,
      prefixIcon,
      suffixContent,
      showArrow = false,
      disabled = false,
      onClick,
      isDark: isDarkProp,
      className = "",
      style,
      _showDivider,
      _dividerColor,
      ...restProps
    },
    ref
  ) => {
    const { isDark: ctxDark, tokens: ctxTokens } = useThemeOptional();
    const isDark = isDarkProp ?? ctxDark;
    const tokens = ctxTokens;

    const hasDescription = !!description;
    const isInteractive = !!onClick && !disabled;

    const containerStyle = useMemo<CSSProperties>(
      () => ({
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "100%",
        minHeight: hasDescription
          ? LIST_CONFIG.doubleLineHeight
          : LIST_CONFIG.singleLineHeight,
        paddingLeft: LIST_CONFIG.paddingX,
        paddingRight: LIST_CONFIG.paddingX,
        paddingTop: LIST_CONFIG.paddingY,
        paddingBottom: LIST_CONFIG.paddingY,
        boxSizing: "border-box",
        backgroundColor: tokens.bgColor.elevated,
        cursor: isInteractive
          ? "pointer"
          : disabled
          ? "not-allowed"
          : "default",
        opacity: disabled ? 0.5 : 1,
        transition: "background-color 150ms ease",
        borderBottom: _showDivider
          ? `1px solid ${_dividerColor || tokens.borderColor.level1}`
          : undefined,
        ...style,
      }),
      [
        hasDescription,
        tokens,
        isInteractive,
        disabled,
        _showDivider,
        _dividerColor,
        style,
      ]
    );

    const prefixStyle = useMemo<CSSProperties>(
      () => ({
        marginRight: LIST_CONFIG.prefixGap,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }),
      []
    );

    const contentStyle = useMemo<CSSProperties>(
      () => ({
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }),
      []
    );

    const titleStyle = useMemo<CSSProperties>(
      () => ({
        fontSize: tokens.typography.title.card.fontSize,
        lineHeight: tokens.typography.title.card.lineHeight,
        fontWeight: tokens.typography.title.card.fontWeight,
        color: tokens.textColor.primary,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }),
      [tokens]
    );

    const descriptionStyle = useMemo<CSSProperties>(
      () => ({
        fontSize: tokens.typography.body.primary.fontSize,
        lineHeight: tokens.typography.body.primary.lineHeight,
        color: tokens.textColor.tertiary,
        marginTop: LIST_CONFIG.titleDescGap,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }),
      [tokens]
    );

    const suffixStyle = useMemo<CSSProperties>(
      () => ({
        marginLeft: LIST_CONFIG.suffixGap,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        gap: LIST_CONFIG.suffixGap,
      }),
      []
    );

    const suffixTextStyle = useMemo<CSSProperties>(
      () => ({
        fontSize: LIST_CONFIG.descriptionFontSize,
        color: tokens.textColor.tertiary,
      }),
      [tokens]
    );

    const handleClick = useCallback(
      (e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => {
        if (disabled) return;
        onClick?.(e);
      },
      [disabled, onClick]
    );

    return (
      <div
        ref={ref}
        className={`tai-list-item ${
          isInteractive ? "tai-list-item--interactive" : ""
        } ${disabled ? "tai-list-item--disabled" : ""} ${className}`.trim()}
        style={containerStyle}
        onClick={handleClick}
        role={isInteractive ? "button" : undefined}
        tabIndex={isInteractive ? 0 : undefined}
        onKeyDown={
          isInteractive
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleClick(e);
                }
              }
            : undefined
        }
        {...restProps}
      >
        {prefixIcon && <div style={prefixStyle}>{prefixIcon}</div>}
        <div style={contentStyle}>
          <div style={titleStyle}>{title}</div>
          {description && <div style={descriptionStyle}>{description}</div>}
        </div>
        {(suffixContent || showArrow) && (
          <div style={suffixStyle}>
            {suffixContent &&
              (typeof suffixContent === "string" ? (
                <span style={suffixTextStyle}>{suffixContent}</span>
              ) : (
                suffixContent
              ))}
            {showArrow && (
              <ChevronRightIcon
                size={LIST_CONFIG.arrowSize}
                color={tokens.textColor.placeholder}
              />
            )}
          </div>
        )}
      </div>
    );
  }
);

ListItem.displayName = "ListItem";
