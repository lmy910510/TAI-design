import {
  Suspense,
  lazy,
  type ComponentType,
  type LazyExoticComponent,
  type ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { Button, RADIUS, SPACING, useTheme } from "@tai-design/components";
import { blueGray } from "../data/colorTokens";
import {
  APP_ROUTES,
  ProductEntryKey,
  productEntryMap,
} from "./siteConfig";

const CONTENT_MAX_WIDTH = 1200;
const FRAME_CANVAS_WIDTH = 1920;
const FRAME_CANVAS_HEIGHT = 1080;
const FRAME_STAGE_WIDTH = FRAME_CANVAS_WIDTH / 2;
const FRAME_STAGE_HEIGHT = FRAME_CANVAS_HEIGHT / 2;
const FRAME_SCALE = 0.5;

const DiscoveryFrame = lazy(() => import("../imports/框架随行发现"));
const MarketFrame = lazy(() => import("../imports/框架随行市集"));
const ChatFrame = lazy(() => import("../imports/框架随行Chat"));
const ChatTeamFrame = lazy(() => import("../imports/框架随行ChatTeam"));

type FramePreviewCanvas = {
  title: string;
  routeLabel: string;
  FrameComponent: LazyExoticComponent<ComponentType<any>>;
};

function FrameWorkspaceFallback() {
  const { colors } = useTheme();

  return (
    <div
      style={{
        width: FRAME_CANVAS_WIDTH,
        height: FRAME_CANVAS_HEIGHT,
        borderRadius: RADIUS["2xl"],
        backgroundColor: colors.bg.secondary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: colors.text.secondary,
        fontSize: 18,
        lineHeight: "24px",
      }}
    >
      框架加载中...
    </div>
  );
}

function getReadinessColor(
  readiness: string,
  isDark: boolean,
  colors: ReturnType<typeof useTheme>["colors"]
) {
  if (readiness === "已就绪") {
    return {
      backgroundColor: colors.functional.success[12],
      color: colors.functional.success.main,
      borderColor: colors.functional.success[30],
    };
  }

  if (readiness === "待接入") {
    return {
      backgroundColor: colors.functional.notice[12],
      color: colors.functional.notice.main,
      borderColor: colors.functional.notice[30],
    };
  }

  return {
    backgroundColor: isDark ? blueGray[90] : blueGray[10],
    color: isDark ? blueGray[30] : blueGray[80],
    borderColor: colors.border.default,
  };
}

function FrameWorkspacePreview({
  badgeText,
  note,
  frames,
}: {
  badgeText: string;
  note: string;
  frames: FramePreviewCanvas[];
}) {
  const { colors } = useTheme();
  const framesMinWidth =
    frames.length * FRAME_STAGE_WIDTH + (frames.length - 1) * SPACING["3"];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: SPACING["3"] }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: SPACING["2"],
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`,
            borderRadius: RADIUS.xl,
            backgroundColor: colors.functional.info[12],
            color: colors.functional.info.main,
            border: `1px solid ${colors.functional.info[24]}`,
            fontSize: 12,
            lineHeight: "12px",
            fontWeight: 500,
          }}
        >
          {badgeText}
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`,
            borderRadius: RADIUS.xl,
            backgroundColor: colors.bg.secondary,
            color: colors.text.secondary,
            border: `1px solid ${colors.border.subtle}`,
            fontSize: 12,
            lineHeight: "12px",
            fontWeight: 500,
          }}
        >
          {`${frames.length} 个画布`}
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`,
            borderRadius: RADIUS.xl,
            backgroundColor: colors.functional.notice[12],
            color: colors.functional.notice.main,
            border: `1px solid ${colors.functional.notice[24]}`,
            fontSize: 12,
            lineHeight: "12px",
            fontWeight: 500,
          }}
        >
          {`${FRAME_CANVAS_WIDTH}×${FRAME_CANVAS_HEIGHT} 等比 ${FRAME_SCALE * 100}%`}
        </span>
      </div>

      <div
        style={{
          overflowX: "auto",
          overflowY: "hidden",
        }}
      >
        <div
          style={{
            minWidth: framesMinWidth,
            display: "flex",
            justifyContent: frames.length === 1 ? "center" : "flex-start",
            gap: SPACING["3"],
          }}
        >
          {frames.map(({ title, routeLabel, FrameComponent }) => (
            <div
              key={title}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: SPACING["2"],
                padding: SPACING["2"],
                borderRadius: RADIUS["2xl"],
                backgroundColor: colors.bg.secondary,
                border: `1px solid ${colors.border.subtle}`,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: SPACING["2"] }}>
                <span
                  style={{
                    fontSize: 14,
                    lineHeight: "18px",
                    fontWeight: 600,
                    color: colors.text.primary,
                  }}
                >
                  {title}
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    width: "fit-content",
                    padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`,
                    borderRadius: RADIUS.xl,
                    backgroundColor: colors.bg.primary,
                    color: colors.text.secondary,
                    border: `1px solid ${colors.border.subtle}`,
                    fontSize: 12,
                    lineHeight: "12px",
                    fontWeight: 500,
                  }}
                >
                  {routeLabel}
                </span>
              </div>

              <div
                style={{
                  width: FRAME_STAGE_WIDTH,
                  height: FRAME_STAGE_HEIGHT,
                  position: "relative",
                  flexShrink: 0,
                  overflow: "hidden",
                  borderRadius: RADIUS.xl,
                }}
              >
                <div
                  style={{
                    width: FRAME_CANVAS_WIDTH,
                    height: FRAME_CANVAS_HEIGHT,
                    position: "absolute",
                    left: 0,
                    top: 0,
                    transform: `scale(${FRAME_SCALE})`,
                    transformOrigin: "top left",
                  }}
                >
                  <Suspense fallback={<FrameWorkspaceFallback />}>
                    <FrameComponent />
                  </Suspense>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p
        style={{
          margin: 0,
          fontSize: 12,
          lineHeight: "18px",
          color: colors.text.secondary,
        }}
      >
        {note}
      </p>
    </div>
  );
}

