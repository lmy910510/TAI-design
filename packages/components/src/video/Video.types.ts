import { HTMLAttributes } from "react";

export type VideoVariant = "player" | "thumbnail" | "locked";

export interface VideoProps extends HTMLAttributes<HTMLDivElement> {
  /** 视频地址 */
  src?: string;
  /** 封面图 */
  posterSrc?: string;
  /** 封面描述 */
  posterAlt?: string;
  /** 组件变体 */
  variant?: VideoVariant;
  /** 播放进度 0-100 */
  progress?: number;
  /** 当前时间 */
  currentTime?: string;
  /** 总时长 */
  duration?: string;
  /** 是否显示播放按钮 */
  showPlayButton?: boolean;
  /** 是否锁定播放 */
  locked?: boolean;
  /** 锁定标题 */
  lockTitle?: string;
  /** 锁定说明 */
  lockDescription?: string;
  /** 宽高比 */
  aspectRatio?: number | string;
  /** 深色模式 */
  isDark?: boolean;
}
