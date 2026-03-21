import { useOutletContext } from "react-router-dom";
import {
  Card,
  Comment as CommentBlock,
  Divider,
  RADIUS,
  SPACING,
  getTokens,
} from "@tai-design/components";
import { UserCircleIcon } from "tdesign-icons-react";
import { DocPageHeader, DocTokenTable } from "../DocComponents";

function Avatar({ label, isDark }: { label: string; isDark: boolean }) {
  const tokens = getTokens(isDark);

  return (
    <div
      style={{
        width: 72,
        height: 72,
        borderRadius: RADIUS.xl,
        backgroundColor: tokens.bgColor.secondaryContainer,
        color: tokens.textColor.secondary,
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
  const tokens = getTokens(isDark);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"], paddingBottom: SPACING["6"] * 2 }}>
      <DocPageHeader category="Components / 组件" title="评论 Comment" description="统一评论区的头像、作者、正文、标签和操作区，不再继续使用不可维护的设计稿切片代码。" />

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
                  backgroundColor: tokens.bgColor.secondaryContainer,
                  color: tokens.textColor.secondary,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <UserCircleIcon style={{ fontSize: 42, color: tokens.textColor.secondary }} />
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
          <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>🎨 Token 使用清单</h2>
          <Divider isDark={isDark} spacing="2" />
          <DocTokenTable
            rows={[
              { part: "作者名", token: "tokens.textColor.primary", desc: "评论者名称", color: tokens.textColor.primary },
              { part: "正文", token: "tokens.textColor.primary", desc: "评论内容文字", color: tokens.textColor.primary },
              { part: "头像 fallback 文字", token: "tokens.textColor.secondary", desc: "头像占位首字母", color: tokens.textColor.secondary },
              { part: "标签文字", token: "tokens.textColor.secondary", desc: "标签内文字", color: tokens.textColor.secondary },
              { part: "时间/元信息", token: "tokens.textColor.tertiary", desc: "时间戳、来源等辅助信息", color: tokens.textColor.tertiary },
              { part: "操作按钮", token: "tokens.textColor.tertiary", desc: "点赞、回复等操作图标和文字", color: tokens.textColor.tertiary },
              { part: "头像/标签/图片背景", token: "tokens.bgColor.secondaryContainer", desc: "次级容器背景", color: tokens.bgColor.secondaryContainer },
              { part: "回复区背景", token: "tokens.bgColor.container", desc: "引用回复区域背景", color: tokens.bgColor.container },
              { part: "分隔线", token: "tokens.borderColor.level1", desc: "评论间分隔线", color: tokens.borderColor.level1 },
            ]}
            note={<>
              <strong>排版 Token：</strong>作者名字重使用 <code>tokens.typography.title.section.fontWeight</code> (600)，正文行高使用 <code>tokens.typography.body.long.lineHeight</code> (1.6)，标签使用 <code>tokens.typography.label.tag</code>，时间使用 <code>tokens.typography.meta.caption</code>。
              <br />
              <strong>布局常量：</strong>头像/标签/图片圆角 <code>RADIUS.xl</code> (24px)，间距 <code>SPACING["2"]</code>~<code>SPACING["4"]</code>。
            </>}
          />
        </div>
      </Card>

      <Card variant="gray" isDark={isDark}>
        <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
          <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary }}>规范要点</h2>
          <Divider isDark={isDark} spacing="2" />
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
            <li>评论正文和辅助信息要明显区分层级，避免整块信息同一灰度。</li>
            <li>标签、回复和操作区都要走统一 token，不能混入随机圆角和任意透明度。</li>
            <li>列表分隔统一交给组件控制，不在页面里散落写边框。</li>
          </ul>
        </div>
      </Card>
    </div>
  );
}
