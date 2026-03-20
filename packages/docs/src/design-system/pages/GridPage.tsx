import type { CSSProperties } from "react";
import { RADIUS, SPACING, useTheme } from "@tai-design/components";

const GRID_VARIANTS = [
  { title: "2列网格", columns: 2, count: 4, cellClass: "aspect-video" },
  { title: "3列网格", columns: 3, count: 6, cellClass: "aspect-square" },
  { title: "4列网格", columns: 4, count: 8, cellClass: "aspect-square" },
] as const;

export function GridPage() {
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

  const cellStyle: CSSProperties = {
    borderRadius: RADIUS.xl,
    backgroundColor: colors.bg.secondary,
    color: colors.text.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    fontWeight: 600,
  };

  return (
    <div className="pb-24">
      <div className="mb-12">
        <div style={chipStyle}>Components / 组件</div>
        <h1 className="text-2xl font-bold mb-4">网格 Grid</h1>
        <p className="text-base" style={{ color: colors.text.secondary }}>
          基于网格系统的布局容器，用于创建规则的多列布局，适合卡片、图片墙、商品列表等场景。
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">定义</h2>
        <p className="text-[28px]" style={{ color: colors.text.secondary }}>
          网格布局提供了一种简单而强大的方式来组织内容，尤其适合规则排列的可视化模块。
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">类型</h2>
        <div className="space-y-12">
          {GRID_VARIANTS.map((variant) => (
            <div key={variant.title}>
              <h3 className="text-2xl font-bold mb-6">{variant.title}</h3>
              <div style={panelStyle}>
                <div className={`grid gap-6 ${variant.columns === 2 ? "grid-cols-2" : variant.columns === 3 ? "grid-cols-3" : "grid-cols-4"}`}>
                  {Array.from({ length: variant.count }, (_, index) => (
                    <div key={index} className={variant.cellClass} style={cellStyle}>
                      项目 {index + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div>
            <h3 className="text-2xl font-bold mb-6">响应式网格（自适应）</h3>
            <div style={panelStyle}>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6">
                {Array.from({ length: 6 }, (_, index) => (
                  <div key={index} className="aspect-square" style={cellStyle}>
                    {index + 1}
                  </div>
                ))}
              </div>
              <p className="text-base mt-6" style={{ color: colors.text.secondary }}>自动适应容器宽度，每列最小 200px。</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">应用</h2>
        <div style={{ ...panelStyle, backgroundColor: colors.bg.secondary }}>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium mb-4">使用规范</h3>
              <ul className="text-[24px] space-y-3 list-disc pl-8" style={{ color: colors.text.secondary }}>
                <li>间距遵循 6px 基准栅格：12px、18px、24px、36px</li>
                <li>列数根据内容和屏幕尺寸选择，车机端常用 2-4 列</li>
                <li>保持网格单元的宽高比一致，提供视觉统一性</li>
                <li>响应式网格可适应不同分辨率与卡片密度</li>
                <li>避免过度密集，确保触摸目标足够大</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">使用场景</h3>
              <ul className="text-[24px] space-y-3 list-disc pl-8" style={{ color: colors.text.secondary }}>
                <li>图片画廊和相册展示</li>
                <li>商品列表和卡片排列</li>
                <li>应用图标网格</li>
                <li>仪表盘数据卡片</li>
                <li>功能入口模块</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
