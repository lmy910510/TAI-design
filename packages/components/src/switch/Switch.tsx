import { useMemo, useState, useCallback, CSSProperties } from "react";
import { motion } from "framer-motion";
import { createColors } from "../tokens";

// ============================================================================
// 配置
// ============================================================================

type SwitchSize = "default" | "small";

const SIZE_CONFIG: Record<
  SwitchSize,
  { width: number; height: number; thumbSize: number; thumbMargin: number }
> = {
  default: {
    width: 90,
    height: 48,
    thumbSize: 42,
    thumbMargin: 3,
  },
  small: {
    width: 72,
    height: 40,
    thumbSize: 34,
    thumbMargin: 3,
  },
};

// ============================================================================
// 类型
// ============================================================================

export interface SwitchProps {
  /** 受控开启状态 */
  checked?: boolean;
  /** 非受控默认开启 */
  defaultChecked?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 尺寸 */
  size?: SwitchSize;
  /** 状态变化回调 */
  onChange?: (checked: boolean) => void;
  /** 是否深色模式 */
  isDark?: boolean;
  /** 自定义类名 */
  className?: string;
}

// ============================================================================
// 组件
// ============================================================================

export const Switch = ({
  checked: checkedProp,
  defaultChecked = false,
  disabled = false,
  size = "default",
  onChange,
  isDark: isDarkProp = false,
  className = "",
}: SwitchProps) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = checkedProp !== undefined;
  const isChecked = isControlled ? checkedProp : internalChecked;

  const isDark = isDarkProp;
  const colors = useMemo(() => createColors(isDark), [isDark]);
  const sizeConfig = SIZE_CONFIG[size];

  const handleToggle = useCallback(() => {
    if (disabled) return;
    const newValue = !isChecked;
    if (!isControlled) {
      setInternalChecked(newValue);
    }
    onChange?.(newValue);
  }, [disabled, isChecked, isControlled, onChange]);

  const containerStyle = useMemo<CSSProperties>(
    () => ({
      width: sizeConfig.width,
      height: sizeConfig.height,
      borderRadius: sizeConfig.height / 2,
      backgroundColor: isChecked ? colors.switch.on : colors.switch.off,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background-color 200ms ease",
      display: "flex",
      alignItems: "center",
      padding: sizeConfig.thumbMargin,
    }),
    [sizeConfig, isChecked, colors, disabled]
  );

  const thumbX = isChecked
    ? sizeConfig.width - sizeConfig.thumbSize - sizeConfig.thumbMargin * 2
    : 0;

  return (
    <div
      className={`tai-switch ${isChecked ? "tai-switch--checked" : ""} ${
        disabled ? "tai-switch--disabled" : ""
      } ${className}`.trim()}
      style={containerStyle}
      onClick={handleToggle}
      role="switch"
      aria-checked={isChecked}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleToggle();
        }
      }}
    >
      <motion.div
        style={{
          width: sizeConfig.thumbSize,
          height: sizeConfig.thumbSize,
          borderRadius: "50%",
          backgroundColor: colors.switch.thumb,
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}
        animate={{ x: thumbX }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </div>
  );
};

Switch.displayName = "Switch";
