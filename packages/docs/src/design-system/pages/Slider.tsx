import type { CSSProperties } from "react";
import SliderComponent from "../../figma-demos/滑块";
import { RADIUS, SHADOW, SPACING, useTheme } from "@tai-design/components";

export function SliderPage() {
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

  const previewShellStyle: CSSProperties = {
    overflowX: "auto",
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.elevated,
    boxShadow: SHADOW.xl,
  };

  return (
    <div className="pb-24">
      <div className="mb-12">
        <div style={chipStyle}>Components / 组件</div>
        <h1 className="text-4xl font-bold mb-4">滑块 Slider</h1>
        <p className="text-lg" style={{ color: colors.text.secondary }}>
          用于控制连续有限区间内的数值（或数值范围），文档页容器已统一迁移到主题 token。
        </p>
      </div>

      <div style={previewShellStyle}>
        <div className="w-[1920px]" style={{ zoom: 0.5, height: "100%" }}>
          <SliderComponent />
        </div>
      </div>
    </div>
  );
}
