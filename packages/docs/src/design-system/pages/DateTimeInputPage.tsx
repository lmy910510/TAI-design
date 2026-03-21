import type { CSSProperties } from "react";
import { RADIUS, SPACING, useTheme } from "@tai-design/components";
import { DocPageHeader } from "../DocComponents";

const WEEK_DAYS = ["日", "一", "二", "三", "四", "五", "六"];
const SHORTCUTS = ["今天", "明天", "后天", "下周", "下月"];

export function DateTimeInputPage() {
  const { tokens } = useTheme();

  /* ── 排版 shorthand ── */
  const typoTitlePage = tokens.typography.title.page;
  const typoTitleSection = tokens.typography.title.section;
  const typoTitleCard = tokens.typography.title.card;
  const typoBodyPrimary = tokens.typography.body.primary;
  const typoBodySecondary = tokens.typography.body.secondary;
  const typoMetaCaption = tokens.typography.meta.caption;
  const typoLabelSmall = tokens.typography.label.buttonSmall;
  const typoDisplayHero = tokens.typography.display.hero;
  const typoMetaTime = tokens.typography.meta.time;

  const chipStyle: CSSProperties = {
    display: "inline-block",
    padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`,
    marginBottom: SPACING["3"],
    borderRadius: 999,
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.container,
    color: tokens.textColor.secondary,
    fontSize: typoMetaCaption.fontSize,
    fontWeight: typoMetaCaption.fontWeight,
    lineHeight: typoMetaCaption.lineHeight,
  };

  const panelStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.elevated,
  };

  const contentSurfaceStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    backgroundColor: tokens.bgColor.container,
    border: `1px solid ${tokens.borderColor.level1}`,
  };

  const fieldButtonStyle: CSSProperties = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${SPACING["3"]}px ${SPACING["4"]}px`,
    borderRadius: RADIUS.xl,
    border: `1px solid ${tokens.borderColor.level2}`,
    backgroundColor: tokens.bgColor.elevated,
    color: tokens.textColor.secondary,
    fontSize: typoMetaTime.fontSize,
    fontWeight: typoMetaTime.fontWeight,
    lineHeight: typoMetaTime.lineHeight,
  };

  const secondaryButtonStyle: CSSProperties = {
    padding: `${SPACING["2"]}px ${SPACING["4"]}px`,
    borderRadius: RADIUS.xl,
    border: `1px solid ${tokens.borderColor.level2}`,
    backgroundColor: tokens.bgColor.component,
    color: tokens.textColor.primary,
    fontSize: typoLabelSmall.fontSize,
    fontWeight: typoLabelSmall.fontWeight,
    lineHeight: typoLabelSmall.lineHeight,
  };

  const primaryButtonStyle: CSSProperties = {
    padding: `${SPACING["2"]}px ${SPACING["4"]}px`,
    borderRadius: RADIUS.xl,
    border: `1px solid ${tokens.textColor.primary}`,
    backgroundColor: tokens.textColor.primary,
    color: tokens.textColor.anti,
    fontSize: typoLabelSmall.fontSize,
    fontWeight: typoLabelSmall.fontWeight,
    lineHeight: typoLabelSmall.lineHeight,
  };

  const shortcutStyle: CSSProperties = {
    padding: `${SPACING["2"]}px ${SPACING["4"]}px`,
    borderRadius: RADIUS.xl,
    border: `1px solid ${tokens.borderColor.level2}`,
    backgroundColor: tokens.bgColor.component,
    color: tokens.textColor.primary,
    fontSize: typoLabelSmall.fontSize,
    fontWeight: typoLabelSmall.fontWeight,
    lineHeight: typoLabelSmall.lineHeight,
  };

  const guideTextStyle: CSSProperties = {
    fontSize: typoBodyPrimary.fontSize,
    fontWeight: typoBodyPrimary.fontWeight,
    lineHeight: typoBodyPrimary.lineHeight,
    color: tokens.textColor.secondary,
  };

  /* ── Token 表格 ── */
  const TOKEN_TABLE: { part: string; path: string; desc: string }[] = [
    { part: "面板背景", path: "bgColor.elevated", desc: "弹出/展开面板" },
    { part: "内容面板背景", path: "bgColor.container", desc: "日历网格、时间选择区" },
    { part: "组件按钮背景", path: "bgColor.component", desc: "次要按钮、快捷选项" },
    { part: "选中日期背景", path: "textColor.primary", desc: "当天高亮填充" },
    { part: "选中日期文字", path: "textColor.anti", desc: "高亮日期反色文字" },
    { part: "常规日期文字", path: "textColor.primary", desc: "非选中日期" },
    { part: "辅助文字", path: "textColor.tertiary", desc: "星期标头、图标" },
    { part: "输入框边框", path: "borderColor.level2", desc: "字段按钮描边" },
    { part: "分割线边框", path: "borderColor.level1", desc: "面板外边框" },
  ];

  const thStyle: CSSProperties = {
    padding: `${SPACING["2"]}px ${SPACING["3"]}px`,
    textAlign: "left",
    fontSize: typoMetaCaption.fontSize,
    fontWeight: 600,
    lineHeight: typoMetaCaption.lineHeight,
    color: tokens.textColor.secondary,
    borderBottom: `1px solid ${tokens.borderColor.level1}`,
  };

  const tdStyle: CSSProperties = {
    padding: `${SPACING["2"]}px ${SPACING["3"]}px`,
    fontSize: typoMetaCaption.fontSize,
    fontWeight: typoMetaCaption.fontWeight,
    lineHeight: typoMetaCaption.lineHeight,
    color: tokens.textColor.primary,
    borderBottom: `1px solid ${tokens.borderColor.level1}`,
  };

  return (
    <div style={{ paddingBottom: SPACING["6"] * 2 }}>
      {/* ── 头部 ── */}
      <DocPageHeader category="Components / 组件" title="日期时间 DateTimeInput" description="用于选择日期和时间的输入组件，文档页示例统一改为主题 token 驱动的展示面板。" />

      {/* ── 定义 ── */}
      <section style={{ marginBottom: SPACING["6"] }}>
        <h2 style={{ fontSize: typoTitleSection.fontSize, fontWeight: typoTitleSection.fontWeight, lineHeight: typoTitleSection.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["3"] }}>
          定义
        </h2>
        <p style={guideTextStyle}>
          日期时间选择器为用户提供直观的方式来选择日期和时间，车机端需要考虑大触控目标和快速选择体验。
        </p>
      </section>

      {/* ── 类型 ── */}
      <section style={{ marginBottom: SPACING["6"] }}>
        <h2 style={{ fontSize: typoTitleSection.fontSize, fontWeight: typoTitleSection.fontWeight, lineHeight: typoTitleSection.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>
          类型
        </h2>
        <div style={panelStyle}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"] }}>
            {/* 日期选择器 */}
            <div>
              <h3 style={{ fontSize: typoTitleCard.fontSize, fontWeight: typoTitleCard.fontWeight, lineHeight: typoTitleCard.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["3"] }}>
                日期选择器
              </h3>
              <div style={{ maxWidth: 480 }}>
                <button type="button" style={fieldButtonStyle}>
                  <span>选择日期</span>
                  <span style={{ color: tokens.textColor.tertiary }}>📅</span>
                </button>
                <div style={{ ...contentSurfaceStyle, marginTop: SPACING["4"] }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: SPACING["4"] }}>
                    <button type="button" style={secondaryButtonStyle}>上一月</button>
                    <span style={{ fontSize: typoBodySecondary.fontSize, fontWeight: 600, lineHeight: typoBodySecondary.lineHeight, color: tokens.textColor.primary }}>2026年3月</span>
                    <button type="button" style={secondaryButtonStyle}>下一月</button>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", gap: SPACING["2"], textAlign: "center" }}>
                    {WEEK_DAYS.map((day) => (
                      <div key={day} style={{ color: tokens.textColor.tertiary, padding: `${SPACING["2"] / 2}px 0`, fontSize: typoMetaCaption.fontSize, fontWeight: 500, lineHeight: typoMetaCaption.lineHeight }}>
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 35 }, (_, index) => {
                      const day = index + 1;
                      if (day > 31) {
                        return <div key={`blank-${index}`} />;
                      }

                      const isToday = day === 17;
                      return (
                        <button
                          key={day}
                          type="button"
                          style={{
                            aspectRatio: "1 / 1",
                            borderRadius: RADIUS.xl,
                            border: `1px solid ${isToday ? tokens.textColor.primary : tokens.borderColor.level1}`,
                            backgroundColor: isToday ? tokens.textColor.primary : tokens.bgColor.elevated,
                            color: isToday ? tokens.textColor.anti : tokens.textColor.primary,
                            fontSize: typoMetaCaption.fontSize,
                            fontWeight: 600,
                          }}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* 时间选择器 */}
            <div>
              <h3 style={{ fontSize: typoTitleCard.fontSize, fontWeight: typoTitleCard.fontWeight, lineHeight: typoTitleCard.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["3"] }}>
                时间选择器
              </h3>
              <div style={{ maxWidth: 480 }}>
                <button type="button" style={fieldButtonStyle}>
                  <span>选择时间</span>
                  <span style={{ color: tokens.textColor.tertiary }}>🕒</span>
                </button>
                <div style={{ ...contentSurfaceStyle, marginTop: SPACING["4"] }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: SPACING["4"] }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: typoDisplayHero.fontSize, fontWeight: typoDisplayHero.fontWeight, lineHeight: typoDisplayHero.lineHeight, color: tokens.textColor.primary }}>14</div>
                      <div style={{ fontSize: typoMetaCaption.fontSize, fontWeight: typoMetaCaption.fontWeight, lineHeight: typoMetaCaption.lineHeight, color: tokens.textColor.tertiary, marginTop: SPACING["2"] }}>时</div>
                    </div>
                    <div style={{ fontSize: typoTitleSection.fontSize, fontWeight: typoTitleSection.fontWeight, color: tokens.textColor.tertiary }}>:</div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: typoDisplayHero.fontSize, fontWeight: typoDisplayHero.fontWeight, lineHeight: typoDisplayHero.lineHeight, color: tokens.textColor.primary }}>30</div>
                      <div style={{ fontSize: typoMetaCaption.fontSize, fontWeight: typoMetaCaption.fontWeight, lineHeight: typoMetaCaption.lineHeight, color: tokens.textColor.tertiary, marginTop: SPACING["2"] }}>分</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: SPACING["3"], marginTop: SPACING["5"] }}>
                    <button type="button" style={{ ...secondaryButtonStyle, flex: 1 }}>取消</button>
                    <button type="button" style={{ ...primaryButtonStyle, flex: 1 }}>确定</button>
                  </div>
                </div>
              </div>
            </div>

            {/* 日期时间组合 */}
            <div>
              <h3 style={{ fontSize: typoTitleCard.fontSize, fontWeight: typoTitleCard.fontWeight, lineHeight: typoTitleCard.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["3"] }}>
                日期时间组合
              </h3>
              <div style={{ maxWidth: 480, display: "flex", flexDirection: "column", gap: SPACING["3"] }}>
                <button type="button" style={{ ...fieldButtonStyle, color: tokens.textColor.primary }}>
                  <span>2026-03-17 14:30</span>
                  <span style={{ color: tokens.textColor.tertiary }}>⏰</span>
                </button>
                <p style={{ fontSize: typoBodySecondary.fontSize, fontWeight: typoBodySecondary.fontWeight, lineHeight: typoBodySecondary.lineHeight, color: tokens.textColor.secondary }}>
                  同时选择日期和时间
                </p>
              </div>
            </div>

            {/* 快捷选择 */}
            <div>
              <h3 style={{ fontSize: typoTitleCard.fontSize, fontWeight: typoTitleCard.fontWeight, lineHeight: typoTitleCard.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["3"] }}>
                快捷选择
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: SPACING["2"] }}>
                {SHORTCUTS.map((item) => (
                  <button key={item} type="button" style={shortcutStyle}>{item}</button>
                ))}
              </div>
              <p style={{ fontSize: typoBodySecondary.fontSize, fontWeight: typoBodySecondary.fontWeight, lineHeight: typoBodySecondary.lineHeight, color: tokens.textColor.secondary, marginTop: SPACING["2"] }}>
                提供常用时间的快速选择
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 应用 ── */}
      <section style={{ marginBottom: SPACING["6"] }}>
        <h2 style={{ fontSize: typoTitleSection.fontSize, fontWeight: typoTitleSection.fontWeight, lineHeight: typoTitleSection.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>
          应用
        </h2>
        <div style={{ ...panelStyle, backgroundColor: tokens.bgColor.container }}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["5"] }}>
            <div>
              <h3 style={{ fontSize: typoBodyPrimary.fontSize, fontWeight: 500, lineHeight: typoBodyPrimary.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["2"] }}>
                使用规范
              </h3>
              <ul style={{ fontSize: typoMetaCaption.fontSize, lineHeight: 1.8, color: tokens.textColor.secondary, listStyleType: "disc", paddingLeft: SPACING["4"] }}>
                <li>日历单元格尺寸不小于 48×48px，适合触摸操作</li>
                <li>当前日期应有明显的高亮标识</li>
                <li>提供快捷选项（今天、明天等）减少操作步骤</li>
                <li>时间选择支持滚动或步进器输入</li>
                <li>显示格式应符合用户习惯（年-月-日 或 月/日/年）</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: typoBodyPrimary.fontSize, fontWeight: 500, lineHeight: typoBodyPrimary.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["2"] }}>
                车机端优化
              </h3>
              <ul style={{ fontSize: typoMetaCaption.fontSize, lineHeight: 1.8, color: tokens.textColor.secondary, listStyleType: "disc", paddingLeft: SPACING["4"] }}>
                <li>使用大触控目标，方便驾驶员快速选择</li>
                <li>提供语音输入作为替代方案</li>
                <li>减少嵌套层级，一次性显示主要选项</li>
                <li>支持默认值和智能推荐</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 🎨 Token 使用清单 ── */}
      <section>
        <h2 style={{ fontSize: typoTitleSection.fontSize, fontWeight: typoTitleSection.fontWeight, lineHeight: typoTitleSection.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>
          🎨 Token 使用清单
        </h2>
        <div style={panelStyle}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={thStyle}>部位</th>
                <th style={thStyle}>Token 路径</th>
                <th style={thStyle}>用途说明</th>
              </tr>
            </thead>
            <tbody>
              {TOKEN_TABLE.map((row) => (
                <tr key={row.part}>
                  <td style={tdStyle}>{row.part}</td>
                  <td style={{ ...tdStyle, fontFamily: "monospace" }}>
                    <code style={{ padding: `0 ${SPACING["2"] / 2}px`, borderRadius: 6, backgroundColor: tokens.bgColor.secondaryContainer, color: tokens.textColor.brand }}>
                      {`tokens.${row.path}`}
                    </code>
                  </td>
                  <td style={{ ...tdStyle, color: tokens.textColor.secondary }}>{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: SPACING["4"], fontSize: typoMetaCaption.fontSize, lineHeight: 1.8, color: tokens.textColor.tertiary }}>
            <p>补充说明：</p>
            <ul style={{ listStyleType: "disc", paddingLeft: SPACING["4"] }}>
              <li><strong>排版 Token</strong>：时间数字使用 <code>tokens.typography.display.hero</code> (42px/700/1.2)；按钮文字使用 <code>tokens.typography.label.buttonSmall</code> (28px/500/1)</li>
              <li><strong>布局常量</strong>：面板内边距 36px、日期格间距 12px、控制区间距 24px（均为 SPACING 6 倍数）</li>
              <li><strong>圆角</strong>：面板 30px、按钮/日期格 24px</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
