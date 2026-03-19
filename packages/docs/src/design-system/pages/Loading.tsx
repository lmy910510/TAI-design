import { useOutletContext } from "react-router-dom";
import svgPaths from "../../assets/svg-data/svg-yxp5sj61sx";

function SpinnerLine({ color = "#F0F0F0", className = "" }: { color?: string; className?: string }) {
  return (
    <svg className={`animate-spin ${className}`} viewBox="0 0 36 36" fill="none">
      <path clipRule="evenodd" d={svgPaths.p17b11700} fill={color} fillRule="evenodd" />
    </svg>
  );
}

function SpinnerCircle({ color = "rgba(0,0,0,0.54)", className = "" }: { color?: string; className?: string }) {
  return (
    <svg className={`animate-spin ${className}`} viewBox="0 0 27 27" fill="none">
      <path clipRule="evenodd" d={svgPaths.p1d37e200} fill={color} fillRule="evenodd" />
    </svg>
  );
}

// Skeleton Components
function SkeletonBar({ width, height = "24px" }: { width: string; height?: string }) {
  return <div className="bg-[rgba(0,0,0,0.06)] rounded-sm" style={{ width, height }} />;
}

function SkeletonCircle({ size = "24px" }: { size: string }) {
  return <div className="bg-[rgba(0,0,0,0.06)] rounded-full" style={{ width: size, height: size }} />;
}

