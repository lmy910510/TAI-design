import { ReactNode, CSSProperties } from "react";

export interface TabItem {
  /** 唯一标识 */
  key: string;
  /** 标签标题 */
  label: ReactNode;
  /** 标签内容 */
  children?: ReactNode;
  /** 是否禁用 */
  disabled?: boolean;
  /** 图标 */
  icon?: ReactNode;
}

export type TabsVariant = "line" | "card" | "pill";
export type TabsSize = "large" | "medium" | "small";

export interface TabsProps {
  /** 标签项 */
  items: TabItem[];
  /** 当前激活的标签 key */
  activeKey?: string;
  /** 默认激活的标签 key */
  defaultActiveKey?: string;
  /** 切换标签回调 */
  onChange?: (key: string) => void;
  /** 变体样式 */
  variant?: TabsVariant;
  /** 尺寸 */
  size?: TabsSize;
  /** 是否全宽（均分） */
  fullWidth?: boolean;
  /** 是否显示内容区域 */
  showContent?: boolean;
  /** 强制指定主题模式 */
  isDark?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 标签栏样式 */
  tabBarStyle?: CSSProperties;
  /** 内容区域样式 */
  contentStyle?: CSSProperties;
}
