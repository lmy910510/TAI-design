import { HTMLAttributes } from "react";

export type AudioPlayerVariant = "full" | "mini" | "list-item";

export interface AudioPlayerProps extends HTMLAttributes<HTMLDivElement> {
  /** 展示变体 */
  variant?: AudioPlayerVariant;
  /** 标题 */
  title: string;
  /** 副标题 */
  subtitle?: string;
  /** 封面图 */
  coverSrc?: string;
  /** 封面 alt */
  coverAlt?: string;
  /** 当前时间 */
  currentTime?: string;
  /** 总时长 */
  duration?: string;
  /** 进度 0-100 */
  progress?: number;
  /** 是否处于播放态 */
  playing?: boolean;
  /** 是否显示上一首/下一首 */
  showTransportControls?: boolean;
  /** 深色模式 */
  isDark?: boolean;
  /** 上一首回调 */
  onPreviousClick?: () => void;
  /** 播放/暂停回调 */
  onPlayPauseClick?: () => void;
  /** 下一首回调 */
  onNextClick?: () => void;
}
