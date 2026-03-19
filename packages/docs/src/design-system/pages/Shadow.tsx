import { useOutletContext } from "react-router-dom";
import svgPaths from "../../assets/svg-data/svg-y5u7qpt8mc";

// 投影规范定义
const shadowLevels = [
  {
    level: "-",
    name: "无投影",
    shadow: "none",
    usage: "不需要层级区分的元素",
    cssValue: "none",
  },
  {
    level: "XS",
    name: "基础投影",
    shadow: "0px 6px 12px 0px rgba(0,0,0,0.12)",
    usage: "适用于界面中的小型悬浮组件",
    cssValue: "0px 6px 12px 0px rgba(0,0,0,0.12)",
  },
  {
    level: "S",
    name: "中层投影",
    shadow: "0px 12px 18px 0px rgba(0,0,0,0.12)",
    usage: "适用于地图场景overlay等点线面",
    cssValue: "0px 12px 18px 0px rgba(0,0,0,0.12)",
  },
  {
    level: "M",
    name: "上层投影",
    shadow: "0px 12px 24px 0px rgba(0,0,0,0.12)",
    usage: "适用于卡片、气泡等常规组件",
    cssValue: "0px 12px 24px 0px rgba(0,0,0,0.12)",
  },
  {
    level: "L",
    name: "高层投影",
    shadow: "0px 18px 30px 0px rgba(0,0,0,0.06), 0px 30px 54px -24px rgba(0,0,0,0.12)",
    usage: "适用于弹窗、对话框等高层组件",
    cssValue: "0px 18px 30px 0px rgba(0,0,0,0.06), 0px 30px 54px -24px rgba(0,0,0,0.12)",
  },
  {
    level: "XL",
    name: "超高层投影",
    shadow: "0px 30px 24px -6px rgba(0,0,0,0.03), 0px 30px 90px -24px rgba(0,0,0,0.24)",
    usage: "适用于全局级弹窗、模态框等",
    cssValue: "0px 30px 24px -6px rgba(0,0,0,0.03), 0px 30px 90px -24px rgba(0,0,0,0.24)",
  },
];

