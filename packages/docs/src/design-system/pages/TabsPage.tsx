import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  GlobalLeftTab,
  GlobalLeftTabExtendedBottomButton,
  GlobalLeftTabSimplifiedBottomButton,
  GlobalLeftTabSimplifiedItem,
} from "..";
import {
  SHADOW,
  useTheme,
  useThemeOptional,
} from "@tai-design/components";
import {
  HeartIcon,
  PoweroffIcon,
  AppIcon,
  SettingIcon,
  ChevronRightIcon,
  LocationIcon,
} from "tdesign-icons-react";

const imgTripBuddyPenguin = new URL("../../../../../assets/CodeBuddyAssets/5125_2022/4.png", import.meta.url).href;
const imgTeamAvatarRight = new URL("../../../../../assets/CodeBuddyAssets/5125_2022/5.png", import.meta.url).href;
const imgTeamAvatarTop = new URL("../../../../../assets/CodeBuddyAssets/5125_2022/6.png", import.meta.url).href;
const imgTeamAvatarLeft = new URL("../../../../../assets/CodeBuddyAssets/5125_2022/7.png", import.meta.url).href;

function TripBuddyCard() {
  const { colors } = useThemeOptional();

  return (
    <div
      className="relative h-[386px] w-[238px] shrink-0 backdrop-blur-[6.65px]"
      data-name="_Contact"
      style={{
        backgroundColor: colors.bg.secondary,
        borderRadius: 18,
        border: `1px solid ${colors.border.inverse}`,
      }}
    >
      <div className="absolute inset-x-0 top-[28px] flex justify-center">
        <div className="relative h-[330px] w-full">
          <p
            className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap font-['PingFang_SC:Medium',sans-serif] text-[32px] leading-[32px]"
            style={{ color: colors.text.primary }}
          >
            出游搭子
          </p>

          <div
            className="absolute left-[45px] top-[91px] h-[148px] w-[148px] overflow-hidden rounded-[74px]"
            style={{
              backgroundColor: colors.bg.primary,
              boxShadow: SHADOW.xl,
            }}
          >
            <img alt="出游搭子企鹅头像" className="h-full w-full object-cover" src={imgTripBuddyPenguin} />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[74px] border-[4px] border-solid"
              style={{ borderColor: colors.static.white }}
            />
          </div>

          <button
            type="button"
            className="absolute left-1/2 top-[263px] flex -translate-x-1/2 cursor-pointer items-center justify-center gap-[4px] rounded-[24px] pl-[16px] pr-[12px] py-[12px] transition-opacity hover:opacity-90"
            style={{ backgroundColor: colors.bg.primary }}
          >
            <div className="relative flex shrink-0 items-center gap-[6px]">
              <div
                className="relative flex shrink-0 items-center justify-center rounded-[6px] px-[4px] py-px"
                style={{ backgroundColor: colors.bg.subtle }}
              >
                <p
                  className="relative shrink-0 whitespace-nowrap font-['Noto_Sans_S_Chinese:Medium',sans-serif] text-[20px] leading-[24px] opacity-80"
                  style={{ color: colors.text.success }}
                >
                  自动
                </p>
              </div>
              <p
                className="relative shrink-0 whitespace-nowrap font-['Noto_Sans_S_Chinese:Medium',sans-serif] text-[24px] leading-[24px]"
                style={{ color: colors.text.secondary }}
              >
                向导中
              </p>
            </div>
            <div className="relative flex size-[24px] shrink-0 items-center justify-center" style={{ color: colors.text.secondary }}>
              <ChevronRightIcon className="text-[24px]" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function TeamAvatarPile() {
  const { colors } = useThemeOptional();

  return (
    <div className="absolute left-[24.5px] top-[84px] h-[274px] w-[189px]">
      <div
        className="absolute left-[85.38px] top-0 overflow-hidden rounded-[32.73px]"
        style={{
          width: 64.51,
          height: 64.94,
          transform: "rotate(14deg)",
          backgroundColor: colors.bg.primary,
          boxShadow: SHADOW.xl,
          outline: `2.54px solid ${colors.static.white}`,
          outlineOffset: "-2.54px",
        }}
      >
        <img alt="组队聊天头像1" className="h-full w-full object-cover" src={imgTeamAvatarTop} />
      </div>

      <div
        className="absolute left-[80.71px] top-[64.53px] overflow-hidden rounded-[34px]"
        style={{
          width: 68.54,
          height: 69,
          transform: "rotate(14deg)",
          backgroundColor: colors.bg.primary,
          boxShadow: SHADOW.xl,
          outline: `2.54px solid ${colors.static.white}`,
          outlineOffset: "-2.54px",
        }}
      >
        <img alt="组队聊天头像2" className="h-full w-full object-cover" src={imgTeamAvatarRight} />
      </div>

      <div
        className="absolute left-0 top-[35.41px] overflow-hidden rounded-[47.96px]"
        style={{
          width: 95.52,
          height: 96.58,
          transform: "rotate(-8deg)",
          backgroundColor: colors.bg.primary,
          boxShadow: SHADOW.xl,
          outline: `3.74px solid ${colors.static.white}`,
          outlineOffset: "-3.74px",
        }}
      >
        <img alt="组队聊天头像3" className="h-full w-full object-cover" src={imgTeamAvatarLeft} />
      </div>
    </div>
  );
}

function TeamChatCard({ active, onClick }: { active: boolean; onClick: () => void }) {
  const { colors } = useThemeOptional();

  return (
    <div
      onClick={onClick}
      className="relative min-h-px min-w-px w-full flex-[1_0_0] cursor-pointer select-none rounded-[18px]"
      style={{
        backgroundColor: colors.bg.primary,
        outline: active ? `2px solid ${colors.border.focus}` : "none",
        outlineOffset: active ? "-2px" : "0px",
        boxShadow: active ? `0 0 0 5px ${colors.bg.code}` : "none",
        transition: "outline 0.2s, box-shadow 0.2s",
      }}
      data-name="_Contact"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 border border-solid rounded-[18px]"
        style={{ borderColor: colors.border.inverse }}
      />
      <p
        className="absolute left-1/2 top-[28px] -translate-x-1/2 whitespace-nowrap font-['Noto_Sans_SC:Medium',sans-serif] text-[32px] font-medium leading-[32px]"
        style={{ color: colors.text.primary }}
      >
        组队聊天
      </p>
      <TeamAvatarPile />
      {active ? (
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: colors.interactive.default,
          }}
        />
      ) : null}
    </div>
  );
}

