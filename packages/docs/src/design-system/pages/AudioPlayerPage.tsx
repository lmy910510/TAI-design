import { useOutletContext } from "react-router-dom";
import { AudioPlayer, Card, createColors, RADIUS, SPACING } from "@tai-design/components";

const cover = "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80";

export function AudioPlayerPage() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const colors = createColors(isDark);

  const sectionStyle = {
    backgroundColor: colors.bg.primary,
    borderRadius: RADIUS["2xl"],
    padding: SPACING["6"],
    display: "flex",
    flexDirection: "column" as const,
    gap: SPACING["5"],
  };

  return (
    <div className="pb-24">
      <div className="mb-12">
        <div
          className="inline-block px-3 py-1 border rounded-full text-sm mb-4"
          style={{
            backgroundColor: colors.bg.secondary,
            borderColor: colors.border.default,
            color: colors.text.primary,
          }}
        >
          Components / 组件
        </div>
        <h1 className="text-2xl font-bold mb-4">音频播放器 AudioPlayer</h1>
        <p className="text-base" style={{ color: colors.text.tertiary }}>
          AudioPlayer 组件统一封面、播放进度和控制按钮样式，适合音乐、播客和有声读物等场景。
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">定义</h2>
        <p className="text-[28px]" style={{ color: colors.text.secondary }}>
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
              <p className="text-xl" style={{ color: colors.text.tertiary }}>
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
              <p className="text-xl" style={{ color: colors.text.tertiary }}>
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
              <p className="text-xl" style={{ color: colors.text.tertiary }}>
                列表项保留封面、标题和时长，便于快速浏览播放队列。
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">应用</h2>
        <div style={{ ...sectionStyle, backgroundColor: colors.bg.secondary }}>
          <div>
            <h3 className="text-2xl font-medium mb-4">使用规范</h3>
            <ul className="text-[24px] space-y-3 list-disc pl-8" style={{ color: colors.text.secondary }}>
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
