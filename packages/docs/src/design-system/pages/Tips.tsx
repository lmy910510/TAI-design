import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  Button,
  Card,
  Checkbox,
  Divider,
  RADIUS,
  SPACING,
  Tips as TaiTips,
  getTokens,
} from "@tai-design/components";
import { DocPageHeader, DocTokenTable } from "../DocComponents";

export function Tips() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const tokens = getTokens(isDark);
  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
    setVisible(!nextChecked);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"], paddingBottom: SPACING["6"] * 2 }}>
      <DocPageHeader category="Components / 组件" title="提示 Tips" description="用于对当前页面的某个目标元素进行引导或说明，统一为中性气泡样式，解决原来页面规范互相冲突的问题。" />

      <Card variant="white" isDark={isDark}>
        <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"] }}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>实时预览</h2>
            <div
              style={{
                position: "relative",
                minHeight: 320,
                borderRadius: 30,
                border: `1px dashed ${tokens.borderColor.level2}`,
                backgroundColor: tokens.bgColor.container,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: SPACING["4"] }}>
                {visible ? (
                  <div style={{ position: "absolute", bottom: 96, left: "50%", transform: "translateX(-50%)" }}>
                    <TaiTips isDark={isDark} placement="top" onClose={() => setVisible(false)}>
                      请先勾选以下协议
                    </TaiTips>
                  </div>
                ) : null}

                <Checkbox
                  isDark={isDark}
                  checked={checked}
                  onChange={handleChange}
                  label="我已阅读并同意服务协议"
                />

                <Button isDark={isDark} size="small" variant="secondary" onClick={() => setVisible(true)}>
                  重新展示提示
                </Button>
              </div>
            </div>
          </div>

          <Divider isDark={isDark} />

          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>规范建议</h2>
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
              <li>提示要贴近目标元素，不承担全局系统通知职责。</li>
              <li>文案尽量短句、直接，避免把规则说明写成大段段落。</li>
              <li>关闭后不应频繁重复打扰；只有必要引导场景才再次出现。</li>
            </ul>
          </div>
          <Divider isDark={isDark} />

          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>🎨 Token 使用清单</h2>
            <DocTokenTable
              rows={[
                { part: "气泡背景", compToken: "tokens.tips.bg", pubToken: "bgColor.container", desc: "Tips 气泡容器背景", color: tokens.tips.bg },
                { part: "文字", compToken: "tokens.tips.text", pubToken: "textColor.primary", desc: "Tips 提示文字颜色", color: tokens.tips.text },
                { part: "边框", compToken: "tokens.tips.border", pubToken: "borderColor.level2", desc: "Tips 气泡描边", color: tokens.tips.border },
              ]}
              note={<>
                <strong>排版 Token：</strong>Tips 文字行高使用 <code>tokens.typography.body.primary.lineHeight</code> (1.4)。
                <br />
                <strong>布局常量：</strong>圆角 <code>RADIUS["2xl"]</code> (30px) / <code>RADIUS.xl</code> (24px)，阴影 <code>SHADOW.xl</code>，内边距 <code>SPACING["3"]</code> (18px) / <code>SPACING["4"]</code> (24px)。
              </>}
            />
          </div>
          <Divider isDark={isDark} />

          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>颜色规范</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: SPACING["4"] }}>
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
                  <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.tips.bg, marginBottom: SPACING["2"], border: `1px solid ${tokens.borderColor.level2}` }} />
                  <div style={{ fontFamily: "monospace", color: tokens.textColor.primary }}>{tokens.tips.bg}</div>
                  <div>Tips 背景（<code>bgColor.container</code>）</div>
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
                  <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.tips.text, marginBottom: SPACING["2"] }} />
                  <div style={{ fontFamily: "monospace", color: tokens.textColor.primary }}>{tokens.tips.text}</div>
                  <div>Tips 文字（<code>textColor.primary</code>）</div>
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
                <h3 style={{ margin: 0, marginBottom: SPACING["2"], fontSize: 24, fontWeight: 600, color: tokens.textColor.primary }}>边框</h3>
                <div style={{ fontSize: 20, color: tokens.textColor.secondary }}>
                  <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.tips.border, marginBottom: SPACING["2"] }} />
                  <div style={{ fontFamily: "monospace", color: tokens.textColor.primary }}>{tokens.tips.border}</div>
                  <div>Tips 边框（<code>borderColor.level2</code>）</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
