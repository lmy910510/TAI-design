import { useOutletContext } from "react-router-dom";

export function DateTimeInputPage() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  return (
    <div className="pb-24">
      <div className="mb-12">
        <div className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
          isDark ? 'bg-white/10 border-white/20 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-900'
        }`}>
          Components / 组件
        </div>
        <h1 className="text-2xl font-bold mb-4">日期时间 DateTimeInput</h1>
        <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          用于选择日期和时间的输入组件。
        </p>
      </div>

      {/* 定义 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">定义</h2>
        <p className={`text-[28px] ${isDark ? 'text-gray-300' : 'text-[rgba(0,0,0,0.7)]'}`}>
          日期时间选择器为用户提供直观的方式来选择日期和时间，车机端需要考虑大触控目标和快速选择体验。
        </p>
      </div>

      {/* 类型 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">类型</h2>
        <div className={`rounded-[36px] p-12 space-y-12 ${isDark ? 'bg-[#1A1D28]' : 'bg-white'}`}>
          
          {/* 日期选择器 */}
          <div>
            <h3 className="text-4xl font-medium mb-6">日期选择器</h3>
            <div className="max-w-md">
              <button className={`w-full flex items-center justify-between px-6 py-5 border-2 rounded-xl text-xl transition ${
                isDark 
                  ? 'bg-[#1A1D28] border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.24)]'
                  : 'bg-white border-[rgba(0,0,0,0.12)] hover:border-[rgba(0,0,0,0.24)]'
              }`}>
                <span className={isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[#646464]'}>选择日期</span>
                <svg className={`w-6 h-6 ${isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[#646464]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <div className={`mt-6 p-6 border-2 rounded-2xl ${
                isDark ? 'border-[rgba(255,255,255,0.12)]' : 'border-[rgba(0,0,0,0.08)]'
              }`}>
                <div className="flex items-center justify-between mb-6">
                  <button className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isDark ? 'hover:bg-[rgba(255,255,255,0.06)]' : 'hover:bg-[#f5f5f5]'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span className="text-xl font-semibold">2026年3月</span>
                  <button className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isDark ? 'hover:bg-[rgba(255,255,255,0.06)]' : 'hover:bg-[#f5f5f5]'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {['日', '一', '二', '三', '四', '五', '六'].map((day) => (
                    <div key={day} className={`text-sm font-medium py-2 ${isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[#646464]'}`}>{day}</div>
                  ))}
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 0 + 1;
                    const isToday = day === 17;
                    return day > 0 && day <= 31 ? (
                      <button
                        key={i}
                        className={`aspect-square rounded-lg text-base font-medium transition ${
                          isToday
                            ? isDark 
                              ? 'bg-white text-black'
                              : 'bg-black text-white'
                            : isDark
                              ? 'hover:bg-[rgba(255,255,255,0.06)] text-[rgba(255,255,255,0.92)]'
                              : 'hover:bg-[#f5f5f5] text-[rgba(0,0,0,0.92)]'
                        }`}
                      >
                        {day}
                      </button>
                    ) : (
                      <div key={i}></div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* 时间选择器 */}
          <div>
            <h3 className="text-4xl font-medium mb-6">时间选择器</h3>
            <div className="max-w-md">
              <button className={`w-full flex items-center justify-between px-6 py-5 border-2 rounded-xl text-xl transition ${
                isDark 
                  ? 'bg-[#1A1D28] border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.24)]'
                  : 'bg-white border-[rgba(0,0,0,0.12)] hover:border-[rgba(0,0,0,0.24)]'
              }`}>
                <span className={isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[#646464]'}>选择时间</span>
                <svg className={`w-6 h-6 ${isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[#646464]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <div className={`mt-6 p-8 border-2 rounded-2xl ${
                isDark ? 'border-[rgba(255,255,255,0.12)]' : 'border-[rgba(0,0,0,0.08)]'
              }`}>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <div className="text-6xl font-bold">14</div>
                    <div className={`text-sm mt-2 ${isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[#646464]'}`}>时</div>
                  </div>
                  <div className={`text-5xl font-bold ${isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[#646464]'}`}>:</div>
                  <div className="text-center">
                    <div className="text-6xl font-bold">30</div>
                    <div className={`text-sm mt-2 ${isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[#646464]'}`}>分</div>
                  </div>
                </div>
                <div className="flex gap-3 mt-8">
                  <button className={`flex-1 py-3 rounded-lg border-2 text-lg transition ${
                    isDark 
                      ? 'border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.06)]'
                      : 'border-[rgba(0,0,0,0.12)] hover:bg-[#f5f5f5]'
                  }`}>
                    取消
                  </button>
                  <button className={`flex-1 py-3 rounded-lg text-lg transition ${
                    isDark
                      ? 'bg-white text-black hover:bg-[#f0f0f0]'
                      : 'bg-black text-white hover:bg-[#1a1a1a]'
                  }`}>
                    确定
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 日期时间组合 */}
          <div>
            <h3 className="text-4xl font-medium mb-6">日期时间组合</h3>
            <div className="max-w-md space-y-4">
              <button className={`w-full flex items-center justify-between px-6 py-5 border-2 rounded-xl text-xl ${
                isDark 
                  ? 'bg-[#1A1D28] border-[rgba(255,255,255,0.12)]'
                  : 'bg-white border-[rgba(0,0,0,0.12)]'
              }`}>
                <span>2026-03-17 14:30</span>
                <svg className={`w-6 h-6 ${isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[#646464]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <p className={`text-base ${isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[#646464]'}`}>同时选择日期和时间</p>
            </div>
          </div>

          {/* 快捷选择 */}
          <div>
            <h3 className="text-4xl font-medium mb-6">快捷选择</h3>
            <div className="flex flex-wrap gap-3">
              {['今天', '明天', '后天', '下周', '下月'].map((label) => (
                <button
                  key={label}
                  className={`px-6 py-3 rounded-xl text-lg transition ${
                    isDark
                      ? 'bg-[#32394A] hover:bg-[#444C5C]'
                      : 'bg-[#f5f5f5] hover:bg-[#e0e0e0]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className={`text-base mt-4 ${isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[#646464]'}`}>提供常用时间的快速选择</p>
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
                <li>日历单元格尺寸不小于 48×48px，适合触摸操作</li>
                <li>当前日期应有明显的高亮标识</li>
                <li>提供快捷选项（今天、明天等）减少操作步骤</li>
                <li>时间选择支持滚动或步进器输入</li>
                <li>显示格式应符合用户习惯（年-月-日 或 月/日/年）</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">车机端优化</h3>
              <ul className={`text-[24px] space-y-3 list-disc pl-8 ${isDark ? 'text-gray-300' : 'text-[rgba(0,0,0,0.7)]'}`}>
                <li>使用大触控目标，方便驾驶员快速选择</li>
                <li>提供语音输入作为替代方案</li>
                <li>减少嵌套层级，一次性显示主要选项</li>
                <li>支持默认值和智能推荐</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}