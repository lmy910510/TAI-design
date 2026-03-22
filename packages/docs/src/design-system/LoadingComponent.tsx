import React, { ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { useTheme } from '@tai-design/components';

export type LoadingSize = "small" | "medium" | "large";

export interface LoadingComponentProps {
  /** 加载提示文本 */
  children?: ReactNode;
  /** 尺寸 */
  size?: LoadingSize;
  /** 是否显示文本 */
  showText?: boolean;
  /** 自定义类名 */
  className?: string;
}

const SIZE_MAP = {
  small: { spinner: 32, text: 24, gap: 12 },
  medium: { spinner: 48, text: 28, gap: 24 },
  large: { spinner: 64, text: 32, gap: 30 },
} as const;

/**
 * 加载组件 (Loading)
 * 用于页面和区块的加载状态
 */
export function LoadingComponent({
  children = "加载中...",
  size = "medium",
  showText = true,
  className = "",
}: LoadingComponentProps) {
  const { tokens } = useTheme();
  const sizeConfig = SIZE_MAP[size];

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2
        size={sizeConfig.spinner}
        className="animate-spin"
        style={{ color: tokens.functionalColor.brand.main }}
        strokeWidth={2.5}
      />
      {showText && (
        <div
          className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] text-center"
          style={{
            color: tokens.textColor.secondary,
            fontSize: `${sizeConfig.text}px`,
            marginTop: `${sizeConfig.gap}px`,
            lineHeight: 1.5,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
