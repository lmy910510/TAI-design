import { type CSSProperties } from "react";
import { RADIUS, SPACING, STATIC, useTheme } from "@tai-design/components";
import { DocPageHeader } from "../DocComponents";
import {
  alpha,
  blueGray,
  darkTokens,
  lightTokens,
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

// ============================================================================
// 语义 Token 分组 — 显式列出每个 token，100% 不会遗漏
// ============================================================================

type SemanticTokenRow = {
  token: string;
  usage: string;
  light: string;
  dark: string;
};

type SemanticGroup = {
  key: string;
  title: string;
  description: string;
  badge?: string;
  rows: SemanticTokenRow[];
};

const lt = lightTokens as unknown as Record<string, unknown>;
const dt = darkTokens as unknown as Record<string, unknown>;

function val(obj: Record<string, unknown>, path: string): string {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const p of parts) {
    if (typeof cur === "object" && cur !== null) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return "";
    }
  }
  return typeof cur === "string" ? cur : "";
}

function makeRows(group: string, keys: string[], usages: Record<string, string>): SemanticTokenRow[] {
  return keys.map((key) => ({
    token: `tokens.${group}.${key}`,
    usage: usages[key] || "",
    light: val(lt, `${group}.${key}`),
    dark: val(dt, `${group}.${key}`),
  }));
}

const semanticTokenGroups: SemanticGroup[] = [
  {
    key: "textColor",
    title: "TextColor / 文字色",
    description: "文字与图标统一色阶 — 对标 TDesign @text-color-*。一套 token 同时用于文字颜色和图标颜色。",
    badge: "对标 TDesign @text-color",
    rows: makeRows("textColor", [
      "primary", "secondary", "tertiary", "disabled",
      "placeholder", "anti", "brand", "link",
    ], {
      primary: "主要文字 — @text-color-primary",
      secondary: "次要文字 — @text-color-secondary",
      tertiary: "辅助文字",
      disabled: "禁用态文字 — @text-color-disabled",
      placeholder: "占位符文字 — @text-color-placeholder",
      anti: "反色文字（深色背景上）— @text-color-anti",
      brand: "品牌色文字 — @text-color-brand",
      link: "链接文字 — @text-color-link",
    }),
  },
  {
    key: "bgColor",
    title: "BgColor / 背景色",
    description: "页面、容器、组件、浮层的语义背景 token — 对标 TDesign @bg-color-*。车机端无 hover 态；按下态统一用 pressedOverlay 蒙层。",
    badge: "对标 TDesign @bg-color",
    rows: makeRows("bgColor", [
      "page", "container",
      "secondaryContainer",
      "component", "componentDisabled",
      "specialComponent", "elevated", "overlay", "maskDisabled", "pressedOverlay",
      "code", "glass",
      "brand", "brandLight",
      "successLight", "warningLight", "errorLight", "infoLight",
    ], {
      page: "页面主背景 — @bg-color-page",
      container: "容器背景 — @bg-color-container",
      secondaryContainer: "次级容器 — @bg-color-secondarycontainer",
      component: "组件背景（蓝灰色板）— @bg-color-component",
      componentDisabled: "组件禁用（蓝灰色板）— @bg-color-component-disabled",
      specialComponent: "特殊组件背景（蓝灰色板）— @bg-color-specialcomponent",
      elevated: "悬浮卡片、弹出层背景",
      overlay: "模态遮罩层 — @mask-active",
      maskDisabled: "禁用遮罩 — @mask-disabled",
      pressedOverlay: "按下态蒙层 rgba(0,0,0,0.12) — 车机端统一叠加",
      code: "代码块背景",
      glass: "毛玻璃效果背景",
      brand: "品牌色强调背景",
      brandLight: "品牌色浅底 — @brand-color-light",
      successLight: "成功状态浅底 — @success-color-light",
      warningLight: "警告状态浅底 — @warning-color-light",
      errorLight: "错误状态浅底 — @error-color-light",
      infoLight: "信息状态浅底",
    }),
  },
  {
    key: "borderColor",
    title: "BorderColor / 边框色",
    description: "边框层级 — 对标 TDesign @border-level-* / @component-stroke。",
    badge: "对标 TDesign @border-level",
    rows: makeRows("borderColor", [
      "level1", "level2", "component", "focus", "inverse", "brand",
    ], {
      level1: "一级分割线（轻量分隔）— @border-level-1-color",
      level2: "二级边框（组件描边）— @border-level-2-color",
      component: "组件描边 — @component-stroke",
      focus: "聚焦态边框",
      inverse: "反色边框",
      brand: "品牌色边框",
    }),
  },
  {
    key: "functionalColor",
    title: "FunctionalColor / 功能色",
    description: "品牌、成功、警告、错误、信息五种功能色 — 对标 TDesign @brand/success/warning/error-color。车机端每色仅 main + disabled + light 三态，按下效果由上层 pressedOverlay 蒙层叠加。",
    badge: "车机端三态",
    rows: makeRows("functionalColor", [
      "brand.main", "brand.disabled", "brand.light",
      "success.main", "success.disabled", "success.light",
      "warning.main", "warning.disabled", "warning.light",
      "error.main", "error.disabled", "error.light",
      "info.main", "info.disabled", "info.light",
    ], {
      "brand.main": "品牌标准色 — @brand-color",
      "brand.disabled": "品牌禁用 — @brand-color-disabled",
      "brand.light": "品牌浅底 — @brand-color-light",
      "success.main": "成功标准色 — @success-color",
      "success.disabled": "成功禁用 — @success-color-disabled",
      "success.light": "成功浅底 — @success-color-light",
      "warning.main": "警告标准色 — @warning-color",
      "warning.disabled": "警告禁用 — @warning-color-disabled",
      "warning.light": "警告浅底 — @warning-color-light",
      "error.main": "错误标准色 — @error-color",
      "error.disabled": "错误禁用 — @error-color-disabled",
      "error.light": "错误浅底 — @error-color-light",
      "info.main": "信息标准色",
      "info.disabled": "信息禁用",
      "info.light": "信息浅底",
    }),
  },
];

