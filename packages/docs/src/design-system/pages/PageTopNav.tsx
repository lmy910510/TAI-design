import { useOutletContext } from "react-router-dom";
import { PageTopNavBar } from "../PageTopNavBar";
import { PageSubNavBar } from "../PageSubNavBar";
import { BaseMapComponent } from "../BaseMapComponent";
import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeftIcon, SearchIcon, SettingIcon } from "tdesign-icons-react";

type NavType = "primary" | "secondary" | "inner";
type NavSize = "default" | "small";
type DemoMode = "interactive" | "static";

export function PageTopNav() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  
  // 导航栏类型选择
  const [navType, setNavType] = useState<NavType>("primary");
  
  // -- 一级和二级页面导航 配置状态 --
  const [showTitle, setShowTitle] = useState(true);
  const [titleText, setTitleText] = useState("一级页面标题");
  const [buttonCount, setButtonCount] = useState(2);
  const [button1Text, setButton1Text] = useState("操作一");
  const [button2Text, setButton2Text] = useState("操作二");
  const [button3Text, setButton3Text] = useState("操作三");
  const [clickedAction, setClickedAction] = useState<string>("");

  // -- 页面内二级导航 (Inner) 配置状态 --
  const [navSize, setNavSize] = useState<NavSize>("default");
  const [demoMode, setDemoMode] = useState<DemoMode>("interactive");
  const [hasIcons, setHasIcons] = useState(true);

  // 尺寸配置 (Inner Nav)
  const sizeConfig = {
    default: {
      height: "72px",
      buttonHeight: "72px",
      buttonWidth: "114px",
      borderRadius: "42px",
      iconSize: "42px",
      backIconSize: "48px",
      padding: "18px",
      gap: "18px",
      backPaddingX: "36px",
      backPaddingY: "18px",
      iconPadding: "42px",
      description: "默认尺寸 - 用于全页面导航",
    },
    small: {
      height: "48px",
      buttonHeight: "48px",
      buttonWidth: "76px",
      borderRadius: "28px",
      iconSize: "28px",
      backIconSize: "32px",
      padding: "12px",
      gap: "12px",
      backPaddingX: "24px",
      backPaddingY: "12px",
      iconPadding: "28px",
      description: "小尺寸 - 用于卡片内二级内容",
    },
  };
  const innerConfig = sizeConfig[navSize];

  // 生成操作按钮数组 (Primary / Secondary)
  const generateActions = () => {
    const actions = [];
    if (buttonCount >= 1) {
      actions.push({
        label: button1Text,
        onClick: () => setClickedAction(button1Text),
      });
    }
    if (buttonCount >= 2) {
      actions.push({
        label: button2Text,
        onClick: () => setClickedAction(button2Text),
      });
    }
    if (buttonCount >= 3) {
      actions.push({
        label: button3Text,
        onClick: () => setClickedAction(button3Text),
      });
    }
    return actions;
  };

  // --- Inner Nav Components ---
  const BackButton = () => (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 transition-all duration-200 hover:opacity-80 cursor-pointer"
      style={{
        height: innerConfig.buttonHeight,
        width: innerConfig.buttonWidth,
        paddingLeft: innerConfig.backPaddingX,
        paddingRight: innerConfig.backPaddingX,
        paddingTop: innerConfig.backPaddingY,
        paddingBottom: innerConfig.backPaddingY,
        backgroundColor: isDark ? '#2a2a2a' : '#f7f8fa',
        borderRadius: innerConfig.borderRadius,
      }}
      onClick={() => setClickedAction("页面内二级导航 - 返回")}
    >
      <ChevronLeftIcon
        size={navSize === "default" ? 38 : 28}
        style={{ color: isDark ? "rgba(255,255,255,0.92)" : "rgba(0,0,0,0.92)" }}
      />
    </div>
  );

  const IconButton = ({ index }: { index: number }) => {
    const Icon = index === 0 ? SearchIcon : SettingIcon;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.05 }}
        className="content-stretch flex items-center justify-center relative shrink-0 transition-all duration-200 hover:opacity-80 cursor-pointer"
        style={{
          height: innerConfig.buttonHeight,
          width: innerConfig.buttonWidth,
          backgroundColor: isDark ? '#2a2a2a' : '#f7f8fa',
          borderRadius: innerConfig.borderRadius,
        }}
        onClick={() => setClickedAction(`页面内二级导航 - 图标操作 ${index + 1}`)}
      >
        <Icon 
          size={navSize === "default" ? 32 : 22}
          style={{ color: isDark ? "rgba(255,255,255,0.92)" : "rgba(0,0,0,0.92)" }}
        />
      </motion.div>
    );
  };

  const InnerNavBar = () => (
    <div
      className="content-stretch flex items-center overflow-clip relative rounded-[18px] bg-transparent"
      style={{
        height: innerConfig.height,
        padding: innerConfig.padding,
        gap: "90px",
      }}
    >
      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
        <BackButton />
      </div>
      
      {hasIcons && (
        <div
          className="content-stretch flex items-start relative shrink-0"
          style={{ gap: innerConfig.gap }}
        >
          <IconButton index={0} />
          <IconButton index={1} />
        </div>
      )}
    </div>
  );
  // -------------------------

  return (
    <div className="pb-24">
      <div className="mb-12">
        <div
          className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
            isDark
              ? "bg-white/10 border-white/20 text-gray-200"
              : "bg-gray-100 border-gray-300 text-gray-900"
          }`}
        >
          Components / 导航
        </div>
        <h1 className="text-4xl font-bold mb-4">页面导航栏 (Navigation)</h1>
        <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          涵盖了页面级顶部导航（一级/二级），以及页面内的二级卡片导航组合。导航栏多使用透明背景设计，可自然叠加于各场景。
        </p>
      </div>

      {/* 变体选择 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">导航栏类型</h2>
        <div className="flex gap-4">
          <button
            onClick={() => {
              setNavType("primary");
              setTitleText("一级页面标题");
              setButtonCount(2);
            }}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              navType === "primary"
                ? isDark
                  ? "bg-white text-black"
                  : "bg-black text-white"
                : isDark
                ? "bg-[#1f1f1f] text-gray-400 hover:bg-[#2a2a2a] hover:text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
            }`}
          >
            一级页面导航栏
          </button>
          <button
            onClick={() => {
              setNavType("secondary");
              setTitleText("二级页面标题");
              setButtonCount(2);
            }}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              navType === "secondary"
                ? isDark
                  ? "bg-white text-black"
                  : "bg-black text-white"
                : isDark
                ? "bg-[#1f1f1f] text-gray-400 hover:bg-[#2a2a2a] hover:text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
            }`}
          >
            二级页面导航栏
          </button>
          <button
            onClick={() => {
              setNavType("inner");
            }}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              navType === "inner"
                ? isDark
                  ? "bg-white text-black"
                  : "bg-black text-white"
                : isDark
                ? "bg-[#1f1f1f] text-gray-400 hover:bg-[#2a2a2a] hover:text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
            }`}
          >
            页面内二级导航
          </button>
        </div>
      </div>

      {/* 预览区 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">预览</h2>
        
        {navType === "inner" ? (
          <div className="overflow-x-auto rounded-[36px] border border-gray-200 shadow-sm" style={{ background: '#eaedf2' }}>
            <div className="w-[1920px] relative" style={{ zoom: 0.5, height: "100%", minHeight: "800px" }}>
              {/* 背景图模拟底图（如地图或多媒体） */}
              <div className="absolute inset-0 w-full h-full">
                <BaseMapComponent className="w-full h-full" />
              </div>
              
              {/* 卡片浮层展示 Inner Nav */}
              <div 
                className={`absolute left-[144px] top-[144px] rounded-[48px] overflow-hidden ${
                  isDark ? 'bg-[#1e1e1e]/95 border-[#2a2a2a]' : 'bg-white/95 border-white'
                } backdrop-blur-2xl border-[3px] shadow-[0_32px_64px_rgba(0,0,0,0.1)] transition-all`}
                style={{
                  width: navSize === "small" ? "700px" : "900px",
                  height: navSize === "small" ? "450px" : "550px"
                }}
              >
                {/* 顶部注入 InnerNavBar */}
                <div className="px-[0px] pt-[24px] pb-[0px]">
                  <InnerNavBar />
                </div>
                
                {/* 模拟卡片详细内容 */}
                <div className="p-[42px] mt-2">
                   <div className={`h-[48px] w-3/4 rounded-[24px] mb-6 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`} />
                   <div className={`h-[32px] w-1/2 rounded-[16px] mb-12 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`} />
                   
                   <div className="flex gap-6">
                     <div className={`h-[120px] flex-1 rounded-[32px] ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`} />
                     <div className={`h-[120px] flex-1 rounded-[32px] ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`} />
                   </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-[36px] border border-gray-200 shadow-sm" style={{ background: '#eaedf2' }}>
            <div className="w-[1920px] relative" style={{ zoom: 0.5, height: "1080px", overflow: "hidden" }}>
              {/* 模拟全屏车机背景 - 加入光影背景使得玻璃质感更明显 */}
              <div className="absolute inset-0 bg-[#f4f5f7]">
                <div className="absolute top-[10%] left-[20%] w-[800px] h-[800px] bg-blue-200/50 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[100px]" />
              </div>

              {/* 主内容面板 */}
              <div className="absolute left-[144px] right-[144px] top-[48px] bottom-[48px]">
                <div 
                  className={`w-full h-full rounded-[42px] overflow-hidden flex flex-col ${
                    isDark ? 'bg-black/60 border border-white/10' : 'bg-white/70 border border-white/60'
                  } backdrop-blur-3xl shadow-[0_24px_48px_rgba(0,0,0,0.05)]`}
                >
                  {/* 顶部导航区 */}
                  <div className="shrink-0">
                    {navType === "primary" ? (
                      <PageTopNavBar
                        title={titleText}
                        showTitle={showTitle}
                        actions={generateActions()}
                      />
                    ) : (
                      <PageSubNavBar
                        title={titleText}
                        onBack={() => setClickedAction("返回")}
                        actions={generateActions()}
                      />
                    )}
                  </div>

                  {/* 模拟下方的页面内容区，自然撑满剩余空间 */}
                  <div className="flex-1 p-[48px] pt-0">
                    <div className={`w-full h-full rounded-[32px] ${
                      isDark ? 'bg-white/5' : 'bg-white/50'
                    } border ${
                      isDark ? 'border-white/5' : 'border-white/40'
                    }`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {clickedAction && (
          <p className="mt-4 text-sm text-blue-600">
            最近点击: {clickedAction}
          </p>
        )}
      </div>

      {/* 配置区 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">配置</h2>
        <div
          className={`p-8 border rounded-xl ${
            isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"
          }`}
        >
          {navType === "inner" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 页面内二��导航 配置 */}
              <div>
                <label className={`block text-sm font-medium mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  ���寸类型
                </label>
                <div className="space-y-3">
                  {(Object.keys(sizeConfig) as NavSize[]).map((size) => (
                    <button
                      key={size}
                      onClick={() => setNavSize(size)}
                      className={`w-full text-left px-6 py-4 rounded-xl transition-all border ${
                        navSize === size
                          ? isDark
                            ? 'bg-white text-black border-white'
                            : 'bg-black text-white border-black'
                          : isDark
                          ? 'bg-[#1f1f1f] text-gray-300 border-[#2a2a2a] hover:bg-[#333333]'
                          : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-medium mb-1">
                        {size === "default" ? "默认尺寸" : "小尺寸"}
                      </div>
                      <div className={`text-sm ${navSize === size ? (isDark ? 'text-gray-700' : 'text-gray-300') : (isDark ? 'text-gray-500' : 'text-gray-500')}`}>
                        {sizeConfig[size].description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  右侧图标按钮
                </label>
                <button
                  onClick={() => setHasIcons(!hasIcons)}
                  className={`w-full text-left px-6 py-4 rounded-xl transition-all border ${
                    hasIcons
                      ? isDark
                        ? 'bg-white text-black border-white'
                        : 'bg-black text-white border-black'
                      : isDark
                      ? 'bg-[#1f1f1f] text-gray-300 border-[#2a2a2a] hover:bg-[#333333]'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-medium mb-1">
                    {hasIcons ? "显示图标" : "隐藏图标"}
                  </div>
                  <div className={`text-sm ${hasIcons ? (isDark ? 'text-gray-700' : 'text-gray-300') : (isDark ? 'text-gray-500' : 'text-gray-500')}`}>
                    {hasIcons ? "当前显示两个图标按钮" : "仅显示返回按钮"}
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 max-w-2xl">
              {/* 一级和二级导航栏通用配置 */}
              {navType === "primary" && (
                <div className="flex items-center justify-between">
                  <label className="text-base font-medium">显示标题</label>
                  <button
                    onClick={() => setShowTitle(!showTitle)}
                    className={`w-14 h-8 rounded-full transition-colors relative ${
                      showTitle ? "bg-black" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                        showTitle ? "translate-x-7" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              )}

              {(navType === "secondary" || showTitle) && (
                <div>
                  <label className="block text-base font-medium mb-2">
                    标题文本
                  </label>
                  <input
                    type="text"
                    value={titleText}
                    onChange={(e) => setTitleText(e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDark
                        ? "bg-[#1f1f1f] border-[#2a2a2a] text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                    placeholder="请输入标题"
                  />
                </div>
              )}

              <div>
                <label className="block text-base font-medium mb-3">
                  操作按钮数量（最多 {navType === "primary" ? "3" : "2"} 个）
                </label>
                <div className="flex gap-3">
                  {[0, 1, 2, ...(navType === "primary" ? [3] : [])].map((count) => (
                    <button
                      key={count}
                      onClick={() => setButtonCount(count)}
                      className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                        buttonCount === count
                          ? "bg-black text-white"
                          : isDark
                          ? "bg-[#1f1f1f] text-gray-400 hover:text-white"
                          : "bg-gray-100 text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {count}个
                    </button>
                  ))}
                </div>
              </div>

              {buttonCount >= 1 && (
                <div>
                  <label className="block text-base font-medium mb-2">按钮1文本</label>
                  <input
                    type="text"
                    value={button1Text}
                    onChange={(e) => setButton1Text(e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDark ? "bg-[#1f1f1f] border-[#2a2a2a] text-white" : "bg-white border-gray-300 text-gray-900"
                    }`}
                  />
                </div>
              )}

              {buttonCount >= 2 && (
                <div>
                  <label className="block text-base font-medium mb-2">按钮2文本</label>
                  <input
                    type="text"
                    value={button2Text}
                    onChange={(e) => setButton2Text(e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDark ? "bg-[#1f1f1f] border-[#2a2a2a] text-white" : "bg-white border-gray-300 text-gray-900"
                    }`}
                  />
                </div>
              )}

              {navType === "primary" && buttonCount >= 3 && (
                <div>
                  <label className="block text-base font-medium mb-2">按钮3文本</label>
                  <input
                    type="text"
                    value={button3Text}
                    onChange={(e) => setButton3Text(e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDark ? "bg-[#1f1f1f] border-[#2a2a2a] text-white" : "bg-white border-gray-300 text-gray-900"
                    }`}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 规格说明 */}
      {navType !== "inner" && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">规格说明</h2>
          <div
            className={`p-6 border rounded-xl ${
              isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"
            }`}
          >
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">布局结构</h3>
                <ul className={`space-y-2 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  <li>• <strong>整体高度：</strong>132px（含padding 24px）</li>
                  <li>• <strong>内边距：</strong>24px</li>
                  <li>• <strong>圆角：</strong>18px</li>
                  <li>• <strong>左右间距：</strong>90px</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">标题样式</h3>
                <ul className={`space-y-2 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  <li>• <strong>字体大小：</strong>42px</li>
                  <li>• <strong>字体：</strong>Noto Sans S Chinese Medium</li>
                  <li>• <strong>颜色：</strong>黑色 (#000000)</li>
                  <li>• <strong>行高：</strong>42px</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">操作按钮</h3>
                <ul className={`space-y-2 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  <li>• <strong>高度：</strong>84px（大号按钮）</li>
                  <li>• <strong>内边距：</strong>左右42px</li>
                  <li>• <strong>圆角：</strong>42px（完全圆角）</li>
                  <li>• <strong>间距：</strong>按钮之间30px</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">按钮文字</h3>
                <ul className={`space-y-2 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  <li>• <strong>字体大小：</strong>32px</li>
                  <li>• <strong>字体：</strong>Noto Sans S Chinese Medium</li>
                  <li>• <strong>颜色：</strong>rgba(0,0,0,0.92)</li>
                  <li>• <strong>行高：</strong>32px</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {navType === "inner" && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">规格说明 (Inner Nav)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 border rounded-xl ${isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'}`}>
              <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                间距规范
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>按钮间距 (默认)</span>
                  <span className={`font-mono ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>18px</span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>按钮间距 (小)</span>
                  <span className={`font-mono ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>12px</span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>左右区域间距</span>
                  <span className={`font-mono ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>90px</span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>容器内边距</span>
                  <span className={`font-mono ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>18px / 12px</span>
                </div>
              </div>
            </div>

            <div className={`p-6 border rounded-xl ${isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'}`}>
              <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                交互规范
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>悬停时透明度降至 80%</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>过渡动画时长 200ms</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>图标按钮支持淡入动画</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 使用场景 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">使用场景</h2>
        <div className="grid grid-cols-2 gap-6">
          <div
            className={`p-6 border rounded-xl ${
              isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"
            }`}
          >
            <h3 className="text-lg font-semibold mb-3">✅ 适用场景</h3>
            <ul className={`space-y-2 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              {navType === "primary" && (
                <>
                  <li>• 一级页面顶部导航</li>
                  <li>• 需要明确页面标题的场景</li>
                  <li>• 需要全局操作按钮的页面</li>
                </>
              )}
              {navType === "secondary" && (
                <>
                  <li>• 二级页面顶部导航</li>
                  <li>• 需要从子页面返回上一级的场景</li>
                  <li>• 提供页面相关的具体操作入口</li>
                </>
              )}
              {navType === "inner" && (
                <>
                  <li>• 全页面导航栏，用于应用主要导航层级 (默认尺寸)</li>
                  <li>• 独立页面的返回导航和功能区 (默认尺寸)</li>
                  <li>• 卡片内的二级导航，例如地图上的信息卡片 (小尺寸)</li>
                  <li>• 弹窗或浮层内的导航控制 (小尺寸)</li>
                </>
              )}
            </ul>
          </div>

          <div
            className={`p-6 border rounded-xl ${
              isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"
            }`}
          >
            <h3 className="text-lg font-semibold mb-3">❌ 不适用场景</h3>
            <ul className={`space-y-2 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              <li>• 需要标签切换的页面 (应使用Tabs)</li>
              <li>• 需要深层嵌套层级的多级面包屑场景</li>
              {navType !== "inner" && (
                <li>• 弹窗或抽屉组件内部 (可用小尺寸 Inner Nav 代替)</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
