import type { CSSProperties } from "react";
import { RADIUS, SPACING, useTheme } from "@tai-design/components";

const typographyScale = [
  {
    category: "大字号",
    sizes: [
      { size: 72, lineHeight: "auto", weight: "Bold 900 / Medium 700", usage: "歌词高亮态" },
      { size: 60, lineHeight: "auto", weight: "Bold 900 / Medium 700", usage: "歌词普通态、播放器页大标题" },
      { size: 54, lineHeight: "auto", weight: "Bold 900 / Medium 700", usage: "页面唯一主标题" },
      { size: 48, lineHeight: "auto", weight: "Bold 900 / Medium 700", usage: "公里数 / 评分 / 价格 / 大卡片标题" },
    ],
  },
  {
    category: "常用字号",
    sizes: [
      { size: 42, lineHeight: "auto", weight: "Bold 900 / Medium 700 / Regular 500", usage: "页面主标题 / 卡片大标题" },
      { size: 36, lineHeight: "auto", weight: "Bold 900 / Medium 700 / Regular 500", usage: "列表主标题 / 数据展示 / 一级 Tab" },
      { size: 32, lineHeight: "auto", weight: "Medium 700 / Regular 500", usage: "正文 / 副标题 / 二级 Tab" },
      { size: 28, lineHeight: "auto", weight: "Medium 700 / Regular 500", usage: "说明文字" },
    ],
  },
  {
    category: "辅助字号",
    sizes: [
      { size: 24, lineHeight: "auto", weight: "Regular 500", usage: "辅助文字 / 标签文字" },
      { size: 22, lineHeight: "auto", weight: "Regular 500", usage: "图标辅助文字 / 备注文字等" },
    ],
  },
] as const;

const weightSamples = [
  { name: "Regular", value: 500 },
  { name: "Medium", value: 700 },
  { name: "Bold", value: 900 },
] as const;

