import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ArrowRight, Music } from "lucide-react";
import {
  Button as TaiButton,
  BUTTON_ICON_POSITIONS,
  BUTTON_SIZE_CONFIG,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  type ButtonIconPosition,
  type ButtonSize,
  type ButtonVariant,
  type ButtonVisualState,
} from "@tai-design/components";

type PreviewState = ButtonVisualState | "disabled";

const PREVIEW_STATES: PreviewState[] = ["default", "hover", "pressed", "disabled"];

export function Button() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const [selectedSize, setSelectedSize] = useState<ButtonSize>("large");
  const [selectedVariant, setSelectedVariant] = useState<ButtonVariant>("primary");
  const [selectedIconPosition, setSelectedIconPosition] =
    useState<ButtonIconPosition>("none");
  const [previewState, setPreviewState] = useState<PreviewState>("default");

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
        <div
          className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
            isDark
              ? "bg-white/10 border-white/20 text-gray-200"
              : "bg-gray-100 border-gray-300 text-gray-900"
          }`}
        >
          Components / 组件
        </div>
        <h1 className="text-4xl font-bold mb-4">按钮组件</h1>
        <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          车机端设计系统的核心交互组件，提供 4 种尺寸和 5 种样式变体
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div
          className={`p-8 border rounded-xl ${
            isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6">状态预览</h2>

          <div className="flex items-center justify-center min-h-[200px] mb-8">
            {renderPreviewButton()}
          </div>

          <div>
            <h3 className={`text-sm font-medium mb-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              模拟状态
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {PREVIEW_STATES.map((state) => (
                <button
                  key={state}
                  onClick={() => setPreviewState(state)}
                  className={`py-2 px-3 rounded-lg text-sm transition-all ${
                    previewState === state
                      ? isDark
                        ? "border-2 border-white bg-white/10 text-white"
                        : "border-2 border-black bg-gray-100 text-black"
                      : isDark
                        ? "bg-white/10 text-gray-300 hover:bg-white/20 border-2 border-transparent"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent"
                  }`}
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

          <div
            className={`mt-6 p-4 border rounded-lg ${
              isDark ? "bg-white/5 border-white/10" : "bg-gray-50 border-gray-200"
            }`}
          >
            <div className={`text-xs space-y-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
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

        <div
          className={`p-8 border rounded-xl ${
            isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6">类型选择</h2>

          <div className="mb-6">
            <h3 className={`text-sm font-medium mb-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              按钮尺寸
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {BUTTON_SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 px-4 rounded-lg text-sm transition-all ${
                    selectedSize === size
                      ? isDark
                        ? "border-2 border-white bg-white/10 text-white"
                        : "border-2 border-black bg-gray-100 text-black"
                      : isDark
                        ? "bg-white/10 text-gray-300 hover:bg-white/20 border-2 border-transparent"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent"
                  }`}
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
                  <div
                    className={`text-xs mt-1 ${
                      selectedSize === size
                        ? isDark
                          ? "text-white/70"
                          : "text-black/70"
                        : "text-gray-500"
                    }`}
                  >
                    {BUTTON_SIZE_CONFIG[size].height}px
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className={`text-sm font-medium mb-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              按钮样式
            </h3>
            <div className="space-y-2">
              {BUTTON_VARIANTS.map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`w-full py-3 px-4 rounded-lg text-sm text-left transition-all ${
                    selectedVariant === variant
                      ? isDark
                        ? "border-2 border-white bg-white/10 text-white"
                        : "border-2 border-black bg-gray-100 text-black"
                      : isDark
                        ? "bg-white/10 text-gray-300 hover:bg-white/20 border-2 border-transparent"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent"
                  }`}
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
                  <div
                    className={`text-xs mt-1 ${
                      selectedVariant === variant
                        ? isDark
                          ? "text-white/70"
                          : "text-black/70"
                        : "text-gray-500"
                    }`}
                  >
                    {variant === "primary"
                      ? "深色背景，白色文字"
                      : variant === "secondary"
                        ? "浅色背景，深色文字"
                        : variant === "tertiary"
                          ? "浅色背景，深色文字"
                          : variant === "ghost"
                            ? "透明背景，带边框"
                            : "红色主题，警示操作"}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`text-sm font-medium mb-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              图标位置
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {BUTTON_ICON_POSITIONS.map((position) => (
                <button
                  key={position}
                  onClick={() => setSelectedIconPosition(position)}
                  className={`py-3 px-4 rounded-lg text-sm transition-all ${
                    selectedIconPosition === position
                      ? isDark
                        ? "border-2 border-white bg-white/10 text-white"
                        : "border-2 border-black bg-gray-100 text-black"
                      : isDark
                        ? "bg-white/10 text-gray-300 hover:bg-white/20 border-2 border-transparent"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent"
                  }`}
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

      <div
        className={`p-6 border rounded-xl mb-8 ${
          isDark
            ? "bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-blue-500/20"
            : "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200"
        }`}
      >
        <h3 className="text-lg font-semibold mb-3">📐 设计规范</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
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
          <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
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
