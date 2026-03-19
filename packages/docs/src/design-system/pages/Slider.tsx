import { useOutletContext } from "react-router-dom";
import SliderComponent from "../../figma-demos/滑块";

export function SliderPage() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  return (
    <div className="pb-24">
      <div className="mb-12">
        <div className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
          isDark ? 'bg-white/10 border-white/20 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-900'
        }`}>
          Components / 组件
        </div>
        <h1 className="text-4xl font-bold mb-4">滑块 (Slider)</h1>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          用于控制一个连续有限区间内的数值（或数值范围）。
        </p>
      </div>

      <div className="overflow-x-auto rounded-[36px] border border-gray-200 shadow-sm bg-white">
        <div className="w-[1920px]" style={{ zoom: 0.5, height: '100%' }}>
          <SliderComponent />
        </div>
      </div>
    </div>
  );
}