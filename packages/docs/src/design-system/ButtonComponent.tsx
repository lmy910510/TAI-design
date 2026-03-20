import React, { ReactNode } from "react";
import { Button } from "@tai-design/components";

export interface ButtonComponentProps {
  /** 按钮文本 */
  children?: ReactNode;
  /** 点击事件 */
  onClick?: () => void;
  /** 是否禁用 */
  disabled?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 图标元素（仅图标模式） */
  icon?: ReactNode;
  /** 是否仅显示图标 */
  iconOnly?: boolean;
  /** 按钮变体：primary（主按钮）| secondary（次按钮） */
  variant?: "primary" | "secondary";
}

/**
 * 文档站按钮兼容组件。
 * 统一转发到组件包按钮，确保颜色、状态与 token 行为完全一致。
 */
export function ButtonComponent({
  children,
  onClick,
  disabled = false,
  className = "",
  icon,
  iconOnly = false,
  variant = "primary",
}: ButtonComponentProps) {
  return (
    <Button
      variant={variant}
      size="large"
      icon={icon}
      iconPosition={iconOnly ? "only" : "none"}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {iconOnly ? undefined : children}
    </Button>
  );
}
