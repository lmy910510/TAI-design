import { useState, useMemo, type CSSProperties } from "react";
import { RADIUS, SPACING, STATIC, useTheme } from "@tai-design/components";
import { SwitchComponent } from "../SwitchComponent";
import { DocPageHeader } from "../DocComponents";

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
    details: ["沿用当前开关状态色", "通过组件透明度弱化禁用态", "不可点击，仅用于只读说明"],
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
  const { tokens } = useTheme();
  const [demoSwitch, setDemoSwitch] = useState(false);
  const [controlledSwitch, setControlledSwitch] = useState(false);

  const chipStyle: CSSProperties = {
    display: "inline-block",
    padding: "6px 12px",
    marginBottom: 16,
    borderRadius: 999,
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.container,
    color: tokens.textColor.secondary,
    fontSize: 14,
  };

  const panelStyle: CSSProperties = {
    padding: 24,
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.elevated,
  };

  const guidePanelStyle: CSSProperties = {
    padding: 24,
    marginBottom: 32,
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.brand}`,
    background: `linear-gradient(to right, ${tokens.bgColor.brandLight}, ${tokens.bgColor.container})`,
  };

  const codeBlockStyle: CSSProperties = {
    padding: 18,
    borderRadius: RADIUS.xl,
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.code,
    color: tokens.textColor.primary,
    overflowX: "auto",
  };

  return (
    <div>
      <DocPageHeader category="Components / 组件" title="开关" description="用于控制功能启停状态的交互组件，提供清晰、直接的二元切换反馈。" />

      <div className="mb-8">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>实际效果</h2>
        <div style={{ ...panelStyle, padding: 48 }}>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <SwitchComponent checked={demoSwitch} onChange={setDemoSwitch} />
              <span className="text-sm" style={{ color: tokens.textColor.secondary }}>
                {demoSwitch ? "开启" : "关闭"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>尺寸规格</h2>
        <div style={panelStyle}>
          <div className="flex items-start gap-8">
            <div className="flex-shrink-0 flex justify-center items-center w-48">
              <SwitchComponent checked onChange={() => {}} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4">标准尺寸</h3>
              <ul className="space-y-2 text-sm" style={{ color: tokens.textColor.secondary }}>
                <li>• <strong>整体尺寸：</strong>108px × 60px（宽 18×6，高 10×6）</li>
                <li>• <strong>圆形滑块：</strong>48px × 48px</li>
                <li>• <strong>内边距：</strong>6px</li>
                <li>• <strong>圆角：</strong>完全圆角（border-radius: 50%）</li>
                <li>• <strong>栅格对齐：</strong>符合 6px 基准栅格</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>状态</h2>
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
              <ul className="space-y-2 text-sm" style={{ color: tokens.textColor.secondary }}>
                {item.details.map((detail) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>交互演示</h2>
        <div style={{ ...panelStyle, padding: 30 }}>
          <div className="space-y-6">
            <div className="flex items-center justify-between max-w-md mx-auto">
              <div>
                <p className="font-semibold mb-1" style={{ color: tokens.textColor.primary }}>
                  蓝牙连接
                </p>
                <p className="text-sm" style={{ color: tokens.textColor.secondary }}>
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
          <div className="text-sm" style={{ color: tokens.textColor.secondary }}>
            <p className="mb-2"><strong>尺寸体系（6px 栅格）：</strong></p>
            <ul className="space-y-1 text-xs">
              <li>• <strong>整体：</strong>108×60px（宽 18×6，高 10×6）</li>
              <li>• <strong>滑块：</strong>48×48px</li>
              <li>• <strong>内边距：</strong>6px</li>
              <li>• <strong>圆角：</strong>完全圆角（border-radius: 50%）</li>
            </ul>
          </div>
          <div className="text-sm" style={{ color: tokens.textColor.secondary }}>
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
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>颜色规范 · Token 映射</h2>
        <SwitchTokenPanel tokens={tokens} panelStyle={panelStyle} />
      </div>

      <div className="mb-8">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>使用场景</h2>
        <div className="grid grid-cols-2 gap-6">
          {USAGE_GROUPS.map((group) => (
            <div key={group.title} style={panelStyle}>
              <h3 className="text-lg font-semibold mb-3">{group.title}</h3>
              <ul className="space-y-2 text-sm" style={{ color: tokens.textColor.secondary }}>
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
          <pre className="text-sm" style={{ color: tokens.textColor.secondary }}>{`import { Switch } from "@tai-design/components";
