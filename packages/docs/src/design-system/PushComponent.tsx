import { ComponentProps, ReactNode } from "react";
import { Push } from "@tai-design/components";

export interface PushComponentProps
  extends Omit<ComponentProps<typeof Push>, "title" | "description"> {
  title?: ReactNode;
  children?: ReactNode;
}

export function PushComponent({
  visible = true,
  title = "推送标题",
  children = "这是推送的详细内容，用于通知用户重要信息。",
  ...restProps
}: PushComponentProps) {
  return (
    <Push visible={visible} title={title} description={children} {...restProps} />
  );
}
