import type { CSSProperties } from "react";
import { useState } from "react";
import { RADIUS, SPACING, useTheme } from "@tai-design/components";

export function ChoicePickerPage() {
  const { colors } = useTheme();
  const [selectedSingle, setSelectedSingle] = useState("option1");
  const [selectedMulti, setSelectedMulti] = useState<string[]>(["option1"]);

  const options = [
    { value: "option1", label: "选项一" },
    { value: "option2", label: "选项二" },
    { value: "option3", label: "选项三" },
    { value: "option4", label: "选项四" },
  ];

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

  const optionStyle = (selected: boolean): CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: SPACING["3"],
    padding: SPACING["4"],
    borderRadius: RADIUS.xl,
    border: `1px solid ${selected ? colors.state.selected.border : colors.border.default}`,
    backgroundColor: selected ? colors.state.selected.bgSubtle : colors.bg.secondary,
    color: selected ? colors.state.selected.text : colors.text.primary,
  });

  const indicatorBaseStyle: CSSProperties = {
    width: 24,
    height: 24,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const toggleMulti = (value: string) => {
    setSelectedMulti((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
  };

  return (
    <div className="pb-24">
      <div className="mb-12">
        <div style={chipStyle}>Components / 组件</div>
        <h1 className="text-2xl font-bold mb-4">选择器 ChoicePicker</h1>
        <p className="text-base" style={{ color: colors.text.secondary }}>
          提供单选和多选功能，用于从多个选项中进行选择，示例状态统一使用主题 token 驱动。
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">定义</h2>
        <p className="text-[28px]" style={{ color: colors.text.secondary }}>
          选择器组件允许用户从预设的选项列表中选择一个或多个项目，常用于表单、设置和筛选场景。
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">类型</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">单选 Radio</h3>
          <div style={panelStyle}>
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["3"], maxWidth: 520 }}>
              {options.map((option) => {
                const selected = selectedSingle === option.value;
                return (
                  <button key={option.value} type="button" style={optionStyle(selected)} onClick={() => setSelectedSingle(option.value)}>
                    <span
                      style={{
                        ...indicatorBaseStyle,
                        borderRadius: 999,
                        border: `2px solid ${selected ? colors.state.selected.border : colors.border.default}`,
                        backgroundColor: colors.bg.elevated,
                      }}
                    >
                      {selected ? (
                        <span
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: 999,
                            backgroundColor: colors.brand.primary,
                          }}
                        />
                      ) : null}
                    </span>
                    <span className="text-xl font-medium">{option.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">多选 Checkbox</h3>
          <div style={panelStyle}>
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["3"], maxWidth: 520 }}>
              {options.map((option) => {
                const selected = selectedMulti.includes(option.value);
                return (
                  <button key={option.value} type="button" style={optionStyle(selected)} onClick={() => toggleMulti(option.value)}>
                    <span
                      style={{
                        ...indicatorBaseStyle,
                        borderRadius: RADIUS.xl / 2,
                        border: `2px solid ${selected ? colors.checkbox.checked : colors.checkbox.unchecked}`,
                        backgroundColor: selected ? colors.checkbox.checked : "transparent",
                        color: colors.checkbox.checkmark,
                        fontSize: 16,
                        fontWeight: 700,
                      }}
                    >
                      {selected ? "✓" : null}
                    </span>
                    <span className="text-xl font-medium">{option.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">下拉选择器 Dropdown</h3>
          <div style={panelStyle}>
            <div style={{ maxWidth: 520 }}>
              <button
                type="button"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: `${SPACING["3"]}px ${SPACING["4"]}px`,
                  borderRadius: RADIUS.xl,
                  border: `1px solid ${colors.border.default}`,
                  backgroundColor: colors.bg.secondary,
                  color: colors.text.primary,
                  fontSize: 20,
                }}
              >
                <span>请选择</span>
                <span style={{ color: colors.text.tertiary }}>⌄</span>
              </button>
              <p className="text-base mt-4" style={{ color: colors.text.secondary }}>点击展开选项列表</p>
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
                <li>单选使用圆形指示器，多选使用方形指示器</li>
                <li>选中状态直接复用主题的 selected / checkbox token</li>
                <li>触摸目标至少 48×48px，确保车机端易于点击</li>
                <li>选项不宜过长，超过 7 项建议使用下拉或搜索</li>
                <li>提供清晰的选中和未选中状态视觉区分</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">使用场景</h3>
              <ul className="text-[24px] space-y-3 list-disc pl-8" style={{ color: colors.text.secondary }}>
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
