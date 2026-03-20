import type { CSSProperties } from "react";
import { RADIUS, SPACING, useTheme } from "@tai-design/components";

const spacingScale = [
  { multiplier: "0.5n", value: 3, usage: "极小间距，用于紧凑布局" },
  { multiplier: "n", value: 6, usage: "最小间距单位" },
  { multiplier: "2n", value: 12, usage: "紧凑间距" },
  { multiplier: "3n", value: 18, usage: "常规小间距" },
  { multiplier: "4n", value: 24, usage: "常规间距" },
  { multiplier: "5n", value: 30, usage: "中等间距" },
  { multiplier: "6n", value: 36, usage: "较大间距" },
  { multiplier: "7n", value: 42, usage: "大间距" },
  { multiplier: "8n", value: 48, usage: "超大间距" },
  { multiplier: "9n", value: 60, usage: "区域分隔" },
  { multiplier: "10n", value: 66, usage: "页面边距" },
] as const;

const commonUseCases = [
  {
    name: "组件内边距",
    examples: [
      { spacing: "2n (12px)", usage: "小按钮内边距" },
      { spacing: "3n (18px)", usage: "常规按钮内边距" },
      { spacing: "4n (24px)", usage: "卡片内边距" },
      { spacing: "5n (30px)", usage: "大卡片内边距" },
    ],
  },
  {
    name: "元素间距",
    examples: [
      { spacing: "n (6px)", usage: "标签之间、图标与文字" },
      { spacing: "2n (12px)", usage: "列表项内元素间距" },
      { spacing: "3n (18px)", usage: "卡片内元素间距" },
      { spacing: "4n (24px)", usage: "段落间距" },
    ],
  },
  {
    name: "布局间距",
    examples: [
      { spacing: "4n (24px)", usage: "卡片之间间距" },
      { spacing: "5n (30px)", usage: "页面内容区块间距" },
      { spacing: "7n (42px)", usage: "页面边距" },
      { spacing: "8n (48px)", usage: "大区块分隔" },
    ],
  },
] as const;

