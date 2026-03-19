import { ComponentProps, ReactNode } from "react";
import { Tips } from "@tai-design/components";

export interface TipsComponentProps
  extends Omit<ComponentProps<typeof Tips>, "children"> {
  children?: ReactNode;
}

export function TipsComponent({
  visible = true,
  children = "请先完成当前操作",
  ...restProps
}: TipsComponentProps) {
  return (
    <Tips visible={visible} {...restProps}>
      {children}
    </Tips>
  );
}
