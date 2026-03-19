import { useOutletContext } from "react-router-dom";
import { Card, Video, createColors, RADIUS, SPACING } from "@tai-design/components";

const poster = "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80";

export function VideoPage() {
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
        <h1 className="text-2xl font-bold mb-4">视频 Video</h1>
        <p className="text-base" style={{ color: colors.text.tertiary }}>
          Video 组件统一封面、播放态、进度信息和安全锁定样式，适合车机端视频展示场景。
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">定义</h2>
        <p className="text-[28px]" style={{ color: colors.text.secondary }}>
          在车机场景中，视频展示不仅要有一致的播放器样式，还需要内置驾驶安全锁定等状态表达，减少业务层重复实现。
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">类型</h2>
        <div style={sectionStyle}>
          <Card variant="gray" isDark={isDark}>
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
              <h3 className="text-4xl font-medium">标准播放器</h3>
              <Video
                posterSrc={poster}
                posterAlt="视频播放器封面"
                currentTime="02:34"
                duration="08:12"
                progress={33}
                isDark={isDark}
              />
              <p className="text-xl" style={{ color: colors.text.tertiary }}>
                统一展示封面、播放按钮和底部进度信息，适合详情页或全屏前的预览态。
              </p>
            </div>
          </Card>

          <Card variant="gray" isDark={isDark}>
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
              <h3 className="text-4xl font-medium">缩略图预览</h3>
              <Video
                variant="thumbnail"
                posterSrc={poster}
                posterAlt="缩略图预览"
                duration="08:12"
                isDark={isDark}
              />
              <p className="text-xl" style={{ color: colors.text.tertiary }}>
                用于列表卡片和推荐位，保留最核心的播放入口和时长信息。
              </p>
            </div>
          </Card>

          <Card variant="gray" isDark={isDark}>
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
              <h3 className="text-4xl font-medium">驾驶安全锁定</h3>
              <Video
                variant="locked"
                posterSrc={poster}
                posterAlt="锁定播放"
                lockTitle="为了您的安全"
                lockDescription="车辆行驶中无法播放视频"
                isDark={isDark}
              />
              <p className="text-xl" style={{ color: colors.text.tertiary }}>
                通过统一锁定态提示替代业务页面自定义遮罩，保证安全表达一致。
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
              <li>视频封面、播放按钮、时长角标和安全提示统一走组件 props，不在页面内单独拼装。</li>
              <li>车机驾驶场景默认优先考虑锁定态展示，减少误触和不一致提示。</li>
              <li>建议列表页使用 `thumbnail`，详情页使用 `player`，受限场景直接切换到 `locked`。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
