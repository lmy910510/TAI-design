import { useOutletContext } from "react-router-dom";
import { useState, useRef } from "react";
import { motion } from "motion/react";

type InputState = "interactive" | "default" | "typing" | "filled";
type InputType = "base" | "car-plate";

export function Input() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const [inputType, setInputType] = useState<InputType>("base");
  const [demoState, setDemoState] = useState<InputState>("interactive");
  
  // States for interactive mode
  const [baseValue, setBaseValue] = useState("");
  const [isBaseFocusedState, setIsBaseFocusedState] = useState(false);
  
  const [plateValue, setPlateValue] = useState("");
  const [isPlateFocused, setIsPlateFocused] = useState(false);
  const plateInputRef = useRef<HTMLInputElement>(null);

  // Derive Base Input display values
  const baseDisplayValue = demoState === 'interactive' ? baseValue : 
                           demoState === 'default' ? '' : 
                           demoState === 'typing' ? 'wenjinglu@tence' : 'wenjinglu@tencent.com';

  const showClear = demoState === 'interactive' ? baseValue.length > 0 :
                    (demoState === 'typing' || demoState === 'filled');

  const isBaseFocused = demoState === 'interactive' ? isBaseFocusedState : demoState === 'typing';

  // Derive Car Plate display values
  const plateDisplayValue = demoState === 'interactive' ? plateValue :
                            demoState === 'default' ? '' :
                            demoState === 'typing' ? '京' : '京A123456';

  const activePlateIndex = demoState === 'interactive' 
    ? (isPlateFocused ? Math.min(plateDisplayValue.length, 7) : -1)
    : demoState === 'typing' ? 1 : -1;

  // Components Renderers
  const renderBaseInput = () => (
    <div 
      className={`content-stretch flex gap-[24px] h-[84px] items-center px-[24px] py-[21px] relative rounded-[24px] shrink-0 w-[696px] transition-all duration-200 ${
        isBaseFocused ? (isDark ? 'ring-2 ring-white' : 'ring-2 ring-black') : ''
      } ${isDark ? 'bg-[#2a2a2a] ring-offset-[#1a1a1a]' : 'bg-white'}`}
    >
      <div className="flex flex-[1_0_0] gap-[18px] items-center min-h-px min-w-px relative">
        {demoState === 'typing' ? (
          <div className={`flex items-center w-full font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[32px] text-[32px] ${isDark ? 'text-[rgba(255,255,255,0.92)]' : 'text-[rgba(0,0,0,0.92)]'}`}>
            <span>wenjinglu@tence</span>
            <motion.span 
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className={`${isDark ? 'text-white' : 'text-black'} font-light`}
            >
              ｜
            </motion.span>
          </div>
        ) : (
          <input 
            value={baseDisplayValue}
            onChange={(e) => demoState === 'interactive' && setBaseValue(e.target.value)}
            onFocus={() => setIsBaseFocusedState(true)}
            onBlur={() => setIsBaseFocusedState(false)}
            placeholder="请输入邮箱地址"
            readOnly={demoState !== 'interactive'}
            className={`flex-[1_0_0] bg-transparent outline-none font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[32px] text-[32px] w-full ${isDark ? 'caret-white text-[rgba(255,255,255,0.92)] placeholder-[rgba(255,255,255,0.42)]' : 'caret-black text-[rgba(0,0,0,0.92)] placeholder-[rgba(0,0,0,0.42)]'}`}
          />
        )}
      </div>
      {showClear && (
        <div 
          className="overflow-clip relative shrink-0 size-[42px] cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => demoState === 'interactive' && setBaseValue('')}
        >
          <div className="absolute inset-[10.42%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.25 33.25">
              <path clipRule="evenodd" d="M33.25 16.625C33.25 25.8067 25.8067 33.25 16.625 33.25C7.44327 33.25 0 25.8067 0 16.625C0 7.44327 7.44327 0 16.625 0C25.8067 0 33.25 7.44327 33.25 16.625ZM14.1503 16.6249L8.3877 22.3875L10.8626 24.8624L16.6252 19.0998L22.3877 24.8624L24.8626 22.3876L19.1001 16.6249L24.8624 10.8624L22.3875 8.38755L16.6252 14.1501L10.8627 8.38748L8.38784 10.8623L14.1503 16.6249Z" fill={isDark ? "white" : "black"} fillOpacity="0.24" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );

  const renderCarPlate = () => (
    <div className="flex gap-[12px] items-center relative cursor-text" onClick={() => demoState === 'interactive' && plateInputRef.current?.focus()}>
      <input
        ref={plateInputRef}
        value={plateDisplayValue}
        onChange={(e) => demoState === 'interactive' && setPlateValue(e.target.value.toUpperCase().replace(/[^A-Z0-9\u4e00-\u9fa5]/g, '').slice(0,8))}
        onFocus={() => setIsPlateFocused(true)}
        onBlur={() => setIsPlateFocused(false)}
        readOnly={demoState !== 'interactive'}
        className="absolute opacity-0 pointer-events-none w-0 h-0"
      />
      {[...Array(8)].map((_, i) => {
        const char = plateDisplayValue[i];
        const isActive = activePlateIndex === i;
        const isNewEnergy = i === 7;
        
        return (
          <div 
            key={i}
            className={`content-stretch flex flex-col h-[102px] items-center justify-center px-[27px] py-[39px] relative rounded-[18px] shrink-0 w-[90px] transition-all duration-200 ${
              isDark ? 'bg-[rgba(255,255,255,0.06)]' : 'bg-[rgba(0,0,0,0.06)]'
            }`}
          >
            {isActive && (
              <div aria-hidden="true" className={`absolute border-4 border-solid inset-0 pointer-events-none rounded-[18px] ${isDark ? 'border-white' : 'border-black'}`} />
            )}
            
            {!char && isNewEnergy && !isActive && (
              <div aria-hidden="true" className="absolute border-2 border-[rgba(6,173,120,0.84)] border-dashed inset-0 pointer-events-none rounded-[18px]" />
            )}

            {char ? (
              <p className={`font-['DIN:Medium',sans-serif] leading-[42px] relative shrink-0 text-[42px] text-center whitespace-nowrap ${
                isDark ? 'text-[rgba(255,255,255,0.92)]' : 'text-[rgba(0,0,0,0.92)]'
              }`}>
                {char}
              </p>
            ) : isNewEnergy ? (
              <div className="font-['Noto_Sans_S_Chinese:Medium',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#06ad78] text-[24px] text-center whitespace-nowrap">
                <p className="mb-0">新</p>
                <p className="mb-0">能</p>
                <p>源</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col w-full min-h-full overflow-x-hidden pb-12"
    >
      <div className="mb-8">
        <div className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
          isDark ? 'bg-white/10 border-white/20 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-900'
        }`}>
          Components / 组件
        </div>
        <h1 className="text-4xl font-bold mb-4">输入框 Input</h1>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          用于承载用户信息录入的文本框，支持基础文本和特殊格式（如车牌号）的输入，提供完备的交互状态反馈。
        </p>
      </div>

      <div className="flex flex-col gap-8 w-full">
        {/* Preview Area */}
        <div className={`w-full overflow-hidden border rounded-xl flex flex-col items-center justify-center ${isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-[#f6f7fa] border-gray-200'}`}>
           <div className={`w-full p-6 border-b ${isDark ? 'border-[#2a2a2a]' : 'border-gray-200'}`}>
             <h2 className="text-xl font-bold">组件预览 (按1920px基准缩放 50%)</h2>
           </div>
           
           <div className="w-full flex items-center justify-center py-16 overflow-hidden">
             {/* Scaled 1920px container */}
             <div 
                style={{ zoom: 0.5, width: 1920 }} 
                className="flex flex-col items-center justify-center origin-top"
             >
                <div className={`flex flex-col gap-[48px] items-start overflow-hidden pb-[60px] pl-[48px] pt-[48px] relative rounded-[36px] shrink-0 w-[1752px] ${isDark ? 'bg-[#1a1a1a] shadow-inner border border-white/5' : 'bg-[#f6f7fa] shadow-sm border border-black/5'}`}>
                  <div className={`flex flex-col font-['Noto_Sans_SC:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[36px] whitespace-nowrap ${isDark ? 'text-white' : 'text-black'}`}>
                    <p className="leading-[normal]">{inputType === 'base' ? '基础输入框' : '特殊输入框 - 车牌号'}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-[50px_30px] items-center w-full">
                    <div className={`flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] w-[180px] ${isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[rgba(0,0,0,0.6)]'}`}>
                      <p className="leading-[normal]">
                        {demoState === 'interactive' ? '✨ 交互效果' : 
                         demoState === 'default' ? '默认态' : 
                         demoState === 'typing' ? (inputType === 'base' ? '输入态' : '激活未输入') : 
                         (inputType === 'base' ? '已输入' : '激活已输入')}
                      </p>
                    </div>
                    {inputType === 'base' ? renderBaseInput() : renderCarPlate()}
                  </div>
                </div>
             </div>
           </div>
        </div>
        
        {/* Config Area */}
        <div className={`w-full p-8 border rounded-xl ${isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'}`}>
          <h2 className="text-2xl font-bold mb-6">属性配置</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input Type */}
            <div>
              <h3 className={`text-sm font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>输入框类型</h3>
              <div className={`flex gap-2 p-1 rounded-lg w-fit ${isDark ? 'bg-[#2a2a2a]' : 'bg-gray-100'}`}>
                <button 
                  onClick={() => setInputType('base')}
                  className={`px-6 py-2.5 text-sm rounded-md transition-all ${inputType === 'base' ? (isDark ? 'bg-[#4a4a4a] text-white shadow-sm font-medium' : 'bg-white text-black shadow-sm font-medium') : (isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700')}`}
                >
                  基础输入框
                </button>
                <button 
                  onClick={() => setInputType('car-plate')}
                  className={`px-6 py-2.5 text-sm rounded-md transition-all ${inputType === 'car-plate' ? (isDark ? 'bg-[#4a4a4a] text-white shadow-sm font-medium' : 'bg-white text-black shadow-sm font-medium') : (isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700')}`}
                >
                  车牌号输入框
                </button>
              </div>
            </div>

            {/* Interaction States */}
            <div>
              <h3 className={`text-sm font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>演示状态</h3>
              <div className="flex flex-wrap gap-3">
                {(['interactive', 'default', 'typing', 'filled'] as InputState[]).map(state => (
                  <button
                    key={state}
                    onClick={() => setDemoState(state)}
                    className={`py-2.5 px-5 rounded-lg text-sm transition-all border ${
                      demoState === state
                        ? isDark 
                          ? "border-white bg-white/10 text-white font-medium"
                          : "border-black bg-gray-900 text-white font-medium"
                        : isDark
                          ? "border-[#3a3a3a] bg-[#2a2a2a] text-gray-300 hover:bg-[#3a3a3a]"
                          : "border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {state === 'interactive' ? '✨ 可交互模式' : 
                     state === 'default' ? '默认态' : 
                     state === 'typing' ? '输入态' : '已输入态'}
                  </button>
                ))}
              </div>
              <p className={`mt-3 text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                {demoState === 'interactive' ? '您可以在上方的输入框中直接进行真实的输入操作。' : '当前展示设计规范中定义的静态界面反馈效果。'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
