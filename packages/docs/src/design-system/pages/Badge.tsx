import { useOutletContext } from "react-router-dom";
import {
  Badge as TaiBadge,
  Card,
  Divider,
  RADIUS,
  SPACING,
  getTokens,
} from "@tai-design/components";
import {
  ChatIcon,
  NotificationFilledIcon,
  UserCircleIcon,
} from "tdesign-icons-react";
import { DocPageHeader, DocSection, DocTokenTable } from "../DocComponents";

export function Badge() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const tokens = getTokens(isDark);

  const iconCardStyle = {
    width: 120,
    minHeight: 120,
    borderRadius: RADIUS.xl,
    backgroundColor: tokens.bgColor.container,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: tokens.textColor.primary,
  } as const;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"], paddingBottom: SPACING["6"] * 2 }}>
      <DocPageHeader
        category="Components / 组件"
        title="徽标 Badge"
        description="用于未读数、状态提示和轻提醒，统一使用 token 化尺寸与语义色，不再依赖 Figma 导出稿。"
      />

      <Card variant="white" isDark={isDark}>
        <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"] }}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>独立徽标</h2>
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
            <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>附着在目标元素上</h2>
            <div style={{ display: "flex", gap: SPACING["5"], flexWrap: "wrap" }}>
              <TaiBadge isDark={isDark} count={9} offset={[12, -6]}>
                <div style={iconCardStyle}>
                  <NotificationFilledIcon style={{ fontSize: 42, color: tokens.textColor.primary }} />
                </div>
              </TaiBadge>
              <TaiBadge isDark={isDark} variant="dot" color="danger" offset={[6, -6]}>
                <div style={iconCardStyle}>
                  <ChatIcon style={{ fontSize: 42, color: tokens.textColor.primary }} />
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
                  <UserCircleIcon style={{ fontSize: 54, color: tokens.textColor.primary }} />
                </div>
              </TaiBadge>
            </div>
          </div>

          <Divider isDark={isDark} />

          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>推荐规则</h2>
            <ul
              style={{
                margin: 0,
                paddingLeft: SPACING["4"],
                display: "flex",
                flexDirection: "column",
                gap: SPACING["2"],
                color: tokens.textColor.secondary,
                fontSize: 24,
                lineHeight: 1.6,
              }}
            >
              <li>弱提醒优先使用点状徽标，强提醒再使用数值徽标。</li>
              <li>颜色只表达语义，不为了“更花哨”而随意上彩色。</li>
              <li>包裹目标元素时使用统一偏移，不在页面里到处写绝对定位红点。</li>
            </ul>
          </div>
          <Divider isDark={isDark} />

          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>🎨 Token 使用清单</h2>
            <DocTokenTable
              rows={[
                { part: "徽标文字", compToken: "tokens.textColor.anti", pubToken: "textColor.anti", desc: "反色文字（彩色背景上白字）", color: tokens.textColor.anti },
                { part: "页面背景（间距环）", compToken: "tokens.bgColor.page", pubToken: "bgColor.page", desc: "徽标外围间隙使用页面底色裁切", color: tokens.bgColor.page },
                { part: "danger 背景", compToken: "tokens.functionalColor.error.main", pubToken: "functionalColor.error.main", desc: "默认 / 危险语义徽标背景", color: tokens.functionalColor.error.main },
                { part: "notice 背景", compToken: "tokens.functionalColor.warning.main", pubToken: "functionalColor.warning.main", desc: "提醒语义徽标背景", color: tokens.functionalColor.warning.main },
                { part: "success 背景", compToken: "tokens.functionalColor.success.main", pubToken: "functionalColor.success.main", desc: "成功语义徽标背景", color: tokens.functionalColor.success.main },
                { part: "info 背景", compToken: "tokens.functionalColor.info.main", pubToken: "functionalColor.info.main", desc: "信息语义徽标背景", color: tokens.functionalColor.info.main },
                { part: "brand 背景", compToken: "tokens.functionalColor.brand.main", pubToken: "functionalColor.brand.main", desc: "品牌色徽标背景", color: tokens.functionalColor.brand.main },
              ]}
              note={
                <>
                  <strong>说明：</strong>Badge 没有独立的组件级 token（如 <code>tokens.badge.*</code>），完全使用公开语义 token 中的 <code>functionalColor</code> 和 <code>textColor</code>。
                  <br />
                  <strong>排版 Token：</strong>计数文字使用 <code>tokens.typography.label.badge</code> (24px/600/1)。
                </>
              }
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
