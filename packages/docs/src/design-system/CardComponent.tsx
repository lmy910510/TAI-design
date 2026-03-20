import { ReactNode } from "react";
import { Card, type CardVariant } from "@tai-design/components";

export type { CardVariant };

export interface CardProps {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  isDark?: boolean;
}

/**
 * 文档站卡片兼容组件。
 * 直接复用组件包中的 `Card`，避免 docs 再维护一份本地颜色实现。
 */
export function CardComponent({
  variant = "gray",
  children,
  className = "",
  onClick,
  isDark,
}: CardProps) {
  return (
    <Card variant={variant} className={className} onClick={onClick} isDark={isDark}>
      {children}
    </Card>
  );
}
