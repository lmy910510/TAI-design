import type { CSSProperties, ReactNode } from "react";
import { useMemo } from "react";
import { RADIUS, SPACING, useTheme } from "@tai-design/components";

// ============================================================================
// DocPageHeader — 统一的页面头部
// ============================================================================

interface DocPageHeaderProps {
  /** 分类标签文字，如 "Components / 组件"、"Foundation / 基础" */
  category: string;
  /** 页面主标题 */
  title: string;
  /** 页面描述 */
  description: string | ReactNode;
}

export function DocPageHeader({ category, title, description }: DocPageHeaderProps) {
  const { tokens } = useTheme();

  const chipStyle = useMemo<CSSProperties>(
    () => ({
      display: "inline-block",
      padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`,
      marginBottom: SPACING["3"],
      borderRadius: 999,
      border: `1px solid ${tokens.borderColor.level1}`,
      backgroundColor: tokens.bgColor.container,
      color: tokens.textColor.secondary,
      fontSize: tokens.typography.meta.footnote.fontSize,
      fontWeight: tokens.typography.meta.footnote.fontWeight,
      lineHeight: tokens.typography.meta.footnote.lineHeight,
    }),
    [tokens],
  );

  return (
    <div style={{ marginBottom: SPACING["6"] }}>
      <div style={chipStyle}>{category}</div>
      <h1
        style={{
          margin: 0,
          fontSize: tokens.typography.title.page.fontSize,
          fontWeight: tokens.typography.title.page.fontWeight,
          lineHeight: tokens.typography.title.page.lineHeight,
          color: tokens.textColor.primary,
          marginBottom: SPACING["2"],
        }}
      >
        {title}
      </h1>
      <p
        style={{
          margin: 0,
          fontSize: tokens.typography.body.primary.fontSize,
          fontWeight: tokens.typography.body.primary.fontWeight,
          lineHeight: tokens.typography.body.primary.lineHeight,
          color: tokens.textColor.secondary,
        }}
      >
        {description}
      </p>
    </div>
  );
}

// ============================================================================
// DocSection — 统一的区块（h2 + 可选描述 + children）
// ============================================================================

interface DocSectionProps {
  /** 区块标题 */
  title: string;
  /** 可选描述 */
  description?: string | ReactNode;
  /** 区块内容 */
  children: ReactNode;
  /** 标题旁的额外内容（如操作按钮） */
  actions?: ReactNode;
  /** 是否去掉底部间距 */
  noMargin?: boolean;
}

export function DocSection({ title, description, children, actions, noMargin }: DocSectionProps) {
  const { tokens } = useTheme();

  return (
    <div style={{ marginBottom: noMargin ? 0 : SPACING["6"] * 2 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: description ? SPACING["2"] : SPACING["4"],
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: tokens.typography.title.section.fontSize,
            fontWeight: tokens.typography.title.section.fontWeight,
            lineHeight: tokens.typography.title.section.lineHeight,
            color: tokens.textColor.primary,
          }}
        >
          {title}
        </h2>
        {actions}
      </div>
      {description && (
        <p
          style={{
            margin: 0,
            marginBottom: SPACING["4"],
            fontSize: tokens.typography.body.secondary.fontSize,
            fontWeight: tokens.typography.body.secondary.fontWeight,
            lineHeight: tokens.typography.body.secondary.lineHeight,
            color: tokens.textColor.secondary,
          }}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}

// ============================================================================
// DocPanel — 统一的说明卡片容器
// ============================================================================

type DocPanelVariant = "elevated" | "subtle" | "accent" | "code" | "notice" | "success";

interface DocPanelProps {
  variant?: DocPanelVariant;
  children: ReactNode;
  style?: CSSProperties;
}

export function DocPanel({ variant = "elevated", children, style }: DocPanelProps) {
  const { tokens } = useTheme();

  const baseStyle = useMemo<CSSProperties>(() => {
    switch (variant) {
      case "elevated":
        return {
          padding: SPACING["4"],
          borderRadius: RADIUS["2xl"],
          border: `1px solid ${tokens.borderColor.level1}`,
          backgroundColor: tokens.bgColor.elevated,
        };
      case "subtle":
        return {
          padding: SPACING["4"],
          borderRadius: RADIUS["2xl"],
          border: `1px solid ${tokens.borderColor.level1}`,
          backgroundColor: tokens.bgColor.container,
        };
      case "accent":
        return {
          padding: SPACING["4"],
          borderRadius: RADIUS["2xl"],
          border: `1px solid ${tokens.borderColor.brand}`,
          background: `linear-gradient(to right, ${tokens.bgColor.brandLight}, ${tokens.bgColor.container})`,
        };
      case "code":
        return {
          padding: SPACING["4"],
          borderRadius: RADIUS["2xl"],
          border: `1px solid ${tokens.borderColor.level1}`,
          backgroundColor: tokens.bgColor.code,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          fontSize: tokens.typography.meta.caption.fontSize,
          lineHeight: tokens.typography.body.long.lineHeight,
          color: tokens.textColor.primary,
          whiteSpace: "pre" as const,
          overflow: "auto" as const,
        };
      case "notice":
        return {
          padding: SPACING["4"],
          borderRadius: RADIUS["2xl"],
          border: `1px solid ${tokens.functionalColor.warning.main}`,
          background: `linear-gradient(to right, ${tokens.functionalColor.warning.light}, ${tokens.bgColor.container})`,
        };
      case "success":
        return {
          padding: SPACING["4"],
          borderRadius: RADIUS["2xl"],
          border: `1px solid ${tokens.functionalColor.success.main}`,
          background: `linear-gradient(to right, ${tokens.functionalColor.success.light}, ${tokens.bgColor.container})`,
        };
    }
  }, [variant, tokens]);

  return <div style={{ ...baseStyle, ...style }}>{children}</div>;
}

// ============================================================================
// DocSubsection — h3 级别的小标题
// ============================================================================

interface DocSubsectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function DocSubsection({ title, description, children }: DocSubsectionProps) {
  const { tokens } = useTheme();

  return (
    <div style={{ marginBottom: SPACING["4"] }}>
      <h3
        style={{
          margin: 0,
          fontSize: tokens.typography.title.card.fontSize,
          fontWeight: tokens.typography.title.card.fontWeight,
          lineHeight: tokens.typography.title.card.lineHeight,
          color: tokens.textColor.primary,
          marginBottom: description ? SPACING["2"] : SPACING["3"],
        }}
      >
        {title}
      </h3>
      {description && (
        <p
          style={{
            margin: 0,
            marginBottom: SPACING["3"],
            fontSize: tokens.typography.body.secondary.fontSize,
            color: tokens.textColor.secondary,
          }}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}

// ============================================================================
// DocTokenTable — 统一的 Token 使用清单
// ============================================================================

interface TokenRow {
  /** 部位名称 */
  part: string;
  /** 组件级 Token 路径 */
  compToken?: string;
  /** 公开语义 Token 路径 */
  pubToken?: string;
  /** Token 路径（当不区分组件级和公开级时使用） */
  token?: string;
  /** 用途说明 */
  desc: string;
  /** 色值（用于展示色块） */
  color?: string;
}

interface DocTokenTableProps {
  rows: TokenRow[];
  /** 底部补充说明 */
  note?: ReactNode;
}

export function DocTokenTable({ rows, note }: DocTokenTableProps) {
  const { tokens } = useTheme();

  // 判断是否需要显示组件级/公开级两列（如果任一行有 compToken 则双列模式）
  const hasDualColumns = rows.some((r) => r.compToken);

  const headers = hasDualColumns
    ? ["部位", "组件级 Token", "公开语义 Token", "用途说明"]
    : ["部位", "Token 路径", "用途说明"];

  const thStyle = useMemo<CSSProperties>(
    () => ({
      textAlign: "left" as const,
      padding: `${SPACING["2"]}px ${SPACING["3"]}px`,
      color: tokens.textColor.secondary,
      fontWeight: tokens.typography.label.badge.fontWeight,
      fontSize: tokens.typography.meta.caption.fontSize,
    }),
    [tokens],
  );

  const tdStyle = useMemo<CSSProperties>(
    () => ({
      padding: `${SPACING["2"]}px ${SPACING["3"]}px`,
      fontSize: tokens.typography.meta.caption.fontSize,
      verticalAlign: "middle" as const,
    }),
    [tokens],
  );

  const codeStyle = useMemo<CSSProperties>(
    () => ({
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      fontSize: tokens.typography.meta.footnote.fontSize,
      backgroundColor: tokens.bgColor.code,
      padding: `2px ${SPACING["2"]}px`,
      borderRadius: 6,
      color: tokens.textColor.link,
    }),
    [tokens],
  );

  const pubCodeStyle = useMemo<CSSProperties>(
    () => ({
      ...codeStyle,
      color: tokens.textColor.secondary,
    }),
    [codeStyle, tokens],
  );

  return (
    <DocPanel>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: `2px solid ${tokens.borderColor.level1}` }}>
              {headers.map((h) => (
                <th key={h} style={thStyle}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.part} style={{ borderBottom: `1px solid ${tokens.borderColor.level1}` }}>
                <td style={{ ...tdStyle, fontWeight: 500, color: tokens.textColor.primary }}>
                  {row.part}
                </td>

                {hasDualColumns ? (
                  <>
                    <td style={tdStyle}>
                      <div style={{ display: "flex", alignItems: "center", gap: SPACING["2"] / 2 }}>
                        {row.color && (
                          <div
                            style={{
                              width: 18,
                              height: 18,
                              borderRadius: 4,
                              backgroundColor: row.color,
                              border: `1px solid ${tokens.borderColor.level1}`,
                              flexShrink: 0,
                            }}
                          />
                        )}
                        <code style={codeStyle}>{row.compToken}</code>
                      </div>
                    </td>
                    <td style={tdStyle}>
                      <code style={pubCodeStyle}>{row.pubToken}</code>
                    </td>
                  </>
                ) : (
                  <td style={tdStyle}>
                    <div style={{ display: "flex", alignItems: "center", gap: SPACING["2"] / 2 }}>
                      {row.color && (
                        <div
                          style={{
                            width: 18,
                            height: 18,
                            borderRadius: 4,
                            backgroundColor: row.color,
                            border: `1px solid ${tokens.borderColor.level1}`,
                            flexShrink: 0,
                          }}
                        />
                      )}
                      <code style={codeStyle}>{row.token || row.compToken}</code>
                    </div>
                  </td>
                )}

                <td style={{ ...tdStyle, color: tokens.textColor.tertiary }}>{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && (
        <div
          style={{
            marginTop: SPACING["3"],
            padding: SPACING["3"],
            borderRadius: RADIUS.xl,
            backgroundColor: tokens.bgColor.container,
            border: `1px solid ${tokens.borderColor.level1}`,
          }}
        >
          <div
            style={{
              fontSize: tokens.typography.meta.footnote.fontSize,
              color: tokens.textColor.secondary,
              lineHeight: tokens.typography.body.primary.lineHeight,
            }}
          >
            {note}
          </div>
        </div>
      )}
    </DocPanel>
  );
}

// ============================================================================
// DocGuidePanel — 带图标的设计规范/使用指南面板
// ============================================================================

interface DocGuidePanelProps {
  /** 面板标题，如 "📐 设计规范"、"💡 使用指南" */
  title: string;
  children: ReactNode;
  variant?: "accent" | "notice" | "success";
}

export function DocGuidePanel({ title, children, variant = "accent" }: DocGuidePanelProps) {
  const { tokens } = useTheme();

  return (
    <DocPanel variant={variant}>
      <h3
        style={{
          margin: 0,
          fontSize: tokens.typography.title.card.fontSize,
          fontWeight: tokens.typography.title.card.fontWeight,
          color: tokens.textColor.primary,
          marginBottom: SPACING["3"],
        }}
      >
        {title}
      </h3>
      <div
        style={{
          fontSize: tokens.typography.body.secondary.fontSize,
          lineHeight: tokens.typography.body.primary.lineHeight,
          color: tokens.textColor.secondary,
        }}
      >
        {children}
      </div>
    </DocPanel>
  );
}

// ============================================================================
// DocInlineCode — 统一的行内代码样式
// ============================================================================

interface DocInlineCodeProps {
  children: ReactNode;
}

export function DocInlineCode({ children }: DocInlineCodeProps) {
  const { tokens } = useTheme();

  return (
    <code
      style={{
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        fontSize: "inherit",
        backgroundColor: tokens.bgColor.code,
        padding: `2px ${SPACING["2"]}px`,
        borderRadius: 6,
        color: tokens.textColor.primary,
      }}
    >
      {children}
    </code>
  );
}
