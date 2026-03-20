import type { CSSProperties } from "react";
import svgPaths from "../../assets/svg-data/svg-yxp5sj61sx";
import { RADIUS, SHADOW, SPACING, useTheme } from "@tai-design/components";

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

  const sectionPanelStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.secondary,
  };

  const skeletonCanvasStyle: CSSProperties = {
    width: "100%",
    maxWidth: 900,
    aspectRatio: "1300 / 487.5",
    borderRadius: RADIUS.xl,
    backgroundColor: colors.bg.tertiary,
    position: "relative",
    overflow: "hidden",
    boxShadow: SHADOW.xl,
  };

  const ruleBorderColor = colors.loading.spinner;
  const helperPillStyle: CSSProperties = {
    width: 20,
    height: 20,
    borderRadius: 999,
    backgroundColor: colors.loading.spinner,
    color: colors.static.white,
    fontSize: 12,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div>
      <div className="mb-8">
        <div style={chipStyle}>Components / 组件</div>
        <h1 className="text-4xl font-bold mb-4">加载</h1>
        <p className="text-lg" style={{ color: colors.text.secondary }}>
          在网络较慢或数据量较大时，用一致的主题 token 表达加载中的状态反馈。
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">类型一：全局加载 / Toast 加载</h2>
        <div className="flex items-center justify-center" style={sectionPanelStyle}>
          <div
            className="flex items-center gap-6 px-12 py-6"
            style={{
              borderRadius: RADIUS["2xl"],
              backgroundColor: colors.toast.bg,
              boxShadow: SHADOW.xl,
            }}
          >
            <SpinnerLine className="w-12 h-12 [animation:spin_0.8s_linear_infinite]" color={colors.toast.text} />
            <span className="text-[32px] font-medium leading-none font-['Noto_Sans_S_Chinese']" style={{ color: colors.toast.text }}>
              加载中...
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">类型二：全局加载 / 组合骨架屏</h2>
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
                background: `linear-gradient(175deg, ${colors.bg.brandSubtle} 0%, ${colors.bg.secondary} 30.76%)`,
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
                backgroundColor: colors.bg.primary,
              }}
            />

            <div className="absolute" style={{ left: "3.125%", top: "6.25%", width: "15.93%", height: "8.333%", backgroundColor: colors.bg.secondary }} />
            <div className="absolute rounded-full" style={{ left: "90.3125%", top: "4.56%", width: "4.375%", height: "11.666%", backgroundColor: colors.bg.secondary }} />

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
              <div className="absolute inset-0" style={{ backgroundColor: colors.bg.secondary }} />
              <div
                className="absolute top-0 bottom-0 z-20 pointer-events-none"
                style={{
                  width: 200,
                  background: `linear-gradient(90deg, transparent, ${colors.bg.glass}, transparent)`,
                  animation: "skeleton-shine 2000ms cubic-bezier(0.42, 0, 0.58, 1) infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">类型三：局部加载 / 图标 + 文字</h2>
        <div className="flex items-center justify-center" style={sectionPanelStyle}>
          <div className="flex items-center gap-3">
            <SpinnerCircle className="w-9 h-9 [animation:spin_0.8s_linear_infinite]" color={colors.loading.spinner} />
            <span className="text-[28px] font-['Noto_Sans_S_Chinese']" style={{ color: colors.loading.text }}>
              松开加载下一页
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">规则</h2>
        <div className="flex items-center justify-center gap-24" style={sectionPanelStyle}>
          <div className="flex items-center gap-2 relative">
            <div className="relative p-1" style={{ border: `1px solid ${ruleBorderColor}` }}>
              <SpinnerCircle className="w-9 h-9 [animation:spin_0.8s_linear_infinite]" color={colors.loading.spinner} />
              <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 flex flex-col items-center">
                <div className="w-[1px] h-6" style={{ backgroundColor: ruleBorderColor }} />
                <div style={helperPillStyle}>1</div>
              </div>
            </div>

            <div className="relative p-1" style={{ border: `1px solid ${ruleBorderColor}` }}>
              <span className="text-[28px] font-['Noto_Sans_S_Chinese']" style={{ color: colors.loading.text }}>
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
                <div className="text-xl font-medium" style={{ color: colors.text.primary }}>进度指示</div>
                <div className="text-lg" style={{ color: colors.text.secondary }}>采用图标动效</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div style={helperPillStyle}>2</div>
              <div>
                <div className="text-xl font-medium" style={{ color: colors.text.primary }}>文字说明（模糊性加载方式）</div>
                <div className="text-lg" style={{ color: colors.text.secondary }}>显示当前加载状态</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          padding: SPACING["4"],
          borderRadius: RADIUS["2xl"],
          border: `1px solid ${colors.border.brand}`,
          background: `linear-gradient(to right, ${colors.bg.brandSubtle}, ${colors.bg.secondary})`,
        }}
      >
        <h3 className="text-base font-semibold mb-3">💡 设计原则</h3>
        <ul className="text-sm space-y-2" style={{ color: colors.text.secondary }}>
          <li>• 加载反馈应优先表达进度感，避免静止元素造成不确定性。</li>
          <li>• 骨架屏适合结构清晰的内容区，能帮助用户预判即将出现的信息布局。</li>
          <li>• Toast / 模态加载应减少层级噪音，聚焦状态反馈本身。</li>
          <li>• 页面示例直接复用 `colors.loading.*` 和背景语义 token。</li>
        </ul>
      </div>
    </div>
  );
}
