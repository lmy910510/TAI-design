import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { RADIUS } from "../tokens";

export type ImageRadius = keyof typeof RADIUS | "full";

export interface ImageProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /** 图片地址 */
  src?: string;
  /** 无障碍描述 */
  alt?: string;
  /** 容器宽度 */
  width?: number | string;
  /** 容器高度 */
  height?: number | string;
  /** 宽高比，例如 16 / 9 */
  aspectRatio?: number | string;
  /** 圆角 token */
  radius?: ImageRadius;
  /** 填充模式 */
  fit?: CSSProperties["objectFit"];
  /** 自定义占位内容 */
  placeholder?: ReactNode;
  /** 默认占位文案 */
  placeholderLabel?: string;
  /** 覆盖层内容 */
  overlay?: ReactNode;
  /** 是否显示边框 */
  showBorder?: boolean;
  /** 深色模式 */
  isDark?: boolean;
  /** 图片样式 */
  imgStyle?: CSSProperties;
}
