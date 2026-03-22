import { useMemo, useState, useEffect, useCallback, CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../button";
import { RADIUS, SHADOW } from "../tokens";
import { useThemeOptional } from "../hooks/ThemeContext";

// ============================================================================
// 配置
// ============================================================================

type DialogType = "confirm" | "feedback";
type DialogSize = "small" | "large";

const SIZE_CONFIG: Record<DialogSize, { width: number; padding: number }> = {
  small: { width: 540, padding: 48 },
  large: { width: 720, padding: 60 },
};

// ============================================================================
// 类型
// ============================================================================

export interface DialogProps {
  /** 对话框类型 */
  type?: DialogType;
  /** 尺寸 */
  size?: DialogSize;
  /** 是否显示 */
  isOpen: boolean;
  /** 标题 */
  title: string;
  /** 内容 */
  content?: string;
  /** 主按钮文本 */
  primaryButtonText?: string;
  /** 次按钮文本 */
  secondaryButtonText?: string;
  /** 主按钮点击 */
  onPrimaryClick?: () => void;
  /** 次按钮点击 */
  onSecondaryClick?: () => void;
  /** 关闭回调 */
  onClose?: () => void;
  /** 自动关闭秒数（仅 feedback 类型） */
  autoCloseSeconds?: number;
  /** 是否显示遮罩 */
  overlay?: boolean;
  /** 点击遮罩是否关闭 */
  overlayClickClose?: boolean;
  /** 是否深色模式 */
  isDark?: boolean;
  /** 自定义类名 */
  className?: string;
}

// ============================================================================
// 组件
// ============================================================================

export const Dialog = ({
  type = "confirm",
  size = "small",
  isOpen,
  title,
  content,
  primaryButtonText = "确定",
  secondaryButtonText = "取消",
  onPrimaryClick,
  onSecondaryClick,
  onClose,
  autoCloseSeconds,
  overlay = true,
  overlayClickClose = false,
  isDark: isDarkProp = false,
  className = "",
}: DialogProps) => {
  const [countdown, setCountdown] = useState<number | null>(null);
  const { isDark: ctxDark, tokens: ctxTokens } = useThemeOptional();
  const isDark = isDarkProp ?? ctxDark;
  const tokens = ctxTokens;
  const sizeConfig = SIZE_CONFIG[size];

  useEffect(() => {
    if (
      isOpen &&
      type === "feedback" &&
      autoCloseSeconds &&
      autoCloseSeconds > 0
    ) {
      setCountdown(autoCloseSeconds);
    } else {
      setCountdown(null);
    }
  }, [isOpen, type, autoCloseSeconds]);

  useEffect(() => {
    if (countdown === null || countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(timer);
          onClose?.();
          return null;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, onClose]);

  const handleOverlayClick = useCallback(() => {
    if (overlayClickClose) {
      onClose?.();
    }
  }, [overlayClickClose, onClose]);

  const handleDialogClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
    },
    []
  );

  const overlayStyle = useMemo<CSSProperties>(
    () => ({
      position: "fixed",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: overlay ? tokens.bgColor.overlay : "transparent",
      zIndex: 1000,
    }),
    [overlay, tokens]
  );

  const dialogStyle = useMemo<CSSProperties>(
    () => ({
      width: sizeConfig.width,
      padding: sizeConfig.padding,
      paddingBottom: sizeConfig.padding - 12,
      borderRadius: RADIUS["4xl"],
      backgroundColor: tokens.bgColor.elevated,
      boxShadow: SHADOW.xl,
      display: "flex",
      flexDirection: "column",
      gap: 24,
    }),
    [sizeConfig, tokens]
  );

  const titleStyle = useMemo<CSSProperties>(
    () => ({
      fontSize: tokens.typography.title.section.fontSize,
      fontWeight: tokens.typography.title.section.fontWeight,
      color: tokens.textColor.primary,
      textAlign: "center",
      lineHeight: tokens.typography.title.section.lineHeight,
    }),
    [tokens]
  );

  const contentStyle = useMemo<CSSProperties>(
    () => ({
      fontSize: tokens.typography.body.primary.fontSize,
      color: tokens.textColor.secondary,
      textAlign: "center",
      lineHeight: tokens.typography.body.primary.lineHeight,
    }),
    [tokens]
  );

  const buttonContainerStyle = useMemo<CSSProperties>(
    () => ({
      display: "flex",
      gap: 24,
      marginTop: 12,
    }),
    []
  );

  const primaryText = useMemo(() => {
    if (countdown !== null && countdown > 0) {
      return `${primaryButtonText} (${countdown}s)`;
    }
    return primaryButtonText;
  }, [primaryButtonText, countdown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`tai-dialog-overlay ${className}`}
          style={overlayStyle}
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="tai-dialog"
            style={dialogStyle}
            onClick={handleDialogClick}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div style={titleStyle}>{title}</div>
            {content && <div style={contentStyle}>{content}</div>}
            <div style={buttonContainerStyle}>
              {type === "confirm" && (
                <Button
                  variant="secondary"
                  size="large"
                  isDark={isDark}
                  onClick={onSecondaryClick}
                  style={{ flex: 1 }}
                >
                  {secondaryButtonText}
                </Button>
              )}
              <Button
                variant="primary"
                size="large"
                isDark={isDark}
                onClick={onPrimaryClick}
                style={{ flex: 1 }}
              >
                {primaryText}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Dialog.displayName = "Dialog";
