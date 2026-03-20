import type { CSSProperties } from "react";
import { useState } from "react";
import { RADIUS, SPACING, useTheme } from "@tai-design/components";

const GAP_OPTIONS = [6, 12, 18, 24, 30, 36] as const;

export function ColumnPage() {
  const { colors } = useTheme();
  const [selectedGap, setSelectedGap] = useState<(typeof GAP_OPTIONS)[number]>(24);

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

  const selectorStyle = (active: boolean): CSSProperties => ({
    padding: `${SPACING["2"]}px ${SPACING["3"]}px`,
    borderRadius: RADIUS.xl,
    border: `1px solid ${active ? colors.button.primary.border : colors.border.subtle}`,
    backgroundColor: active ? colors.button.primary.bg : colors.bg.secondary,
    color: active ? colors.button.primary.text : colors.text.secondary,
    fontSize: 14,
    fontWeight: 600,
  });

  const codeBlockStyle: CSSProperties = {
    padding: SPACING["4"],
    borderRadius: RADIUS.xl,
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.code,
    color: colors.text.secondary,
    overflowX: "auto",
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div style={chipStyle}>A. 布局类 (Layout)</div>
        <h1 className="text-4xl font-bold mb-4">Column 垂直排列</h1>
        <p className="text-lg" style={{ color: colors.text.secondary }}>
          基于 Flexbox 的垂直布局容器，遵循车机端 6px 栅格系统管理纵向堆叠的元素间距。
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">互动演示</h2>
        <div style={panelStyle}>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-3" style={{ color: colors.text.secondary }}>间距 (Gap)</label>
            <div className="flex flex-wrap gap-2">
              {GAP_OPTIONS.map((gap) => (
                <button key={gap} type="button" style={selectorStyle(selectedGap === gap)} onClick={() => setSelectedGap(gap)}>
                  {gap / 6}n ({gap}px)
                </button>
              ))}
            </div>
          </div>

          <div style={{ padding: SPACING["4"], borderRadius: RADIUS.xl, border: `1px dashed ${colors.border.default}`, backgroundColor: colors.bg.secondary, minHeight: 400 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: selectedGap }}>
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  style={{
                    width: "100%",
                    height: 72,
                    borderRadius: RADIUS.xl,
                    border: `1px solid ${colors.border.subtle}`,
                    backgroundColor: colors.bg.primary,
                    color: colors.text.primary,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  Row Item {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">垂直间距规则</h2>
        <div style={{ ...panelStyle, padding: 0, overflow: "hidden" }}>
          <table className="w-full text-left text-sm">
            <thead style={{ backgroundColor: colors.bg.secondary, color: colors.text.secondary }}>
              <tr>
                <th className="px-6 py-4 font-medium">参数值 (n)</th>
                <th className="px-6 py-4 font-medium">像素 (px)</th>
                <th className="px-6 py-4 font-medium">推荐场景</th>
              </tr>
            </thead>
            <tbody style={{ color: colors.text.secondary }}>
              {[
                ["n", "6px", "输入框与提示文案之间的极紧凑间距。"],
                ["2n", "12px", "列表项内上下结构或短文本堆叠。"],
                ["3n", "18px", "段落与辅助区块之间的次级垂直间距。"],
                ["4n", "24px", "默认标准段落间距与表单项间距。"],
                ["5n", "30px", "主要内容区块之间的垂直分隔。"],
              ].map(([token, value, usage], index) => (
                <tr key={token} style={{ borderTop: index === 0 ? undefined : `1px solid ${colors.border.subtle}` }}>
                  <td className="px-6 py-4 font-mono font-medium" style={{ color: colors.text.primary }}>{token}</td>
                  <td className="px-6 py-4">{value}</td>
                  <td className="px-6 py-4">{usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">代码示例</h2>
        <div style={codeBlockStyle}>
          <pre>{`<div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
  <SectionTitle>Vehicle Status</SectionTitle>
  <StatusList />
</div>

<div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
  <FormItem label="Destination" />
  <FormItem label="Time" />
</div>`}</pre>
        </div>
      </section>
    </div>
  );
}
