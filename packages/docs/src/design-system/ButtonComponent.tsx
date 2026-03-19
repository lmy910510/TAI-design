import React, { ReactNode } from 'react';

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
  /** 按钮变体：primary（白底）| secondary（浅灰底黑字） */
  variant?: 'primary' | 'secondary';
}

/**
 * 大号按钮组件（84px高度）
 * 用于页面顶部导航栏等场景
 * 支持文本按钮和仅图标按钮两种模式
 */
export function ButtonComponent({
  children,
  onClick,
  disabled = false,
  className = '',
  icon,
  iconOnly = false,
  variant = 'primary',
}: ButtonComponentProps) {
  // 仅图标模式：使用 padding: 24px，容器正方形
  const paddingClass = iconOnly ? 'p-[24px]' : 'px-[42px]';
  // 仅图标模式：圆角更大，接近圆形
  const roundedClass = iconOnly ? 'rounded-[64px]' : 'rounded-[42px]';

  const variantClass = variant === 'secondary'
    ? 'bg-[rgba(0,0,0,0.06)] hover:bg-[rgba(0,0,0,0.10)] active:bg-[rgba(0,0,0,0.04)]'
    : 'bg-[rgba(255,255,255,0.92)] shadow-[0px_3px_12px_0px_rgba(0,0,0,0.12)] hover:bg-[rgba(255,255,255,1)] active:bg-[rgba(255,255,255,0.8)]';

  return (
    <button
      className={`content-stretch flex h-[84px] items-center justify-center ${paddingClass} relative ${roundedClass} shrink-0 cursor-pointer transition-all disabled:opacity-50 disabled:cursor-not-allowed ${variantClass} ${className}`}
      data-name="btn"
      onClick={onClick}
      disabled={disabled}
    >
      {iconOnly ? (
        // 仅图标模式
        <div className="overflow-clip relative shrink-0 size-[36px]">
          {icon}
        </div>
      ) : (
        // 文本模式
        <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">
          <p className="leading-[32px]">{children}</p>
        </div>
      )}
    </button>
  );
}