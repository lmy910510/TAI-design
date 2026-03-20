import { useState, type CSSProperties } from "react";
import { RADIUS, useTheme } from "@tai-design/components";
import { SwitchComponent } from "../SwitchComponent";

const STATE_CONTENT = [
  {
    title: "关闭状态",
    checked: false,
    details: ["轨道使用关闭态 token", "滑块停靠在左侧", "适合表示功能未启用"],
  },
  {
    title: "开启状态",
    checked: true,
    details: ["轨道使用开启态 token", "滑块移动到右侧", "提供即时的切换反馈"],
  },
  {
    title: "禁用状态",
    checked: false,
    disabled: true,
    details: ["沿用组件本体禁用透明度", "鼠标状态为 not-allowed", "不可点击，仅用于只读说明"],
  },
] as const;

const USAGE_GROUPS = [
  {
    title: "✅ 适用场景",
    items: [
      "功能开关（如蓝牙、Wi‑Fi、自动驾驶）",
      "设置项启停（如夜间模式、语音播报）",
      "权限控制（如位置服务、摄像头）",
      "二元状态切换（开 / 关、是 / 否）",
    ],
  },
  {
    title: "❌ 不适用场景",
    items: [
      "多选项选择（应使用 Checkbox）",
      "需要确认的操作（应使用 Button）",
      "数值调节（应使用 Slider）",
      "复杂状态表达（应使用更明确的表单控件）",
    ],
  },
] as const;

