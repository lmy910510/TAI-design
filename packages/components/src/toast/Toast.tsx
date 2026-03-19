import { CSSProperties, ReactNode, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircleFilledIcon,
  ErrorCircleFilledIcon,
  InfoCircleFilledIcon,
} from "tdesign-icons-react";
import { RADIUS, SHADOW, SPACING, createColors } from "../tokens";
import { useThemeOptional } from "../hooks";

type ToastType = "text" | "success" | "error" | "info";
type ToastPosition = "top" | "center";

const TOAST_CONFIG = {
  minHeight: 96,
  minWidth: 216,
  maxWidth: 600,
  paddingX: SPACING["6"],
  paddingY: SPACING["4"],
  gap: SPACING["4"],
  fontSize: 32,
  iconSize: 42,
};

export interface ToastProps {
  /** 提示类型 */
  type?: ToastType;
  /** 是否可见 */
  visible: boolean;
  /** 显示时长（毫秒） */
  duration?: number;
  /** 位置 */
  position?: ToastPosition;
  /** 关闭回调 */
  onClose?: () => void;
  /** 自定义图标 */
  icon?: ReactNode;
  /** 是否深色模式 */
  isDark?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 提示内容 */
  children?: ReactNode;
}

function getPositionStyle(position: ToastPosition): CSSProperties {
  const base: CSSProperties = {
    position: "fixed",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2000,
  };

  if (position === "top") {
    return {
      ...base,
      top: SPACING["6"] * 3,
    };
  }

  return {
    ...base,
    top: "50%",
    transform: "translate(-50%, -50%)",
  };
}

export const Toast = ({
  type = "text",
  visible,
  duration = 3000,
  position = "top",
  onClose,
  icon,
  isDark: isDarkProp,
  className = "",
  children,
}: ToastProps) => {
  const theme = useThemeOptional();
  const isDark = isDarkProp ?? theme.isDark;
  const colors = useMemo(() => createColors(isDark), [isDark]);

  useEffect(() => {
    if (!visible || duration <= 0) {
      return;
    }

    const timer = window.setTimeout(() => {
      onClose?.();
    }, duration);

    return () => window.clearTimeout(timer);
  }, [duration, onClose, visible]);

  const containerStyle = useMemo<CSSProperties>(
    () => getPositionStyle(position),
    [position]
  );

  const toastStyle = useMemo<CSSProperties>(
    () => ({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: TOAST_CONFIG.gap,
      minHeight: TOAST_CONFIG.minHeight,
      minWidth: TOAST_CONFIG.minWidth,
      maxWidth: TOAST_CONFIG.maxWidth,
      paddingLeft: TOAST_CONFIG.paddingX,
      paddingRight: TOAST_CONFIG.paddingX,
      paddingTop: TOAST_CONFIG.paddingY,
      paddingBottom: TOAST_CONFIG.paddingY,
      boxSizing: "border-box",
      borderRadius: RADIUS["2xl"],
      backgroundColor: colors.toast.bg,
      color: colors.toast.text,
      fontSize: TOAST_CONFIG.fontSize,
      fontWeight: 500,
      lineHeight: 1.5,
      textAlign: "center",
      boxShadow: SHADOW.xl,
      wordBreak: "break-word",
    }),
    [colors.toast.bg, colors.toast.text]
  );

  const resolvedIcon = useMemo(() => {
    if (icon) {
      return icon;
    }

    switch (type) {
      case "success":
        return (
          <CheckCircleFilledIcon
            style={{
              fontSize: TOAST_CONFIG.iconSize,
              color: colors.functional.success.main,
              flexShrink: 0,
            }}
          />
        );
      case "error":
        return (
          <ErrorCircleFilledIcon
            style={{
              fontSize: TOAST_CONFIG.iconSize,
              color: colors.functional.danger.main,
              flexShrink: 0,
            }}
          />
        );
      case "info":
        return (
          <InfoCircleFilledIcon
            style={{
              fontSize: TOAST_CONFIG.iconSize,
              color: colors.functional.info.main,
              flexShrink: 0,
            }}
          />
        );
      case "text":
      default:
        return null;
    }
  }, [colors.functional.danger.main, colors.functional.info.main, colors.functional.success.main, icon, type]);

  const motionVariants = useMemo(
    () => ({
      initial: {
        opacity: 0,
        y: position === "top" ? -SPACING["3"] : 0,
        scale: position === "center" ? 0.96 : 1,
      },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
      },
      exit: {
        opacity: 0,
        y: position === "top" ? -SPACING["3"] : 0,
        scale: position === "center" ? 0.96 : 1,
      },
    }),
    [position]
  );

  return (
    <AnimatePresence>
      {visible ? (
        <div style={containerStyle}>
          <motion.div
            className={`tai-toast tai-toast--${type} ${className}`.trim()}
            style={toastStyle}
            initial={motionVariants.initial}
            animate={motionVariants.animate}
            exit={motionVariants.exit}
            transition={{ duration: 0.2 }}
            aria-live="polite"
          >
            {resolvedIcon}
            <span>{children}</span>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};

Toast.displayName = "Toast";
