import { useOutletContext } from "react-router-dom";

export function Section() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  return (
    <div className="pb-24">
      <div className="mb-12">
        <div className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
          isDark ? 'bg-white/10 border-white/20 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-900'
        }`}>
          Components / 组件
        </div>
        <h1 className="text-2xl font-bold mb-4">区块 Section</h1>
        <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          页面内容的语义化区块组件，用于组织和分隔不同的内容模块。
        </p>
      </div>

      {/* 定义 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">定义</h2>
        <p className={`text-[28px] ${isDark ? 'text-gray-300' : 'text-[rgba(0,0,0,0.7)]'}`}>
          Section 是页面内容的语义化分组容器，将相关内容组织在一起，提供清晰的视觉层次和内容结构。
        </p>
      </div>

      {/* 类型 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">类型</h2>
        <div className="space-y-12">
          
          {/* 基础区块 */}
          <div>
            <h3 className="text-2xl font-bold mb-6">基础区块</h3>
            <div className={`rounded-[36px] p-12 ${isDark ? 'bg-[#1A1D28]' : 'bg-white'}`}>
              <div className="space-y-6">
                <h4 className="text-3xl font-bold">区块标题</h4>
                <p className="text-xl text-[#646464]">区块内容描述文字，这里可以放置任何相关的内容元素。Section 为内容提供语义化的分组和合适的间距。</p>
              </div>
            </div>
            <p className="text-[#646464] text-base mt-4">最基础的内容区块，包含标题和内容</p>
          </div>

          {/* 带背景区块 */}
          <div>
            <h3 className="text-2xl font-bold mb-6">带背景区块</h3>
            <div className={`rounded-[36px] p-12 ${isDark ? 'bg-[#444C5C]' : 'bg-[#f6f7fa]'}`}>
              <div className="space-y-6">
                <h4 className="text-3xl font-bold">高亮区块</h4>
                <p className="text-xl text-[#646464]">使用背景色来突出显示重要的内容区域，适合用于特殊说明、提示信息或推荐内容。</p>
              </div>
            </div>
            <p className="text-[#646464] text-base mt-4">通过背景色区分不同重要程度的内容</p>
          </div>

          {/* 多列区块 */}
          <div>
            <h3 className="text-2xl font-bold mb-6">多列区块</h3>
            <div className={`rounded-[36px] p-12 ${isDark ? 'bg-[#1A1D28]' : 'bg-white'}`}>
              <h4 className="text-3xl font-bold mb-8">功能特性</h4>
              <div className="grid grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white text-2xl font-bold">1</div>
                  <h5 className="text-xl font-semibold">特性一</h5>
                  <p className="text-base text-[#646464]">详细的功能描述说明文字内容</p>
                </div>
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white text-2xl font-bold">2</div>
                  <h5 className="text-xl font-semibold">特性二</h5>
                  <p className="text-base text-[#646464]">详细的功能描述说明文字内容</p>
                </div>
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white text-2xl font-bold">3</div>
                  <h5 className="text-xl font-semibold">特性三</h5>
                  <p className="text-base text-[#646464]">详细的功能描述说明文字内容</p>
                </div>
              </div>
            </div>
            <p className="text-[#646464] text-base mt-4">区块内使用网格布局展示并列内容</p>
          </div>

          {/* 带边框区块 */}
          <div>
            <h3 className="text-2xl font-bold mb-6">带边框区块</h3>
            <div className={`rounded-[36px] p-12 border-2 ${isDark ? 'bg-[#1A1D28] border-[rgba(255,255,255,0.12)]' : 'bg-white border-[rgba(0,0,0,0.08)]'}`}>
              <div className="space-y-6">
                <h4 className="text-3xl font-bold">明确边界的区块</h4>
                <p className="text-xl text-[#646464]">使用边框明确区块的边界，适合需要强调区域范围的场景，如表单分组、信息卡片等。</p>
              </div>
            </div>
            <p className="text-[#646464] text-base mt-4">通过边框强调区块边界</p>
          </div>
        </div>
      </div>

      {/* 应用 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">应用</h2>
        <div className={`rounded-[36px] p-12 ${isDark ? 'bg-[#32394A]' : 'bg-[#f6f7fa]'}`}>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium mb-4">间距规范</h3>
              <ul className={`text-[24px] space-y-3 list-disc pl-8 ${isDark ? 'text-gray-300' : 'text-[rgba(0,0,0,0.7)]'}`}>
                <li>区块���间的间距：48px（8n）或 60px（10n）</li>
                <li>区块内部内边距：36px（6n）或 48px（8n）</li>
                <li>标题与内容间距：24px（4n）</li>
                <li>使用一致的间距创造统一的节奏感</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">使用场景</h3>
              <ul className={`text-[24px] space-y-3 list-disc pl-8 ${isDark ? 'text-gray-300' : 'text-[rgba(0,0,0,0.7)]'}`}>
                <li>组织首页的不同功能模块</li>
                <li>将长表单分组为多个区块</li>
                <li>设置页面的配置分类</li>
                <li>产品介绍的特性展示</li>
                <li>文章内容的章节划分</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}