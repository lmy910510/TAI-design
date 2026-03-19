import { useOutletContext } from "react-router-dom";
import { Card, Divider, RADIUS, SPACING, createColors } from "@tai-design/components";

export function DividerPage() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const colors = createColors(isDark);

  const tagStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 36,
    paddingLeft: SPACING["2"],
    paddingRight: SPACING["2"],
    borderRadius: RADIUS.xl,
    backgroundColor: colors.bg.secondary,
    border: `1px solid ${colors.border.default}`,
    color: colors.text.secondary,
    fontSize: 18,
    lineHeight: 1.5,
  } as const;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: SPACING["6"],
        paddingBottom: SPACING["6"] * 2,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: SPACING["3"] }}>
        <div style={tagStyle}>Components / 组件</div>
        <h1 style={{ margin: 0, fontSize: 42, lineHeight: 1.2, color: colors.text.primary }}>
          分割线 Divider
        </h1>
        <p style={{ margin: 0, fontSize: 24, lineHeight: 1.6, color: colors.text.tertiary }}>
          用统一的线条、留白和标签组织内容结构，避免页面里散落的硬编码边框与 <code>&lt;hr /&gt;</code>。
        </p>
      </div>

      <Card variant="white" isDark={isDark}>
        <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"] }}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, fontSize: 30, color: colors.text.primary }}>基础类型</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
              <div>
                <div style={{ fontSize: 24, color: colors.text.secondary, marginBottom: SPACING["2"] }}>
                  标准分割线
                </div>
                <Divider isDark={isDark} />
              </div>
              <div>
                <div style={{ fontSize: 24, color: colors.text.secondary, marginBottom: SPACING["2"] }}>
                  虚线分割线
                </div>
                <Divider isDark={isDark} variant="dashed" />
              </div>
              <div>
                <div style={{ fontSize: 24, color: colors.text.secondary, marginBottom: SPACING["2"] }}>
                  带标签的分割线
                </div>
                <Divider isDark={isDark} label="更多内容" />
              </div>
            </div>
          </div>

          <Divider isDark={isDark} />

          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, fontSize: 30, color: colors.text.primary }}>垂直分割</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr auto 1fr",
                gap: SPACING["4"],
                alignItems: "stretch",
              }}
            >
              <div
                style={{
                  minHeight: 120,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: RADIUS.xl,
                  backgroundColor: colors.bg.secondary,
                  color: colors.text.primary,
                  fontSize: 24,
                }}
              >
                驾驶模式
              </div>
              <Divider isDark={isDark} orientation="vertical" length={120} />
              <div
                style={{
                  minHeight: 120,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: RADIUS.xl,
                  backgroundColor: colors.bg.secondary,
                  color: colors.text.primary,
                  fontSize: 24,
                }}
              >
                空调设置
              </div>
              <Divider isDark={isDark} orientation="vertical" length={120} />
              <div
                style={{
                  minHeight: 120,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: RADIUS.xl,
                  backgroundColor: colors.bg.secondary,
                  color: colors.text.primary,
                  fontSize: 24,
                }}
              >
                辅助驾驶
              </div>
            </div>
          </div>

          <Divider isDark={isDark} />

          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, fontSize: 30, color: colors.text.primary }}>使用建议</h2>
            <ul
              style={{
                margin: 0,
                paddingLeft: SPACING["4"],
                display: "flex",
                flexDirection: "column",
                gap: SPACING["2"],
                color: colors.text.secondary,
                fontSize: 24,
                lineHeight: 1.6,
              }}
            >
              <li>优先使用组件，而不是在页面里直接写零散边框。</li>
              <li>同一区域保持统一粗细，默认使用 1px；强调场景再使用 2px。</li>
              <li>分割线前后留白统一使用 `SPACING`，避免 10px、15px 这类任意值。</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
