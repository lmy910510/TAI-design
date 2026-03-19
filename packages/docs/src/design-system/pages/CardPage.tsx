import { useOutletContext } from "react-router-dom";
import { Card, Button } from "@tai-design/components";
import { c, BRAND, blueGray } from "../../data/colorTokens";

export function CardPage() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const colors = c(isDark);

  return (
    <div className="max-w-5xl pb-24">
      <div className="mb-8">
        <div className={`inline-block px-3 py-1 border rounded-full text-sm mb-4`} style={{
          backgroundColor: colors.bg.code,
          borderColor: colors.border.default,
          color: colors.text.primary
        }}>
          B. 展示类 (Display)
        </div>
        <h1 className="text-4xl font-bold mb-4">Card 卡片</h1>
        <p className="text-lg" style={{ color: colors.text.tertiary }}>
          通用信息展示容器。车机端卡片具备大圆角（基于 6px 基准，通常为 30px 或 42px）、柔和的投影以及特定的高对比度层级，用于承载模块化的业务内容。
        </p>
      </div>

      <div className="space-y-12">
        {/* 1. 基础白色卡片 */}
        <section>
          <div className="mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              1. 基础背景卡片 (Base Card)
            </h2>
            <p className="mt-2" style={{ color: colors.text.tertiary }}>
              <strong style={{ color: BRAND.blue }}>使用场景：</strong>最基础的容器，用于分组展示普通信息，如设置项、应用列表等。默认无明显外阴影，通过背景色与深色底色区分。
            </p>
          </div>
          
          <div className="p-12 border rounded-[42px]" style={{
            backgroundColor: colors.bg.glass,
            borderColor: colors.border.strong
          }}>
            <Card variant="white" isDark={isDark} className="max-w-md">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{
                  width: 72,
                  height: 72,
                  backgroundColor: isDark ? blueGray[90] : blueGray[10],
                  color: isDark ? blueGray[30] : blueGray[80],
                  borderRadius: 18,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 32,
                  fontWeight: 'bold'
                }}>
                  AC
                </div>
                <h3 style={{ fontSize: 32, lineHeight: '48px', fontWeight: 'bold', color: colors.text.primary }}>空调设置</h3>
                <p style={{ fontSize: 28, lineHeight: '40px', color: colors.text.tertiary }}>当前车内温度: 22°C</p>
                <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
                  <Button variant="secondary" className="flex-1">制冷</Button>
                  <Button variant="secondary" className="flex-1">制热</Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* 2. 透明卡片 */}
        <section>
          <div className="mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              2. 玻璃态透明卡片 (Glassmorphism / Transparent)
            </h2>
            <p className="mt-2" style={{ color: colors.text.tertiary }}>
              <strong style={{ color: BRAND.blue }}>使用场景：</strong>带有一定透明度或毛玻璃效果，通常用于叠加在地图导航或深色多媒体壁纸上方，不阻挡背景主视觉。
            </p>
          </div>
          
          <div className="p-12 border rounded-[42px] relative overflow-hidden" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', gap: 36 }}>
              <Card variant="transparent" className="max-w-sm backdrop-blur-md bg-white/20 border-white/30">
                <h3 style={{ fontSize: 32, lineHeight: '48px', fontWeight: 'bold', marginBottom: 12, color: '#fff' }}>地图导航</h3>
                <p style={{ fontSize: 28, lineHeight: '40px', marginBottom: 36, color: 'rgba(255,255,255,0.8)' }}>正在前往：深圳市南山区...</p>
                <Button variant="primary" className="w-full !bg-white !text-black">查看路线</Button>
              </Card>
              
              <Card variant="transparent" className="max-w-sm backdrop-blur-md bg-black/40 border-black/30">
                <h3 style={{ fontSize: 32, lineHeight: '48px', fontWeight: 'bold', marginBottom: 12, color: '#fff' }}>暗色玻璃态</h3>
                <p style={{ fontSize: 28, lineHeight: '40px', marginBottom: 36, color: 'rgba(255,255,255,0.8)' }}>更强的对比度展示...</p>
                <Button variant="secondary" className="w-full !bg-white/20 !text-white border-none">操作按钮</Button>
              </Card>
            </div>
          </div>
        </section>

        {/* 3. 突出投影卡片 */}
        <section>
          <div className="mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              3. 突出投影卡片 (Elevated)
            </h2>
            <p className="mt-2" style={{ color: colors.text.tertiary }}>
              <strong style={{ color: BRAND.blue }}>使用场景:</strong>带有长投影（利用冷灰 <code className="bg-black/5 px-1 py-0.5 rounded text-sm">Cold-gray-100 / #1A1D28</code> 降低透明度生成）。用于最重要的卡片（如正在播放的音乐、进行中的通话）或滑动感强、可交互的浮动组件。
            </p>
          </div>
          
          <div className="p-12 border rounded-[42px]" style={{
            backgroundColor: colors.bg.glass,
            borderColor: colors.border.strong
          }}>
            <Card variant="elevated" isDark={isDark} className="max-w-lg">
              <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
                <div style={{ 
                  width: 120, 
                  height: 120, 
                  backgroundColor: isDark ? blueGray[80] : blueGray[20], 
                  borderRadius: 18, 
                  overflow: 'hidden', 
                  flexShrink: 0 
                }}>
                  <img src="https://images.unsplash.com/photo-1510759704643-849552bf3b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Album Art" />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 36, lineHeight: '48px', fontWeight: 'bold', marginBottom: 12, color: colors.text.primary }}>现在播放: 龙卷风</h3>
                  <p style={{ fontSize: 28, lineHeight: '40px', color: colors.text.tertiary }}>车机音乐系统 · 流行</p>
                </div>
              </div>
              <div style={{ marginTop: 48, display: 'flex', gap: 18, width: '100%' }}>
                <Button variant="secondary" className="flex-1">上一首</Button>
                <Button variant="secondary" className="flex-1">暂停</Button>
                <Button variant="secondary" className="flex-1">下一首</Button>
              </div>
            </Card>
          </div>
        </section>

      </div>
    </div>
  );
}