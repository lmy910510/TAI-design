import { CSSProperties } from "react";
import svgPaths from "../../assets/svg-data/svg-y5u7qpt8mc";
import { RADIUS, SPACING, STATIC, useTheme } from "@tai-design/components";
import { DocPageHeader } from "../DocComponents";

const shadowLevels = [
  {
    level: "-",
    name: "无投影",
    shadow: "none",
    usage: "不需要层级区分的元素",
    cssValue: "none",
  },
  {
    level: "XS",
    name: "基础投影",
    shadow: "0px 6px 12px 0px rgba(0,0,0,0.12)",
    usage: "适用于界面中的小型悬浮组件",
    cssValue: "0px 6px 12px 0px rgba(0,0,0,0.12)",
  },
  {
    level: "S",
    name: "中层投影",
    shadow: "0px 12px 18px 0px rgba(0,0,0,0.12)",
    usage: "适用于地图场景 overlay 等点线面",
    cssValue: "0px 12px 18px 0px rgba(0,0,0,0.12)",
  },
  {
    level: "M",
    name: "上层投影",
    shadow: "0px 12px 24px 0px rgba(0,0,0,0.12)",
    usage: "适用于卡片、气泡等常规组件",
    cssValue: "0px 12px 24px 0px rgba(0,0,0,0.12)",
  },
  {
    level: "L",
    name: "高层投影",
    shadow: "0px 18px 30px 0px rgba(0,0,0,0.06), 0px 30px 54px -24px rgba(0,0,0,0.12)",
    usage: "适用于弹窗、对话框等高层组件",
    cssValue: "0px 18px 30px 0px rgba(0,0,0,0.06), 0px 30px 54px -24px rgba(0,0,0,0.12)",
  },
  {
    level: "XL",
    name: "超高层投影",
    shadow: "0px 30px 24px -6px rgba(0,0,0,0.03), 0px 30px 90px -24px rgba(0,0,0,0.24)",
    usage: "适用于全局级弹窗、模态框等",
    cssValue: "0px 30px 24px -6px rgba(0,0,0,0.03), 0px 30px 90px -24px rgba(0,0,0,0.24)",
  },
] as const;

