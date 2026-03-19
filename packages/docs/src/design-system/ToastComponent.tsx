import { ComponentProps, ReactNode } from "react";
import { Toast } from "@tai-design/components";

export type ToastType = "text" | "success" | "error" | "info";

export interface ToastComponentProps
  extends Omit<ComponentProps<typeof Toast>, "type" | "children"> {
  type?: ToastType;
  children?: ReactNode;
}

export function ToastComponent({
  type = "text",
  visible = true,
  children = "轻提示文字内容",
  ...restProps
}: ToastComponentProps) {
  return (
    <Toast type={type} visible={visible} {...restProps}>
      {children}
    </Toast>
  );
}
