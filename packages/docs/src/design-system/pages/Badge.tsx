import { useOutletContext } from "react-router-dom";
import {
  Badge as TaiBadge,
  Card,
  Divider,
  RADIUS,
  SPACING,
  createColors,
} from "@tai-design/components";
import {
  ChatIcon,
  NotificationFilledIcon,
  UserCircleIcon,
} from "tdesign-icons-react";

export function Badge() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const colors = createColors(isDark);

  const tagStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 36,
    paddingLeft: SPACING["2"],
    paddingRight: SPACING["2"],
    borderRadius: RADIUS.xl,
    backgroundColor: colors.bg.secondary,
    border: `1px solid ${colors.border.default}`,
    color: colors.text.secondary,
    fontSize: 18,
  } as const;

  const iconCardStyle = {
    width: 120,
    minHeight: 120,
    borderRadius: RADIUS.xl,
    backgroundColor: colors.bg.secondary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: colors.text.primary,
  } as const;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"], paddingBottom: SPACING["6"] * 2 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: SPACING["3"] }}>
        <div style={tagStyle}>Components / 组件</div>
        <h1 style={{ margin: 0, fontSize: 42, lineHeight: 1.2, color: colors.text.primary }}>徽标 Badge</h1>
        <p style={{ margin: 0, fontSize: 24, lineHeight: 1.6, color: colors.text.tertiary }}>
          用于未读数、状态提示和轻提醒，统一使用 token 化尺寸与语义色，不再依赖 Figma 导出稿。
        </p>
      </div>

      <Card variant="white" isDark={isDark}>
        <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"] }}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, fontSize: 30, color: colors.text.primary }}>独立徽标</h2>
            <div style={{ display: "flex", gap: SPACING["4"], flexWrap: "wrap", alignItems: "center" }}>
              <TaiBadge isDark={isDark} count={3} />
              <TaiBadge isDark={isDark} count={28} color="notice" />
              <TaiBadge isDark={isDark} count={108} color="success" maxCount={99} />
              <TaiBadge isDark={isDark} variant="dot" color="danger" />
              <TaiBadge isDark={isDark} content="NEW" color="brand" />
            </div>
          </div>

          <Divider isDark={isDark} />

          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, fontSize: 30, color: colors.text.primary }}>附着在目标元素上</h2>
            <div style={{ display: "flex", gap: SPACING["5"], flexWrap: "wrap" }}>
              <TaiBadge isDark={isDark} count={9} offset={[12, -6]}>
                <div style={iconCardStyle}>
                  <NotificationFilledIcon style={{ fontSize: 42, color: colors.text.primary }} />
                </div>
              </TaiBadge>
              <TaiBadge isDark={isDark} variant="dot" color="danger" offset={[6, -6]}>
                <div style={iconCardStyle}>
                  <ChatIcon style={{ fontSize: 42, color: colors.text.primary }} />
                </div>
              </TaiBadge>
              <TaiBadge isDark={isDark} count={2} color="info" offset={[12, -6]}>
                <div
                  style={{
                    ...iconCardStyle,
                    borderRadius: RADIUS["2xl"],
                    width: 132,
                  }}
                >
                  <UserCircleIcon style={{ fontSize: 54, color: colors.text.primary }} />
                </div>
              </TaiBadge>
            </div>
          </div>

          <Divider isDark={isDark} />

          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, fontSize: 30, color: colors.text.primary }}>推荐规则</h2>
            <ul
              style={{
                margin: 0,
                paddingLeft: SPACING["4"],
                display: "flex",
                flexDirection: "column",
                gap: SPACING["2"],
                color: colors.text.secondary,
                fontSize: 24,
                lineHeight: 1.6,
              }}
            >
              <li>弱提醒优先使用点状徽标，强提醒再使用数值徽标。</li>
              <li>颜色只表达语义，不为了“更花哨”而随意上彩色。</li>
              <li>包裹目标元素时使用统一偏移，不在页面里到处写绝对定位红点。</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
