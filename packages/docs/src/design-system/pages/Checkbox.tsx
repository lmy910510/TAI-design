import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { CheckboxComponent } from "../CheckboxComponent";
import ActionSheetAndroid from "../../figma-demos/ActionSheetAndroid-81-1372";

export function Checkbox() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const [demoCheckbox, setDemoCheckbox] = useState(false);
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(true);
  const [option3, setOption3] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div>
      <div className="mb-8">
        <div className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
          isDark ? 'bg-white/10 border-white/20 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-900'
        }`}>
          Components / 组件
        </div>
        <h1 className="text-4xl font-bold mb-4">多选</h1>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          用于多项选择场景的交互组件，支持独立选择和取消
        </p>
      </div>

      {/* 实际效果预览 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">实际效果</h2>
        <div className={`p-12 border rounded-xl ${isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'}`}>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <CheckboxComponent
                checked={demoCheckbox}
                onChange={setDemoCheckbox}
              />
              <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {demoCheckbox ? '已选中' : '未选中'}
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
              <CheckboxComponent checked={true} onChange={() => {}} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4">标准尺寸</h3>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>• <strong>整体尺寸：</strong>48px × 48px（8×6栅格）</li>
                <li>• <strong>图标区域：</strong>38px × 38px（内边距10.42%）</li>
                <li>• <strong>圆角：</strong>完全圆形（border-radius: 50%）</li>
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
            <h3 className="text-lg font-semibold mb-4">未选中</h3>
            <div className="flex justify-center mb-4">
              <CheckboxComponent checked={false} onChange={() => {}} />
            </div>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• <strong>边框色：</strong>rgba(0,0,0,0.24)</li>
              <li>• <strong>背景：</strong>透明</li>
              <li>• <strong>描述：</strong>灰色空心圆</li>
            </ul>
          </div>

          <div className={`p-6 border rounded-xl ${
            isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'
          }`}>
            <h3 className="text-lg font-semibold mb-4">已选中</h3>
            <div className="flex justify-center mb-4">
              <CheckboxComponent checked={true} onChange={() => {}} />
            </div>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• <strong>背景色：</strong>黑色 (#000000)</li>
              <li>• <strong>对勾：</strong>白色</li>
              <li>• <strong>描述：</strong>实心圆带对勾</li>
            </ul>
          </div>

          <div className={`p-6 border rounded-xl ${
            isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'
          }`}>
            <h3 className="text-lg font-semibold mb-4">禁用状态</h3>
            <div className="flex justify-center gap-4 mb-4">
              <CheckboxComponent checked={false} onChange={() => {}} disabled />
              <CheckboxComponent checked={true} onChange={() => {}} disabled />
            </div>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• <strong>透明度：</strong>20%</li>
              <li>• <strong>鼠标：</strong>not-allowed</li>
              <li>• <strong>交互：</strong>不可点击</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 交互演示 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">交互演示</h2>
        <div className={`p-8 border rounded-xl ${isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'}`}>
          <div className="bg-white rounded-[30px] pl-[36px] max-w-2xl mx-auto">
            {/* 选项1 */}
            <div className="border-b border-[#f0f0f0]">
              <div className="flex gap-[24px] items-start pr-[36px] py-[36px]">
                <div className="shrink-0">
                  <CheckboxComponent
                    checked={option1}
                    onChange={setOption1}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[32px] text-[rgba(0,0,0,0.92)] leading-normal font-['PingFang_SC',sans-serif]">
                    接收推送通知
                  </p>
                  <p className="text-[28px] text-[rgba(0,0,0,0.4)] leading-normal mt-1 font-['PingFang_SC',sans-serif]">
                    允许接收系统推送的重要消息
                  </p>
                </div>
              </div>
            </div>

            {/* 选项2 */}
            <div className="border-b border-[#f0f0f0]">
              <div className="flex gap-[24px] items-start pr-[36px] py-[36px]">
                <div className="shrink-0">
                  <CheckboxComponent
                    checked={option2}
                    onChange={setOption2}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[32px] text-[rgba(0,0,0,0.92)] leading-normal font-['PingFang_SC',sans-serif]">
                    自动更新地图
                  </p>
                  <p className="text-[28px] text-[rgba(0,0,0,0.4)] leading-normal mt-1 font-['PingFang_SC',sans-serif]">
                    WiFi连接时自动下载地图更新
                  </p>
                </div>
              </div>
            </div>

            {/* 选项3 */}
            <div className="border-b border-[#f0f0f0]">
              <div className="flex gap-[24px] items-start pr-[36px] py-[36px]">
                <div className="shrink-0">
                  <CheckboxComponent
                    checked={option3}
                    onChange={setOption3}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[32px] text-[rgba(0,0,0,0.92)] leading-normal font-['PingFang_SC',sans-serif]">
                    启用语音助手
                  </p>
                  <p className="text-[28px] text-[rgba(0,0,0,0.4)] leading-normal mt-1 font-['PingFang_SC',sans-serif]">
                    使用语音控制车载功能
                  </p>
                </div>
              </div>
            </div>

            {/* 选项4 - 禁用 */}
            <div>
              <div className="flex gap-[24px] items-start pr-[36px] py-[36px]">
                <div className="shrink-0">
                  <CheckboxComponent
                    checked={true}
                    onChange={() => {}}
                    disabled
                  />
                </div>
                <div className="flex flex-col justify-center opacity-20">
                  <p className="text-[32px] text-[rgba(0,0,0,0.92)] leading-normal font-['PingFang_SC',sans-serif]">
                    基础安全服务（必选）
                  </p>
                  <p className="text-[28px] text-[rgba(0,0,0,0.4)] leading-normal mt-1 font-['PingFang_SC',sans-serif]">
                    系统必需的安全功能，无法关闭
                  </p>
                </div>
              </div>
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
              <li>• <strong>整体：</strong>48×48px（8×6栅格）</li>
              <li>• <strong>图标区域：</strong>38×38px</li>
              <li>• <strong>内边距：</strong>10.42%</li>
              <li>• <strong>圆角：</strong>完全圆形</li>
            </ul>
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <p className="mb-2"><strong>交互规则：</strong></p>
            <ul className="space-y-1 text-xs">
              <li>• <strong>点击切换：</strong>独立状态控制</li>
              <li>• <strong>多选支持：</strong>可同时选中多个</li>
              <li>• <strong>禁用样式：</strong>20%透明度</li>
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
            <h3 className="text-lg font-semibold mb-4">未选中色值</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg border-4" style={{ borderColor: 'rgba(0,0,0,0.24)', backgroundColor: 'transparent' }}></div>
                <div className="text-sm">
                  <div className="font-mono">rgba(0,0,0,0.24)</div>
                  <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>边框 - 浅灰色</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`p-6 border rounded-xl ${
            isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'
          }`}>
            <h3 className="text-lg font-semibold mb-4">已选中色值</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-black"></div>
                <div className="text-sm">
                  <div className="font-mono">#000000</div>
                  <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>背景 - 纯黑色</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-white border-2 border-gray-200"></div>
                <div className="text-sm">
                  <div className="font-mono">#FFFFFF</div>
                  <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>对勾 - 白色</div>
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
              <li>• 多项选择（如功能设置、权限配置）</li>
              <li>• 批量操作（如选择多个文件）</li>
              <li>• 可选配置（如推送通知、自动更新）</li>
              <li>• 协议同意（如用户协议、隐私政策）</li>
            </ul>
          </div>

          <div className={`p-6 border rounded-xl ${
            isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'
          }`}>
            <h3 className="text-lg font-semibold mb-3">❌ 不适用场景</h3>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• 单选互斥（应使用Radio单选）</li>
              <li>• 开关状态（应使用Switch）</li>
              <li>• 二元确认（应使用Button）</li>
              <li>• 复杂选项（应使用Dropdown）</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 代码示例 */}
      <div className={`p-6 border rounded-xl mb-8 ${
        isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'
      }`}>
        <h3 className="text-lg font-semibold mb-3">💻 代码示例</h3>
        <div className={`p-4 rounded-lg overflow-x-auto ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
          <pre className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
{`import { CheckboxComponent } from "./CheckboxComponent";
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxComponent
      checked={checked}
      onChange={setChecked}
    />
  );
}`}
          </pre>
        </div>
      </div>

      {/* 使用说明 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">使用说明</h2>
        <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          多选组件示例：弹层用于让用户选择可选内容
        </p>
        <div className={`p-8 border rounded-xl ${isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'}`}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-3">多选弹层示例</h3>
            <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              点击按钮触发弹层，用户可以选择不同的选项
            </p>
            
            {/* 触发按钮 */}
            <button 
              onClick={() => setIsSheetOpen(true)}
              className="bg-[#232a3a] font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[0] px-[48px] py-[24px] rounded-[50px] text-[28px] text-white transition-all hover:opacity-90 active:scale-95"
            >
              <span className="leading-[normal]">打开选择弹层</span>
            </button>

            {/* 弹层容器 */}
            {isSheetOpen && (
              <div 
                className="fixed inset-0 z-50 flex items-end justify-center bg-black/40"
                onClick={() => setIsSheetOpen(false)}
              >
                <div 
                  className="w-[480px] max-w-[90%] mb-[48px] animate-[slideUp_0.3s_ease-out]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ActionSheetAndroid />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
