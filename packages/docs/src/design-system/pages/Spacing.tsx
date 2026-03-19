import { useOutletContext } from "react-router-dom";

// 基于6px的栅格系统
const spacingScale = [
  { multiplier: "0.5n", value: 3, usage: "极小间距，用于紧凑布局" },
  { multiplier: "n", value: 6, usage: "最小间距单位" },
  { multiplier: "2n", value: 12, usage: "紧凑间距" },
  { multiplier: "3n", value: 18, usage: "常规小间距" },
  { multiplier: "4n", value: 24, usage: "常规间距" },
  { multiplier: "5n", value: 30, usage: "中等间距" },
  { multiplier: "6n", value: 36, usage: "较大间距" },
  { multiplier: "7n", value: 42, usage: "大间距" },
  { multiplier: "8n", value: 48, usage: "超大间距" },
  { multiplier: "9n", value: 60, usage: "区域分隔" },
  { multiplier: "10n", value: 66, usage: "页面边距" },
];

// 常用间距场景
const commonUseCases = [
  {
    name: "组件内边距",
    examples: [
      { spacing: "2n (12px)", usage: "小按钮内边距" },
      { spacing: "3n (18px)", usage: "常规按钮内边距" },
      { spacing: "4n (24px)", usage: "卡片内边距" },
      { spacing: "5n (30px)", usage: "大卡片内边距" },
    ],
  },
  {
    name: "元素间距",
    examples: [
      { spacing: "n (6px)", usage: "标签之间、图标与文字" },
      { spacing: "2n (12px)", usage: "列表项内元素间距" },
      { spacing: "3n (18px)", usage: "卡片内元素间距" },
      { spacing: "4n (24px)", usage: "段落间距" },
    ],
  },
  {
    name: "布局间距",
    examples: [
      { spacing: "4n (24px)", usage: "卡片之间间距" },
      { spacing: "5n (30px)", usage: "页面内容区块间距" },
      { spacing: "7n (42px)", usage: "页面边距" },
      { spacing: "8n (48px)", usage: "大区块分隔" },
    ],
  },
];