export function Colors() {
  const { tokens } = useTheme();

  const accentPanelStyle: CSSProperties = {
    marginBottom: 48,
    padding: 24,
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.brand}`,
    background: `linear-gradient(to right, ${tokens.bgColor.brandLight}, ${tokens.bgColor.container})`,
  };

  const noticePanelStyle: CSSProperties = {
    padding: 24,
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.functionalColor.warning.main}`,
    background: `linear-gradient(to right, ${tokens.functionalColor.warning.light}, ${tokens.bgColor.container})`,
  };

  const guidePanelStyle: CSSProperties = {
    marginTop: 32,
    padding: 24,
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.functionalColor.success.main}`,
    background: `linear-gradient(to right, ${tokens.functionalColor.success.light}, ${tokens.bgColor.container})`,
  };

  const layerCardStyle: CSSProperties = {
    padding: 24,
    borderRadius: RADIUS.xl,
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.elevated,
  };

  const lightSwatchShell = tokens.bgColor.elevated;
  const darkSwatchShell = STATIC.black;

  /** 统一色块卡片 — 所有色板等宽 */
  const SWATCH_W = 108;
  const SWATCH_H = 72;

  const getSwatchCardStyle = (surface: "light" | "dark"): CSSProperties => ({
    width: SWATCH_W,
    flexShrink: 0,
    overflow: "hidden",
    borderRadius: RADIUS.xl,
    border: `1px solid ${surface === "dark" ? tokens.borderColor.inverse : tokens.borderColor.level1}`,
    backgroundColor: surface === "dark" ? darkSwatchShell : lightSwatchShell,
  });

  const getSwatchPreviewStyle = (surface: "light" | "dark"): CSSProperties => ({
    height: SWATCH_H,
    position: "relative",
    backgroundColor: surface === "dark" ? darkSwatchShell : STATIC.white,
  });

  const getSwatchMetaStyle = (surface: "light" | "dark"): CSSProperties => ({
    padding: 12,
    backgroundColor: surface === "dark" ? darkSwatchShell : lightSwatchShell,
  });

  const inlineCodeStyle: CSSProperties = {
    padding: "3px 6px",
    borderRadius: 12,
    backgroundColor: tokens.bgColor.code,
    color: tokens.textColor.primary,
  };

  const preStyle: CSSProperties = {
    marginTop: 12,
    padding: 18,
    borderRadius: RADIUS.xl,
    overflowX: "auto",
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.code,
    color: tokens.textColor.primary,
    fontSize: 12,
    lineHeight: 1.6,
  };

  const semanticPanelStyle: CSSProperties = {
    marginBottom: 48,
    padding: 24,
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.elevated,
  };

  const semanticTableWrapStyle: CSSProperties = {
    marginTop: 18,
    overflowX: "auto",
    borderRadius: RADIUS.xl,
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.page,
  };

  const semanticTableStyle: CSSProperties = {
    width: "100%",
    minWidth: 960,
    borderCollapse: "collapse",
  };

  const semanticThStyle: CSSProperties = {
    padding: "12px 18px",
    textAlign: "left",
    fontSize: 12,
    fontWeight: 600,
    color: tokens.textColor.secondary,
    backgroundColor: tokens.bgColor.container,
    borderBottom: `1px solid ${tokens.borderColor.level1}`,
    whiteSpace: "nowrap",
  };

  const semanticTdStyle: CSSProperties = {
    padding: "14px 18px",
    fontSize: 13,
    verticalAlign: "top",
    borderBottom: `1px solid ${tokens.borderColor.level1}`,
  };

  const semanticTokenNameStyle: CSSProperties = {
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
    color: tokens.textColor.primary,
    fontSize: 12,
    lineHeight: 1.5,
  };

  const semanticValueCellStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 12,
  };

  const semanticSwatchStyle = (value: string): CSSProperties => ({
    width: 18,
    height: 18,
    flexShrink: 0,
    borderRadius: 999,
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: value,
    boxShadow: `inset 0 0 0 1px ${tokens.borderColor.inverse}`,
  });

  const semanticValueCodeStyle: CSSProperties = {
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
    color: tokens.textColor.primary,
    fontSize: 12,
    lineHeight: 1.5,
    wordBreak: "break-all",
  };

  const renderTokenValue = (value: string) => (
    <div style={semanticValueCellStyle}>
      <span style={semanticSwatchStyle(value)} />
      <span style={semanticValueCodeStyle}>{value}</span>
    </div>
  );

  return (
    <div>
      <DocPageHeader category="Foundation / 基础" title="Colors 颜色系统" description="TAI Design 采用三层颜色架构：基础色板 → 语义化 Token → 组件。" />

      <div style={accentPanelStyle}>
        <h3 style={{ ...tokens.typography.title.card, color: tokens.textColor.primary, marginBottom: SPACING["3"] }}>🏗️ Token 架构</h3>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div style={layerCardStyle}>
            <div className="font-semibold mb-2" style={{ color: tokens.functionalColor.info.main }}>
              Primitive Layer
            </div>
            <p style={{ color: tokens.textColor.secondary }}>
              基础色板：alpha、blueGray、status、theme
            </p>
          </div>
          <div style={layerCardStyle}>
            <div className="font-semibold mb-2" style={{ color: tokens.borderColor.focus }}>
              Semantic Layer
            </div>
            <p style={{ color: tokens.textColor.secondary }}>
              4 组公开语义 Token：textColor、bgColor、borderColor、functionalColor
            </p>
          </div>
          <div style={layerCardStyle}>
            <div className="font-semibold mb-2" style={{ color: tokens.functionalColor.success.main }}>
              Component Layer
            </div>
            <p style={{ color: tokens.textColor.secondary }}>
              组件仅使用语义 Token，按钮等交互配色在组件文档中查看
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>Semantic Tokens 语义化颜色 Token</h2>

        <div className="space-y-6">
          {semanticTokenGroups.map((group) => (
            <div key={group.key} style={semanticPanelStyle}>
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 style={{ ...tokens.typography.title.card, color: tokens.textColor.primary }}>
                      {group.title}
                    </h3>
                    {group.badge && (
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: tokens.bgColor.brandLight,
                          color: tokens.textColor.primary,
                          border: `1px solid ${tokens.borderColor.brand}`,
                        }}
                      >
                        {group.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm mt-2" style={{ color: tokens.textColor.secondary }}>
                    {group.description}
                  </p>
                  {group.key === "textColor" && (
                    <div
                      className="mt-3 text-xs leading-relaxed"
                      style={{
                        padding: "12px 18px",
                        borderRadius: RADIUS.xl,
                        backgroundColor: tokens.bgColor.brandLight,
                        border: `1px solid ${tokens.borderColor.brand}`,
                        color: tokens.textColor.secondary,
                      }}
                    >
                      <strong style={{ color: tokens.textColor.primary }}>💡 使用方式：</strong>
                      同一个 token 同时用于文字和图标（对标 TDesign @text-color-*）。例如{" "}
                      <code style={inlineCodeStyle}>tokens.textColor.primary</code> 既是标题文字色，也是主图标色；{" "}
                      <code style={inlineCodeStyle}>tokens.textColor.secondary</code> 既是说明文案色，也是次要图标色。
                    </div>
                  )}
                </div>
                <div
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    color: tokens.textColor.primary,
                    backgroundColor: tokens.bgColor.container,
                    border: `1px solid ${tokens.borderColor.level1}`,
                    whiteSpace: "nowrap",
                  }}
                >
                  {group.rows.length} 个
                </div>
              </div>

              <div style={semanticTableWrapStyle}>
                <table style={semanticTableStyle}>
                  <thead>
                    <tr>
                      <th style={semanticThStyle}>Token</th>
                      <th style={semanticThStyle}>用途</th>
                      <th style={semanticThStyle}>浅色值</th>
                      <th style={semanticThStyle}>深色值</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.rows.map((row, index) => (
                      <tr key={row.token}>
                        <td
                          style={{
                            ...semanticTdStyle,
                            borderBottom:
                              index === group.rows.length - 1 ? "none" : `1px solid ${tokens.borderColor.level1}`,
                          }}
                        >
                          <span style={semanticTokenNameStyle}>{row.token}</span>
                        </td>
                        <td
                          style={{
                            ...semanticTdStyle,
                            borderBottom:
                              index === group.rows.length - 1 ? "none" : `1px solid ${tokens.borderColor.level1}`,
                            color: tokens.textColor.secondary,
                            fontSize: 12,
                          }}
                        >
                          {row.usage}
                        </td>
                        <td
                          style={{
                            ...semanticTdStyle,
                            borderBottom:
                              index === group.rows.length - 1 ? "none" : `1px solid ${tokens.borderColor.level1}`,
                          }}
                        >
                          {renderTokenValue(row.light)}
                        </td>
                        <td
                          style={{
                            ...semanticTdStyle,
                            borderBottom:
                              index === group.rows.length - 1 ? "none" : `1px solid ${tokens.borderColor.level1}`,
                          }}
                        >
                          {renderTokenValue(row.dark)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary, marginBottom: SPACING["2"] }}>Alpha 透明度色板</h2>
        <p className="text-sm mb-6" style={{ color: tokens.textColor.secondary }}>
          用于文字、图标、分割线、蒙层等，数字表示不透明度百分比。
        </p>

        <h3 style={{ ...tokens.typography.title.card, color: tokens.textColor.primary, marginBottom: SPACING["3"] }}>{alphaColorConfig.light.name}</h3>
        <p className="text-sm mb-4" style={{ color: tokens.textColor.tertiary }}>
          {alphaColorConfig.light.description}
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          {alphaColorConfig.light.colors
            .filter((color) => ALPHA_LEVELS.includes(color.level))
            .map((color) => (
              <div key={color.name} style={getSwatchCardStyle("light")}>
                <div style={getSwatchPreviewStyle("light")}>
                  <div className="absolute inset-0" style={{ backgroundColor: color.value }} />
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ color: color.level >= 60 ? STATIC.white : tokens.textColor.primary }}
                  >
                    <span className="font-bold text-lg">{color.level}</span>
                  </div>
                </div>
                <div style={getSwatchMetaStyle("light")}>
                  <p className="font-mono text-xs mb-1" style={{ color: tokens.textColor.primary }}>
                    {color.name}
                  </p>
                  <p className="text-xs mb-2" style={{ color: tokens.textColor.tertiary }}>
                    {color.value}
                  </p>
                  {color.usage ? (
                    <p className="text-xs" style={{ color: tokens.textColor.secondary }}>
                      {color.usage}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
        </div>

        <h3 style={{ ...tokens.typography.title.card, color: tokens.textColor.primary, marginBottom: SPACING["3"] }}>{alphaColorConfig.dark.name}</h3>
        <p className="text-sm mb-4" style={{ color: tokens.textColor.tertiary }}>
          {alphaColorConfig.dark.description}
        </p>
        <div
          style={{
            padding: 24,
            borderRadius: RADIUS["2xl"],
            border: `1px solid ${tokens.borderColor.level1}`,
            backgroundColor: tokens.bgColor.container,
          }}
        >
          <div className="flex flex-wrap gap-3">
            {alphaColorConfig.dark.colors
              .filter((color) => ALPHA_LEVELS.includes(color.level))
              .map((color) => (
                <div key={color.name} style={getSwatchCardStyle("dark")}>
                  <div style={getSwatchPreviewStyle("dark")}>
                    <div className="absolute inset-0" style={{ backgroundColor: color.value }} />
                    <div className="absolute inset-0 flex items-center justify-center" style={{ color: STATIC.white }}>
                      <span className="font-bold text-lg">{color.level}</span>
                    </div>
                  </div>
                  <div style={getSwatchMetaStyle("dark")}>
                    <p className="font-mono text-xs mb-1" style={{ color: STATIC.white }}>
                      {color.name}
                    </p>
                    <p className="text-xs mb-2" style={{ color: tokens.textColor.tertiary }}>
                      {color.value}
                    </p>
                    {color.usage ? (
                      <p className="text-xs" style={{ color: tokens.textColor.secondary }}>
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
        <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary, marginBottom: SPACING["2"] }}>BlueGray 蓝灰色板</h2>
        <p className="text-sm mb-6" style={{ color: tokens.textColor.secondary }}>
          中性底盘色，用于页面背景、卡片、容器等，数字表示明度等级（0 最浅，100 最深）。
        </p>
        <div className="flex flex-wrap gap-3 pb-2">
          {blueGrayConfig.map((color) => {
            const isDarkColor = color.level >= 60;
            const surface = isDarkColor ? "dark" : "light";
            return (
              <div
                key={color.name}
                style={getSwatchCardStyle(surface)}
              >
                <div style={getSwatchPreviewStyle(surface)}>
                  <div className="absolute inset-0" style={{ backgroundColor: color.value }} />
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ color: isDarkColor ? STATIC.white : tokens.textColor.primary }}
                  >
                    <span className="font-bold text-lg">{color.level}</span>
                  </div>
                </div>
                <div style={getSwatchMetaStyle(surface)}>
                  <p className="font-mono text-xs mb-1" style={{ color: isDarkColor ? STATIC.white : tokens.textColor.primary }}>
                    {color.name}
                  </p>
                  <p className="text-xs" style={{ color: isDarkColor ? STATIC.white : tokens.textColor.secondary }}>
                    # {color.hex}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-12">
        <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary, marginBottom: SPACING["2"] }}>Status 功能色</h2>
        <p className="text-sm mb-6" style={{ color: tokens.textColor.secondary }}>
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
                <h3 className="text-base font-semibold mb-3" style={{ color: tokens.textColor.primary }}>
                  {colorGroup.name} / {colorGroup.label}
                </h3>
                <div className="flex flex-wrap gap-3 pb-1">
                  {swatches.map((swatch) => {
                    const isDarkColor = swatch.level >= 60;
                    const surface = isDarkColor ? "dark" : "light";
                    return (
                      <div
                        key={swatch.level}
                        style={{
                          ...getSwatchCardStyle(surface),
                          ...(swatch.isStandard ? { outline: `2px solid ${tokens.functionalColor.brand.main}`, outlineOffset: 2 } : {}),
                        }}
                      >
                        <div style={getSwatchPreviewStyle(surface)}>
                          <div className="absolute inset-0" style={{ backgroundColor: swatch.value }} />
                          {swatch.isStandard ? (
                            <div
                              className="absolute top-1.5 left-1/2 -translate-x-1/2 text-[10px] font-medium"
                              style={{ color: STATIC.white }}
                            >
                              标准色
                            </div>
                          ) : null}
                          <div
                            className={`absolute inset-0 flex items-center justify-center ${swatch.isStandard ? "mt-3" : ""}`}
                            style={{
                              color:
                                isDarkColor || swatch.level >= 40
                                  ? STATIC.white
                                  : tokens.textColor.primary,
                            }}
                          >
                            <span className="font-bold text-base">{swatch.level}</span>
                          </div>
                        </div>
                        <div style={{ ...getSwatchMetaStyle(surface), padding: "6px 8px" }}>
                          <p
                            className="text-[10px]"
                            style={{ color: isDarkColor ? STATIC.white : tokens.textColor.secondary }}
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
        <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary, marginBottom: SPACING["2"] }}>Theme 主题色</h2>
        <div style={noticePanelStyle} className="mb-6">
          <p className="text-sm leading-relaxed" style={{ color: tokens.textColor.secondary }}>
            <strong style={{ color: tokens.textColor.primary }}>⚠️ 品牌色说明：</strong>
            当前品牌色为 <code style={inlineCodeStyle}>blueGray[100]</code>（#1A1D28），
            所有 <code style={inlineCodeStyle}>bgColor.brand</code>
            、<code style={inlineCodeStyle}>borderColor.brand</code>
            、<code style={inlineCodeStyle}>textColor.link</code>
            等语义 Token 均基于该品牌色派生。主题色板仅供参考，组件不应直接使用。
          </p>
        </div>

        <div className="space-y-8">
          {(Object.keys(themeColorConfig) as ThemeName[]).map((themeName) => {
            const config = themeColorConfig[themeName];
            const swatches = theme[themeName];

            return (
              <div key={themeName}>
                <h3 style={{ ...tokens.typography.title.card, color: tokens.textColor.primary, marginBottom: SPACING["3"] }}>
                  {config.nameCn} / {config.name}
                  {themeName === "darkBlue" ? (
                    <span
                      className="ml-2 text-xs px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: tokens.bgColor.brandLight,
                        color: tokens.textColor.primary,
                        border: `1px solid ${tokens.borderColor.brand}`,
                      }}
                    >
                      默认主题
                    </span>
                  ) : null}
                </h3>
                <div className="flex flex-wrap gap-3 pb-2">
                  {Object.entries(swatches).map(([level, value]) => {
                    const levelNum = parseInt(level, 10);
                    const isDarkColor = levelNum >= 60;
                    const surface = isDarkColor ? "dark" : "light";
                    const isMain = level === "50";
                    return (
                      <div
                        key={level}
                        style={{
                          ...getSwatchCardStyle(surface),
                          ...(isMain ? { outline: `2px solid ${tokens.functionalColor.brand.main}`, outlineOffset: 2 } : {}),
                        }}
                      >
                        <div style={getSwatchPreviewStyle(surface)}>
                          <div className="absolute inset-0 rounded-t-xl" style={{ backgroundColor: value }} />
                          <div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{
                              color:
                                isDarkColor || levelNum >= 40
                                  ? STATIC.white
                                  : tokens.textColor.primary,
                            }}
                          >
                            <span className="font-bold text-xl">{level}</span>
                          </div>
                        </div>
                        <div style={getSwatchMetaStyle(surface)}>
                          <p
                            className="font-mono text-xs"
                            style={{ color: isDarkColor ? STATIC.white : tokens.textColor.primary }}
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
        <h3 style={{ ...tokens.typography.title.card, color: tokens.textColor.primary, marginBottom: SPACING["3"] }}>💡 使用指南</h3>
        <div className="text-sm space-y-3" style={{ color: tokens.textColor.secondary }}>
          <div>
            <strong style={{ color: tokens.textColor.primary }}>推荐用法：</strong>
            <pre style={preStyle}>{`import { getTokens, PRESSED_OVERLAY } from '@/data/colorTokens';

