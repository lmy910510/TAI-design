function Component3() {
  return (
    <div className="bg-[#f6f7fa] content-stretch flex flex-col gap-[24px] h-[240px] items-center justify-center p-[60px] relative rounded-[24px] shrink-0 w-[544px]" data-name="内容">
      <div className="flex flex-col font-['Noto_Sans_S_Chinese:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[60px] text-black text-center">
        <p className="leading-[normal]">Noto Sans SC</p>
      </div>
      <p className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[normal] relative shrink-0 text-[28px] text-[rgba(0,0,0,0.6)]">中文字体</p>
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-[#f6f7fa] content-stretch flex flex-col gap-[24px] h-[240px] items-center justify-center p-[60px] relative rounded-[24px] shrink-0 w-[544px]" data-name="内容">
      <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[60px] text-black">
        <p className="leading-[72px]">Gilroy</p>
      </div>
      <p className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[normal] relative shrink-0 text-[28px] text-[rgba(0,0,0,0.6)]">数字/英文字体-营销场景</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[60px] items-start relative shrink-0">
      <Component3 />
      <Component4 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start not-italic pt-[36px] relative shrink-0 whitespace-nowrap" data-name="1">
      <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] leading-[42px] relative shrink-0 text-[42px] text-[rgba(0,0,0,0.92)]">字族</p>
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[36px] items-start justify-center leading-[48px] not-italic relative shrink-0 text-[48px] text-black whitespace-nowrap">
      <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] relative shrink-0">Regular</p>
      <p className="font-['DIN:Bold',sans-serif] relative shrink-0">500</p>
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-[#f6f7fa] content-stretch flex flex-col h-[240px] items-center justify-center p-[60px] relative rounded-[24px] shrink-0 w-[544px]" data-name="内容">
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[36px] items-start justify-center leading-[48px] not-italic relative shrink-0 text-[48px] text-black whitespace-nowrap">
      <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] relative shrink-0">Medium</p>
      <p className="font-['DIN:Bold',sans-serif] relative shrink-0">700</p>
    </div>
  );
}

function Component7() {
  return (
    <div className="bg-[#f6f7fa] content-stretch flex flex-col h-[240px] items-center justify-center p-[60px] relative rounded-[24px] shrink-0 w-[544px]" data-name="内容">
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[36px] items-start justify-center leading-[48px] not-italic relative shrink-0 text-[48px] text-black whitespace-nowrap">
      <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] relative shrink-0">Bold</p>
      <p className="font-['DIN:Bold',sans-serif] relative shrink-0">900</p>
    </div>
  );
}

function Component8() {
  return (
    <div className="bg-[#f6f7fa] content-stretch flex flex-col h-[240px] items-center justify-center p-[60px] relative rounded-[24px] shrink-0 w-[544px]" data-name="内容">
      <Frame7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[60px] items-start relative shrink-0">
      <Component6 />
      <Component7 />
      <Component8 />
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start pt-[36px] relative shrink-0" data-name="1">
      <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] leading-[42px] not-italic relative shrink-0 text-[42px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">字重</p>
      <Frame2 />
    </div>
  );
}

function Component10() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="2">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[72px] text-black whitespace-nowrap">大字号</p>
    </div>
  );
}

function Component16() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1927">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[72px] text-black whitespace-nowrap">72dp</p>
    </div>
  );
}

function Component23() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1934">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[72px] text-black whitespace-nowrap">maps</p>
    </div>
  );
}

function Component14() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1925">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <div className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="mb-0">Bold 900</p>
        <p>Medium 700</p>
      </div>
    </div>
  );
}

function Component33() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[394px]" data-name="1944">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black w-[300px]">歌词高亮态</p>
    </div>
  );
}

function Component18() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1929">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[54px] text-black whitespace-nowrap">大字号</p>
    </div>
  );
}

function Component17() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1928">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[60px] text-black whitespace-nowrap">60dp</p>
    </div>
  );
}

function Component24() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1935">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[60px] text-black whitespace-nowrap">maps</p>
    </div>
  );
}

function Component28() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1939">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <div className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="mb-0">Bold 900</p>
        <p>Medium 700</p>
      </div>
    </div>
  );
}

function Component34() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[394px]" data-name="1945">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black w-[300px]">歌词普通态、播放器页大标题</p>
    </div>
  );
}

