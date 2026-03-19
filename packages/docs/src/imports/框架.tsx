import svgPaths from "./svg-eitih7rnwu";

function Frame1() {
  return <div className="absolute bg-[rgba(255,255,255,0.7)] h-[1020px] left-[156px] rounded-[42px] top-[30px] w-[1734px]" />;
}

function CommonIconExit({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative shrink-0 size-[42px]"} data-name="Common/icon_exit">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[29.75px] left-[calc(50%-0.38px)] top-[calc(50%-0.13px)] w-[29.238px]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.2378 29.75">
          <g id="Union">
            <path d={svgPaths.p199fd500} fill="var(--fill-0, #444C5C)" style={{ fill: "color(display-p3 0.2667 0.2980 0.3608)", fillOpacity: "1" }} />
            <path d={svgPaths.p2de52500} fill="var(--fill-0, #444C5C)" style={{ fill: "color(display-p3 0.2667 0.2980 0.3608)", fillOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-center left-[30px] rounded-[100px] size-[96px] top-[954px]">
      <CommonIconExit />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_14px_0px_rgba(255,255,255,0.15)]" />
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

function Frame3({ className }: { className?: string }) {
  return (
    <div className={className || "relative shrink-0 size-[42px]"}>
      <Group />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[rgba(0,0,0,0.8)] content-stretch flex items-center overflow-clip p-[21px] relative rounded-[107.692px] shrink-0">
      <Frame3 />
    </div>
  );
}

function Frame5() {
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

function Frame4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] content-stretch flex flex-col gap-[18px] h-[198px] items-start left-[30px] overflow-clip p-[6px] rounded-[117.073px] top-[30px] w-[96px]">
      <Frame2 />
      <Frame5 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#eaedf2] overflow-clip relative rounded-[60px] size-full" data-name="框架">
      <Frame1 />
      <Frame />
      <Frame4 />
    </div>
  );
}