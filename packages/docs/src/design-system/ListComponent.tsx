import { ReactNode, HTMLAttributes } from "react";
import {
  List as TaiList,
  ListItem as TaiListItem,
} from "@tai-design/components";

export interface ListComponentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  bordered?: boolean;
  divided?: boolean;
  className?: string;
}

/**
 * 列表容器 (List Wrapper)
 * 用于垂直排列列表项。
 */
export function ListComponent({
  children,
  bordered = false,
  divided = true,
  className = "",
  ...props
}: ListComponentProps) {
  return (
    <TaiList bordered={bordered} divided={divided} className={className} {...props}>
      {children}
    </TaiList>
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
 * 基于 6px 栅格，单行最小高度 96px，双行最小高度 120px。
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
  return (
    <TaiListItem
      title={title}
      description={description}
      prefixIcon={prefixIcon}
      suffixContent={suffixContent}
      showArrow={showArrow}
      onClick={onClick ? () => onClick() : undefined}
      className={className}
      {...props}
    />
  );
}
