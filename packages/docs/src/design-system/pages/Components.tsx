import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Map as MapIcon, Square, ToggleRight } from "lucide-react";
import { RADIUS, SHADOW, SPACING, useTheme } from "@tai-design/components";

export function Components() {
  const { colors } = useTheme();

  const components = [
    {
      name: "底图组件",
      path: "/map",
      icon: MapIcon,
      description: "基于腾讯地图的车机端底图展示",
      status: "已完成",
    },
    {
      name: "按钮",
      path: "/button",
      icon: Square,
      description: "4 种尺寸、5 种样式变体的按钮组件",
      status: "已完成",
    },
    {
      name: "开关",
      path: "/switch",
      icon: ToggleRight,
      description: "功能开关组件，支持多种尺寸",
      status: "已完成",
    },
  ] as const;

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

  return (
    <div>
      <div className="mb-8">
        <div style={chipStyle}>Components / 组件</div>
        <h1 className="text-4xl font-bold mb-4">组件库</h1>
        <p className="text-lg" style={{ color: colors.text.secondary }}>
          车机端 UI 组件集合，包括底图、按钮、开关等基础与业务组件。
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {components.map((component) => {
          const Icon = component.icon;
          return (
            <Link
              key={component.path}
              to={component.path}
              style={{
                padding: SPACING["4"],
                borderRadius: RADIUS["2xl"],
                border: `1px solid ${colors.border.subtle}`,
                backgroundColor: colors.bg.elevated,
                boxShadow: SHADOW.xl,
                textDecoration: "none",
                transition: "transform 150ms ease, border-color 150ms ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: SPACING["3"] }}>
                <div
                  style={{
                    padding: SPACING["2"],
                    borderRadius: RADIUS.xl,
                    backgroundColor: colors.bg.secondary,
                    color: colors.text.secondary,
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: SPACING["2"], marginBottom: SPACING["2"] }}>
                    <h3 className="text-lg font-semibold" style={{ color: colors.text.primary }}>{component.name}</h3>
                    <span
                      style={{
                        padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`,
                        borderRadius: RADIUS.xl,
                        backgroundColor: colors.bg.successSubtle,
                        color: colors.text.success,
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      {component.status}
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: colors.text.secondary }}>{component.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
