import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  Button,
  Card,
  Divider,
  RADIUS,
  SPACING,
  Toast as TaiToast,
  getTokens,
} from "@tai-design/components";
import { DocPageHeader, DocTokenTable } from "../DocComponents";

type DemoToastType = "text" | "success" | "error" | "info";

export function Toast() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const tokens = getTokens(isDark);
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

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"], paddingBottom: SPACING["6"] * 2 }}>
      <TaiToast visible={visible} type={type} isDark={isDark} onClose={() => setVisible(false)}>
        {message}
      </TaiToast>

      <DocPageHeader category="Components / 组件" title="轻提示 Toast" description="轻量反馈统一由真实 `Toast` 组件承载，支持语义图标、自动消失和主题切换。" />

      <Card variant="white" isDark={isDark}>
        <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"] }}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>实时触发</h2>
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
            <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>交互规范</h2>
            <ul
              style={{
                margin: 0,
                paddingLeft: SPACING["4"],
                display: "flex",
                flexDirection: "column",
                gap: SPACING["2"],
                color: tokens.textColor.secondary,
                fontSize: 24,
                lineHeight: 1.6,
              }}
            >
              <li>默认展示在页面顶部中心，建议 2.5s - 3.5s 自动消失。</li>
              <li>普通反馈优先纯文字；明确结果再增加语义图标。</li>
              <li>不要把 Toast 当作阻断型弹窗使用，它只承载轻量反馈。</li>
            </ul>
          </div>
          <Divider isDark={isDark} />

          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>🎨 Token 使用清单</h2>
            <DocTokenTable
              rows={[
                { part: "Toast 背景", compToken: "tokens.bgColor.secondaryContainer", pubToken: "bgColor.secondaryContainer", desc: "轻提示容器背景", color: tokens.bgColor.secondaryContainer },
                { part: "Toast 文字", compToken: "tokens.textColor.anti", pubToken: "textColor.anti", desc: "反色文字（深色背景上）", color: tokens.textColor.anti },
                { part: "成功图标", compToken: "tokens.functionalColor.success.main", pubToken: "functionalColor.success.main", desc: "成功语义图标", color: tokens.functionalColor.success.main },
                { part: "失败图标", compToken: "tokens.functionalColor.error.main", pubToken: "functionalColor.error.main", desc: "错误语义图标", color: tokens.functionalColor.error.main },
                { part: "信息图标", compToken: "tokens.functionalColor.info.main", pubToken: "functionalColor.info.main", desc: "信息语义图标", color: tokens.functionalColor.info.main },
              ]}
              note={<>
                <strong>排版 Token：</strong>Toast 文字使用 <code>tokens.typography.title.card</code> (32px/500/1.5) 的字重与行高。
                <br />
                <strong>布局常量：</strong>圆角 <code>RADIUS["2xl"]</code> (30px)，阴影 <code>SHADOW.xl</code>，内边距 <code>SPACING["4"]</code> (24px) / <code>SPACING["6"]</code> (36px)。
              </>}
            />
          </div>

          <Divider isDark={isDark} />

          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>颜色规范</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: SPACING["4"] }}>
              <div
                style={{
                  padding: SPACING["4"],
                  borderRadius: RADIUS["2xl"],
                  border: `1px solid ${tokens.borderColor.level2}`,
                  backgroundColor: tokens.bgColor.container,
                }}
              >
                <h3 style={{ margin: 0, marginBottom: SPACING["2"], fontSize: 24, fontWeight: 600, color: tokens.textColor.primary }}>背景</h3>
                <div style={{ fontSize: 20, color: tokens.textColor.secondary }}>
                  <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.bgColor.secondaryContainer, marginBottom: SPACING["2"] }} />
                  <div style={{ fontFamily: "monospace", color: tokens.textColor.primary }}>{tokens.bgColor.secondaryContainer}</div>
                  <div>Toast 背景（<code>bgColor.secondaryContainer</code>）</div>
                </div>
              </div>
              <div
                style={{
                  padding: SPACING["4"],
                  borderRadius: RADIUS["2xl"],
                  border: `1px solid ${tokens.borderColor.level2}`,
                  backgroundColor: tokens.bgColor.container,
                }}
              >
                <h3 style={{ margin: 0, marginBottom: SPACING["2"], fontSize: 24, fontWeight: 600, color: tokens.textColor.primary }}>文字</h3>
                <div style={{ fontSize: 20, color: tokens.textColor.secondary }}>
                  <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.textColor.anti, marginBottom: SPACING["2"], border: `1px solid ${tokens.borderColor.level2}` }} />
                  <div style={{ fontFamily: "monospace", color: tokens.textColor.primary }}>{tokens.textColor.anti}</div>
                  <div>Toast 文字（<code>textColor.anti</code>）</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
