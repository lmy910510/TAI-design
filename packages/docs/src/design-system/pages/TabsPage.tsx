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
  SPACING,
  STATIC,
  useTheme,
  useThemeOptional,
} from "@tai-design/components";
import { DocPageHeader } from "../DocComponents";
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
  const { tokens } = useThemeOptional();

  return (
    <div
      className="relative h-[386px] w-[238px] shrink-0 backdrop-blur-[6.65px]"
      data-name="_Contact"
      style={{
        backgroundColor: tokens.bgColor.container,
        borderRadius: 18,
        border: `1px solid ${tokens.borderColor.inverse}`,
      }}
    >
      <div className="absolute inset-x-0 top-[28px] flex justify-center">
        <div className="relative h-[330px] w-full">
          <p
            className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap font-['PingFang_SC:Medium',sans-serif] text-[32px] leading-[32px]"
            style={{ color: tokens.textColor.primary }}
          >
            出游搭子
          </p>

          <div
            className="absolute left-[45px] top-[91px] h-[148px] w-[148px] overflow-hidden rounded-[74px]"
            style={{
              backgroundColor: tokens.bgColor.page,
              boxShadow: SHADOW.xl,
            }}
          >
            <img alt="出游搭子企鹅头像" className="h-full w-full object-cover" src={imgTripBuddyPenguin} />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[74px] border-[4px] border-solid"
              style={{ borderColor: STATIC.white }}
            />
          </div>

          <button
            type="button"
            className="absolute left-1/2 top-[263px] flex -translate-x-1/2 cursor-pointer items-center justify-center gap-[4px] rounded-[24px] pl-[16px] pr-[12px] py-[12px] transition-opacity hover:opacity-90"
            style={{ backgroundColor: tokens.bgColor.page }}
          >
            <div className="relative flex shrink-0 items-center gap-[6px]">
              <div
                className="relative flex shrink-0 items-center justify-center rounded-[6px] px-[4px] py-px"
                style={{ backgroundColor: tokens.bgColor.secondaryContainer }}
              >
                <p
                  className="relative shrink-0 whitespace-nowrap font-['Noto_Sans_S_Chinese:Medium',sans-serif] text-[20px] leading-[24px] opacity-80"
                  style={{ color: tokens.functionalColor.success.main }}
                >
                  自动
                </p>
              </div>
              <p
                className="relative shrink-0 whitespace-nowrap font-['Noto_Sans_S_Chinese:Medium',sans-serif] text-[24px] leading-[24px]"
                style={{ color: tokens.textColor.secondary }}
              >
                向导中
              </p>
            </div>
            <div className="relative flex size-[24px] shrink-0 items-center justify-center" style={{ color: tokens.textColor.secondary }}>
              <ChevronRightIcon className="text-[24px]" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function TeamAvatarPile() {
  const { tokens } = useThemeOptional();

  return (
    <div className="absolute left-[24.5px] top-[84px] h-[274px] w-[189px]">
      <div
        className="absolute left-[85.38px] top-0 overflow-hidden rounded-[32.73px]"
        style={{
          width: 64.51,
          height: 64.94,
          transform: "rotate(14deg)",
          backgroundColor: tokens.bgColor.page,
          boxShadow: SHADOW.xl,
          outline: `2.54px solid ${STATIC.white}`,
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
          backgroundColor: tokens.bgColor.page,
          boxShadow: SHADOW.xl,
          outline: `2.54px solid ${STATIC.white}`,
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
          backgroundColor: tokens.bgColor.page,
          boxShadow: SHADOW.xl,
          outline: `3.74px solid ${STATIC.white}`,
          outlineOffset: "-3.74px",
        }}
      >
        <img alt="组队聊天头像3" className="h-full w-full object-cover" src={imgTeamAvatarLeft} />
      </div>
    </div>
  );
}

function TeamChatCard({ active, onClick }: { active: boolean; onClick: () => void }) {
  const { tokens } = useThemeOptional();

  return (
    <div
      onClick={onClick}
      className="relative min-h-px min-w-px w-full flex-[1_0_0] cursor-pointer select-none rounded-[18px]"
      style={{
        backgroundColor: tokens.bgColor.page,
        outline: active ? `2px solid ${tokens.borderColor.focus}` : "none",
        outlineOffset: active ? "-2px" : "0px",
        boxShadow: active ? `0 0 0 5px ${tokens.bgColor.code}` : "none",
        transition: "outline 0.2s, box-shadow 0.2s",
      }}
      data-name="_Contact"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 border border-solid rounded-[18px]"
        style={{ borderColor: tokens.borderColor.inverse }}
      />
      <p
        className="absolute left-1/2 top-[28px] -translate-x-1/2 whitespace-nowrap font-['Noto_Sans_SC:Medium',sans-serif] text-[32px] font-medium leading-[32px]"
        style={{ color: tokens.textColor.primary }}
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
            background: tokens.textColor.primary,
          }}
        />
      ) : null}
    </div>
  );
}

