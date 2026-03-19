import { useOutletContext } from "react-router-dom";
import { useState } from "react";

export function ChoicePickerPage() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const [selectedSingle, setSelectedSingle] = useState("option1");
  const [selectedMulti, setSelectedMulti] = useState<string[]>(["option1"]);

  const options = [
    { value: "option1", label: "选项一" },
    { value: "option2", label: "选项二" },
    { value: "option3", label: "选项三" },
    { value: "option4", label: "选项四" },
  ];

  const toggleMulti = (value: string) => {
    setSelectedMulti(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="pb-24">
      <div className="mb-12">
        <div className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
          isDark ? 'bg-white/10 border-white/20 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-900'
        }`}>
          Components / 组件
        </div>
        <h1 className="text-2xl font-bold mb-4">选择器 ChoicePicker</h1>
        <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          提供单选和多选功能，用于从多个选项中进行选择。
        </p>
      </div>

      {/* 定义 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">定义</h2>
        <p className={`text-[28px] ${isDark ? 'text-gray-300' : 'text-[rgba(0,0,0,0.7)]'}`}>
          选择器组件允许用户从预设的选项列表中选择一个或多个项目，常用于表单、设置和筛选场景。
        </p>
      </div>

      {/* 类型 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">类型</h2>
        
        {/* 单选 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">单选 Radio</h3>
          <div className={`rounded-[36px] p-12 ${isDark ? 'bg-[#1A1D28]' : 'bg-white'}`}>
            <div className="space-y-4 max-w-md">
              {options.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition ${
                    selectedSingle === option.value
                      ? isDark 
                        ? 'border-white bg-[rgba(255,255,255,0.06)]'
                        : 'border-black bg-[#f5f5f5]'
                      : isDark
                        ? 'border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.24)]'
                        : 'border-[rgba(0,0,0,0.12)] hover:border-[rgba(0,0,0,0.24)]'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    selectedSingle === option.value
                      ? isDark ? 'border-white' : 'border-black'
                      : isDark ? 'border-[rgba(255,255,255,0.26)]' : 'border-[rgba(0,0,0,0.26)]'
                  }`}>
                    {selectedSingle === option.value && (
                      <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`}></div>
                    )}
                  </div>
                  <span className="text-xl">{option.label}</span>
                  <input
                    type="radio"
                    name="single"
                    value={option.value}
                    checked={selectedSingle === option.value}
                    onChange={(e) => setSelectedSingle(e.target.value)}
                    className="sr-only"
                  />
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* 多选 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">多选 Checkbox</h3>
          <div className={`rounded-[36px] p-12 ${isDark ? 'bg-[#1A1D28]' : 'bg-white'}`}>
            <div className="space-y-4 max-w-md">
              {options.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition ${
                    selectedMulti.includes(option.value)
                      ? isDark
                        ? 'border-white bg-[rgba(255,255,255,0.06)]'
                        : 'border-black bg-[#f5f5f5]'
                      : isDark
                        ? 'border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.24)]'
                        : 'border-[rgba(0,0,0,0.12)] hover:border-[rgba(0,0,0,0.24)]'
                  }`}
                >
                  <div className={`w-6 h-6 rounded flex items-center justify-center shrink-0 border-2 ${
                    selectedMulti.includes(option.value)
                      ? isDark 
                        ? 'border-white bg-white'
                        : 'border-black bg-black'
                      : isDark 
                        ? 'border-[rgba(255,255,255,0.26)]'
                        : 'border-[rgba(0,0,0,0.26)]'
                  }`}>
                    {selectedMulti.includes(option.value) && (
                      <svg className={`w-4 h-4 ${isDark ? 'text-black' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xl">{option.label}</span>
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={selectedMulti.includes(option.value)}
                    onChange={() => toggleMulti(option.value)}
                    className="sr-only"
                  />
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* 下拉选择器 */}
        <div>
          <h3 className="text-2xl font-bold mb-6">下拉选择器 Dropdown</h3>
          <div className={`rounded-[36px] p-12 ${isDark ? 'bg-[#1A1D28]' : 'bg-white'}`}>
            <div className="max-w-md">
              <div className="relative">
                <button className={`w-full flex items-center justify-between px-6 py-4 border-2 rounded-xl text-xl transition ${
                  isDark 
                    ? 'bg-[#1A1D28] border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.24)]'
                    : 'bg-white border-[rgba(0,0,0,0.12)] hover:border-[rgba(0,0,0,0.24)]'
                }`}>
                  <span>请选择</span>
                  <svg className={`w-6 h-6 ${isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[#646464]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <p className={`text-base mt-4 ${isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[#646464]'}`}>点击展开选项列表</p>
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
                <li>单选使用圆形指示器，多选使用方形指示器</li>
                <li>选中状态使用品牌色或黑色高亮显示</li>
                <li>触摸目标至少 48×48px，确保车机端易于点击</li>
                <li>选项表不宜过长，超过 7 项建议使用下拉或搜索</li>
                <li>提供清晰的选中和未选中状态视觉区分</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">使用场景</h3>
              <ul className={`text-[24px] space-y-3 list-disc pl-8 ${isDark ? 'text-gray-300' : 'text-[rgba(0,0,0,0.7)]'}`}>
                <li>表单中的选项选择（性别、地区等）</li>
                <li>设置页面的配置项</li>
                <li>筛选器和过滤条件</li>
                <li>权限和功能开关</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}