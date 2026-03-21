import type { CSSProperties } from "react";
import { RADIUS, SPACING, useTheme } from "@tai-design/components";
import { DocPageHeader } from "../DocComponents";

function LinkIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export function LinkPage() {
  const { tokens } = useTheme();

  /* ── 排版 shorthand ── */
  const typoTitlePage = tokens.typography.title.page;
  const typoTitleSection = tokens.typography.title.section;
  const typoTitleCard = tokens.typography.title.card;
  const typoBodyPrimary = tokens.typography.body.primary;
  const typoBodySecondary = tokens.typography.body.secondary;
  const typoMetaCaption = tokens.typography.meta.caption;
  const typoMetaTime = tokens.typography.meta.time;

  const chipStyle: CSSProperties = {
    display: "inline-block",
    padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`,
    marginBottom: SPACING["3"],
    borderRadius: 999,
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.container,
    color: tokens.textColor.secondary,
    fontSize: typoMetaCaption.fontSize,
    fontWeight: typoMetaCaption.fontWeight,
    lineHeight: typoMetaCaption.lineHeight,
  };

  const panelStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.elevated,
  };

  const linkRowStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: SPACING["3"],
    flexWrap: "wrap",
  };

  const baseLinkStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: SPACING["2"],
    fontSize: typoTitleCard.fontSize,
    fontWeight: typoTitleCard.fontWeight,
    lineHeight: typoTitleCard.lineHeight,
    color: tokens.textColor.link,
    textDecoration: "none",
  };

  const metaTagStyle: CSSProperties = {
    padding: `0 ${SPACING["2"]}px`,
    borderRadius: RADIUS.xl,
    backgroundColor: tokens.bgColor.secondaryContainer,
    color: tokens.textColor.secondary,
    fontSize: typoMetaTime.fontSize,
    fontWeight: typoMetaTime.fontWeight,
    lineHeight: `${typoTitleCard.fontSize + SPACING["2"]}px`,
  };

  const disabledLinkStyle: CSSProperties = {
    ...baseLinkStyle,
    color: tokens.textColor.disabled,
    cursor: "not-allowed",
  };

  /* ── Token 表格 ── */
  const TOKEN_TABLE: { part: string; path: string; desc: string }[] = [
    { part: "链接文字", path: "textColor.link", desc: "默认链接色，跨主题一致" },
    { part: "禁用文字", path: "textColor.disabled", desc: "不可操作的链接" },
    { part: "辅助标签背景", path: "bgColor.secondaryContainer", desc: "外部链接 Ext 标签底色" },
    { part: "辅助标签文字", path: "textColor.secondary", desc: "Ext 标签文字" },
    { part: "面板背景", path: "bgColor.elevated", desc: "展示面板" },
    { part: "面板边框", path: "borderColor.level1", desc: "面板外边框" },
  ];

  const thStyle: CSSProperties = {
    padding: `${SPACING["2"]}px ${SPACING["3"]}px`,
    textAlign: "left",
    fontSize: typoMetaCaption.fontSize,
    fontWeight: 600,
    lineHeight: typoMetaCaption.lineHeight,
    color: tokens.textColor.secondary,
    borderBottom: `1px solid ${tokens.borderColor.level1}`,
  };

  const tdStyle: CSSProperties = {
    padding: `${SPACING["2"]}px ${SPACING["3"]}px`,
    fontSize: typoMetaCaption.fontSize,
    fontWeight: typoMetaCaption.fontWeight,
    lineHeight: typoMetaCaption.lineHeight,
    color: tokens.textColor.primary,
    borderBottom: `1px solid ${tokens.borderColor.level1}`,
  };

  return (
    <div style={{ paddingBottom: SPACING["6"] * 2 }}>
      {/* ── 头部 ── */}
      <DocPageHeader category="Components / 组件" title="链接 Link" description="文字链接用于跳转到另一个页面或网站，使用语义化链接 token 提供明确的可点击反馈。" />

      {/* ── 定义 ── */}
      <section style={{ marginBottom: SPACING["6"] }}>
        <h2 style={{ fontSize: typoTitleSection.fontSize, fontWeight: typoTitleSection.fontWeight, lineHeight: typoTitleSection.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["3"] }}>
          定义
        </h2>
        <p style={{ fontSize: typoBodyPrimary.fontSize, fontWeight: typoBodyPrimary.fontWeight, lineHeight: typoBodyPrimary.lineHeight, color: tokens.textColor.secondary }}>
          文字链接是一种可点击的文本元素，用于在应用内部或外部进行页面跳转，常用于导航、引用或相关内容的访问。
        </p>
      </section>

      {/* ── 类型 ── */}
      <section style={{ marginBottom: SPACING["6"] }}>
        <h2 style={{ fontSize: typoTitleSection.fontSize, fontWeight: typoTitleSection.fontWeight, lineHeight: typoTitleSection.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>
          类型
        </h2>
        <div style={panelStyle}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"] }}>
            <div>
              <h3 style={{ fontSize: typoTitleCard.fontSize, fontWeight: typoTitleCard.fontWeight, lineHeight: typoTitleCard.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["3"] }}>
                基础链接
              </h3>
              <div style={linkRowStyle}>
                <a href="#" onClick={(event) => event.preventDefault()} style={baseLinkStyle}>
                  <LinkIcon />
                  Link 链接
                </a>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: typoTitleCard.fontSize, fontWeight: typoTitleCard.fontWeight, lineHeight: typoTitleCard.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["3"] }}>
                外部链接
              </h3>
              <div style={linkRowStyle}>
                <a href="#" onClick={(event) => event.preventDefault()} style={baseLinkStyle}>
                  <LinkIcon />
                  Link 链接
                  <span style={metaTagStyle}>Ext</span>
                </a>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: typoTitleCard.fontSize, fontWeight: typoTitleCard.fontWeight, lineHeight: typoTitleCard.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["3"] }}>
                禁用状态
              </h3>
              <div style={linkRowStyle}>
                <span style={disabledLinkStyle}>
                  <LinkIcon />
                  Link 链接
                </span>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: typoTitleCard.fontSize, fontWeight: typoTitleCard.fontWeight, lineHeight: typoTitleCard.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["3"] }}>
                下划线样式
              </h3>
              <div style={linkRowStyle}>
                <a
                  href="#"
                  onClick={(event) => event.preventDefault()}
                  style={{ ...baseLinkStyle, textDecoration: "underline", textUnderlineOffset: 6 }}
                >
                  <LinkIcon />
                  Link 链接
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 应用 ── */}
      <section style={{ marginBottom: SPACING["6"] }}>
        <h2 style={{ fontSize: typoTitleSection.fontSize, fontWeight: typoTitleSection.fontWeight, lineHeight: typoTitleSection.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>
          应用
        </h2>
        <div style={{ ...panelStyle, backgroundColor: tokens.bgColor.container }}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["5"] }}>
            <div>
              <h3 style={{ fontSize: typoBodyPrimary.fontSize, fontWeight: 500, lineHeight: typoBodyPrimary.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["2"] }}>
                使用场景
              </h3>
              <ul style={{ fontSize: typoMetaCaption.fontSize, lineHeight: 1.8, color: tokens.textColor.secondary, listStyleType: "disc", paddingLeft: SPACING["4"] }}>
                <li>导航菜单中的页面跳转</li>
                <li>文章或内容中的引用链接</li>
                <li>面包屑导航</li>
                <li>外部资源访问</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: typoBodyPrimary.fontSize, fontWeight: 500, lineHeight: typoBodyPrimary.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["2"] }}>
                设计规范
              </h3>
              <ul style={{ fontSize: typoMetaCaption.fontSize, lineHeight: 1.8, color: tokens.textColor.secondary, listStyleType: "disc", paddingLeft: SPACING["4"] }}>
                <li>链接文字使用 <code>tokens.textColor.link</code>，保持跨主题一致性</li>
                <li>悬停或强调时可配合下划线增强交互反馈</li>
                <li>外部链接可结合辅助标签说明跳转属性</li>
                <li>禁用态统一使用 <code>tokens.textColor.disabled</code></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 🎨 Token 使用清单 ── */}
      <section>
        <h2 style={{ fontSize: typoTitleSection.fontSize, fontWeight: typoTitleSection.fontWeight, lineHeight: typoTitleSection.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>
          🎨 Token 使用清单
        </h2>
        <div style={panelStyle}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={thStyle}>部位</th>
                <th style={thStyle}>Token 路径</th>
                <th style={thStyle}>用途说明</th>
              </tr>
            </thead>
            <tbody>
              {TOKEN_TABLE.map((row) => (
                <tr key={row.part}>
                  <td style={tdStyle}>{row.part}</td>
                  <td style={{ ...tdStyle, fontFamily: "monospace" }}>
                    <code style={{ padding: `0 ${SPACING["2"] / 2}px`, borderRadius: 6, backgroundColor: tokens.bgColor.secondaryContainer, color: tokens.textColor.brand }}>
                      {`tokens.${row.path}`}
                    </code>
                  </td>
                  <td style={{ ...tdStyle, color: tokens.textColor.secondary }}>{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: SPACING["4"], fontSize: typoMetaCaption.fontSize, lineHeight: 1.8, color: tokens.textColor.tertiary }}>
            <p>补充说明：</p>
            <ul style={{ listStyleType: "disc", paddingLeft: SPACING["4"] }}>
              <li><strong>排版 Token</strong>：链接文字使用 <code>tokens.typography.title.card</code> (32px/500/1.5)；标签文字使用 <code>tokens.typography.meta.time</code> (22px/400/1)</li>
              <li><strong>布局常量</strong>：面板内边距 36px、图标与文字间距 12px（均为 SPACING 6 倍数）</li>
              <li><strong>圆角</strong>：面板 30px、标签 24px</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
