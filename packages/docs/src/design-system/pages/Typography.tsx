import type { CSSProperties } from "react";
import { useMemo } from "react";
import { RADIUS, SPACING, useTheme } from "@tai-design/components";
import { DocPageHeader } from "../DocComponents";
import type { TypographyStyleToken } from "@tai-design/components";

// ============================================================================
// 语义排版 Token 数据定义
// ============================================================================

interface TokenEntry {
  path: string;
  label: string;
  description: string;
}

interface TokenCategory {
  key: string;
  title: string;
  description: string;
  tokens: TokenEntry[];
}

const TOKEN_CATEGORIES: TokenCategory[] = [
  {
    key: "title",
    title: "title — 标题类",
    description: "各级标题，从页面主标题到小区块标题",
    tokens: [
      { path: "title.page", label: "页面主标题", description: "AudioPlayer 全屏标题、歌词高亮" },
      { path: "title.section", label: "区块标题", description: "Dialog 标题、ActionSheet 标题" },
      { path: "title.card", label: "卡片/列表标题", description: "List 标题、Toast 文字、操作项文字" },
      { path: "title.subsection", label: "小区块标题", description: "输入框文字、Button 大号" },
    ],
  },
  {
    key: "body",
    title: "body — 正文类",
    description: "段落、描述、说明内容",
    tokens: [
      { path: "body.primary", label: "主正文", description: "列表描述、说明文字、Checkbox 标签" },
      { path: "body.secondary", label: "次正文", description: "ActionSheet 描述、辅助说明" },
      { path: "body.long", label: "长文本", description: "Comment 正文、多行说明（加大行高 1.6）" },
    ],
  },
  {
    key: "label",
    title: "label — 控件标签类",
    description: "交互元素上的文字（按钮、标签、输入框等）",
    tokens: [
      { path: "label.buttonLarge", label: "大按钮", description: "xlarge 按钮文字" },
      { path: "label.buttonMedium", label: "中按钮", description: "large 按钮文字" },
      { path: "label.buttonSmall", label: "小按钮", description: "small~medium 按钮文字" },
      { path: "label.buttonMini", label: "迷你按钮", description: "extraSmall 按钮文字" },
      { path: "label.tag", label: "标签", description: "Tag 组件文字" },
      { path: "label.tab", label: "标签页", description: "Tabs 组件文字" },
      { path: "label.badge", label: "徽标", description: "Badge 计数文字" },
      { path: "label.input", label: "输入框", description: "Input 输入文字" },
    ],
  },
  {
    key: "meta",
    title: "meta — 元信息类",
    description: "时间戳、备注、脚注等辅助文字",
    tokens: [
      { path: "meta.caption", label: "说明文字", description: "图标辅助、操作描述、备注" },
      { path: "meta.time", label: "时间标签", description: "播放器进度、时间戳" },
      { path: "meta.footnote", label: "脚注", description: "倍速标签、Badge 小号" },
    ],
  },
  {
    key: "display",
    title: "display — 展示类",
    description: "大尺寸展示场景（全屏播放器、数据数字）",
    tokens: [
      { path: "display.hero", label: "展示大标题", description: "AudioPlayer 全屏标题" },
      { path: "display.numeric", label: "数据数字", description: "操作计数、滑块当前值" },
    ],
  },
];

// ============================================================================
// 字重名称映射
// ============================================================================

function weightName(w: number): string {
  switch (w) {
    case 400: return "Regular";
    case 500: return "Medium";
    case 600: return "Semibold";
    case 700: return "Bold";
    default: return String(w);
  }
}

// ============================================================================
// 根据路径获取 token 值的工具函数
// ============================================================================

function getTokenByPath(
  typography: Record<string, Record<string, TypographyStyleToken>>,
  path: string,
): TypographyStyleToken | undefined {
  const [cat, name] = path.split(".");
  return typography[cat]?.[name];
}

// ============================================================================
// 页面组件
// ============================================================================

