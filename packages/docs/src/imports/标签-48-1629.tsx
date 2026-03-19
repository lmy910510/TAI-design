import svgPaths from "./svg-m2lfd7h486";

function Group() {
  return (
    <div className="absolute left-0 size-[24px] top-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group 427320543">
          <g id="Rectangle 34624615" />
          <path d={svgPaths.p2d662280} fill="var(--fill-0, white)" id="P" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#2965ff] col-1 content-stretch flex gap-[10px] items-start ml-0 mt-0 pl-[6px] pr-[24px] py-[6px] relative rounded-[6px] row-1">
      <Frame2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 text-[#2965ff] text-[24px] whitespace-nowrap">
      <div className="col-1 flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center ml-0 mt-0 relative row-1">
        <p className="leading-[24px]">空</p>
      </div>
      <div className="col-1 flex flex-col font-['DIN:Medium',sans-serif] justify-center ml-[25px] mt-0 relative row-1">
        <p className="leading-[24px]">36</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 text-[24px] text-[rgba(0,0,0,0.54)] whitespace-nowrap">
      <div className="col-1 flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center ml-0 mt-0 relative row-1">
        <p className="leading-[24px]">共</p>
      </div>
      <div className="col-1 flex flex-col font-['DIN:Medium',sans-serif] justify-center ml-[25px] mt-0 relative row-1">
        <p className="leading-[24px]">320</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#e5eeff] col-1 content-stretch flex gap-[2px] items-center ml-[35px] mt-0 px-[8px] py-[6px] relative rounded-[6px] row-1" data-name="二级">
      <div aria-hidden="true" className="absolute border border-[#2965ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Group3 />
      <div className="flex flex-col font-['DIN:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.54)] whitespace-nowrap">
        <p className="leading-[24px]">/</p>
      </div>
      <Group2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame />
      <Component1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Group1 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative size-full" data-name="标签">
      <Frame1 />
    </div>
  );
}