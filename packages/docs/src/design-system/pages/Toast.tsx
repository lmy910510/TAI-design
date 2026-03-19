import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  Button,
  Card,
  Divider,
  SPACING,
  Toast as TaiToast,
  createColors,
} from "@tai-design/components";

type DemoToastType = "text" | "success" | "error" | "info";

export function Toast() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const colors = createColors(isDark);
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState<DemoToastType>("text");
  const [message, setMessage] = useState("已复制到剪贴板");

  useEffect(() => {
    if (!visible) {
      return;
    }

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 3200);

    return () => window.clearTimeout(timer);
  }, [visible, type]);

  const trigger = (nextType: DemoToastType, nextMessage: string) => {
    setType(nextType);
    setMessage(nextMessage);
    setVisible(false);
    window.setTimeout(() => setVisible(true), 30);
  };

  const tagStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 36,
    paddingLeft: SPACING["2"],
    paddingRight: SPACING["2"],
    borderRadius: 24,
    backgroundColor: colors.bg.secondary,
    border: `1px solid ${colors.border.default}`,
    color: colors.text.secondary,
    fontSize: 18,
  } as const;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"], paddingBottom: SPACING["6"] * 2 }}>
      <TaiToast visible={visible} type={type} isDark={isDark} onClose={() => setVisible(false)}>
        {message}
      </TaiToast>

      <div style={{ display: "flex", flexDirection: "column", gap: SPACING["3"] }}>
        <div style={tagStyle}>Components / 组件</div>
        <h1 style={{ margin: 0, fontSize: 42, lineHeight: 1.2, color: colors.text.primary }}>轻提示 Toast</h1>
        <p style={{ margin: 0, fontSize: 24, lineHeight: 1.6, color: colors.text.tertiary }}>
          轻量反馈统一由真实 `Toast` 组件承载，支持语义图标、自动消失和主题切换。
        </p>
      </div>

      <Card variant="white" isDark={isDark}>
        <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"] }}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, fontSize: 30, color: colors.text.primary }}>实时触发</h2>
            <div style={{ display: "flex", gap: SPACING["3"], flexWrap: "wrap" }}>
              <Button isDark={isDark} size="small" onClick={() => trigger("text", "已复制到剪贴板")}>
                纯文字提示
              </Button>
              <Button isDark={isDark} size="small" variant="secondary" onClick={() => trigger("success", "添加成功")}>
                成功提示
              </Button>
              <Button isDark={isDark} size="small" variant="danger" onClick={() => trigger("error", "保存失败，请稍后重试")}>
                失败提示
              </Button>
              <Button isDark={isDark} size="small" variant="ghost" onClick={() => trigger("info", "导航路线已更新")}>
                信息提示
              </Button>
            </div>
          </div>

          <Divider isDark={isDark} />

          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, fontSize: 30, color: colors.text.primary }}>交互规范</h2>
            <ul
              style={{
                margin: 0,
                paddingLeft: SPACING["4"],
                display: "flex",
                flexDirection: "column",
                gap: SPACING["2"],
                color: colors.text.secondary,
                fontSize: 24,
                lineHeight: 1.6,
              }}
            >
              <li>默认展示在页面顶部中心，建议 2.5s - 3.5s 自动消失。</li>
              <li>普通反馈优先纯文字；明确结果再增加语义图标。</li>
              <li>不要把 Toast 当作阻断型弹窗使用，它只承载轻量反馈。</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
