import { Button, Card, RADIUS, SPACING, useTheme } from "@tai-design/components";

export function CardPage() {
  const { colors } = useTheme();

  const sectionPanelStyle: React.CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["4xl"],
    backgroundColor: colors.bg.glass,
    border: `1px solid ${colors.border.strong}`,
  };

  const iconTileStyle: React.CSSProperties = {
    width: 72,
    height: 72,
    borderRadius: RADIUS.xl,
    backgroundColor: colors.bg.placeholder,
    color: colors.icon.secondary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 32,
    fontWeight: 700,
  };

  return (
    <div className="max-w-5xl pb-24">
      <div className="mb-8">
        <div
          className="mb-4 inline-block rounded-full border px-3 py-1 text-sm"
          style={{
            backgroundColor: colors.bg.code,
            borderColor: colors.border.default,
            color: colors.text.primary,
          }}
        >
          B. 展示类 (Display)
        </div>
        <h1 className="mb-4 text-4xl font-bold">Card 卡片</h1>
        <p className="text-lg" style={{ color: colors.text.tertiary }}>
          通用信息展示容器。车机端卡片具备大圆角（基于 6px 基准，通常为 30px 或 42px）、柔和的投影以及特定的高对比度层级，用于承载模块化的业务内容。
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <div className="mb-4">
            <h2 className="flex items-center gap-2 text-2xl font-bold">1. 基础背景卡片 (Base Card)</h2>
            <p className="mt-2" style={{ color: colors.text.tertiary }}>
              <strong style={{ color: colors.text.link }}>使用场景：</strong>
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
                    color: colors.text.primary,
                  }}
                >
                  空调设置
                </h3>
                <p style={{ fontSize: 28, lineHeight: "40px", color: colors.text.tertiary }}>
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
            <h2 className="flex items-center gap-2 text-2xl font-bold">
              2. 玻璃态透明卡片 (Glassmorphism / Transparent)
            </h2>
            <p className="mt-2" style={{ color: colors.text.tertiary }}>
              <strong style={{ color: colors.text.link }}>使用场景：</strong>
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
              style={{ backgroundColor: colors.bg.overlay }}
            />

            <div style={{ position: "relative", zIndex: 1, display: "flex", gap: SPACING["6"] }}>
              <Card
                variant="transparent"
                className="max-w-sm"
                style={{
                  backgroundColor: colors.bg.glass,
                  borderRadius: RADIUS["2xl"],
                  border: `1px solid ${colors.border.inverse}`,
                  backdropFilter: "blur(12px)",
                }}
              >
                <h3
                  style={{
                    fontSize: 32,
                    lineHeight: "48px",
                    fontWeight: 700,
                    marginBottom: SPACING["2"],
                    color: colors.static.white,
                  }}
                >
                  地图导航
                </h3>
                <p
                  style={{
                    fontSize: 28,
                    lineHeight: "40px",
                    marginBottom: SPACING["6"],
                    color: colors.static.white,
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
                  backgroundColor: colors.bg.overlay,
                  borderRadius: RADIUS["2xl"],
                  border: `1px solid ${colors.border.inverse}`,
                  backdropFilter: "blur(12px)",
                }}
              >
                <h3
                  style={{
                    fontSize: 32,
                    lineHeight: "48px",
                    fontWeight: 700,
                    marginBottom: SPACING["2"],
                    color: colors.static.white,
                  }}
                >
                  暗色玻璃态
                </h3>
                <p
                  style={{
                    fontSize: 28,
                    lineHeight: "40px",
                    marginBottom: SPACING["6"],
                    color: colors.static.white,
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
            <h2 className="flex items-center gap-2 text-2xl font-bold">3. 突出投影卡片 (Elevated)</h2>
            <p className="mt-2" style={{ color: colors.text.tertiary }}>
              <strong style={{ color: colors.text.link }}>使用场景：</strong>
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
                    backgroundColor: colors.bg.placeholder,
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
                      color: colors.text.primary,
                    }}
                  >
                    现在播放: 龙卷风
                  </h3>
                  <p style={{ fontSize: 28, lineHeight: "40px", color: colors.text.tertiary }}>
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
      </div>
    </div>
  );
}
