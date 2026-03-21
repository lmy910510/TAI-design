import { useMemo, useState, useCallback, CSSProperties } from "react";
import type { ChoicePickerProps } from "./ChoicePicker.types";
import { type SemanticTokens } from "../tokens/semanticTokens";
import { STATIC } from "../tokens/primitives";
import { SPACING, RADIUS } from "../tokens";
import { useThemeOptional } from "../hooks/ThemeContext";

// ============================================================================
// 配置
// ============================================================================

const CHOICE_CONFIG = {
  optionPaddingY: SPACING["4"],
  optionPaddingX: SPACING["4"],
  optionGap: SPACING["3"],
  optionRadius: RADIUS.xl,
  indicatorSize: 24,
  radioInnerSize: 10,
  checkboxRadius: RADIUS.xl / 2,
  labelFontSize: 28,           // → typography.body.primary.fontSize
  labelFontWeight: 500,        // → typography.label.buttonLarge.fontWeight
  labelLineHeight: 1.4,        // → typography.body.primary.lineHeight
  checkmarkFontSize: 18,       // → typography.meta.footnote.fontSize
  checkmarkFontWeight: 700,    // → typography.display.hero.fontWeight
} as const;

// ============================================================================
// 辅助：选中/未选中样式
// ============================================================================

function resolveOptionColors(
  tokens: SemanticTokens,
  selected: boolean
): {
  border: string;
  bg: string;
  text: string;
} {
  return selected
    ? {
        border: tokens.borderColor.brand,
        bg: tokens.bgColor.brandLight,
        text: tokens.textColor.brand,
      }
    : {
        border: tokens.borderColor.level2,
        bg: tokens.bgColor.container,
        text: tokens.textColor.primary,
      };
}

// ============================================================================
// 组件
// ============================================================================

export const ChoicePicker = ({
  options,
  mode = "radio",
  value: valueProp,
  defaultValue,
  onChange,
  disabled = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- 保留 API 兼容
  isDark: _isDarkProp,
  className = "",
}: ChoicePickerProps) => {
  const { tokens: ctxTokens } = useThemeOptional();
  const tokens = ctxTokens;

  // 内部状态
  const [internalValue, setInternalValue] = useState<string | string[]>(
    () => defaultValue ?? (mode === "checkbox" ? [] : "")
  );

  const isControlled = valueProp !== undefined;
  const currentValue = isControlled ? valueProp : internalValue;

  const isSelected = useCallback(
    (optionValue: string): boolean => {
      if (mode === "checkbox") {
        return Array.isArray(currentValue) && currentValue.includes(optionValue);
      }
      return currentValue === optionValue;
    },
    [mode, currentValue]
  );

  const handleSelect = useCallback(
    (optionValue: string) => {
      if (disabled) return;

      let newValue: string | string[];

      if (mode === "checkbox") {
        const arr = Array.isArray(currentValue) ? currentValue : [];
        newValue = arr.includes(optionValue)
          ? arr.filter((v) => v !== optionValue)
          : [...arr, optionValue];
      } else {
        newValue = optionValue;
      }

      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    },
    [mode, currentValue, disabled, isControlled, onChange]
  );

  // ── 样式 ──

  const listStyle = useMemo<CSSProperties>(
    () => ({
      display: "flex",
      flexDirection: "column",
      gap: CHOICE_CONFIG.optionGap,
    }),
    []
  );

  return (
    <div
      className={`tai-choice-picker tai-choice-picker--${mode} ${className}`.trim()}
      style={listStyle}
      role={mode === "radio" ? "radiogroup" : "group"}
    >
      {options.map((option) => {
        const selected = isSelected(option.value);
        const isDisabledOption = disabled || option.disabled;
        const colors = resolveOptionColors(tokens, selected);

        const optionStyle: CSSProperties = {
          display: "flex",
          alignItems: "center",
          gap: CHOICE_CONFIG.optionGap,
          padding: `${CHOICE_CONFIG.optionPaddingY}px ${CHOICE_CONFIG.optionPaddingX}px`,
          borderRadius: CHOICE_CONFIG.optionRadius,
          border: `1px solid ${colors.border}`,
          backgroundColor: colors.bg,
          color: colors.text,
          cursor: isDisabledOption ? "not-allowed" : "pointer",
          opacity: isDisabledOption ? 0.5 : 1,
          transition: "background-color 150ms ease, border-color 150ms ease, color 150ms ease",
        };

        return (
          <button
            key={option.value}
            type="button"
            role={mode === "radio" ? "radio" : "checkbox"}
            aria-checked={selected}
            aria-disabled={isDisabledOption}
            disabled={isDisabledOption}
            style={optionStyle}
            onClick={() => handleSelect(option.value)}
          >
            {mode === "radio" ? (
              <RadioIndicator tokens={tokens} selected={selected} />
            ) : (
              <CheckboxIndicator tokens={tokens} selected={selected} />
            )}
            <span
              style={{
                fontSize: CHOICE_CONFIG.labelFontSize,
                fontWeight: CHOICE_CONFIG.labelFontWeight,
                lineHeight: CHOICE_CONFIG.labelLineHeight,
              }}
            >
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

ChoicePicker.displayName = "ChoicePicker";

// ============================================================================
// Radio 指示器
// ============================================================================

function RadioIndicator({
  tokens,
  selected,
}: {
  tokens: SemanticTokens;
  selected: boolean;
}) {
  const outerStyle: CSSProperties = {
    width: CHOICE_CONFIG.indicatorSize,
    height: CHOICE_CONFIG.indicatorSize,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    border: `2px solid ${selected ? tokens.borderColor.brand : tokens.borderColor.level2}`,
    backgroundColor: tokens.bgColor.elevated,
  };

  const innerStyle: CSSProperties = {
    width: CHOICE_CONFIG.radioInnerSize,
    height: CHOICE_CONFIG.radioInnerSize,
    borderRadius: 999,
    backgroundColor: tokens.functionalColor.brand.main,
  };

  return (
    <span style={outerStyle}>
      {selected ? <span style={innerStyle} /> : null}
    </span>
  );
}

// ============================================================================
// Checkbox 指示器
// ============================================================================

function CheckboxIndicator({
  tokens,
  selected,
}: {
  tokens: SemanticTokens;
  selected: boolean;
}) {
  const style: CSSProperties = {
    width: CHOICE_CONFIG.indicatorSize,
    height: CHOICE_CONFIG.indicatorSize,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: CHOICE_CONFIG.checkboxRadius,
    border: `2px solid ${selected ? tokens.checkbox.checked : tokens.checkbox.unchecked}`,
    backgroundColor: selected ? tokens.checkbox.checked : STATIC.transparent,
    color: tokens.checkbox.checkmark,
    fontSize: CHOICE_CONFIG.checkmarkFontSize,
    fontWeight: CHOICE_CONFIG.checkmarkFontWeight,
  };

  return <span style={style}>{selected ? "✓" : null}</span>;
}
