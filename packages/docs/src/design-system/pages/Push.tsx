import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  Button,
  Card,
  Divider,
  Push as TaiPush,
  RADIUS,
  SPACING,
  getTokens,
} from "@tai-design/components";
import { DocPageHeader, DocTokenTable } from "../DocComponents";

type PushTone = "success" | "warning" | "error" | "info";

export function Push() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const tokens = getTokens(isDark);
  const [tone, setTone] = useState<PushTone>("success");
  const [floatingVisible, setFloatingVisible] = useState(false);
  const [showAction, setShowAction] = useState(true);

  const contentMap: Record<PushTone, { title: string; description: string }> = {
    success: {
      title: "路线已优化，预计节省 12 分钟",
      description: "已为您避开拥堵路段，可一键查看更新后的导航方案。",
    },
    warning: {
      title: "当前续航偏紧，建议沿途补能",
      description: "系统已补充推荐充电站，请留意后续导航提示。",
    },
    error: {
      title: "目的地当前暂停营业",
      description: "请确认营业时间或切换附近可用地点。",
    },
    info: {
      title: "检测到新的车机体验反馈",
      description: "你可以继续查看详情，或稍后在消息中心处理。",
    },
  };

  const content = contentMap[tone];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"], paddingBottom: SPACING["6"] * 2 }}>
      <TaiPush
        visible={floatingVisible}
        isDark={isDark}
        position="top"
        tone={tone}
        title={content.title}
        description={content.description}
        actionText={showAction ? "查看详情" : undefined}
        duration={4000}
        onAction={() => setFloatingVisible(false)}
        onClose={() => setFloatingVisible(false)}
      />

      <DocPageHeader category="Components / 组件" title="推送 / 全局提示 Push" description="用于承载更强的信息反馈和后续操作入口，统一为语义化卡片，不再并行维护两套不同推送定义。" />

      <Card variant="white" isDark={isDark}>
        <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"] }}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>实时预览</h2>
            <div style={{ display: "flex", gap: SPACING["3"], flexWrap: "wrap" }}>
              {(["success", "warning", "error", "info"] as PushTone[]).map((item) => (
                <Button
                  key={item}
                  isDark={isDark}
                  size="small"
                  variant={tone === item ? "primary" : "secondary"}
                  onClick={() => setTone(item)}
                >
                  {item}
                </Button>
              ))}
              <Button isDark={isDark} size="small" variant="ghost" onClick={() => setShowAction((prev) => !prev)}>
                {showAction ? "隐藏快捷操作" : "显示快捷操作"}
              </Button>
              <Button isDark={isDark} size="small" onClick={() => setFloatingVisible(true)}>
                触发顶部推送
              </Button>
            </div>

            <div
              style={{
                minHeight: 220,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 30,
                border: `1px dashed ${tokens.borderColor.level2}`,
                backgroundColor: tokens.bgColor.container,
                padding: SPACING["5"],
                boxSizing: "border-box",
              }}
            >
              <TaiPush
                visible
                isDark={isDark}
                position="static"
                tone={tone}
                title={content.title}
                description={content.description}
                actionText={showAction ? "查看详情" : undefined}
                onAction={() => undefined}
                onClose={() => undefined}
              />
            </div>
          </div>

          <Divider isDark={isDark} />

          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>使用建议</h2>
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
              <li>只有需要用户关注或继续处理的信息，才升级到 Push。</li>
              <li>操作按钮建议最多一个，避免把推送卡片变成迷你工具栏。</li>
              <li>语义色主要用于图标和辅助层，不要整张卡片直接铺满高饱和颜色。</li>
            </ul>
          </div>
          <Divider isDark={isDark} />

          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>🎨 Token 使用清单</h2>
            <DocTokenTable
              rows={[
                { part: "卡片背景", compToken: "tokens.push.bg", pubToken: "bgColor.elevated", desc: "推送卡片容器背景", color: tokens.push.bg },
                { part: "标题文字", compToken: "tokens.push.title", pubToken: "textColor.primary", desc: "推送标题", color: tokens.push.title },
                { part: "内容文字", compToken: "tokens.push.content", pubToken: "textColor.secondary", desc: "推送描述正文", color: tokens.push.content },
                { part: "成功图标", compToken: "tokens.functionalColor.success.main", pubToken: "functionalColor.success.main", desc: "success 语义色", color: tokens.functionalColor.success.main },
                { part: "警告图标", compToken: "tokens.functionalColor.warning.main", pubToken: "functionalColor.warning.main", desc: "warning 语义色", color: tokens.functionalColor.warning.main },
                { part: "错误图标", compToken: "tokens.functionalColor.error.main", pubToken: "functionalColor.error.main", desc: "error 语义色", color: tokens.functionalColor.error.main },
                { part: "信息图标", compToken: "tokens.functionalColor.info.main", pubToken: "functionalColor.info.main", desc: "info 语义色", color: tokens.functionalColor.info.main },
                { part: "关闭按钮", compToken: "tokens.textColor.secondary", pubToken: "textColor.secondary", desc: "关闭按钮背景 & 图标", color: tokens.textColor.secondary },
              ]}
              note={<>
                <strong>排版 Token：</strong>标题字重使用 <code>tokens.typography.title.section.fontWeight</code> (600)，内容行高使用 <code>tokens.typography.body.primary.lineHeight</code> (1.4)，描述行高使用 <code>tokens.typography.meta.caption.lineHeight</code> (1.5)。
                <br />
                <strong>布局常量：</strong>卡片圆角 <code>RADIUS["2xl"]</code> (30px)，阴影 <code>SHADOW.xl</code>，语义图标容器圆角 <code>RADIUS.xl</code> (24px)。
              </>}
            />
          </div>
          <Divider isDark={isDark} />

          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>颜色规范</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: SPACING["4"] }}>
              <div
                style={{
                  padding: SPACING["4"],
                  borderRadius: RADIUS["2xl"],
                  border: `1px solid ${tokens.borderColor.level2}`,
                  backgroundColor: tokens.bgColor.container,
                }}
              >
                <h3 style={{ margin: 0, marginBottom: SPACING["2"], fontSize: 24, fontWeight: 600, color: tokens.textColor.primary }}>卡片背景</h3>
                <div style={{ fontSize: 20, color: tokens.textColor.secondary }}>
                  <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.push.bg, marginBottom: SPACING["2"], border: `1px solid ${tokens.borderColor.level2}` }} />
                  <div style={{ fontFamily: "monospace", color: tokens.textColor.primary }}>{tokens.push.bg}</div>
                  <div>Push 卡片背景（<code>bgColor.elevated</code>）</div>
                </div>
              </div>
              <div
                style={{
                  padding: SPACING["4"],
                  borderRadius: RADIUS["2xl"],
                  border: `1px solid ${tokens.borderColor.level2}`,
                  backgroundColor: tokens.bgColor.container,
                }}
              >
                <h3 style={{ margin: 0, marginBottom: SPACING["2"], fontSize: 24, fontWeight: 600, color: tokens.textColor.primary }}>标题</h3>
                <div style={{ fontSize: 20, color: tokens.textColor.secondary }}>
                  <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.push.title, marginBottom: SPACING["2"] }} />
                  <div style={{ fontFamily: "monospace", color: tokens.textColor.primary }}>{tokens.push.title}</div>
                  <div>Push 标题色（<code>textColor.primary</code>）</div>
                </div>
              </div>
              <div
                style={{
                  padding: SPACING["4"],
                  borderRadius: RADIUS["2xl"],
                  border: `1px solid ${tokens.borderColor.level2}`,
                  backgroundColor: tokens.bgColor.container,
                }}
              >
                <h3 style={{ margin: 0, marginBottom: SPACING["2"], fontSize: 24, fontWeight: 600, color: tokens.textColor.primary }}>内容</h3>
                <div style={{ fontSize: 20, color: tokens.textColor.secondary }}>
                  <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.push.content, marginBottom: SPACING["2"] }} />
                  <div style={{ fontFamily: "monospace", color: tokens.textColor.primary }}>{tokens.push.content}</div>
                  <div>Push 内容色（<code>textColor.secondary</code>）</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