export function Typography() {
  const { tokens } = useTheme();

  // 将 typography 断言为可索引类型方便按路径查找
  const typography = tokens.typography as unknown as Record<string, Record<string, TypographyStyleToken>>;

  // ── 通用样式 ──

  const panelStyle = useMemo<CSSProperties>(
    () => ({
      padding: SPACING["6"],
      borderRadius: RADIUS["2xl"],
      border: `1px solid ${tokens.borderColor.level1}`,
      backgroundColor: tokens.bgColor.elevated,
    }),
    [tokens],
  );

  const sectionTitleStyle = useMemo<CSSProperties>(
    () => ({
      fontSize: tokens.typography.title.section.fontSize,
      fontWeight: tokens.typography.title.section.fontWeight,
      lineHeight: tokens.typography.title.section.lineHeight,
      color: tokens.textColor.primary,
      marginBottom: SPACING["4"],
    }),
    [tokens],
  );

  const sectionDescStyle = useMemo<CSSProperties>(
    () => ({
      fontSize: tokens.typography.body.primary.fontSize,
      fontWeight: tokens.typography.body.primary.fontWeight,
      lineHeight: tokens.typography.body.primary.lineHeight,
      color: tokens.textColor.secondary,
      marginBottom: SPACING["5"],
    }),
    [tokens],
  );

  const cellBorder = `1px solid ${tokens.borderColor.level1}`;

  // ── 表头单元格样式 ──
  const thStyle = useMemo<CSSProperties>(
    () => ({
      padding: `${SPACING["3"]}px ${SPACING["4"]}px`,
      fontSize: tokens.typography.meta.caption.fontSize,
      fontWeight: tokens.typography.label.badge.fontWeight,
      lineHeight: tokens.typography.meta.caption.lineHeight,
      color: tokens.textColor.primary,
      textAlign: "left" as const,
      borderBottom: cellBorder,
      backgroundColor: tokens.bgColor.brandLight,
    }),
    [tokens, cellBorder],
  );

  // ── 表格行单元格样式 ──
  const tdStyle = useMemo<CSSProperties>(
    () => ({
      padding: `${SPACING["3"]}px ${SPACING["4"]}px`,
      fontSize: tokens.typography.meta.caption.fontSize,
      lineHeight: tokens.typography.meta.caption.lineHeight,
      color: tokens.textColor.secondary,
      verticalAlign: "middle",
      borderBottom: cellBorder,
    }),
    [tokens, cellBorder],
  );

  const codeStyle = useMemo<CSSProperties>(
    () => ({
      fontFamily: "monospace",
      fontSize: tokens.typography.meta.caption.fontSize,
      lineHeight: tokens.typography.meta.caption.lineHeight,
      backgroundColor: tokens.bgColor.code,
      padding: `2px ${SPACING["2"]}px`,
      borderRadius: 6,
      color: tokens.textColor.primary,
    }),
    [tokens],
  );

  // ── 渲染 ──

  return (
    <div style={{ paddingBottom: SPACING["6"] * 3 }}>
      {/* ── 页面头部 ── */}
      <DocPageHeader
        category="Foundation / 基础"
        title="Typography 排版"
        description={<>语义化排版 token 系统 — 按内容职责定义字号、字重、行高的组合。组件通过 <code style={codeStyle}>tokens.typography.*</code> 获取完整排版样式，不再拼凑物理尺寸常量。</>}
      />

      {/* ── 字族 ── */}
      <div style={{ marginBottom: SPACING["6"] * 2 }}>
        <h2 style={sectionTitleStyle}>字族</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: SPACING["4"] }}>
          <div
            style={{
              ...panelStyle,
              minHeight: 200,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: tokens.typography.title.page.fontSize,
                fontWeight: tokens.typography.display.hero.fontWeight,
                color: tokens.textColor.primary,
                fontFamily: "'Noto Sans SC', sans-serif",
                marginBottom: SPACING["2"],
              }}
            >
              Noto Sans SC
            </p>
            <p
              style={{
                fontSize: tokens.typography.meta.caption.fontSize,
                color: tokens.textColor.secondary,
              }}
            >
              中文字体
            </p>
          </div>
          <div
            style={{
              ...panelStyle,
              minHeight: 200,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: tokens.typography.title.page.fontSize,
                fontWeight: tokens.typography.display.hero.fontWeight,
                color: tokens.textColor.primary,
                fontFamily: "Gilroy, sans-serif",
                marginBottom: SPACING["2"],
              }}
            >
              Gilroy
            </p>
            <p
              style={{
                fontSize: tokens.typography.meta.caption.fontSize,
                color: tokens.textColor.secondary,
              }}
            >
              数字 / 英文字体 · 营销场景
            </p>
          </div>
        </div>
      </div>

      {/* ── 字重 ── */}
      <div style={{ marginBottom: SPACING["6"] * 2 }}>
        <h2 style={sectionTitleStyle}>字重</h2>
        <p style={sectionDescStyle}>TAI Design 使用 4 级字重，对应标准 CSS font-weight 值。</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: SPACING["4"] }}>
          {([
            { name: "Regular", value: 400 },
            { name: "Medium", value: 500 },
            { name: "Semibold", value: 600 },
            { name: "Bold", value: 700 },
          ] as const).map((item) => (
            <div
              key={item.name}
              style={{
                ...panelStyle,
                minHeight: 130,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: SPACING["2"],
              }}
            >
              <p
                style={{
                  fontSize: tokens.typography.title.card.fontSize,
                  fontWeight: item.value,
                  color: tokens.textColor.primary,
                }}
              >
                {item.name}
              </p>
              <p
                style={{
                  fontSize: tokens.typography.display.numeric.fontSize,
                  fontWeight: tokens.typography.display.numeric.fontWeight,
                  color: tokens.textColor.tertiary,
                  fontFamily: "DIN, monospace",
                }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 语义 Token 总览 ── */}
      <div style={{ marginBottom: SPACING["6"] * 2 }}>
        <h2 style={sectionTitleStyle}>语义 Token 总览</h2>
        <p style={sectionDescStyle}>
          所有排版 token 按内容职责分为 5 类，每个 token 包含 <code style={codeStyle}>fontSize</code>
          、<code style={codeStyle}>fontWeight</code>、<code style={codeStyle}>lineHeight</code> 三个维度。
          通过 <code style={codeStyle}>{"tokens.typography.<类别>.<名称>"}</code> 获取。
        </p>

        {TOKEN_CATEGORIES.map((cat) => (
          <div key={cat.key} style={{ marginBottom: SPACING["6"] }}>
            <h3
              style={{
                fontSize: tokens.typography.title.card.fontSize,
                fontWeight: tokens.typography.title.card.fontWeight,
                lineHeight: tokens.typography.title.card.lineHeight,
                color: tokens.textColor.primary,
                marginBottom: SPACING["2"],
              }}
            >
              {cat.title}
            </h3>
            <p
              style={{
                fontSize: tokens.typography.body.secondary.fontSize,
                color: tokens.textColor.secondary,
                marginBottom: SPACING["3"],
              }}
            >
              {cat.description}
            </p>

            <div
              style={{
                border: cellBorder,
                borderRadius: RADIUS.xl,
                overflow: "hidden",
              }}
            >
              {/* 表头 */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr 90px 90px 90px 200px",
                  backgroundColor: tokens.bgColor.brandLight,
                }}
              >
                {["Token 路径", "示例", "字号", "字重", "行高", "应用场景"].map((label) => (
                  <div key={label} style={thStyle}>
                    {label}
                  </div>
                ))}
              </div>

              {/* 数据行 */}
              {cat.tokens.map((entry, idx) => {
                const token = getTokenByPath(typography, entry.path);
                if (!token) return null;

                return (
                  <div
                    key={entry.path}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "180px 1fr 90px 90px 90px 200px",
                      backgroundColor: tokens.bgColor.elevated,
                      borderTop: idx === 0 ? undefined : cellBorder,
                    }}
                  >
                    {/* Token 路径 */}
                    <div style={tdStyle}>
                      <code style={{ ...codeStyle, fontSize: tokens.typography.meta.footnote.fontSize }}>
                        {entry.path}
                      </code>
                    </div>

                    {/* 预览 */}
                    <div style={{ ...tdStyle, display: "flex", alignItems: "center" }}>
                      <span
                        style={{
                          fontSize: Math.min(token.fontSize, 42),
                          fontWeight: token.fontWeight,
                          lineHeight: token.lineHeight,
                          color: tokens.textColor.primary,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {entry.label}
                      </span>
                    </div>

                    {/* 字号 */}
                    <div style={tdStyle}>{token.fontSize}px</div>

                    {/* 字重 */}
                    <div style={tdStyle}>
                      {weightName(token.fontWeight)}
                      <br />
                      <span style={{ color: tokens.textColor.tertiary }}>{token.fontWeight}</span>
                    </div>

                    {/* 行高 */}
                    <div style={tdStyle}>{token.lineHeight}</div>

                    {/* 应用场景 */}
                    <div style={{ ...tdStyle, color: tokens.textColor.tertiary }}>
                      {entry.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* ── 使用方式 ── */}
      <div style={{ marginBottom: SPACING["6"] * 2 }}>
        <h2 style={sectionTitleStyle}>使用方式</h2>
        <p style={sectionDescStyle}>
          通过 <code style={codeStyle}>useTheme()</code> 获取 <code style={codeStyle}>tokens</code>，
          然后按语义路径引用排版 token：
        </p>
        <div
          style={{
            ...panelStyle,
            backgroundColor: tokens.bgColor.code,
            fontFamily: "monospace",
            fontSize: tokens.typography.meta.caption.fontSize,
            lineHeight: tokens.typography.body.long.lineHeight,
            color: tokens.textColor.primary,
            whiteSpace: "pre",
            overflow: "auto",
          }}
        >
{`const { tokens } = useTheme();

// 页面主标题
<h1 style={{
  fontSize: tokens.typography.title.page.fontSize,       // 42
  fontWeight: tokens.typography.title.page.fontWeight,    // 600
  lineHeight: tokens.typography.title.page.lineHeight,    // 1.2
}}>
  页面标题
</h1>

// 正文段落
<p style={{
  fontSize: tokens.typography.body.primary.fontSize,      // 28
  fontWeight: tokens.typography.body.primary.fontWeight,   // 400
  lineHeight: tokens.typography.body.primary.lineHeight,   // 1.4
}}>
  正文内容
</p>

// 也可以直接展开整个 token
<span style={{ ...tokens.typography.label.tag }}>
  标签文字
</span>`}
        </div>
      </div>

      {/* ── 实际效果预览 ── */}
      <div style={{ marginBottom: SPACING["6"] * 2 }}>
        <h2 style={sectionTitleStyle}>实际效果预览</h2>
        <div style={{ ...panelStyle, display: "flex", flexDirection: "column", gap: SPACING["5"] }}>
          {[
            { path: "title.page", text: "页面主标题 title.page" },
            { path: "title.section", text: "区块标题 title.section" },
            { path: "title.card", text: "卡片标题 title.card" },
            { path: "body.primary", text: "主正文 body.primary — 这是一段主正文示例" },
            { path: "body.secondary", text: "次正文 body.secondary — 辅助说明文字" },
            { path: "body.long", text: "长文本 body.long — 评论内容、多行描述使用加大行高" },
            { path: "label.buttonLarge", text: "大按钮 label.buttonLarge" },
            { path: "meta.caption", text: "说明文字 meta.caption" },
            { path: "meta.time", text: "12:34 — meta.time" },
            { path: "meta.footnote", text: "脚注文字 meta.footnote" },
            { path: "display.hero", text: "展示大标题 display.hero" },
            { path: "display.numeric", text: "1,234 — display.numeric" },
          ].map((item) => {
            const token = getTokenByPath(typography, item.path);
            if (!token) return null;
            return (
              <div key={item.path} style={{ display: "flex", alignItems: "baseline", gap: SPACING["4"] }}>
                <code
                  style={{
                    ...codeStyle,
                    minWidth: 180,
                    flexShrink: 0,
                    fontSize: tokens.typography.meta.footnote.fontSize,
                  }}
                >
                  {item.path}
                </code>
                <span
                  style={{
                    fontSize: token.fontSize,
                    fontWeight: token.fontWeight,
                    lineHeight: token.lineHeight,
                    color: tokens.textColor.primary,
                  }}
                >
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── 设计原则 ── */}
      <div
        style={{
          ...panelStyle,
          background: `linear-gradient(to right, ${tokens.bgColor.brandLight}, ${tokens.bgColor.container})`,
          border: `1px solid ${tokens.borderColor.brand}`,
        }}
      >
        <h3
          style={{
            fontSize: tokens.typography.title.card.fontSize,
            fontWeight: tokens.typography.title.card.fontWeight,
            color: tokens.textColor.primary,
            marginBottom: SPACING["3"],
          }}
        >
          💡 设计原则
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: SPACING["2"],
            fontSize: tokens.typography.body.secondary.fontSize,
            lineHeight: tokens.typography.body.primary.lineHeight,
            color: tokens.textColor.secondary,
          }}
        >
          <p>• <strong>语义优先</strong> — 选择排版 token 时，先确认文字的"角色"（标题 / 正文 / 标签 / 元信息 / 展示），再从对应类别中取值。</p>
          <p>• <strong>按职责而非尺寸</strong> — 避免直接使用物理字号。即使两处字号相同，语义不同则应使用不同 token。</p>
          <p>• <strong>车机场景</strong> — 所有字号为车机端设计，需在实际车机距离和光线条件下验证可读性。</p>
          <p>• <strong>4 级字重</strong> — Regular(400)、Medium(500)、Semibold(600)、Bold(700)，不使用其他字重值。</p>
          <p>• <strong>中文 Noto Sans SC</strong> — 主要字体；数字/英文营销场景使用 Gilroy。</p>
          <p>• <strong>行高有意义</strong> — 单行控件(按钮/标签) lineHeight=1，段落正文 1.4~1.6，标题 1.2~1.5。</p>
        </div>
      </div>
    </div>
  );
}
