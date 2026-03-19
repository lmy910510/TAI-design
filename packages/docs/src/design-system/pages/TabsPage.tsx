import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { 
  GlobalLeftTab, 
  GlobalLeftTabSimplifiedItem, 
  GlobalLeftTabSimplifiedBottomButton,
  GlobalLeftTabExtendedBottomButton,
} from "..";
import { 
  HeartIcon,
  PoweroffIcon,
  AppIcon,
  SettingIcon,
  ChevronRightIcon,
  LocationIcon
} from "tdesign-icons-react";

const imgTripBuddyPenguin = new URL("../../../../../assets/CodeBuddyAssets/5125_2022/4.png", import.meta.url).href;
const imgTeamAvatarRight = new URL("../../../../../assets/CodeBuddyAssets/5125_2022/5.png", import.meta.url).href;
const imgTeamAvatarTop = new URL("../../../../../assets/CodeBuddyAssets/5125_2022/6.png", import.meta.url).href;
const imgTeamAvatarLeft = new URL("../../../../../assets/CodeBuddyAssets/5125_2022/7.png", import.meta.url).href;

function TripBuddyCard() {
  return (
    <div className="backdrop-blur-[6.65px] bg-[#f7f8fa] h-[386px] relative rounded-[18px] shrink-0 w-[238px]" data-name="_Contact">
      <div className="absolute inset-x-0 top-[28px] flex justify-center">
        <div className="relative h-[330px] w-full">
          <p className="absolute left-1/2 top-0 -translate-x-1/2 font-['PingFang_SC:Medium',sans-serif] text-[32px] leading-[32px] text-black whitespace-nowrap">
            出游搭子
          </p>

          <div
            className="absolute left-[45px] top-[91px] h-[148px] w-[148px] overflow-hidden rounded-[74px] bg-white"
            style={{ boxShadow: "0px 2px 26.5px rgba(0, 0, 0, 0.08)" }}
          >
            <img alt="出游搭子企鹅头像" className="h-full w-full object-cover" src={imgTripBuddyPenguin} />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[74px] border-[4px] border-solid border-white" />
          </div>

          <button className="-translate-x-1/2 absolute bg-white content-stretch flex gap-[4px] items-center justify-center left-1/2 pl-[16px] pr-[12px] py-[12px] rounded-[24px] top-[263px] cursor-pointer hover:opacity-90 transition-opacity">
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
              <div className="bg-[rgba(234,237,242,0.7)] content-stretch flex items-center justify-center overflow-clip px-[4px] py-px relative rounded-[6px] shrink-0">
                <p className="font-['Noto_Sans_S_Chinese:Medium',sans-serif] leading-[24px] not-italic opacity-80 relative shrink-0 text-[#00b85f] text-[20px] whitespace-nowrap">自动</p>
              </div>
              <p className="font-['Noto_Sans_S_Chinese:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#697181] text-[24px] whitespace-nowrap">向导中</p>
            </div>
            <div className="flex items-center justify-center relative shrink-0 size-[24px] text-[#697181]">
              <ChevronRightIcon className="text-[24px]" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function TeamAvatarPile() {
  return (
    <div className="absolute left-[24.5px] top-[84px] h-[274px] w-[189px]">
      <div
        className="absolute left-[85.38px] top-0 overflow-hidden rounded-[32.73px] bg-white"
        style={{
          width: 64.51,
          height: 64.94,
          transform: "rotate(14deg)",
          boxShadow: "2px 1px 24px rgba(0, 0, 0, 0.16)",
          outline: "2.54px solid white",
          outlineOffset: "-2.54px",
        }}
      >
        <img alt="组队聊天头像1" className="h-full w-full object-cover" src={imgTeamAvatarTop} />
      </div>

      <div
        className="absolute left-[80.71px] top-[64.53px] overflow-hidden rounded-[34px] bg-white"
        style={{
          width: 68.54,
          height: 69,
          transform: "rotate(14deg)",
          boxShadow: "2px 1px 24px rgba(0, 0, 0, 0.16)",
          outline: "2.54px solid white",
          outlineOffset: "-2.54px",
        }}
      >
        <img alt="组队聊天头像2" className="h-full w-full object-cover" src={imgTeamAvatarRight} />
      </div>

      <div
        className="absolute left-0 top-[35.41px] overflow-hidden rounded-[47.96px] bg-white"
        style={{
          width: 95.52,
          height: 96.58,
          transform: "rotate(-8deg)",
          boxShadow:
            "2.9438px 1.4719px 35.3256px rgba(179, 207, 223, 0.29), 8.8314px -2.9438px 14.719px rgba(0, 0, 0, 0.08)",
          outline: "3.74px solid white",
          outlineOffset: "-3.74px",
        }}
      >
        <img alt="组队聊天头像3" className="h-full w-full object-cover" src={imgTeamAvatarLeft} />
      </div>
    </div>
  );
}

function TeamChatCard({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="flex-[1_0_0] min-h-px min-w-px relative rounded-[18px] w-full cursor-pointer select-none"
      style={{
        background: "#ffffff",
        outline: active ? "2px solid #000000" : "none",
        outlineOffset: active ? "-2px" : "0px",
        boxShadow: active ? "0 0 0 5px rgba(0,0,0,0.04)" : "none",
        transition: "outline 0.2s, box-shadow 0.2s",
      }}
      data-name="_Contact"
    >
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.9)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="absolute left-1/2 top-[28px] -translate-x-1/2 font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[32px] text-[32px] text-black whitespace-nowrap">
        组队聊天
      </p>
      <TeamAvatarPile />
      {active && (
        <div style={{ position: "absolute", top: 14, right: 14, width: 10, height: 10, borderRadius: "50%", background: "#000000" }} />
      )}
    </div>
  );
}

export function TabsPage() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const [activeTab, setActiveTab] = useState("nav");
  const [teamChatActive, setTeamChatActive] = useState(false);

  return (
    <div className="max-w-5xl pb-24">
      <div className="mb-8">
        <div className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
          isDark ? 'bg-white/10 border-white/20 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-900'
        }`}>
          A. 布局类 (Layout)
        </div>
        <h1 className="text-4xl font-bold mb-4">Tabs 标签页</h1>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          包含全局左侧标签栏和内容区顶部标签栏（顶部Tab待补充）。车机全局左侧标签栏用于一级功能的切换，提供精简和扩展两种模式以适应不同的业务场景。
        </p>
      </div>

      <div className="space-y-16">
        {/* 1. 精简版 */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              1. 全局左 Tab - 精简版 (Simplified)
            </h2>
            <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <strong className="text-[#0052D9]">严格还原：</strong>尺寸 96px 宽���大圆角 117.073px 胶囊形态；背景使用 <code>rgba(255,255,255,0.6)</code> 通透材质，激活态纯黑圆底。
            </p>
          </div>
          
          <div className={`p-[24px] border rounded-[42px] bg-[#EAEDF2] h-[800px] flex items-stretch ${isDark ? 'border-gray-700 bg-[#1A1D28]' : 'border-gray-200'}`}>
            <GlobalLeftTab 
              variant="simplified" 
              className="h-full shrink-0"
              bottomContent={
                <GlobalLeftTabSimplifiedBottomButton 
                  icon={<PoweroffIcon className="text-[36px]" />} 
                  onClick={() => console.log("Exit")} 
                />
              }
            >
              <GlobalLeftTabSimplifiedItem 
                active={activeTab === "nav"}
                onClick={() => setActiveTab("nav")}
                icon={<LocationIcon className="text-[36px]" />}
              />
              <GlobalLeftTabSimplifiedItem 
                active={activeTab === "fav"}
                onClick={() => setActiveTab("fav")}
                icon={<HeartIcon className="text-[36px]" />}
              />
            </GlobalLeftTab>

            <div className="ml-[24px] h-full flex-1">
              <div className="bg-white rounded-[42px] h-full w-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[24px] text-gray-500 mt-2">内容详情页</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 扩展版 */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              2. 全局左 Tab - 扩展版 (Extended)
            </h2>
            <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <strong className="text-[#0052D9]">严格还原：</strong>包含上下 Flex 自适应布局。宽度 278px，采用 Flex stretch 让组队聊天卡片自适应撑满高度，消除多余间隙。使用项目原生的头像与图片素材。
            </p>
          </div>
          
          <div className={`p-[24px] border rounded-[42px] bg-[#EAEDF2] h-[1080px] flex items-stretch ${isDark ? 'border-gray-700 bg-[#1A1D28]' : 'border-gray-200'}`}>
            <GlobalLeftTab 
              variant="extended" 
              className="h-full shrink-0"
              bottomContent={
                <>
                  <GlobalLeftTabExtendedBottomButton 
                    icon={<AppIcon className="text-[36px]" />} 
                    onClick={() => console.log("Apps")} 
                  />
                  <GlobalLeftTabExtendedBottomButton 
                    icon={<SettingIcon className="text-[36px]" />} 
                    onClick={() => console.log("Settings")} 
                  />
                </>
              }
            >
              <TripBuddyCard />
              <TeamChatCard active={teamChatActive} onClick={() => setTeamChatActive(!teamChatActive)} />
            </GlobalLeftTab>

            <div className="ml-[24px] h-full flex-1">
              <div className="bg-[rgba(246,247,250,0.95)] rounded-[40px] h-full w-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[24px] text-gray-500 mt-2">左侧扩展态</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}