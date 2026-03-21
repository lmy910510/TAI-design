import type { CSSProperties } from "react";
import { useState } from "react";
import {
  ChoicePicker,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  RADIUS,
  SPACING,
  useTheme,
} from "@tai-design/components";
import { DocPageHeader } from "../DocComponents";

const OPTIONS = [
  { value: "option1", label: "选项一" },
  { value: "option2", label: "选项二" },
  { value: "option3", label: "选项三" },
  { value: "option4", label: "选项四" },
];

export function ChoicePickerPage() {
  const { tokens, isDark } = useTheme();
  const [selectedSingle, setSelectedSingle] = useState<string>("option1");
  const [selectedMulti, setSelectedMulti] = useState<string[]>(["option1"]);

  const chipStyle: CSSProperties = {
    display: "inline-block",
    padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`,
    marginBottom: SPACING["3"],
    borderRadius: 999,
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.container,
    color: tokens.textColor.secondary,
    fontSize: FONT_SIZE.sm,
    fontWeight: FONT_WEIGHT.medium,
    lineHeight: LINE_HEIGHT.none,
  };

  const panelStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.elevated,
  };

  return (
    <div style={{ paddingBottom: SPACING["4"] * 4 }}>
      {/* ── 页头 ── */}
      <DocPageHeader category="Components / 组件" title="选择器 ChoicePicker" description="提供单选和多选功能，用于从多个选项中进行选择，示例状态统一使用主题 token 驱动。" />

      {/* ── 定义 ── */}
      <div style={{ marginBottom: SPACING["6"] * 2 }}>
        <h2 style={{ fontSize: FONT_SIZE["3xl"], fontWeight: FONT_WEIGHT.bold, lineHeight: LINE_HEIGHT.tight, marginBottom: SPACING["4"] }}>
          定义
        </h2>
        <p style={{ fontSize: FONT_SIZE.xl, fontWeight: FONT_WEIGHT.regular, lineHeight: LINE_HEIGHT.relaxed, color: tokens.textColor.secondary }}>
          选择器组件允许用户从预设的选项列表中选择一个或多个项目，常用于表单、设置和筛选场景。
        </p>
      </div>

      {/* ── 类型 ── */}
      <div style={{ marginBottom: SPACING["6"] * 2 }}>
        <h2 style={{ fontSize: FONT_SIZE["3xl"], fontWeight: FONT_WEIGHT.bold, lineHeight: LINE_HEIGHT.tight, marginBottom: SPACING["5"] }}>
          类型
        </h2>

        {/* 单选 Radio */}
        <div style={{ marginBottom: SPACING["6"] * 2 }}>
          <h3 style={{ fontSize: FONT_SIZE["2xl"], fontWeight: FONT_WEIGHT.bold, lineHeight: LINE_HEIGHT.tight, marginBottom: SPACING["4"] }}>
            单选 Radio
          </h3>
          <div style={panelStyle}>
            <div style={{ maxWidth: 520 }}>
              <ChoicePicker
                options={OPTIONS}
                mode="radio"
                value={selectedSingle}
                onChange={(val) => setSelectedSingle(val as string)}
                isDark={isDark}
              />
            </div>
          </div>
        </div>

        {/* 多选 Checkbox */}
        <div style={{ marginBottom: SPACING["6"] * 2 }}>
          <h3 style={{ fontSize: FONT_SIZE["2xl"], fontWeight: FONT_WEIGHT.bold, lineHeight: LINE_HEIGHT.tight, marginBottom: SPACING["4"] }}>
            多选 Checkbox
          </h3>
          <div style={panelStyle}>
            <div style={{ maxWidth: 520 }}>
              <ChoicePicker
                options={OPTIONS}
                mode="checkbox"
                value={selectedMulti}
                onChange={(val) => setSelectedMulti(val as string[])}
                isDark={isDark}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── 🎨 Token 使用清单 ── */}
      <div style={{ marginBottom: SPACING["6"] * 2 }}>
        <h2 style={{ fontSize: FONT_SIZE["3xl"], fontWeight: FONT_WEIGHT.bold, lineHeight: LINE_HEIGHT.tight, marginBottom: SPACING["5"] }}>
          🎨 Token 使用清单
        </h2>
        <div style={panelStyle}>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: FONT_SIZE.sm }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${tokens.borderColor.level1}` }}>
                  {["部位", "Token 路径", "用途说明"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: `${SPACING["2"]}px ${SPACING["3"]}px`, color: tokens.textColor.secondary, fontWeight: FONT_WEIGHT.semibold }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {([
                  { part: "未选中文字", token: "textColor.primary", desc: "默认选项文字", color: tokens.textColor.primary },
                  { part: "选中文字", token: "textColor.brand", desc: "选中状态选项文字", color: tokens.textColor.brand },
                  { part: "未选中背景", token: "bgColor.container", desc: "未选中选项卡背景", color: tokens.bgColor.container },
                  { part: "选中背景", token: "bgColor.brandLight", desc: "品牌浅底选中背景", color: tokens.bgColor.brandLight },
                  { part: "选中边框", token: "borderColor.brand", desc: "品牌色选中描边", color: tokens.borderColor.brand },
                  { part: "未选中边框", token: "borderColor.level2", desc: "二级描边", color: tokens.borderColor.level2 },
                  { part: "Radio 内圈填充", token: "functionalColor.brand.main", desc: "Radio 模式选中指示圆点", color: tokens.functionalColor.brand.main },
                  { part: "Radio 外圈背景", token: "bgColor.elevated", desc: "Radio 外圈容器", color: tokens.bgColor.elevated },
                  { part: "Checkbox 选中边框/背景", token: "组件级 tokens.checkbox.checked", desc: "复用 Checkbox 的选中 token", color: tokens.checkbox.checked },
                  { part: "Checkbox 未选中边框", token: "组件级 tokens.checkbox.unchecked", desc: "复用 Checkbox 的未选中 token", color: tokens.checkbox.unchecked },
                  { part: "Checkbox 对勾", token: "组件级 tokens.checkbox.checkmark", desc: "复用 Checkbox 勾选标记", color: tokens.checkbox.checkmark },
                ] as const).map((row) => (
                  <tr key={row.part} style={{ borderBottom: `1px solid ${tokens.borderColor.level1}` }}>
                    <td style={{ padding: `${SPACING["2"]}px ${SPACING["3"]}px`, fontWeight: FONT_WEIGHT.medium, color: tokens.textColor.primary }}>{row.part}</td>
                    <td style={{ padding: `${SPACING["2"]}px ${SPACING["3"]}px` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 20, height: 20, borderRadius: 4, backgroundColor: row.color, border: `1px solid ${tokens.borderColor.level1}`, flexShrink: 0 }} />
                        <code style={{ fontSize: FONT_SIZE.xs, color: tokens.textColor.link }}>tokens.{row.token}</code>
                      </div>
                    </td>
                    <td style={{ padding: `${SPACING["2"]}px ${SPACING["3"]}px`, color: tokens.textColor.tertiary }}>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: SPACING["4"], padding: SPACING["3"], borderRadius: RADIUS.xl, backgroundColor: tokens.bgColor.container, border: `1px solid ${tokens.borderColor.level1}` }}>
            <p style={{ fontSize: FONT_SIZE.xs, color: tokens.textColor.secondary, lineHeight: LINE_HEIGHT.relaxed }}>
              <strong>说明：</strong>ChoicePicker 在 Checkbox 模式下直接复用 <code>tokens.checkbox.*</code> 组件级 token，在 Radio 模式下使用公开语义 token。
              <br />
              <strong>布局常量：</strong>选项卡圆角 <code>RADIUS.xl</code> (24px)，间距 <code>SPACING["3"]</code> (18px) / <code>SPACING["4"]</code> (24px)。
            </p>
          </div>
        </div>
      </div>

      {/* ── 应用 ── */}
      <div style={{ marginBottom: SPACING["6"] * 2 }}>
        <h2 style={{ fontSize: FONT_SIZE["3xl"], fontWeight: FONT_WEIGHT.bold, lineHeight: LINE_HEIGHT.tight, marginBottom: SPACING["5"] }}>
          应用
        </h2>
        <div style={{ ...panelStyle, backgroundColor: tokens.bgColor.container }}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["5"] }}>
            <div>
              <h3 style={{ fontSize: FONT_SIZE["2xl"], fontWeight: FONT_WEIGHT.medium, lineHeight: LINE_HEIGHT.normal, marginBottom: SPACING["2"] }}>
                使用规范
              </h3>
              <ul style={{ fontSize: FONT_SIZE.base, fontWeight: FONT_WEIGHT.regular, lineHeight: LINE_HEIGHT.relaxed, color: tokens.textColor.secondary, listStyleType: "disc", paddingLeft: SPACING["6"], display: "flex", flexDirection: "column", gap: SPACING["2"] }}>
                <li>单选使用圆形指示器，多选使用方形指示器</li>
                <li>选中状态直接复用主题的 borderColor.brand / checkbox token</li>
                <li>触摸目标至少 48×48px，确保车机端易于点击</li>
                <li>选项不宜过长，超过 7 项建议使用下拉或搜索</li>
                <li>提供清晰的选中和未选中状态视觉区分</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: FONT_SIZE["2xl"], fontWeight: FONT_WEIGHT.medium, lineHeight: LINE_HEIGHT.normal, marginBottom: SPACING["2"] }}>
                使用场景
              </h3>
              <ul style={{ fontSize: FONT_SIZE.base, fontWeight: FONT_WEIGHT.regular, lineHeight: LINE_HEIGHT.relaxed, color: tokens.textColor.secondary, listStyleType: "disc", paddingLeft: SPACING["6"], display: "flex", flexDirection: "column", gap: SPACING["2"] }}>
                <li>表单中的选项选择（性别、地区等）</li>
                <li>设置页面的配置项</li>
                <li>筛选器和过滤条件</li>
                <li>权限和功能开关</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
