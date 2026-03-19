import svgPaths from "./svg-dqw2s6esdl";

function Component1() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="标签">
      <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[42px] text-black whitespace-nowrap">
        <p className="leading-[42px]">二级页面标题</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[36px] items-center min-h-px min-w-px relative">
      <div className="bg-white content-stretch flex items-center justify-center p-[24px] relative rounded-[64px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[36px]" data-name="形态=面形">
          <div className="absolute flex inset-[11.64%_0.48%_11.76%_22.92%] items-center justify-center">
            <div className="flex-none rotate-45 size-[26px]">
              <div className="relative size-full" data-name="返回">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                  <path clipRule="evenodd" d={svgPaths.p121bd180} fill="var(--fill-0, black)" fillRule="evenodd" id="è¿å" style={{ fill: "black", fillOpacity: "1" }} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="标题">
        <Component1 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0">
      <div className="bg-[rgba(255,255,255,0.92)] content-stretch flex h-[84px] items-center justify-center px-[42px] relative rounded-[42px] shrink-0" data-name="btn">
        <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">
          <p className="leading-[32px]">文本</p>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.92)] content-stretch flex h-[84px] items-center justify-center px-[42px] relative rounded-[42px] shrink-0" data-name="btn">
        <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">
          <p className="leading-[32px]">文本</p>
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex gap-[90px] items-center overflow-clip p-[24px] relative rounded-[18px] size-full" data-name="二级文字导航栏-全页面">
      <Frame />
      <Frame1 />
    </div>
  );
}