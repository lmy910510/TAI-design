import type { CSSProperties } from "react";
import { useState } from "react";
import {
  Input as TaiInput,
  RADIUS,
  SHADOW,
  SPACING,
  Switch as TaiSwitch,
  useTheme,
} from "@tai-design/components";
import { ChevronLeftIcon, SearchIcon, SettingIcon } from "tdesign-icons-react";
import { PageTopNavBar } from "../PageTopNavBar";
import { PageSubNavBar } from "../PageSubNavBar";
import { BaseMapComponent } from "../BaseMapComponent";

type NavType = "primary" | "secondary" | "inner";
type NavSize = "default" | "small";

export function PageTopNav() {
  const { colors, isDark } = useTheme();
  const [navType, setNavType] = useState<NavType>("primary");
  const [showTitle, setShowTitle] = useState(true);
  const [titleText, setTitleText] = useState("一级页面标题");
  const [buttonCount, setButtonCount] = useState(2);
  const [button1Text, setButton1Text] = useState("操作一");
  const [button2Text, setButton2Text] = useState("操作二");
  const [button3Text, setButton3Text] = useState("操作三");
  const [clickedAction, setClickedAction] = useState("");
  const [navSize, setNavSize] = useState<NavSize>("default");
  const [hasIcons, setHasIcons] = useState(true);

  const sizeConfig = {
    default: {
      height: 72,
      buttonHeight: 72,
      buttonWidth: 114,
      borderRadius: RADIUS["4xl"],
      iconSize: 32,
      backIconSize: 38,
      padding: SPACING["3"],
      gap: SPACING["3"],
      backPaddingX: SPACING["6"],
      backPaddingY: SPACING["3"],
      description: "默认尺寸 - 用于全页面导航",
    },
    small: {
      height: 48,
      buttonHeight: 48,
      buttonWidth: 76,
      borderRadius: RADIUS.xl,
      iconSize: 22,
      backIconSize: 28,
      padding: SPACING["2"],
      gap: SPACING["2"],
      backPaddingX: SPACING["4"],
      backPaddingY: SPACING["2"],
      description: "小尺寸 - 用于卡片内二级内容",
    },
  } as const;

  const innerConfig = sizeConfig[navSize];

  const chipStyle: CSSProperties = {
    display: "inline-block",
    padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`,
    marginBottom: SPACING["3"],
    borderRadius: 999,
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.secondary,
    color: colors.text.secondary,
    fontSize: 14,
  };

  const panelStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.elevated,
  };

  const previewShellStyle: CSSProperties = {
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.subtle}`,
    overflow: "hidden",
    backgroundColor: colors.bg.secondary,
    boxShadow: SHADOW.xl,
  };

  const glassCardStyle: CSSProperties = {
    borderRadius: RADIUS["4xl"],
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.glass,
    backdropFilter: "blur(24px)",
    boxShadow: SHADOW.xl,
  };

  const placeholderBlockStyle = (width: string, height: number): CSSProperties => ({
    width,
    height,
    borderRadius: RADIUS.xl,
    backgroundColor: colors.bg.tertiary,
  });

  const selectorButtonStyle = (active: boolean): CSSProperties => ({
    padding: `${SPACING["2"]}px ${SPACING["4"]}px`,
    borderRadius: RADIUS.xl,
    border: `1px solid ${active ? colors.button.primary.border : colors.border.subtle}`,
    backgroundColor: active ? colors.button.primary.bg : colors.bg.secondary,
    color: active ? colors.button.primary.text : colors.text.secondary,
    fontSize: 14,
    fontWeight: 600,
  });

  const infoTextStyle: CSSProperties = {
    color: colors.text.secondary,
    fontSize: 14,
  };

  const generateActions = () => {
    const actions = [] as Array<{ label: string; onClick: () => void }>;
    if (buttonCount >= 1) {
      actions.push({ label: button1Text, onClick: () => setClickedAction(button1Text) });
    }
    if (buttonCount >= 2) {
      actions.push({ label: button2Text, onClick: () => setClickedAction(button2Text) });
    }
    if (buttonCount >= 3) {
      actions.push({ label: button3Text, onClick: () => setClickedAction(button3Text) });
    }
    return actions;
  };

  const iconButtonStyle: CSSProperties = {
    height: innerConfig.buttonHeight,
    width: innerConfig.buttonWidth,
    borderRadius: innerConfig.borderRadius,
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.glass,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: colors.text.primary,
    backdropFilter: "blur(16px)",
  };

  const InnerNavBar = () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 90,
        padding: innerConfig.padding,
        height: innerConfig.height,
      }}
    >
      <button
        type="button"
        onClick={() => setClickedAction("页面内二级导航 - 返回")}
        style={{
          ...iconButtonStyle,
          width: innerConfig.buttonWidth,
          padding: `${innerConfig.backPaddingY}px ${innerConfig.backPaddingX}px`,
        }}
      >
        <ChevronLeftIcon size={innerConfig.backIconSize} />
      </button>

      {hasIcons ? (
        <div style={{ display: "flex", alignItems: "center", gap: innerConfig.gap }}>
          <button type="button" onClick={() => setClickedAction("页面内二级导航 - 搜索")} style={iconButtonStyle}>
            <SearchIcon size={innerConfig.iconSize} />
          </button>
          <button type="button" onClick={() => setClickedAction("页面内二级导航 - 设置")} style={iconButtonStyle}>
            <SettingIcon size={innerConfig.iconSize} />
          </button>
        </div>
      ) : null}
    </div>
  );

  return (
    <div className="pb-24">
      <div className="mb-12">
        <div style={chipStyle}>Components / 导航</div>
        <h1 className="text-4xl font-bold mb-4">页面导航栏 Navigation</h1>
        <p className="text-lg" style={{ color: colors.text.secondary }}>
          涵盖页面级顶部导航（一级 / 二级），以及页面内的二级卡片导航组合。所有预览容器与控制项均改为主题 token 驱动。
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">导航栏类型</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: SPACING["2"] }}>
          {[
            { value: "primary", label: "一级页面导航栏" },
            { value: "secondary", label: "二级页面导航栏" },
            { value: "inner", label: "页面内二级导航" },
          ].map((item) => (
            <button
              key={item.value}
              type="button"
              style={selectorButtonStyle(navType === item.value)}
              onClick={() => {
                const nextType = item.value as NavType;
                setNavType(nextType);
                if (nextType === "primary") {
                  setTitleText("一级页面标题");
                  setButtonCount(2);
                }
                if (nextType === "secondary") {
                  setTitleText("二级页面标题");
                  setButtonCount(2);
                }
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">预览</h2>
        <div style={previewShellStyle}>
          {navType === "inner" ? (
            <div style={{ position: "relative", width: "100%", minHeight: 540 }}>
              <div style={{ position: "absolute", inset: 0 }}>
                <BaseMapComponent className="w-full h-full" />
              </div>
              <div style={{ position: "relative", padding: SPACING["6"], minHeight: 540 }}>
                <div
                  style={{
                    ...glassCardStyle,
                    maxWidth: navSize === "small" ? 720 : 920,
                    padding: SPACING["4"],
                  }}
                >
                  <InnerNavBar />
                  <div style={{ padding: SPACING["4"], display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
                    <div style={placeholderBlockStyle("72%", 42)} />
                    <div style={placeholderBlockStyle("48%", 30)} />
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: SPACING["4"] }}>
                      <div style={placeholderBlockStyle("100%", 144)} />
                      <div style={placeholderBlockStyle("100%", 144)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ position: "relative", width: "100%", minHeight: 620 }}>
              <div style={{ position: "absolute", inset: 0 }}>
                <BaseMapComponent className="w-full h-full" />
              </div>
              <div style={{ position: "relative", padding: SPACING["6"], minHeight: 620 }}>
                <div style={{ ...glassCardStyle, minHeight: 520, display: "flex", flexDirection: "column" }}>
                  <div style={{ flexShrink: 0 }}>
                    {navType === "primary" ? (
                      <PageTopNavBar title={titleText} showTitle={showTitle} actions={generateActions()} />
                    ) : (
                      <PageSubNavBar title={titleText} onBack={() => setClickedAction("返回")} actions={generateActions()} />
                    )}
                  </div>
                  <div style={{ flex: 1, padding: SPACING["6"], paddingTop: 0 }}>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        minHeight: 360,
                        borderRadius: RADIUS["2xl"],
                        border: `1px solid ${colors.border.subtle}`,
                        backgroundColor: colors.bg.secondary,
                        display: "flex",
                        flexDirection: "column",
                        gap: SPACING["4"],
                        padding: SPACING["6"],
                      }}
                    >
                      <div style={placeholderBlockStyle("65%", 42)} />
                      <div style={placeholderBlockStyle("42%", 24)} />
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: SPACING["4"] }}>
                        <div style={placeholderBlockStyle("100%", 132)} />
                        <div style={placeholderBlockStyle("100%", 132)} />
                        <div style={placeholderBlockStyle("100%", 132)} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {clickedAction ? (
          <p className="mt-4 text-sm" style={{ color: colors.text.info }}>
            最近点击：{clickedAction}
          </p>
        ) : null}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">配置</h2>
        <div style={panelStyle}>
          {navType === "inner" ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: SPACING["6"] }}>
              <div>
                <label className="block text-sm font-medium mb-3" style={{ color: colors.text.secondary }}>
                  尺寸类型
                </label>
                <div style={{ display: "flex", flexDirection: "column", gap: SPACING["2"] }}>
                  {(Object.keys(sizeConfig) as NavSize[]).map((size) => (
                    <button key={size} type="button" style={selectorButtonStyle(navSize === size)} onClick={() => setNavSize(size)}>
                      {size === "default" ? "默认尺寸" : "小尺寸"}
                    </button>
                  ))}
                </div>
                <p className="text-sm mt-3" style={infoTextStyle}>{sizeConfig[navSize].description}</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3" style={{ color: colors.text.secondary }}>
                  右侧图标按钮
                </label>
                <div style={{ display: "flex", alignItems: "center", gap: SPACING["3"] }}>
                  <TaiSwitch checked={hasIcons} onChange={setHasIcons} isDark={isDark} />
                  <span style={infoTextStyle}>{hasIcons ? "当前显示两个图标按钮" : "仅显示返回按钮"}</span>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["5"], maxWidth: 720 }}>
              {navType === "primary" ? (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: SPACING["4"] }}>
                  <label className="text-base font-medium" style={{ color: colors.text.primary }}>显示标题</label>
                  <TaiSwitch checked={showTitle} onChange={setShowTitle} isDark={isDark} />
                </div>
              ) : null}

              {(navType === "secondary" || showTitle) ? (
                <div>
                  <label className="block text-base font-medium mb-2" style={{ color: colors.text.primary }}>
                    标题文本
                  </label>
                  <TaiInput value={titleText} onChange={setTitleText} placeholder="请输入标题" isDark={isDark} style={{ width: "100%" }} />
                </div>
              ) : null}

              <div>
                <label className="block text-base font-medium mb-3" style={{ color: colors.text.primary }}>
                  操作按钮数量（最多 {navType === "primary" ? "3" : "2"} 个）
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: SPACING["2"] }}>
                  {[0, 1, 2, ...(navType === "primary" ? [3] : [])].map((count) => (
                    <button key={count} type="button" style={selectorButtonStyle(buttonCount === count)} onClick={() => setButtonCount(count)}>
                      {count} 个
                    </button>
                  ))}
                </div>
              </div>

              {buttonCount >= 1 ? (
                <div>
                  <label className="block text-base font-medium mb-2" style={{ color: colors.text.primary }}>按钮 1 文本</label>
                  <TaiInput value={button1Text} onChange={setButton1Text} isDark={isDark} style={{ width: "100%" }} />
                </div>
              ) : null}

              {buttonCount >= 2 ? (
                <div>
                  <label className="block text-base font-medium mb-2" style={{ color: colors.text.primary }}>按钮 2 文本</label>
                  <TaiInput value={button2Text} onChange={setButton2Text} isDark={isDark} style={{ width: "100%" }} />
                </div>
              ) : null}

              {navType === "primary" && buttonCount >= 3 ? (
                <div>
                  <label className="block text-base font-medium mb-2" style={{ color: colors.text.primary }}>按钮 3 文本</label>
                  <TaiInput value={button3Text} onChange={setButton3Text} isDark={isDark} style={{ width: "100%" }} />
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>

      {navType !== "inner" ? (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">规格说明</h2>
          <div style={panelStyle}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: SPACING["6"] }}>
              <div>
                <h3 className="text-lg font-semibold mb-3">布局结构</h3>
                <ul className="space-y-2 text-sm" style={{ color: colors.text.secondary }}>
                  <li>• 整体高度为 132px（含 24px 内边距）</li>
                  <li>• 标题与操作按钮共用统一导航基线</li>
                  <li>• 顶部导航支持透明玻璃面板叠加在场景内容之上</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">按钮行为</h3>
                <ul className="space-y-2 text-sm" style={{ color: colors.text.secondary }}>
                  <li>• 操作按钮使用组件包 `Button` token</li>
                  <li>• 标题文本直接使用 `colors.text.primary`</li>
                  <li>• 二级导航返回图标与标题保持统一主题色</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">规格说明（Inner Nav）</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: SPACING["4"] }}>
            <div style={panelStyle}>
              <h3 className="text-lg font-semibold mb-4">间距规范</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: SPACING["2"] }}>
                <div className="flex justify-between"><span style={infoTextStyle}>按钮间距</span><span style={{ color: colors.text.primary }}>{innerConfig.gap}px</span></div>
                <div className="flex justify-between"><span style={infoTextStyle}>容器内边距</span><span style={{ color: colors.text.primary }}>{innerConfig.padding}px</span></div>
                <div className="flex justify-between"><span style={infoTextStyle}>按钮高度</span><span style={{ color: colors.text.primary }}>{innerConfig.buttonHeight}px</span></div>
              </div>
            </div>
            <div style={panelStyle}>
              <h3 className="text-lg font-semibold mb-4">交互规范</h3>
              <ul className="space-y-2 text-sm" style={{ color: colors.text.secondary }}>
                <li>• 内部按钮使用统一的玻璃态背景与边框 token</li>
                <li>• 返回按钮与功能按钮遵循同一圆角与留白体系</li>
                <li>• 可根据内容密度在默认 / 小尺寸之间切换</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">使用场景</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: SPACING["4"] }}>
          <div style={panelStyle}>
            <h3 className="text-lg font-semibold mb-3">✅ 适用场景</h3>
            <ul className="space-y-2 text-sm" style={{ color: colors.text.secondary }}>
              {navType === "primary" ? (
                <>
                  <li>• 一级页面顶部导航</li>
                  <li>• 需要明确页面标题的场景</li>
                  <li>• 需要全局操作按钮的页面</li>
                </>
              ) : null}
              {navType === "secondary" ? (
                <>
                  <li>• 二级页面顶部导航</li>
                  <li>• 需要从子页面返回上一级的场景</li>
                  <li>• 提供页面相关操作入口</li>
                </>
              ) : null}
              {navType === "inner" ? (
                <>
                  <li>• 地图或媒体卡片内的局部导航</li>
                  <li>• 弹层、浮层与卡片中的局部返回</li>
                  <li>• 需要轻量级功能按钮组的场景</li>
                </>
              ) : null}
            </ul>
          </div>
          <div style={panelStyle}>
            <h3 className="text-lg font-semibold mb-3">❌ 不适用场景</h3>
            <ul className="space-y-2 text-sm" style={{ color: colors.text.secondary }}>
              <li>• 需要标签切换的页面（应使用 Tabs）</li>
              <li>• 需要深层嵌套层级的多级面包屑场景</li>
              {navType !== "inner" ? <li>• 弹窗或抽屉内部（可使用小尺寸 Inner Nav）</li> : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
