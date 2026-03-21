import { Button, Card, RADIUS, SPACING, STATIC, useTheme } from "@tai-design/components";
import { DocPageHeader } from "../DocComponents";

export function CardPage() {
  const { tokens } = useTheme();

  const sectionPanelStyle: React.CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["4xl"],
    backgroundColor: tokens.bgColor.glass,
    border: `1px solid ${tokens.borderColor.level2}`,
  };

  const iconTileStyle: React.CSSProperties = {
    width: 72,
    height: 72,
    borderRadius: RADIUS.xl,
    backgroundColor: tokens.bgColor.secondaryContainer,
    color: tokens.textColor.secondary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 32,
    fontWeight: 700,
  };

  return (
    <div className="max-w-5xl pb-24">
      <DocPageHeader
        category="B. 展示类 (Display)"
        title="Card 卡片"
        description="通用信息展示容器。车机端卡片具备大圆角（基于 6px 基准，通常为 30px 或 42px）、柔和的投影以及特定的高对比度层级，用于承载模块化的业务内容。"
      />

      <div className="space-y-12">
        <section>
          <div className="mb-4">
            <h2 style={{ margin: 0, display: "flex", alignItems: "center", gap: SPACING["2"], fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary }}>1. 基础背景卡片 (Base Card)</h2>
            <p className="mt-2" style={{ color: tokens.textColor.tertiary }}>
              <strong style={{ color: tokens.textColor.link }}>使用场景：</strong>
              最基础的容器，用于分组展示普通信息，如设置项、应用列表等。默认无明显外阴影，通过背景色与深色底色区分。
            </p>
          </div>

          <div style={sectionPanelStyle}>
            <Card variant="white" className="max-w-md">
              <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
                <div style={iconTileStyle}>AC</div>
                <h3
                  style={{
                    fontSize: 32,
                    lineHeight: "48px",
                    fontWeight: 700,
                    color: tokens.textColor.primary,
                  }}
                >
                  空调设置
                </h3>
                <p style={{ fontSize: 28, lineHeight: "40px", color: tokens.textColor.tertiary }}>
                  当前车内温度: 22°C
                </p>
                <div style={{ marginTop: SPACING["4"], display: "flex", gap: SPACING["2"] }}>
                  <Button variant="secondary" fullWidth>
                    制冷
                  </Button>
                  <Button variant="secondary" fullWidth>
                    制热
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section>
          <div className="mb-4">
            <h2 style={{ margin: 0, display: "flex", alignItems: "center", gap: SPACING["2"], fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary }}>
              2. 玻璃态透明卡片 (Glassmorphism / Transparent)
            </h2>
            <p className="mt-2" style={{ color: tokens.textColor.tertiary }}>
              <strong style={{ color: tokens.textColor.link }}>使用场景：</strong>
              带有一定透明度或毛玻璃效果，通常用于叠加在地图导航或深色多媒体壁纸上方，不阻挡背景主视觉。
            </p>
          </div>

          <div
            className="relative overflow-hidden"
            style={{
              ...sectionPanelStyle,
              backgroundImage:
                "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundColor: tokens.bgColor.overlay }}
            />

            <div style={{ position: "relative", zIndex: 1, display: "flex", gap: SPACING["6"] }}>
              <Card
                variant="transparent"
                className="max-w-sm"
                style={{
                  backgroundColor: tokens.bgColor.glass,
                  borderRadius: RADIUS["2xl"],
                  border: `1px solid ${tokens.borderColor.inverse}`,
                  backdropFilter: "blur(12px)",
                }}
              >
                <h3
                  style={{
                    fontSize: 32,
                    lineHeight: "48px",
                    fontWeight: 700,
                    marginBottom: SPACING["2"],
                    color: STATIC.white,
                  }}
                >
                  地图导航
                </h3>
                <p
                  style={{
                    fontSize: 28,
                    lineHeight: "40px",
                    marginBottom: SPACING["6"],
                    color: STATIC.white,
                    opacity: 0.8,
                  }}
                >
                  正在前往：深圳市南山区...
                </p>
                <Button variant="primary" fullWidth>
                  查看路线
                </Button>
              </Card>

              <Card
                variant="transparent"
                className="max-w-sm"
                style={{
                  backgroundColor: tokens.bgColor.overlay,
                  borderRadius: RADIUS["2xl"],
                  border: `1px solid ${tokens.borderColor.inverse}`,
                  backdropFilter: "blur(12px)",
                }}
              >
                <h3
                  style={{
                    fontSize: 32,
                    lineHeight: "48px",
                    fontWeight: 700,
                    marginBottom: SPACING["2"],
                    color: STATIC.white,
                  }}
                >
                  暗色玻璃态
                </h3>
                <p
                  style={{
                    fontSize: 28,
                    lineHeight: "40px",
                    marginBottom: SPACING["6"],
                    color: STATIC.white,
                    opacity: 0.8,
                  }}
                >
                  更强的对比度展示...
                </p>
                <Button variant="secondary" fullWidth>
                  操作按钮
                </Button>
              </Card>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4">
            <h2 style={{ margin: 0, display: "flex", alignItems: "center", gap: SPACING["2"], fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary }}>3. 突出投影卡片 (Elevated)</h2>
            <p className="mt-2" style={{ color: tokens.textColor.tertiary }}>
              <strong style={{ color: tokens.textColor.link }}>使用场景：</strong>
              带有长投影的高层级卡片，用于最重要的信息模块（如正在播放的音乐、进行中的通话）或滑动感较强的浮动内容。
            </p>
          </div>

          <div style={sectionPanelStyle}>
            <Card variant="elevated" className="max-w-lg">
              <div style={{ display: "flex", alignItems: "center", gap: SPACING["6"] }}>
                <div
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: RADIUS.xl,
                    overflow: "hidden",
                    flexShrink: 0,
                    backgroundColor: tokens.bgColor.secondaryContainer,
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1510759704643-849552bf3b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    alt="Album Art"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: 36,
                      lineHeight: "48px",
                      fontWeight: 700,
                      marginBottom: SPACING["2"],
                      color: tokens.textColor.primary,
                    }}
                  >
                    现在播放: 龙卷风
                  </h3>
                  <p style={{ fontSize: 28, lineHeight: "40px", color: tokens.textColor.tertiary }}>
                    车机音乐系统 · 流行
                  </p>
                </div>
              </div>
              <div style={{ marginTop: 48, display: "flex", gap: SPACING["3"], width: "100%" }}>
                <Button variant="secondary" fullWidth>
                  上一首
                </Button>
                <Button variant="secondary" fullWidth>
                  暂停
                </Button>
                <Button variant="secondary" fullWidth>
                  下一首
                </Button>
              </div>
            </Card>
          </div>
        </section>
        <section>
          <div className="mb-4">
            <h2 style={{ margin: 0, display: "flex", alignItems: "center", gap: SPACING["2"], fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary }}>🎨 Token 使用清单</h2>
          </div>
          <div style={sectionPanelStyle}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${tokens.borderColor.level2}` }}>
                    {["部位 / 变体", "Token 路径", "用途说明"].map((h) => (
                      <th key={h} style={{ textAlign: "left", padding: "10px 14px", color: tokens.textColor.secondary, fontWeight: 600 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {([
                    { part: "gray 变体背景", token: "tokens.bgColor.container", desc: "灰色底卡片容器背景", color: tokens.bgColor.container },
                    { part: "white 变体背景", token: "tokens.bgColor.page", desc: "白色底卡片（浅色白/深色主背景）", color: tokens.bgColor.page },
                    { part: "elevated 变体背景", token: "tokens.bgColor.elevated", desc: "悬浮卡片/弹出层背景", color: tokens.bgColor.elevated },
                    { part: "elevated 阴影", token: "SHADOW.xl", desc: "投影卡片统一阴影", color: tokens.bgColor.secondaryContainer },
                    { part: "transparent 变体", token: "（无背景色）", desc: "透明容器，由调用方叠加毛玻璃等效果", color: "transparent" },
                  ] as const).map((row) => (
                    <tr key={row.part} style={{ borderBottom: `1px solid ${tokens.borderColor.level1}` }}>
                      <td style={{ padding: "10px 14px", fontWeight: 500, color: tokens.textColor.primary }}>{row.part}</td>
                      <td style={{ padding: "10px 14px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div style={{ width: 20, height: 20, borderRadius: 4, backgroundColor: row.color, border: `1px solid ${tokens.borderColor.level1}`, flexShrink: 0 }} />
                          <code style={{ fontSize: 12, color: tokens.textColor.link }}>{row.token}</code>
                        </div>
                      </td>
                      <td style={{ padding: "10px 14px", color: tokens.textColor.tertiary }}>{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: SPACING["4"], padding: SPACING["3"], borderRadius: RADIUS.xl, backgroundColor: tokens.bgColor.elevated, border: `1px solid ${tokens.borderColor.level1}` }}>
              <p style={{ fontSize: 13, color: tokens.textColor.secondary, lineHeight: 1.6 }}>
                <strong>说明：</strong>Card 没有独立的组件级 token（如 <code>tokens.card.*</code>），直接使用公开语义 <code>bgColor</code> 和 <code>SHADOW</code> 常量。
                <br />
                <strong>布局常量：</strong>统一圆角 <code>RADIUS["2xl"]</code> (30px)，统一内边距 <code>SPACING["4"]</code> (24px)。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
