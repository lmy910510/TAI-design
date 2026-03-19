import { ReactNode, InputHTMLAttributes, ChangeEvent } from "react";

export type InputType = "text" | "password" | "number" | "tel" | "licensePlate";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  /** 输入框类型 */
  type?: InputType;
  /** 受控值 */
  value?: string;
  /** 非受控默认值 */
  defaultValue?: string;
  /** 占位符 */
  placeholder?: string;
  /** 值变化回调 */
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否只读 */
  readOnly?: boolean;
  /** 是否可清除 */
  clearable?: boolean;
  /** 最大长度 */
  maxLength?: number;
  /** 前缀图标 */
  prefixIcon?: ReactNode;
  /** 后缀图标 */
  suffixIcon?: ReactNode;
  /** 是否深色模式 */
  isDark?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 聚焦回调 */
  onFocus?: () => void;
  /** 失焦回调 */
  onBlur?: () => void;
  /** 清除回调 */
  onClear?: () => void;
}
