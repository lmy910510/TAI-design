import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  RADIUS,
  SPACING,
  useTheme,
} from "@tai-design/components";
import { ArrowRightIcon } from "tdesign-icons-react";
import { blueGray } from "../data/colorTokens";
import { portalEntries } from "./siteConfig";

const CONTENT_MAX_WIDTH = 1200;
const CARD_MIN_HEIGHT = 228;

type PortalLayoutMode = "stack" | "split" | "featured";

function getPortalLayout(viewportWidth: number): PortalLayoutMode {
  if (viewportWidth >= 1024) {
    return "featured";
  }

  if (viewportWidth >= 720) {
    return "split";
  }

  return "stack";
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

export function WelcomePage() {
  const navigate = useNavigate();
  const { colors, isDark, toggle } = useTheme();
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window === "undefined" ? CONTENT_MAX_WIDTH : window.innerWidth
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const handleResize = () => setViewportWidth(window.innerWidth);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const layoutMode = getPortalLayout(viewportWidth);
  const isFeaturedLayout = layoutMode === "featured";
  const isSplitLayout = layoutMode === "split";

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
          gap: SPACING["5"],
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
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["2"] }}>
            <span
              style={{
                fontSize: 14,
                lineHeight: "14px",
                color: colors.text.tertiary,
              }}
            >
              TAI Portal
            </span>
            <h1
              style={{
                margin: 0,
                fontSize: 24,
                lineHeight: "30px",
                fontWeight: 700,
              }}
            >
              选择入口
            </h1>
          </div>

          <Button variant="secondary" size="extraSmall" onClick={toggle}>
            {isDark ? "浅色" : "深色"}
          </Button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isFeaturedLayout
              ? "minmax(0, 1.12fr) repeat(2, minmax(0, 0.88fr))"
              : isSplitLayout
                ? "repeat(2, minmax(0, 1fr))"
                : "1fr",
            gridAutoRows: isFeaturedLayout ? `${CARD_MIN_HEIGHT}px` : "auto",
            gap: SPACING["3"],
            alignItems: "stretch",
          }}
        >
          {portalEntries.map((entry) => {
            const Icon = entry.icon;
            const readinessStyle = getReadinessColor(entry.readiness, isDark, colors);
            const isDesignSystem = entry.key === "design-system";
            const isHeroCard = isDesignSystem && isFeaturedLayout;
            const isWideCard = isDesignSystem && isSplitLayout;
            const iconBoxSize = isHeroCard ? 72 : 48;
            const iconSize = isHeroCard ? "42px" : "28px";

            return (
              <Card
                key={entry.key}
                variant="white"
                onClick={() => navigate(entry.path)}
                style={{
                  backgroundColor: colors.bg.primary,
                  border: `1px solid ${colors.border.subtle}`,
                  minHeight: CARD_MIN_HEIGHT,
                  display: "flex",
                  flexDirection: "column",
                  gap: isHeroCard ? SPACING["4"] : SPACING["3"],
                  cursor: "pointer",
                  gridRow: isHeroCard ? "span 2" : undefined,
                  gridColumn: isWideCard ? "span 2" : undefined,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: SPACING["2"],
                  }}
                >
                  <div
                    style={{
                      width: iconBoxSize,
                      height: iconBoxSize,
                      borderRadius: RADIUS.xl,
                      backgroundColor: isDark ? blueGray[90] : blueGray[10],
                      color: isDark ? blueGray[30] : blueGray[80],
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={iconSize} />
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
                  <div
                    style={{
                      fontSize: isHeroCard ? 14 : 12,
                      lineHeight: isHeroCard ? "18px" : "12px",
                      color: colors.text.tertiary,
                    }}
                  >
                    {isDesignSystem ? "规范库" : "产品入口"}
                  </div>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: isHeroCard ? 30 : 20,
                      lineHeight: isHeroCard ? "36px" : "26px",
                      fontWeight: 700,
                    }}
                  >
                    {entry.title}
                  </h2>
                  {isHeroCard ? (
                    <p
                      style={{
                        margin: 0,
                        maxWidth: 360,
                        color: colors.text.secondary,
                        fontSize: 16,
                        lineHeight: "24px",
                      }}
                    >
                      {entry.description}
                    </p>
                  ) : null}
                </div>

                <div style={{ marginTop: "auto" }}>
                  <Button
                    variant={isDesignSystem ? "primary" : "secondary"}
                    size="extraSmall"
                    fullWidth
                    icon={<ArrowRightIcon />}
                    iconPosition="right"
                    onClick={(event) => {
                      event.stopPropagation();
                      navigate(entry.path);
                    }}
                  >
                    进入
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
