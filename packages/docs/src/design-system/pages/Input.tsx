import type { CSSProperties } from "react";
import { useState } from "react";
import { Input as TaiInput, RADIUS, SPACING, useTheme } from "@tai-design/components";

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
  const { colors, isDark } = useTheme();
  const [inputType, setInputType] = useState<InputType>("base");
  const [demoState, setDemoState] = useState<InputState>("interactive");
  const [baseValue, setBaseValue] = useState("");
  const [plateValue, setPlateValue] = useState("");

  const chipStyle: CSSProperties = {
    display: "inline-block",
    padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`,
    marginBottom: SPACING["3"],
    borderRadius: 999,
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.secondary,
    color: colors.text.secondary,
    fontSize: 14,
  };

  const panelStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.elevated,
  };

  const previewSurfaceStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.secondary,
  };

  const guidePanelStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.brand}`,
    background: `linear-gradient(to right, ${colors.bg.brandSubtle}, ${colors.bg.secondary})`,
  };

  const getToggleStyle = (active: boolean): CSSProperties => ({
    padding: `${SPACING["2"]}px ${SPACING["4"]}px`,
    borderRadius: RADIUS.xl,
    border: `1px solid ${active ? colors.button.primary.border : colors.border.subtle}`,
    backgroundColor: active ? colors.button.primary.bg : colors.bg.secondary,
    color: active ? colors.button.primary.text : colors.text.secondary,
    fontSize: 14,
    fontWeight: 600,
    transition: "all 150ms ease",
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
    <div className="pb-24">
      <div className="mb-12">
        <div style={chipStyle}>Components / 组件</div>
        <h1 className="text-4xl font-bold mb-4">输入框 Input</h1>
        <p className="text-lg" style={{ color: colors.text.secondary }}>
          用于承载用户信息录入的文本框，支持基础文本和特殊格式（如车牌号）的输入，并直接展示组件包中的真实 token 行为。
        </p>
      </div>

      <div className="flex flex-col gap-8 w-full">
        <div>
          <h2 className="text-2xl font-bold mb-4">组件预览</h2>
          <div style={panelStyle}>
            <div style={previewSurfaceStyle}>
              <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"], maxWidth: 720, margin: "0 auto" }}>
                <div>
                  <p className="text-2xl font-semibold" style={{ color: colors.text.primary }}>
                    {currentTitle}
                  </p>
                  <p className="text-sm mt-2" style={{ color: colors.text.secondary }}>
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

                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: SPACING["4"] }}>
                  <div style={{ padding: SPACING["4"], borderRadius: RADIUS.xl, backgroundColor: colors.bg.elevated, border: `1px solid ${colors.border.subtle}` }}>
                    <p className="text-sm font-semibold mb-2" style={{ color: colors.text.primary }}>
                      组件行为
                    </p>
                    <ul className="space-y-2 text-sm" style={{ color: colors.text.secondary }}>
                      <li>• 聚焦态使用 `colors.input.ring` 绘制 inset 轮廓</li>
                      <li>• 输入文字使用 `colors.input.text`</li>
                      <li>• 清空按钮使用 `colors.input.clearIcon`</li>
                    </ul>
                  </div>
                  <div style={{ padding: SPACING["4"], borderRadius: RADIUS.xl, backgroundColor: colors.bg.elevated, border: `1px solid ${colors.border.subtle}` }}>
                    <p className="text-sm font-semibold mb-2" style={{ color: colors.text.primary }}>
                      当前设置
                    </p>
                    <ul className="space-y-2 text-sm" style={{ color: colors.text.secondary }}>
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

        <div>
          <h2 className="text-2xl font-bold mb-4">属性配置</h2>
          <div style={panelStyle}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: SPACING["6"] }}>
              <div>
                <h3 className="text-sm font-semibold mb-3" style={{ color: colors.text.secondary }}>
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
                <h3 className="text-sm font-semibold mb-3" style={{ color: colors.text.secondary }}>
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

        <div style={guidePanelStyle}>
          <h3 className="text-lg font-semibold mb-3">📐 设计规范</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: SPACING["4"] }}>
            <div className="text-sm" style={{ color: colors.text.secondary }}>
              <p className="mb-2"><strong>尺寸体系：</strong></p>
              <ul className="space-y-1 text-xs">
                <li>• 高度为 84px，符合 6px 栅格</li>
                <li>• 左右内边距 24px，圆角 24px</li>
                <li>• 文本字号 32px，适配车机远距阅读</li>
              </ul>
            </div>
            <div className="text-sm" style={{ color: colors.text.secondary }}>
              <p className="mb-2"><strong>状态反馈：</strong></p>
              <ul className="space-y-1 text-xs">
                <li>• 页面不再手写浅深色映射，直接复用组件 token</li>
                <li>• 默认、输入、完成三种静态态与真实交互模式统一展示</li>
                <li>• 特殊输入类型通过同一组件能力扩展，不额外维护页面级色板</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">颜色规范</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: SPACING["4"] }}>
            <div style={panelStyle}>
              <h3 className="text-lg font-semibold mb-4">背景</h3>
              <div className="text-sm" style={{ color: colors.text.secondary }}>
                <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: colors.input.bg, marginBottom: SPACING["2"] }} />
                <div className="font-mono" style={{ color: colors.text.primary }}>{colors.input.bg}</div>
                <div>输入区域背景（`colors.input.bg`）</div>
              </div>
            </div>
            <div style={panelStyle}>
              <h3 className="text-lg font-semibold mb-4">焦点环</h3>
              <div className="text-sm" style={{ color: colors.text.secondary }}>
                <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: colors.input.ring, marginBottom: SPACING["2"] }} />
                <div className="font-mono" style={{ color: colors.text.primary }}>{colors.input.ring}</div>
                <div>聚焦态描边（`colors.input.ring`）</div>
              </div>
            </div>
            <div style={panelStyle}>
              <h3 className="text-lg font-semibold mb-4">清空按钮</h3>
              <div className="text-sm" style={{ color: colors.text.secondary }}>
                <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: colors.input.clearIcon, marginBottom: SPACING["2"] }} />
                <div className="font-mono" style={{ color: colors.text.primary }}>{colors.input.clearIcon}</div>
                <div>清空按钮底色（`colors.input.clearIcon`）</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
