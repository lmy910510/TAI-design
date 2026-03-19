import { useOutletContext } from "react-router-dom";
import { useState } from "react";

export function RowPage() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const [selectedGap, setSelectedGap] = useState(24);

  const gapOptions = [
    { label: "n (6px)", value: 6 },
    { label: "2n (12px)", value: 12 },
    { label: "3n (18px)", value: 18 },
    { label: "4n (24px)", value: 24 },
    { label: "5n (30px)", value: 30 },
    { label: "6n (36px)", value: 36 },
  ];

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
          isDark ? 'bg-white/10 border-white/20 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-900'
        }`}>
          A. 布局类 (Layout)
        </div>
        <h1 className="text-4xl font-bold mb-4">Row 水平排列</h1>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          基于 Flexbox 的水平布局容器。严格遵循车机端 6px 基准栅格系统 (n = 6px) 进行元素间距 (gap) 控制。
        </p>
      </div>
      
      {/* Interactive Demo */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">互动演示</h2>
        <div className={`p-8 border rounded-xl ${
          isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'
        }`}>
          <div className="mb-6">
            <label className={`block text-sm font-medium mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              间距 (Gap)
            </label>
            <div className="flex flex-wrap gap-2">
              {gapOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedGap(option.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedGap === option.value
                      ? 'bg-black text-white'
                      : isDark
                        ? 'bg-[#1f1f1f] text-gray-400 hover:text-white hover:bg-[#2a2a2a]'
                        : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className={`p-6 border border-dashed rounded-lg overflow-x-auto ${
            isDark ? 'border-gray-700 bg-[#0a0a0a]' : 'border-gray-300 bg-gray-50'
          }`}>
            <div 
              className="flex flex-row items-center" 
              style={{ gap: `${selectedGap}px` }}
            >
              {[1, 2, 3, 4].map((item) => (
                <div 
                  key={item} 
                  className={`flex items-center justify-center w-24 h-24 rounded-lg font-bold text-lg ${
                    isDark ? 'bg-[#1f1f1f] text-gray-300' : 'bg-white shadow-sm border border-gray-200 text-gray-700'
                  }`}
                >
                  Item {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spacing Rules */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">水平间距规则 (Horizontal Gap)</h2>
        <div className={`border rounded-xl overflow-hidden ${isDark ? 'border-[#2a2a2a]' : 'border-gray-200'}`}>
          <table className="w-full text-left text-sm">
            <thead className={isDark ? 'bg-[#1a1a1a] text-gray-300' : 'bg-gray-50 text-gray-600'}>
              <tr>
                <th className="px-6 py-4 font-medium border-b border-inherit">参数值 (n)</th>
                <th className="px-6 py-4 font-medium border-b border-inherit">像素 (px)</th>
                <th className="px-6 py-4 font-medium border-b border-inherit">推荐场景</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${isDark ? 'divide-[#2a2a2a] text-gray-400' : 'divide-gray-200 text-gray-600'}`}>
              <tr>
                <td className="px-6 py-4 font-mono font-medium text-black dark:text-white">n</td>
                <td className="px-6 py-4">6px</td>
                <td className="px-6 py-4">紧密关联的图标与文字、辅助标签之间的极小间距。</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-mono font-medium text-black dark:text-white">2n</td>
                <td className="px-6 py-4">12px</td>
                <td className="px-6 py-4">组件内部的紧凑控件排列，如工具栏中的图标按钮组合。</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-mono font-medium text-black dark:text-white">3n</td>
                <td className="px-6 py-4">18px</td>
                <td className="px-6 py-4">常规的表单项横向排列、卡片内部并列元素的常规小间距。</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-mono font-medium text-black dark:text-white">4n</td>
                <td className="px-6 py-4">24px</td>
                <td className="px-6 py-4">默认的标准水平间距，适用于按钮组、卡片列表等常见横向结构。</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-mono font-medium text-black dark:text-white">5n</td>
                <td className="px-6 py-4">30px</td>
                <td className="px-6 py-4">较大区块之间的水平留白，用于区分不同功能组。</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      {/* Code Usage */}
      <section>
        <h2 className="text-2xl font-bold mb-4">代码示例</h2>
        <div className={`p-4 rounded-xl font-mono text-sm overflow-x-auto ${
          isDark ? 'bg-[#141414] text-gray-300 border border-[#2a2a2a]' : 'bg-gray-900 text-gray-100'
        }`}>
          <pre>{`// Tailwind 中对应的值 (注意：如果标准 Tailwind 不包含该间距，请使用 arbitrary values)
<div className="flex flex-row gap-[12px] /* 2n */">
  <Button>Cancel</Button>
  <Button variant="primary">Submit</Button>
</div>

<div className="flex flex-row gap-[24px] /* 4n */">
  <Card />
  <Card />
</div>`}</pre>
        </div>
      </section>
    </div>
  );
}