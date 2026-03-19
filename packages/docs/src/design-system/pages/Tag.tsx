import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { ThumbsUp } from "lucide-react";
import { TagComponent, TagType, TagLevel, TagSize, TagColor, COLOR_MAP } from "../TagComponent";

export function Tag() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  
  // 选择器状态
  const [selectedType, setSelectedType] = useState<TagType>("regular");
  const [selectedLevel, setSelectedLevel] = useState<TagLevel>("high");
  const [selectedSize, setSelectedSize] = useState<TagSize>("large");
  const [selectedColor, setSelectedColor] = useState<TagColor>("notice");
  const [hasIcon, setHasIcon] = useState<boolean>(true);
  const [isSolidBorder, setIsSolidBorder] = useState<boolean>(true);

  return (
    <div>
      <div className="mb-8">
        <div className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
          isDark ? 'bg-white/10 border-white/20 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-900'
        }`}>
          Components / 组件
        </div>
        <h1 className="text-4xl font-bold mb-4">标签组件 (Tag)</h1>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          用于表明主体的类目、属性或状态；是静态文本，不具有交互功能。提供常规和组合两类标签，支持多层级、尺寸和颜色。
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* 左侧：组件状态预览区 */}
        <div className={`p-8 border rounded-xl flex flex-col ${
          isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'
        }`}>
          <h2 className="text-2xl font-bold mb-6">实时预览</h2>
          
          <div className="flex-1 flex flex-col items-center justify-center min-h-[300px] mb-8 bg-gray-50 dark:bg-black/20 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
            <TagComponent
              type={selectedType}
              level={selectedLevel}
              size={selectedSize}
              color={selectedColor}
              showIcon={selectedType === "regular" && hasIcon}
              icon={<ThumbsUp size={22} color={selectedLevel === 'high' ? 'white' : COLOR_MAP[selectedColor].main} strokeWidth={2.5} />}
              solidBorder={isSolidBorder}
            >
              标签文案
            </TagComponent>
          </div>

          {/* 当前配置说明 */}
          <div className={`p-4 border rounded-lg ${
            isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className={`text-xs space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="flex justify-between">
                <span>类型:</span>
                <span className="font-mono">{selectedType === 'regular' ? '常规标签' : '组合标签'}</span>
              </div>
              <div className="flex justify-between">
                <span>层级:</span>
                <span className="font-mono">{selectedLevel === 'high' ? '高级 (高度强调)' : selectedLevel === 'medium' ? '中级 (强调感知)' : '低级 (弱化)'}</span>
              </div>
              <div className="flex justify-between">
                <span>尺寸:</span>
                <span className="font-mono">
                  {selectedSize === 'large' ? 'Large36' : selectedSize === 'medium' ? 'Medium30' : 'Small24'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>颜色:</span>
                <span className="font-mono">
                  {selectedColor === 'warning' ? '警示、强调 (#ff293b)' : 
                   selectedColor === 'notice' ? '提示、突出 (#fa6800)' : 
                   selectedColor === 'success' ? '成功、积极 (#00b578)' : 
                   selectedColor === 'regular' ? '常规、中性 (#2965ff)' : '默认、结束 (#697181)'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧：类型选择区 */}
        <div className={`p-8 border rounded-xl overflow-y-auto max-h-[800px] ${
          isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'
        }`}>
          <h2 className="text-2xl font-bold mb-6">属性配置</h2>

          {/* 标签类型 */}
          <div className="mb-6">
            <h3 className={`text-sm font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              类型 (Type)
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {(["regular", "combined"] as TagType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setSelectedType(type);
                    if (type === "combined" && selectedLevel === "low") {
                      setSelectedLevel("medium"); // 组合标签没有低级
                    }
                  }}
                  className={`py-2 px-4 rounded-lg text-sm transition-all ${
                    selectedType === type
                      ? isDark ? "border-2 border-blue-500 bg-blue-500/10 text-blue-400" : "border-2 border-blue-500 bg-blue-50 text-blue-600"
                      : isDark ? "bg-white/5 text-gray-400 border-2 border-transparent" : "bg-gray-100 text-gray-600 border-2 border-transparent"
                  }`}
                >
                  {type === "regular" ? "常规标签" : "组合标签"}
                </button>
              ))}
            </div>
          </div>

          {/* 层级选择 */}
          <div className="mb-6">
            <h3 className={`text-sm font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              层级 (Level)
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {(["high", "medium", "low"] as TagLevel[]).map((level) => {
                const isDisabled = selectedType === "combined" && level === "low";
                return (
                  <button
                    key={level}
                    disabled={isDisabled}
                    onClick={() => setSelectedLevel(level)}
                    className={`py-2 px-3 rounded-lg text-sm transition-all ${
                      isDisabled ? "opacity-30 cursor-not-allowed" : ""
                    } ${
                      selectedLevel === level && !isDisabled
                        ? isDark ? "border-2 border-white bg-white/10 text-white" : "border-2 border-black bg-gray-100 text-black"
                        : isDark && !isDisabled ? "bg-white/5 text-gray-400 border-2 border-transparent hover:bg-white/10" : !isDisabled ? "bg-gray-100 text-gray-600 border-2 border-transparent hover:bg-gray-200" : ""
                    }`}
                  >
                    {level === "high" ? "高级" : level === "medium" ? "中级" : "低级"}
                  </button>
                )
              })}
            </div>
          </div>

          {/* 尺寸选择 */}
          <div className="mb-6">
            <h3 className={`text-sm font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              尺寸 (Size)
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {(["large", "medium", "small"] as TagSize[]).map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 px-3 rounded-lg text-sm transition-all ${
                    selectedSize === size
                      ? isDark ? "border-2 border-white bg-white/10 text-white" : "border-2 border-black bg-gray-100 text-black"
                      : isDark ? "bg-white/5 text-gray-400 border-2 border-transparent hover:bg-white/10" : "bg-gray-100 text-gray-600 border-2 border-transparent hover:bg-gray-200"
                  }`}
                >
                  <div className="font-medium">
                    {size === "large" ? "Large36" : size === "medium" ? "Medium30" : "Small24"}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 颜色选择 */}
          <div className="mb-6">
            <h3 className={`text-sm font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              语义颜色 (Color)
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {(["warning", "notice", "success", "regular", "default"] as TagColor[]).map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`flex items-center gap-2 py-2 px-3 rounded-lg text-sm transition-all ${
                    selectedColor === color
                      ? isDark ? "border-2 border-white bg-white/10 text-white" : "border-2 border-black bg-gray-100 text-black"
                      : isDark ? "bg-white/5 text-gray-400 border-2 border-transparent hover:bg-white/10" : "bg-gray-100 text-gray-600 border-2 border-transparent hover:bg-gray-200"
                  }`}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLOR_MAP[color].main }}></div>
                  <span>
                    {color === "warning" ? "警示、强调" : 
                     color === "notice" ? "提示、突出" : 
                     color === "success" ? "成功、积极" : 
                     color === "regular" ? "常规、中性" : "默认、结束"}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 其他配置 */}
          {selectedType === "regular" && (
            <div className="mb-6 space-y-4">
              <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                其它 (Others)
              </h3>
              
              <label className="flex items-center gap-3 cursor-pointer" onClick={() => setHasIcon(!hasIcon)}>
                <div className={`w-10 h-6 rounded-full p-1 transition-colors ${hasIcon ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'}`}>
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${hasIcon ? 'translate-x-4' : 'translate-x-0'}`} />
                </div>
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>显示图标</span>
              </label>

              {selectedLevel === "medium" && (
                <label className="flex items-center gap-3 cursor-pointer" onClick={() => setIsSolidBorder(!isSolidBorder)}>
                  <div className={`w-10 h-6 rounded-full p-1 transition-colors ${isSolidBorder ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'}`}>
                    <div className={`w-4 h-4 rounded-full bg-white transition-transform ${isSolidBorder ? 'translate-x-4' : 'translate-x-0'}`} />
                  </div>
                  <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>实线描边风格 (Solid Border)</span>
                </label>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
