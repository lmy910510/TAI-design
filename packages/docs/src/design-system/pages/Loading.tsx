import type { CSSProperties } from "react";
import svgPaths from "../../assets/svg-data/svg-yxp5sj61sx";
import { RADIUS, SHADOW, SPACING, STATIC, useTheme } from "@tai-design/components";
import { DocPageHeader } from "../DocComponents";

function SpinnerLine({ color, className = "" }: { color: string; className?: string }) {
  return (
    <svg className={`animate-spin ${className}`} viewBox="0 0 36 36" fill="none">
      <path clipRule="evenodd" d={svgPaths.p17b11700} fill={color} fillRule="evenodd" />
    </svg>
  );
}

function SpinnerCircle({ color, className = "" }: { color: string; className?: string }) {
  return (
    <svg className={`animate-spin ${className}`} viewBox="0 0 27 27" fill="none">
      <path clipRule="evenodd" d={svgPaths.p1d37e200} fill={color} fillRule="evenodd" />
    </svg>
  );
}

export function Loading() {
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

  const sectionPanelStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.container,
  };

  const skeletonCanvasStyle: CSSProperties = {
    width: "100%",
    maxWidth: 900,
    aspectRatio: "1300 / 487.5",
    borderRadius: RADIUS.xl,
    backgroundColor: tokens.bgColor.secondaryContainer,
    position: "relative",
    overflow: "hidden",
    boxShadow: SHADOW.xl,
  };

  const ruleBorderColor = tokens.functionalColor.brand.main;
  const helperPillStyle: CSSProperties = {
    width: 20,
    height: 20,
    borderRadius: 999,
    backgroundColor: tokens.functionalColor.brand.main,
    color: STATIC.white,
    fontSize: 12,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div>
      <DocPageHeader category="Components / 组件" title="加载" description="在网络较慢或数据量较大时，用一致的主题 token 表达加载中的状态反馈。" />

      <div className="mb-8">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>类型一：全局加载 / Toast 加载</h2>
        <div className="flex items-center justify-center" style={sectionPanelStyle}>
          <div
            className="flex items-center gap-6 px-12 py-6"
            style={{
              borderRadius: RADIUS["2xl"],
              backgroundColor: tokens.bgColor.secondaryContainer,
              boxShadow: SHADOW.xl,
            }}
          >
            <SpinnerLine className="w-12 h-12 [animation:spin_0.8s_linear_infinite]" color={tokens.textColor.anti} />
            <span className="text-[32px] font-medium leading-none font-['Noto_Sans_S_Chinese']" style={{ color: tokens.textColor.anti }}>
              加载中...
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>类型二：全局加载 / 组合骨架屏</h2>
        <style>
          {`
            @keyframes skeleton-shine {
              0% { left: -200px; opacity: 0; }
              5% { opacity: 0.8; }
              10% { opacity: 0.8; }
              85% { opacity: 0.8; }
              100% { left: 900px; opacity: 0; }
            }
          `}
        </style>
        <div className="flex justify-center" style={sectionPanelStyle}>
          <div style={skeletonCanvasStyle}>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(175deg, ${tokens.bgColor.brandLight} 0%, ${tokens.bgColor.container} 30.76%)`,
              }}
            />

            <div
              className="absolute"
              style={{
                left: "3.125%",
                top: "20.83%",
                width: "93.75%",
                height: "70.83%",
                borderRadius: `${RADIUS.xl}px`,
                backgroundColor: tokens.bgColor.page,
              }}
            />

            <div className="absolute" style={{ left: "3.125%", top: "6.25%", width: "15.93%", height: "8.333%", backgroundColor: tokens.bgColor.container }} />
            <div className="absolute rounded-full" style={{ left: "90.3125%", top: "4.56%", width: "4.375%", height: "11.666%", backgroundColor: tokens.bgColor.container }} />

            <div
              className="absolute inset-0 z-10"
              style={{
                maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1300 487.5'%3E%3Ccircle cx='367.656' cy='274.218' r='121.875' fill='black'/%3E%3Crect x='570.781' y='178.07' width='483.34' height='28.4375' fill='black'/%3E%3Ccircle cx='582.968' cy='258.984' r='12.1875' fill='black'/%3E%3Crect x='607.343' y='248.151' width='193.646' height='21.666' fill='black'/%3E%3Ccircle cx='582.968' cy='307.734' r='12.1875' fill='black'/%3E%3Crect x='607.343' y='296.901' width='193.646' height='21.666' fill='black'/%3E%3Ccircle cx='582.968' cy='356.484' r='12.1875' fill='black'/%3E%3Crect x='607.343' y='345.651' width='193.646' height='21.666' fill='black'/%3E%3C/svg%3E")`,
                maskSize: "100% 100%",
                maskRepeat: "no-repeat",
                WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1300 487.5'%3E%3Ccircle cx='367.656' cy='274.218' r='121.875' fill='black'/%3E%3Crect x='570.781' y='178.07' width='483.34' height='28.4375' fill='black'/%3E%3Ccircle cx='582.968' cy='258.984' r='12.1875' fill='black'/%3E%3Crect x='607.343' y='248.151' width='193.646' height='21.666' fill='black'/%3E%3Ccircle cx='582.968' cy='307.734' r='12.1875' fill='black'/%3E%3Crect x='607.343' y='296.901' width='193.646' height='21.666' fill='black'/%3E%3Ccircle cx='582.968' cy='356.484' r='12.1875' fill='black'/%3E%3Crect x='607.343' y='345.651' width='193.646' height='21.666' fill='black'/%3E%3C/svg%3E")`,
                WebkitMaskSize: "100% 100%",
                WebkitMaskRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0" style={{ backgroundColor: tokens.bgColor.container }} />
              <div
                className="absolute top-0 bottom-0 z-20 pointer-events-none"
                style={{
                  width: 200,
                  background: `linear-gradient(90deg, transparent, ${tokens.bgColor.glass}, transparent)`,
                  animation: "skeleton-shine 2000ms cubic-bezier(0.42, 0, 0.58, 1) infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>类型三：局部加载 / 图标 + 文字</h2>
        <div className="flex items-center justify-center" style={sectionPanelStyle}>
          <div className="flex items-center gap-3">
            <SpinnerCircle className="w-9 h-9 [animation:spin_0.8s_linear_infinite]" color={tokens.functionalColor.brand.main} />
            <span className="text-[28px] font-['Noto_Sans_S_Chinese']" style={{ color: tokens.textColor.secondary }}>
              松开加载下一页
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>规则</h2>
        <div className="flex items-center justify-center gap-24" style={sectionPanelStyle}>
          <div className="flex items-center gap-2 relative">
            <div className="relative p-1" style={{ border: `1px solid ${ruleBorderColor}` }}>
              <SpinnerCircle className="w-9 h-9 [animation:spin_0.8s_linear_infinite]" color={tokens.functionalColor.brand.main} />
              <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 flex flex-col items-center">
                <div className="w-[1px] h-6" style={{ backgroundColor: ruleBorderColor }} />
                <div style={helperPillStyle}>1</div>
              </div>
            </div>

            <div className="relative p-1" style={{ border: `1px solid ${ruleBorderColor}` }}>
              <span className="text-[28px] font-['Noto_Sans_S_Chinese']" style={{ color: tokens.textColor.secondary }}>
                松开加载下一页
              </span>
              <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 flex flex-col items-center">
                <div className="w-[1px] h-6" style={{ backgroundColor: ruleBorderColor }} />
                <div style={helperPillStyle}>2</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div style={helperPillStyle}>1</div>
              <div>
                <div className="text-xl font-medium" style={{ color: tokens.textColor.primary }}>进度指示</div>
                <div className="text-lg" style={{ color: tokens.textColor.secondary }}>采用图标动效</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div style={helperPillStyle}>2</div>
              <div>
                <div className="text-xl font-medium" style={{ color: tokens.textColor.primary }}>文字说明（模糊性加载方式）</div>
                <div className="text-lg" style={{ color: tokens.textColor.secondary }}>显示当前加载状态</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          padding: SPACING["4"],
          borderRadius: RADIUS["2xl"],
          border: `1px solid ${tokens.borderColor.brand}`,
          background: `linear-gradient(to right, ${tokens.bgColor.brandLight}, ${tokens.bgColor.container})`,
        }}
      >
        <h3 className="text-base font-semibold mb-3">💡 设计原则</h3>
        <ul className="text-sm space-y-2" style={{ color: tokens.textColor.secondary }}>
          <li>• 加载反馈应优先表达进度感，避免静止元素造成不确定性。</li>
          <li>• 骨架屏适合结构清晰的内容区，能帮助用户预判即将出现的信息布局。</li>
          <li>• Toast / 模态加载应减少层级噪音，聚焦状态反馈本身。</li>
          <li>• 页面示例直接复用 `functionalColor.brand.main`、`textColor.secondary` 等公开语义 token。</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>🎨 Token 使用清单</h2>
        <div
          style={{
            padding: SPACING["4"],
            borderRadius: RADIUS["2xl"],
            border: `1px solid ${tokens.borderColor.level1}`,
            backgroundColor: tokens.bgColor.container,
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${tokens.borderColor.level1}` }}>
                  {["部位", "组件级 Token", "公开语义 Token", "用途说明"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "10px 14px", color: tokens.textColor.secondary, fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {([
                  { part: "旋转图标", compToken: "tokens.functionalColor.brand.main", pubToken: "functionalColor.brand.main", desc: "加载动画主色", color: tokens.functionalColor.brand.main },
                  { part: "提示文字", compToken: "tokens.textColor.secondary", pubToken: "textColor.secondary", desc: "加载提示文案", color: tokens.textColor.secondary },
                  { part: "遮罩背景", compToken: "tokens.bgColor.overlay", pubToken: "bgColor.overlay", desc: "全局加载遮罩层", color: tokens.bgColor.overlay },
                  { part: "Toast 背景（全局加载）", compToken: "tokens.bgColor.secondaryContainer", pubToken: "bgColor.secondaryContainer", desc: "全局加载弹层背景", color: tokens.bgColor.secondaryContainer },
                  { part: "Toast 文字（全局加载）", compToken: "tokens.textColor.anti", pubToken: "textColor.anti", desc: "全局加载弹层文字", color: tokens.textColor.anti },
                ] as const).map((row) => (
                  <tr key={row.part} style={{ borderBottom: `1px solid ${tokens.borderColor.level1}` }}>
                    <td style={{ padding: "10px 14px", fontWeight: 500, color: tokens.textColor.primary }}>{row.part}</td>
                    <td style={{ padding: "10px 14px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 20, height: 20, borderRadius: 4, backgroundColor: row.color, border: `1px solid ${tokens.borderColor.level1}`, flexShrink: 0 }} />
                        <code style={{ fontSize: 12, color: tokens.textColor.link }}>{row.compToken}</code>
                      </div>
                    </td>
                    <td style={{ padding: "10px 14px" }}><code style={{ fontSize: 12, color: tokens.textColor.secondary }}>{row.pubToken}</code></td>
                    <td style={{ padding: "10px 14px", color: tokens.textColor.tertiary }}>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: SPACING["4"], padding: SPACING["3"], borderRadius: RADIUS.xl, backgroundColor: tokens.bgColor.elevated, border: `1px solid ${tokens.borderColor.level1}` }}>
            <p style={{ fontSize: 13, color: tokens.textColor.secondary, lineHeight: 1.6 }}>
              <strong>排版 Token：</strong>加载文字行高使用 <code>tokens.typography.body.primary.lineHeight</code> (1.4)。
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>颜色规范</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: SPACING["4"] }}>
          <div
            style={{
              padding: SPACING["4"],
              borderRadius: RADIUS["2xl"],
              border: `1px solid ${tokens.borderColor.level1}`,
              backgroundColor: tokens.bgColor.container,
            }}
          >
            <h3 className="text-lg font-semibold mb-4">加载动画</h3>
            <div className="text-sm" style={{ color: tokens.textColor.secondary }}>
              <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.functionalColor.brand.main, marginBottom: SPACING["2"] }} />
              <div className="font-mono" style={{ color: tokens.textColor.primary }}>{tokens.functionalColor.brand.main}</div>
              <div>Spinner 颜色（<code>functionalColor.brand.main</code>）</div>
            </div>
          </div>
          <div
            style={{
              padding: SPACING["4"],
              borderRadius: RADIUS["2xl"],
              border: `1px solid ${tokens.borderColor.level1}`,
              backgroundColor: tokens.bgColor.container,
            }}
          >
            <h3 className="text-lg font-semibold mb-4">加载文字</h3>
            <div className="text-sm" style={{ color: tokens.textColor.secondary }}>
              <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.textColor.secondary, marginBottom: SPACING["2"] }} />
              <div className="font-mono" style={{ color: tokens.textColor.primary }}>{tokens.textColor.secondary}</div>
              <div>加载提示文字（<code>textColor.secondary</code>）</div>
            </div>
          </div>
          <div
            style={{
              padding: SPACING["4"],
              borderRadius: RADIUS["2xl"],
              border: `1px solid ${tokens.borderColor.level1}`,
              backgroundColor: tokens.bgColor.container,
            }}
          >
            <h3 className="text-lg font-semibold mb-4">Toast 背景</h3>
            <div className="text-sm" style={{ color: tokens.textColor.secondary }}>
              <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.bgColor.secondaryContainer, marginBottom: SPACING["2"] }} />
              <div className="font-mono" style={{ color: tokens.textColor.primary }}>{tokens.bgColor.secondaryContainer}</div>
              <div>全局加载背景（<code>bgColor.secondaryContainer</code>）</div>
            </div>
          </div>
          <div
            style={{
              padding: SPACING["4"],
              borderRadius: RADIUS["2xl"],
              border: `1px solid ${tokens.borderColor.level1}`,
              backgroundColor: tokens.bgColor.container,
            }}
          >
            <h3 className="text-lg font-semibold mb-4">Toast 文字</h3>
            <div className="text-sm" style={{ color: tokens.textColor.secondary }}>
              <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.textColor.anti, marginBottom: SPACING["2"], border: `1px solid ${tokens.borderColor.level1}` }} />
              <div className="font-mono" style={{ color: tokens.textColor.primary }}>{tokens.textColor.anti}</div>
              <div>全局加载文字（<code>textColor.anti</code>）</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
