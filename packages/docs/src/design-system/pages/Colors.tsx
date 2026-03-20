import { type CSSProperties } from "react";
import { RADIUS, useTheme } from "@tai-design/components";
import {
  alpha,
  blueGray,
  status,
  theme,
  type ThemeName,
} from "../../data/colorTokens";

const ALPHA_LEVELS = [6, 12, 24, 42, 60, 72, 92, 100];

const alphaColorConfig = {
  light: {
    name: "黑色透明度",
    description: "浅色模式下使用，数字表示不透明度百分比",
    colors: Object.entries(alpha.black).map(([key, value]) => ({
      name: `Black-${key}`,
      value,
      level: parseInt(key, 10),
      usage: getAlphaUsage("black", parseInt(key, 10)),
    })),
  },
  dark: {
    name: "白色透明度",
    description: "深色模式下使用，数字表示不透明度百分比",
    colors: Object.entries(alpha.white).map(([key, value]) => ({
      name: `White-${key}`,
      value,
      level: parseInt(key, 10),
      usage: getAlphaUsage("white", parseInt(key, 10)),
    })),
  },
};

function getAlphaUsage(_type: "black" | "white", level: number): string {
  const usageMap: Record<number, string> = {
    5: "代码块背景",
    6: "三级分割线",
    10: "三级分割线",
    12: "二级分割线、描边",
    20: "二级分割线、描边",
    24: "蒙层背景",
    30: "禁用文字",
    40: "",
    42: "注释文本",
    50: "",
    54: "",
    60: "二级文本、辅助文案",
    70: "",
    72: "次要内容",
    80: "",
    84: "",
    90: "",
    92: "一级文本、标题",
    100: "纯色",
  };

  return usageMap[level] || "";
}

const blueGrayConfig = Object.entries(blueGray).map(([key, value]) => ({
  name: `BlueGray-${key}`,
  value,
  level: parseInt(key, 10),
  hex: value.replace("#", ""),
}));

const statusColorConfig = {
  red: { name: "Red", label: "红色 · 错误/危险", colors: status.red },
  orange: { name: "Orange", label: "橙色 · 警告", colors: status.orange },
  yellow: { name: "Yellow", label: "黄色 · 提示/进行中", colors: status.yellow },
  green: { name: "Green", label: "绿色 · 成功/安全", colors: status.green },
  blue: { name: "Blue", label: "蓝色 · 信息/链接", colors: status.blue },
} as const;

const themeColorConfig: Record<ThemeName, { name: string; nameCn: string }> = {
  yellowGreen: { name: "yellow-green", nameCn: "黄绿" },
  grassGreen: { name: "grass-green", nameCn: "草绿" },
  mossGreen: { name: "moss-green", nameCn: "苔绿" },
  teal: { name: "teal", nameCn: "蓝绿" },
  cyan: { name: "cyan", nameCn: "青" },
  lightBlue: { name: "light-blue", nameCn: "浅蓝" },
  darkBlue: { name: "dark-blue", nameCn: "深蓝" },
  indigo: { name: "indigo", nameCn: "靛蓝" },
  darkPurple: { name: "dark-purple", nameCn: "深紫" },
  purple: { name: "purple", nameCn: "紫" },
  copper: { name: "copper", nameCn: "紫红" },
  fuchsia: { name: "fuchsia", nameCn: "品红" },
  pink: { name: "pink", nameCn: "粉" },
};