export function Shadow() {
  const { tokens, isDark } = useTheme();

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

  const gradientPanelStyle: CSSProperties = {
    ...panelStyle,
    background: `linear-gradient(to right, ${tokens.bgColor.container}, ${tokens.bgColor.secondaryContainer})`,
  };

  const displayAreaStyle: CSSProperties = {
    padding: 36,
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.container,
  };

  const floatingSurfaceStyle: CSSProperties = {
    backgroundColor: tokens.bgColor.page,
    borderRadius: RADIUS["2xl"],
  };

  const tableBorderColor = tokens.borderColor.level1;
  const tableHeaderStyle: CSSProperties = {
    backgroundColor: tokens._meta.brandColor,
    color: STATIC.white,
  };

  const helperCardStyle: CSSProperties = {
    padding: 24,
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.elevated,
  };

  const innerSampleStyle: CSSProperties = {
    padding: 24,
    borderRadius: RADIUS.xl,
    backgroundColor: tokens.bgColor.page,
  };

  return (
    <div>
      <DocPageHeader category="Foundation / 基础" title="投影规范" description="通过投影营造层次感，让界面元素具有空间深度" />

      <div className="mb-12">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>定义</h2>
        <div style={gradientPanelStyle}>
          <p className="text-base leading-relaxed" style={{ color: tokens.textColor.secondary }}>
            投影是营造界面层次感的重要手段，通过不同程度的投影可以区分元素的层级关系，引导用户注意力。合理使用投影能让界面更有空间感和立体感，同时避免过度使用造成视觉混乱。
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>投影层级</h2>
        <div style={displayAreaStyle}>
          <div className="flex items-center justify-between gap-8 mb-8">
            {shadowLevels.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-6 flex-1">
                <div
                  className="w-full aspect-square"
                  style={{
                    ...floatingSurfaceStyle,
                    boxShadow: item.shadow === "none" ? "none" : item.shadow,
                    maxWidth: 160,
                  }}
                />
              </div>
            ))}
          </div>

          <div className="relative h-[40px] mb-6">
            <svg className="absolute w-full h-full" viewBox="0 0 1600 40" fill="none" preserveAspectRatio="none">
              <path d={svgPaths.p3bfbbb0} fill={tokens._meta.brandColor} />
            </svg>
          </div>

          <div className="flex items-start justify-between gap-8">
            {shadowLevels.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center flex-1" style={{ maxWidth: 160 }}>
                <p className="text-xl font-semibold mb-2" style={{ color: tokens.textColor.primary }}>
                  {item.level}
                  {item.level !== "-" && <span className="ml-2 text-base">{item.name}</span>}
                  {item.level === "-" && <span className="ml-2 text-base">无投影</span>}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: tokens.textColor.secondary }}>
                  {item.usage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>投影参数</h2>
        <div className="border rounded-lg overflow-hidden" style={{ borderColor: tableBorderColor }}>
          <div className="grid grid-cols-4" style={tableHeaderStyle}>
            <div className="px-6 py-4 text-center border-r border-black/10">
              <p className="text-sm font-medium">层级</p>
            </div>
            <div className="px-6 py-4 text-center border-r border-black/10">
              <p className="text-sm font-medium">名称</p>
            </div>
            <div className="px-6 py-4 text-center border-r border-black/10">
              <p className="text-sm font-medium">CSS值</p>
            </div>
            <div className="px-6 py-4 text-center">
              <p className="text-sm font-medium">使用场景</p>
            </div>
          </div>

          {shadowLevels.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-4"
              style={{
                backgroundColor: tokens.bgColor.elevated,
                borderBottom: index !== shadowLevels.length - 1 ? `1px solid ${tableBorderColor}` : undefined,
              }}
            >
              <div className="px-6 py-4 flex items-center justify-center border-r" style={{ borderColor: tableBorderColor }}>
                <p className="text-base font-semibold" style={{ color: tokens.textColor.primary }}>{item.level}</p>
              </div>
              <div className="px-6 py-4 flex items-center justify-center border-r" style={{ borderColor: tableBorderColor }}>
                <p className="text-sm" style={{ color: tokens.textColor.secondary }}>{item.name}</p>
              </div>
              <div className="px-6 py-4 flex items-center justify-center border-r" style={{ borderColor: tableBorderColor }}>
                <code
                  className="text-xs px-3 py-1 rounded"
                  style={{
                    backgroundColor: tokens.bgColor.container,
                    color: tokens.textColor.secondary,
                  }}
                >
                  {item.cssValue}
                </code>
              </div>
              <div className="px-6 py-4 flex items-center justify-center">
                <p className="text-xs" style={{ color: tokens.textColor.secondary }}>{item.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>应用示例</h2>
        <div className="grid grid-cols-3 gap-6">
          <div style={helperCardStyle}>
            <h3 className="text-base font-semibold mb-4" style={{ color: tokens.textColor.primary }}>
              XS - 小型悬浮组件
            </h3>
            <div className="flex flex-col gap-3">
              <div style={{ ...innerSampleStyle, boxShadow: shadowLevels[1].shadow }}>
                <p className="text-sm" style={{ color: tokens.textColor.secondary }}>Badge标签</p>
              </div>
              <div style={{ ...innerSampleStyle, boxShadow: shadowLevels[1].shadow }}>
                <p className="text-sm" style={{ color: tokens.textColor.secondary }}>Tooltip提示</p>
              </div>
            </div>
          </div>

          <div style={helperCardStyle}>
            <h3 className="text-base font-semibold mb-4" style={{ color: tokens.textColor.primary }}>
              M - 常规卡片
            </h3>
            <div style={{ ...innerSampleStyle, boxShadow: shadowLevels[3].shadow }}>
              <h4 className="text-sm font-semibold mb-2" style={{ color: tokens.textColor.primary }}>卡片标题</h4>
              <p className="text-xs" style={{ color: tokens.textColor.secondary }}>这是卡片内容示例</p>
            </div>
          </div>

          <div style={helperCardStyle}>
            <h3 className="text-base font-semibold mb-4" style={{ color: tokens.textColor.primary }}>
              XL - 全局弹窗
            </h3>
            <div style={{ ...innerSampleStyle, boxShadow: shadowLevels[5].shadow }}>
              <h4 className="text-sm font-semibold mb-2" style={{ color: tokens.textColor.primary }}>模态弹窗</h4>
              <p className="text-xs mb-4" style={{ color: tokens.textColor.secondary }}>最强的视觉层级</p>
              <div className="flex gap-2">
                <button
                  className="px-3 py-1 rounded text-xs"
                  style={{
                    backgroundColor: tokens._meta.brandColor,
                    color: STATIC.white,
                  }}
                >
                  确定
                </button>
                <button
                  className="px-3 py-1 rounded border text-xs"
                  style={{
                    borderColor: tokens.borderColor.level2,
                    color: tokens.textColor.secondary,
                    backgroundColor: tokens.bgColor.page,
                  }}
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isDark && (
        <div style={gradientPanelStyle} className="mb-8">
          <h3 className="text-base font-semibold mb-3" style={{ color: tokens._meta.brandColor }}>
            💡 暗色模式投影提示
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: tokens.textColor.secondary }}>
            在暗色模式下，投影效果可能不如浅色模式明显。建议配合边框或背景色差异来增强层次感，必要时可以适当增加投影的不透明度或使用发光效果。
          </p>
        </div>
      )}

      <div style={gradientPanelStyle}>
        <h3 className="text-base font-semibold mb-3">💡 设计原则</h3>
        <ul className="text-sm space-y-2" style={{ color: tokens.textColor.secondary }}>
          <li>• 投影应遵循从小到大的层级原则，避免跳跃式使用</li>
          <li>• 同一界面中不要使用过多不同层级的投影，保持简洁</li>
          <li>• 投影方向应保持一致，建议从上往下（Y轴正向）</li>
          <li>• 暗色模式下投影效果较弱，可配合边框或背景色增强层次</li>
          <li>• 动态元素（如悬停、拖拽）可使用投影过渡动画提升体验</li>
        </ul>
      </div>
    </div>
  );
}
