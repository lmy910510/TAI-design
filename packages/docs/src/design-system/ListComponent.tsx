import { ReactNode, HTMLAttributes } from "react";
import { ChevronRightIcon } from "tdesign-icons-react";

export interface ListComponentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  bordered?: boolean;
  divided?: boolean;
  className?: string;
}

/**
 * 列表容器 (List Wrapper)
 * 用于垂直排列列表项。
 * 
 * @param bordered - 是否显示外边框及圆角
 * @param divided - 是否在列表项之间显示分割线
 */
export function ListComponent({ 
  children, 
  bordered = false, 
  divided = true, 
  className = "", 
  ...props 
}: ListComponentProps) {
  return (
    <div 
      className={`
        w-full bg-white flex flex-col
        ${bordered ? "border border-gray-200 rounded-[30px] overflow-hidden" : ""}
        ${divided ? "divide-y divide-gray-200" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  title: ReactNode;
  description?: ReactNode;
  prefixIcon?: ReactNode;
  suffixContent?: ReactNode;
  showArrow?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * 列表项 (List Item)
 * 基于6px栅格，单行最小高度 96px，双行最小高度 120px。
 * 主标题 32px，正文/副标题 28px。
 *
 * @param title - 主标题
 * @param description - 副标题/正文描述
 * @param prefixIcon - 左侧图标或头像区域 (支持 48px, 60px 等尺寸)
 * @param suffixContent - 右侧附加内容 (如 Switch, 纯文本, 辅助徽标)
 * @param showArrow - 是否显示右侧箭头
 */
export function ListItemComponent({
  title,
  description,
  prefixIcon,
  suffixContent,
  showArrow = false,
  onClick,
  className = "",
  ...props
}: ListItemProps) {
  // 是否可交互（有点击事件，或是纯展示）
  const isInteractive = !!onClick;

  return (
    <div
      onClick={onClick}
      className={`
        relative flex items-center w-full px-[24px] box-border
        ${description ? "min-h-[120px] py-[24px]" : "min-h-[96px] py-[24px]"}
        ${isInteractive ? "cursor-pointer active:bg-gray-50 transition-colors duration-200" : ""}
        ${className}
      `}
      {...props}
    >
      {/* 1. 左侧前缀区域 (Prefix) */}
      {prefixIcon && (
        <div className="mr-[24px] flex-shrink-0 flex items-center justify-center">
          {prefixIcon}
        </div>
      )}

      {/* 2. 中间主要内容区域 (Main Content) */}
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <div className="text-[32px] leading-[48px] font-medium text-[#000000] truncate">
          {title}
        </div>
        {description && (
          <div className="text-[28px] leading-[40px] text-gray-500 mt-[6px] truncate">
            {description}
          </div>
        )}
      </div>

      {/* 3. 右侧后缀区域 (Suffix) */}
      {(suffixContent || showArrow) && (
        <div className="ml-[24px] flex-shrink-0 flex items-center gap-[18px]">
          {suffixContent && (
            <div className="flex items-center text-[28px] text-gray-500">
              {suffixContent}
            </div>
          )}
          {showArrow && (
            <ChevronRightIcon className="text-[36px] text-gray-400" />
          )}
        </div>
      )}
    </div>
  );
}