export function TabsPage() {
  useOutletContext<{ isDark: boolean }>();
  const { tokens } = useTheme();
  const [activeTab, setActiveTab] = useState("nav");
  const [teamChatActive, setTeamChatActive] = useState(false);

  const previewSurfaceStyle: React.CSSProperties = {
    padding: 24,
    borderRadius: 42,
    border: `1px solid ${tokens.borderColor.level2}`,
    backgroundColor: tokens.bgColor.secondaryContainer,
  };

  return (
    <div className="max-w-5xl pb-24">
      <DocPageHeader
        category="A. 布局类 (Layout)"
        title="Tabs 标签页"
        description="包含全局左侧标签栏和内容区顶部标签栏（顶部Tab待补充）。车机全局左侧标签栏用于一级功能的切换，提供精简和扩展两种模式以适应不同的业务场景。"
      />

      <div className="space-y-16">
        <section>
          <div className="mb-6">
            <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"], display: "flex", alignItems: "center", gap: 8 }}>1. 全局左 Tab - 精简版 (Simplified)</h2>
            <p className="mt-2" style={{ color: tokens.textColor.tertiary }}>
              <strong style={{ color: tokens.textColor.link }}>严格还原：</strong>
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
                style={{ backgroundColor: tokens.bgColor.page }}
              >
                <div className="text-center">
                  <p className="mt-2 text-[24px]" style={{ color: tokens.textColor.tertiary }}>
                    内容详情页
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-6">
            <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"], display: "flex", alignItems: "center", gap: 8 }}>2. 全局左 Tab - 扩展版 (Extended)</h2>
            <p className="mt-2" style={{ color: tokens.textColor.tertiary }}>
              <strong style={{ color: tokens.textColor.link }}>严格还原：</strong>
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
                style={{ backgroundColor: tokens.bgColor.container }}
              >
                <div className="text-center">
                  <p className="mt-2 text-[24px]" style={{ color: tokens.textColor.tertiary }}>
                    左侧扩展态
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------- 🎨 Token 使用清单 -------- */}
        <section>
          <h2
            style={{
              fontSize: tokens.typography.title.section.fontSize,
              fontWeight: tokens.typography.title.section.fontWeight,
              lineHeight: tokens.typography.title.section.lineHeight,
              color: tokens.textColor.primary,
              marginBottom: 18,
            }}
          >
            🎨 Token 使用清单
          </h2>
          <p
            style={{
              fontSize: tokens.typography.body.primary.fontSize,
              lineHeight: tokens.typography.body.primary.lineHeight,
              color: tokens.textColor.secondary,
              marginBottom: 24,
            }}
          >
            Tabs 组件<strong>没有组件级 token</strong>，全部直接使用公开语义 token。
          </p>

          <div
            style={{
              borderRadius: 30,
              border: `1px solid ${tokens.borderColor.level1}`,
              overflow: "hidden",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: tokens.typography.body.secondary.fontSize,
                lineHeight: tokens.typography.body.secondary.lineHeight,
              }}
            >
              <thead>
                <tr style={{ backgroundColor: tokens.bgColor.container }}>
                  {["部位", "Token 路径", "用途说明"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "18px 24px",
                        textAlign: "left",
                        fontWeight: tokens.typography.label.tag.fontWeight,
                        color: tokens.textColor.secondary,
                        borderBottom: `1px solid ${tokens.borderColor.level1}`,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["标签栏背景 (card / pill)", "bgColor.container", "非激活区域的背景色"],
                  ["激活态标签背景", "bgColor.elevated", "card / pill 变体选中标签的背景"],
                  ["激活态文字", "textColor.primary", "选中标签的文字颜色"],
                  ["非激活态文字", "textColor.tertiary", "未选中标签的文字颜色"],
                  ["禁用态文字", "textColor.disabled", "禁用标签的文字颜色"],
                  ["Line 指示条", "textColor.primary", "line 变体底部指示条颜色"],
                ].map(([part, token, desc], i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: i < 5 ? `1px solid ${tokens.borderColor.level1}` : "none",
                    }}
                  >
                    <td style={{ padding: "14px 24px", color: tokens.textColor.primary }}>{part}</td>
                    <td style={{ padding: "14px 24px" }}>
                      <code
                        style={{
                          padding: "4px 10px",
                          borderRadius: 8,
                          backgroundColor: tokens.bgColor.code,
                          color: tokens.textColor.brand,
                          fontSize: tokens.typography.meta.caption.fontSize,
                        }}
                      >
                        {token}
                      </code>
                    </td>
                    <td style={{ padding: "14px 24px", color: tokens.textColor.secondary }}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              marginTop: 18,
              padding: "18px 24px",
              borderRadius: 18,
              backgroundColor: tokens.bgColor.code,
              fontSize: tokens.typography.meta.caption.fontSize,
              lineHeight: tokens.typography.meta.caption.lineHeight,
              color: tokens.textColor.secondary,
            }}
          >
            <p style={{ marginBottom: 6 }}>
              <strong style={{ color: tokens.textColor.primary }}>排版 token：</strong>
              激活态字重 <code>typography.label.badge.fontWeight</code>（600），非激活态 <code>typography.label.tab.fontWeight</code>（500）。字号由 SIZE_CONFIG 按尺寸确定。
            </p>
            <p style={{ marginBottom: 6 }}>
              <strong style={{ color: tokens.textColor.primary }}>布局常量：</strong>
              card 圆角 24px、pill 圆角 42px。激活态附带投影以增强层次感。
            </p>
            <p>
              <strong style={{ color: tokens.textColor.primary }}>内容区：</strong>
              上方间距 24px。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