import { useState } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
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

// ============================================================================
// Token 颜色映射面板 — 与 Switch.tsx 组件实现完全一致
// ============================================================================

type SwitchState = "off" | "on" | "disabled-off" | "disabled-on";

const SWITCH_STATES: { key: SwitchState; label: string }[] = [
  { key: "off", label: "关闭" },
  { key: "on", label: "开启" },
  { key: "disabled-off", label: "禁用·关" },
  { key: "disabled-on", label: "禁用·开" },
];

interface TokenEntry {
  label: string;
  tokenPath: string;
  value: string;
}

function SwitchTokenPanel({
  tokens,
  panelStyle,
}: {
  tokens: ReturnType<typeof import("@tai-design/components").useTheme>["tokens"];
  panelStyle: CSSProperties;
}) {
  const [selectedState, setSelectedState] = useState<SwitchState>("off");

  const tokenMap = useMemo<TokenEntry[]>(() => {
    const isOn = selectedState === "on" || selectedState === "disabled-on";
    const isDisabled = selectedState.startsWith("disabled");

    const entries: TokenEntry[] = [];

    // 轨道背景
    if (isOn) {
      entries.push({
        label: "轨道背景",
        tokenPath: "bgColor.brand",
        value: tokens.switch.on,
      });
    } else {
      entries.push({
        label: "轨道背景",
        tokenPath: "bgColor.component",
        value: tokens.switch.off,
      });
    }

    // 滑块颜色
    entries.push({
      label: "滑块",
      tokenPath: "STATIC.white",
      value: tokens.switch.thumb,
    });

    // 滑块阴影
    entries.push({
      label: "滑块阴影",
      tokenPath: "borderColor.component",
      value: tokens.switch.thumbShadow,
    });

    // 禁用态特殊标注
    if (isDisabled) {
      entries.push({
        label: "禁用处理",
        tokenPath: "CSS opacity: 0.5",
        value: "整体半透明",
      });
    }

    return entries;
  }, [tokens, selectedState]);

  return (
    <div style={panelStyle}>
      {/* 状态预览 + 选择器 */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <div
            style={{
              width: 108,
              height: 60,
              borderRadius: 30,
              backgroundColor:
                selectedState === "on" || selectedState === "disabled-on"
                  ? tokens.switch.on
                  : tokens.switch.off,
              opacity: selectedState.startsWith("disabled") ? 0.5 : 1,
              display: "flex",
              alignItems: "center",
              padding: 6,
              transition: "background-color 200ms ease",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: tokens.switch.thumb,
                boxShadow: `0 2px 4px ${tokens.switch.thumbShadow}`,
                transform:
                  selectedState === "on" || selectedState === "disabled-on"
                    ? "translateX(48px)"
                    : "translateX(0)",
                transition: "transform 200ms ease",
              }}
            />
          </div>
          <span
            style={{
              fontSize: 14,
              color: tokens.textColor.secondary,
              fontWeight: 500,
            }}
          >
            {SWITCH_STATES.find((s) => s.key === selectedState)?.label}
          </span>
        </div>

        <div className="flex gap-2">
          {SWITCH_STATES.map((state) => (
            <button
              key={state.key}
              onClick={() => setSelectedState(state.key)}
              style={{
                padding: "8px 16px",
                borderRadius: RADIUS.xl,
                border: `2px solid ${
                  selectedState === state.key
                    ? tokens.borderColor.focus
                    : STATIC.transparent
                }`,
                backgroundColor:
                  selectedState === state.key
                    ? tokens.bgColor.container
                    : tokens.bgColor.secondaryContainer,
                color:
                  selectedState === state.key
                    ? tokens.textColor.primary
                    : tokens.textColor.secondary,
                fontSize: 13,
                fontWeight: 500,
                transition: "all 150ms ease",
              }}
            >
              {state.label}
            </button>
          ))}
        </div>
      </div>

      {/* Token 映射表 */}
      <div
        style={{
          padding: 18,
          borderRadius: RADIUS.xl,
          border: `1px solid ${tokens.borderColor.level1}`,
          backgroundColor: tokens.bgColor.container,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: tokens.textColor.primary,
            }}
          >
            🎨 Token 颜色映射
          </span>
          <span
            style={{
              fontSize: 11,
              padding: "2px 8px",
              borderRadius: 6,
              backgroundColor: tokens.bgColor.secondaryContainer,
              color: tokens.textColor.tertiary,
            }}
          >
            switch · {selectedState}
          </span>
        </div>
        <div>
          {tokenMap.map((entry) => {
            const isSpecial =
              entry.value === "整体半透明" ||
              entry.value === "transparent";
            return (
              <div
                key={entry.label + entry.tokenPath}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 0",
                  borderBottom: `1px solid ${tokens.borderColor.level1}`,
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  {/* 色块 */}
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 6,
                      backgroundColor: isSpecial
                        ? tokens.bgColor.container
                        : entry.value,
                      border: `1px solid ${tokens.borderColor.level1}`,
                      flexShrink: 0,
                      ...(isSpecial
                        ? {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 12,
                          }
                        : {}),
                    }}
                  >
                    {entry.value === "整体半透明" ? "½" : null}
                  </div>
                  {/* 用途 */}
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: tokens.textColor.primary,
                    }}
                  >
                    {entry.label}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  {/* Token 路径 */}
                  <code
                    style={{
                      fontSize: 12,
                      padding: "2px 8px",
                      borderRadius: 6,
                      backgroundColor: tokens.bgColor.secondaryContainer,
                      color: tokens.textColor.secondary,
                      fontFamily: "monospace",
                    }}
                  >
                    {entry.tokenPath}
                  </code>
                  {/* 色值 */}
                  <span
                    style={{
                      fontSize: 11,
                      color: tokens.textColor.tertiary,
                      fontFamily: "monospace",
                      minWidth: 80,
                      textAlign: "right",
                    }}
                  >
                    {entry.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 语义说明 */}
      <div
        style={{
          marginTop: 18,
          padding: 18,
          borderRadius: RADIUS.xl,
          backgroundColor: tokens.bgColor.secondaryContainer,
        }}
      >
        <p
          className="text-sm"
          style={{ color: tokens.textColor.secondary, lineHeight: 1.6 }}
        >
          <strong>Token 来源说明：</strong>开启态轨道使用{" "}
          <code
            style={{
              fontSize: 12,
              padding: "1px 6px",
              borderRadius: 4,
              backgroundColor: tokens.bgColor.container,
            }}
          >
            bgColor.brand
          </code>{" "}
          品牌色背景；关闭态轨道使用{" "}
          <code
            style={{
              fontSize: 12,
              padding: "1px 6px",
              borderRadius: 4,
              backgroundColor: tokens.bgColor.container,
            }}
          >
            bgColor.component
          </code>{" "}
          组件背景色；滑块始终为{" "}
          <code
            style={{
              fontSize: 12,
              padding: "1px 6px",
              borderRadius: 4,
              backgroundColor: tokens.bgColor.container,
            }}
          >
            STATIC.white
          </code>
          ；滑块阴影引用{" "}
          <code
            style={{
              fontSize: 12,
              padding: "1px 6px",
              borderRadius: 4,
              backgroundColor: tokens.bgColor.container,
            }}
          >
            borderColor.component
          </code>
          。禁用态通过整体{" "}
          <code
            style={{
              fontSize: 12,
              padding: "1px 6px",
              borderRadius: 4,
              backgroundColor: tokens.bgColor.container,
            }}
          >
            opacity: 0.5
          </code>{" "}
          降低存在感。所有颜色均引用公开语义 token，不直接使用 primitive 值。
        </p>
      </div>
    </div>
  );
}
