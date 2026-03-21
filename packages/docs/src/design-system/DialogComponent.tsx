import React, { ReactNode } from "react";
import {
  Button,
  RADIUS,
  SHADOW,
  SPACING,
  useThemeOptional,
} from "@tai-design/components";

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

const DIALOG_WIDTH = {
  small: 660,
  large: 948,
} as const;

const CONTENT_PADDING = {
  small: { paddingBlock: 48, paddingInline: 30 },
  large: { paddingTop: 60, paddingBottom: 48, paddingInline: 42 },
} as const;

/**
 * 弹窗组件 (Dialog)
 * 文档站展示层保留 ReactNode 内容能力，但颜色、阴影与按钮全部来自组件包 token。
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
  const { tokens } = useThemeOptional();

  if (!isOpen) return null;

  const paddingConfig = CONTENT_PADDING[size];

  return (
    <div
      className={`relative overflow-hidden ${className}`.trim()}
      style={{
        width: "100%",
        maxWidth: DIALOG_WIDTH[size],
        backgroundColor: tokens.dialog.bg,
        borderRadius: RADIUS["4xl"],
        boxShadow: SHADOW.xl,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: SPACING["5"],
          paddingTop:
            "paddingTop" in paddingConfig ? paddingConfig.paddingTop : paddingConfig.paddingBlock,
          paddingBottom:
            "paddingBottom" in paddingConfig
              ? paddingConfig.paddingBottom
              : paddingConfig.paddingBlock,
          paddingLeft: paddingConfig.paddingInline,
          paddingRight: paddingConfig.paddingInline,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: SPACING["4"],
            width: "100%",
            maxWidth: size === "large" ? undefined : 600,
          }}
        >
          <h3
            style={{
              margin: 0,
              width: "100%",
              textAlign: "center",
              fontSize: 36,
              lineHeight: "36px",
              fontWeight: 600,
              color: tokens.dialog.title,
            }}
          >
            {title}
          </h3>

          {content ? (
            <div
              style={{
                width: "100%",
                textAlign: size === "large" ? "left" : "center",
                fontSize: 28,
                lineHeight: "42px",
                color: tokens.dialog.content,
              }}
            >
              {content}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            gap: SPACING["4"],
          }}
        >
          {type === "confirm" ? (
            <Button variant="secondary" fullWidth onClick={onSecondaryClick}>
              {secondaryButtonText}
            </Button>
          ) : null}
          <Button variant="primary" fullWidth onClick={onPrimaryClick}>
            {primaryButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
