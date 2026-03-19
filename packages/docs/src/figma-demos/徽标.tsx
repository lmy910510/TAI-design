import svgPaths from "./svg-g3z0pra8vz";
import imgImage1 from "figma:asset/dc085b0762d2e0f3d49cdae4d091e76f091a6d72.png";

function Component1() {
  return (
    <div className="box-border w-full flex flex-col gap-[24px] items-stretch not-italic pb-[30px] pt-[60px] px-[84px] relative shrink-0" data-name="定义">
      <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] font-bold leading-[60px] relative shrink-0 text-[60px] text-[rgba(0,0,0,0.92)] whitespace-normal">定义</p>
      <div className="flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[28px] text-[rgba(0,0,0,0.7)]">
        <p className="leading-[normal] whitespace-normal">出现在图标或文字右上角的徽标标识</p>
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div className="col-1 flex flex-col gap-[12px] h-[102px] items-center justify-center ml-0 mt-0 px-[30px] relative rounded-[24px] row-1" data-name="Component 466">
      <div className="overflow-clip relative shrink-0 size-[42px]" data-name="map/icon_map">
        <div className="absolute inset-[16.96%_14.58%_19.05%_14.58%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.75 26.8747">
            <g id="Subtract">
              <path d={svgPaths.p532e000} fill="var(--fill-0, black)" fillOpacity="0.84" style={{ fill: "black", fillOpacity: "0.84" }} />
              <path d={svgPaths.p28f86f00} fill="var(--fill-0, black)" fillOpacity="0.84" style={{ fill: "black", fillOpacity: "0.84" }} />
              <path d={svgPaths.p36fb8380} fill="var(--fill-0, black)" fillOpacity="0.84" style={{ fill: "black", fillOpacity: "0.84" }} />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-[rgba(0,0,0,0.84)]">
        <p className="leading-[28px]">地图</p>
      </div>
      <div className="absolute left-[85px] size-[12px] top-0" data-name="徽标/Badge">
        <div className="absolute bg-[#ff293b] inset-0 rounded-[6px]" data-name="红点" />
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="flex relative shrink-0" data-name="1">
      <Component19 />
    </div>
  );
}

function Group() {
  return (
    <div className="flex relative">
      <div className="absolute left-[84px] top-0 z-10 size-[12px]" data-name="徽标/Badge">
        <div className="absolute bg-[#ff293b] inset-0 rounded-[6px]" data-name="红点" />
      </div>
      <div className="flex items-center justify-center overflow-clip relative rounded-[999px]" data-name="Avatar 头像">
        <div className="relative shrink-0 size-[96px]" data-name="image 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="flex relative shrink-0" data-name="2">
      <Group />
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex gap-[120px] items-start leading-[0] relative shrink-0">
      <Component4 />
      <Component5 />
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-[#f6f7fa] box-border w-full flex flex-col gap-[36px] items-stretch px-[48px] py-[60px] relative rounded-[36px] shrink-0" data-name="类型一">
      <div className="flex flex-col gap-[6px] items-start relative shrink-0" data-name="文字组合">
        <div className="flex flex-col font-['Noto_Sans_SC:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[36px] text-black">
          <p className="leading-[normal]">类型一：红点式徽标</p>
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#ff293b] absolute -right-[12px] -top-[12px] z-10 flex items-center justify-center opacity-0 overflow-clip px-[12px] py-[4px] rounded-[18px]">
      <div className="flex flex-col font-['DIN:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(255,255,255,0.92)]">
        <p className="leading-[24px]">99+</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="flex relative shrink-0">
      <div className="flex gap-[4px] items-center justify-center overflow-clip py-[24px] relative" data-name="二级标签栏">
        <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-[rgba(0,0,0,0.92)]">
          <p className="leading-[36px]">正在下载</p>
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.92)] h-[6px] bottom-0 left-1/2 -translate-x-1/2 w-[48px]" />
      </div>
      <Frame6 />
    </div>
  );
}

