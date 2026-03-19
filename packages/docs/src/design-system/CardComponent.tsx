import { ReactNode } from "react";
import { c, COLD_GRAY } from "../data/colorTokens";

// Token 常量（与 @tai-design/tokens 保持一致）
const SPACING = {
  '4': 24,  // 常规间距
} as const;

const RADIUS = {
  '2xl': 30,  // 卡片/面板
} as const;

export type CardVariant = "gray" | "white" | "elevated" | "transparent";

export interface CardProps {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  isDark?: boolean;
}

/**
 * 车机端通用卡片组件 (Card Component)
 * 
 * @param variant - 'gray' (浅灰, 适用于白色背景) | 'white' (白色无投影, 适用于浅灰色背景) | 'elevated' (白色带投影, 适用于最高层级/可滑动内容) | 'transparent' (透明玻璃态)
 * @param isDark - 是否深色模式
 */
export function CardComponent({ 
  variant = "gray", 
  children, 
  className = "", 
  onClick,
  isDark = false
}: CardProps) {
  const colors = c(isDark);
  
  // 基础样式
  const baseStyle: React.CSSProperties = {
    borderRadius: RADIUS['2xl'],
    padding: SPACING['4'],
    transition: 'transform 300ms',
  };
  
  let variantStyle: React.CSSProperties = {};
  
  switch (variant) {
    case "white":
      // 1. 白色无投影：用在浅灰色背景
      variantStyle = {
        backgroundColor: colors.bg.primary,
      };
      break;
    case "elevated":
      // 3. 白色带投影：表示突出的内容和层级，用于最重要的卡片，或滑动感强的卡片
      variantStyle = {
        backgroundColor: colors.bg.elevated,
        boxShadow: isDark 
          ? '0 12px 48px rgba(0, 0, 0, 0.5)' 
          : `0 12px 48px ${COLD_GRAY[100]}14`, // rgba(26,29,40,0.08)
      };
      break;
    case "transparent":
      // 4. 透明玻璃态：用于叠加在背景图上
      // 由外部通过className控制具体样式
      break;
    case "gray":
    default:
      // 2. 浅灰色：用在白色背景
      variantStyle = {
        backgroundColor: colors.bg.secondary,
      };
      break;
  }

  return (
    <div 
      className={`${className} ${onClick ? 'cursor-pointer active:scale-[0.98]' : ''}`}
      style={{ ...baseStyle, ...variantStyle }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
