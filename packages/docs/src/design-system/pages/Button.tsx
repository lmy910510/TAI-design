import { useState, useMemo, CSSProperties } from "react";
import { ArrowRight, Music } from "lucide-react";
import { DocPageHeader } from "../DocComponents";
import {
  Button as TaiButton,
  BUTTON_ICON_POSITIONS,
  BUTTON_SIZE_CONFIG,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  RADIUS,
  SPACING,
  STATIC,
  PRESSED_OVERLAY,
  useTheme,
  type ButtonIconPosition,
  type ButtonSize,
  type ButtonVariant,
  type ButtonVisualState,
} from "@tai-design/components";

type PreviewState = ButtonVisualState | "disabled";

const PREVIEW_STATES: PreviewState[] = ["default", "hover", "pressed", "disabled"];

export function Button() {
  const { tokens } = useTheme();
  const [selectedSize, setSelectedSize] = useState<ButtonSize>("large");
  const [selectedVariant, setSelectedVariant] = useState<ButtonVariant>("primary");
  const [selectedIconPosition, setSelectedIconPosition] =
    useState<ButtonIconPosition>("none");
  const [previewState, setPreviewState] = useState<PreviewState>("default");

  const panelStyle: CSSProperties = {
    padding: SPACING["4"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.elevated,
  };

  const infoPanelStyle: CSSProperties = {
    marginTop: SPACING["4"],
    padding: SPACING["3"],
    borderRadius: RADIUS.xl,
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.container,
  };

  const guidePanelStyle: CSSProperties = {
    padding: SPACING["4"],
    marginBottom: SPACING["5"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.level1}`,
    background: `linear-gradient(to right, ${tokens.bgColor.container}, ${tokens.bgColor.secondaryContainer})`,
  };

  const getOptionButtonStyle = (active: boolean): CSSProperties => ({
    width: "100%",
    padding: `${SPACING["2"]}px ${SPACING["3"]}px`,
    borderRadius: RADIUS.xl,
    border: `2px solid ${active ? tokens.borderColor.focus : STATIC.transparent}`,
    backgroundColor: active ? tokens.bgColor.container : tokens.bgColor.secondaryContainer,
    color: active ? tokens.textColor.primary : tokens.textColor.secondary,
    textAlign: "left",
    fontSize: FONT_SIZE.sm,
    fontWeight: FONT_WEIGHT.medium,
    lineHeight: LINE_HEIGHT.normal,
    transition: "all 150ms ease",
    cursor: "pointer",
  });

  const getOptionMetaStyle = (active: boolean): CSSProperties => ({
    marginTop: SPACING["2"] / 2,
    fontSize: FONT_SIZE.xs,
    fontWeight: FONT_WEIGHT.regular,
    color: active ? tokens.textColor.secondary : tokens.textColor.tertiary,
  });

  // ── Token 映射表 ──
  interface TokenEntry {
    label: string;
    tokenPath: string;
    value: string;
  }

  const tokenMap = useMemo<TokenEntry[]>(() => {
    const isDisabled = previewState === "disabled";
    const isPressedState = previewState === "pressed";

    const variantTokens: Record<ButtonVariant, { bg: TokenEntry; text: TokenEntry; icon: TokenEntry; border?: TokenEntry }> = {
      primary: {
        bg: { label: "背景", tokenPath: "bgColor.brand", value: tokens.bgColor.brand },
        text: { label: "文字", tokenPath: "textColor.anti", value: tokens.textColor.anti },
        icon: { label: "图标", tokenPath: "textColor.anti", value: tokens.textColor.anti },
      },
      secondary: {
        bg: { label: "背景", tokenPath: "bgColor.component", value: tokens.bgColor.component },
        text: { label: "文字", tokenPath: "textColor.primary", value: tokens.textColor.primary },
        icon: { label: "图标", tokenPath: "textColor.primary", value: tokens.textColor.primary },
      },
      ghost: {
        bg: { label: "背景", tokenPath: "STATIC.transparent", value: STATIC.transparent },
        text: { label: "文字", tokenPath: "textColor.primary", value: tokens.textColor.primary },
        icon: { label: "图标", tokenPath: "textColor.primary", value: tokens.textColor.primary },
        border: { label: "边框", tokenPath: "borderColor.level2", value: tokens.borderColor.level2 },
      },
      danger: {
        bg: { label: "背景", tokenPath: "functionalColor.error.light", value: tokens.functionalColor.error.light },
        text: { label: "文字", tokenPath: "functionalColor.error.main", value: tokens.functionalColor.error.main },
        icon: { label: "图标", tokenPath: "functionalColor.error.main", value: tokens.functionalColor.error.main },
      },
    };

    const current = variantTokens[selectedVariant];
    const entries: TokenEntry[] = [];

    if (isDisabled) {
      if (selectedVariant === "ghost") {
        entries.push({ label: "背景 (disabled)", tokenPath: "STATIC.transparent", value: STATIC.transparent });
      } else {
        entries.push({ label: "背景 (disabled)", tokenPath: "bgColor.componentDisabled", value: tokens.bgColor.componentDisabled });
      }
      if (selectedVariant === "danger") {
        entries.push({ label: "文字 (disabled)", tokenPath: "functionalColor.error.disabled", value: tokens.functionalColor.error.disabled });
        entries.push({ label: "图标 (disabled)", tokenPath: "functionalColor.error.disabled", value: tokens.functionalColor.error.disabled });
      } else {
        entries.push({ label: "文字 (disabled)", tokenPath: "textColor.disabled", value: tokens.textColor.disabled });
        entries.push({ label: "图标 (disabled)", tokenPath: "textColor.disabled", value: tokens.textColor.disabled });
      }
      if (selectedVariant === "ghost") {
        entries.push({ label: "边框 (disabled)", tokenPath: "borderColor.level1", value: tokens.borderColor.level1 });
      }
    } else {
      entries.push(current.bg);
      entries.push(current.text);
      entries.push(current.icon);
      if (current.border) {
        entries.push(current.border);
      }
      if (isPressedState) {
        entries.push({ label: "按下蒙层", tokenPath: "PRESSED_OVERLAY", value: PRESSED_OVERLAY });
      }
    }

    return entries;
  }, [tokens, selectedVariant, previewState]);

  const renderTokenRow = (entry: TokenEntry) => {
    const isTransparent = entry.value === "transparent" || entry.value === STATIC.transparent;
    return (
      <div
        key={entry.label + entry.tokenPath}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: `${SPACING["2"] / 2}px 0`,
          borderBottom: `1px solid ${tokens.borderColor.level1}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: SPACING["2"] / 2 }}>
          <div
            style={{
              width: SPACING["4"],
              height: SPACING["4"],
              borderRadius: SPACING["2"] / 2,
              backgroundColor: isTransparent ? tokens.bgColor.container : entry.value,
              border: `1px solid ${tokens.borderColor.level1}`,
              ...(isTransparent ? {
                backgroundImage: `
                  linear-gradient(45deg, ${tokens.borderColor.level1} 25%, transparent 25%),
                  linear-gradient(-45deg, ${tokens.borderColor.level1} 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, ${tokens.borderColor.level1} 75%),
                  linear-gradient(-45deg, transparent 75%, ${tokens.borderColor.level1} 75%)
                `,
                backgroundSize: "8px 8px",
                backgroundPosition: "0 0, 0 4px, 4px -4px, -4px 0px",
              } : {}),
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: FONT_SIZE.xs, fontWeight: FONT_WEIGHT.medium, color: tokens.textColor.primary }}>
            {entry.label}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: SPACING["2"] }}>
          <code
            style={{
              fontSize: FONT_SIZE.xs,
              fontWeight: FONT_WEIGHT.regular,
              padding: `2px ${SPACING["2"] / 2}px`,
              borderRadius: SPACING["2"] / 2,
              backgroundColor: tokens.bgColor.secondaryContainer,
              color: tokens.textColor.secondary,
              fontFamily: "monospace",
            }}
          >
            {entry.tokenPath}
          </code>
          <span
            style={{
              fontSize: FONT_SIZE.xs,
              fontWeight: FONT_WEIGHT.regular,
              color: tokens.textColor.tertiary,
              fontFamily: "monospace",
              minWidth: 80,
              textAlign: "right",
            }}
          >
            {entry.value}
          </span>
        </div>
      </div>
    );
  };

  const renderPreviewButton = () => {
    const iconSize = BUTTON_SIZE_CONFIG[selectedSize].iconSize;
    const icon =
      selectedIconPosition === "none"
        ? undefined
        : selectedIconPosition === "right"
          ? <ArrowRight size={iconSize} />
          : <Music size={iconSize} />;

    return (
      <TaiButton
        size={selectedSize}
        variant={selectedVariant}
        icon={icon}
        iconPosition={selectedIconPosition}
        disabled={previewState === "disabled"}
        forceState={previewState === "disabled" ? undefined : previewState}
      >
        {selectedIconPosition === "only" ? null : "按钮"}
      </TaiButton>
    );
  };

  return (
    <div>
      {/* ── 页头 ── */}
      <DocPageHeader
        category="Components / 组件"
        title="按钮组件"
        description="车机端设计系统的核心交互组件，提供 4 种尺寸和 4 种样式变体"
      />

      {/* ── 双栏：预览 + 配置 ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: SPACING["6"], marginBottom: SPACING["6"] }}>
        {/* 左栏：预览 */}
        <div style={panelStyle}>
          <h2 style={{ ...tokens.typography.title.section, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>
            状态预览
          </h2>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 200, marginBottom: SPACING["6"] }}>
            {renderPreviewButton()}
          </div>

          <div>
            <h3 style={{ fontSize: FONT_SIZE.sm, fontWeight: FONT_WEIGHT.medium, lineHeight: LINE_HEIGHT.none, color: tokens.textColor.secondary, marginBottom: SPACING["2"] }}>
              模拟状态
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: SPACING["2"] / 2 }}>
              {PREVIEW_STATES.map((state) => (
                <button
                  key={state}
                  onClick={() => setPreviewState(state)}
                  style={getOptionButtonStyle(previewState === state)}
                >
                  {state === "default" ? "默认" : state === "hover" ? "悬浮" : state === "pressed" ? "按压" : "禁用"}
                </button>
              ))}
            </div>
          </div>

          {/* 信息面板 */}
          <div style={infoPanelStyle}>
            <div style={{ fontSize: FONT_SIZE.xs, fontWeight: FONT_WEIGHT.regular, color: tokens.textColor.secondary, display: "flex", flexDirection: "column", gap: SPACING["2"] / 2 }}>
              {[
                { label: "尺寸", value: `${BUTTON_SIZE_CONFIG[selectedSize].height}px` },
                { label: "样式", value: selectedVariant },
                { label: "图标", value: selectedIconPosition === "none" ? "无" : selectedIconPosition === "left" ? "左侧" : selectedIconPosition === "right" ? "右侧" : "仅图标" },
                { label: "状态", value: previewState },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>{item.label}:</span>
                  <span style={{ fontFamily: "monospace" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Token 颜色映射 */}
          <div
            style={{
              marginTop: SPACING["3"],
              padding: SPACING["3"],
              borderRadius: RADIUS.xl,
              border: `1px solid ${tokens.borderColor.level1}`,
              backgroundColor: tokens.bgColor.container,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: SPACING["2"],
              }}
            >
              <span style={{ fontSize: FONT_SIZE.xs, fontWeight: FONT_WEIGHT.semibold, color: tokens.textColor.primary }}>
                🎨 Token 颜色映射
              </span>
              <span
                style={{
                  fontSize: FONT_SIZE.xs,
                  fontWeight: FONT_WEIGHT.regular,
                  padding: `2px ${SPACING["2"] / 2}px`,
                  borderRadius: SPACING["2"] / 2,
                  backgroundColor: tokens.bgColor.secondaryContainer,
                  color: tokens.textColor.tertiary,
                }}
              >
                {selectedVariant} · {previewState}
              </span>
            </div>
            <div>{tokenMap.map(renderTokenRow)}</div>
          </div>
        </div>

        {/* 右栏：配置 */}
        <div style={panelStyle}>
          <h2 style={{ ...tokens.typography.title.section, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>
            类型选择
          </h2>

          {/* 尺寸 */}
          <div style={{ marginBottom: SPACING["4"] }}>
            <h3 style={{ fontSize: FONT_SIZE.sm, fontWeight: FONT_WEIGHT.medium, lineHeight: LINE_HEIGHT.none, color: tokens.textColor.secondary, marginBottom: SPACING["2"] }}>
              按钮尺寸
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: SPACING["2"] }}>
              {BUTTON_SIZES.map((size) => {
                const active = selectedSize === size;
                return (
                  <button key={size} onClick={() => setSelectedSize(size)} style={getOptionButtonStyle(active)}>
                    <div style={{ fontWeight: FONT_WEIGHT.medium }}>
                      {size === "large" ? "大" : size === "medium" ? "中" : size === "small" ? "小" : "迷你"}
                    </div>
                    <div style={getOptionMetaStyle(active)}>{BUTTON_SIZE_CONFIG[size].height}px</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 样式 */}
          <div style={{ marginBottom: SPACING["4"] }}>
            <h3 style={{ fontSize: FONT_SIZE.sm, fontWeight: FONT_WEIGHT.medium, lineHeight: LINE_HEIGHT.none, color: tokens.textColor.secondary, marginBottom: SPACING["2"] }}>
              按钮样式
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["2"] / 2 }}>
              {BUTTON_VARIANTS.map((variant) => {
                const active = selectedVariant === variant;
                return (
                  <button key={variant} onClick={() => setSelectedVariant(variant)} style={getOptionButtonStyle(active)}>
                    <div style={{ fontWeight: FONT_WEIGHT.medium }}>
                      {variant === "primary" ? "主要按钮" : variant === "secondary" ? "次要按钮" : variant === "ghost" ? "幽灵按钮" : "警示按钮"}
                    </div>
                    <div style={getOptionMetaStyle(active)}>
                      {variant === "primary" ? "深色实心背景，白色文字" : variant === "secondary" ? "浅色填充背景，无描边" : variant === "ghost" ? "透明背景，轻描边" : "危险操作的高提醒态"}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 图标 */}
          <div>
            <h3 style={{ fontSize: FONT_SIZE.sm, fontWeight: FONT_WEIGHT.medium, lineHeight: LINE_HEIGHT.none, color: tokens.textColor.secondary, marginBottom: SPACING["2"] }}>
              图标位置
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: SPACING["2"] }}>
              {BUTTON_ICON_POSITIONS.map((position) => (
                <button key={position} onClick={() => setSelectedIconPosition(position)} style={getOptionButtonStyle(selectedIconPosition === position)}>
                  {position === "none" ? "无图标" : position === "left" ? "左侧图标" : position === "right" ? "右侧箭头" : "仅图标"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 设计规范 ── */}
      <div style={guidePanelStyle}>
        <h3 style={{ fontSize: FONT_SIZE.xl, fontWeight: FONT_WEIGHT.semibold, lineHeight: LINE_HEIGHT.relaxed, marginBottom: SPACING["2"] }}>
          📐 设计规范
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: SPACING["4"] }}>
          <div style={{ fontSize: FONT_SIZE.sm, fontWeight: FONT_WEIGHT.regular, lineHeight: LINE_HEIGHT.relaxed, color: tokens.textColor.secondary }}>
            <p style={{ marginBottom: SPACING["2"], fontWeight: FONT_WEIGHT.semibold, color: tokens.textColor.primary }}>
              尺寸体系：
            </p>
            <ul style={{ fontSize: FONT_SIZE.xs, lineHeight: LINE_HEIGHT.relaxed, display: "flex", flexDirection: "column", gap: SPACING["2"] / 2 }}>
              <li>• <strong>大按钮 (84px):</strong> 主要操作、底部固定按钮</li>
              <li>• <strong>中按钮 (72px):</strong> 常规操作、表单提交</li>
              <li>• <strong>小按钮 (60px):</strong> 次要操作、工具栏</li>
              <li>• <strong>迷你按钮 (48px):</strong> 辅助功能、标签</li>
            </ul>
          </div>
          <div style={{ fontSize: FONT_SIZE.sm, fontWeight: FONT_WEIGHT.regular, lineHeight: LINE_HEIGHT.relaxed, color: tokens.textColor.secondary }}>
            <p style={{ marginBottom: SPACING["2"], fontWeight: FONT_WEIGHT.semibold, color: tokens.textColor.primary }}>
              使用场景：
            </p>
            <ul style={{ fontSize: FONT_SIZE.xs, lineHeight: LINE_HEIGHT.relaxed, display: "flex", flexDirection: "column", gap: SPACING["2"] / 2 }}>
              <li>• <strong>主要按钮:</strong> 核心操作（确认、提交、开始）</li>
              <li>• <strong>次要按钮:</strong> 辅助操作（取消、返回）</li>
              <li>• <strong>幽灵按钮:</strong> 弱化操作、可选功能</li>
              <li>• <strong>警示按钮:</strong> 危险操作（删除、退出）</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
