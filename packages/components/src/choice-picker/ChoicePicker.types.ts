/**
 * ChoicePicker — 选择器组件类型定义
 */

export interface ChoiceOption {
  /** 选项值 */
  value: string;
  /** 选项标签 */
  label: string;
  /** 是否禁用该选项 */
  disabled?: boolean;
}

export type ChoicePickerMode = "radio" | "checkbox";

export interface ChoicePickerProps {
  /** 选项列表 */
  options: ChoiceOption[];
  /** 选择模式：单选 radio / 多选 checkbox */
  mode?: ChoicePickerMode;
  /** 受控值（radio 时为 string，checkbox 时为 string[]） */
  value?: string | string[];
  /** 非受控默认值 */
  defaultValue?: string | string[];
  /** 值变化回调 */
  onChange?: (value: string | string[]) => void;
  /** 是否禁用整个选择器 */
  disabled?: boolean;
  /** 是否深色模式 */
  isDark?: boolean;
  /** 自定义类名 */
  className?: string;
}
