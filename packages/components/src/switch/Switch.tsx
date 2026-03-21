import { useMemo, useState, useCallback, CSSProperties } from "react";
import { motion } from "framer-motion";
import { useThemeOptional } from "../hooks/ThemeContext";

// ============================================================================
// 配置
// ============================================================================

type SwitchSize = "default" | "small";

const SIZE_CONFIG: Record<
  SwitchSize,
  { width: number; height: number; thumbSize: number; thumbMargin: number }
> = {
  default: {
    width: 108,
    height: 60,
    thumbSize: 48,
    thumbMargin: 6,
  },
  small: {
    width: 90,
    height: 48,
    thumbSize: 36,
    thumbMargin: 6,
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

  const { isDark: ctxDark, tokens: ctxTokens } = useThemeOptional();
  const isDark = isDarkProp ?? ctxDark;
  const tokens = ctxTokens;
  const sizeConfig = SIZE_CONFIG[size];

  const handleToggle = useCallback(() => {
    if (disabled) return;
    const newValue = !isChecked;
    if (!isControlled) {
      setInternalChecked(newValue);
    }
    onChange?.(newValue);
  }, [disabled, isChecked, isControlled, onChange]);

  const trackColor = isChecked ? tokens.switch.on : tokens.switch.off;

  const containerStyle = useMemo<CSSProperties>(
    () => ({
      width: sizeConfig.width,
      height: sizeConfig.height,
      borderRadius: sizeConfig.height / 2,
      backgroundColor: trackColor,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background-color 200ms ease",
      display: "flex",
      alignItems: "center",
      padding: sizeConfig.thumbMargin,
    }),
    [sizeConfig, trackColor, disabled]
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
          backgroundColor: tokens.switch.thumb,
          boxShadow: `0 2px 4px ${tokens.switch.thumbShadow}`,
        }}
        animate={{ x: thumbX }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </div>
  );
};

Switch.displayName = "Switch";