export function Colors() {
  const { colors } = useTheme();

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

  const accentPanelStyle: CSSProperties = {
    marginBottom: 48,
    padding: 24,
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.brand}`,
    background: `linear-gradient(to right, ${colors.bg.brandSubtle}, ${colors.bg.secondary})`,
  };

  const noticePanelStyle: CSSProperties = {
    padding: 24,
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.warning}`,
    background: `linear-gradient(to right, ${colors.bg.warningSubtle}, ${colors.bg.secondary})`,
  };

  const guidePanelStyle: CSSProperties = {
    marginTop: 32,
    padding: 24,
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.success}`,
    background: `linear-gradient(to right, ${colors.bg.successSubtle}, ${colors.bg.secondary})`,
  };

  const layerCardStyle: CSSProperties = {
    padding: 24,
    borderRadius: RADIUS.xl,
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.elevated,
  };

  const lightSwatchShell = colors.bg.elevated;
  const darkSwatchShell = colors.static.black;

  const getSwatchCardStyle = (surface: "light" | "dark", width: string): CSSProperties => ({
    width,
    flexShrink: 0,
    overflow: "hidden",
    borderRadius: RADIUS.xl,
    border: `1px solid ${surface === "dark" ? colors.border.inverse : colors.border.subtle}`,
    backgroundColor: surface === "dark" ? darkSwatchShell : lightSwatchShell,
  });

  const getSwatchPreviewStyle = (surface: "light" | "dark", height: number): CSSProperties => ({
    height,
    position: "relative",
    backgroundColor: surface === "dark" ? darkSwatchShell : colors.static.white,
  });

  const getSwatchMetaStyle = (surface: "light" | "dark"): CSSProperties => ({
    padding: 12,
    backgroundColor: surface === "dark" ? darkSwatchShell : lightSwatchShell,
  });

  const inlineCodeStyle: CSSProperties = {
    padding: "3px 6px",
    borderRadius: 12,
    backgroundColor: colors.bg.code,
    color: colors.text.primary,
  };

  const preStyle: CSSProperties = {
    marginTop: 12,
    padding: 18,
    borderRadius: RADIUS.xl,
    overflowX: "auto",
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.code,
    color: colors.text.primary,
    fontSize: 12,
    lineHeight: 1.6,
  };

  return (
    <div>
      <div className="mb-8">
        <div style={chipStyle}>Foundation / 基础</div>
        <h1 className="text-4xl font-bold mb-4">Colors 颜色系统</h1>
        <p className="text-lg" style={{ color: colors.text.secondary }}>
          TAI Design 采用三层颜色架构：基础色板 → 语义化 Token → 组件。
        </p>
      </div>

      <div style={accentPanelStyle}>
        <h3 className="text-lg font-semibold mb-4">🏗️ Token 架构</h3>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div style={layerCardStyle}>
            <div className="font-semibold mb-2" style={{ color: colors.functional.info.main }}>
              Primitive Layer
            </div>
            <p style={{ color: colors.text.secondary }}>
              基础色板：alpha、blueGray、status、theme
            </p>
          </div>
          <div style={layerCardStyle}>
            <div className="font-semibold mb-2" style={{ color: colors.border.focus }}>
              Semantic Layer
            </div>
            <p style={{ color: colors.text.secondary }}>
              语义 Token：text、surface、border、action、status
            </p>
          </div>
          <div style={layerCardStyle}>
            <div className="font-semibold mb-2" style={{ color: colors.functional.success.main }}>
              Component Layer
            </div>
            <p style={{ color: colors.text.secondary }}>
              组件仅使用语义 Token，不直接引用基础色板
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Alpha 透明度色板</h2>
        <p className="text-sm mb-6" style={{ color: colors.text.secondary }}>
          用于文字、图标、分割线、蒙层等，数字表示不透明度百分比。
        </p>

        <h3 className="text-lg font-semibold mb-4">{alphaColorConfig.light.name}</h3>
        <p className="text-sm mb-4" style={{ color: colors.text.tertiary }}>
          {alphaColorConfig.light.description}
        </p>
        <div className="grid grid-cols-5 gap-4 mb-8">
          {alphaColorConfig.light.colors
            .filter((color) => ALPHA_LEVELS.includes(color.level))
            .map((color) => (
              <div key={color.name} style={getSwatchCardStyle("light", "auto")}>
                <div style={getSwatchPreviewStyle("light", 96)}>
                  <div className="absolute inset-0" style={{ backgroundColor: color.value }} />
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ color: color.level >= 60 ? colors.static.white : colors.text.primary }}
                  >
                    <span className="font-bold text-lg">{color.level}</span>
                  </div>
                </div>
                <div style={getSwatchMetaStyle("light")}>
                  <p className="font-mono text-xs mb-1" style={{ color: colors.text.primary }}>
                    {color.name}
                  </p>
                  <p className="text-xs mb-2" style={{ color: colors.text.tertiary }}>
                    {color.value}
                  </p>
                  {color.usage ? (
                    <p className="text-xs" style={{ color: colors.text.secondary }}>
                      {color.usage}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
        </div>

        <h3 className="text-lg font-semibold mb-4">{alphaColorConfig.dark.name}</h3>
        <p className="text-sm mb-4" style={{ color: colors.text.tertiary }}>
          {alphaColorConfig.dark.description}
        </p>
        <div
          style={{
            padding: 24,
            borderRadius: RADIUS["2xl"],
            border: `1px solid ${colors.border.subtle}`,
            backgroundColor: colors.bg.secondary,
          }}
        >
          <div className="grid grid-cols-5 gap-4">
            {alphaColorConfig.dark.colors
              .filter((color) => ALPHA_LEVELS.includes(color.level))
              .map((color) => (
                <div key={color.name} style={getSwatchCardStyle("dark", "auto")}>
                  <div style={getSwatchPreviewStyle("dark", 96)}>
                    <div className="absolute inset-0" style={{ backgroundColor: color.value }} />
                    <div className="absolute inset-0 flex items-center justify-center" style={{ color: colors.static.white }}>
                      <span className="font-bold text-lg">{color.level}</span>
                    </div>
                  </div>
                  <div style={getSwatchMetaStyle("dark")}>
                    <p className="font-mono text-xs mb-1" style={{ color: colors.static.white }}>
                      {color.name}
                    </p>
                    <p className="text-xs mb-2" style={{ color: colors.text.tertiary }}>
                      {color.value}
                    </p>
                    {color.usage ? (
                      <p className="text-xs" style={{ color: colors.text.secondary }}>
                        {color.usage}
                      </p>
                    ) : null}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-2">BlueGray 蓝灰色板</h2>
        <p className="text-sm mb-6" style={{ color: colors.text.secondary }}>
          中性底盘色，用于页面背景、卡片、容器等，数字表示明度等级（0 最浅，100 最深）。
        </p>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {blueGrayConfig.map((color) => {
            const isDarkColor = color.level >= 60;
            const surface = isDarkColor ? "dark" : "light";
            return (
              <div
                key={color.name}
                style={getSwatchCardStyle(surface, color.level === 50 ? "170px" : "120px")}
              >
                <div style={getSwatchPreviewStyle(surface, 80)}>
                  <div className="absolute inset-0" style={{ backgroundColor: color.value }} />
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ color: isDarkColor ? colors.static.white : colors.text.primary }}
                  >
                    <span className="font-bold text-lg">{color.level}</span>
                  </div>
                </div>
                <div style={getSwatchMetaStyle(surface)}>
                  <p className="font-mono text-xs mb-1" style={{ color: isDarkColor ? colors.static.white : colors.text.primary }}>
                    {color.name}
                  </p>
                  <p className="text-xs" style={{ color: isDarkColor ? colors.static.white : colors.text.secondary }}>
                    # {color.hex}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Status 功能色</h2>
        <p className="text-sm mb-6" style={{ color: colors.text.secondary }}>
          用于传达状态和功能的语义化颜色，50 为标准色。
        </p>
        <div className="space-y-6">
          {Object.entries(statusColorConfig).map(([key, colorGroup]) => {
            const swatches = Object.entries(colorGroup.colors).map(([level, value]) => ({
              level: parseInt(level, 10),
              value,
              isStandard: level === "50",
            }));

            return (
              <div key={key}>
                <h3 className="text-base font-semibold mb-3" style={{ color: colors.text.primary }}>
                  {colorGroup.name} / {colorGroup.label}
                </h3>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {swatches.map((swatch) => {
                    const isDarkColor = swatch.level >= 60;
                    const surface = isDarkColor ? "dark" : "light";
                    return (
                      <div
                        key={swatch.level}
                        style={getSwatchCardStyle(surface, swatch.isStandard ? "110px" : "80px")}
                      >
                        <div style={getSwatchPreviewStyle(surface, 56)}>
                          <div className="absolute inset-0" style={{ backgroundColor: swatch.value }} />
                          {swatch.isStandard ? (
                            <div
                              className="absolute top-1.5 left-1/2 -translate-x-1/2 text-xs font-medium"
                              style={{ color: colors.static.white }}
                            >
                              标准色
                            </div>
                          ) : null}
                          <div
                            className={`absolute inset-0 flex items-center justify-center ${swatch.isStandard ? "mt-4" : ""}`}
                            style={{
                              color:
                                isDarkColor || swatch.level >= 40
                                  ? colors.static.white
                                  : colors.text.primary,
                            }}
                          >
                            <span className="font-bold text-base">{swatch.level}</span>
                          </div>
                        </div>
                        <div style={{ ...getSwatchMetaStyle(surface), padding: "6px 8px" }}>
                          <p
                            className="text-[10px]"
                            style={{ color: isDarkColor ? colors.static.white : colors.text.secondary }}
                          >
                            {swatch.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Theme 主题色</h2>
        <div style={noticePanelStyle} className="mb-6">
          <p className="text-sm leading-relaxed" style={{ color: colors.text.secondary }}>
            <strong style={{ color: colors.text.primary }}>⚠️ 重要提示：</strong>
            主题色是品牌可选色池，通过语义 Token 消费。组件不应直接使用主题色板中的颜色，而应使用
            <code style={inlineCodeStyle}>action.primary</code>
            、
            <code style={inlineCodeStyle}>border.focus</code>
            等语义 Token。
          </p>
        </div>

        <div className="space-y-8">
          {(Object.keys(themeColorConfig) as ThemeName[]).map((themeName) => {
            const config = themeColorConfig[themeName];
            const swatches = theme[themeName];

            return (
              <div key={themeName}>
                <h3 className="text-lg font-semibold mb-4" style={{ color: colors.text.primary }}>
                  {config.nameCn} / {config.name}
                  {themeName === "darkBlue" ? (
                    <span
                      className="ml-2 text-xs px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: colors.bg.brandSubtle,
                        color: colors.text.primary,
                        border: `1px solid ${colors.border.brand}`,
                      }}
                    >
                      默认主题
                    </span>
                  ) : null}
                </h3>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {Object.entries(swatches).map(([level, value]) => {
                    const levelNum = parseInt(level, 10);
                    const isDarkColor = levelNum >= 60;
                    const surface = isDarkColor ? "dark" : "light";
                    return (
                      <div
                        key={level}
                        style={getSwatchCardStyle(surface, level === "50" ? "170px" : "120px")}
                      >
                        <div style={getSwatchPreviewStyle(surface, 80)}>
                          <div className="absolute inset-0 rounded-t-xl" style={{ backgroundColor: value }} />
                          <div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{
                              color:
                                isDarkColor || levelNum >= 40
                                  ? colors.static.white
                                  : colors.text.primary,
                            }}
                          >
                            <span className="font-bold text-xl">{level}</span>
                          </div>
                        </div>
                        <div style={getSwatchMetaStyle(surface)}>
                          <p
                            className="font-mono text-xs"
                            style={{ color: isDarkColor ? colors.static.white : colors.text.primary }}
                          >
                            {value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={guidePanelStyle}>
        <h3 className="text-lg font-semibold mb-4">💡 使用指南</h3>
        <div className="text-sm space-y-3" style={{ color: colors.text.secondary }}>
          <div>
            <strong style={{ color: colors.text.primary }}>推荐用法：</strong>
            <pre style={preStyle}>{`import { getTokens } from '@/data/colorTokens';

const tokens = getTokens(isDark);

// 使用语义 Token
<div style={{ 
  color: tokens.text.primary,
  backgroundColor: tokens.surface.card,
  border: \`1px solid \${tokens.border.default}\`
}}>
  Hello World
</div>`}</pre>
          </div>
          <div>
            <strong style={{ color: colors.text.primary }}>需要原始色板时：</strong>
            <pre style={preStyle}>{`import { primitives } from '@/data/colorTokens';

// 访问透明度色
const overlay = primitives.alpha.black[60];

// 访问蓝灰色
const cardBg = primitives.blueGray[0];

// 访问主题色
const brandColor = primitives.theme.darkBlue[50];`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
