import type { CSSProperties } from "react";
import { RADIUS, SPACING, useTheme } from "@tai-design/components";

const WEEK_DAYS = ["日", "一", "二", "三", "四", "五", "六"];
const SHORTCUTS = ["今天", "明天", "后天", "下周", "下月"];

export function DateTimeInputPage() {
  const { colors } = useTheme();

  const chipStyle: CSSProperties = {
    display: "inline-block",
    padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`,
    marginBottom: SPACING["3"],
    borderRadius: 999,
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.secondary,
    color: colors.text.secondary,
    fontSize: 14,
  };

  const panelStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.elevated,
  };

  const contentSurfaceStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    backgroundColor: colors.bg.secondary,
    border: `1px solid ${colors.border.subtle}`,
  };

  const fieldButtonStyle: CSSProperties = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${SPACING["3"]}px ${SPACING["4"]}px`,
    borderRadius: RADIUS.xl,
    border: `1px solid ${colors.border.default}`,
    backgroundColor: colors.bg.elevated,
    color: colors.text.secondary,
    fontSize: 20,
  };

  const secondaryButtonStyle: CSSProperties = {
    padding: `${SPACING["2"]}px ${SPACING["4"]}px`,
    borderRadius: RADIUS.xl,
    border: `1px solid ${colors.button.secondary.border}`,
    backgroundColor: colors.button.secondary.bg,
    color: colors.button.secondary.text,
    fontSize: 18,
    fontWeight: 600,
  };

  const primaryButtonStyle: CSSProperties = {
    padding: `${SPACING["2"]}px ${SPACING["4"]}px`,
    borderRadius: RADIUS.xl,
    border: `1px solid ${colors.button.primary.border}`,
    backgroundColor: colors.button.primary.bg,
    color: colors.button.primary.text,
    fontSize: 18,
    fontWeight: 600,
  };

  const shortcutStyle: CSSProperties = {
    padding: `${SPACING["2"]}px ${SPACING["4"]}px`,
    borderRadius: RADIUS.xl,
    border: `1px solid ${colors.button.secondary.border}`,
    backgroundColor: colors.button.secondary.bg,
    color: colors.button.secondary.text,
    fontSize: 18,
  };

  const guideTextStyle: CSSProperties = {
    fontSize: 28,
    lineHeight: "42px",
    color: colors.text.secondary,
  };

  return (
    <div className="pb-24">
      <div className="mb-12">
        <div style={chipStyle}>Components / 组件</div>
        <h1 className="text-2xl font-bold mb-4">日期时间 DateTimeInput</h1>
        <p className="text-base" style={{ color: colors.text.secondary }}>
          用于选择日期和时间的输入组件，文档页示例统一改为主题 token 驱动的展示面板。
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">定义</h2>
        <p style={guideTextStyle}>
          日期时间选择器为用户提供直观的方式来选择日期和时间，车机端需要考虑大触控目标和快速选择体验。
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">类型</h2>
        <div style={panelStyle}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"] }}>
            <div>
              <h3 className="text-4xl font-medium mb-6">日期选择器</h3>
              <div style={{ maxWidth: 480 }}>
                <button type="button" style={fieldButtonStyle}>
                  <span>选择日期</span>
                  <span style={{ color: colors.text.tertiary }}>📅</span>
                </button>
                <div style={{ ...contentSurfaceStyle, marginTop: SPACING["4"] }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: SPACING["4"] }}>
                    <button type="button" style={secondaryButtonStyle}>上一月</button>
                    <span className="text-xl font-semibold" style={{ color: colors.text.primary }}>2026年3月</span>
                    <button type="button" style={secondaryButtonStyle}>下一月</button>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", gap: SPACING["2"], textAlign: "center" }}>
                    {WEEK_DAYS.map((day) => (
                      <div key={day} className="text-sm font-medium" style={{ color: colors.text.tertiary, padding: `${SPACING["2"] / 2}px 0` }}>
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
                            border: `1px solid ${isToday ? colors.button.primary.border : colors.border.subtle}`,
                            backgroundColor: isToday ? colors.button.primary.bg : colors.bg.elevated,
                            color: isToday ? colors.button.primary.text : colors.text.primary,
                            fontSize: 16,
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

            <div>
              <h3 className="text-4xl font-medium mb-6">时间选择器</h3>
              <div style={{ maxWidth: 480 }}>
                <button type="button" style={fieldButtonStyle}>
                  <span>选择时间</span>
                  <span style={{ color: colors.text.tertiary }}>🕒</span>
                </button>
                <div style={{ ...contentSurfaceStyle, marginTop: SPACING["4"] }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: SPACING["4"] }}>
                    <div style={{ textAlign: "center" }}>
                      <div className="text-6xl font-bold" style={{ color: colors.text.primary }}>14</div>
                      <div className="text-sm mt-2" style={{ color: colors.text.tertiary }}>时</div>
                    </div>
                    <div className="text-5xl font-bold" style={{ color: colors.text.tertiary }}>:</div>
                    <div style={{ textAlign: "center" }}>
                      <div className="text-6xl font-bold" style={{ color: colors.text.primary }}>30</div>
                      <div className="text-sm mt-2" style={{ color: colors.text.tertiary }}>分</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: SPACING["3"], marginTop: SPACING["5"] }}>
                    <button type="button" style={{ ...secondaryButtonStyle, flex: 1 }}>取消</button>
                    <button type="button" style={{ ...primaryButtonStyle, flex: 1 }}>确定</button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-medium mb-6">日期时间组合</h3>
              <div style={{ maxWidth: 480, display: "flex", flexDirection: "column", gap: SPACING["3"] }}>
                <button type="button" style={{ ...fieldButtonStyle, color: colors.text.primary }}>
                  <span>2026-03-17 14:30</span>
                  <span style={{ color: colors.text.tertiary }}>⏰</span>
                </button>
                <p className="text-base" style={{ color: colors.text.secondary }}>同时选择日期和时间</p>
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-medium mb-6">快捷选择</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: SPACING["2"] }}>
                {SHORTCUTS.map((item) => (
                  <button key={item} type="button" style={shortcutStyle}>{item}</button>
                ))}
              </div>
              <p className="text-base mt-4" style={{ color: colors.text.secondary }}>提供常用时间的快速选择</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">应用</h2>
        <div style={{ ...panelStyle, backgroundColor: colors.bg.secondary }}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["5"] }}>
            <div>
              <h3 className="text-2xl font-medium mb-4">使用规范</h3>
              <ul className="text-[24px] space-y-3 list-disc pl-8" style={{ color: colors.text.secondary }}>
                <li>日历单元格尺寸不小于 48×48px，适合触摸操作</li>
                <li>当前日期应有明显的高亮标识</li>
                <li>提供快捷选项（今天、明天等）减少操作步骤</li>
                <li>时间选择支持滚动或步进器输入</li>
                <li>显示格式应符合用户习惯（年-月-日 或 月/日/年）</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">车机端优化</h3>
              <ul className="text-[24px] space-y-3 list-disc pl-8" style={{ color: colors.text.secondary }}>
                <li>使用大触控目标，方便驾驶员快速选择</li>
                <li>提供语音输入作为替代方案</li>
                <li>减少嵌套层级，一次性显示主要选项</li>
                <li>支持默认值和智能推荐</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
