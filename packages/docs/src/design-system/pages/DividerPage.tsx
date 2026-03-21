import { useOutletContext } from "react-router-dom";
import { Card, Divider, RADIUS, SPACING, getTokens } from "@tai-design/components";
import { DocPageHeader, DocTokenTable } from "../DocComponents";

export function DividerPage() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const tokens = getTokens(isDark);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: SPACING["6"],
        paddingBottom: SPACING["6"] * 2,
      }}
    >
      <DocPageHeader category="Components / 组件" title="分割线 Divider" description={<>用统一的线条、留白和标签组织内容结构，避免页面里散落的硬编码边框与 <code>&lt;hr /&gt;</code>。</>} />

      <Card variant="white" isDark={isDark}>
        <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"] }}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>基础类型</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
              <div>
                <div style={{ fontSize: 24, color: tokens.textColor.secondary, marginBottom: SPACING["2"] }}>
                  标准分割线
                </div>
                <Divider isDark={isDark} />
              </div>
              <div>
                <div style={{ fontSize: 24, color: tokens.textColor.secondary, marginBottom: SPACING["2"] }}>
                  虚线分割线
                </div>
                <Divider isDark={isDark} variant="dashed" />
              </div>
              <div>
                <div style={{ fontSize: 24, color: tokens.textColor.secondary, marginBottom: SPACING["2"] }}>
                  带标签的分割线
                </div>
                <Divider isDark={isDark} label="更多内容" />
              </div>
            </div>
          </div>

          <Divider isDark={isDark} />

          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>垂直分割</h2>
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
                  backgroundColor: tokens.bgColor.container,
                  color: tokens.textColor.primary,
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
                  backgroundColor: tokens.bgColor.container,
                  color: tokens.textColor.primary,
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
                  backgroundColor: tokens.bgColor.container,
                  color: tokens.textColor.primary,
                  fontSize: 24,
                }}
              >
                辅助驾驶
              </div>
            </div>
          </div>

          <Divider isDark={isDark} />

          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>使用建议</h2>
            <ul
              style={{
                margin: 0,
                paddingLeft: SPACING["4"],
                display: "flex",
                flexDirection: "column",
                gap: SPACING["2"],
                color: tokens.textColor.secondary,
                fontSize: 24,
                lineHeight: 1.6,
              }}
            >
              <li>优先使用组件，而不是在页面里直接写零散边框。</li>
              <li>同一区域保持统一粗细，默认使用 1px；强调场景再使用 2px。</li>
              <li>分割线前后留白统一使用 `SPACING`，避免 10px、15px 这类任意值。</li>
            </ul>
          </div>
          <Divider isDark={isDark} />

          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>🎨 Token 使用清单</h2>
            <DocTokenTable
              rows={[
                { part: "线条颜色", token: "tokens.borderColor.level1", desc: "分割线颜色，轻量级分隔", color: tokens.borderColor.level1 },
                { part: "标签文字", token: "tokens.textColor.tertiary", desc: "带标签分割线上的辅助文字", color: tokens.textColor.tertiary },
              ]}
              note={<>
                <strong>排版 Token：</strong>标签文字使用 <code>tokens.typography.meta.caption</code> (24px/400/1.5)。
                <br />
                <strong>布局常量：</strong>前后间距使用 <code>SPACING["2"]</code> (12px) / <code>SPACING["4"]</code> (24px)，通过 <code>spacing</code> prop 配置。
              </>}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