export function Shadow() {
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
        <h1 className="text-4xl font-bold mb-4">投影规范</h1>
        <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          通过投影营造层次感，让界面元素具有空间深度
        </p>
      </div>

      {/* 定义 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">定义</h2>
        <div
          className={`p-6 border rounded-xl ${
            isDark
              ? "bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border-indigo-500/20"
              : "bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200"
          }`}
        >
          <p className={`text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            投影是营造界面层次感的重要手段，通过不同程度的投影可以区分元素的层级关系，引导用户注意力。合理使用投影能让界面更有空间感和立体感，同时避免过度使用造成视觉混乱。
          </p>
        </div>
      </div>

      {/* 投影层级展示 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">投影层级</h2>
        <div
          className={`p-12 border rounded-xl ${
            isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-[#f6f7fa] border-gray-200"
          }`}
        >
          {/* 示意图 */}
          <div className="flex items-center justify-between gap-8 mb-8">
            {shadowLevels.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-6 flex-1">
                {/* 投影卡片 */}
                <div
                  className={`w-full aspect-square rounded-[30px] ${
                    isDark ? "bg-[#1a1a1a]" : "bg-white"
                  }`}
                  style={{
                    boxShadow: item.shadow === "none" ? "none" : item.shadow,
                    maxWidth: "160px",
                  }}
                />
              </div>
            ))}
          </div>

          {/* 层级指示线 */}
          <div className="relative h-[40px] mb-6">
            <svg className="absolute w-full h-full" viewBox="0 0 1600 40" fill="none" preserveAspectRatio="none">
              <path d={svgPaths.p3bfbbb0} fill="#0036BF" />
            </svg>
          </div>

          {/* 文字说明 */}
          <div className="flex items-start justify-between gap-8">
            {shadowLevels.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center flex-1" style={{ maxWidth: "160px" }}>
                <p className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                  {item.level}
                  {item.level !== "-" && <span className="ml-2 text-base">{item.name}</span>}
                  {item.level === "-" && <span className="ml-2 text-base">无投影</span>}
                </p>
                <p className={`text-xs leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {item.usage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 详细参数 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">投影参数</h2>
        <div className={`border rounded-lg overflow-hidden ${isDark ? "border-[#2a2a2a]" : "border-gray-200"}`}>
          {/* 表头 */}
          <div className={`grid grid-cols-4 ${isDark ? "bg-[#0052D9]" : "bg-[#0036bf]"}`}>
            <div className="px-6 py-4 text-center border-r border-black/10">
              <p className="text-white text-sm font-medium">层级</p>
            </div>
            <div className="px-6 py-4 text-center border-r border-black/10">
              <p className="text-white text-sm font-medium">名称</p>
            </div>
            <div className="px-6 py-4 text-center border-r border-black/10">
              <p className="text-white text-sm font-medium">CSS值</p>
            </div>
            <div className="px-6 py-4 text-center">
              <p className="text-white text-sm font-medium">使用场景</p>
            </div>
          </div>

          {/* 表体 */}
          {shadowLevels.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 ${isDark ? "bg-[#141414]" : "bg-white"} ${
                index !== shadowLevels.length - 1 ? "border-b" : ""
              } ${isDark ? "border-[#2a2a2a]" : "border-gray-100"}`}
            >
              <div
                className={`px-6 py-4 flex items-center justify-center border-r ${
                  isDark ? "border-[#2a2a2a]" : "border-gray-100"
                }`}
              >
                <p className={`text-base font-semibold ${isDark ? "text-white" : "text-black"}`}>{item.level}</p>
              </div>
              <div
                className={`px-6 py-4 flex items-center justify-center border-r ${
                  isDark ? "border-[#2a2a2a]" : "border-gray-100"
                }`}
              >
                <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>{item.name}</p>
              </div>
              <div
                className={`px-6 py-4 flex items-center justify-center border-r ${
                  isDark ? "border-[#2a2a2a]" : "border-gray-100"
                }`}
              >
                <code
                  className={`text-xs px-3 py-1 rounded ${
                    isDark ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {item.cssValue}
                </code>
              </div>
              <div className="px-6 py-4 flex items-center justify-center">
                <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>{item.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 应用示例 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">应用示例</h2>
        <div className="grid grid-cols-3 gap-6">
          {/* XS 示例 - 小组件 */}
          <div
            className={`p-6 border rounded-xl ${isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"}`}
          >
            <h3 className={`text-base font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              XS - 小型悬浮组件
            </h3>
            <div className="flex flex-col gap-3">
              <div
                className={`px-4 py-2 rounded-lg ${isDark ? "bg-[#1a1a1a]" : "bg-white"}`}
                style={{ boxShadow: "0px 6px 12px 0px rgba(0,0,0,0.12)" }}
              >
                <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>Badge标签</p>
              </div>
              <div
                className={`px-4 py-2 rounded-lg ${isDark ? "bg-[#1a1a1a]" : "bg-white"}`}
                style={{ boxShadow: "0px 6px 12px 0px rgba(0,0,0,0.12)" }}
              >
                <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>Tooltip提示</p>
              </div>
            </div>
          </div>

          {/* M 示例 - 卡片 */}
          <div
            className={`p-6 border rounded-xl ${isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"}`}
          >
            <h3 className={`text-base font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              M - 常规卡片
            </h3>
            <div
              className={`p-6 rounded-xl ${isDark ? "bg-[#1a1a1a]" : "bg-white"}`}
              style={{ boxShadow: "0px 12px 24px 0px rgba(0,0,0,0.12)" }}
            >
              <h4 className={`text-sm font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>卡片标题</h4>
              <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>这是卡片内容示例</p>
            </div>
          </div>

          {/* XL 示例 - 弹窗 */}
          <div
            className={`p-6 border rounded-xl ${isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"}`}
          >
            <h3 className={`text-base font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              XL - 全局弹窗
            </h3>
            <div
              className={`p-6 rounded-xl ${isDark ? "bg-[#1a1a1a]" : "bg-white"}`}
              style={{
                boxShadow: "0px 30px 24px -6px rgba(0,0,0,0.03), 0px 30px 90px -24px rgba(0,0,0,0.24)",
              }}
            >
              <h4 className={`text-sm font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>模态弹窗</h4>
              <p className={`text-xs mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>最强的视觉层级</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded bg-black text-white text-xs">确定</button>
                <button
                  className={`px-3 py-1 rounded border text-xs ${
                    isDark ? "border-gray-600 text-gray-300" : "border-gray-300 text-gray-700"
                  }`}
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 暗色模式投影说明 */}
      {isDark && (
        <div
          className="p-6 border rounded-xl mb-8"
          style={{
            background: "linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1))",
            borderColor: "rgba(59, 130, 246, 0.2)",
          }}
        >
          <h3 className="text-base font-semibold mb-3 text-blue-400">💡 暗色模式投影提示</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            在暗色模式下，投影效果可能不如浅色模式明显。建议配合边框或背景色差异来增强层次感，必要时可以适当增加投影的不透明度或使用发光效果。
          </p>
        </div>
      )}

      {/* 注意事项 */}
      <div
        className={`p-6 border rounded-xl ${
          isDark
            ? "bg-gradient-to-r from-purple-600/10 to-pink-600/10 border-purple-500/20"
            : "bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200"
        }`}
      >
        <h3 className="text-base font-semibold mb-3">💡 设计原则</h3>
        <ul className={`text-sm space-y-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          <li>• 投影应遵循从小到大的层级原则，避免跳跃式使用</li>
          <li>• 同一界面中不要使用过多不同层级的投影，保持简洁</li>
          <li>• 投影方向应保持一致，建议从上往下（Y轴正向）</li>
          <li>• 暗色模式下投影效果较弱，可配合边框或背景色增强层次</li>
          <li>• 动态元素（如悬停、拖拽）可使用投影过渡动画提升体验</li>
        </ul>
      </div>
    </div>
  );
}