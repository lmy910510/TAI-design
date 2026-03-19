import { useOutletContext } from "react-router-dom";
import svgPaths from "../../assets/svg-data/svg-hdmsgah7po";
import img from "figma:asset/314bb264e85a6447024155857a8c2752ca626a47.png";
import img1 from "figma:asset/903ddbb40c313c48039d3567a8db8aa079539bb5.png";

// 圆角规范定义
const borderRadiusValues = [
  {
    value: 6,
    name: "最小圆角",
    usage: "极小场景，例如标签/Checkbox等",
    category: "minimum",
  },
  {
    value: 12,
    name: "内嵌圆角",
    usage: "内嵌圆角",
    category: "nested",
  },
  {
    value: 18,
    name: "内嵌圆角",
    usage: "内嵌圆角",
    category: "nested",
  },
  {
    value: 24,
    name: "内嵌圆角",
    usage: "操作按钮、内嵌圆角",
    category: "nested",
  },
  {
    value: 30,
    name: "面板圆角",
    usage: "卡片、弹窗",
    category: "panel",
  },
  {
    value: 42,
    name: "面板圆角",
    usage: "卡片、弹窗",
    category: "panel",
  },
];

export function BorderRadius() {
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
        <h1 className="text-4xl font-bold mb-4">圆角规范</h1>
        <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          规范统一的圆角搭配，提高品牌辨识度和视觉一致性
        </p>
      </div>

      {/* 定义 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">定义</h2>
        <div
          className={`p-6 border rounded-xl ${
            isDark
              ? "bg-gradient-to-r from-green-600/10 to-emerald-600/10 border-green-500/20"
              : "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200"
          }`}
        >
          <p className={`text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            圆角作为视觉调性的影响元素之一，规范统一的圆角搭配可以提高品牌的辨识度，提高产品视觉的规范性和一致性：以阶梯圆角值为原则的设定，可以加深品牌的感知，让界面更有层次，同时保持界面的一致性；赋予更多的变化和层次。
          </p>
        </div>
      </div>

      {/* 常用圆角 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">常用圆角</h2>
        <div
          className={`p-8 border rounded-xl ${
            isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-[#f6f7fa] border-gray-200"
          }`}
        >
          <div className="grid grid-cols-4 gap-6">
            {borderRadiusValues.map((item, index) => (
              <div key={index} className="flex flex-col gap-6 items-center">
                {/* 示意图 */}
                <div
                  className={`w-full aspect-square border-2 rounded-3xl flex items-center justify-center ${
                    isDark ? "bg-[#1a1a1a] border-[#2a2a2a]" : "bg-white border-gray-200"
                  }`}
                >
                  <div className="relative w-3/5 h-2/5">
                    <div
                      className={`absolute inset-0 border-4 border-[#0052D9] ${
                        isDark ? "bg-[#1a1a1a]" : "bg-white"
                      }`}
                      style={{ borderRadius: `${item.value}px` }}
                    >
                      {/* 圆点装饰 */}
                      <div
                        className="absolute bg-[#D9E1FF]"
                        style={{
                          width: `${Math.max(item.value * 0.7, 8)}px`,
                          height: `${Math.max(item.value * 0.7, 8)}px`,
                          borderRadius: "50%",
                          left: `${Math.max(item.value * 0.4, 6)}px`,
                          top: `${Math.max(item.value * 0.4, 6)}px`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* 文字说明 */}
                <div className="text-center">
                  <p className={`text-lg font-medium mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {item.value}px {item.name}
                  </p>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {item.usage}
                  </p>
                </div>
              </div>
            ))}

            {/* 胶囊型 */}
            <div className="flex flex-col gap-6 items-center">
              <div
                className={`w-full aspect-square border-2 rounded-3xl flex items-center justify-center ${
                  isDark ? "bg-[#1a1a1a] border-[#2a2a2a]" : "bg-white border-gray-200"
                }`}
              >
                <div className="relative w-2/5 h-2/5">
                  <div
                    className={`absolute inset-0 border-4 border-[#0052D9] ${
                      isDark ? "bg-[#1a1a1a]" : "bg-white"
                    }`}
                    style={{ borderRadius: "9999px" }}
                  >
                    <div
                      className="absolute bg-[#D9E1FF] left-[20%] top-1/2 -translate-y-1/2"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className={`text-lg font-medium mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                  胶囊型
                </p>
                <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  按钮组件使用
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 圆角嵌套规则 - 重点 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">圆角嵌套规则 ⭐</h2>
        <div
          className={`p-8 border rounded-xl ${
            isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-[#f6f7fa] border-gray-200"
          }`}
        >
          <div className="grid grid-cols-2 gap-12">
            {/* 左侧示意图 */}
            <div className="flex items-center justify-center">
              <div className="relative" style={{ width: "300px", height: "300px" }}>
                {/* 外层圆角 */}
                <div
                  className={`absolute inset-0 border-2 ${
                    isDark ? "border-gray-600" : "border-black/70"
                  }`}
                  style={{ borderRadius: "42px" }}
                />
                {/* 内层圆角 */}
                <div
                  className={`absolute border-2 ${
                    isDark ? "border-gray-600" : "border-black/70"
                  }`}
                  style={{
                    borderRadius: "24px",
                    top: "18px",
                    left: "18px",
                    right: "18px",
                    bottom: "18px",
                  }}
                />

                {/* 圆圈和箭头装饰 */}
                <div className="absolute" style={{ left: "20px", top: "9px", width: "84px", height: "84px" }}>
                  <img src={img} alt="" className="absolute inset-0 w-full h-full" />
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 84 84" fill="none">
                    <circle cx="42" cy="42" r="41" stroke="url(#paint0_linear)" strokeWidth="2" />
                    <defs>
                      <linearGradient id="paint0_linear" x1="54.6802" y1="25.8899" x2="22.4601" y2="0.529506">
                        <stop stopColor="#FF6673" stopOpacity="0.01" />
                        <stop offset="1" stopColor="#FF363F" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="absolute" style={{ left: "38px", top: "27px", width: "48px", height: "48px" }}>
                  <img src={img1} alt="" className="absolute inset-0 w-full h-full" />
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="23" stroke="url(#paint0_linear_2)" strokeWidth="2" />
                    <defs>
                      <linearGradient id="paint0_linear_2" x1="31.2458" y1="14.7943" x2="12.8343" y2="0.302575">
                        <stop stopColor="#FF6673" stopOpacity="0.01" />
                        <stop offset="1" stopColor="#FF363F" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* R 标签 */}
                <div className="absolute text-[#ff293b] font-medium text-2xl" style={{ left: "4px", top: "-9px" }}>
                  R
                </div>

                {/* r 标签 */}
                <div className="absolute text-[#ff293b] font-medium text-2xl" style={{ left: "57px", top: "16px" }}>
                  r
                </div>

                {/* 间距标签和箭头 */}
                <div className="absolute" style={{ left: "0", top: "109px" }}>
                  <svg width="17" height="8" viewBox="0 0 17 8" fill="none">
                    <path d={svgPaths.p289e9700} fill="#0036BF" />
                  </svg>
                  <div className="text-[#0036BF] font-medium text-sm mt-1">间距</div>
                </div>

                {/* 底部说明 */}
                <div className={`absolute text-xs ${isDark ? "text-gray-500" : "text-gray-600"}`} style={{ bottom: "-40px", left: "0" }}>
                  R指外圆圆角半径、r指内圆圆角半径
                </div>
              </div>
            </div>

            {/* 右侧规则说明 */}
            <div className="flex flex-col justify-center gap-6">
              <div
                className={`p-6 border-l-4 border-blue-500 ${
                  isDark ? "bg-blue-600/10" : "bg-blue-50"
                }`}
              >
                <p className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                  r = R - 间距
                </p>
                <p className={`text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  内圆角 = 外圆角 - 内外元素间距
                </p>
              </div>

              <div
                className={`p-6 border-l-4 border-green-500 ${
                  isDark ? "bg-green-600/10" : "bg-green-50"
                }`}
              >
                <p className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                  R ≥ 18px，最小 r = 12px
                </p>
                <p className={`text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  外圆角大于等于18px时，内圆角最小为12px
                </p>
              </div>

              <div
                className={`p-6 border-l-4 border-orange-500 ${
                  isDark ? "bg-orange-600/10" : "bg-orange-50"
                }`}
              >
                <p className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                  R = 12px，最小 r = 6px
                </p>
                <p className={`text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  外圆角等于12px时，内圆角最小为6px
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 实际应用示例 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">应用示例</h2>
        <div className="grid grid-cols-2 gap-6">
          {/* 卡片嵌套示例 */}
          <div
            className={`p-8 border ${
              isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"
            }`}
            style={{ borderRadius: "30px" }}
          >
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              卡片嵌套（30px外圆角）
            </h3>
            <div
              className={`p-6 ${isDark ? "bg-[#0a0a0a]" : "bg-gray-50"}`}
              style={{ borderRadius: "18px" }}
            >
              <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                间距12px，内圆角 = 30 - 12 = 18px
              </p>
              <div
                className={`p-4 ${isDark ? "bg-blue-600/20" : "bg-blue-50"}`}
                style={{ borderRadius: "12px" }}
              >
                <p className={`text-xs ${isDark ? "text-blue-300" : "text-blue-700"}`}>
                  再次嵌套：间距6px，内圆角 = 18 - 6 = 12px
                </p>
              </div>
            </div>
          </div>

          {/* 按钮示例 */}
          <div
            className={`p-8 border ${
              isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"
            }`}
            style={{ borderRadius: "30px" }}
          >
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              按钮容器（30px外圆角）
            </h3>
            <div className="flex gap-3">
              <button
                className="px-6 py-3 bg-black text-white font-medium"
                style={{ borderRadius: "24px" }}
              >
                主按钮 (24px)
              </button>
              <button
                className={`px-6 py-3 border-2 ${
                  isDark
                    ? "border-white text-white"
                    : "border-black text-black"
                } font-medium`}
                style={{ borderRadius: "24px" }}
              >
                次按钮 (24px)
              </button>
            </div>
            <p className={`text-xs mt-4 ${isDark ? "text-gray-500" : "text-gray-500"}`}>
              间距6px，内圆角 = 30 - 6 = 24px
            </p>
          </div>
        </div>
      </div>

      {/* 注意事项 */}
      <div
        className={`p-6 border rounded-xl ${
          isDark
            ? "bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border-yellow-500/20"
            : "bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200"
        }`}
      >
        <h3 className="text-base font-semibold mb-3">💡 设计原则</h3>
        <ul className={`text-sm space-y-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          <li>• 圆角嵌套遵循 r = R - 间距 的原则，确保视觉和谐</li>
          <li>• 最小圆角为6px，避免圆角过小导致视觉不协调</li>
          <li>• 大面板使用30px或42px圆角，营造柔和舒适的视觉感受</li>
          <li>• 小组件使用12px-24px圆角，保持精致感</li>
          <li>• 胶囊型按钮适用于强调性操作，提供更强的点击感知</li>
        </ul>
      </div>
    </div>
  );
}