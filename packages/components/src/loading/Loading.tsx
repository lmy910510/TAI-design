import { useMemo, CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeOptional } from "../hooks/ThemeContext";

// ============================================================================
// 配置
// ============================================================================

type LoadingSize = "large" | "medium" | "small";

const SIZE_CONFIG: Record<
  LoadingSize,
  { spinnerSize: number; strokeWidth: number; textSize: number; gap: number }
> = {
  large: { spinnerSize: 72, strokeWidth: 4, textSize: 28, gap: 18 },   // textSize → typography.body.primary
  medium: { spinnerSize: 48, strokeWidth: 3, textSize: 24, gap: 12 },  // textSize → typography.meta.caption
  small: { spinnerSize: 32, strokeWidth: 2, textSize: 20, gap: 8 },    // textSize → ~meta.time(22)，small 保持 20
};

// ============================================================================
// 类型
// ============================================================================

export interface LoadingProps {
  /** 尺寸 */
  size?: LoadingSize;
  /** 是否可见 */
  visible?: boolean;
  /** 加载文案 */
  text?: string;
  /** 是否全屏 */
  fullscreen?: boolean;
  /** 是否深色模式 */
  isDark?: boolean;
  /** 自定义类名 */
  className?: string;
}

// ============================================================================
// Spinner
// ============================================================================

const Spinner = ({
  size,
  strokeWidth,
  color,
}: {
  size: number;
  strokeWidth: number;
  color: string;
}) => {
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        opacity={0.2}
      />
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={`${circumference * 0.25} ${circumference * 0.75}`}
        transform={`rotate(-90 ${center} ${center})`}
      />
    </motion.svg>
  );
};

// ============================================================================
// 组件
// ============================================================================

export const Loading = ({
  size = "medium",
  visible = true,
  text,
  fullscreen = false,
  isDark: isDarkProp = false,
  className = "",
}: LoadingProps) => {
  const { isDark: ctxDark, tokens: ctxTokens } = useThemeOptional();
  const isDark = isDarkProp ?? ctxDark;
  const tokens = ctxTokens;
  const sizeConfig = SIZE_CONFIG[size];

  const containerStyle = useMemo<CSSProperties>(
    () => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: sizeConfig.gap,
    }),
    [sizeConfig.gap]
  );

  const fullscreenStyle = useMemo<CSSProperties>(
    () => ({
      position: "fixed",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: tokens.bgColor.overlay,
      zIndex: 3000,
    }),
    [tokens]
  );

    const textStyle = useMemo<CSSProperties>(
      () => ({
        fontSize: sizeConfig.textSize,
        color: tokens.textColor.secondary,
        lineHeight: tokens.typography.body.primary.lineHeight,
      }),
      [sizeConfig, tokens]
    );

  const content = (
    <div className={`tai-loading ${className}`.trim()} style={containerStyle}>
      <Spinner
        size={sizeConfig.spinnerSize}
        strokeWidth={sizeConfig.strokeWidth}
        color={tokens.functionalColor.brand.main}
      />
      {text && <span style={textStyle}>{text}</span>}
    </div>
  );

  if (fullscreen) {
    return (
      <AnimatePresence>
        {visible && (
          <motion.div
            style={fullscreenStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return visible ? content : null;
};

Loading.displayName = "Loading";
