import svgPaths from "./svg-ix1jloqkq7";

function Frame2() {
  return (
    <div className="absolute bg-[#e0e0e0] content-stretch flex h-[72px] items-center justify-center left-0 overflow-clip py-[6px] rounded-[84px] top-0 w-[300px]">
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-black whitespace-nowrap">
        <p className="leading-[28px]">请先勾选以下协议</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute left-[126px] opacity-90 size-[48px] top-[96px]" data-name="item/radioIcon/main">
        <div className="absolute left-0 overflow-clip size-[48px] top-0" data-name="Common/icon_radio round1">
          <div className="absolute inset-[10.42%]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
              <path clipRule="evenodd" d={svgPaths.p1ca6f0f0} fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="Union" style={{ fill: "color(display-p3 0.8784 0.8784 0.8784)", fillOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <Frame2 />
      <div className="-translate-x-1/2 absolute flex h-[16px] items-center justify-center left-1/2 top-[68px] w-[22px]">
        <div className="flex-none rotate-180">
          <div className="h-[16px] relative w-[22px]">
            <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0526 12">
                <path d={svgPaths.p1ceaee80} fill="var(--fill-0, #E0E0E0)" id="Polygon 2" style={{ fill: "color(display-p3 0.8784 0.8784 0.8784)", fillOpacity: "1" }} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[144px] left-[85px] top-[116px] w-[300px]" data-name="默认">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[126px] top-[96px]">
      <div className="absolute left-[126px] size-[48px] top-[96px]" data-name="item/radioIcon/main">
        <div className="absolute left-0 overflow-clip size-[48px] top-0" data-name="Common/icon_radio round1">
          <div className="absolute inset-[10.42%]" data-name="Subtract">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
              <path clipRule="evenodd" d={svgPaths.p2b164270} fill="var(--fill-0, black)" fillRule="evenodd" id="Subtract" style={{ fill: "black", fillOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute h-[144px] left-[553px] top-[116px] w-[300px]" data-name="点击消失">
      <Group3 />
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0 0">
        <g id="Group 48096873">
          <g id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Group1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[473px] top-[68px]">
      <Frame1 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="内容">
      <div className="absolute bg-[#f6f7fa] h-[367px] left-0 rounded-[36px] top-0 w-[912px]" />
      <Component1 />
      <div className="absolute h-0 left-[410px] top-[184px] w-[125.5px]">
        <div className="absolute inset-[-7.36px_-0.8%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.5 14.7279">
            <path d={svgPaths.p10bed900} fill="var(--stroke-0, black)" id="Vector 1" style={{ fill: "black", fillOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <Component2 />
      <Frame />
    </div>
  );
}