import type { CSSProperties } from "react";
import { RADIUS, SPACING, useTheme } from "@tai-design/components";

const FEATURE_ITEMS = [
  { title: "特性一", description: "详细的功能描述说明文字内容", index: "1" },
  { title: "特性二", description: "详细的功能描述说明文字内容", index: "2" },
  { title: "特性三", description: "详细的功能描述说明文字内容", index: "3" },
];

export function Section() {
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

  const featureBadgeStyle: CSSProperties = {
    width: 48,
    height: 48,
    borderRadius: RADIUS.xl,
    backgroundColor: colors.button.primary.bg,
    color: colors.button.primary.text,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: 700,
  };

  const captionStyle: CSSProperties = {
    marginTop: SPACING["3"],
    color: colors.text.secondary,
    fontSize: 16,
  };

  return (
    <div className="pb-24">
      <div className="mb-12">
        <div style={chipStyle}>Components / 组件</div>
        <h1 className="text-2xl font-bold mb-4">区块 Section</h1>
        <p className="text-base" style={{ color: colors.text.secondary }}>
          页面内容的语义化区块组件，用于组织和分隔不同的内容模块。页面示例统一使用主题 token 展示层级和边界。
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">定义</h2>
        <p className="text-[28px]" style={{ color: colors.text.secondary }}>
          Section 是页面内容的语义化分组容器，将相关内容组织在一起，提供清晰的视觉层次和内容结构。
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">类型</h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">基础区块</h3>
            <div style={panelStyle}>
              <div style={{ display: "flex", flexDirection: "column", gap: SPACING["3"] }}>
                <h4 className="text-3xl font-bold" style={{ color: colors.text.primary }}>区块标题</h4>
                <p className="text-xl" style={{ color: colors.text.secondary }}>
                  区块内容描述文字，这里可以放置任何相关的内容元素。Section 为内容提供语义化的分组和合适的间距。
                </p>
              </div>
            </div>
            <p style={captionStyle}>最基础的内容区块，包含标题和内容。</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">带背景区块</h3>
            <div style={{ ...panelStyle, backgroundColor: colors.bg.secondary }}>
              <div style={{ display: "flex", flexDirection: "column", gap: SPACING["3"] }}>
                <h4 className="text-3xl font-bold" style={{ color: colors.text.primary }}>高亮区块</h4>
                <p className="text-xl" style={{ color: colors.text.secondary }}>
                  使用背景层级来突出显示重要内容，适合用于特殊说明、提示信息或推荐内容。
                </p>
              </div>
            </div>
            <p style={captionStyle}>通过容器层级区分不同重要程度的内容。</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">多列区块</h3>
            <div style={panelStyle}>
              <h4 className="text-3xl font-bold mb-8" style={{ color: colors.text.primary }}>功能特性</h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: SPACING["4"] }}>
                {FEATURE_ITEMS.map((item) => (
                  <div key={item.index} style={{ display: "flex", flexDirection: "column", gap: SPACING["2"] }}>
                    <div style={featureBadgeStyle}>{item.index}</div>
                    <h5 className="text-xl font-semibold" style={{ color: colors.text.primary }}>{item.title}</h5>
                    <p className="text-base" style={{ color: colors.text.secondary }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <p style={captionStyle}>区块内使用网格布局展示并列内容。</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">带边框区块</h3>
            <div style={{ ...panelStyle, border: `2px solid ${colors.border.default}` }}>
              <div style={{ display: "flex", flexDirection: "column", gap: SPACING["3"] }}>
                <h4 className="text-3xl font-bold" style={{ color: colors.text.primary }}>明确边界的区块</h4>
                <p className="text-xl" style={{ color: colors.text.secondary }}>
                  使用边框明确区块边界，适合需要强调区域范围的场景，如表单分组、信息卡片等。
                </p>
              </div>
            </div>
            <p style={captionStyle}>通过边框强调区块边界。</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">应用</h2>
        <div style={{ ...panelStyle, backgroundColor: colors.bg.secondary }}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["5"] }}>
            <div>
              <h3 className="text-2xl font-medium mb-4">间距规范</h3>
              <ul className="text-[24px] space-y-3 list-disc pl-8" style={{ color: colors.text.secondary }}>
                <li>区块之间的间距建议使用 48px 或 60px 等 6px 倍数</li>
                <li>区块内部内边距建议使用 36px 或 48px</li>
                <li>标题与内容之间建议保持 24px 的稳定节奏</li>
                <li>使用一致的间距创造统一的页面层次感</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">使用场景</h3>
              <ul className="text-[24px] space-y-3 list-disc pl-8" style={{ color: colors.text.secondary }}>
                <li>组织首页的不同功能模块</li>
                <li>将长表单分组为多个区块</li>
                <li>设置页面的配置分类</li>
                <li>产品介绍的特性展示</li>
                <li>文章内容的章节划分</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