const tokens = getTokens(isDark);

// 文字色 — 对标 TDesign @text-color-*
<div style={{ color: tokens.textColor.primary }}>
  标题文本
</div>
<Icon style={{ color: tokens.textColor.secondary }} />

// 背景色 — 对标 TDesign @bg-color-*
<div style={{ backgroundColor: tokens.bgColor.elevated }}>
  卡片容器
</div>

// 边框色 — 对标 TDesign @border-level-*
<div style={{ border: \`1px solid \${tokens.borderColor.level2}\` }}>
  带边框容器
</div>

// 功能色 — 对标 TDesign @error-color / @success-color-light
<span style={{ color: tokens.functionalColor.error.main }}>
  错误提示
</span>
<div style={{ backgroundColor: tokens.functionalColor.success.light }}>
  成功提示背景
</div>

// 按下态 — 车机端统一叠加 Black-12 蒙层
// 在组件 pressed 状态时叠加一层绝对定位蒙层：
<div style={{
  position: 'absolute', inset: 0,
  backgroundColor: PRESSED_OVERLAY, // rgba(0,0,0,0.12)
  pointerEvents: 'none',
}} />`}</pre>
          </div>
          <div>
            <strong style={{ color: tokens.textColor.primary }}>需要原始色板时：</strong>
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
