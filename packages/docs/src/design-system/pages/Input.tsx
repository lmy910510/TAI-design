import type { CSSProperties } from "react";
import { useState } from "react";
import { DocPageHeader } from "../DocComponents";
import {
  Input as TaiInput,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  RADIUS,
  SPACING,
  useTheme,
} from "@tai-design/components";

type InputState = "interactive" | "default" | "typing" | "filled";
type InputType = "base" | "licensePlate";

const TYPE_OPTIONS: Array<{ value: InputType; label: string }> = [
  { value: "base", label: "基础输入框" },
  { value: "licensePlate", label: "车牌号输入框" },
];

const STATE_OPTIONS: Array<{ value: InputState; label: string }> = [
  { value: "interactive", label: "✨ 可交互模式" },
  { value: "default", label: "默认态" },
  { value: "typing", label: "输入态" },
  { value: "filled", label: "已输入态" },
];

export function Input() {
  const { tokens, isDark } = useTheme();
  const [inputType, setInputType] = useState<InputType>("base");
  const [demoState, setDemoState] = useState<InputState>("interactive");
  const [baseValue, setBaseValue] = useState("");
  const [plateValue, setPlateValue] = useState("");

  const panelStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.elevated,
  };

  const previewSurfaceStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.container,
  };

  const guidePanelStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.brand}`,
    background: `linear-gradient(to right, ${tokens.bgColor.brandLight}, ${tokens.bgColor.container})`,
  };

  const getToggleStyle = (active: boolean): CSSProperties => ({
    padding: `${SPACING["2"]}px ${SPACING["4"]}px`,
    borderRadius: RADIUS.xl,
    border: `1px solid ${active ? tokens.textColor.primary : tokens.borderColor.level1}`,
    backgroundColor: active ? tokens.textColor.primary : tokens.bgColor.container,
    color: active ? tokens.textColor.anti : tokens.textColor.secondary,
    fontSize: FONT_SIZE.sm,
    fontWeight: FONT_WEIGHT.semibold,
    lineHeight: LINE_HEIGHT.none,
    transition: "all 150ms ease",
    cursor: "pointer",
  });

  const getStateValue = () => {
    if (inputType === "base") {
      if (demoState === "interactive") return baseValue;
      if (demoState === "default") return "";
      if (demoState === "typing") return "wenjinglu@tence";
      return "wenjinglu@tencent.com";
    }

    if (demoState === "interactive") return plateValue;
    if (demoState === "default") return "";
    if (demoState === "typing") return "京A123";
    return "京A12345新";
  };

  const handleValueChange = (nextValue: string) => {
    if (inputType === "base") {
      setBaseValue(nextValue);
      return;
    }
    setPlateValue(nextValue.toUpperCase().replace(/[^A-Z0-9\u4e00-\u9fa5]/g, "").slice(0, 8));
  };

  const currentValue = getStateValue();
  const currentTitle = inputType === "base" ? "基础输入框" : "特殊输入框 - 车牌号";
  const currentDescription =
    demoState === "interactive"
      ? "当前为真实交互模式，可直接输入、清空并观察组件状态反馈。"
      : demoState === "default"
        ? "展示空输入框与占位符样式。"
        : demoState === "typing"
          ? "展示正在输入中的中间状态。"
          : "展示已经录入完成后的稳定状态。";

  return (
    <div style={{ paddingBottom: SPACING["4"] * 4 }}>
      {/* ── 页头 ── */}
      <DocPageHeader
        category="Components / 组件"
        title="输入框 Input"
        description="用于承载用户信息录入的文本框，支持基础文本和特殊格式（如车牌号）的输入，并直接展示组件包中的真实 token 行为。"
      />

      <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"], width: "100%" }}>
        {/* ── 组件预览 ── */}
        <div>
          <h2 style={{ ...tokens.typography.title.section, color: tokens.textColor.primary, marginBottom: SPACING["3"] }}>
            组件预览
          </h2>
          <div style={panelStyle}>
            <div style={previewSurfaceStyle}>
              <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"], maxWidth: 720, margin: "0 auto" }}>
                <div>
                  <p style={{ fontSize: FONT_SIZE["2xl"], fontWeight: FONT_WEIGHT.semibold, lineHeight: LINE_HEIGHT.normal, color: tokens.textColor.primary }}>
                    {currentTitle}
                  </p>
                  <p style={{ fontSize: FONT_SIZE.sm, fontWeight: FONT_WEIGHT.regular, lineHeight: LINE_HEIGHT.relaxed, color: tokens.textColor.secondary, marginTop: SPACING["2"] / 2 }}>
                    {currentDescription}
                  </p>
                </div>

                <TaiInput
                  type={inputType === "base" ? "text" : "licensePlate"}
                  value={currentValue}
                  onChange={handleValueChange}
                  placeholder={inputType === "base" ? "请输入邮箱地址" : "请输入车牌号"}
                  clearable
                  readOnly={demoState !== "interactive"}
                  isDark={isDark}
                  maxLength={inputType === "licensePlate" ? 8 : undefined}
                  style={{ width: "100%" }}
                />

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: SPACING["4"] }}>
                  <div style={{ padding: SPACING["4"], borderRadius: RADIUS.xl, backgroundColor: tokens.bgColor.elevated, border: `1px solid ${tokens.borderColor.level1}` }}>
                    <p style={{ fontSize: FONT_SIZE.sm, fontWeight: FONT_WEIGHT.semibold, lineHeight: LINE_HEIGHT.none, color: tokens.textColor.primary, marginBottom: SPACING["2"] }}>
                      组件行为
                    </p>
                    <ul style={{ fontSize: FONT_SIZE.sm, fontWeight: FONT_WEIGHT.regular, lineHeight: LINE_HEIGHT.relaxed, color: tokens.textColor.secondary, display: "flex", flexDirection: "column", gap: SPACING["2"] / 2 }}>
                      <li>• 聚焦态使用 `input.ring`（→ borderColor.focus）</li>
                      <li>• 输入文字使用 `input.text`（→ textColor.primary）</li>
                      <li>• 清空按钮使用 `input.clearIcon`（→ borderColor.level2）</li>
                    </ul>
                  </div>
                  <div style={{ padding: SPACING["4"], borderRadius: RADIUS.xl, backgroundColor: tokens.bgColor.elevated, border: `1px solid ${tokens.borderColor.level1}` }}>
                    <p style={{ fontSize: FONT_SIZE.sm, fontWeight: FONT_WEIGHT.semibold, lineHeight: LINE_HEIGHT.none, color: tokens.textColor.primary, marginBottom: SPACING["2"] }}>
                      当前设置
                    </p>
                    <ul style={{ fontSize: FONT_SIZE.sm, fontWeight: FONT_WEIGHT.regular, lineHeight: LINE_HEIGHT.relaxed, color: tokens.textColor.secondary, display: "flex", flexDirection: "column", gap: SPACING["2"] / 2 }}>
                      <li>• 类型：{inputType === "base" ? "文本" : "车牌号"}</li>
                      <li>• 状态：{STATE_OPTIONS.find((item) => item.value === demoState)?.label}</li>
                      <li>• 主题：{isDark ? "深色" : "浅色"}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 属性配置 ── */}
        <div>
          <h2 style={{ ...tokens.typography.title.section, color: tokens.textColor.primary, marginBottom: SPACING["3"] }}>
            属性配置
          </h2>
          <div style={panelStyle}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: SPACING["6"] }}>
              <div>
                <h3 style={{ fontSize: FONT_SIZE.sm, fontWeight: FONT_WEIGHT.semibold, lineHeight: LINE_HEIGHT.none, color: tokens.textColor.secondary, marginBottom: SPACING["2"] }}>
                  输入框类型
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: SPACING["2"] }}>
                  {TYPE_OPTIONS.map((option) => (
                    <button key={option.value} type="button" style={getToggleStyle(inputType === option.value)} onClick={() => setInputType(option.value)}>
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: FONT_SIZE.sm, fontWeight: FONT_WEIGHT.semibold, lineHeight: LINE_HEIGHT.none, color: tokens.textColor.secondary, marginBottom: SPACING["2"] }}>
                  演示状态
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: SPACING["2"] }}>
                  {STATE_OPTIONS.map((option) => (
                    <button key={option.value} type="button" style={getToggleStyle(demoState === option.value)} onClick={() => setDemoState(option.value)}>
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 设计规范 ── */}
        <div style={guidePanelStyle}>
          <h3 style={{ fontSize: FONT_SIZE.xl, fontWeight: FONT_WEIGHT.semibold, lineHeight: LINE_HEIGHT.relaxed, marginBottom: SPACING["2"] }}>
            📐 设计规范
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: SPACING["4"] }}>
            <div style={{ fontSize: FONT_SIZE.sm, fontWeight: FONT_WEIGHT.regular, lineHeight: LINE_HEIGHT.relaxed, color: tokens.textColor.secondary }}>
              <p style={{ marginBottom: SPACING["2"], fontWeight: FONT_WEIGHT.semibold, color: tokens.textColor.primary }}>
                尺寸体系：
              </p>
              <ul style={{ fontSize: FONT_SIZE.xs, lineHeight: LINE_HEIGHT.relaxed, display: "flex", flexDirection: "column", gap: SPACING["2"] / 2 }}>
                <li>• 高度为 84px，符合 6px 栅格</li>
                <li>• 左右内边距 24px，圆角 24px</li>
                <li>• 文本字号 FONT_SIZE["3xl"] (32px)</li>
              </ul>
            </div>
            <div style={{ fontSize: FONT_SIZE.sm, fontWeight: FONT_WEIGHT.regular, lineHeight: LINE_HEIGHT.relaxed, color: tokens.textColor.secondary }}>
              <p style={{ marginBottom: SPACING["2"], fontWeight: FONT_WEIGHT.semibold, color: tokens.textColor.primary }}>
                状态反馈：
              </p>
              <ul style={{ fontSize: FONT_SIZE.xs, lineHeight: LINE_HEIGHT.relaxed, display: "flex", flexDirection: "column", gap: SPACING["2"] / 2 }}>
                <li>• 直接复用组件内置 token，无页面级色板</li>
                <li>• 默认、输入、完成三种静态态与交互模式统一</li>
                <li>• 特殊输入类型通过组件能力扩展</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── 🎨 Token 使用清单 ── */}
        <div>
          <h2 style={{ ...tokens.typography.title.section, color: tokens.textColor.primary, marginBottom: SPACING["3"] }}>
            🎨 Token 使用清单
          </h2>
          <div style={panelStyle}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: FONT_SIZE.sm }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${tokens.borderColor.level1}` }}>
                    {["部位", "公开语义 Token", "用途说明"].map((h) => (
                      <th key={h} style={{ textAlign: "left", padding: `${SPACING["2"]}px ${SPACING["3"]}px`, color: tokens.textColor.secondary, fontWeight: FONT_WEIGHT.semibold }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {([
                    { part: "输入框背景", pubToken: "bgColor.elevated", desc: "输入框容器背景", color: tokens.bgColor.elevated },
                    { part: "输入文字", pubToken: "textColor.primary", desc: "用户输入的文字颜色", color: tokens.textColor.primary },
                    { part: "占位符文字", pubToken: "textColor.placeholder", desc: "未输入时的占位提示文字", color: tokens.textColor.placeholder },
                    { part: "聚焦边框", pubToken: "borderColor.focus", desc: "输入框获得焦点时的边框", color: tokens.borderColor.focus },
                    { part: "清除按钮图标", pubToken: "borderColor.level2", desc: "清空按钮图标颜色", color: tokens.borderColor.level2 },
                    { part: "禁用态文字", pubToken: "textColor.disabled", desc: "禁用输入框文字", color: tokens.textColor.disabled },
                    { part: "辅助说明文字", pubToken: "textColor.tertiary", desc: "输入框下方辅助说明", color: tokens.textColor.tertiary },
                  ] as const).map((row) => (
                    <tr key={row.part} style={{ borderBottom: `1px solid ${tokens.borderColor.level1}` }}>
                      <td style={{ padding: `${SPACING["2"]}px ${SPACING["3"]}px`, fontWeight: FONT_WEIGHT.medium, color: tokens.textColor.primary }}>{row.part}</td>
                      <td style={{ padding: `${SPACING["2"]}px ${SPACING["3"]}px` }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div style={{ width: 20, height: 20, borderRadius: 4, backgroundColor: row.color, border: `1px solid ${tokens.borderColor.level1}`, flexShrink: 0 }} />
                          <code style={{ fontSize: FONT_SIZE.xs, color: tokens.textColor.link }}>{row.pubToken}</code>
                        </div>
                      </td>
                      <td style={{ padding: `${SPACING["2"]}px ${SPACING["3"]}px`, color: tokens.textColor.tertiary }}>{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: SPACING["4"], padding: SPACING["3"], borderRadius: RADIUS.xl, backgroundColor: tokens.bgColor.container, border: `1px solid ${tokens.borderColor.level1}` }}>
              <p style={{ fontSize: FONT_SIZE.xs, color: tokens.textColor.secondary, lineHeight: LINE_HEIGHT.relaxed }}>
                <strong>排版 Token：</strong>输入文字使用 <code>tokens.typography.label.input</code> (32px/400/1.4)。
                <br />
                <strong>固定色：</strong>清除按钮背景使用 STATIC.transparent，清除 ×-icon 笔画使用 STATIC.white（内部实现细节）。
              </p>
            </div>
          </div>
        </div>

        {/* ── 颜色规范 ── */}
        <div>
          <h2 style={{ ...tokens.typography.title.section, color: tokens.textColor.primary, marginBottom: SPACING["3"] }}>
            颜色规范
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: SPACING["4"] }}>
            {[
              { title: "背景", color: tokens.bgColor.elevated, token: "bgColor.elevated" },
              { title: "焦点环", color: tokens.borderColor.focus, token: "borderColor.focus" },
              { title: "清空按钮", color: tokens.borderColor.level2, token: "borderColor.level2" },
            ].map((item) => (
              <div key={item.title} style={panelStyle}>
                <h3 style={{ fontSize: FONT_SIZE.xl, fontWeight: FONT_WEIGHT.semibold, lineHeight: LINE_HEIGHT.relaxed, marginBottom: SPACING["3"] }}>
                  {item.title}
                </h3>
                <div style={{ fontSize: FONT_SIZE.sm, fontWeight: FONT_WEIGHT.regular, lineHeight: LINE_HEIGHT.relaxed, color: tokens.textColor.secondary }}>
                  <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: item.color, marginBottom: SPACING["2"] }} />
                  <div style={{ fontFamily: "monospace", color: tokens.textColor.primary }}>{item.color}</div>
                  <div>{item.token}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
