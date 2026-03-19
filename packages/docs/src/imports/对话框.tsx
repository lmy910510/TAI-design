import svgPaths from "./svg-9wnpeydtsw";

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic pb-[30px] pt-[60px] px-[84px] relative shrink-0 w-[1920px] whitespace-nowrap" data-name="定义">
      <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] leading-[60px] relative shrink-0 text-[60px] text-[rgba(0,0,0,0.92)]">定义</p>
      <div className="flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[28px] text-[rgba(0,0,0,0.7)]">
        <p className="mb-0">
          <span className="font-['Noto_Sans_SC:Regular',sans-serif] leading-[normal] not-italic">Dialog对话框属于模态弹窗的一种，</span>
          <span className="leading-[normal]">当需要告知用户关键或者警示性信息并强制用户必须回应时，可以使用Dialog。</span>
        </p>
        <p className="mb-0">
          <span className="leading-[normal]">用户必须进行回应，</span>
          <span className="font-['Noto_Sans_SC:Regular',sans-serif] leading-[normal] not-italic">需要对对话框中的按钮进行操作后方可关闭弹窗</span>
          <span className="leading-[normal]">，回到主流程进行其他操作。</span>
        </p>
        <p className="text-[rgba(0,0,0,0.42)]">
          <span className="leading-[normal]">备注：对话框是一种</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[normal] underline">强阻断模态组件</span>
          <span className="leading-[normal]">，因此需要用户必须回应，且</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[normal] underline">不能点击蒙层消失</span>
          <span className="leading-[normal]">。</span>
        </p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_S_Chinese:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-[rgba(0,0,0,0.84)] whitespace-nowrap">
        <p className="leading-[42px]">这里是描述的主要内容</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-[600px]">
      <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[36px] text-[rgba(0,0,0,0.92)] text-center w-[min-content]">
        <p className="leading-[36px]">标题</p>
      </div>
      <Frame27 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="bg-[rgba(0,0,0,0.92)] flex-[1_0_0] h-[84px] min-h-px min-w-px relative rounded-[42px]" data-name="btn">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[42px] relative size-full">
            <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">
              <p className="leading-[32px]">主要操作（5s）</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col gap-[48px] items-center justify-center ml-[30px] mt-[30px] px-[30px] py-[48px] relative rounded-[42px] row-1 w-[660px]" data-name="弹窗_小">
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Component4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="2">
      <div className="bg-[rgba(0,0,0,0.24)] col-1 h-[390px] ml-0 mt-0 row-1 w-[725px]" data-name="蒙版" />
      <div className="col-1 flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] justify-center leading-[normal] ml-[807px] mt-[245px] not-italic relative row-1 text-[28px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">
        <p className="mb-0">蒙层颜色可跟随业务变化</p>
        <p className="mb-0">座舱：中性色black/black70</p>
        <p>车图：中性色black/black30</p>
      </div>
      <Component5 />
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-[#f6f7fa] content-stretch flex flex-col gap-[48px] items-start p-[48px] relative rounded-[36px] shrink-0 w-[1752px]" data-name="内容">
      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="文字组合">
        <div className="flex flex-col font-['Noto_Sans_SC:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[36px] text-black whitespace-nowrap">
          <p className="leading-[normal]">反馈类</p>
        </div>
      </div>
      <Component4 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-[rgba(0,0,0,0.92)] text-center w-full">
        <p className="leading-[36px]">标题与主要内容描述</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(0,0,0,0.92)] flex-[1_0_0] h-[84px] min-h-px min-w-px relative rounded-[42px]" data-name="btn">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[42px] relative size-full">
            <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(255,255,255,0.92)] whitespace-nowrap">
              <p className="leading-[32px]">主要操作</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0.06)] flex-[1_0_0] h-[84px] min-h-px min-w-px relative rounded-[42px]" data-name="btn">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[42px] relative size-full">
            <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">
              <p className="leading-[32px]">次要操作</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col gap-[72px] items-center justify-center ml-[30px] mt-[153px] px-[30px] py-[48px] relative rounded-[42px] row-1 w-[660px]" data-name="弹窗_小">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Component7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="1">
      <div className="bg-[rgba(0,0,0,0.24)] col-1 h-[390px] ml-0 mt-[102px] row-1 w-[720px]" data-name="蒙版" />
      <Component8 />
      <div className="col-1 flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center ml-0 mt-0 not-italic relative row-1 text-[36px] text-black whitespace-nowrap">
        <p className="leading-[normal]">短标题无文本</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_S_Chinese:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-[rgba(0,0,0,0.84)] whitespace-nowrap">
        <p className="leading-[normal]">这里是描述的主要内容</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-[600px]">
      <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[36px] text-[rgba(0,0,0,0.92)] text-center w-[min-content]">
        <p className="leading-[36px]">标题</p>
      </div>
      <Frame28 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(0,0,0,0.92)] flex-[1_0_0] h-[84px] min-h-px min-w-px relative rounded-[42px]" data-name="btn">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[42px] relative size-full">
            <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(255,255,255,0.92)] whitespace-nowrap">
              <p className="leading-[32px]">主要操作</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0.06)] flex-[1_0_0] h-[84px] min-h-px min-w-px relative rounded-[42px]" data-name="btn">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[42px] relative size-full">
            <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">
              <p className="leading-[32px]">次要操作</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col gap-[48px] items-center justify-center ml-[30px] mt-[132px] px-[30px] py-[48px] relative rounded-[42px] row-1 w-[660px]" data-name="弹窗_小">
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Component9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="2">
      <div className="bg-[rgba(0,0,0,0.24)] col-1 h-[390px] ml-0 mt-[102px] row-1 w-[720px]" data-name="蒙版" />
      <Component10 />
      <div className="col-1 flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center ml-0 mt-0 not-italic relative row-1 text-[36px] text-black whitespace-nowrap">
        <p className="leading-[normal]">标题+内容文本</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[120px] items-start leading-[0] relative shrink-0">
      <Component7 />
      <Component9 />
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-[#f6f7fa] content-stretch flex flex-col gap-[48px] items-start p-[48px] relative rounded-[36px] shrink-0 w-[1752px]" data-name="内容">
      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="文字组合">
        <div className="flex flex-col font-['Noto_Sans_SC:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[36px] text-black whitespace-nowrap">
          <p className="leading-[normal]">确认类</p>
        </div>
      </div>
      <Frame24 />
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 w-full" data-name="基础">
      <div className="content-stretch flex flex-col gap-[36px] items-start pb-[30px] pt-[60px] px-[84px] relative w-full">
        <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] leading-[60px] not-italic relative shrink-0 text-[60px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">类型</p>
        <Component3 />
        <Component6 />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-[600px]">
      <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center relative shrink-0 text-[36px] text-[rgba(0,0,0,0.92)] w-full">
        <p className="leading-[36px]">标题</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_S_Chinese:Regular',sans-serif] justify-center relative shrink-0 text-[28px] text-[rgba(0,0,0,0.84)] w-full">
        <p className="leading-[normal]">这里是描述的主要内容</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(0,0,0,0.92)] flex-[1_0_0] h-[84px] min-h-px min-w-px relative rounded-[42px]" data-name="btn">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[42px] relative size-full">
            <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(255,255,255,0.92)] whitespace-nowrap">
              <p className="leading-[32px]">主要操作</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0.06)] flex-[1_0_0] h-[84px] min-h-px min-w-px relative rounded-[42px]" data-name="btn">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[42px] relative size-full">
            <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">
              <p className="leading-[32px]">次要操作</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] items-center justify-center px-[30px] py-[48px] relative rounded-[42px] shrink-0 w-[660px]" data-name="弹窗_小">
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Component13 />
    </div>
  );
}

