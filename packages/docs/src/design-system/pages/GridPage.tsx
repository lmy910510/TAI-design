import { useOutletContext } from "react-router-dom";

export function GridPage() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  return (
    <div className="pb-24">
      <div className="mb-12">
        <div className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
          isDark ? 'bg-white/10 border-white/20 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-900'
        }`}>
          Components / 组件
        </div>
        <h1 className="text-2xl font-bold mb-4">网格 Grid</h1>
        <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          基于网格系统的布局容器，用于创建规则的多列布局。
        </p>
      </div>

      {/* 定义 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">定义</h2>
        <p className={`text-[28px] ${isDark ? 'text-gray-300' : 'text-[rgba(0,0,0,0.7)]'}`}>
          网格布局系统提供了一种简单而强大的方式来组织内容，特别适合展示卡片、图片墙、商品列表等规则排列的元素。
        </p>
      </div>

      {/* 类型 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">类型</h2>
        <div className="space-y-12">
          
          {/* 2列网格 */}
          <div>
            <h3 className="text-2xl font-bold mb-6">2列网格</h3>
            <div className={`rounded-[36px] p-12 ${isDark ? 'bg-[#1A1D28]' : 'bg-white'}`}>
              <div className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`rounded-2xl p-8 aspect-video flex items-center justify-center text-2xl font-medium ${
                    isDark ? 'bg-[#32394A]' : 'bg-[#f5f5f5]'
                  }`}>
                    项目 {i}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3列网格 */}
          <div>
            <h3 className="text-2xl font-bold mb-6">3列网格</h3>
            <div className={`rounded-[36px] p-12 ${isDark ? 'bg-[#1A1D28]' : 'bg-white'}`}>
              <div className="grid grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className={`rounded-2xl p-8 aspect-square flex items-center justify-center text-2xl font-medium ${
                    isDark ? 'bg-[#32394A]' : 'bg-[#f5f5f5]'
                  }`}>
                    {i}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4列网格 */}
          <div>
            <h3 className="text-2xl font-bold mb-6">4列网格</h3>
            <div className={`rounded-[36px] p-12 ${isDark ? 'bg-[#1A1D28]' : 'bg-white'}`}>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className={`rounded-xl p-6 aspect-square flex items-center justify-center text-xl font-medium ${
                    isDark ? 'bg-[#32394A]' : 'bg-[#f5f5f5]'
                  }`}>
                    {i}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 响应式网格 */}
          <div>
            <h3 className="text-2xl font-bold mb-6">响应式网格（自适应）</h3>
            <div className={`rounded-[36px] p-12 ${isDark ? 'bg-[#1A1D28]' : 'bg-white'}`}>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className={`rounded-2xl p-8 aspect-square flex items-center justify-center text-2xl font-medium ${
                    isDark ? 'bg-[#32394A]' : 'bg-[#f5f5f5]'
                  }`}>
                    {i}
                  </div>
                ))}
              </div>
              <p className={`text-base mt-6 ${isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[#646464]'}`}>自动适应容器宽度，每列最小200px</p>
            </div>
          </div>
        </div>
      </div>

      {/* 应用 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">应用</h2>
        <div className={`rounded-[36px] p-12 ${isDark ? 'bg-[#32394A]' : 'bg-[#f6f7fa]'}`}>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium mb-4">使用规范</h3>
              <ul className={`text-[24px] space-y-3 list-disc pl-8 ${isDark ? 'text-gray-300' : 'text-[rgba(0,0,0,0.7)]'}`}>
                <li>间距遵循 6px 基准栅格：12px、18px、24px、36px</li>
                <li>列数根据内容和屏幕尺寸选择，车机端常用 2-4 列</li>
                <li>保持网格单元的宽高比一致，提供视觉统一性</li>
                <li>使用响应式网格自适应不同分辨率</li>
                <li>避免网格过于密集，确保触摸目标足够大</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">使用场景</h3>
              <ul className={`text-[24px] space-y-3 list-disc pl-8 ${isDark ? 'text-gray-300' : 'text-[rgba(0,0,0,0.7)]'}`}>
                <li>图片画廊和相册展示</li>
                <li>商品列表和卡片排列</li>
                <li>应用图标网格</li>
                <li>仪表盘数据卡片</li>
                <li>功能入口模块</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}