import svgPaths from "./svg-tmqx9al4hj";

type ModeType = 'auto' | 'guide' | 'chat';

interface ActionSheetAndroidInteractiveProps {
  selectedMode: ModeType;
  onSelectMode: (mode: ModeType) => void;
}

function Robot() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="robot-2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="robot-2">
          <path d={svgPaths.p3c6db180} fill="var(--fill-0, white)" id="fill1" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p12ae800} fill="var(--fill-0, white)" id="fill2" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p5fb2e00} id="stroke1" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="3" style={{ stroke: "black", strokeOpacity: "1" }} />
          <g id="stroke2">
            <path d={svgPaths.p12ae800} stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3" style={{ stroke: "black", strokeOpacity: "1" }} />
            <path d={svgPaths.pd5d2b00} stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3" style={{ stroke: "black", strokeOpacity: "1" }} />
            <path d={svgPaths.p3f709f00} stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3" style={{ stroke: "black", strokeOpacity: "1" }} />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Indicator() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="indicator">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="indicator">
          <path d={svgPaths.p313a7ff0} fill="var(--fill-0, white)" id="fill1" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p17938070} fill="var(--fill-0, white)" id="fill2" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.pb49380} id="stroke1" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="3" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function ChatBubbleSmile() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="chat-bubble-smile">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="chat-bubble-smile">
          <path clipRule="evenodd" d={svgPaths.p3facb600} fill="var(--fill-0, white)" fillRule="evenodd" id="fill1" style={{ fill: "white", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p3facb600} fillRule="evenodd" id="stroke1" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="3" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d={svgPaths.p2df52100} id="stroke2" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="3" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function RadioIcon({ selected }: { selected: boolean }) {
  return (
    <div className={`${selected ? '' : 'opacity-90'} relative shrink-0 size-[48px]`} data-name="item/radioIcon/main">
      <div className="absolute left-0 overflow-clip size-[48px] top-0" data-name="Common/icon_radio round1">
        <div className="absolute inset-[10.42%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
            {selected ? (
              <path clipRule="evenodd" d={svgPaths.p2b164270} fill="var(--fill-0, #232A3A)" fillRule="evenodd" id="Subtract" style={{ fill: "color(display-p3 0.1373 0.1643 0.2275)", fillOpacity: "1" }} />
            ) : (
              <path clipRule="evenodd" d={svgPaths.p1ca6f0f0} fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="Union" style={{ fill: "color(display-p3 0.8784 0.8784 0.8784)", fillOpacity: "1" }} />
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ActionSheetAndroidInteractive({ selectedMode, onSelectMode }: ActionSheetAndroidInteractiveProps) {
  return (
    <div className="backdrop-blur-[16px] bg-gradient-to-b content-stretch flex flex-col from-[48.686%] from-white gap-[32px] items-start overflow-clip p-[24px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tl-[24px] rounded-tr-[20px] size-full to-[rgba(255,255,255,0.5)]" data-name="Action Sheet_Android">
      
      {/* 智能推荐 */}
      <button
        onClick={() => onSelectMode('auto')}
        className="content-stretch flex items-center justify-between relative rounded-[50px] shrink-0 w-full cursor-pointer transition-opacity hover:opacity-80"
      >
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
          <Robot />
          <div className="content-stretch flex flex-col gap-[12px] items-start justify-center leading-[24px] not-italic relative shrink-0">
            <p className="font-['PingFang_SC:Medium',sans-serif] relative shrink-0 text-[#232a3a] text-[28px] w-[112px]">智能推荐</p>
            <p className="font-['PingFang_SC:Regular',sans-serif] opacity-80 relative shrink-0 text-[#697181] text-[20px] whitespace-nowrap">智能感应，自动适配向导或树洞</p>
          </div>
        </div>
        <RadioIcon selected={selectedMode === 'auto'} />
      </button>

      {/* 专业向导 */}
      <button
        onClick={() => onSelectMode('guide')}
        className="content-stretch flex items-center justify-between relative rounded-[50px] shrink-0 w-full cursor-pointer transition-opacity hover:opacity-80"
      >
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
          <Indicator />
          <div className="content-stretch flex flex-col gap-[12px] items-start justify-center leading-[24px] not-italic relative shrink-0 whitespace-nowrap">
            <p className="font-['PingFang_SC:Medium',sans-serif] relative shrink-0 text-[#232a3a] text-[28px]">专业向导</p>
            <p className="font-['PingFang_SC:Regular',sans-serif] opacity-80 relative shrink-0 text-[#697181] text-[20px]">侧重沿途解说与游玩攻略</p>
          </div>
        </div>
        <RadioIcon selected={selectedMode === 'guide'} />
      </button>

      {/* 树洞聊天 */}
      <button
        onClick={() => onSelectMode('chat')}
        className="content-stretch flex items-center justify-between relative rounded-[50px] shrink-0 w-full cursor-pointer transition-opacity hover:opacity-80"
      >
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
          <ChatBubbleSmile />
          <div className="content-stretch flex flex-col gap-[12px] items-start justify-center leading-[24px] not-italic relative shrink-0 whitespace-nowrap">
            <p className="font-['PingFang_SC:Medium',sans-serif] relative shrink-0 text-[#232a3a] text-[28px]">树洞聊天</p>
            <p className="font-['PingFang_SC:Regular',sans-serif] opacity-80 relative shrink-0 text-[#697181] text-[20px]">侧重闲暇畅聊与倾听</p>
          </div>
        </div>
        <RadioIcon selected={selectedMode === 'chat'} />
      </button>
    </div>
  );
}