function Component12() {
  return (
    <div className="bg-[#f6f7fa] content-stretch flex flex-col gap-[48px] items-start p-[48px] relative rounded-[36px] shrink-0 w-[1752px]" data-name="内容">
      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="文字组合">
        <div className="flex flex-col font-['Noto_Sans_SC:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[36px] text-black whitespace-nowrap">
          <p className="leading-[normal]">小尺寸</p>
        </div>
      </div>
      <Frame25 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center relative shrink-0 text-[36px] text-[rgba(0,0,0,0.92)] text-center w-full">
        <p className="leading-[36px]">用户须知</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_S_Chinese:Regular',sans-serif] justify-center relative shrink-0 text-[0px] text-[28px] text-[rgba(0,0,0,0.84)] w-full whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[42px]">您好，</span>
          <span className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[42px] not-italic">确为了切实保护用户的隐私及权益，在使用本产品前，请您认真阅读</span>
          <span className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[42px] not-italic text-[#0464e0]">《哪儿值得去用户服务协议》，《哪儿值得去隐私保护指引》，《隐私政策摘要》，《收集个人信息清单》，《第三方SDK及信息共享清单》，</span>
          <span className="leading-[42px]">请您审慎阅读并选择接受或不接受本协议</span>
          <span className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[42px] not-italic">。</span>
        </p>
        <p className="leading-[42px] mb-0">&nbsp;</p>
        <p className="mb-0">
          <span className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[42px] not-italic">腾讯</span>
          <span className="leading-[42px]">哪儿值得去</span>
          <span className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[42px] not-italic">隐私保护指引摘要：当您使用腾讯</span>
          <span className="leading-[42px]">哪儿值得去</span>
          <span className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[42px] not-italic">的以下功能时，我们需要您主动提供一些信息：</span>
        </p>
        <p>
          <span className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[42px] not-italic">1.</span>
          <span className="leading-[42px]">{` `}</span>
          <span className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[42px] not-italic">我们使用微信作为我们的账号体系，当您使用微信扫码登录腾讯</span>
          <span className="leading-[42px]">哪儿值得去</span>
          <span className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[42px] not-italic">时，我们会向您请求微信的唯一标识（唯一标识用于生成User ID）、头像、昵称，用于保存您的登录信息，使您在使用不同设备登录时能够同步您的数据。此外，在登陆过程中，我们会向您请求收集用户的手机号、手机号验证码以完成登陆验证。手机号、手机号验证码属于用户敏感信息，如您拒绝提供不会影响您使用此功能。</span>
        </p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[rgba(0,0,0,0.92)] content-stretch flex h-[84px] items-center justify-center px-[42px] relative rounded-[42px] shrink-0 w-[420px]" data-name="Button">
        <p className="font-['Noto_Sans_S_Chinese:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">同意</p>
      </div>
      <div className="bg-[rgba(0,0,0,0.06)] content-stretch flex h-[84px] items-center justify-center px-[42px] relative rounded-[42px] shrink-0 w-[420px]" data-name="Button">
        <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">
          <p className="leading-[32px]">不同意并退出应用</p>
        </div>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] items-center pb-[48px] pt-[60px] px-[42px] relative rounded-[42px] shrink-0 w-[948px]" data-name="弹窗_中">
      <Frame29 />
      <Frame21 />
    </div>
  );
}

