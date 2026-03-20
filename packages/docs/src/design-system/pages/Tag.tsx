import { useState, CSSProperties } from "react";
import { ThumbsUp } from "lucide-react";
import { RADIUS, Switch, useTheme } from "@tai-design/components";
import { TagComponent, TagType, TagLevel, TagSize, TagColor, resolveTagPalette } from "../TagComponent";

const COLOR_LABELS: Record<TagColor, string> = {
  warning: "警示、强调",
  notice: "提示、突出",
  success: "成功、积极",
  regular: "常规、中性",
  default: "默认、结束",
};

export function Tag() {
  const { colors, isDark } = useTheme();

  const [selectedType, setSelectedType] = useState<TagType>("regular");
  const [selectedLevel, setSelectedLevel] = useState<TagLevel>("high");
  const [selectedSize, setSelectedSize] = useState<TagSize>("large");
  const [selectedColor, setSelectedColor] = useState<TagColor>("notice");
  const [hasIcon, setHasIcon] = useState<boolean>(true);
  const [isSolidBorder, setIsSolidBorder] = useState<boolean>(true);

  const palette = resolveTagPalette(colors, selectedColor);

  const chipStyle: CSSProperties = {
    display: "inline-block",
    padding: "6px 12px",
    marginBottom: 16,
    borderRadius: 999,
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.secondary,
    color: colors.text.secondary,
    fontSize: 14,
  };

  const panelStyle: CSSProperties = {
    padding: 24,
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.elevated,
  };

  const previewStageStyle: CSSProperties = {
    minHeight: 300,
    marginBottom: 24,
    borderRadius: RADIUS["2xl"],
    border: `1px dashed ${colors.border.default}`,
    backgroundColor: colors.bg.secondary,
  };

  const summaryStyle: CSSProperties = {
    padding: 18,
    borderRadius: RADIUS.xl,
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.secondary,
  };

  const sectionLabelStyle: CSSProperties = {
    marginBottom: 12,
    fontSize: 14,
    fontWeight: 500,
    color: colors.text.secondary,
  };

  const getOptionButtonStyle = (active: boolean, disabled = false): CSSProperties => ({
    width: "100%",
    padding: "12px 16px",
    borderRadius: RADIUS.xl,
    border: `2px solid ${active ? colors.border.focus : colors.static.transparent}`,
    backgroundColor: active ? colors.bg.secondary : colors.bg.tertiary,
    color: active ? colors.text.primary : colors.text.secondary,
    opacity: disabled ? 0.35 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 150ms ease",
  });

  return (
    <div>
      <div className="mb-8">
        <div style={chipStyle}>Components / 组件</div>
        <h1 className="text-4xl font-bold mb-4">标签组件 (Tag)</h1>
        <p className="text-lg" style={{ color: colors.text.secondary }}>
          用于表明主体的类目、属性或状态；是静态文本，不具有交互功能。提供常规和组合两类标签，支持多层级、尺寸和颜色。
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div style={panelStyle}>
          <h2 className="text-2xl font-bold mb-6">实时预览</h2>

          <div className="flex-1 flex flex-col items-center justify-center" style={previewStageStyle}>
            <TagComponent
              type={selectedType}
              level={selectedLevel}
              size={selectedSize}
              color={selectedColor}
              showIcon={selectedType === "regular" && hasIcon}
              icon={
                <ThumbsUp
                  size={22}
                  color={selectedLevel === "high" ? colors.static.white : palette.main}
                  strokeWidth={2.5}
                />
              }
              solidBorder={isSolidBorder}
            >
              标签文案
            </TagComponent>
          </div>

          <div style={summaryStyle}>
            <div className="text-xs space-y-2" style={{ color: colors.text.secondary }}>
              <div className="flex justify-between">
                <span>类型:</span>
                <span className="font-mono">{selectedType === "regular" ? "常规标签" : "组合标签"}</span>
              </div>
              <div className="flex justify-between">
                <span>层级:</span>
                <span className="font-mono">
                  {selectedLevel === "high"
                    ? "高级 (高度强调)"
                    : selectedLevel === "medium"
                      ? "中级 (强调感知)"
                      : "低级 (弱化)"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>尺寸:</span>
                <span className="font-mono">
                  {selectedSize === "large" ? "Large36" : selectedSize === "medium" ? "Medium30" : "Small24"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>颜色:</span>
                <span className="font-mono">{COLOR_LABELS[selectedColor]}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[800px]" style={panelStyle}>
          <h2 className="text-2xl font-bold mb-6">属性配置</h2>

          <div className="mb-6">
            <h3 style={sectionLabelStyle}>类型 (Type)</h3>
            <div className="grid grid-cols-2 gap-3">
              {(["regular", "combined"] as TagType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setSelectedType(type);
                    if (type === "combined" && selectedLevel === "low") {
                      setSelectedLevel("medium");
                    }
                  }}
                  style={getOptionButtonStyle(selectedType === type)}
                >
                  {type === "regular" ? "常规标签" : "组合标签"}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 style={sectionLabelStyle}>层级 (Level)</h3>
            <div className="grid grid-cols-3 gap-3">
              {(["high", "medium", "low"] as TagLevel[]).map((level) => {
                const isDisabled = selectedType === "combined" && level === "low";
                return (
                  <button
                    key={level}
                    disabled={isDisabled}
                    onClick={() => setSelectedLevel(level)}
                    style={getOptionButtonStyle(selectedLevel === level && !isDisabled, isDisabled)}
                  >
                    {level === "high" ? "高级" : level === "medium" ? "中级" : "低级"}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-6">
            <h3 style={sectionLabelStyle}>尺寸 (Size)</h3>
            <div className="grid grid-cols-3 gap-3">
              {(["large", "medium", "small"] as TagSize[]).map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={getOptionButtonStyle(selectedSize === size)}
                >
                  <div className="font-medium">
                    {size === "large" ? "Large36" : size === "medium" ? "Medium30" : "Small24"}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 style={sectionLabelStyle}>语义颜色 (Color)</h3>
            <div className="grid grid-cols-2 gap-2">
              {(["warning", "notice", "success", "regular", "default"] as TagColor[]).map((color) => {
                const colorPalette = resolveTagPalette(colors, color);
                return (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className="flex items-center gap-2"
                    style={getOptionButtonStyle(selectedColor === color)}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colorPalette.main }} />
                    <span>{COLOR_LABELS[color]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {selectedType === "regular" && (
            <div className="mb-6 space-y-4">
              <h3 style={sectionLabelStyle}>其它 (Others)</h3>

              <label className="flex items-center gap-3 cursor-pointer">
                <Switch checked={hasIcon} onChange={setHasIcon} isDark={isDark} />
                <span className="text-sm" style={{ color: colors.text.primary }}>显示图标</span>
              </label>

              {selectedLevel === "medium" && (
                <label className="flex items-center gap-3 cursor-pointer">
                  <Switch checked={isSolidBorder} onChange={setIsSolidBorder} isDark={isDark} />
                  <span className="text-sm" style={{ color: colors.text.primary }}>
                    实线描边风格 (Solid Border)
                  </span>
                </label>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