export function Switch() {
  const { colors } = useTheme();
  const [demoSwitch, setDemoSwitch] = useState(false);
  const [controlledSwitch, setControlledSwitch] = useState(false);

  const chipStyle: CSSProperties = {
    display: "inline-block",
    padding: "6px 12px",
    marginBottom: 16,
    borderRadius: 999,
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.secondary,
    color: colors.text.secondary,
    fontSize: 14,
  };

  const panelStyle: CSSProperties = {
    padding: 24,
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.elevated,
  };

  const guidePanelStyle: CSSProperties = {
    padding: 24,
    marginBottom: 32,
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.brand}`,
    background: `linear-gradient(to right, ${colors.bg.brandSubtle}, ${colors.bg.secondary})`,
  };

  const codeBlockStyle: CSSProperties = {
    padding: 18,
    borderRadius: RADIUS.xl,
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.code,
    color: colors.text.primary,
    overflowX: "auto",
  };

  const tokenSwatchStyle = (backgroundColor: string, withBorder = false): CSSProperties => ({
    width: 48,
    height: 48,
    borderRadius: RADIUS.xl,
    backgroundColor,
    border: withBorder ? `2px solid ${colors.border.subtle}` : undefined,
  });

  return (
    <div>
      <div className="mb-8">
        <div style={chipStyle}>Components / 组件</div>
        <h1 className="text-4xl font-bold mb-4">开关</h1>
        <p className="text-lg" style={{ color: colors.text.secondary }}>
          用于控制功能启停状态的交互组件，提供清晰、直接的二元切换反馈。
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">实际效果</h2>
        <div style={{ ...panelStyle, padding: 48 }}>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <SwitchComponent checked={demoSwitch} onChange={setDemoSwitch} />
              <span className="text-sm" style={{ color: colors.text.secondary }}>
                {demoSwitch ? "开启" : "关闭"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">尺寸规格</h2>
        <div style={panelStyle}>
          <div className="flex items-start gap-8">
            <div className="flex-shrink-0 flex justify-center items-center w-48">
              <SwitchComponent checked onChange={() => {}} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4">标准尺寸</h3>
              <ul className="space-y-2 text-sm" style={{ color: colors.text.secondary }}>
                <li>• <strong>整体尺寸：</strong>90px × 54px（宽 15×6，高 9×6）</li>
                <li>• <strong>圆形滑块：</strong>40px × 40px</li>
                <li>• <strong>内边距：</strong>7px</li>
                <li>• <strong>圆角：</strong>完全圆角（border-radius: 50%）</li>
                <li>• <strong>栅格对齐：</strong>符合 6px 基准栅格</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">状态</h2>
        <div className="grid grid-cols-3 gap-6">
          {STATE_CONTENT.map((item) => (
            <div key={item.title} style={panelStyle}>
              <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
              <div className="flex justify-center mb-4 gap-4">
                {item.title === "禁用状态" ? (
                  <>
                    <SwitchComponent checked={false} onChange={() => {}} disabled />
                    <SwitchComponent checked onChange={() => {}} disabled />
                  </>
                ) : (
                  <SwitchComponent checked={item.checked} onChange={() => {}} disabled={item.disabled} />
                )}
              </div>
              <ul className="space-y-2 text-sm" style={{ color: colors.text.secondary }}>
                {item.details.map((detail) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">交互演示</h2>
        <div style={{ ...panelStyle, padding: 30 }}>
          <div className="space-y-6">
            <div className="flex items-center justify-between max-w-md mx-auto">
              <div>
                <p className="font-semibold mb-1" style={{ color: colors.text.primary }}>
                  蓝牙连接
                </p>
                <p className="text-sm" style={{ color: colors.text.secondary }}>
                  当前状态：{controlledSwitch ? "✅ 已开启" : "❌ 已关闭"}
                </p>
              </div>
              <SwitchComponent checked={controlledSwitch} onChange={setControlledSwitch} />
            </div>
          </div>
        </div>
      </div>

      <div style={guidePanelStyle}>
        <h3 className="text-lg font-semibold mb-3">📐 设计规范</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="text-sm" style={{ color: colors.text.secondary }}>
            <p className="mb-2"><strong>尺寸体系（6px 栅格）：</strong></p>
            <ul className="space-y-1 text-xs">
              <li>• <strong>整体：</strong>90×54px（宽 15×6，高 9×6）</li>
              <li>• <strong>滑块：</strong>40×40px</li>
              <li>• <strong>内边距：</strong>7px</li>
              <li>• <strong>圆角：</strong>完全圆角（border-radius: 50%）</li>
            </ul>
          </div>
          <div className="text-sm" style={{ color: colors.text.secondary }}>
            <p className="mb-2"><strong>交互动效：</strong></p>
            <ul className="space-y-1 text-xs">
              <li>• <strong>切换动画：</strong>弹性过渡（spring）</li>
              <li>• <strong>背景色：</strong>200ms 过渡</li>
              <li>• <strong>圆圈位移：</strong>stiffness 500 / damping 30</li>
              <li>• <strong>触控反馈：</strong>点击即时响应</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8 mt-8">
        <h2 className="text-2xl font-bold mb-4">颜色规范</h2>
        <div className="grid grid-cols-2 gap-6">
          <div style={panelStyle}>
            <h3 className="text-lg font-semibold mb-4">轨道颜色</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div style={tokenSwatchStyle(colors.switch.off)} />
                <div className="text-sm">
                  <div className="font-mono" style={{ color: colors.text.primary }}>{colors.switch.off}</div>
                  <div style={{ color: colors.text.secondary }}>关闭态轨道（`colors.switch.off`）</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div style={tokenSwatchStyle(colors.switch.on)} />
                <div className="text-sm">
                  <div className="font-mono" style={{ color: colors.text.primary }}>{colors.switch.on}</div>
                  <div style={{ color: colors.text.secondary }}>开启态轨道（`colors.switch.on`）</div>
                </div>
              </div>
            </div>
          </div>

          <div style={panelStyle}>
            <h3 className="text-lg font-semibold mb-4">滑块颜色</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div style={tokenSwatchStyle(colors.switch.thumb, true)} />
                <div className="text-sm">
                  <div className="font-mono" style={{ color: colors.text.primary }}>{colors.switch.thumb}</div>
                  <div style={{ color: colors.text.secondary }}>滑块（`colors.switch.thumb`）</div>
                </div>
              </div>
              <p className="text-sm" style={{ color: colors.text.secondary }}>
                文档展示直接消费组件包里的 switch token，不再在页面层写死固定色值。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">使用场景</h2>
        <div className="grid grid-cols-2 gap-6">
          {USAGE_GROUPS.map((group) => (
            <div key={group.title} style={panelStyle}>
              <h3 className="text-lg font-semibold mb-3">{group.title}</h3>
              <ul className="space-y-2 text-sm" style={{ color: colors.text.secondary }}>
                {group.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div style={panelStyle}>
        <h3 className="text-lg font-semibold mb-3">💻 代码示例</h3>
        <div style={codeBlockStyle}>
          <pre className="text-sm" style={{ color: colors.text.secondary }}>{`import { SwitchComponent } from "./SwitchComponent";
import { useState } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <SwitchComponent
      checked={enabled}
      onChange={setEnabled}
    />
  );
}`}</pre>
        </div>
      </div>
    </div>
  );
}