function Component14() {
  return (
    <div className="bg-[#f6f7fa] content-stretch flex flex-col gap-[48px] items-start p-[48px] relative rounded-[36px] shrink-0 w-[1752px]" data-name="内容">
      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="文字组合">
        <div className="flex flex-col font-['Noto_Sans_SC:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[36px] text-black whitespace-nowrap">
          <p className="leading-[normal]">大尺寸（跟随屏幕适配）</p>
        </div>
      </div>
      <Component15 />
    </div>
  );
}

function Component11() {
  return (
    <div className="relative shrink-0 w-full" data-name="基础">
      <div className="content-stretch flex flex-col gap-[36px] items-start pb-[30px] pt-[60px] px-[84px] relative w-full">
        <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] leading-[60px] not-italic relative shrink-0 text-[60px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">尺寸</p>
        <Component12 />
        <Component14 />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.92)] w-full">
        <p className="leading-[18px]">导出至自建歌单</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_S_Chinese:Regular',sans-serif] justify-center relative shrink-0 text-[14px] text-[rgba(0,0,0,0.6)] w-full">
        <p className="leading-[21px]">将自动生成以日期为名的歌单</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(0,0,0,0.92)] content-stretch flex items-center justify-center px-[21px] py-[13px] relative rounded-[42px] shrink-0 w-[126px]" data-name="Button">
        <p className="font-['Noto_Sans_S_Chinese:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.92)] whitespace-nowrap">导出</p>
      </div>
      <div className="bg-[rgba(0,0,0,0.06)] content-stretch flex items-center justify-center px-[21px] py-[13px] relative rounded-[42px] shrink-0 w-[126px]" data-name="Button">
        <p className="font-['Noto_Sans_S_Chinese:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">取消</p>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col gap-[24px] items-center justify-center ml-[50px] mt-[136px] pb-[18px] pt-[24px] px-[15px] relative rounded-[21px] row-1 w-[300px]" data-name="弹窗_小">
      <Frame22 />
      <Frame23 />
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
        <p className="flex-[1_0_0] font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[21px] min-h-px min-w-px not-italic relative text-[#646464] text-[16px]">主标题：最大支持2行，不允许超长文本，必须在规定字数内完成书写</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative">
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
        <p className="flex-[1_0_0] font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[21px] min-h-px min-w-px not-italic relative text-[#646464] text-[16px]">内容：支持长文本，做多显示3行；如作为副标题使用，最大支持1行</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative">
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
        <p className="flex-[1_0_0] font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[21px] min-h-px min-w-px not-italic relative text-[#646464] text-[16px]">主要操作：延续主标题的动词，即会产生实质改变结果的动作</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start px-[5px] py-[4.5px] relative shrink-0">
      <div className="relative shrink-0 size-[27px]" data-name="Component 17">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
          <circle cx="13.5" cy="13.5" fill="var(--fill-0, black)" id="Ellipse 1540" r="13.5" style={{ fill: "black", fillOpacity: "1" }} />
        </svg>
        <div className="absolute flex flex-col font-['Noto_Sans_S_Chinese:Regular',sans-serif] inset-[22.22%_7.41%] justify-center leading-[0] not-italic text-[15px] text-center text-white">
          <p className="leading-[15px]">4</p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex items-start p-[5px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[21px] min-h-px min-w-px not-italic relative text-[#646464] text-[16px]">次要操作：不会产生实质改变结果的动作，默认文本为“取消”，更建议使用意图更明确的文本</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[60px] items-start ml-[538px] mt-[136px] relative row-1 w-[1099px]">
      <div className="content-stretch flex items-start relative shrink-0 w-full">
        <Frame2 />
      </div>
      <div className="content-stretch flex items-start relative shrink-0 w-full">
        <Frame4 />
      </div>
      <div className="content-stretch flex items-start relative shrink-0 w-full">
        <Frame7 />
      </div>
      <div className="content-stretch flex items-start relative shrink-0 w-full">
        <Frame10 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[115px] mt-[268px] place-items-start relative row-1">
      <div className="col-1 flex h-[37px] items-center justify-center ml-[13.5px] mt-0 relative row-1 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[37px]" data-name="line">
            <div className="absolute inset-[-672%_0_972%_0]">
              <div className="absolute inset-[-3.68px_-1.35%_-3.68px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.5 7.36396">
                  <path d={svgPaths.pd03f200} fill="var(--stroke-0, #83B2FF)" id="Arrow 66" style={{ fill: "color(display-p3 0.5125 0.6967 1.0000)", fillOpacity: "1" }} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 ml-0 mt-[30.5px] relative row-1 size-[27px]" data-name="Component 6">
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

function Group2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[270px] mt-[154px] place-items-start relative row-1">
      <div className="col-1 h-0 ml-0 mt-[14px] relative row-1 w-[118px]" data-name="line">
        <div className="absolute inset-[-672%_0_972%_0]">
          <div className="absolute inset-[-3.68px_-0.42%_-3.68px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118.5 7.36396">
              <path d={svgPaths.p286bfc00} fill="var(--stroke-0, #83B2FF)" id="Arrow 66" style={{ fill: "color(display-p3 0.5125 0.6967 1.0000)", fillOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 ml-[101px] mt-0 relative row-1 size-[27px]" data-name="Component 6">
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

function Group3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[308px] mt-[189px] place-items-start relative row-1">
      <div className="col-1 h-0 ml-0 mt-[14px] relative row-1 w-[80px]" data-name="line">
        <div className="absolute inset-[-672%_0_972%_0]">
          <div className="absolute inset-[-3.68px_-0.63%_-3.68px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80.5 7.36396">
              <path d={svgPaths.p291dc180} fill="var(--stroke-0, #83B2FF)" id="Arrow 66" style={{ fill: "color(display-p3 0.5125 0.6967 1.0000)", fillOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 ml-[63px] mt-0 relative row-1 size-[27px]" data-name="Component 6">
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

function Group1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[253px] mt-[268px] place-items-start relative row-1">
      <div className="col-1 flex h-[37px] items-center justify-center ml-[13.5px] mt-0 relative row-1 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[37px]" data-name="line">
            <div className="absolute inset-[-672%_0_972%_0]">
              <div className="absolute inset-[-3.68px_-1.35%_-3.68px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.5 7.36396">
                  <path d={svgPaths.pd03f200} fill="var(--stroke-0, #83B2FF)" id="Arrow 66" style={{ fill: "color(display-p3 0.5125 0.6967 1.0000)", fillOpacity: "1" }} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 ml-0 mt-[30.5px] relative row-1 size-[27px]" data-name="Component 6">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
          <circle cx="13.5" cy="13.5" fill="var(--fill-0, black)" id="Ellipse 1540" r="13.5" style={{ fill: "black", fillOpacity: "1" }} />
        </svg>
        <div className="absolute flex flex-col font-['Noto_Sans_S_Chinese:Regular',sans-serif] inset-[22.22%_7.41%] justify-center leading-[0] not-italic text-[15px] text-center text-white">
          <p className="leading-[15px]">4</p>
        </div>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="内容">
      <Component18 />
      <div className="bg-[#f6f7fa] col-1 h-[660px] ml-0 mt-0 rounded-[36px] row-1 w-[1752px]" />
      <Frame />
      <Group />
      <Group2 />
      <Group3 />
      <Group1 />
      <div className="col-1 flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center ml-[48px] mt-[48px] not-italic relative row-1 text-[28px] text-black whitespace-nowrap">
        <p className="leading-[28px]">普通全局提示</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1836px]">
      <Component17 />
    </div>
  );
}

function Component16() {
  return (
    <div className="relative shrink-0 w-full" data-name="基础">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[30px] pt-[60px] px-[84px] relative w-full">
        <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] leading-[60px] not-italic relative shrink-0 text-[60px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">显示规则与交互逻辑</p>
        <Frame26 />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[200px] relative size-full" data-name="对话框">
      <Component1 />
      <Component2 />
      <Component11 />
      <Component16 />
    </div>
  );
}