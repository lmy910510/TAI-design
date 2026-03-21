import {
  forwardRef,
  useMemo,
  useState,
  useCallback,
  useRef,
  useEffect,
  CSSProperties,
  ReactNode,
} from "react";
import {
  STATIC,
  SPACING,
  SHADOW,
} from "../tokens";
import { useThemeOptional } from "../hooks/ThemeContext";

// ============================================================================
// 配置
// ============================================================================

type SliderSize = "large" | "medium" | "small";

const SIZE_CONFIG: Record<
  SliderSize,
  {
    trackHeight: number;
    thumbSize: number;
    valueFontSize: number;
    iconSize: number;
    height: number;
  }
> = {
  large: {
    trackHeight: 12,
    thumbSize: 48,
    valueFontSize: 28,   // → typography.body.primary.fontSize
    iconSize: 40,
    height: 60,
  },
  medium: {
    trackHeight: 10,
    thumbSize: 40,
    valueFontSize: 24,   // → typography.display.numeric.fontSize
    iconSize: 32,
    height: 52,
  },
  small: {
    trackHeight: 8,
    thumbSize: 32,
    valueFontSize: 20,   // ~meta.time(22)，small 保持 20
    iconSize: 28,
    height: 44,
  },
};

// ============================================================================
// 类型
// ============================================================================

export interface SliderProps {
  /** 受控值 */
  value?: number;
  /** 非受控默认值 */
  defaultValue?: number;
  /** 最小值 */
  min?: number;
  /** 最大值 */
  max?: number;
  /** 步长 */
  step?: number;
  /** 尺寸 */
  size?: SliderSize;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否显示数值 */
  showValue?: boolean;
  /** 格式化显示值 */
  formatValue?: (value: number) => string;
  /** 前缀图标 */
  prefixIcon?: ReactNode;
  /** 后缀图标 */
  suffixIcon?: ReactNode;
  /** 值变化回调 */
  onChange?: (value: number) => void;
  /** 拖拽结束回调 */
  onAfterChange?: (value: number) => void;
  /** 是否深色模式 */
  isDark?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
}