function Component20() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1931">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[48px] text-black whitespace-nowrap">大字号</p>
    </div>
  );
}

function Component19() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1930">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[54px] text-black whitespace-nowrap">54dp</p>
    </div>
  );
}

function Component25() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1936">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[54px] text-black whitespace-nowrap">maps</p>
    </div>
  );
}

function Component29() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1940">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <div className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="mb-0">Bold 900</p>
        <p>Medium 700</p>
      </div>
    </div>
  );
}

function Component35() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[394px]" data-name="1946">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black w-[300px]">页面唯一主标题</p>
    </div>
  );
}

function Component21() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1932">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[48px] text-black whitespace-nowrap">大字号</p>
    </div>
  );
}

function Component30() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1941">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[48px] text-black whitespace-nowrap">48dp</p>
    </div>
  );
}

function Component26() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1937">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[48px] text-black whitespace-nowrap">maps</p>
    </div>
  );
}

function Component31() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1942">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <div className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="mb-0">Bold 900</p>
        <p>Medium 700</p>
      </div>
    </div>
  );
}

function Component36() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[394px]" data-name="1947">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black w-[300px]">公里数 / 评分 / 价格 / 大卡片标题</p>
    </div>
  );
}

function Component9() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0 w-[1754px]" data-name="示意">
      <div className="bg-[#0036bf] content-stretch flex items-center justify-center px-[30px] py-[60px] relative rounded-tl-[36px] shrink-0 w-[340px]" data-name="1921">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.12)] border-b border-r border-solid inset-0 pointer-events-none rounded-tl-[36px]" />
        <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[32px] text-[rgba(255,255,255,0.92)] text-center w-[128px]">类别</p>
      </div>
      <div className="bg-[#0036bf] content-stretch flex items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1926">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.12)] border-b border-r border-solid inset-0 pointer-events-none" />
        <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[32px] text-[rgba(255,255,255,0.92)] text-center w-[128px]">字号</p>
      </div>
      <div className="bg-[#0036bf] content-stretch flex items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1933">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.12)] border-b border-r border-solid inset-0 pointer-events-none" />
        <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[32px] text-[rgba(255,255,255,0.92)] text-center whitespace-nowrap">行高=AUTO</p>
      </div>
      <div className="bg-[#0036bf] content-stretch flex items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1938">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.12)] border-b border-r border-solid inset-0 pointer-events-none" />
        <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[32px] text-[rgba(255,255,255,0.92)] text-center w-[128px]">字重</p>
      </div>
      <div className="bg-[#0036bf] content-stretch flex items-center justify-center px-[30px] py-[60px] relative rounded-tr-[36px] shrink-0 w-[394px]" data-name="1943">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.12)] border-b border-r border-solid inset-0 pointer-events-none rounded-tr-[36px]" />
        <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[32px] text-[rgba(255,255,255,0.92)] text-center w-[128px]">使用场景</p>
      </div>
      <Component10 />
      <Component16 />
      <Component23 />
      <Component14 />
      <Component33 />
      <Component18 />
      <Component17 />
      <Component24 />
      <Component28 />
      <Component34 />
      <Component20 />
      <Component19 />
      <Component25 />
      <Component29 />
      <Component35 />
      <Component21 />
      <Component30 />
      <Component26 />
      <Component31 />
      <Component36 />
    </div>
  );
}

function Component12() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="2">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[42px] text-black whitespace-nowrap">常用字号</p>
    </div>
  );
}

function Component22() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1927">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[42px] text-black whitespace-nowrap">42dp</p>
    </div>
  );
}

function Component27() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1934">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[42px] text-black whitespace-nowrap">maps</p>
    </div>
  );
}

function Component15() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1925">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <div className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="mb-0">Bold 900</p>
        <p className="mb-0">Medium 700</p>
        <p>Regular 500</p>
      </div>
    </div>
  );
}

function Component37() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[394px]" data-name="1944">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black w-[300px]">页面主标题 / 卡片大标题</p>
    </div>
  );
}

function Component32() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1929">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[36px] text-black whitespace-nowrap">常用字号</p>
    </div>
  );
}

function Component38() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1928">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[36px] text-black whitespace-nowrap">36dp</p>
    </div>
  );
}

function Component39() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1935">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[36px] text-black whitespace-nowrap">maps</p>
    </div>
  );
}

