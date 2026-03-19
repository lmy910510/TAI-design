import {
  forwardRef,
  useMemo,
  useCallback,
  useEffect,
  useContext,
  ReactNode,
  CSSProperties,
} from "react";
import { createColors, SPACING, RADIUS } from "../tokens";
import { ThemeContext } from "../hooks/ThemeContext";

// ============================================================================
// 类型
// ============================================================================

export interface ActionSheetAction {
  /** 唯一标识 */
  key: string;
  /** 显示文本 */
  text: string;
  /** 描述 */
  description?: string;
  /** 图标 */
  icon?: ReactNode;
  /** 是否危险操作 */
  danger?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 点击回调 */
  onClick?: () => void;
}

export interface ActionSheetProps {
  /** 是否可见 */
  visible: boolean;
  /** 操作列表 */
  actions: ActionSheetAction[];
  /** 标题 */
  title?: string;
  /** 描述 */
  description?: string;
  /** 取消按钮文本 */
  cancelText?: string;
  /** 点击遮罩是否关闭 */
  closeOnOverlayClick?: boolean;
  /** 关闭回调 */
  onClose?: () => void;
  /** 选择回调 */
  onSelect?: (action: ActionSheetAction, index: number) => void;
  /** 是否深色模式 */
  isDark?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 遮罩层样式 */
  overlayStyle?: CSSProperties;
}

// ============================================================================
// 组件
// ============================================================================

export const ActionSheet = forwardRef<HTMLDivElement, ActionSheetProps>(
  (
    {
      visible,
      actions,
      title,
      description,
      cancelText,
      closeOnOverlayClick = true,
      onClose,
      onSelect,
      isDark: isDarkProp,
      className = "",
      style,
      overlayStyle,
    },
    ref
  ) => {
    const ctx = useContext(ThemeContext);
    const isDark = isDarkProp ?? ctx?.isDark ?? false;
    const colors = useMemo(() => createColors(isDark), [isDark]);

    const handleClose = useCallback(() => {
      onClose?.();
    }, [onClose]);

    const handleOverlayClick = useCallback(() => {
      if (closeOnOverlayClick) {
        handleClose();
      }
    }, [closeOnOverlayClick, handleClose]);

    const handleSelectAction = useCallback(
      (action: ActionSheetAction, index: number) => {
        if (action.disabled) return;
        action.onClick?.();
        onSelect?.(action, index);
        handleClose();
      },
      [onSelect, handleClose]
    );

    useEffect(() => {
      if (!visible) return;
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          handleClose();
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [visible, handleClose]);

    useEffect(() => {
      if (visible) {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = originalOverflow;
        };
      }
    }, [visible]);

    if (!visible) return null;

    const overlayStyleMerged = useMemo<CSSProperties>(
      () => ({
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: colors.bg.overlay,
        zIndex: 1000,
        animation: "tai-actionsheet-overlay-in 200ms ease",
        ...overlayStyle,
      }),
      [colors, overlayStyle]
    );

    const containerStyle = useMemo<CSSProperties>(
      () => ({
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1001,
        padding: SPACING["4"],
        animation: "tai-actionsheet-slide-up 300ms ease",
        ...style,
      }),
      [style]
    );

    const panelStyle = useMemo<CSSProperties>(
      () => ({
        backgroundColor: colors.bg.secondary,
        borderRadius: RADIUS["2xl"],
        overflow: "hidden",
      }),
      [colors]
    );

    const headerStyle = useMemo<CSSProperties>(
      () => ({
        padding: `${SPACING["5"]}px ${SPACING["6"]}px`,
        textAlign: "center",
        borderBottom:
          title || description
            ? `1px solid ${colors.border.subtle}`
            : undefined,
      }),
      [title, description, colors]
    );

    const titleStyle = useMemo<CSSProperties>(
      () => ({
        fontSize: 32,
        fontWeight: 600,
        color: colors.text.primary,
        margin: 0,
      }),
      [colors]
    );

    const descriptionStyle = useMemo<CSSProperties>(
      () => ({
        fontSize: 26,
        color: colors.text.secondary,
        marginTop: title ? SPACING["2"] : 0,
      }),
      [colors, title]
    );

    const actionItemStyle = (action: ActionSheetAction): CSSProperties => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: SPACING["3"],
      height: 100,
      padding: `0 ${SPACING["6"]}px`,
      fontSize: 32,
      fontWeight: 500,
      color: action.danger
        ? colors.functional.danger.main
        : action.disabled
        ? colors.text.disabled
        : colors.text.primary,
      backgroundColor: "transparent",
      border: "none",
      borderTop: `1px solid ${colors.border.subtle}`,
      cursor: action.disabled ? "not-allowed" : "pointer",
      transition: "background-color 150ms ease",
      width: "100%",
      textAlign: "center",
    });

    const cancelContainerStyle = useMemo<CSSProperties>(
      () => ({
        marginTop: SPACING["3"],
        backgroundColor: colors.bg.secondary,
        borderRadius: RADIUS["2xl"],
        overflow: "hidden",
      }),
      [colors]
    );

    const cancelButtonStyle = useMemo<CSSProperties>(
      () => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 100,
        width: "100%",
        fontSize: 32,
        fontWeight: 500,
        color: colors.text.primary,
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        transition: "background-color 150ms ease",
      }),
      [colors]
    );

    return (
      <>
        <style>
          {`
          @keyframes tai-actionsheet-overlay-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes tai-actionsheet-slide-up {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
          .tai-actionsheet-item:active {
            background-color: ${colors.bg.tertiary} !important;
          }
        `}
        </style>
        <div style={overlayStyleMerged} onClick={handleOverlayClick} />
        <div
          ref={ref}
          className={`tai-actionsheet ${className}`.trim()}
          style={containerStyle}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={panelStyle}>
            {(title || description) && (
              <div style={headerStyle}>
                {title && <div style={titleStyle}>{title}</div>}
                {description && (
                  <div style={descriptionStyle}>{description}</div>
                )}
              </div>
            )}
            {actions.map((action, index) => (
              <button
                key={action.key}
                type="button"
                className="tai-actionsheet-item"
                style={actionItemStyle(action)}
                disabled={action.disabled}
                onClick={() => handleSelectAction(action, index)}
              >
                {action.icon && (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 40,
                      height: 40,
                    }}
                  >
                    {action.icon}
                  </span>
                )}
                <span>{action.text}</span>
                {action.description && (
                  <span
                    style={{
                      fontSize: 24,
                      color: colors.text.tertiary,
                      marginLeft: SPACING["2"],
                    }}
                  >
                    {action.description}
                  </span>
                )}
              </button>
            ))}
          </div>
          {cancelText && (
            <div style={cancelContainerStyle}>
              <button
                type="button"
                className="tai-actionsheet-item"
                style={cancelButtonStyle}
                onClick={handleClose}
              >
                {cancelText}
              </button>
            </div>
          )}
        </div>
      </>
    );
  }
);

ActionSheet.displayName = "ActionSheet";
