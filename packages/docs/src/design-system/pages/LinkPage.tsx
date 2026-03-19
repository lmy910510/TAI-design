import { useOutletContext } from "react-router-dom";

export function LinkPage() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  return (
    <div className="pb-24">
      <div className="mb-12">
        <div className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
          isDark ? 'bg-white/10 border-white/20 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-900'
        }`}>
          Components / 组件
        </div>
        <h1 className="text-2xl font-bold mb-4">链接 Link</h1>
        <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          文字链接用于跳转到另一个页面或网站，通常以下划线或特殊颜色标识。
        </p>
      </div>

      {/* 定义 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">定义</h2>
        <p className={`text-[28px] ${isDark ? 'text-gray-300' : 'text-[rgba(0,0,0,0.7)]'}`}>
          文字链接是一种可点击的文本元素，用于在应用内部或外部进行页面跳转，常用于导航、引用或相关内容的访问。
        </p>
      </div>

      {/* 类型 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">类型</h2>
        <div className={`rounded-[36px] p-12 ${isDark ? 'bg-[#1A1D28]' : 'bg-white'}`}>
          <div className="space-y-12">
            {/* 基础链接 */}
            <div>
              <h3 className="text-4xl font-medium mb-6">基础链接</h3>
              <div className="flex items-center gap-8">
                <a href="#" className="text-[#0052d9] text-[32px] hover:underline flex items-center gap-2">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  Link 链接
                </a>
              </div>
            </div>

            {/* 带标签的链接 */}
            <div>
              <h3 className="text-4xl font-medium mb-6">外部链接</h3>
              <div className="flex items-center gap-8">
                <a href="#" className="text-[#0052d9] text-[32px] hover:underline flex items-center gap-3">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  Link 链接
                  <span className="bg-[#f3f3f3] text-[#646464] text-[20px] px-3 py-1 rounded">Ext</span>
                </a>
              </div>
            </div>

            {/* 禁用状态 */}
            <div>
              <h3 className="text-4xl font-medium mb-6">禁用状态</h3>
              <div className="flex items-center gap-8">
                <span className="text-[rgba(0,0,0,0.26)] text-[32px] flex items-center gap-2 cursor-not-allowed">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  Link 链接
                </span>
              </div>
            </div>

            {/* 下划线样式 */}
            <div>
              <h3 className="text-4xl font-medium mb-6">下划线样式</h3>
              <div className="flex items-center gap-8">
                <a href="#" className="text-[#0052d9] text-[32px] underline flex items-center gap-2">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  Link 链接
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 应用 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">应用</h2>
        <div className="bg-[#f6f7fa] rounded-[36px] p-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium mb-4">使用场景</h3>
              <ul className={`text-[24px] space-y-3 list-disc pl-8 ${isDark ? 'text-gray-300' : 'text-[rgba(0,0,0,0.7)]'}`}>
                <li>导航菜单中的页面跳转</li>
                <li>文章或内容中的引用链接</li>
                <li>面包屑导航</li>
                <li>外部资源访问</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">设计规范</h3>
              <ul className={`text-[24px] space-y-3 list-disc pl-8 ${isDark ? 'text-gray-300' : 'text-[rgba(0,0,0,0.7)]'}`}>
                <li>链接颜色使用品牌主色 #0052d9</li>
                <li>悬停时显示下划线以增强交互反馈</li>
                <li>外部链接需添加 "Ext" 标识</li>
                <li>禁用状态使用 26% 透明度的黑色</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}