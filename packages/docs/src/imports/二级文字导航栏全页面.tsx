export default function Component() {
  return (
    <div className="content-stretch flex gap-[90px] items-center overflow-clip p-[24px] relative rounded-[18px] size-full" data-name="二级文字导航栏-全页面">
      <div className="content-stretch flex flex-[1_0_0] gap-[36px] items-center min-h-px min-w-px relative">
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="标题">
          <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="标签">
            <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[42px] text-black whitespace-nowrap">
              <p className="leading-[42px]">一级页面标题</p>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
}