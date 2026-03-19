import { useOutletContext } from "react-router-dom";

export function Container() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  return (
    <div className="pb-24">
      <div className="mb-12">
        <div className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
          isDark ? 'bg-white/10 border-white/20 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-900'
        }`}>
          Components / 组件
        </div>
        <h1 className="text-2xl font-bold mb-4">容器 Container</h1>
        <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          页面内容的基础容器组件，用于控制内容宽度和对齐方式。
        </p>
      </div>

      {/* 定义 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">定义</h2>
        <p className={`text-[28px] ${isDark ? 'text-gray-300' : 'text-[rgba(0,0,0,0.7)]'}`}>
          Container 是布局的基础容器，为页面内容提供水平居中对齐和最大宽度限制，确保内容在不同屏幕尺寸下都能保持良好的可读性和布局。
        </p>
      </div>

      {/* 类型 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">类型</h2>
        <div className="space-y-12">
          
          {/* 固定宽度容器 */}
          <div>
            <h3 className="text-2xl font-bold mb-6">固定宽度容器</h3>
            <div className="bg-[#f5f5f5] p-12 rounded-[36px]">
              <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 border-2 border-dashed border-[rgba(0,0,0,0.2)]">
                <p className="text-xl text-center">最大宽度 1280px，内容居中</p>
              </div>
            </div>
            <p className="text-[#646464] text-base mt-4">适用于文章、表单等需要限制宽度的内容</p>
          </div>

          {/* 流式容器 */}
          <div>
            <h3 className="text-2xl font-bold mb-6">流式容器（Fluid）</h3>
            <div className="bg-[#f5f5f5] p-12 rounded-[36px]">
              <div className="w-full bg-white rounded-2xl p-8 border-2 border-dashed border-[rgba(0,0,0,0.2)]">
                <p className="text-xl text-center">100% 宽度，充满父容器</p>
              </div>
            </div>
            <p className="text-[#646464] text-base mt-4">适用于需要全宽展示的内容，如banner、图片墙</p>
          </div>

          {/* 带内边距容器 */}
          <div>
            <h3 className="text-2xl font-bold mb-6">带内边距容器</h3>
            <div className="bg-[#f5f5f5] p-12 rounded-[36px]">
              <div className="max-w-4xl mx-auto bg-white rounded-2xl border-2 border-dashed border-[rgba(0,0,0,0.2)]">
                <div className="p-12 bg-[#f9f9f9]">
                  <p className="text-xl">带有标准内边距的内容区域</p>
                  <p className="text-base text-[#646464] mt-2">内边距：48px（8n）</p>
                </div>
              </div>
            </div>
            <p className="text-[#646464] text-base mt-4">为内容提供呼吸空间，避免边缘贴边</p>
          </div>
        </div>
      </div>

      {/* 应用 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">应用</h2>
        <div className={`rounded-[36px] p-12 ${isDark ? 'bg-[#32394A]' : 'bg-[#f6f7fa]'}`}>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium mb-4">尺寸规范</h3>
              <ul className={`text-[24px] space-y-3 list-disc pl-8 ${isDark ? 'text-gray-300' : 'text-[rgba(0,0,0,0.7)]'}`}>
                <li>车机端标准容器宽度：1920px（全屏）</li>
                <li>窄屏容器：1280px（适合阅读）</li>
                <li>中等容器：1600px（平衡展示）</li>
                <li>内边距标准：24px、36px、48px（遵循 6px 栅格）</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">使用建议</h3>
              <ul className={`text-[24px] space-y-3 list-disc pl-8 ${isDark ? 'text-gray-300' : 'text-[rgba(0,0,0,0.7)]'}`}>
                <li>页面主内容使用固定宽度容器，确保可读性</li>
                <li>全屏展示（地图、视频）使用流式容器</li>
                <li>容器内部保持一致的内边距</li>
                <li>嵌套容器时注意避免过度限制宽度</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}