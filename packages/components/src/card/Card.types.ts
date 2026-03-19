import { ReactNode, HTMLAttributes } from "react";

export type CardVariant = "gray" | "white" | "elevated" | "transparent";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** 卡片变体 */
  variant?: CardVariant;
  /** 卡片内容 */
  children: ReactNode;
  /** 自定义类名 */
  className?: string;
  /** 点击事件 */
  onClick?: () => void;
  /** 是否深色模式（覆盖 context） */
  isDark?: boolean;
}