export function TabsPage() {
  useOutletContext<{ isDark: boolean }>();
  const { colors } = useTheme();
  const [activeTab, setActiveTab] = useState("nav");
  const [teamChatActive, setTeamChatActive] = useState(false);

  const previewSurfaceStyle: React.CSSProperties = {
    padding: 24,
    borderRadius: 42,
    border: `1px solid ${colors.border.strong}`,
    backgroundColor: colors.bg.subtle,
  };

  return (
    <div className="max-w-5xl pb-24">
      <div className="mb-8">
        <div
          className="mb-4 inline-block rounded-full border px-3 py-1 text-sm"
          style={{
            backgroundColor: colors.bg.code,
            borderColor: colors.border.default,
            color: colors.text.primary,
          }}
        >
          A. 布局类 (Layout)
        </div>
        <h1 className="mb-4 text-4xl font-bold">Tabs 标签页</h1>
        <p className="text-lg" style={{ color: colors.text.tertiary }}>
          包含全局左侧标签栏和内容区顶部标签栏（顶部Tab待补充）。车机全局左侧标签栏用于一级功能的切换，提供精简和扩展两种模式以适应不同的业务场景。
        </p>
      </div>

      <div className="space-y-16">
        <section>
          <div className="mb-6">
            <h2 className="flex items-center gap-2 text-2xl font-bold">1. 全局左 Tab - 精简版 (Simplified)</h2>
            <p className="mt-2" style={{ color: colors.text.tertiary }}>
              <strong style={{ color: colors.text.link }}>严格还原：</strong>
              尺寸 96px 宽、大圆角胶囊形态；容器使用玻璃感背景，激活态使用高对比度主交互色。
            </p>
          </div>

          <div className="flex h-[800px] items-stretch" style={previewSurfaceStyle}>
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
              <div
                className="flex h-full w-full items-center justify-center rounded-[42px]"
                style={{ backgroundColor: colors.bg.primary }}
              >
                <div className="text-center">
                  <p className="mt-2 text-[24px]" style={{ color: colors.text.tertiary }}>
                    内容详情页
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-6">
            <h2 className="flex items-center gap-2 text-2xl font-bold">2. 全局左 Tab - 扩展版 (Extended)</h2>
            <p className="mt-2" style={{ color: colors.text.tertiary }}>
              <strong style={{ color: colors.text.link }}>严格还原：</strong>
              包含上下 Flex 自适应布局。宽度 278px，采用 Flex stretch 让组队聊天卡片自适应撑满高度，消除多余间隙，并复用项目原生素材。
            </p>
          </div>

          <div className="flex h-[1080px] items-stretch" style={previewSurfaceStyle}>
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
              <div
                className="flex h-full w-full items-center justify-center rounded-[40px]"
                style={{ backgroundColor: colors.bg.secondary }}
              >
                <div className="text-center">
                  <p className="mt-2 text-[24px]" style={{ color: colors.text.tertiary }}>
                    左侧扩展态
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
