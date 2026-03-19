import svgPaths from "./svg-s9xm6nht1p";

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic pb-[30px] pt-[60px] px-[84px] relative shrink-0 w-[1920px] whitespace-nowrap" data-name="定义">
      <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] leading-[60px] relative shrink-0 text-[60px] text-[rgba(0,0,0,0.92)]">定义</p>
      <p className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[24px] relative shrink-0 text-[24px] text-[rgba(0,0,0,0.6)]">用于轻量级反馈或提示，不会打断用户操作。</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="内容">
      <div className="bg-[#f6f7fa] col-1 h-[288px] ml-0 mt-0 rounded-[36px] row-1 w-[1752px]" />
      <div className="col-1 flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center ml-[48px] mt-[48px] not-italic relative row-1 text-[36px] text-black whitespace-nowrap">
        <p className="leading-[36px]">类型一：文字</p>
      </div>
      <div className="bg-[#444c5c] col-1 content-stretch flex gap-[24px] h-[96px] items-center justify-center ml-[48px] mt-[138px] px-[48px] py-[24px] relative rounded-[30px] row-1" data-name="toast">
        <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
          <p className="leading-[32px]">轻提示文字内容</p>
        </div>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="内容">
      <div className="bg-[#f6f7fa] col-1 h-[288px] ml-0 mt-0 rounded-[36px] row-1 w-[1752px]" />
      <div className="col-1 flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center ml-[48px] mt-[48px] not-italic relative row-1 text-[36px] text-black whitespace-nowrap">
        <p className="leading-[36px]">类型二：图标+文字</p>
      </div>
      <div className="bg-[#444c5c] col-1 content-stretch flex gap-[24px] h-[96px] items-center justify-center ml-[48px] mt-[138px] px-[48px] py-[24px] relative rounded-[30px] row-1" data-name="toast">
        <div className="overflow-clip relative shrink-0 size-[48px]" data-name="状态=选中, 形态=线形">
          <div className="absolute inset-[10.42%]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
              <g id="Union">
                <path d={svgPaths.p26465e80} fill="var(--fill-0, white)" fillOpacity="0.92" style={{ fill: "white", fillOpacity: "0.92" }} />
                <path clipRule="evenodd" d={svgPaths.p1ca6f0f0} fill="var(--fill-0, white)" fillOpacity="0.92" fillRule="evenodd" style={{ fill: "white", fillOpacity: "0.92" }} />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
          <p className="leading-[32px]">添加成功</p>
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start pb-[30px] pt-[60px] px-[84px] relative shrink-0 w-[1920px]" data-name="基础">
      <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] leading-[60px] not-italic relative shrink-0 text-[60px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">类型</p>
      <Component3 />
      <Component4 />
    </div>
  );
}

function Component6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="内容">
      <div className="bg-[#f6f7fa] col-1 h-[288px] ml-0 mt-0 rounded-[36px] row-1 w-[1752px]" />
      <div className="col-1 flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center ml-[48px] mt-[48px] not-italic relative row-1 text-[36px] text-black whitespace-nowrap">
        <p className="leading-[36px]">成功提示（非模态，在下一页面展示）</p>
      </div>
      <div className="bg-[#444c5c] col-1 content-stretch flex gap-[24px] h-[96px] items-center justify-center ml-[48px] mt-[138px] px-[48px] py-[24px] relative rounded-[30px] row-1" data-name="toast">
        <div className="overflow-clip relative shrink-0 size-[48px]" data-name="状态=选中, 形态=线形">
          <div className="absolute inset-[10.42%]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
              <g id="Union">
                <path d={svgPaths.p26465e80} fill="var(--fill-0, white)" fillOpacity="0.92" style={{ fill: "white", fillOpacity: "0.92" }} />
                <path clipRule="evenodd" d={svgPaths.p1ca6f0f0} fill="var(--fill-0, white)" fillOpacity="0.92" fillRule="evenodd" style={{ fill: "white", fillOpacity: "0.92" }} />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
          <p className="leading-[32px]">添加成功</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Component6 />
    </div>
  );
}

