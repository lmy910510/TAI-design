import React, { ReactNode } from 'react';

export type DialogType = "feedback" | "confirm";
export type DialogSize = "small" | "large";

export interface DialogComponentProps {
  /** 弹窗类型 */
  type?: DialogType;
  /** 弹窗尺寸 */
  size?: DialogSize;
  /** 标题 */
  title?: string;
  /** 内容 */
  content?: ReactNode;
  /** 主要操作按钮文本 */
  primaryButtonText?: string;
  /** 次要操作按钮文本（仅确认类显示） */
  secondaryButtonText?: string;
  /** 主要操作点击事件 */
  onPrimaryClick?: () => void;
  /** 次要操作点击事件 */
  onSecondaryClick?: () => void;
  /** 是否显示（用于控制蒙层） */
  isOpen?: boolean;
  /** 自定义类名 */
  className?: string;
}

/**
 * 弹窗组件 (Dialog)
 * 属于模态弹窗的一种，当需要告知用户关键或者警示性信息并强制用户必须回应时使用
 * 这是一种强阻断模态组件
 * 
 * 设计规范：
 * - 主标题：最大支持2行，不允许超长文本
 * - 内容：支持长文本，最多显示3行；作为副标题时最多1行
 * - 主要操作：延续主标题动词，背景rgba(0,0,0,0.92)
 * - 次要操作：不会产生实质改变结果，默认"取消"，背景rgba(0,0,0,0.06)
 * - 蒙层颜色通常使用黑色的 24%-30% 透明度
 */
export function DialogComponent({
  type = "confirm",
  size = "small",
  title = "标题",
  content,
  primaryButtonText = "主要操作",
  secondaryButtonText = "次要操作",
  onPrimaryClick,
  onSecondaryClick,
  isOpen = true,
  className = "",
}: DialogComponentProps) {
  if (!isOpen) return null;

  return (
    <div 
      className={`relative ${
        size === "large" ? "w-[948px] max-w-full" : "w-[660px] max-w-full"
      } bg-white rounded-[42px] overflow-hidden shadow-2xl ${className}`}
    >
      <div 
        className={`${
          size === "large" 
            ? "pt-[60px] pb-[48px] px-[42px]" 
            : "py-[48px] px-[30px]"
        } flex flex-col items-center gap-[48px]`}
      >
        
        {/* 文本区域 */}
        <div 
          className={`flex flex-col items-center justify-center gap-[24px] w-full ${
            size === "large" ? "" : "max-w-[600px]"
          }`}
        >
          <h3 className="font-['Noto_Sans_S_Chinese:Medium',sans-serif] text-[36px] leading-[36px] text-[rgba(0,0,0,0.92)] text-center w-full m-0">
            {title}
          </h3>
          {content && (
            <div 
              className={`font-['Noto_Sans_S_Chinese:Regular',sans-serif] text-[28px] leading-[42px] text-[rgba(0,0,0,0.84)] w-full ${
                size === "large" ? "" : "text-center"
              }`}
            >
              {content}
            </div>
          )}
        </div>

        {/* 操作按钮区域 */}
        <div className="flex gap-[24px] items-start w-full justify-center">
          <button 
            onClick={onPrimaryClick}
            className="bg-[rgba(0,0,0,0.92)] text-white font-['Noto_Sans_S_Chinese:Medium',sans-serif] text-[32px] leading-[32px] h-[84px] rounded-[42px] px-[42px] flex items-center justify-center transition-opacity hover:opacity-80 active:opacity-60 flex-1"
          >
            {primaryButtonText}
          </button>
          
          {type === "confirm" && (
            <button 
              onClick={onSecondaryClick}
              className="bg-[rgba(0,0,0,0.06)] text-[rgba(0,0,0,0.92)] font-['Noto_Sans_S_Chinese:Medium',sans-serif] text-[32px] leading-[32px] h-[84px] rounded-[42px] px-[42px] flex items-center justify-center transition-opacity hover:bg-[rgba(0,0,0,0.1)] active:bg-[rgba(0,0,0,0.15)] flex-1"
            >
              {secondaryButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}