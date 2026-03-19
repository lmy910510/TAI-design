import svgPaths from "./svg-vyw1dnj6n4";

function Component1() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="标签">
      <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[42px] text-black whitespace-nowrap">
        <p className="leading-[42px]">一级页面标题</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[36px] items-center min-h-px min-w-px relative">
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="标题">
        <Component1 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0">
      <div className="bg-[#eaedf2] content-stretch flex h-[84px] items-center justify-center px-[42px] relative rounded-[42px] shrink-0" data-name="btn">
        <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">
          <p className="leading-[32px]">文本</p>
        </div>
      </div>
      <div className="bg-[#eaedf2] content-stretch flex h-[84px] items-center justify-center px-[42px] relative rounded-[42px] shrink-0" data-name="btn">
        <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">
          <p className="leading-[32px]">文本</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#f7f8fa] h-[1032px] left-[144px] overflow-clip rounded-[42px] top-[24px] w-[1752px]">
      <div className="absolute content-stretch flex gap-[90px] items-center left-0 overflow-clip p-[24px] rounded-[18px] top-0 w-[1752px]" data-name="二级文字导航栏-全页面">
        <Frame />
        <Frame1 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[32.32px] left-[5px] top-[5px] w-[33.5px]">
      <div className="absolute inset-[-4.64%_0_-3.65%_-4.48%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 34.9999">
          <g id="Group 2036084730">
            <path d={svgPaths.p34e58680} id="Ellipse 23941" stroke="var(--stroke-0, white)" strokeWidth="3.49999" style={{ stroke: "white", strokeOpacity: "1" }} />
            <path d={svgPaths.p266b2600} id="Ellipse 23942" stroke="var(--stroke-0, white)" strokeWidth="2.99999" style={{ stroke: "white", strokeOpacity: "1" }} />
            <path d={svgPaths.p1b0ca880} fill="var(--fill-0, white)" id="Intersect" style={{ fill: "white", fillOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame5({ className }: { className?: string }) {
  return (
    <div className={className || "relative shrink-0 size-[42px]"}>
      <Group />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[rgba(0,0,0,0.8)] content-stretch flex items-center overflow-clip p-[21px] relative rounded-[107.692px] shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center overflow-clip p-[21px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[42px]" data-name="Common/icon_like">
        <div className="absolute inset-[14.58%_10.42%_13.75%_10.42%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.2498 30.1014">
            <path clipRule="evenodd" d={svgPaths.p1b3ff6c0} fill="var(--fill-0, #444C5C)" fillRule="evenodd" id="Union" style={{ fill: "color(display-p3 0.2667 0.2980 0.3608)", fillOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] content-stretch flex flex-col gap-[18px] h-[198px] items-start left-[24px] overflow-clip p-[6px] rounded-[117.073px] top-[24px] w-[96px]">
      <Frame4 />
      <Frame7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-center left-[24px] rounded-[100px] size-[96px] top-[960px]">
      <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Common/icon_setting">
        <div className="absolute inset-[9.72%_14.58%_9.73%_14.58%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 38.6638">
            <g id="Union">
              <path d={svgPaths.p2c69c600} fill="var(--fill-0, #444C5C)" style={{ fill: "color(display-p3 0.2667 0.2980 0.3608)", fillOpacity: "1" }} />
              <path clipRule="evenodd" d={svgPaths.p28fe3800} fill="var(--fill-0, #444C5C)" fillRule="evenodd" style={{ fill: "color(display-p3 0.2667 0.2980 0.3608)", fillOpacity: "1" }} />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_14px_0px_rgba(255,255,255,0.15)]" />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#eaedf2] overflow-clip relative rounded-[60px] size-full" data-name="框架-随行发现">
      <Frame3 />
      <Frame6 />
      <Frame2 />
    </div>
  );
}