import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Palette,
  Star,
  Type,
  Square,
  Layers,
  Ruler,
  MapPin,
  MousePointer,
  Layout,
  ToggleRight,
  CheckSquare,
  Tag as TagIcon,
  MessageSquare,
  MessageCircle,
  Bell,
  HelpCircle,
  Loader2,
  Send,
  Sliders,
  Award,
  Navigation,
  Edit,
  Image as ImageIcon,
  Link as LinkIcon,
  List,
  AlignHorizontalJustifyCenter,
  AlignVerticalJustifyCenter,
  AlignJustify,
  Video as VideoIcon,
  Music,
  Calendar,
  ArrowLeft,
} from "lucide-react";
import { Button, RADIUS, SPACING, useTheme } from "@tai-design/components";
import { APP_ROUTES } from "../home/siteConfig";

const SIDEBAR_WIDTH = 264;

const designSystemPath = (path?: string) =>
  path ? `${APP_ROUTES.designSystem}/${path}` : APP_ROUTES.designSystem;

const navigationGroups = [
  {
    title: "基础规范 (Foundations)",
    items: [
      { name: "Colors 颜色", path: designSystemPath(), icon: Palette },
      { name: "Text 文本", path: designSystemPath("typography"), icon: Type },
      { name: "Border Radius 圆角", path: designSystemPath("border-radius"), icon: Square },
      { name: "Shadow 投影", path: designSystemPath("shadow"), icon: Layers },
      { name: "Spacing 间距", path: designSystemPath("spacing"), icon: Ruler },
      { name: "Icon 图标", path: designSystemPath("icons"), icon: Star },
    ],
  },
  {
    title: "A. 布局类 (Layout)",
    items: [
      { name: "Row 水平排列", path: designSystemPath("row"), icon: AlignHorizontalJustifyCenter },
      { name: "Column 垂直排列", path: designSystemPath("column"), icon: AlignVerticalJustifyCenter },
      { name: "List 列表", path: designSystemPath("list"), icon: List },
      { name: "Card 卡片", path: designSystemPath("card"), icon: Layout },
      { name: "Tabs 标签页", path: designSystemPath("tabs"), icon: AlignJustify },
      { name: "Dialog 弹窗", path: designSystemPath("dialog"), icon: MessageSquare },
      { name: "页面导航栏", path: designSystemPath("page-top-nav"), icon: Navigation, isExt: true },
    ],
  },
  {
    title: "B. 展示类 (Display)",
    items: [
      { name: "Image 图片", path: designSystemPath("image"), icon: ImageIcon },
      { name: "Video 视频", path: designSystemPath("video"), icon: VideoIcon },
      { name: "AudioPlayer 音频", path: designSystemPath("audio-player"), icon: Music },
      { name: "Divider 分割线", path: designSystemPath("divider"), icon: Ruler },
      { name: "Badge 徽标", path: designSystemPath("badge"), icon: Award, isExt: true },
      { name: "Comment 评论", path: designSystemPath("comment"), icon: MessageCircle, isExt: true },
      { name: "Map 底图", path: designSystemPath("map"), icon: MapPin, isExt: true },
      { name: "Toast 轻提示", path: designSystemPath("toast"), icon: Bell, isExt: true },
      { name: "Tips 提示", path: designSystemPath("tips"), icon: HelpCircle, isExt: true },
      { name: "Push 推送", path: designSystemPath("push"), icon: Send, isExt: true },
      { name: "Loading 加载", path: designSystemPath("loading"), icon: Loader2, isExt: true },
    ],
  },
  {
    title: "C. 交互类 (Interactive)",
    items: [
      { name: "Button 基础按钮", path: designSystemPath("button"), icon: MousePointer },
      { name: "Chip 标签", path: designSystemPath("tag"), icon: TagIcon },
      { name: "Link 链接", path: designSystemPath("link"), icon: LinkIcon, isExt: true },
    ],
  },
  {
    title: "D. 输入类 (Input)",
    items: [
      { name: "TextField 输入框", path: designSystemPath("input"), icon: Edit },
      { name: "Slider 滑块", path: designSystemPath("slider"), icon: Sliders },
      { name: "ChoicePicker 选择器", path: designSystemPath("choice-picker"), icon: CheckSquare },
      { name: "CheckBox 勾选框", path: designSystemPath("checkbox"), icon: CheckSquare },
      { name: "DateTimeInput 时间", path: designSystemPath("datetime-input"), icon: Calendar },
      { name: "Switch 开关", path: designSystemPath("switch"), icon: ToggleRight, isExt: true },
    ],
  },
];

