import type { CSSProperties } from "react";
import { RADIUS, SPACING, useTheme } from "@tai-design/components";

function LinkIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export function LinkPage() {
  const { colors } = useTheme();

  const chipStyle: CSSProperties = {
    display: "inline-block",
    padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`,
    marginBottom: SPACING["3"],
    borderRadius: 999,
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.secondary,
    color: colors.text.secondary,
    fontSize: 14,
  };

  const panelStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.elevated,
  };

  const usagePanelStyle: CSSProperties = {
    ...panelStyle,
    backgroundColor: colors.bg.secondary,
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
    fontSize: 32,
    lineHeight: "40px",
    color: colors.text.link,
    textDecoration: "none",
  };

  const metaTagStyle: CSSProperties = {
    padding: `0 ${SPACING["2"]}px`,
    borderRadius: RADIUS.xl,
    backgroundColor: colors.bg.tertiary,
    color: colors.text.secondary,
    fontSize: 20,
    lineHeight: "32px",
  };

  const disabledLinkStyle: CSSProperties = {
    ...baseLinkStyle,
    color: colors.text.disabled,
    cursor: "not-allowed",
  };

  const definitionStyle: CSSProperties = {
    fontSize: 28,
    lineHeight: "42px",
    color: colors.text.secondary,
  };

  return (
    <div className="pb-24">
      <div className="mb-12">
        <div style={chipStyle}>Components / 组件</div>
        <h1 className="text-2xl font-bold mb-4">链接 Link</h1>
        <p className="text-base" style={{ color: colors.text.secondary }}>
          文字链接用于跳转到另一个页面或网站，使用语义化链接 token 提供明确的可点击反馈。
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">定义</h2>
        <p style={definitionStyle}>
          文字链接是一种可点击的文本元素，用于在应用内部或外部进行页面跳转，常用于导航、引用或相关内容的访问。
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">类型</h2>
        <div style={panelStyle}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"] }}>
            <div>
              <h3 className="text-4xl font-medium mb-6">基础链接</h3>
              <div style={linkRowStyle}>
                <a href="#" onClick={(event) => event.preventDefault()} style={baseLinkStyle}>
                  <LinkIcon />
                  Link 链接
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-medium mb-6">外部链接</h3>
              <div style={linkRowStyle}>
                <a href="#" onClick={(event) => event.preventDefault()} style={baseLinkStyle}>
                  <LinkIcon />
                  Link 链接
                  <span style={metaTagStyle}>Ext</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-medium mb-6">禁用状态</h3>
              <div style={linkRowStyle}>
                <span style={disabledLinkStyle}>
                  <LinkIcon />
                  Link 链接
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-medium mb-6">下划线样式</h3>
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
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-9">应用</h2>
        <div style={usagePanelStyle}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["5"] }}>
            <div>
              <h3 className="text-2xl font-medium mb-4">使用场景</h3>
              <ul className="text-[24px] space-y-3 list-disc pl-8" style={{ color: colors.text.secondary }}>
                <li>导航菜单中的页面跳转</li>
                <li>文章或内容中的引用链接</li>
                <li>面包屑导航</li>
                <li>外部资源访问</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">设计规范</h3>
              <ul className="text-[24px] space-y-3 list-disc pl-8" style={{ color: colors.text.secondary }}>
                <li>链接文字使用 `colors.text.link`，保持跨主题一致性</li>
                <li>悬停或强调时可配合下划线增强交互反馈</li>
                <li>外部链接可结合辅助标签说明跳转属性</li>
                <li>禁用态统一使用 `colors.text.disabled`</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