function Component7() {
  return (
    <div className="flex relative shrink-0" data-name="1">
      <div className="flex gap-[60px] h-[90px] items-start overflow-clip relative w-[576px]" data-name="二级标签栏">
        <Group1 />
        <div className="flex gap-[4px] items-center justify-center overflow-clip py-[24px] relative shrink-0" data-name="二级标签栏">
          <div className="flex flex-col font-['Noto_Sans_S_Chinese:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-[rgba(0,0,0,0.6)]">
            <p className="leading-[36px]">已下载</p>
          </div>
        </div>
        <div className="absolute h-[90px] right-0 top-0 w-[36px]" data-name="渐变层">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="渐变层" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[150px] top-[7px] z-10 bg-[#ff293b] flex h-[30px] items-center justify-center overflow-clip px-[12px] py-[4px] rounded-[18px]" data-name="徽标/Badge">
        <div className="flex flex-col font-['DIN:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(255,255,255,0.92)]">
          <p className="leading-[24px]">99+</p>
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="flex relative shrink-0 mt-[6px]" data-name="2">
      <div className="flex items-center justify-center overflow-clip relative rounded-[999px]" data-name="Avatar 头像">
        <div className="relative shrink-0 size-[96px]" data-name="image 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
        </div>
      </div>
      <div className="absolute left-[72px] -top-[6px] z-10 bg-[#ff293b] flex items-center justify-center overflow-clip px-[10px] py-[4px] rounded-[18px] min-w-[30px]" data-name="徽标/Badge">
        <div className="flex flex-col font-['DIN:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(255,255,255,0.92)]">
          <p className="leading-[24px]">3</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="flex gap-[120px] items-start leading-[0] relative shrink-0">
      <Component7 />
      <Component8 />
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-[#f6f7fa] box-border w-full flex flex-col gap-[36px] items-stretch px-[48px] py-[60px] relative rounded-[36px] shrink-0" data-name="类型二">
      <div className="flex flex-col gap-[6px] items-start relative shrink-0" data-name="文字组合">
        <div className="flex flex-col font-['Noto_Sans_SC:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[36px] text-black">
          <p className="leading-[normal]">类型二：数字式徽标</p>
        </div>
      </div>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
        <div className="col-1 content-stretch flex gap-[120px] items-center leading-[0] relative row-1 size-full">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="1">
            <div className="col-1 content-stretch flex gap-[36px] h-[90px] items-start ml-0 mt-0 overflow-clip relative row-1 w-[576px]" data-name="二级标签栏">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="col-1 content-stretch flex gap-[4px] items-center justify-center ml-0 mt-0 overflow-clip py-[24px] relative row-1" data-name="二级标签栏">
                  <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">
                    <p className="leading-[36px]">正在下载</p>
                  </div>
                  <div className="absolute bg-[rgba(0,0,0,0.92)] h-[6px] left-[53px] top-[78px] w-[48px]" />
                </div>
                <div className="bg-[#ff293b] col-1 content-stretch flex items-center justify-center ml-[150px] mt-[6px] opacity-0 overflow-clip px-[12px] py-[4px] relative rounded-[18px] row-1">
                  <div className="flex flex-col font-['DIN:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(255,255,255,0.92)] whitespace-nowrap">
                    <p className="leading-[24px]">99+</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip py-[24px] relative shrink-0" data-name="二级标签栏">
                <div className="flex flex-col font-['Noto_Sans_S_Chinese:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-[rgba(0,0,0,0.6)] whitespace-nowrap">
                  <p className="leading-[36px]">已下载</p>
                </div>
              </div>
              <div className="absolute h-[90px] right-0 top-0 w-[36px]" data-name="渐变层">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="渐变层" />
                </svg>
              </div>
            </div>
            <div className="bg-[#ff293b] col-1 content-stretch flex h-[30px] items-center justify-center ml-[150px] mt-[7px] overflow-clip px-[12px] py-[4px] relative rounded-[18px] row-1" data-name="徽标/Badge">
              <div className="flex flex-col font-['DIN:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(255,255,255,0.92)] whitespace-nowrap">
                <p className="leading-[24px]">99+</p>
              </div>
            </div>
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="2">
            <div className="col-1 content-stretch flex items-center justify-center ml-0 mt-[6px] overflow-clip relative rounded-[999px] row-1" data-name="Avatar 头像">
              <div className="relative shrink-0 size-[96px]" data-name="image 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
              </div>
            </div>
            <div className="bg-[#ff293b] col-1 content-stretch flex items-center justify-center ml-[72px] mt-0 overflow-clip py-[4px] relative rounded-[18px] row-1 min-w-[30px]" data-name="徽标/Badge">
              <div className="flex flex-col font-['DIN:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(255,255,255,0.92)] whitespace-nowrap">
                <p className="leading-[24px]">3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="box-border w-full flex flex-col gap-[36px] items-stretch pb-[30px] pt-[60px] px-[84px] relative shrink-0" data-name="类型">
      <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] font-bold leading-[60px] not-italic relative shrink-0 text-[60px] text-[rgba(0,0,0,0.92)] whitespace-normal">类型</p>
      <Component3 />
      <Component6 />
    </div>
  );
}

function Component12() {
  return (
    <div className="flex relative" data-name="2">
      <div className="flex items-center justify-center overflow-clip relative rounded-[999px]" data-name="Avatar 头像">
        <div className="relative shrink-0 size-[96px]" data-name="image 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
        </div>
      </div>
      <div className="absolute left-[72px] -top-[6px] z-10 bg-[#ff293b] flex items-center justify-center overflow-clip px-[10px] py-[4px] rounded-[18px] min-w-[30px]" data-name="徽标/Badge">
        <div className="flex flex-col font-['DIN:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(255,255,255,0.92)]">
          <p className="leading-[24px]">3</p>
        </div>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="flex relative" data-name="3">
      <div className="flex items-center justify-center overflow-clip relative rounded-[999px]" data-name="Avatar 头像">
        <div className="relative shrink-0 size-[96px]" data-name="image 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
        </div>
      </div>
      <div className="absolute left-[84px] top-0 z-10 size-[12px]" data-name="徽标/Badge">
        <div className="absolute bg-[#ff293b] inset-0 rounded-[6px]" data-name="红点" />
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="flex gap-[120px] items-start relative shrink-0" data-name="样式">
      <Component13 />
      <Component12 />
    </div>
  );
}

function Frame(props: { text: string }) {
  return (
    <div className="flex flex-col items-start relative shrink-0 flex-1" data-name="Frame">
      <p className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[28px] text-[rgba(0,0,0,0.6)] whitespace-normal">
        {props.text}
      </p>
    </div>
  );
}

function NumberedItem(props: { num: number, text: string }) {
  return (
    <div className="flex gap-[18px] items-start relative shrink-0 w-full" data-name={props.num.toString()}>
      <div className="relative shrink-0 size-[30px] mt-[3px]" data-name="num">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <circle cx="15" cy="15" fill="var(--fill-0, black)" fillOpacity="0.92" r="15" style={{ fill: "black", fillOpacity: "0.92" }} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-['DIN:Medium',sans-serif] not-italic text-[20px] text-white">
          <p>{props.num}</p>
        </div>
      </div>
      <Frame text={props.text} />
    </div>
  );
}

function Component14() {
  return (
    <div className="flex flex-col gap-[30px] items-start relative shrink-0 w-full" data-name="文字">
      <NumberedItem num={1} text="红点式徽标：适用于弱提示场景下，用户只需要关注是否有消息，而无需关注消息数量时，可使用红点型徽标；" />
      <NumberedItem num={2} text="红点型徽标仅显示为圆点的徽标，有图标时位于图标右上角，无图标时位于文字标题后侧；需要用户去手动点击查看进行消除；" />
      <NumberedItem num={3} text="数字式徽标：适用于需要较强提醒的场景，直接提醒用户相关信息数量；使用带数字的徽标时，需根据场景和信息类型定义最长数量，避免数值过多；定义极限值多余三位数时，建议使用“99+”；" />
      <NumberedItem num={4} text="徽标位置：与图标、文字、头像结合情况，移动端独有单行表单徽标应用场景，一般放在表单的右侧，用于提示用户有新消息/新内容，点击进入查看后，徽标清除；" />
    </div>
  );
}

function Component10() {
  return (
    <div className="bg-[#f6f7fa] box-border w-full flex flex-col gap-[48px] items-stretch px-[48px] py-[60px] relative rounded-[36px] shrink-0" data-name="图例">
      <Component11 />
      <Component14 />
    </div>
  );
}

function Component9() {
  return (
    <div className="box-border w-full flex flex-col gap-[36px] items-stretch pb-[30px] pt-[60px] px-[84px] relative shrink-0" data-name="显示规则">
      <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] font-bold leading-[60px] not-italic relative shrink-0 text-[60px] text-[rgba(0,0,0,0.92)] whitespace-normal">显示规则与交互逻辑</p>
      <Component10 />
    </div>
  );
}

export default function BadgeComponent() {
  return (
    <div className="bg-white box-border w-[1920px] overflow-hidden flex flex-col items-stretch pb-[200px] relative" data-name="徽标">
      <Component1 />
      <Component2 />
      <Component9 />
    </div>
  );
}