import {
  forwardRef,
  useMemo,
  useState,
  useCallback,
  useRef,
  useImperativeHandle,
  CSSProperties,
} from "react";
import { InputProps } from "./Input.types";
import { createColors } from "../tokens";

// ============================================================================
// 配置
// ============================================================================

const INPUT_CONFIG = {
  height: 84,
  paddingX: 24,
  radius: 24,
  fontSize: 32,
  iconSize: 36,
  clearButtonSize: 36,
};

// ============================================================================
// 图标
// ============================================================================

const ClearIcon = ({ size, color }: { size: number; color: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill={color} />
    <path
      d="M8 8L16 16M16 8L8 16"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// ============================================================================
// 组件
// ============================================================================

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      value: valueProp,
      defaultValue = "",
      placeholder,
      onChange,
      disabled = false,
      readOnly = false,
      clearable = true,
      maxLength,
      prefixIcon,
      suffixIcon,
      isDark: isDarkProp = false,
      className = "",
      onFocus,
      onBlur,
      onClear,
      style,
      ...restProps
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current!);

    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue);

    const isControlled = valueProp !== undefined;
    const currentValue = isControlled ? valueProp : internalValue;

    const isDark = isDarkProp;
    const colors = useMemo(() => createColors(isDark), [isDark]);

    const showClear =
      clearable &&
      !disabled &&
      !readOnly &&
      currentValue.length > 0 &&
      isFocused;

    const handleFocus = useCallback(() => {
      setIsFocused(true);
      onFocus?.();
    }, [onFocus]);

    const handleBlur = useCallback(() => {
      // 延迟处理以允许点击清除按钮
      setTimeout(() => {
        setIsFocused(false);
        onBlur?.();
      }, 150);
    }, [onBlur]);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (!isControlled) {
          setInternalValue(newValue);
        }
        onChange?.(newValue, e);
      },
      [isControlled, onChange]
    );

    const handleClear = useCallback(() => {
      if (!isControlled) {
        setInternalValue("");
      }
      onChange?.("");
      onClear?.();
      inputRef.current?.focus();
    }, [isControlled, onChange, onClear]);

    const containerStyle = useMemo<CSSProperties>(
      () => ({
        display: "flex",
        alignItems: "center",
        gap: 12,
        height: INPUT_CONFIG.height,
        paddingLeft: INPUT_CONFIG.paddingX,
        paddingRight: INPUT_CONFIG.paddingX,
        borderRadius: INPUT_CONFIG.radius,
        backgroundColor: colors.input.bg,
        transition: "box-shadow 150ms ease",
        boxShadow: isFocused ? `inset 0 0 0 2px ${colors.input.ring}` : "none",
        ...style,
      }),
      [colors, isFocused, style]
    );

    const inputStyle = useMemo<CSSProperties>(
      () => ({
        flex: 1,
        height: "100%",
        padding: 0,
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        fontSize: INPUT_CONFIG.fontSize,
        color: disabled ? colors.text.disabled : colors.input.text,
        caretColor: colors.input.text,
      }),
      [colors, disabled]
    );

    const iconStyle = useMemo<CSSProperties>(
      () => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: INPUT_CONFIG.iconSize,
        height: INPUT_CONFIG.iconSize,
        flexShrink: 0,
        color: colors.text.tertiary,
      }),
      [colors]
    );

    const clearStyle = useMemo<CSSProperties>(
      () => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: INPUT_CONFIG.clearButtonSize,
        height: INPUT_CONFIG.clearButtonSize,
        flexShrink: 0,
        cursor: "pointer",
        opacity: showClear ? 1 : 0,
        pointerEvents: showClear ? "auto" : "none",
        transition: "opacity 150ms ease",
      }),
      [showClear]
    );

    return (
      <div
        className={`tai-input ${
          disabled ? "tai-input--disabled" : ""
        } ${className}`.trim()}
        style={containerStyle}
      >
        {prefixIcon && <span style={iconStyle}>{prefixIcon}</span>}
        <input
          ref={inputRef}
          type={type === "licensePlate" ? "text" : type}
          value={currentValue}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          maxLength={maxLength}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          style={inputStyle}
          className="tai-input__inner"
          {...restProps}
        />
        {clearable && (
          <span
            style={clearStyle}
            onClick={handleClear}
            role="button"
            tabIndex={-1}
            aria-label="清除"
          >
            <ClearIcon
              size={INPUT_CONFIG.clearButtonSize}
              color={colors.input.clearIcon}
            />
          </span>
        )}
        {suffixIcon && <span style={iconStyle}>{suffixIcon}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
