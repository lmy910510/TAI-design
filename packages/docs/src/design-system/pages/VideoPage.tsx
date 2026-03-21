import { useOutletContext } from "react-router-dom";
import { Card, Video, getTokens, RADIUS, SPACING } from "@tai-design/components";
import { DocPageHeader } from "../DocComponents";

const poster = "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80";

export function VideoPage() {
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
        title="视频 Video"
        description="Video 组件统一封面、播放态、进度信息和安全锁定样式，适合车机端视频展示场景。"
      />

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">定义</h2>
        <p className="text-[28px]" style={{ color: tokens.textColor.secondary }}>
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
              <p className="text-xl" style={{ color: tokens.textColor.tertiary }}>
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
              <p className="text-xl" style={{ color: tokens.textColor.tertiary }}>
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
              <p className="text-xl" style={{ color: tokens.textColor.tertiary }}>
                通过统一锁定态提示替代业务页面自定义遮罩，保证安全表达一致。
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
                  { part: "封面占位背景", token: "bgColor.secondaryContainer", desc: "视频封面加载中/无封面时占位", color: tokens.bgColor.secondaryContainer },
                  { part: "遮罩层", token: "bgColor.overlay", desc: "锁定态遮罩背景", color: tokens.bgColor.overlay },
                  { part: "分隔线", token: "borderColor.level1", desc: "底栏分隔等", color: tokens.borderColor.level1 },
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
              <strong>说明：</strong>Video 组件内部大量 UI 元素（播放按钮、底栏、时间、锁定文字）直接使用固定色 <code>STATIC.white</code> 和 primitive 透明度色阶，因为视频播放器始终覆盖在深色封面之上。这些属于组件内部实现细节，不作为公开语义 token 暴露。
              <br />
              <strong>排版 Token：</strong>锁定标题 <code>tokens.typography.title.subsection</code>，时长标签 <code>tokens.typography.meta.caption</code>/<code>meta.time</code>/<code>meta.footnote</code>。
              <br />
              <strong>布局常量：</strong>圆角 <code>RADIUS["2xl"]</code>/<code>RADIUS["4xl"]</code>/<code>RADIUS.xl</code>。
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
