import { useOutletContext } from "react-router-dom";
import { Card, Image, createColors, RADIUS, SPACING } from "@tai-design/components";

const showcaseImage = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80";
const avatarImage = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80";

export function ImagePage() {
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
        <h1 className="text-2xl font-bold mb-4">图片 Image</h1>
        <p className="text-base" style={{ color: colors.text.tertiary }}>
          图片组件提供统一的圆角、占位态和主题适配，适用于封面、头像、缩略图等展示场景。
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">定义</h2>
        <p className="text-[28px]" style={{ color: colors.text.secondary }}>
          通过封装后的 Image 组件统一处理占位态、比例、圆角和暗色模式，避免页面中重复写图片容器样式。
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">类型</h2>
        <div style={sectionStyle}>
          <Card variant="gray" isDark={isDark}>
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
              <h3 className="text-4xl font-medium">基础图片</h3>
              <Image
                src={showcaseImage}
                alt="风景封面"
                aspectRatio="16 / 9"
                radius="2xl"
                isDark={isDark}
              />
              <p className="text-xl" style={{ color: colors.text.tertiary }}>
                适合横向内容卡片、文章封面、媒体海报。
              </p>
            </div>
          </Card>

          <Card variant="gray" isDark={isDark}>
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
              <h3 className="text-4xl font-medium">圆角与头像</h3>
              <div style={{ display: "flex", gap: SPACING["4"], alignItems: "center", flexWrap: "wrap" }}>
                <Image src={avatarImage} alt="方形头像" width={192} height={192} radius="2xl" isDark={isDark} />
                <Image src={avatarImage} alt="圆形头像" width={192} height={192} radius="full" isDark={isDark} />
              </div>
              <p className="text-xl" style={{ color: colors.text.tertiary }}>
                通过统一 radius token 管理头像、方图和运营图样式。
              </p>
            </div>
          </Card>

          <Card variant="gray" isDark={isDark}>
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
              <h3 className="text-4xl font-medium">缩略图组</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: SPACING["3"] }}>
                {[showcaseImage, avatarImage, undefined, showcaseImage].map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`缩略图 ${index + 1}`}
                    aspectRatio="1 / 1"
                    radius="xl"
                    isDark={isDark}
                    placeholderLabel={`图 ${index + 1}`}
                  />
                ))}
              </div>
              <p className="text-xl" style={{ color: colors.text.tertiary }}>
                统一网格密度和占位样式，适合相册、图库、商品列表。
              </p>
            </div>
          </Card>

          <Card variant="gray" isDark={isDark}>
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
              <h3 className="text-4xl font-medium">加载与占位</h3>
              <Image
                alt="占位图片"
                aspectRatio="4 / 3"
                radius="2xl"
                isDark={isDark}
                placeholderLabel="加载中..."
              />
              <p className="text-xl" style={{ color: colors.text.tertiary }}>
                没有图片源或加载失败时，组件内置占位态，避免布局抖动。
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
              <li>优先通过组件 props 管理圆角、比例和占位态，不在业务页面重复拼装图片容器。</li>
              <li>始终提供 alt 文案，保证可访问性和降级体验。</li>
              <li>封面图、头像图和缩略图尽量复用统一 token，避免随意写死圆角和底色。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
