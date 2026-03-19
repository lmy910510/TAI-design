import { ReactNode } from "react";

export interface GlobalLeftTabProps {
  variant?: "simplified" | "extended";
  className?: string;
  children: ReactNode;
  bottomContent?: ReactNode;
}

/**
 * 全局左侧标签页 (Global Left Tab)
 * 严格基于产品框架布局规范的实现封装。
 */
export function GlobalLeftTab({
  variant = "simplified",
  className = "",
  children,
  bottomContent
}: GlobalLeftTabProps) {
  if (variant === "simplified") {
    return (
      <div className={`relative h-full w-[96px] ${className}`}>
        <div className="absolute left-0 top-0 bg-[rgba(255,255,255,0.6)] content-stretch flex flex-col gap-[18px] items-start overflow-clip p-[6px] rounded-[117.073px] w-[96px]">
          {children}
        </div>
        {bottomContent && (
          <div className="absolute bottom-[48px] left-0">
            {bottomContent}
          </div>
        )}
      </div>
    );
  }

  // 扩展版
  return (
    <div className={`relative rounded-[40px] w-[278px] ${className}`} data-name="Window">
      <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-luminosity pointer-events-none rounded-[40px]" />
      <div className="content-stretch flex flex-col items-center overflow-clip py-[20px] relative rounded-[inherit] size-full">
        {/* Frame15 */}
        <div className="flex-[1_0_0] min-h-px relative shrink-0 w-full">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col items-center justify-between px-[20px] relative size-full">
              {/* Frame14 - 顶部内容区，通常包含出游搭子和组队聊天 */}
              <div className="content-stretch flex flex-col gap-[20px] flex-[1_0_0] min-h-px items-start relative shrink-0 w-full mb-[20px]">
                {children}
              </div>
              
              {/* Frame10 - 底部内容区 */}
              {bottomContent && (
                <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
                  {bottomContent}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

export interface GlobalLeftTabItemProps {
  active?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
}

export function GlobalLeftTabSimplifiedItem({
  active,
  onClick,
  icon,
  className = ""
}: GlobalLeftTabItemProps) {
  if (active) {
    return (
      <button 
        onClick={onClick}
        className={`bg-[rgba(0,0,0,0.8)] text-white content-stretch flex items-center overflow-clip p-[21px] relative rounded-[107.692px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity ${className}`}
      >
        <div className="relative shrink-0 size-[42px] flex items-center justify-center">
          {icon}
        </div>
      </button>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={`text-[#444C5C] content-stretch flex items-center overflow-clip p-[21px] relative shrink-0 cursor-pointer hover:bg-[rgba(0,0,0,0.05)] rounded-[107.692px] transition-colors ${className}`}
    >
      <div className="overflow-clip relative shrink-0 size-[42px] flex items-center justify-center">
        {icon}
      </div>
    </button>
  );
}

export function GlobalLeftTabSimplifiedBottomButton({
  onClick,
  icon,
  className = ""
}: Omit<GlobalLeftTabItemProps, "active">) {
  return (
    <button 
      onClick={onClick}
      className={`bg-[rgba(255,255,255,0.6)] content-stretch flex h-[96px] items-center justify-center overflow-clip rounded-[100px] w-[96px] cursor-pointer hover:bg-[rgba(255,255,255,0.8)] transition-colors ${className}`}
    >
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-[42px] h-[42px] text-[#5B6472]">
        {icon}
      </div>
    </button>
  );
}

export function GlobalLeftTabExtendedBottomButton({
  onClick,
  icon,
  className = ""
}: Omit<GlobalLeftTabItemProps, "active">) {
  return (
    <button 
      onClick={onClick}
      className={`bg-[#f7f8fa] content-stretch flex h-[80px] items-center justify-center relative rounded-[18px] shrink-0 w-full cursor-pointer hover:brightness-95 transition-all ${className}`}
    >
      <div className="bg-[rgba(255,255,255,0.2)] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[24px]">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center py-[30px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[48px] flex items-center justify-center text-black">
              {icon}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

export interface ContentTopTabProps {
  className?: string;
  children: ReactNode;
}

export function ContentTopTab({ className = "", children }: ContentTopTabProps) {
  return (
    <div className={`bg-[#f6f7fa] content-stretch flex gap-[36px] items-center p-[6px] relative rounded-[50px] shrink-0 w-max ${className}`} data-name="top tab">
      {children}
    </div>
  );
}

export interface ContentTopTabItemProps {
  active?: boolean;
  onClick?: () => void;
  label: string;
  className?: string;
}

export function ContentTopTabItem({ active, onClick, label, className = "" }: ContentTopTabItemProps) {
  if (active) {
    return (
      <div 
        onClick={onClick}
        className={`bg-[rgba(0,0,0,0.8)] content-stretch flex items-center overflow-clip px-[48px] py-[18px] relative rounded-[100px] shrink-0 cursor-pointer ${className}`} 
        data-name="State=Active"
      >
        <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[28px] text-white whitespace-nowrap">
          {label}
        </p>
      </div>
    );
  }

  return (
    <div 
      onClick={onClick}
      className={`content-stretch flex items-center overflow-clip px-[24px] py-[18px] relative rounded-[100px] shrink-0 cursor-pointer hover:bg-[rgba(0,0,0,0.05)] transition-colors ${className}`} 
      data-name="State=Default"
    >
      <p className="font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[28px] text-[#444c5c] whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}