function PlaceholderPreview({
  icon,
  shortTitle,
  isDark,
}: {
  icon: ReactNode;
  shortTitle: string;
  isDark: boolean;
}) {
  const { colors } = useTheme();

  return (
    <div
      style={{
        minHeight: 540,
        borderRadius: RADIUS["2xl"],
        backgroundColor: colors.bg.secondary,
        border: `1px solid ${colors.border.subtle}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: SPACING["3"],
        padding: SPACING["5"],
      }}
    >
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: RADIUS.xl,
          backgroundColor: isDark ? blueGray[90] : blueGray[10],
          color: isDark ? blueGray[30] : blueGray[80],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontSize: 18,
          lineHeight: "24px",
          fontWeight: 600,
        }}
      >
        {shortTitle} 预览
      </div>
    </div>
  );
}

export function ProductWorkspacePage({ entryKey }: { entryKey: ProductEntryKey }) {
  const navigate = useNavigate();
  const { colors, isDark, toggle } = useTheme();
  const entry = productEntryMap[entryKey];
  const Icon = entry.icon;
  const readinessStyle = getReadinessColor(entry.readiness, isDark, colors);

  const framePreviewConfig =
    entryKey === "discovery"
      ? {
          badgeText: "基础框架已接入",
          note: "已直接复用规范库中的精简版框架，点击左侧导航图标可切换内容详情页与地图导航页。",
          frames: [
            {
              title: "基础框架",
              routeLabel: "欢迎页 → 随行发现",
              FrameComponent: DiscoveryFrame,
            },
          ],
        }
      : entryKey === "market"
        ? {
            badgeText: "精简版框架已接入",
            note: "已补充与随行生活同结构的精简版框架，左侧主 Tab 可切换点餐与订单两类功能。",
            frames: [
              {
                title: "市集主框架",
                routeLabel: "欢迎页 → 随行市集",
                FrameComponent: MarketFrame,
              },
            ],
          }
        : entryKey === "chat"
          ? {
              badgeText: "扩展版框架已接入",
              note: "当前同时展示大厅概览与组队房间两个画布，可继续基于左侧栏与语音协同面板扩展聊天类业务 demo。",
              frames: [
                {
                  title: "大厅概览",
                  routeLabel: "欢迎页 → 随行Chat",
                  FrameComponent: ChatFrame,
                },
                {
                  title: "组队房间",
                  routeLabel: "房间页 → 随行Chat Team",
                  FrameComponent: ChatTeamFrame,
                },
              ],
            }
          : null;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: colors.bg.secondary,
        color: colors.text.primary,
        padding: SPACING["6"],
      }}
    >
      <div
        style={{
          maxWidth: CONTENT_MAX_WIDTH,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: SPACING["4"],
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: SPACING["3"],
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", gap: SPACING["2"], flexWrap: "wrap" }}>
            <Button
              variant="secondary"
              size="extraSmall"
              onClick={() => navigate(APP_ROUTES.home)}
            >
              返回
            </Button>
            <Button
              variant="tertiary"
              size="extraSmall"
              onClick={() => navigate(APP_ROUTES.designSystem)}
            >
              规范库
            </Button>
          </div>

          <Button variant="secondary" size="extraSmall" onClick={toggle}>
            {isDark ? "浅色" : "深色"}
          </Button>
        </div>

        <div
          style={{
            backgroundColor: colors.bg.primary,
            border: `1px solid ${colors.border.subtle}`,
            borderRadius: RADIUS["2xl"],
            padding: SPACING["4"],
            display: "flex",
            flexDirection: "column",
            gap: SPACING["4"],
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: SPACING["3"],
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: SPACING["3"],
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 18,
                  backgroundColor: isDark ? blueGray[90] : blueGray[10],
                  color: isDark ? blueGray[30] : blueGray[80],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size="28px" />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: SPACING["2"] }}>
                <span
                  style={{
                    fontSize: 12,
                    lineHeight: "12px",
                    color: colors.text.tertiary,
                  }}
                >
                  Preview Workspace
                </span>
                <h1
                  style={{
                    margin: 0,
                    fontSize: 24,
                    lineHeight: "30px",
                    fontWeight: 700,
                  }}
                >
                  {entry.title}
                </h1>
              </div>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`,
                borderRadius: RADIUS.xl,
                border: `1px solid ${readinessStyle.borderColor}`,
                backgroundColor: readinessStyle.backgroundColor,
                color: readinessStyle.color,
                fontSize: 12,
                lineHeight: "12px",
                fontWeight: 500,
              }}
            >
              {entry.readiness}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["2"] }}>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                lineHeight: "24px",
                color: colors.text.secondary,
              }}
            >
              {entry.description}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 12,
                lineHeight: "18px",
                color: colors.text.tertiary,
              }}
            >
              {entry.demoHint}
            </p>
          </div>

          {framePreviewConfig ? (
            <FrameWorkspacePreview {...framePreviewConfig} />
          ) : (
            <PlaceholderPreview
              icon={<Icon size="36px" />}
              shortTitle={entry.shortTitle}
              isDark={isDark}
            />
          )}
        </div>
      </div>
    </div>
  );
}