export function Loading() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  return (
    <div>
      <div className="mb-8">
        <div className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
          isDark ? 'bg-white/10 border-white/20 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-900'
        }`}>
          Components / 组件
        </div>
        <h1 className="text-4xl font-bold mb-4">加载</h1>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          在网络比较慢或数据比较多时，显示数据正在加载的状态。
        </p>
      </div>

      {/* 类型一：全局加载/toast加载(模态) */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">类型一：全局加载/toast加载(模态)</h2>
        <div className={`p-12 border rounded-xl flex items-center justify-center ${isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-[#f6f7fa] border-gray-200'}`}>
          <div className="bg-[#444c5c] flex items-center gap-6 px-12 py-6 rounded-[30px] shadow-lg">
            <SpinnerLine className="w-12 h-12 [animation:spin_0.8s_linear_infinite]" color="#F0F0F0" />
            <span className="text-[32px] font-medium text-[rgba(255,255,255,0.9)] leading-none font-['Noto_Sans_S_Chinese']">
              加载中...
            </span>
          </div>
        </div>
      </div>

      {/* 类型二：全局加载/组合骨架屏 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">类型二：全局加载/组合骨架屏</h2>
        <style>
          {`
            @keyframes skeleton-shine {
              0% { left: -200px; opacity: 0; }
              5% { opacity: 0.8; }
              10% { opacity: 0.8; }
              85% { opacity: 0.8; }
              100% { left: 900px; opacity: 0; }
            }
          `}
        </style>
        <div className={`p-12 border rounded-xl flex justify-center ${isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-[#f6f7fa] border-gray-200'}`}>
          {/* Skeleton Canvas */}
          <div className="w-full max-w-[900px] aspect-[1300/487.5] rounded-[24px] bg-[#f7f7f7] relative overflow-hidden shadow-sm">
            {/* Top gradient area */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(175deg, rgba(96, 150, 255, 0.42) 0%, rgba(96, 150, 255, 0) 30.76%)'
              }}
            ></div>
            
            {/* Inner Content Area */}
            <div 
              className="absolute bg-white"
              style={{
                left: '3.125%', top: '20.83%', width: '93.75%', height: '70.83%', borderRadius: '24px'
              }}
            ></div>

            {/* Top Bar Skeletons (Static, No Shine) */}
            <div className="absolute bg-[rgba(0,0,0,0.06)]" style={{ left: '3.125%', top: '6.25%', width: '15.93%', height: '8.333%' }}></div>
            <div className="absolute bg-[rgba(0,0,0,0.06)] rounded-full" style={{ left: '90.3125%', top: '4.56%', width: '4.375%', height: '11.666%' }}></div>

            {/* Skeleton Elements Wrapper with SVG Mask (Only affects inner content) */}
            <div className="absolute inset-0 z-10" style={{
              maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1300 487.5'%3E%3Ccircle cx='367.656' cy='274.218' r='121.875' fill='black'/%3E%3Crect x='570.781' y='178.07' width='483.34' height='28.4375' fill='black'/%3E%3Ccircle cx='582.968' cy='258.984' r='12.1875' fill='black'/%3E%3Crect x='607.343' y='248.151' width='193.646' height='21.666' fill='black'/%3E%3Ccircle cx='582.968' cy='307.734' r='12.1875' fill='black'/%3E%3Crect x='607.343' y='296.901' width='193.646' height='21.666' fill='black'/%3E%3Ccircle cx='582.968' cy='356.484' r='12.1875' fill='black'/%3E%3Crect x='607.343' y='345.651' width='193.646' height='21.666' fill='black'/%3E%3C/svg%3E")`,
              maskSize: '100% 100%',
              maskRepeat: 'no-repeat',
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1300 487.5'%3E%3Ccircle cx='367.656' cy='274.218' r='121.875' fill='black'/%3E%3Crect x='570.781' y='178.07' width='483.34' height='28.4375' fill='black'/%3E%3Ccircle cx='582.968' cy='258.984' r='12.1875' fill='black'/%3E%3Crect x='607.343' y='248.151' width='193.646' height='21.666' fill='black'/%3E%3Ccircle cx='582.968' cy='307.734' r='12.1875' fill='black'/%3E%3Crect x='607.343' y='296.901' width='193.646' height='21.666' fill='black'/%3E%3Ccircle cx='582.968' cy='356.484' r='12.1875' fill='black'/%3E%3Crect x='607.343' y='345.651' width='193.646' height='21.666' fill='black'/%3E%3C/svg%3E")`,
              WebkitMaskSize: '100% 100%',
              WebkitMaskRepeat: 'no-repeat',
            }}>
              {/* Base grey background for the masked areas */}
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.06)]" />
              
              {/* The Shine Element */}
              <div 
                className="absolute top-0 bottom-0 z-20 pointer-events-none"
                style={{
                  width: '200px',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                  animation: 'skeleton-shine 2000ms cubic-bezier(0.42, 0, 0.58, 1) infinite',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* 类型三：局部加载/图标+文字 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">类型三：局部加载/图标+文字</h2>
        <div className={`p-12 border rounded-xl flex items-center justify-center ${isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-[#f6f7fa] border-gray-200'}`}>
          <div className="flex items-center gap-3">
            <SpinnerCircle className="w-9 h-9 [animation:spin_0.8s_linear_infinite]" color={isDark ? "rgba(255,255,255,0.54)" : "rgba(0,0,0,0.54)"} />
            <span className={`text-[28px] font-['Noto_Sans_S_Chinese'] ${isDark ? 'text-[rgba(255,255,255,0.54)]' : 'text-[rgba(0,0,0,0.54)]'}`}>
              松开加载下一页
            </span>
          </div>
        </div>
      </div>

      {/* 规则 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">规则</h2>
        <div className={`p-12 border rounded-xl flex items-center justify-center gap-24 ${isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-[#f6f7fa] border-gray-200'}`}>
          
          {/* Example Element */}
          <div className="flex items-center gap-2 relative">
            <div className="relative border border-[#0052d9] p-1">
              <SpinnerCircle className="w-9 h-9 [animation:spin_0.8s_linear_infinite]" color={isDark ? "rgba(255,255,255,0.54)" : "rgba(0,0,0,0.54)"} />
              
              {/* Pointer 1 */}
              <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 flex flex-col items-center">
                <div className="w-[1px] h-6 bg-[#0052d9]"></div>
                <div className="w-5 h-5 bg-black rounded-full text-white text-xs flex items-center justify-center mt-1 font-bold">1</div>
              </div>
            </div>

            <div className="relative border border-[#0052d9] p-1">
              <span className={`text-[28px] font-['Noto_Sans_S_Chinese'] ${isDark ? 'text-[rgba(255,255,255,0.54)]' : 'text-[rgba(0,0,0,0.54)]'}`}>
                松开加载下一页
              </span>
              
              {/* Pointer 2 */}
              <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 flex flex-col items-center">
                <div className="w-[1px] h-6 bg-[#0052d9]"></div>
                <div className="w-5 h-5 bg-black rounded-full text-white text-xs flex items-center justify-center mt-1 font-bold">2</div>
              </div>
            </div>
          </div>

          {/* Explanation */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-black rounded-full text-white text-sm flex items-center justify-center mt-1 font-bold shrink-0">1</div>
              <div>
                <div className={`text-xl font-medium ${isDark ? 'text-gray-200' : 'text-[rgba(0,0,0,0.6)]'}`}>进度指示</div>
                <div className={`text-lg ${isDark ? 'text-gray-400' : 'text-[rgba(0,0,0,0.6)]'}`}>采用图标动效</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-black rounded-full text-white text-sm flex items-center justify-center mt-1 font-bold shrink-0">2</div>
              <div>
                <div className={`text-xl font-medium ${isDark ? 'text-gray-200' : 'text-[rgba(0,0,0,0.6)]'}`}>文字说明（模糊性加载方式）</div>
                <div className={`text-lg ${isDark ? 'text-gray-400' : 'text-[rgba(0,0,0,0.6)]'}`}>显示加载状态</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}