import React from "react";
import { useThemeOptional } from "@tai-design/components";
import { ButtonComponent } from "./ButtonComponent";
import svgPaths from "../assets/svg-data/svg-dqw2s6esdl";

export interface PageSubNavBarAction {
  label: string;
  onClick?: () => void;
}

export interface PageSubNavBarProps {
  /** 页面标题 */
  title?: string;
  /** 后退按钮点击事件 */
  onBack?: () => void;
  /** 右侧操作按钮列表，最多 2 个 */
  actions?: PageSubNavBarAction[];
}

/**
 * 页面二级导航栏组件 - 二级页面使用
 * - 左侧：后退按钮 + 页面标题
 * - 右侧：操作按钮（最多 2 个，使用 84px 高度的大号按钮）
 */
export function PageSubNavBar({
  title = "二级页面标题",
  onBack,
  actions = [],
}: PageSubNavBarProps) {
  const { tokens } = useThemeOptional();
  const displayActions = actions.slice(0, 2);

  const backIcon = (
    <div className="absolute flex inset-[11.64%_0.48%_11.76%_22.92%] items-center justify-center">
      <div className="flex-none rotate-45 size-[26px]">
        <div className="relative size-full" data-name="返回">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path
              clipRule="evenodd"
              d={svgPaths.p121bd180}
              fill={tokens.textColor.primary}
              fillRule="evenodd"
              style={{ fill: tokens.textColor.primary, fillOpacity: "1" }}
            />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="content-stretch flex items-center justify-between overflow-clip p-[24px] relative w-full"
      data-name="页面二级导航栏"
    >
      <div className="content-stretch flex gap-[36px] items-center relative shrink-0">
        <ButtonComponent iconOnly icon={backIcon} onClick={onBack} />

        <div className="content-stretch flex flex-col h-[84px] justify-center leading-[0] not-italic relative shrink-0">
          <p
            className="font-['Noto_Sans_S_Chinese:Medium',sans-serif] leading-[42px] text-[42px]"
            style={{ color: tokens.textColor.primary }}
          >
            {title}
          </p>
        </div>
      </div>

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
