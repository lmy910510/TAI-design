import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
  forwardRef,
  useEffect,
  useMemo,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRightIcon,
  CheckCircleFilledIcon,
  CloseIcon,
  ErrorCircleFilledIcon,
  NotificationFilledIcon,
} from "tdesign-icons-react";
import { Button } from "../button";
import { RADIUS, SHADOW, SPACING, createColors } from "../tokens";
import { useThemeOptional } from "../hooks";

type PushTone = "success" | "warning" | "error" | "info";
type PushPosition = "static" | "top";

export interface PushProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** 是否显示 */
  visible?: boolean;
  /** 语义 */
  tone?: PushTone;
  /** 标题 */
  title: ReactNode;
  /** 描述 */
  description?: ReactNode;
  /** 快捷操作文案 */
  actionText?: ReactNode;
  /** 快捷操作回调 */
  onAction?: () => void;
  /** 关闭回调 */
  onClose?: () => void;
  /** 自动关闭时长 */
  duration?: number;
  /** 展示位置 */
  position?: PushPosition;
  /** 自定义图标 */
  icon?: ReactNode;
  /** 是否深色模式 */
  isDark?: boolean;
  /** 自定义类名 */
  className?: string;
}

const PUSH_CONFIG = {
  maxWidth: 780,
  iconSize: 42,
  iconContainer: 72,
  closeSize: 48,
  titleFontSize: 28,
  descriptionFontSize: 24,
};

export const Push = forwardRef<HTMLDivElement, PushProps>(
  (
    {
      visible = true,
      tone = "info",
      title,
      description,
      actionText,
      onAction,
      onClose,
      duration = 0,
      position = "static",
      icon,
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

    useEffect(() => {
      if (!visible || duration <= 0) {
        return;
      }

      const timer = window.setTimeout(() => {
        onClose?.();
      }, duration);

      return () => window.clearTimeout(timer);
    }, [duration, onClose, visible]);

    const toneConfig = useMemo(() => {
      switch (tone) {
        case "success":
          return {
            main: colors.functional.success.main,
            subtle: colors.functional.success[12],
            icon: <CheckCircleFilledIcon style={{ fontSize: PUSH_CONFIG.iconSize, color: colors.functional.success.main }} />,
          };
        case "warning":
          return {
            main: colors.functional.notice.main,
            subtle: colors.functional.notice[12],
            icon: <NotificationFilledIcon style={{ fontSize: PUSH_CONFIG.iconSize, color: colors.functional.notice.main }} />,
          };
        case "error":
          return {
            main: colors.functional.danger.main,
            subtle: colors.functional.danger[12],
            icon: <ErrorCircleFilledIcon style={{ fontSize: PUSH_CONFIG.iconSize, color: colors.functional.danger.main }} />,
          };
        case "info":
        default:
          return {
            main: colors.functional.info.main,
            subtle: colors.functional.info[12],
            icon: <NotificationFilledIcon style={{ fontSize: PUSH_CONFIG.iconSize, color: colors.functional.info.main }} />,
          };
      }
    }, [colors.functional.danger, colors.functional.info, colors.functional.notice, colors.functional.success, tone]);

    const wrapperStyle = useMemo<CSSProperties>(() => {
      if (position === "top") {
        return {
          position: "fixed",
          top: SPACING["6"] * 3,
          left: "50%",
          transform: "translateX(-50%)",
          width: `min(calc(100vw - ${SPACING["6"] * 2}px), ${PUSH_CONFIG.maxWidth}px)`,
          zIndex: 2100,
        };
      }

      return {
        width: "100%",
        maxWidth: PUSH_CONFIG.maxWidth,
      };
    }, [position]);

    const cardStyle = useMemo<CSSProperties>(
      () => ({
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: SPACING["4"],
        paddingLeft: SPACING["5"],
        paddingRight: SPACING["5"],
        paddingTop: SPACING["4"],
        paddingBottom: SPACING["4"],
        boxSizing: "border-box",
        borderRadius: RADIUS["2xl"],
        backgroundColor: colors.push.bg,
        border: `1px solid ${colors.border.subtle}`,
        boxShadow: SHADOW.xl,
        ...style,
      }),
      [colors.border.subtle, colors.push.bg, style]
    );

    if (!visible) {
      return null;
    }

    return (
      <AnimatePresence>
        <div
          ref={ref}
          className={`tai-push tai-push--${tone} ${className}`.trim()}
          style={wrapperStyle}
          {...restProps}
        >
          <motion.div
            style={cardStyle}
            initial={{ opacity: 0, y: -SPACING["3"] }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -SPACING["3"] }}
            transition={{ duration: 0.2 }}
          >
            <div
              style={{
                width: PUSH_CONFIG.iconContainer,
                height: PUSH_CONFIG.iconContainer,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: SPACING["3"],
                backgroundColor: toneConfig.subtle,
                color: toneConfig.main,
              }}
            >
              {icon ?? toneConfig.icon}
            </div>

            <div
              style={{
                flex: 1,
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                gap: description ? SPACING["2"] : 0,
              }}
            >
              <div
                style={{
                  fontSize: PUSH_CONFIG.titleFontSize,
                  lineHeight: 1.5,
                  fontWeight: 600,
                  color: colors.push.title,
                  wordBreak: "break-word",
                }}
              >
                {title}
              </div>
              {description ? (
                <div
                  style={{
                    fontSize: PUSH_CONFIG.descriptionFontSize,
                    lineHeight: 1.5,
                    color: colors.push.content,
                    wordBreak: "break-word",
                  }}
                >
                  {description}
                </div>
              ) : null}
            </div>

            {actionText ? (
              <Button
                variant="secondary"
                size="extraSmall"
                isDark={isDark}
                icon={<ArrowRightIcon style={{ fontSize: 24 }} />}
                iconPosition="right"
                onClick={onAction}
              >
                {actionText}
              </Button>
            ) : null}

            {onClose ? (
              <button
                type="button"
                aria-label="关闭提示"
                onClick={onClose}
                style={{
                  width: PUSH_CONFIG.closeSize,
                  height: PUSH_CONFIG.closeSize,
                  flexShrink: 0,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: RADIUS.xl,
                  border: "none",
                  backgroundColor: colors.bg.secondary,
                  color: colors.text.secondary,
                  cursor: "pointer",
                }}
              >
                <CloseIcon style={{ fontSize: 24, color: colors.text.secondary }} />
              </button>
            ) : null}
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }
);

Push.displayName = "Push";
