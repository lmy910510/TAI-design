import { useState, CSSProperties } from "react";
import { ArrowRight, Music } from "lucide-react";
import {
  Button as TaiButton,
  BUTTON_ICON_POSITIONS,
  BUTTON_SIZE_CONFIG,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  RADIUS,
  useTheme,
  type ButtonIconPosition,
  type ButtonSize,
  type ButtonVariant,
  type ButtonVisualState,
} from "@tai-design/components";

type PreviewState = ButtonVisualState | "disabled";

const PREVIEW_STATES: PreviewState[] = ["default", "hover", "pressed", "disabled"];

export function Button() {
  const { colors } = useTheme();
  const [selectedSize, setSelectedSize] = useState<ButtonSize>("large");
  const [selectedVariant, setSelectedVariant] = useState<ButtonVariant>("primary");
  const [selectedIconPosition, setSelectedIconPosition] =
    useState<ButtonIconPosition>("none");
  const [previewState, setPreviewState] = useState<PreviewState>("default");

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

  const infoPanelStyle: CSSProperties = {
    marginTop: 24,
    padding: 18,
    borderRadius: RADIUS.xl,
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.secondary,
  };

  const guidePanelStyle: CSSProperties = {
    padding: 24,
    marginBottom: 32,
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.subtle}`,
    background: `linear-gradient(to right, ${colors.bg.secondary}, ${colors.bg.tertiary})`,
  };

  const getOptionButtonStyle = (active: boolean): CSSProperties => ({
    width: "100%",
    padding: "12px 16px",
    borderRadius: RADIUS.xl,
    border: `2px solid ${active ? colors.border.focus : colors.static.transparent}`,
    backgroundColor: active ? colors.bg.secondary : colors.bg.tertiary,
    color: active ? colors.text.primary : colors.text.secondary,
    textAlign: "left",
    transition: "all 150ms ease",
  });

  const getOptionMetaStyle = (active: boolean): CSSProperties => ({
    marginTop: 4,
    fontSize: 12,
    color: active ? colors.text.secondary : colors.text.tertiary,
  });

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
      <div className="mb-8">
        <div style={chipStyle}>Components / 组件</div>
        <h1 className="text-4xl font-bold mb-4">按钮组件</h1>
        <p className="text-lg" style={{ color: colors.text.secondary }}>
          车机端设计系统的核心交互组件，提供 4 种尺寸和 5 种样式变体
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div style={panelStyle}>
          <h2 className="text-2xl font-bold mb-6">状态预览</h2>

          <div className="flex items-center justify-center min-h-[200px] mb-8">
            {renderPreviewButton()}
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3" style={{ color: colors.text.secondary }}>
              模拟状态
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {PREVIEW_STATES.map((state) => (
                <button
                  key={state}
                  onClick={() => setPreviewState(state)}
                  style={getOptionButtonStyle(previewState === state)}
                >
                  {state === "default"
                    ? "默认"
                    : state === "hover"
                      ? "悬浮"
                      : state === "pressed"
                        ? "按压"
                        : "禁用"}
                </button>
              ))}
            </div>
          </div>

          <div style={infoPanelStyle}>
            <div className="text-xs space-y-1" style={{ color: colors.text.secondary }}>
              <div className="flex justify-between">
                <span>尺寸:</span>
                <span className="font-mono">{BUTTON_SIZE_CONFIG[selectedSize].height}px</span>
              </div>
              <div className="flex justify-between">
                <span>样式:</span>
                <span className="font-mono">{selectedVariant}</span>
              </div>
              <div className="flex justify-between">
                <span>图标:</span>
                <span className="font-mono">
                  {selectedIconPosition === "none"
                    ? "无"
                    : selectedIconPosition === "left"
                      ? "左侧"
                      : selectedIconPosition === "right"
                        ? "右侧"
                        : "仅图标"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>状态:</span>
                <span className="font-mono">{previewState}</span>
              </div>
            </div>
          </div>
        </div>

        <div style={panelStyle}>
          <h2 className="text-2xl font-bold mb-6">类型选择</h2>

          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3" style={{ color: colors.text.secondary }}>
              按钮尺寸
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {BUTTON_SIZES.map((size) => {
                const active = selectedSize === size;
                return (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={getOptionButtonStyle(active)}
                  >
                    <div className="font-medium">
                      {size === "large"
                        ? "大"
                        : size === "medium"
                          ? "中"
                          : size === "small"
                            ? "小"
                            : "迷你"}
                    </div>
                    <div style={getOptionMetaStyle(active)}>{BUTTON_SIZE_CONFIG[size].height}px</div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3" style={{ color: colors.text.secondary }}>
              按钮样式
            </h3>
            <div className="space-y-2">
              {BUTTON_VARIANTS.map((variant) => {
                const active = selectedVariant === variant;
                return (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    style={getOptionButtonStyle(active)}
                  >
                    <div className="font-medium">
                      {variant === "primary"
                        ? "主要按钮"
                        : variant === "secondary"
                          ? "次要按钮"
                          : variant === "tertiary"
                            ? "三级按钮"
                            : variant === "ghost"
                              ? "幽灵按钮"
                              : "警示按钮"}
                    </div>
                    <div style={getOptionMetaStyle(active)}>
                      {variant === "primary"
                        ? "深色背景，白色文字"
                        : variant === "secondary"
                          ? "浅色背景，深色文字"
                          : variant === "tertiary"
                            ? "浅色背景，深色文字"
                            : variant === "ghost"
                              ? "透明背景，带边框"
                              : "危险操作的高提醒态"}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3" style={{ color: colors.text.secondary }}>
              图标位置
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {BUTTON_ICON_POSITIONS.map((position) => (
                <button
                  key={position}
                  onClick={() => setSelectedIconPosition(position)}
                  style={getOptionButtonStyle(selectedIconPosition === position)}
                >
                  {position === "none"
                    ? "无图标"
                    : position === "left"
                      ? "左侧图标"
                      : position === "right"
                        ? "右侧箭头"
                        : "仅图标"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={guidePanelStyle}>
        <h3 className="text-lg font-semibold mb-3">📐 设计规范</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-sm" style={{ color: colors.text.secondary }}>
            <p className="mb-2">
              <strong>尺寸体系：</strong>
            </p>
            <ul className="space-y-1 text-xs">
              <li>• <strong>大按钮 (84px):</strong> 主要操作、底部固定按钮</li>
              <li>• <strong>中按钮 (72px):</strong> 常规操作、表单提交</li>
              <li>• <strong>小按钮 (60px):</strong> 次要操作、工具栏</li>
              <li>• <strong>迷你按钮 (48px):</strong> 辅助功能、标签</li>
            </ul>
          </div>
          <div className="text-sm" style={{ color: colors.text.secondary }}>
            <p className="mb-2">
              <strong>使用场景：</strong>
            </p>
            <ul className="space-y-1 text-xs">
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