export function Typography() {
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

  const fontCardStyle: CSSProperties = {
    ...panelStyle,
    minHeight: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const tableHeaderStyle: CSSProperties = {
    backgroundColor: colors.bg.brandSubtle,
    borderBottom: `1px solid ${colors.border.brand}`,
  };

  const cellBorderStyle = `1px solid ${colors.border.subtle}`;

  return (
    <div>
      <div className="mb-8">
        <div style={chipStyle}>Foundation / 基础</div>
        <h1 className="text-4xl font-bold mb-4">Text 文本规范</h1>
        <p className="text-lg" style={{ color: colors.text.secondary }}>
          车机端文本系统，确保不同距离和光线条件下的可读性。页面展示统一改为主题 token 驱动。
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">字族</h2>
        <div className="grid grid-cols-2 gap-6">
          <div style={fontCardStyle}>
            <p className="text-5xl font-bold mb-3" style={{ color: colors.text.primary, fontFamily: "'Noto Sans SC', sans-serif" }}>
              Noto Sans SC
            </p>
            <p className="text-base" style={{ color: colors.text.secondary }}>中文字体</p>
          </div>
          <div style={fontCardStyle}>
            <p className="text-5xl font-bold mb-3" style={{ color: colors.text.primary, fontFamily: "Gilroy, sans-serif" }}>
              Gilroy
            </p>
            <p className="text-base" style={{ color: colors.text.secondary }}>数字 / 英文字体 - 营销场景</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">字重</h2>
        <div className="grid grid-cols-3 gap-4">
          {weightSamples.map((item) => (
            <div key={item.name} style={{ ...panelStyle, minHeight: 160, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <p className="text-4xl mb-2" style={{ color: colors.text.primary, fontWeight: item.value }}>{item.name}</p>
              <p className="text-3xl font-bold" style={{ color: colors.text.primary, fontFamily: "DIN, sans-serif" }}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">字号梯度</h2>

        {typographyScale.map((category) => (
          <div key={category.category} className="mb-8">
            <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text.secondary }}>{category.category}</h3>
            <div style={{ border: cellBorderStyle, borderRadius: RADIUS.xl, overflow: "hidden" }}>
              <div className="grid grid-cols-5" style={tableHeaderStyle}>
                {[
                  "字号",
                  "示例",
                  "行高",
                  "字重",
                  "使用场景",
                ].map((label) => (
                  <div key={label} className="px-4 py-3 text-center" style={{ borderRight: label === "使用场景" ? undefined : cellBorderStyle }}>
                    <p className="text-sm font-medium" style={{ color: colors.text.primary }}>{label}</p>
                  </div>
                ))}
              </div>

              {category.sizes.map((item, index) => (
                <div
                  key={`${category.category}-${item.size}`}
                  className="grid grid-cols-5"
                  style={{
                    backgroundColor: colors.bg.elevated,
                    borderTop: index === 0 ? undefined : cellBorderStyle,
                  }}
                >
                  <div className="px-4 py-4 flex items-center justify-center" style={{ borderRight: cellBorderStyle }}>
                    <p className="text-base font-medium" style={{ color: colors.text.primary }}>{item.size}dp</p>
                  </div>
                  <div className="px-4 py-4 flex items-center justify-center" style={{ borderRight: cellBorderStyle }}>
                    <p style={{ color: colors.text.primary, fontSize: `${Math.min(item.size * 0.7, 48)}px`, fontWeight: 700 }}>Aa</p>
                  </div>
                  <div className="px-4 py-4 flex items-center justify-center" style={{ borderRight: cellBorderStyle }}>
                    <p className="text-sm" style={{ color: colors.text.secondary }}>{item.lineHeight}</p>
                  </div>
                  <div className="px-4 py-4 flex items-center justify-center" style={{ borderRight: cellBorderStyle }}>
                    <p className="text-xs text-center" style={{ color: colors.text.secondary }}>{item.weight}</p>
                  </div>
                  <div className="px-4 py-4 flex items-center">
                    <p className="text-xs" style={{ color: colors.text.secondary }}>{item.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">使用示例</h2>
        <div style={{ ...panelStyle, display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
          <div>
            <p className="text-xs mb-2" style={{ color: colors.text.tertiary }}>页面主标题 - 42dp Bold</p>
            <h2 style={{ fontSize: 42, fontWeight: 900, color: colors.text.primary }}>欢迎使用车机系统</h2>
          </div>
          <div>
            <p className="text-xs mb-2" style={{ color: colors.text.tertiary }}>列表主标题 - 36dp Medium</p>
            <h3 style={{ fontSize: 36, fontWeight: 700, color: colors.text.primary }}>音乐播放列表</h3>
          </div>
          <div>
            <p className="text-xs mb-2" style={{ color: colors.text.tertiary }}>正文 - 32dp Regular</p>
            <p style={{ fontSize: 32, fontWeight: 500, color: colors.text.secondary }}>这是一段正文内容，用于展示常规文字的显示效果。</p>
          </div>
          <div>
            <p className="text-xs mb-2" style={{ color: colors.text.tertiary }}>说明文字 - 28dp Regular</p>
            <p style={{ fontSize: 28, fontWeight: 500, color: colors.text.secondary }}>这是说明文字，提供额外的信息和提示。</p>
          </div>
          <div>
            <p className="text-xs mb-2" style={{ color: colors.text.tertiary }}>辅助文字 - 24dp Regular</p>
            <p style={{ fontSize: 24, fontWeight: 500, color: colors.text.tertiary }}>辅助文字和标签文字。</p>
          </div>
        </div>
      </div>

      <div style={{ ...panelStyle, background: `linear-gradient(to right, ${colors.bg.brandSubtle}, ${colors.bg.secondary})`, border: `1px solid ${colors.border.brand}` }}>
        <h3 className="text-base font-semibold mb-3">💡 设计原则</h3>
        <ul className="text-sm space-y-2" style={{ color: colors.text.secondary }}>
          <li>• 车机场景需考虑驾驶时的快速识别，字号普遍较大。</li>
          <li>• 重要信息使用更大字号和更重字重，保持层级明确。</li>
          <li>• 行高默认使用 AUTO 或自然内容高度，避免额外噪音。</li>
          <li>• 中文字体使用 Noto Sans SC，数字 / 英文营销场景使用 Gilroy。</li>
          <li>• 建议在实际车机环境中测试字体可读性与对比度。</li>
        </ul>
      </div>
    </div>
  );
}