export function DesignSystemLayout() {
  const location = useLocation();
  const { colors, isDark, toggle } = useTheme();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: colors.bg.secondary,
        color: colors.text.primary,
      }}
    >
      <aside
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: SIDEBAR_WIDTH,
          borderRight: `1px solid ${colors.border.default}`,
          backgroundColor: colors.bg.primary,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          zIndex: 10,
        }}
      >
        <div
          style={{
            flexShrink: 0,
            padding: `${SPACING["4"]}px ${SPACING["4"]}px ${SPACING["3"]}px`,
            borderBottom: `1px solid ${colors.border.default}`,
            backgroundColor: colors.bg.primary,
          }}
        >
          <Link
            to={APP_ROUTES.home}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: SPACING["2"],
              width: "fit-content",
              padding: `${SPACING["2"]}px ${SPACING["3"]}px`,
              borderRadius: RADIUS.xl,
              border: `1px solid ${colors.border.subtle}`,
              backgroundColor: colors.bg.secondary,
              color: colors.text.primary,
              textDecoration: "none",
              fontSize: 16,
              lineHeight: "16px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            <ArrowLeft size={16} style={{ flexShrink: 0 }} />
            <span>返回欢迎页</span>
          </Link>
        </div>

        <div
          style={{
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            padding: SPACING["4"],
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["5"] }}>
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["2"] }}>
              <h1 style={{ margin: 0, fontSize: 30, lineHeight: "36px", fontWeight: 700 }}>
                TAI Design 规范库
              </h1>
              <p style={{ margin: 0, color: colors.text.tertiary, fontSize: 16, lineHeight: "22px" }}>
                In-Vehicle Design System
              </p>
            </div>

            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: SPACING["4"],
              }}
            >
              {navigationGroups.map((group) => (
                <div key={group.title}>
                  <h2
                    style={{
                      margin: `0 0 ${SPACING["2"]}px 0`,
                      padding: `0 ${SPACING["2"]}px`,
                      color: colors.text.tertiary,
                      fontSize: 11,
                      lineHeight: "16px",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {group.title}
                  </h2>

                  <div style={{ display: "flex", flexDirection: "column", gap: SPACING["2"] }}>
                    {group.items.map((item) => {
                      const isActive = location.pathname === item.path;
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: SPACING["2"],
                            padding: `${SPACING["2"]}px ${SPACING["2"]}px`,
                            borderRadius: RADIUS.xl,
                            textDecoration: "none",
                            transition: "background-color 150ms ease, color 150ms ease",
                            backgroundColor: isActive ? colors.button.primary.bg : colors.bg.primary,
                            color: isActive ? colors.button.primary.text : colors.text.secondary,
                            border: `1px solid ${isActive ? colors.button.primary.bg : colors.border.subtle}`,
                          }}
                        >
                          <Icon size={16} style={{ flexShrink: 0 }} />
                          <span
                            style={{
                              flex: 1,
                              minWidth: 0,
                              fontSize: 16,
                              lineHeight: "22px",
                              fontWeight: 500,
                            }}
                          >
                            {item.name}
                          </span>
                          {item.isExt ? (
                            <span
                              style={{
                                fontSize: 12,
                                lineHeight: "12px",
                                padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`,
                                borderRadius: RADIUS.xl,
                                backgroundColor: isActive ? colors.button.primary.text : colors.bg.secondary,
                                color: isActive ? colors.button.primary.bg : colors.text.tertiary,
                              }}
                            >
                              Ext
                            </span>
                          ) : null}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>

            <div
              style={{
                paddingTop: SPACING["4"],
                borderTop: `1px solid ${colors.border.default}`,
                display: "flex",
                flexDirection: "column",
                gap: SPACING["3"],
              }}
            >
              <Button variant="secondary" size="extraSmall" fullWidth onClick={toggle}>
                {isDark ? "切换浅色模式" : "切换深色模式"}
              </Button>
              <div style={{ color: colors.text.tertiary, fontSize: 12, lineHeight: "18px" }}>
                <p style={{ margin: 0 }}>版本: 1.0.0</p>
                <p style={{ margin: `${SPACING["2"]}px 0 0 0` }}>更新日期: 2026-03-10</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <main style={{ minHeight: "100vh", marginLeft: SIDEBAR_WIDTH, minWidth: 0 }}>
        <div style={{ maxWidth: 1680, margin: "0 auto", padding: SPACING["6"] }}>
          <Outlet context={{ isDark }} />
        </div>
      </main>
    </div>
  );
}
