import { useState, CSSProperties } from "react";
import { ThumbsUp } from "lucide-react";
import { RADIUS, SPACING, STATIC, Switch, useTheme } from "@tai-design/components";
import { TagComponent, TagType, TagLevel, TagSize, TagColor, resolveTagPalette } from "../TagComponent";
import { DocPageHeader, DocTokenTable } from "../DocComponents";

const COLOR_LABELS: Record<TagColor, string> = {
  warning: "警示、强调",
  notice: "提示、突出",
  success: "成功、积极",
  regular: "常规、中性",
  default: "默认、结束",
};

export function Tag() {
  const { tokens, isDark } = useTheme();

  const [selectedType, setSelectedType] = useState<TagType>("regular");
  const [selectedLevel, setSelectedLevel] = useState<TagLevel>("high");
  const [selectedSize, setSelectedSize] = useState<TagSize>("large");
  const [selectedColor, setSelectedColor] = useState<TagColor>("notice");
  const [hasIcon, setHasIcon] = useState<boolean>(true);
  const [isSolidBorder, setIsSolidBorder] = useState<boolean>(true);

  const palette = resolveTagPalette(tokens, selectedColor);

  const panelStyle: CSSProperties = {
    padding: SPACING["4"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.elevated,
  };

  const previewStageStyle: CSSProperties = {
    minHeight: 300,
    marginBottom: SPACING["4"],
    borderRadius: RADIUS["2xl"],
    border: `1px dashed ${tokens.borderColor.level2}`,
    backgroundColor: tokens.bgColor.container,
  };

  const summaryStyle: CSSProperties = {
    padding: SPACING["3"],
    borderRadius: RADIUS.xl,
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.container,
  };

  const sectionLabelStyle: CSSProperties = {
    marginBottom: SPACING["2"],
    fontSize: 18,
    fontWeight: 500,
    color: tokens.textColor.secondary,
  };

  const getOptionButtonStyle = (active: boolean, disabled = false): CSSProperties => ({
    width: "100%",
    padding: "12px 16px",
    borderRadius: RADIUS.xl,
    border: `2px solid ${active ? tokens.borderColor.focus : STATIC.transparent}`,
    backgroundColor: active ? tokens.bgColor.container : tokens.bgColor.secondaryContainer,
    color: active ? tokens.textColor.primary : tokens.textColor.secondary,
    opacity: disabled ? 0.35 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 150ms ease",
  });

  return (
    <div>
      <DocPageHeader category="Components / 组件" title="标签组件 (Tag)" description="用于表明主体的类目、属性或状态；是静态文本，不具有交互功能。提供常规和组合两类标签，支持多层级、尺寸和颜色。" />

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div style={panelStyle}>
          <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>实时预览</h2>

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
                  color={selectedLevel === "high" ? STATIC.white : palette.main}
                  strokeWidth={2.5}
                />
              }
              solidBorder={isSolidBorder}
            >
              标签文案
            </TagComponent>
          </div>

          <div style={summaryStyle}>
            <div className="text-xs space-y-2" style={{ color: tokens.textColor.secondary }}>
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
          <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>属性配置</h2>

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
                const colorPalette = resolveTagPalette(tokens, color);
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
                <span className="text-sm" style={{ color: tokens.textColor.primary }}>显示图标</span>
              </label>

              {selectedLevel === "medium" && (
                <label className="flex items-center gap-3 cursor-pointer">
                  <Switch checked={isSolidBorder} onChange={setIsSolidBorder} isDark={isDark} />
                  <span className="text-sm" style={{ color: tokens.textColor.primary }}>
                    实线描边风格 (Solid Border)
                  </span>
                </label>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>🎨 Token 使用清单</h2>
        <DocTokenTable
          rows={[
            { part: "高级标签文字 (danger)", compToken: "functionalColor.error.main", pubToken: "functionalColor.error.main", desc: "高级标签主色 / 文字色", color: tokens.functionalColor.error.main },
            { part: "中级标签背景 (danger)", compToken: "bgColor.errorLight", pubToken: "bgColor.errorLight", desc: "12% 浅底背景", color: tokens.bgColor.errorLight },
            { part: "低级标签背景 (danger)", compToken: "bgColor.errorLight", pubToken: "bgColor.errorLight", desc: "6% 最浅底背景", color: tokens.bgColor.errorLight },
            { part: "高级标签文字 (notice)", compToken: "functionalColor.warning.main", pubToken: "functionalColor.warning.main", desc: "提示/警告标签主色", color: tokens.functionalColor.warning.main },
            { part: "高级标签文字 (success)", compToken: "functionalColor.success.main", pubToken: "functionalColor.success.main", desc: "成功标签主色", color: tokens.functionalColor.success.main },
            { part: "高级标签文字 (info)", compToken: "functionalColor.info.main", pubToken: "functionalColor.info.main", desc: "信息标签主色", color: tokens.functionalColor.info.main },
            { part: "高级标签文字 (default)", compToken: "textColor.tertiary", pubToken: "textColor.tertiary", desc: "默认灰色标签主色", color: tokens.textColor.tertiary },
          ]}
          note={
            <p style={{ fontSize: 13, color: tokens.textColor.secondary, lineHeight: 1.6, margin: 0 }}>
              <strong>层级规则：</strong>高级 (high) 使用 <code>main</code> 色做文字/图标 + 白色背景；中级 (medium) 使用 <code>[12]</code> 做背景 + <code>main</code> 做文字；低级 (low) 使用 <code>[6]</code> 做背景 + <code>main</code> 做文字。
              <br />
              <strong>排版 Token：</strong>标签文字使用 <code>tokens.typography.label.tag</code> (24px/500/1)。
              <br />
              <strong>每种颜色均有 4 个透明度档位：</strong><code>main</code>、<code>[6]</code>（约 6%）、<code>[12]</code>（12%）、<code>[30]</code>（30%）。
            </p>
          }
        />
      </div>

      <div className="mt-8">
        <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>颜色规范</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: SPACING["3"] }}>
          {(["warning", "notice", "success", "regular", "default"] as TagColor[]).map((color) => {
            const tokenNames: Record<TagColor, { main: string; "6": string; "12": string; "30": string }> = {
              warning: {
                main: "functionalColor.error.main",
                "6": "bgColor.errorLight",
                "12": "bgColor.errorLight",
                "30": "functionalColor.error.disabled",
              },
              notice: {
                main: "functionalColor.warning.main",
                "6": "bgColor.warningLight",
                "12": "bgColor.warningLight",
                "30": "functionalColor.warning.disabled",
              },
              success: {
                main: "functionalColor.success.main",
                "6": "bgColor.successLight",
                "12": "bgColor.successLight",
                "30": "functionalColor.success.disabled",
              },
              regular: {
                main: "functionalColor.info.main",
                "6": "bgColor.infoLight",
                "12": "bgColor.infoLight",
                "30": "functionalColor.info.disabled",
              },
              default: {
                main: "textColor.tertiary",
                "6": "bgColor.infoLight",
                "12": "bgColor.infoLight",
                "30": "functionalColor.info.disabled",
              },
            };
            const names = tokenNames[color];

            // 直接从公开语义 token 解析颜色值
            const colorValues: Record<TagColor, { main: string; "6": string; "12": string; "30": string }> = {
              warning: {
                main: tokens.functionalColor.error.main,
                "6": tokens.bgColor.errorLight,
                "12": tokens.bgColor.errorLight,
                "30": tokens.functionalColor.error.disabled,
              },
              notice: {
                main: tokens.functionalColor.warning.main,
                "6": tokens.bgColor.warningLight,
                "12": tokens.bgColor.warningLight,
                "30": tokens.functionalColor.warning.disabled,
              },
              success: {
                main: tokens.functionalColor.success.main,
                "6": tokens.bgColor.successLight,
                "12": tokens.bgColor.successLight,
                "30": tokens.functionalColor.success.disabled,
              },
              regular: {
                main: tokens.functionalColor.info.main,
                "6": tokens.bgColor.infoLight,
                "12": tokens.bgColor.infoLight,
                "30": tokens.functionalColor.info.disabled,
              },
              default: {
                main: tokens.textColor.tertiary,
                "6": tokens.bgColor.infoLight,
                "12": tokens.bgColor.infoLight,
                "30": tokens.functionalColor.info.disabled,
              },
            };
            const tagLevel = colorValues[color];

            return (
              <div
                key={color}
                style={{
                  padding: SPACING["3"],
                  borderRadius: RADIUS["2xl"],
                  border: `1px solid ${tokens.borderColor.level1}`,
                  backgroundColor: tokens.bgColor.elevated,
                }}
              >
                <h3 className="font-semibold mb-4 flex items-center gap-2" style={{ fontSize: tokens.typography.meta.caption.fontSize }}>
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: tagLevel.main }} />
                  {COLOR_LABELS[color]}
                </h3>
                <div className="space-y-3">
                  {(["main", 6, 12, 30] as const).map((level) => (
                    <div key={level} className="flex items-center gap-2">
                      <div
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: 6,
                          backgroundColor: tagLevel[level],
                          border: `1px solid ${tokens.borderColor.level1}`,
                          flexShrink: 0,
                        }}
                      />
                      <div style={{ minWidth: 0 }}>
                        <div className="text-xs font-mono" style={{ color: tokens.textColor.primary }}>{tagLevel[level]}</div>
                        <div className="text-xs" style={{ color: tokens.textColor.tertiary }}>{level === "main" ? "main" : `${level}%`} → <code>{names[level]}</code></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