export function Spacing() {
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
        <h1 className="text-4xl font-bold mb-4">栅格类型</h1>
        <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          栅格设计原则，遵循统一的 6px 栅格系统，间距使用 6 的倍数，如12、18、24、30。适合大部分车机端屏幕尺寸。
        </p>
      </div>

      {/* 定义 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">定义</h2>
        <div
          className={`p-6 border rounded-xl ${
            isDark
              ? "bg-gradient-to-r from-orange-600/10 to-amber-600/10 border-orange-500/20"
              : "bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200"
          }`}
        >
          <div className="space-y-3">
            <p className={`text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              <strong className={isDark ? "text-white" : "text-gray-900"}>n = 6px</strong> - 车机端以6px为基准单位，相比传统Web端的4px或8px栅格系统，更适合车机大屏场景。
            </p>
            <p className={`text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              所有间距、内边距、外边距都应该是6的倍数，确保视觉对齐和一致性。这个系统能够在不同尺寸的车机屏幕上保持良好的比例和可读性。
            </p>
          </div>
        </div>
      </div>

      {/* 间距规范表 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">间距规范</h2>
        <div
          className={`p-8 border rounded-xl overflow-x-auto ${
            isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-[#f6f7fa] border-gray-200"
          }`}
        >
          <div className="flex gap-0 min-w-max">
            {spacingScale.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center px-6 py-3 border border-black/10 ${
                  index === 0 ? "rounded-l-lg" : ""
                } ${index === spacingScale.length - 1 ? "rounded-r-lg" : ""} ${
                  isDark ? "bg-[#1a1a1a]" : "bg-white"
                }`}
                style={{ minWidth: "100px" }}
              >
                <p className={`text-xs mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {item.multiplier}
                </p>
                <p className="text-lg font-semibold text-[#0052d9]">{item.value}px</p>
              </div>
            ))}
            {/* xn 扩展 */}
            <div
              className={`flex flex-col items-center justify-center px-6 py-3 border border-black/10 rounded-r-lg ${
                isDark ? "bg-[#1a1a1a]" : "bg-white"
              }`}
              style={{ minWidth: "100px" }}
            >
              <p className={`text-xs mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>xn</p>
              <p className="text-lg font-semibold text-[#0052d9]">...</p>
            </div>
          </div>
        </div>
      </div>

      {/* 可视化展示 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">间距可视化</h2>
        <div
          className={`p-8 border rounded-xl ${
            isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"
          }`}
        >
          <div className="space-y-6">
            {spacingScale.slice(0, 9).map((item, index) => (
              <div key={index} className="flex items-center gap-6">
                {/* 标签 */}
                <div className="w-32 flex-shrink-0">
                  <p className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                    {item.multiplier}
                  </p>
                  <p className="text-xs text-[#0052d9]">{item.value}px</p>
                </div>

                {/* 可视化方块 */}
                <div className="flex items-center gap-3">
                  <div
                    className="bg-[#0052d9] rounded"
                    style={{
                      width: `${item.value * 2}px`,
                      height: "24px",
                    }}
                  />
                  <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {item.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 常用场景 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">常用场景</h2>
        <div className="grid grid-cols-3 gap-6">
          {commonUseCases.map((useCase, index) => (
            <div
              key={index}
              className={`p-6 border rounded-xl ${
                isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"
              }`}
            >
              <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                {useCase.name}
              </h3>
              <div className="space-y-3">
                {useCase.examples.map((example, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-sm font-medium text-[#0052d9]">{example.spacing}</p>
                    <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      {example.usage}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ���用示例 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">应用示例</h2>
        <div className="grid grid-cols-2 gap-6">
          {/* 卡片示例 */}
          <div
            className={`border rounded-xl ${isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"}`}
            style={{ padding: "24px" }}
          >
            <h3 className={`text-base font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
              卡片内边距：4n (24px)
            </h3>
            <div
              className={`rounded-lg ${isDark ? "bg-[#0a0a0a]" : "bg-gray-50"}`}
              style={{ padding: "18px" }}
            >
              <p className={`text-sm mb-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                内容区域内边距：3n (18px)
              </p>
              <div className="flex gap-3">
                <button
                  className="px-4 py-2 rounded-lg bg-black text-white text-sm"
                  style={{ padding: "12px 18px" }}
                >
                  按钮内边距 2n×3n
                </button>
                <button
                  className={`px-4 py-2 rounded-lg border text-sm ${
                    isDark ? "border-gray-600 text-gray-300" : "border-gray-300 text-gray-700"
                  }`}
                  style={{ padding: "12px 18px" }}
                >
                  次按钮
                </button>
              </div>
            </div>
            <p className={`text-xs mt-3 ${isDark ? "text-gray-500" : "text-gray-500"}`}>
              按钮之间间距：2n (12px)
            </p>
          </div>

          {/* 列表示例 */}
          <div
            className={`border rounded-xl ${isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"}`}
            style={{ padding: "24px" }}
          >
            <h3 className={`text-base font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              列表内边距：4n (24px)
            </h3>
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className={`rounded-lg ${isDark ? "bg-[#0a0a0a]" : "bg-gray-50"}`}
                  style={{ padding: "12px" }}
                >
                  <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    列表项内边距：2n (12px)
                  </p>
                </div>
              ))}
            </div>
            <p className={`text-xs mt-3 ${isDark ? "text-gray-500" : "text-gray-500"}`}>
              列表项之间间距：2n (12px)
            </p>
          </div>
        </div>
      </div>

      {/* 栅格系统优势 */}
      <div
        className={`p-6 border rounded-xl ${
          isDark
            ? "bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border-blue-500/20"
            : "bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200"
        }`}
      >
        <h3 className="text-base font-semibold mb-3">💡 6px栅格系统优势</h3>
        <ul className={`text-sm space-y-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          <li>• <strong>车机适配</strong>：6px基准单位更适合车机大屏尺寸，比4px更大气，比8px更灵活</li>
          <li>• <strong>视觉对齐</strong>：所有元素按6px倍数对齐，确保界面整齐有序</li>
          <li>• <strong>可扩展性</strong>：支持0.5n (3px)到xn的灵活组合，适应各种场景</li>
          <li>• <strong>开发效率</strong>：统一的间距规范减少设计决策，提高开发一致性</li>
          <li>• <strong>适配性好</strong>：6的倍数能被常见屏幕尺寸整除，减少像素偏差</li>
        </ul>
      </div>
    </div>
  );
}