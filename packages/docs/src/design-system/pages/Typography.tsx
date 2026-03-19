import { useOutletContext } from "react-router-dom";

// 字体梯度定义
const typographyScale = [
  {
    category: "大字号",
    sizes: [
      { size: 72, lineHeight: "auto", weight: "Bold 900 / Medium 700", usage: "歌词高亮态" },
      { size: 60, lineHeight: "auto", weight: "Bold 900 / Medium 700", usage: "歌词普通态、播放器页大标题" },
      { size: 54, lineHeight: "auto", weight: "Bold 900 / Medium 700", usage: "页面唯一主标题" },
      { size: 48, lineHeight: "auto", weight: "Bold 900 / Medium 700", usage: "公里数 / 评分 / 价格 / 大卡片标题" },
    ],
  },
  {
    category: "常用字号",
    sizes: [
      { size: 42, lineHeight: "auto", weight: "Bold 900 / Medium 700 / Regular 500", usage: "页面主标题 / 卡片大标题" },
      { size: 36, lineHeight: "auto", weight: "Bold 900 / Medium 700 / Regular 500", usage: "列表主标题 / 数据展示 / 一级Tab" },
      { size: 32, lineHeight: "auto", weight: "Medium 700 / Regular 500", usage: "正文 / 副标题 / 二级Tab" },
      { size: 28, lineHeight: "auto", weight: "Medium 700 / Regular 500", usage: "说明文字" },
    ],
  },
  {
    category: "辅助字号",
    sizes: [
      { size: 24, lineHeight: "auto", weight: "Regular 500", usage: "辅助文字 / 标签文字" },
      { size: 22, lineHeight: "auto", weight: "Regular 500", usage: "图标辅助文字 / 备注文字等" },
    ],
  },
];