function Component7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="内容">
      <div className="bg-[#f6f7fa] col-1 h-[288px] ml-0 mt-0 rounded-[36px] row-1 w-[1752px]" />
      <div className="col-1 flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center ml-[48px] mt-[48px] not-italic relative row-1 text-[36px] text-black whitespace-nowrap">
        <p className="leading-[36px]">失败提示（非模态，在当前页面展示）</p>
      </div>
      <div className="bg-[#444c5c] col-1 content-stretch flex gap-[24px] h-[96px] items-center justify-center ml-[48px] mt-[138px] px-[48px] py-[24px] relative rounded-[30px] row-1" data-name="toast">
        <div className="overflow-clip relative shrink-0 size-[48px]" data-name="形态=线形">
          <div className="absolute inset-[10.42%]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
              <g id="Union">
                <path d={svgPaths.p3d2b93b0} fill="var(--fill-0, white)" fillOpacity="0.92" style={{ fill: "white", fillOpacity: "0.92" }} />
                <path clipRule="evenodd" d={svgPaths.p321bc000} fill="var(--fill-0, white)" fillOpacity="0.92" fillRule="evenodd" style={{ fill: "white", fillOpacity: "0.92" }} />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
          <p className="leading-[32px]">添加失败</p>
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start pb-[30px] pt-[60px] px-[84px] relative shrink-0 w-[1920px]" data-name="基础">
      <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] leading-[60px] not-italic relative shrink-0 text-[60px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">状态</p>
      <Frame10 />
      <Component7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start px-[5px] py-[4.5px] relative shrink-0">
      <div className="relative shrink-0 size-[27px]" data-name="Component 17">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
          <circle cx="13.5" cy="13.5" fill="var(--fill-0, black)" id="Ellipse 1540" r="13.5" style={{ fill: "black", fillOpacity: "1" }} />
        </svg>
        <div className="absolute flex flex-col font-['Noto_Sans_S_Chinese:Regular',sans-serif] inset-[22.22%_7.41%] justify-center leading-[0] not-italic text-[15px] text-center text-white">
          <p className="leading-[15px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex items-start p-[5px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[21px] min-h-px min-w-px not-italic relative text-[#646464] text-[16px]">需要有默认展示时间，展示时间可自定义（建议2-3.5s）</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <Frame3 />
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start px-[5px] py-[4.5px] relative shrink-0">
      <div className="relative shrink-0 size-[27px]" data-name="Component 17">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
          <circle cx="13.5" cy="13.5" fill="var(--fill-0, black)" id="Ellipse 1540" r="13.5" style={{ fill: "black", fillOpacity: "1" }} />
        </svg>
        <div className="absolute flex flex-col font-['Noto_Sans_S_Chinese:Regular',sans-serif] inset-[22.22%_7.41%] justify-center leading-[0] not-italic text-[15px] text-center text-white">
          <p className="leading-[15px]">2</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex items-start p-[5px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[21px] min-h-px min-w-px not-italic relative text-[#646464] text-[16px]">默认展示于页面顶部中心处，适配时根据系统位置调整</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start px-[5px] py-[4.5px] relative shrink-0">
      <div className="relative shrink-0 size-[27px]" data-name="Component 17">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
          <circle cx="13.5" cy="13.5" fill="var(--fill-0, black)" id="Ellipse 1540" r="13.5" style={{ fill: "black", fillOpacity: "1" }} />
        </svg>
        <div className="absolute flex flex-col font-['Noto_Sans_S_Chinese:Regular',sans-serif] inset-[22.22%_7.41%] justify-center leading-[0] not-italic text-[15px] text-center text-white">
          <p className="leading-[15px]">3</p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex items-start p-[5px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[21px] min-h-px min-w-px not-italic relative text-[#646464] text-[16px]">可跨页面展示，即用户看到的轻提示源不一定来自当前所处页面</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[30px] items-start ml-[375px] mt-[136px] relative row-1 w-[1099px]">
      <div className="content-stretch flex items-start relative shrink-0 w-full">
        <Frame2 />
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full">
        <Frame4 />
      </div>
      <div className="content-stretch flex items-start relative shrink-0 w-full">
        <Frame7 />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#444c5c] col-1 content-stretch flex gap-[12px] items-center justify-center ml-[48px] mt-[148px] px-[24px] py-[12px] relative rounded-[15px] row-1">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Common/icon_radio round2">
        <div className="absolute inset-[10.42%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
            <g id="Union">
              <path d={svgPaths.pa3507a0} fill="var(--fill-0, white)" style={{ fill: "white", fillOpacity: "1" }} />
              <path clipRule="evenodd" d={svgPaths.p11100800} fill="var(--fill-0, white)" fillRule="evenodd" style={{ fill: "white", fillOpacity: "1" }} />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
        <p className="leading-[16px]">添加成功</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="内容">
      <div className="bg-[#f6f7fa] col-1 h-[460px] ml-0 mt-0 rounded-[36px] row-1 w-[1752px]" />
      <Frame />
      <Frame12 />
      <div className="col-1 flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center ml-[48px] mt-[48px] not-italic relative row-1 text-[28px] text-black whitespace-nowrap">
        <p className="leading-[28px]">普通全局提示</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Component9 />
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[30px] pt-[60px] px-[84px] relative shrink-0 w-[1920px]" data-name="基础">
      <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] leading-[60px] not-italic relative shrink-0 text-[60px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">显示规则与交互逻辑</p>
      <Frame11 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[200px] relative size-full" data-name="轻提示">
      <Component1 />
      <Component2 />
      <Component5 />
      <Component8 />
    </div>
  );
}