import React from 'react';
import { ButtonComponent } from './ButtonComponent';

export interface PageTopNavBarAction {
  label: string;
  onClick?: () => void;
}

export interface PageTopNavBarProps {
  /** 页面标题 */
  title?: string;
  /** 是否显示标题，默认为true */
  showTitle?: boolean;
  /** 右侧操作按钮列表，最多3个 */
  actions?: PageTopNavBarAction[];
}

/**
 * 页面顶部导航栏组件 - 一级页面使用
 * - 左侧：页面标题（支持显示/隐藏）
 * - 右侧：操作按钮（最多3个，使用84px高度的大号按钮）
 */
export function PageTopNavBar({
  title = '一级页面标题',
  showTitle = true,
  actions = [],
}: PageTopNavBarProps) {
  // 限制最多3个操作按钮
  const displayActions = actions.slice(0, 3);

  return (
    <div
      className="content-stretch flex items-center justify-between overflow-clip p-[24px] relative w-full"
      data-name="页面顶部导航栏"
    >
      {/* 左侧标题区域 */}
      {showTitle && (
        <div className="content-stretch flex flex-col h-[84px] justify-center leading-[0] not-italic relative shrink-0">
          <p className="font-['Noto_Sans_S_Chinese:Medium',sans-serif] leading-[42px] text-[42px] text-black">
            {title}
          </p>
        </div>
      )}

      {/* 右侧操作按钮区域 */}
      {displayActions.length > 0 && (
        <div className="content-stretch flex gap-[30px] items-start relative shrink-0 ml-auto">
          {displayActions.map((action, index) => (
            <ButtonComponent
              key={index}
              onClick={action.onClick}
            >
              {action.label}
            </ButtonComponent>
          ))}
        </div>
      )}
    </div>
  );
}