import { useOutletContext } from "react-router-dom";
import { AudioPlayer, Card, getTokens, RADIUS, SPACING } from "@tai-design/components";
import { DocPageHeader } from "../DocComponents";

const cover = "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80";

export function AudioPlayerPage() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const tokens = getTokens(isDark);

  const sectionStyle = {
    backgroundColor: tokens.bgColor.page,
    borderRadius: RADIUS["2xl"],
    padding: SPACING["6"],
    display: "flex",
    flexDirection: "column" as const,
    gap: SPACING["5"],
  };

  return (
    <div className="pb-24">
      <DocPageHeader
        category="Components / 组件"
        title="音频播放器 AudioPlayer"
        description="AudioPlayer 组件统一封面、播放进度和控制按钮样式，适合音乐、播客和有声读物等场景。"
      />

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">定义</h2>
        <p className="text-[28px]" style={{ color: tokens.textColor.secondary }}>
          音频播放在车机端属于高频能力，组件化后可以统一控制按钮尺寸、信息层级和深浅主题表达，避免业务页面自行绘制播放器。
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">类型</h2>
        <div style={sectionStyle}>
          <Card variant="gray" isDark={isDark}>
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
              <h3 className="text-4xl font-medium">完整播放器</h3>
              <AudioPlayer
                variant="full"
                title="歌曲名称"
                subtitle="艺术家名称"
                coverSrc={cover}
                currentTime="02:34"
                duration="06:12"
                progress={34}
                playing
                isDark={isDark}
              />
              <p className="text-xl" style={{ color: tokens.textColor.tertiary }}>
                用于音乐详情、驻车娱乐场景和大屏播控页面。
              </p>
            </div>
          </Card>

          <Card variant="gray" isDark={isDark}>
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
              <h3 className="text-4xl font-medium">迷你播放器</h3>
              <AudioPlayer
                variant="mini"
                title="正在播放的歌曲名称"
                subtitle="艺术家"
                coverSrc={cover}
                playing={false}
                showTransportControls={false}
                isDark={isDark}
              />
              <p className="text-xl" style={{ color: tokens.textColor.tertiary }}>
                适合悬浮条、底部状态栏和快速控制区域。
              </p>
            </div>
          </Card>

          <Card variant="gray" isDark={isDark}>
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["3"] }}>
              <h3 className="text-4xl font-medium">播放列表项</h3>
              {[1, 2, 3].map((index) => (
                <AudioPlayer
                  key={index}
                  variant="list-item"
                  title={`歌曲名称 ${index}`}
                  subtitle="艺术家 · 专辑名称"
                  coverSrc={cover}
                  duration="03:45"
                  isDark={isDark}
                />
              ))}
              <p className="text-xl" style={{ color: tokens.textColor.tertiary }}>
                列表项保留封面、标题和时长，便于快速浏览播放队列。
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">🎨 Token 使用清单</h2>
        <div style={{ ...sectionStyle, backgroundColor: tokens.bgColor.container }}>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${tokens.borderColor.level1}` }}>
                  {["部位", "Token 路径", "用途说明"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "10px 14px", color: tokens.textColor.secondary, fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {([
                  { part: "卡片背景", token: "bgColor.elevated", desc: "播放器整体背景", color: tokens.bgColor.elevated },
                  { part: "封面占位背景", token: "bgColor.secondaryContainer", desc: "封面加载中的占位", color: tokens.bgColor.secondaryContainer },
                  { part: "控制按钮背景", token: "bgColor.container", desc: "非填充控制按钮底色", color: tokens.bgColor.container },
                  { part: "标题文字", token: "textColor.primary", desc: "歌曲名/全屏标题", color: tokens.textColor.primary },
                  { part: "副标题/图标", token: "textColor.tertiary", desc: "艺术家名/时间/辅助信息", color: tokens.textColor.tertiary },
                  { part: "播放按钮图标（反色）", token: "textColor.anti", desc: "填充按钮上的图标", color: tokens.textColor.anti },
                  { part: "封面占位图标", token: "textColor.disabled", desc: "无封面时的占位图标", color: tokens.textColor.disabled },
                  { part: "分隔线", token: "borderColor.level1", desc: "列表项分隔", color: tokens.borderColor.level1 },
                ] as const).map((row) => (
                  <tr key={row.part} style={{ borderBottom: `1px solid ${tokens.borderColor.level1}` }}>
                    <td style={{ padding: "10px 14px", fontWeight: 500, color: tokens.textColor.primary }}>{row.part}</td>
                    <td style={{ padding: "10px 14px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 20, height: 20, borderRadius: 4, backgroundColor: row.color, border: `1px solid ${tokens.borderColor.level1}`, flexShrink: 0 }} />
                        <code style={{ fontSize: 12, color: tokens.textColor.link }}>tokens.{row.token}</code>
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
              <strong>排版 Token：</strong>全屏标题使用 <code>tokens.typography.display.hero</code> (42px/700/1.2)，副标题 <code>tokens.typography.title.subsection</code> (30px/500/1.4)，正文 <code>tokens.typography.body.primary</code> (28px/400/1.4)，时间 <code>tokens.typography.meta.time</code> (22px/400/1)。
              <br />
              <strong>布局常量：</strong>阴影 <code>SHADOW.xl</code>，圆角 <code>RADIUS["2xl"]</code>/<code>RADIUS["4xl"]</code>/<code>RADIUS.xl</code>。
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">应用</h2>
        <div style={{ ...sectionStyle, backgroundColor: tokens.bgColor.container }}>
          <div>
            <h3 className="text-2xl font-medium mb-4">使用规范</h3>
            <ul className="text-[24px] space-y-3 list-disc pl-8" style={{ color: tokens.textColor.secondary }}>
              <li>优先使用组件内置的 `full`、`mini`、`list-item` 变体，不要在业务层重复做播放器布局。</li>
              <li>控制按钮需保持足够触控尺寸，统一由组件内部 token 管理。</li>
              <li>歌曲信息、进度条和封面图层级保持一致，减少不同业务线的视觉偏差。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