export function Spacing() {
  const { colors } = useTheme();

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

  const definitionPanelStyle: CSSProperties = {
    ...panelStyle,
    border: `1px solid ${colors.border.brand}`,
    background: `linear-gradient(to right, ${colors.bg.brandSubtle}, ${colors.bg.secondary})`,
  };

  return (
    <div>
      <div className="mb-8">
        <div style={chipStyle}>Foundation / 基础</div>
        <h1 className="text-4xl font-bold mb-4">栅格类型</h1>
        <p className="text-lg" style={{ color: colors.text.secondary }}>
          栅格设计原则遵循统一的 6px 基准系统，间距优先使用 12、18、24、30、36 等 6 的倍数，更适合车机大屏场景。
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">定义</h2>
        <div style={definitionPanelStyle}>
          <div className="space-y-3 text-base leading-relaxed" style={{ color: colors.text.secondary }}>
            <p><strong style={{ color: colors.text.primary }}>n = 6px</strong>：车机端以 6px 为基准单位，相比常见 Web 端的 4px 或 8px 栅格，更适合大屏和远距阅读。</p>
            <p>所有间距、内边距、外边距都应优先选择 6 的倍数，确保视觉对齐和节奏一致。</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">间距规范</h2>
        <div style={{ ...panelStyle, overflowX: "auto" }}>
          <div style={{ display: "flex", gap: SPACING["2"], minWidth: "max-content" }}>
            {spacingScale.map((item) => (
              <div
                key={item.multiplier}
                style={{
                  minWidth: 108,
                  padding: `${SPACING["2"]}px ${SPACING["3"]}px`,
                  borderRadius: RADIUS.xl,
                  border: `1px solid ${colors.border.subtle}`,
                  backgroundColor: colors.bg.secondary,
                  textAlign: "center",
                }}
              >
                <p className="text-xs mb-1" style={{ color: colors.text.tertiary }}>{item.multiplier}</p>
                <p className="text-lg font-semibold" style={{ color: colors.brand.primary }}>{item.value}px</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">间距可视化</h2>
        <div style={panelStyle}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            {spacingScale.slice(0, 9).map((item) => (
              <div key={item.multiplier} style={{ display: "flex", alignItems: "center", gap: SPACING["4"] }}>
                <div style={{ width: 132, flexShrink: 0 }}>
                  <p className="text-sm font-medium" style={{ color: colors.text.primary }}>{item.multiplier}</p>
                  <p className="text-xs" style={{ color: colors.brand.primary }}>{item.value}px</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: SPACING["3"] }}>
                  <div style={{ width: item.value * 2, height: 24, borderRadius: RADIUS.xl / 2, backgroundColor: colors.brand.primary }} />
                  <p className="text-xs" style={{ color: colors.text.secondary }}>{item.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">常用场景</h2>
        <div className="grid grid-cols-3 gap-6">
          {commonUseCases.map((useCase) => (
            <div key={useCase.name} style={panelStyle}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: colors.text.primary }}>{useCase.name}</h3>
              <div className="space-y-3">
                {useCase.examples.map((example) => (
                  <div key={example.spacing} className="space-y-1">
                    <p className="text-sm font-medium" style={{ color: colors.brand.primary }}>{example.spacing}</p>
                    <p className="text-xs" style={{ color: colors.text.secondary }}>{example.usage}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">应用示例</h2>
        <div className="grid grid-cols-2 gap-6">
          <div style={panelStyle}>
            <h3 className="text-base font-semibold mb-3" style={{ color: colors.text.primary }}>卡片内边距：4n (24px)</h3>
            <div style={{ padding: SPACING["3"], borderRadius: RADIUS.xl, backgroundColor: colors.bg.secondary }}>
              <p className="text-sm mb-3" style={{ color: colors.text.secondary }}>内容区域内边距：3n (18px)</p>
              <div style={{ display: "flex", gap: SPACING["2"], flexWrap: "wrap" }}>
                <button
                  type="button"
                  style={{
                    padding: `${SPACING["2"]}px ${SPACING["3"]}px`,
                    borderRadius: RADIUS.xl,
                    border: `1px solid ${colors.button.primary.border}`,
                    backgroundColor: colors.button.primary.bg,
                    color: colors.button.primary.text,
                    fontSize: 14,
                  }}
                >
                  按钮内边距 2n×3n
                </button>
                <button
                  type="button"
                  style={{
                    padding: `${SPACING["2"]}px ${SPACING["3"]}px`,
                    borderRadius: RADIUS.xl,
                    border: `1px solid ${colors.button.secondary.border}`,
                    backgroundColor: colors.button.secondary.bg,
                    color: colors.button.secondary.text,
                    fontSize: 14,
                  }}
                >
                  次按钮
                </button>
              </div>
            </div>
            <p className="text-xs mt-3" style={{ color: colors.text.tertiary }}>按钮之间间距：2n (12px)</p>
          </div>

          <div style={panelStyle}>
            <h3 className="text-base font-semibold mb-4" style={{ color: colors.text.primary }}>列表内边距：4n (24px)</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["2"] }}>
              {[1, 2, 3].map((item) => (
                <div key={item} style={{ padding: SPACING["2"], borderRadius: RADIUS.xl, backgroundColor: colors.bg.secondary }}>
                  <p className="text-sm" style={{ color: colors.text.secondary }}>列表项内边距：2n (12px)</p>
                </div>
              ))}
            </div>
            <p className="text-xs mt-3" style={{ color: colors.text.tertiary }}>列表项之间间距：2n (12px)</p>
          </div>
        </div>
      </div>

      <div style={definitionPanelStyle}>
        <h3 className="text-base font-semibold mb-3">💡 6px 栅格系统优势</h3>
        <ul className="text-sm space-y-2" style={{ color: colors.text.secondary }}>
          <li>• 车机适配：6px 基准单位更适合大屏尺寸。</li>
          <li>• 视觉对齐：所有元素按 6px 倍数对齐，界面更整齐。</li>
          <li>• 可扩展性：从 0.5n 到 xn 的组合能覆盖多种布局场景。</li>
          <li>• 开发一致性：统一间距规范能显著减少页面层的自由发挥。</li>
        </ul>
      </div>
    </div>
  );
}