function Component40() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1939">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <div className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="mb-0">Bold 900</p>
        <p className="mb-0">Medium 700</p>
        <p>Regular 500</p>
      </div>
    </div>
  );
}

function Component41() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[394px]" data-name="1945">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black w-[300px]">列表主标题 / 数据展示 / 一级Tab</p>
    </div>
  );
}

function Component42() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1931">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[32px] text-black whitespace-nowrap">常用字号</p>
    </div>
  );
}

function Component43() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1930">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[32px] text-black whitespace-nowrap">32dp</p>
    </div>
  );
}

function Component44() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1936">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[32px] text-black whitespace-nowrap">maps</p>
    </div>
  );
}

function Component45() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1940">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <div className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="mb-0">Medium 700</p>
        <p>Regular 500</p>
      </div>
    </div>
  );
}

function Component46() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[394px]" data-name="1946">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black w-[300px]">正文 / 副标题 / 二级Tab</p>
    </div>
  );
}

function Component47() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1932">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[28px] text-black whitespace-nowrap">常用字号</p>
    </div>
  );
}

function Component48() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1941">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[28px] text-black whitespace-nowrap">28dp</p>
    </div>
  );
}

function Component49() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1937">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[28px] text-black whitespace-nowrap">maps</p>
    </div>
  );
}

function Component50() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1942">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <div className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="mb-0">Medium 700</p>
        <p>Regular 500</p>
      </div>
    </div>
  );
}

function Component51() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[394px]" data-name="1947">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black w-[300px]">说明文字</p>
    </div>
  );
}

function Component11() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0 w-[1754px]" data-name="示意">
      <Component12 />
      <Component22 />
      <Component27 />
      <Component15 />
      <Component37 />
      <Component32 />
      <Component38 />
      <Component39 />
      <Component40 />
      <Component41 />
      <Component42 />
      <Component43 />
      <Component44 />
      <Component45 />
      <Component46 />
      <Component47 />
      <Component48 />
      <Component49 />
      <Component50 />
      <Component51 />
    </div>
  );
}

function Component52() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1931">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">辅助字号</p>
    </div>
  );
}

function Component53() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1930">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">24dp</p>
    </div>
  );
}

function Component54() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1936">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">maps</p>
    </div>
  );
}

function Component55() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1940">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">Regular 500</p>
    </div>
  );
}

function Component56() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[394px]" data-name="1946">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black w-[300px]">弱说明文字 / 标签文字</p>
    </div>
  );
}

function Component57() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative rounded-bl-[36px] shrink-0 w-[340px]" data-name="1932">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none rounded-bl-[37px]" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[22px] text-black whitespace-nowrap">辅助字号</p>
    </div>
  );
}

function Component58() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1941">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[22px] text-black whitespace-nowrap">22dp</p>
    </div>
  );
}

function Component59() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1937">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[22px] text-black whitespace-nowrap">maps</p>
    </div>
  );
}

function Component60() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative shrink-0 w-[340px]" data-name="1942">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">Regular 500</p>
    </div>
  );
}

function Component61() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[200px] items-center justify-center px-[30px] py-[60px] relative rounded-br-[36px] shrink-0 w-[394px]" data-name="1947">
      <div aria-hidden="true" className="absolute border-2 border-[#f6f7fa] border-solid inset-[-1px] pointer-events-none rounded-br-[37px]" />
      <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black w-[300px]">图标说明文字 / 最小标签文字</p>
    </div>
  );
}

function Component13() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0 w-[1754px]" data-name="示意">
      <Component52 />
      <Component53 />
      <Component54 />
      <Component55 />
      <Component56 />
      <Component57 />
      <Component58 />
      <Component59 />
      <Component60 />
      <Component61 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Component9 />
      <div className="bg-[#f6f7fa] h-[18px] shrink-0 w-[1754px]" />
      <Component11 />
      <div className="bg-[#f6f7fa] h-[18px] shrink-0 w-[1754px]" />
      <Component13 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[36px] relative shrink-0">
      <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] leading-[42px] not-italic relative shrink-0 text-[42px] text-black whitespace-nowrap">字号梯度</p>
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Component5 />
      <Frame3 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[30px] pt-[60px] px-[84px] relative shrink-0 w-[1920px]" data-name="基础">
      <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[48px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">基础规范</p>
      <Component2 />
      <Frame4 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[200px] relative size-full" data-name="字体-车机">
      <Component1 />
    </div>
  );
}