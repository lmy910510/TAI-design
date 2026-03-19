import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { SwitchComponent } from "../SwitchComponent";

export function Switch() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const [demoSwitch, setDemoSwitch] = useState(false);
  const [controlledSwitch, setControlledSwitch] = useState(false);

  return (
    <div>
      <div className="mb-8">
        <div className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
          isDark ? 'bg-white/10 border-white/20 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-900'
        }`}>
          Components / 组件
        </div>
        <h1 className="text-4xl font-bold mb-4">开关</h1>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          用于控制功能开关状态的交互组件，提供清晰的视觉反馈
        </p>
      </div>

      {/* 实际效果预览 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">实际效果</h2>
        <div className={`p-12 border rounded-xl ${isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'}`}>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <SwitchComponent
                checked={demoSwitch}
                onChange={setDemoSwitch}
              />
              <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {demoSwitch ? '开启' : '关闭'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 尺寸规格 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">尺寸规格</h2>
        <div className={`p-6 border rounded-xl ${
          isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'
        }`}>
          <div className="flex items-start gap-8">
            <div className="flex-shrink-0 flex justify-center items-center w-48">
              <SwitchComponent checked={true} onChange={() => {}} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4">标准尺寸</h3>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>• <strong>整体尺寸：</strong>90px × 54px（宽15×6，高9×6）</li>
                <li>• <strong>圆形滑块：</strong>40px × 40px</li>
                <li>• <strong>内边距：</strong>7px</li>
                <li>• <strong>圆角：</strong>完全圆角（border-radius: 50%）</li>
                <li>• <strong>栅格对齐：</strong>符合6px基准栅格</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 状态展示 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">状态</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className={`p-6 border rounded-xl ${
            isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'
          }`}>
            <h3 className="text-lg font-semibold mb-4">关闭状态</h3>
            <div className="flex justify-center mb-4">
              <SwitchComponent checked={false} onChange={() => {}} />
            </div>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• <strong>背景色：</strong>rgba(0,0,0,0.24)</li>
              <li>• <strong>圆圈位置：</strong>左侧</li>
              <li>• <strong>圆圈颜色：</strong>白色 (#FFFFFF)</li>
            </ul>
          </div>

          <div className={`p-6 border rounded-xl ${
            isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'
          }`}>
            <h3 className="text-lg font-semibold mb-4">开启状态</h3>
            <div className="flex justify-center mb-4">
              <SwitchComponent checked={true} onChange={() => {}} />
            </div>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• <strong>背景色：</strong>rgba(0,0,0,0.8)</li>
              <li>• <strong>圆圈位置：</strong>右侧</li>
              <li>• <strong>圆圈颜色：</strong>白色 (#FFFFFF)</li>
            </ul>
          </div>

          <div className={`p-6 border rounded-xl ${
            isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'
          }`}>
            <h3 className="text-lg font-semibold mb-4">禁用状态</h3>
            <div className="flex justify-center gap-4 mb-4">
              <SwitchComponent checked={false} onChange={() => {}} disabled />
              <SwitchComponent checked={true} onChange={() => {}} disabled />
            </div>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• <strong>透明度：</strong>50%</li>
              <li>• <strong>鼠标：</strong>not-allowed</li>
              <li>• <strong>交互：</strong>不可点击</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 交互控制 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">交互演示</h2>
        <div className={`p-8 border rounded-xl ${isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'}`}>
          <div className="space-y-6">
            <div className="flex items-center justify-between max-w-md mx-auto">
              <div>
                <p className={`font-semibold mb-1 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                  蓝牙连接
                </p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  当前状态：{controlledSwitch ? '✅ 已开启' : '❌ 已关闭'}
                </p>
              </div>
              <SwitchComponent
                checked={controlledSwitch}
                onChange={setControlledSwitch}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 设计规范 */}
      <div className={`p-6 border rounded-xl mb-8 ${
        isDark 
          ? 'bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-blue-500/20' 
          : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'
      }`}>
        <h3 className="text-lg font-semibold mb-3">📐 设计规范</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <p className="mb-2"><strong>尺寸体系（6px栅格）：</strong></p>
            <ul className="space-y-1 text-xs">
              <li>• <strong>整体：</strong>90×54px（宽15×6，高9×6）</li>
              <li>• <strong>滑块：</strong>40×40px</li>
              <li>• <strong>内边距：</strong>7px</li>
              <li>• <strong>圆角：</strong>完全圆角（border-radius: 50%）</li>
            </ul>
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <p className="mb-2"><strong>交互动效：</strong></p>
            <ul className="space-y-1 text-xs">
              <li>• <strong>切换动画：</strong>弹性过渡（spring）</li>
              <li>• <strong>背景色：</strong>0.2s ease 渐变</li>
              <li>• <strong>圆圈位移：</strong>弹性动画（stiffness: 500）</li>
              <li>• <strong>触控反馈：</strong>点击即时响应</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 颜色规范 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">颜色规范</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className={`p-6 border rounded-xl ${
            isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'
          }`}>
            <h3 className="text-lg font-semibold mb-4">关闭状态色值</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'rgba(0,0,0,0.24)' }}></div>
                <div className="text-sm">
                  <div className="font-mono">rgba(0,0,0,0.24)</div>
                  <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>背景 - 浅灰色</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-white border-2 border-gray-200"></div>
                <div className="text-sm">
                  <div className="font-mono">#FFFFFF</div>
                  <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>圆圈 - 白色</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`p-6 border rounded-xl ${
            isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'
          }`}>
            <h3 className="text-lg font-semibold mb-4">开启状态色值</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}></div>
                <div className="text-sm">
                  <div className="font-mono">rgba(0,0,0,0.8)</div>
                  <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>背景 - 深黑色</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-white border-2 border-gray-200"></div>
                <div className="text-sm">
                  <div className="font-mono">#FFFFFF</div>
                  <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>圆圈 - 白色</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 使用场景 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">使用场景</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className={`p-6 border rounded-xl ${
            isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'
          }`}>
            <h3 className="text-lg font-semibold mb-3">✅ 适用场景</h3>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• 功能开关（如蓝牙、WiFi、自动驾驶）</li>
              <li>• 设置选项（如夜间模式、语音播报）</li>
              <li>• 权限控制（如位置服务、摄像头）</li>
              <li>• 二元状态切换（是/否、开/关）</li>
            </ul>
          </div>

          <div className={`p-6 border rounded-xl ${
            isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'
          }`}>
            <h3 className="text-lg font-semibold mb-3">❌ 不适用场景</h3>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• 多选项选择（应使用Radio或Checkbox）</li>
              <li>• 需要确认的操作（应使用Button）</li>
              <li>• 数值调节（应使用Slider）</li>
              <li>• 复杂状态（应使用Dropdown）</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 代码示例 */}
      <div className={`p-6 border rounded-xl ${
        isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'
      }`}>
        <h3 className="text-lg font-semibold mb-3">💻 代码示例</h3>
        <div className={`p-4 rounded-lg overflow-x-auto ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
          <pre className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
{`import { SwitchComponent } from "./SwitchComponent";
import { useState } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <SwitchComponent
      checked={enabled}
      onChange={setEnabled}
    />
  );
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}