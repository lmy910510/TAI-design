import type { CSSProperties } from "react";
import { RADIUS, SPACING, useTheme } from "@tai-design/components";

export function Container() {
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

  const canvasStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    backgroundColor: colors.bg.secondary,
  };

  const dashedBlockStyle: CSSProperties = {
    padding: SPACING["4"],
    borderRadius: RADIUS.xl,
    border: `2px dashed ${colors.border.default}`,
    backgroundColor: colors.bg.primary,
    textAlign: "center",
  };

  return (
    <div className="pb-24">
      <div className="mb-12">
        <div style={chipStyle}>Components / 组件</div>
        <h1 className="text-2xl font-bold mb-4">容器 Container</h1>
        <p className="text-base" style={{ color: colors.text.secondary }}>
          页面内容的基础容器组件，用于控制内容宽度和对齐方式。文档示意图统一改为主题层级和边框 token。
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">定义</h2>
        <p className="text-[28px]" style={{ color: colors.text.secondary }}>
          Container 为页面内容提供水平居中对齐和最大宽度限制，确保内容在不同屏幕尺寸下都能保持良好的可读性和布局节奏。
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">类型</h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">固定宽度容器</h3>
            <div style={canvasStyle}>
              <div style={{ ...dashedBlockStyle, maxWidth: 960, margin: "0 auto" }}>
                <p className="text-xl" style={{ color: colors.text.primary }}>最大宽度 1280px，内容居中</p>
              </div>
            </div>
            <p className="text-base mt-4" style={{ color: colors.text.secondary }}>适用于文章、表单等需要限制宽度的内容。</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">流式容器（Fluid）</h3>
            <div style={canvasStyle}>
              <div style={{ ...dashedBlockStyle, width: "100%" }}>
                <p className="text-xl" style={{ color: colors.text.primary }}>100% 宽度，充满父容器</p>
              </div>
            </div>
            <p className="text-base mt-4" style={{ color: colors.text.secondary }}>适用于需要全宽展示的内容，例如地图、Banner、图片墙。</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">带内边距容器</h3>
            <div style={canvasStyle}>
              <div style={{ ...dashedBlockStyle, maxWidth: 960, margin: "0 auto", padding: 0 }}>
                <div style={{ padding: 48, borderRadius: RADIUS.xl, backgroundColor: colors.bg.secondary }}>
                  <p className="text-xl" style={{ color: colors.text.primary }}>带有标准内边距的内容区域</p>
                  <p className="text-base mt-2" style={{ color: colors.text.secondary }}>内边距：48px（8n）</p>
                </div>
              </div>
            </div>
            <p className="text-base mt-4" style={{ color: colors.text.secondary }}>为内容提供呼吸空间，避免贴边与拥挤。</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">应用</h2>
        <div style={{ ...panelStyle, backgroundColor: colors.bg.secondary }}>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium mb-4">尺寸规范</h3>
              <ul className="text-[24px] space-y-3 list-disc pl-8" style={{ color: colors.text.secondary }}>
                <li>车机端标准容器宽度：1920px（全屏）</li>
                <li>窄屏容器：1280px（适合阅读）</li>
                <li>中等容器：1600px（平衡展示）</li>
                <li>内边距标准：24px、36px、48px（遵循 6px 栅格）</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">使用建议</h3>
              <ul className="text-[24px] space-y-3 list-disc pl-8" style={{ color: colors.text.secondary }}>
                <li>页面主内容使用固定宽度容器，确保可读性</li>
                <li>全屏展示（地图、视频）使用流式容器</li>
                <li>容器内部保持一致的内边距与边界层级</li>
                <li>嵌套容器时避免过度限制宽度</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
