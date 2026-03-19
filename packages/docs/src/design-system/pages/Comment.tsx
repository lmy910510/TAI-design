import { useOutletContext } from "react-router-dom";
import {
  Card,
  Comment as CommentBlock,
  Divider,
  RADIUS,
  SPACING,
  createColors,
} from "@tai-design/components";
import { UserCircleIcon } from "tdesign-icons-react";

function Avatar({ label, isDark }: { label: string; isDark: boolean }) {
  const colors = createColors(isDark);

  return (
    <div
      style={{
        width: 72,
        height: 72,
        borderRadius: RADIUS.xl,
        backgroundColor: colors.bg.tertiary,
        color: colors.text.secondary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
        fontWeight: 600,
      }}
    >
      {label}
    </div>
  );
}

export function Comment() {
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

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"], paddingBottom: SPACING["6"] * 2 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: SPACING["3"] }}>
        <div style={tagStyle}>Components / 组件</div>
        <h1 style={{ margin: 0, fontSize: 42, lineHeight: 1.2, color: colors.text.primary }}>评论 Comment</h1>
        <p style={{ margin: 0, fontSize: 24, lineHeight: 1.6, color: colors.text.tertiary }}>
          统一评论区的头像、作者、正文、标签和操作区，不再继续使用不可维护的设计稿切片代码。
        </p>
      </div>

      <Card variant="white" isDark={isDark}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <CommentBlock
            isDark={isDark}
            divided
            avatar={<Avatar label="李" isDark={isDark} />}
            author="李明阳"
            time="2 分钟前"
            meta="深圳 · 车主评论"
            content="这个版本的导航播报更自然了，红绿灯读秒和前方拥堵提示都比较及时。"
            tags={["交互自然", "播报及时"]}
            actions={[
              { key: "like", label: "128" },
              { key: "reply", label: "12" },
              { key: "edit", label: "追评" },
            ]}
          />

          <CommentBlock
            isDark={isDark}
            avatar={
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: RADIUS.xl,
                  backgroundColor: colors.bg.tertiary,
                  color: colors.text.secondary,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <UserCircleIcon style={{ fontSize: 42, color: colors.text.secondary }} />
              </div>
            }
            author="阿澈"
            time="昨天 18:24"
            meta="广州 · 试驾用户"
            content="建议把空调和座椅联动提示也接到这套评论反馈里，用户提交体验会更完整。"
            reply="官方回复：已纳入下一期体验优化计划，预计在后续版本开放。"
            actions={[
              { key: "like", label: "56" },
              { key: "reply", label: "8" },
            ]}
          />
        </div>
      </Card>

      <Card variant="gray" isDark={isDark}>
        <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
          <h2 style={{ margin: 0, fontSize: 30, color: colors.text.primary }}>规范要点</h2>
          <Divider isDark={isDark} spacing="2" />
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
            <li>评论正文和辅助信息要明显区分层级，避免整块信息同一灰度。</li>
            <li>标签、回复和操作区都要走统一 token，不能混入随机圆角和任意透明度。</li>
            <li>列表分隔统一交给组件控制，不在页面里散落写边框。</li>
          </ul>
        </div>
      </Card>
    </div>
  );
}
