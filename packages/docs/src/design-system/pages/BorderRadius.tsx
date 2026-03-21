import type { CSSProperties } from "react";
import { RADIUS, SPACING, useTheme } from "@tai-design/components";
import { DocPageHeader } from "../DocComponents";

const borderRadiusValues = [
  { value: 6, name: "最小圆角", usage: "极小场景，例如标签 / Checkbox" },
  { value: 12, name: "基础圆角", usage: "小组件与内嵌块" },
  { value: 18, name: "增强圆角", usage: "二级内容块" },
  { value: 24, name: "操作圆角", usage: "操作按钮、输入框" },
  { value: 30, name: "面板圆角", usage: "卡片、弹窗" },
  { value: 42, name: "大面板圆角", usage: "大卡片、浮层" },
] as const;

export function BorderRadius() {
  const { tokens } = useTheme();

  const chipStyle: CSSProperties = {
    display: "inline-block",
    padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`,
    marginBottom: SPACING["3"],
    borderRadius: 999,
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.container,
    color: tokens.textColor.secondary,
    fontSize: 14,
  };

  const panelStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.elevated,
  };

  const guidePanelStyle: CSSProperties = {
    ...panelStyle,
    border: `1px solid ${tokens.borderColor.brand}`,
    background: `linear-gradient(to right, ${tokens.bgColor.brandLight}, ${tokens.bgColor.container})`,
  };

  return (
    <div>
      <DocPageHeader category="Foundation / 基础" title="圆角规范" description="统一的圆角层级有助于建立品牌辨识度，让不同组件在同一套视觉语言下保持一致。" />

      <div className="mb-12">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>定义</h2>
        <div style={guidePanelStyle}>
          <p className="text-base leading-relaxed" style={{ color: tokens.textColor.secondary }}>
            圆角是车机端视觉调性的重要组成部分。通过阶梯式圆角体系，可以在按钮、卡片、浮层、内嵌内容之间形成明确层次，同时保持统一而温和的品牌观感。
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>常用圆角</h2>
        <div style={panelStyle}>
          <div className="grid grid-cols-4 gap-6">
            {borderRadiusValues.map((item) => (
              <div key={item.value} className="flex flex-col items-center gap-6">
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    borderRadius: RADIUS["2xl"],
                    border: `1px solid ${tokens.borderColor.level1}`,
                    backgroundColor: tokens.bgColor.container,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "60%",
                      height: "40%",
                      borderRadius: item.value,
                      border: `3px solid ${tokens._meta.brandColor}`,
                      backgroundColor: tokens.bgColor.page,
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: Math.max(item.value * 0.7, 8),
                        height: Math.max(item.value * 0.7, 8),
                        borderRadius: 999,
                        backgroundColor: tokens.bgColor.brandLight,
                        position: "absolute",
                        left: Math.max(item.value * 0.4, 6),
                        top: Math.max(item.value * 0.4, 6),
                      }}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-lg font-medium mb-1" style={{ color: tokens.textColor.primary }}>{item.value}px {item.name}</p>
                  <p className="text-sm" style={{ color: tokens.textColor.secondary }}>{item.usage}</p>
                </div>
              </div>
            ))}

            <div className="flex flex-col items-center gap-6">
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  borderRadius: RADIUS["2xl"],
                  border: `1px solid ${tokens.borderColor.level1}`,
                  backgroundColor: tokens.bgColor.container,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "40%", height: "40%", borderRadius: 9999, border: `3px solid ${tokens._meta.brandColor}`, backgroundColor: tokens.bgColor.page, position: "relative" }}>
                  <div style={{ width: 20, height: 20, borderRadius: 999, backgroundColor: tokens.bgColor.brandLight, position: "absolute", left: "20%", top: "50%", transform: "translateY(-50%)" }} />
                </div>
              </div>
              <div className="text-center">
                <p className="text-lg font-medium mb-1" style={{ color: tokens.textColor.primary }}>胶囊型</p>
                <p className="text-sm" style={{ color: tokens.textColor.secondary }}>强调性按钮与入口容器</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>圆角嵌套规则 ⭐</h2>
        <div style={panelStyle}>
          <div className="grid grid-cols-2 gap-12">
            <div className="flex items-center justify-center">
              <div
                style={{
                  width: 300,
                  height: 300,
                  borderRadius: RADIUS["4xl"],
                  border: `2px solid ${tokens.borderColor.level2}`,
                  padding: SPACING["3"],
                  position: "relative",
                }}
              >
                <div style={{ width: "100%", height: "100%", borderRadius: RADIUS.xl, border: `2px solid ${tokens.borderColor.level2}`, backgroundColor: tokens.bgColor.container }} />
                <div style={{ position: "absolute", top: -12, left: 0, color: tokens.functionalColor.error.main, fontSize: 24, fontWeight: 600 }}>R</div>
                <div style={{ position: "absolute", top: 18, left: 48, color: tokens.functionalColor.error.main, fontSize: 24, fontWeight: 600 }}>r</div>
                <div style={{ position: "absolute", left: -10, top: 110, color: tokens.textColor.link, fontSize: 14, fontWeight: 600 }}>间距</div>
                <div style={{ position: "absolute", bottom: -36, left: 0, color: tokens.textColor.secondary, fontSize: 12 }}>R 指外层圆角半径，r 指内层圆角半径</div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-6">
              {[
                { title: "r = R - 间距", desc: "内圆角 = 外圆角 - 内外元素间距", bg: tokens.functionalColor.info.light, text: tokens.functionalColor.info.main },
                { title: "R ≥ 18px，最小 r = 12px", desc: "外圆角大于等于 18px 时，内圆角不应小于 12px", bg: tokens.functionalColor.success.light, text: tokens.functionalColor.success.main },
                { title: "R = 12px，最小 r = 6px", desc: "外圆角等于 12px 时，内圆角最小可为 6px", bg: tokens.functionalColor.warning.light, text: tokens.functionalColor.warning.main },
              ].map((rule) => (
                <div key={rule.title} style={{ padding: SPACING["4"], borderRadius: RADIUS.xl, backgroundColor: rule.bg, borderLeft: `4px solid ${rule.text}` }}>
                  <p className="text-2xl font-bold mb-2" style={{ color: tokens.textColor.primary }}>{rule.title}</p>
                  <p className="text-base" style={{ color: tokens.textColor.secondary }}>{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>应用示例</h2>
        <div className="grid grid-cols-2 gap-6">
          <div style={{ ...panelStyle, borderRadius: 30 }}>
            <h3 className="text-lg font-semibold mb-4" style={{ color: tokens.textColor.primary }}>卡片嵌套（30px 外圆角）</h3>
            <div style={{ padding: SPACING["4"], borderRadius: 18, backgroundColor: tokens.bgColor.container }}>
              <p className="text-sm mb-4" style={{ color: tokens.textColor.secondary }}>间距 12px，内圆角 = 30 - 12 = 18px</p>
              <div style={{ padding: SPACING["3"], borderRadius: 12, backgroundColor: tokens.bgColor.brandLight }}>
                <p className="text-xs" style={{ color: tokens.textColor.link }}>再次嵌套：间距 6px，内圆角 = 18 - 6 = 12px</p>
              </div>
            </div>
          </div>

          <div style={{ ...panelStyle, borderRadius: 30 }}>
            <h3 className="text-lg font-semibold mb-4" style={{ color: tokens.textColor.primary }}>按钮容器（30px 外圆角）</h3>
            <div className="flex gap-3">
              <button type="button" style={{ padding: `${SPACING["3"]}px ${SPACING["5"]}px`, borderRadius: 24, border: `1px solid ${tokens.textColor.primary}`, backgroundColor: tokens.textColor.primary, color: tokens.textColor.anti, fontWeight: 600 }}>
                主按钮 (24px)
              </button>
              <button type="button" style={{ padding: `${SPACING["3"]}px ${SPACING["5"]}px`, borderRadius: 24, border: `1px solid ${tokens.borderColor.level2}`, backgroundColor: tokens.bgColor.component, color: tokens.textColor.primary, fontWeight: 600 }}>
                次按钮 (24px)
              </button>
            </div>
            <p className="text-xs mt-4" style={{ color: tokens.textColor.tertiary }}>间距 6px，内圆角 = 30 - 6 = 24px</p>
          </div>
        </div>
      </div>

      <div style={guidePanelStyle}>
        <h3 className="text-base font-semibold mb-3">💡 设计原则</h3>
        <ul className="text-sm space-y-2" style={{ color: tokens.textColor.secondary }}>
          <li>• 圆角嵌套遵循 `r = R - 间距` 的原则，确保视觉和谐。</li>
          <li>• 最小圆角建议从 6px 起步，避免细碎尖锐的视觉感受。</li>
          <li>• 大面板优先使用 30px 或 42px，营造柔和稳定的车机观感。</li>
          <li>• 小组件优先使用 12px - 24px，保持精致而一致的交互形态。</li>
        </ul>
      </div>
    </div>
  );
}
