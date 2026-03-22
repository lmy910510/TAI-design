import { useMemo, useState, useCallback, CSSProperties } from "react";
import { motion } from "framer-motion";
import { STATIC } from "../tokens/primitives";
import { useThemeOptional } from "../hooks/ThemeContext";


// ============================================================================
// 配置
// ============================================================================

const CHECKBOX_CONFIG = {
  size: 48,
  radius: 12,
  iconStrokeWidth: 3,
  labelGap: 12,
  labelFontSize: 28,   // → typography.body.primary.fontSize
};

// ============================================================================
// 类型
// ============================================================================

export interface CheckboxProps {
  /** 受控选中状态 */
  checked?: boolean;
  /** 非受控默认选中 */
  defaultChecked?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 标签文本 */
  label?: string;
  /** 选中状态变化回调 */
  onChange?: (checked: boolean) => void;
  /** 是否深色模式 */
  isDark?: boolean;
  /** 自定义类名 */
  className?: string;
}

// ============================================================================
// 图标
// ============================================================================

const CheckmarkIcon = ({ color }: { color: string }) => (
  <svg
    width={CHECKBOX_CONFIG.size * 0.6}
    height={CHECKBOX_CONFIG.size * 0.6}
    viewBox="0 0 24 24"
    fill="none"
  >
    <motion.path
      d="M4 12L10 18L20 6"
      stroke={color}
      strokeWidth={CHECKBOX_CONFIG.iconStrokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.2 }}
    />
  </svg>
);

// ============================================================================
// 组件
// ============================================================================

export const Checkbox = ({
  checked: checkedProp,
  defaultChecked = false,
  disabled = false,
  label,
  onChange,
  isDark: isDarkProp = false,
  className = "",
}: CheckboxProps) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = checkedProp !== undefined;
  const isChecked = isControlled ? checkedProp : internalChecked;

  const { isDark: ctxDark, tokens: ctxTokens } = useThemeOptional();
  const isDark = isDarkProp ?? ctxDark;
  const tokens = ctxTokens;

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
      display: "inline-flex",
      alignItems: "center",
      gap: CHECKBOX_CONFIG.labelGap,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
    }),
    [disabled]
  );

  const boxStyle = useMemo<CSSProperties>(
    () => ({
      width: CHECKBOX_CONFIG.size,
      height: CHECKBOX_CONFIG.size,
      borderRadius: CHECKBOX_CONFIG.radius,
      backgroundColor: isChecked ? tokens.borderColor.focus : STATIC.transparent,
      border: isChecked ? "none" : `2px solid ${tokens.borderColor.level2}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background-color 150ms ease, border-color 150ms ease",
      flexShrink: 0,
    }),
    [isChecked, tokens]
  );

  const labelStyle = useMemo<CSSProperties>(
    () => ({
      fontSize: CHECKBOX_CONFIG.labelFontSize,
      color: tokens.textColor.primary,
      lineHeight: tokens.typography.body.primary.lineHeight,
      userSelect: "none",
    }),
    [tokens]
  );

  return (
    <div
      className={`tai-checkbox ${isChecked ? "tai-checkbox--checked" : ""} ${
        disabled ? "tai-checkbox--disabled" : ""
      } ${className}`.trim()}
      style={containerStyle}
      onClick={handleToggle}
      role="checkbox"
      aria-checked={isChecked}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleToggle();
        }
      }}
    >
      <div style={boxStyle}>
        {isChecked && <CheckmarkIcon color={isDark ? STATIC.black : STATIC.white} />}
      </div>
      {label && <span style={labelStyle}>{label}</span>}
    </div>
  );
};

Checkbox.displayName = "Checkbox";
