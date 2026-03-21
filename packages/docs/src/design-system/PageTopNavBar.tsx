import React from "react";
import { useThemeOptional } from "@tai-design/components";
import { ButtonComponent } from "./ButtonComponent";

export interface PageTopNavBarAction {
  label: string;
  onClick?: () => void;
}

export interface PageTopNavBarProps {
  /** 页面标题 */
  title?: string;
  /** 是否显示标题，默认为 true */
  showTitle?: boolean;
  /** 右侧操作按钮列表，最多 3 个 */
  actions?: PageTopNavBarAction[];
}

/**
 * 页面顶部导航栏组件 - 一级页面使用
 * - 左侧：页面标题（支持显示/隐藏）
 * - 右侧：操作按钮（最多 3 个，使用 84px 高度的大号按钮）
 */
export function PageTopNavBar({
  title = "一级页面标题",
  showTitle = true,
  actions = [],
}: PageTopNavBarProps) {
  const { tokens } = useThemeOptional();
  const displayActions = actions.slice(0, 3);

  return (
    <div
      className="content-stretch flex items-center justify-between overflow-clip p-[24px] relative w-full"
      data-name="页面顶部导航栏"
    >
      {showTitle ? (
        <div className="content-stretch flex flex-col h-[84px] justify-center leading-[0] not-italic relative shrink-0">
          <p
            className="font-['Noto_Sans_S_Chinese:Medium',sans-serif] leading-[42px] text-[42px]"
            style={{ color: tokens.textColor.primary }}
          >
            {title}
          </p>
        </div>
      ) : null}

      {displayActions.length > 0 ? (
        <div className="content-stretch flex gap-[30px] items-start relative shrink-0 ml-auto">
          {displayActions.map((action, index) => (
            <ButtonComponent key={index} onClick={action.onClick}>
              {action.label}
            </ButtonComponent>
          ))}
        </div>
      ) : null}
    </div>
  );
}