export function Typography() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  return (
    <div>
      <div className="mb-8">
        <div
          className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
            isDark
              ? "bg-white/10 border-white/20 text-gray-200"
              : "bg-gray-100 border-gray-300 text-gray-900"
          }`}
        >
          Foundation / 基础
        </div>
        <h1 className="text-4xl font-bold mb-4">Text 文本规范</h1>
        <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          车机端文本系统，确保不同距离和光线条件下的可读性
        </p>
      </div>

      {/* 字族 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">字族</h2>
        <div className="grid grid-cols-2 gap-6">
          <div
            className={`p-8 border rounded-xl flex flex-col items-center justify-center ${
              isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-[#f6f7fa] border-gray-200"
            }`}
            style={{ minHeight: "200px" }}
          >
            <p
              className={`text-5xl font-bold mb-3 ${
                isDark ? "text-white" : "text-black"
              }`}
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              Noto Sans SC
            </p>
            <p className={`text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              中文字体
            </p>
          </div>
          <div
            className={`p-8 border rounded-xl flex flex-col items-center justify-center ${
              isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-[#f6f7fa] border-gray-200"
            }`}
            style={{ minHeight: "200px" }}
          >
            <p
              className={`text-5xl font-bold mb-3 ${
                isDark ? "text-white" : "text-black"
              }`}
              style={{ fontFamily: "Gilroy, sans-serif" }}
            >
              Gilroy
            </p>
            <p className={`text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              数字/英文字体-营销场景
            </p>
          </div>
        </div>
      </div>

      {/* 字重 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">字重</h2>
        <div className="grid grid-cols-3 gap-4">
          <div
            className={`p-6 border rounded-xl flex flex-col items-center justify-center ${
              isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-[#f6f7fa] border-gray-200"
            }`}
            style={{ minHeight: "160px" }}
          >
            <p className={`text-4xl mb-2 ${isDark ? "text-white" : "text-black"}`} style={{ fontWeight: 500 }}>
              Regular
            </p>
            <p className={`text-3xl font-bold ${isDark ? "text-white" : "text-black"}`} style={{ fontFamily: "DIN, sans-serif" }}>
              500
            </p>
          </div>
          <div
            className={`p-6 border rounded-xl flex flex-col items-center justify-center ${
              isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-[#f6f7fa] border-gray-200"
            }`}
            style={{ minHeight: "160px" }}
          >
            <p className={`text-4xl mb-2 ${isDark ? "text-white" : "text-black"}`} style={{ fontWeight: 700 }}>
              Medium
            </p>
            <p className={`text-3xl font-bold ${isDark ? "text-white" : "text-black"}`} style={{ fontFamily: "DIN, sans-serif" }}>
              700
            </p>
          </div>
          <div
            className={`p-6 border rounded-xl flex flex-col items-center justify-center ${
              isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-[#f6f7fa] border-gray-200"
            }`}
            style={{ minHeight: "160px" }}
          >
            <p className={`text-4xl mb-2 ${isDark ? "text-white" : "text-black"}`} style={{ fontWeight: 900 }}>
              Bold
            </p>
            <p className={`text-3xl font-bold ${isDark ? "text-white" : "text-black"}`} style={{ fontFamily: "DIN, sans-serif" }}>
              900
            </p>
          </div>
        </div>
      </div>

      {/* 字号梯度 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">字号梯度</h2>
        
        {typographyScale.map((category, idx) => (
          <div key={idx} className="mb-8">
            <h3 className={`text-lg font-semibold mb-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              {category.category}
            </h3>
            
            {/* 表格 */}
            <div className={`border rounded-lg overflow-hidden ${isDark ? "border-[#2a2a2a]" : "border-gray-200"}`}>
              {/* 表头 */}
              <div
                className={`grid grid-cols-5 ${
                  isDark ? "bg-[#0052D9]" : "bg-[#0036bf]"
                }`}
              >
                <div className="px-4 py-3 text-center border-r border-black/10">
                  <p className="text-white text-sm font-medium">字号</p>
                </div>
                <div className="px-4 py-3 text-center border-r border-black/10">
                  <p className="text-white text-sm font-medium">示例</p>
                </div>
                <div className="px-4 py-3 text-center border-r border-black/10">
                  <p className="text-white text-sm font-medium">行高</p>
                </div>
                <div className="px-4 py-3 text-center border-r border-black/10">
                  <p className="text-white text-sm font-medium">字重</p>
                </div>
                <div className="px-4 py-3 text-center">
                  <p className="text-white text-sm font-medium">使用场景</p>
                </div>
              </div>

              {/* 表体 */}
              {category.sizes.map((item, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-5 ${
                    isDark ? "bg-[#141414]" : "bg-white"
                  } ${i !== category.sizes.length - 1 ? "border-b" : ""} ${
                    isDark ? "border-[#2a2a2a]" : "border-gray-100"
                  }`}
                >
                  <div className={`px-4 py-4 flex items-center justify-center border-r ${
                    isDark ? "border-[#2a2a2a]" : "border-gray-100"
                  }`}>
                    <p className={`text-base font-medium ${isDark ? "text-white" : "text-black"}`}>
                      {item.size}dp
                    </p>
                  </div>
                  <div className={`px-4 py-4 flex items-center justify-center border-r ${
                    isDark ? "border-[#2a2a2a]" : "border-gray-100"
                  }`}>
                    <p
                      className={isDark ? "text-white" : "text-black"}
                      style={{ fontSize: `${Math.min(item.size * 0.7, 48)}px`, fontWeight: 700 }}
                    >
                      Aa
                    </p>
                  </div>
                  <div className={`px-4 py-4 flex items-center justify-center border-r ${
                    isDark ? "border-[#2a2a2a]" : "border-gray-100"
                  }`}>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      {item.lineHeight}
                    </p>
                  </div>
                  <div className={`px-4 py-4 flex items-center justify-center border-r ${
                    isDark ? "border-[#2a2a2a]" : "border-gray-100"
                  }`}>
                    <p className={`text-xs text-center ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      {item.weight}
                    </p>
                  </div>
                  <div className="px-4 py-4 flex items-center">
                    <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      {item.usage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 使用示例 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">使用示例</h2>
        <div
          className={`p-8 border rounded-xl space-y-6 ${
            isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"
          }`}
        >
          <div>
            <p className={`text-xs mb-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
              页面主标题 - 42dp Bold
            </p>
            <h2 className={`${isDark ? "text-white" : "text-black"}`} style={{ fontSize: "42px", fontWeight: 900 }}>
              欢迎使用车机系统
            </h2>
          </div>
          <div>
            <p className={`text-xs mb-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
              列表主标题 - 36dp Medium
            </p>
            <h3 className={`${isDark ? "text-white" : "text-black"}`} style={{ fontSize: "36px", fontWeight: 700 }}>
              音乐播放列表
            </h3>
          </div>
          <div>
            <p className={`text-xs mb-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
              正文 - 32dp Regular
            </p>
            <p className={`${isDark ? "text-gray-300" : "text-gray-700"}`} style={{ fontSize: "32px", fontWeight: 500 }}>
              这是一段正文内容，用于展示常规文字的显示效果
            </p>
          </div>
          <div>
            <p className={`text-xs mb-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
              说明文字 - 28dp Regular
            </p>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`} style={{ fontSize: "28px", fontWeight: 500 }}>
              这是说明文字，提供额外的信息和提示
            </p>
          </div>
          <div>
            <p className={`text-xs mb-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
              辅助文字 - 24dp Regular
            </p>
            <p className={`${isDark ? "text-gray-500" : "text-gray-500"}`} style={{ fontSize: "24px", fontWeight: 500 }}>
              辅助文字和标签文字
            </p>
          </div>
        </div>
      </div>

      {/* 注意事项 */}
      <div
        className={`p-6 border rounded-xl ${
          isDark
            ? "bg-gradient-to-r from-orange-600/10 to-red-600/10 border-orange-500/20"
            : "bg-gradient-to-r from-orange-50 to-red-50 border-orange-200"
        }`}
      >
        <h3 className="text-base font-semibold mb-3">💡 设计原则</h3>
        <ul className={`text-sm space-y-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          <li>• 车机场景需考虑驾驶时的快速识别，字号普遍较大</li>
          <li>• 重要信息使用更大字号和更重字重</li>
          <li>• 行高默认使用 AUTO，确保文字垂直居中</li>
          <li>• 中文字体使用 Noto Sans SC，数字/英文营销场景使用 Gilroy</li>
          <li>• 建议在实际车机环境中测试字体可读性</li>
        </ul>
      </div>
    </div>
  );
}