// ============================================================================
// 组件
// ============================================================================

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      value: valueProp,
      defaultValue = 0,
      min = 0,
      max = 100,
      step = 1,
      size = "large",
      disabled = false,
      showValue = false,
      formatValue,
      prefixIcon,
      suffixIcon,
      onChange,
      onAfterChange,
      isDark: isDarkProp,
      className = "",
      style,
    },
    ref
  ) => {
    const { isDark: ctxDark, tokens: ctxTokens } = useThemeOptional();
    const isDark = isDarkProp ?? ctxDark;
    const tokens = ctxTokens;
    const sizeConfig = SIZE_CONFIG[size];

    const [internalValue, setInternalValue] = useState(defaultValue);
    const isControlled = valueProp !== undefined;
    const currentValue = isControlled ? valueProp : internalValue;

    const [isDragging, setIsDragging] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);

    const percent = useMemo(() => {
      const clampedValue = Math.max(min, Math.min(max, currentValue));
      return ((clampedValue - min) / (max - min)) * 100;
    }, [currentValue, min, max]);

    const calcValueFromPosition = useCallback(
      (clientX: number) => {
        if (!trackRef.current) return currentValue;
        const rect = trackRef.current.getBoundingClientRect();
        const offsetX = clientX - rect.left;
        const ratio = Math.max(0, Math.min(1, offsetX / rect.width));
        const rawValue = min + ratio * (max - min);
        const steppedValue = Math.round(rawValue / step) * step;
        return Math.max(min, Math.min(max, steppedValue));
      },
      [currentValue, min, max, step]
    );

    const updateValue = useCallback(
      (newValue: number) => {
        if (disabled) return;
        if (!isControlled) {
          setInternalValue(newValue);
        }
        onChange?.(newValue);
      },
      [disabled, isControlled, onChange]
    );

    const handleStart = useCallback(
      (clientX: number) => {
        if (disabled) return;
        setIsDragging(true);
        const newValue = calcValueFromPosition(clientX);
        updateValue(newValue);
      },
      [disabled, calcValueFromPosition, updateValue]
    );

    const handleMove = useCallback(
      (clientX: number) => {
        if (!isDragging || disabled) return;
        const newValue = calcValueFromPosition(clientX);
        updateValue(newValue);
      },
      [isDragging, disabled, calcValueFromPosition, updateValue]
    );

    const handleEnd = useCallback(() => {
      if (isDragging) {
        setIsDragging(false);
        onAfterChange?.(currentValue);
      }
    }, [isDragging, currentValue, onAfterChange]);

    useEffect(() => {
      if (!isDragging) return;

      const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
      const handleTouchMove = (e: TouchEvent) => {
        if (e.touches[0]) handleMove(e.touches[0].clientX);
      };
      const handleMouseUp = () => handleEnd();
      const handleTouchEnd = () => handleEnd();

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };
    }, [isDragging, handleMove, handleEnd]);

    const displayValue = useMemo(() => {
      if (formatValue) return formatValue(currentValue);
      return String(currentValue);
    }, [currentValue, formatValue]);

    const containerStyle = useMemo<CSSProperties>(
      () => ({
        display: "flex",
        alignItems: "center",
        gap: SPACING["3"],
        height: sizeConfig.height,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "default",
        ...style,
      }),
      [sizeConfig.height, disabled, style]
    );

    const iconStyle = useMemo<CSSProperties>(
      () => ({
        width: sizeConfig.iconSize,
        height: sizeConfig.iconSize,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: tokens.textColor.secondary,
      }),
      [sizeConfig.iconSize, tokens]
    );

    const trackWrapperStyle = useMemo<CSSProperties>(
      () => ({
        flex: 1,
        position: "relative",
        height: sizeConfig.thumbSize,
        display: "flex",
        alignItems: "center",
        cursor: disabled ? "not-allowed" : "pointer",
      }),
      [sizeConfig.thumbSize, disabled]
    );

    const trackStyle = useMemo<CSSProperties>(
      () => ({
        width: "100%",
        height: sizeConfig.trackHeight,
        backgroundColor: tokens.bgColor.secondaryContainer,
        borderRadius: sizeConfig.trackHeight / 2,
        overflow: "hidden",
        position: "relative",
      }),
      [sizeConfig.trackHeight, tokens]
    );

    const fillStyle = useMemo<CSSProperties>(
      () => ({
        position: "absolute",
        left: 0,
        top: 0,
        height: "100%",
        width: `${percent}%`,
        backgroundColor: tokens.textColor.primary,
        borderRadius: sizeConfig.trackHeight / 2,
        transition: isDragging ? "none" : "width 100ms ease",
      }),
      [percent, tokens, sizeConfig.trackHeight, isDragging]
    );

    const thumbStyle = useMemo<CSSProperties>(
      () => ({
        position: "absolute",
        left: `${percent}%`,
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: sizeConfig.thumbSize,
        height: sizeConfig.thumbSize,
        backgroundColor: STATIC.white,
        borderRadius: "50%", // 圆形 thumb，几何形状非设计圆角
        boxShadow: SHADOW.xl,
        transition: isDragging ? "none" : "left 100ms ease",
        cursor: disabled ? "not-allowed" : "grab",
      }),
      [percent, sizeConfig.thumbSize, isDragging, disabled]
    );

    const valueStyle = useMemo<CSSProperties>(
      () => ({
        fontSize: sizeConfig.valueFontSize,
        fontWeight: tokens.typography.display.numeric.fontWeight,
        color: tokens.textColor.primary,
        minWidth: 48,
        textAlign: "center",
        flexShrink: 0,
      }),
      [sizeConfig.valueFontSize, tokens]
    );

    return (
      <div
        ref={ref}
        className={`tai-slider tai-slider--${size} ${className}`.trim()}
        style={containerStyle}
      >
        {prefixIcon && <span style={iconStyle}>{prefixIcon}</span>}
        <div
          ref={trackRef}
          style={trackWrapperStyle}
          onMouseDown={(e) => handleStart(e.clientX)}
          onTouchStart={(e) => {
            if (e.touches[0]) handleStart(e.touches[0].clientX);
          }}
        >
          <div style={trackStyle}>
            <div style={fillStyle} />
          </div>
          <div style={thumbStyle} />
        </div>
        {suffixIcon && <span style={iconStyle}>{suffixIcon}</span>}
        {showValue && <span style={valueStyle}>{displayValue}</span>}
      </div>
    );
  }
);

Slider.displayName = "Slider";
