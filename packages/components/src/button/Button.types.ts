import { ReactNode, ButtonHTMLAttributes } from "react";

export const BUTTON_VARIANTS = [
  "primary",
  "secondary",
  "ghost",
  "danger",
] as const;

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

export const BUTTON_SIZES = ["large", "medium", "small", "extraSmall"] as const;

export type ButtonSize = (typeof BUTTON_SIZES)[number];

export const BUTTON_ICON_POSITIONS = ["none", "left", "right", "only"] as const;

export type ButtonIconPosition = (typeof BUTTON_ICON_POSITIONS)[number];

export const BUTTON_VISUAL_STATES = ["default", "hover", "pressed"] as const;

export type ButtonVisualState = (typeof BUTTON_VISUAL_STATES)[number];

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  /** 按钮变体 */
  variant?: ButtonVariant;
  /** 按钮尺寸 */
  size?: ButtonSize;
  /** 图标位置 */
  iconPosition?: ButtonIconPosition;
  /** 图标元素 */
  icon?: ReactNode;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否撑满宽度 */
  fullWidth?: boolean;
  /** 是否深色模式（覆盖 context） */
  isDark?: boolean;
  /** 强制指定展示态，主要用于文档与预览场景 */
  forceState?: ButtonVisualState;
  /** 原生 button type */
  htmlType?: "button" | "submit" | "reset";
  /** 自定义类名 */
  className?: string;
  /** 按钮内容 */
  children?: ReactNode;
}
