import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  Button,
  Card,
  Divider,
  Push as TaiPush,
  SPACING,
  createColors,
} from "@tai-design/components";

type PushTone = "success" | "warning" | "error" | "info";

export function Push() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const colors = createColors(isDark);
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

  const tagStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 36,
    paddingLeft: SPACING["2"],
    paddingRight: SPACING["2"],
    borderRadius: 24,
    backgroundColor: colors.bg.secondary,
    border: `1px solid ${colors.border.default}`,
    color: colors.text.secondary,
    fontSize: 18,
  } as const;

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

      <div style={{ display: "flex", flexDirection: "column", gap: SPACING["3"] }}>
        <div style={tagStyle}>Components / 组件</div>
        <h1 style={{ margin: 0, fontSize: 42, lineHeight: 1.2, color: colors.text.primary }}>推送 / 全局提示 Push</h1>
        <p style={{ margin: 0, fontSize: 24, lineHeight: 1.6, color: colors.text.tertiary }}>
          用于承载更强的信息反馈和后续操作入口，统一为语义化卡片，不再并行维护两套不同推送定义。
        </p>
      </div>

      <Card variant="white" isDark={isDark}>
        <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"] }}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, fontSize: 30, color: colors.text.primary }}>实时预览</h2>
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
                border: `1px dashed ${colors.border.default}`,
                backgroundColor: colors.bg.secondary,
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
            <h2 style={{ margin: 0, fontSize: 30, color: colors.text.primary }}>使用建议</h2>
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
              <li>只有需要用户关注或继续处理的信息，才升级到 Push。</li>
              <li>操作按钮建议最多一个，避免把推送卡片变成迷你工具栏。</li>
              <li>语义色主要用于图标和辅助层，不要整张卡片直接铺满高饱和颜色。</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
