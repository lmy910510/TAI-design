import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import { RADIUS, SPACING, useTheme } from "@tai-design/components";
import { CheckboxComponent } from "../CheckboxComponent";
import { DocPageHeader } from "../DocComponents";

const SHEET_OPTIONS = [
  {
    key: "notice",
    title: "接收推送通知",
    description: "允许接收系统推送的重要消息",
  },
  {
    key: "map",
    title: "自动更新地图",
    description: "Wi‑Fi 连接时自动下载地图更新",
  },
  {
    key: "assistant",
    title: "启用语音助手",
    description: "使用语音控制车载功能",
  },
] as const;

function CheckmarkPreview({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5.5 12.5L10 17L18.5 8.5" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Checkbox() {
  const { tokens } = useTheme();
  const [demoCheckbox, setDemoCheckbox] = useState(false);
  const [sheetValues, setSheetValues] = useState<string[]>(["map"]);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const chipStyle: CSSProperties = {
    display: "inline-block",
    padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`,
    marginBottom: SPACING["3"],
    borderRadius: 999,
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.container,
    color: tokens.textColor.secondary,
    fontSize: 14,
  };

  const panelStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.elevated,
  };

  const guidePanelStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.brand}`,
    background: `linear-gradient(to right, ${tokens.bgColor.brandLight}, ${tokens.bgColor.container})`,
  };

  const actionButtonStyle: CSSProperties = {
    padding: `${SPACING["2"]}px ${SPACING["4"]}px`,
    borderRadius: RADIUS["4xl"],
    border: `1px solid ${tokens.textColor.primary}`,
    backgroundColor: tokens.textColor.primary,
    color: tokens.textColor.anti,
    fontSize: 18,
    fontWeight: 600,
  };

  const overlayStyle: CSSProperties = {
    position: "fixed",
    inset: 0,
    zIndex: 50,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: SPACING["6"],
    backgroundColor: tokens.bgColor.overlay,
  };

  const sheetStyle: CSSProperties = {
    width: "min(720px, 100%)",
    padding: SPACING["5"],
    borderRadius: RADIUS["4xl"],
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.elevated,
  };

  const selectedLabel = useMemo(() => (demoCheckbox ? "已选中" : "未选中"), [demoCheckbox]);

  const toggleSheetValue = (key: string) => {
    setSheetValues((prev) => (prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]));
  };

  return (
    <div className="pb-24">
      <DocPageHeader category="Components / 组件" title="多选 Checkbox" description="用于多项选择场景的交互组件，页面说明与演示直接展示组件包中的真实 token，不再额外维护旧色值文案。" />

      <div className="mb-8">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>实际效果</h2>
        <div style={panelStyle}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: SPACING["3"] }}>
            <CheckboxComponent checked={demoCheckbox} onChange={setDemoCheckbox} />
            <span className="text-sm" style={{ color: tokens.textColor.secondary }}>{selectedLabel}</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>状态</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: SPACING["4"] }}>
          <div style={panelStyle}>
            <h3 className="text-lg font-semibold mb-4">未选中</h3>
            <div className="flex justify-center mb-4">
              <CheckboxComponent checked={false} onChange={() => {}} />
            </div>
            <ul className="space-y-2 text-sm" style={{ color: tokens.textColor.secondary }}>
              <li>• 边框使用 `borderColor.level2`（公开语义 token）</li>
              <li>• 背景保持透明，突出可选但未激活状态</li>
              <li>• 适合默认未选择的多选项</li>
            </ul>
          </div>

          <div style={panelStyle}>
            <h3 className="text-lg font-semibold mb-4">已选中</h3>
            <div className="flex justify-center mb-4">
              <CheckboxComponent checked onChange={() => {}} />
            </div>
            <ul className="space-y-2 text-sm" style={{ color: tokens.textColor.secondary }}>
              <li>• 填充色使用 `borderColor.focus`（公开语义 token）</li>
              <li>• 对勾使用 `STATIC.white/black`（固定色）</li>
              <li>• 适合表达已确认、已启用的多选项</li>
            </ul>
          </div>

          <div style={panelStyle}>
            <h3 className="text-lg font-semibold mb-4">禁用状态</h3>
            <div className="flex justify-center gap-4 mb-4">
              <CheckboxComponent checked={false} onChange={() => {}} disabled />
              <CheckboxComponent checked onChange={() => {}} disabled />
            </div>
            <ul className="space-y-2 text-sm" style={{ color: tokens.textColor.secondary }}>
              <li>• 透明度由组件本体统一控制</li>
              <li>• 鼠标与键盘交互均被禁用</li>
              <li>• 适合必选或只读说明项</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>交互演示</h2>
        <div style={panelStyle}>
          <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            {SHEET_OPTIONS.map((item) => (
              <div
                key={item.key}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: SPACING["3"],
                  paddingBottom: SPACING["4"],
                  borderBottom: `1px solid ${tokens.borderColor.level1}`,
                }}
              >
                <CheckboxComponent checked={sheetValues.includes(item.key)} onChange={() => toggleSheetValue(item.key)} />
                <div style={{ display: "flex", flexDirection: "column", gap: SPACING["2"] / 2 }}>
                  <p className="text-2xl font-semibold" style={{ color: tokens.textColor.primary }}>{item.title}</p>
                  <p className="text-sm" style={{ color: tokens.textColor.secondary }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={guidePanelStyle} className="mb-8">
        <h3 className="text-lg font-semibold mb-3">📐 设计规范</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: SPACING["4"] }}>
          <div className="text-sm" style={{ color: tokens.textColor.secondary }}>
            <p className="mb-2"><strong>尺寸体系：</strong></p>
            <ul className="space-y-1 text-xs">
              <li>• 整体触控范围 48×48px</li>
              <li>• 演示与说明统一沿用组件本体尺寸</li>
              <li>• 列表项间距和面板间距均保持 6px 基准栅格</li>
            </ul>
          </div>
          <div className="text-sm" style={{ color: tokens.textColor.secondary }}>
            <p className="mb-2"><strong>交互规则：</strong></p>
            <ul className="space-y-1 text-xs">
              <li>• 多项可同时选中，状态彼此独立</li>
              <li>• 禁用态由组件控制透明度与可点击性</li>
              <li>• 页面不再展示旧的固定色值说明，统一引用组件 token</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>颜色规范</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: SPACING["4"] }}>
          <div style={panelStyle}>
            <h3 className="text-lg font-semibold mb-4">未选中边框</h3>
            <div className="text-sm" style={{ color: tokens.textColor.secondary }}>
              <div style={{ width: 48, height: 48, borderRadius: 999, border: `2px solid ${tokens.checkbox.unchecked}`, marginBottom: SPACING["2"] }} />
              <div className="font-mono" style={{ color: tokens.textColor.primary }}>{tokens.checkbox.unchecked}</div>
              <div>`borderColor.level2`（公开语义 token）</div>
            </div>
          </div>

          <div style={panelStyle}>
            <h3 className="text-lg font-semibold mb-4">选中填充</h3>
            <div className="text-sm" style={{ color: tokens.textColor.secondary }}>
              <div style={{ width: 48, height: 48, borderRadius: 999, backgroundColor: tokens.checkbox.checked, marginBottom: SPACING["2"] }} />
              <div className="font-mono" style={{ color: tokens.textColor.primary }}>{tokens.checkbox.checked}</div>
              <div>`borderColor.focus`（公开语义 token）</div>
            </div>
          </div>

          <div style={panelStyle}>
            <h3 className="text-lg font-semibold mb-4">对勾颜色</h3>
            <div className="text-sm" style={{ color: tokens.textColor.secondary }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 999,
                  backgroundColor: tokens.checkbox.checked,
                  marginBottom: SPACING["2"],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CheckmarkPreview color={tokens.checkbox.checkmark} />
              </div>
              <div className="font-mono" style={{ color: tokens.textColor.primary }}>{tokens.checkbox.checkmark}</div>
              <div>`STATIC.white/black`（固定色）</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>使用说明</h2>
        <div style={panelStyle}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h3 className="text-lg font-semibold mb-3">多选弹层示例</h3>
            <p className="text-sm mb-6" style={{ color: tokens.textColor.secondary }}>
              通过主题 token 构建的示例弹层，展示多选项列表与底部浮层的组合方式。
            </p>
            <button type="button" style={actionButtonStyle} onClick={() => setIsSheetOpen(true)}>
              打开选择弹层
            </button>
          </div>
        </div>
      </div>

      {/* ── 🎨 Token 使用清单 ── */}
      <div className="mb-8">
        <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>🎨 Token 使用清单</h2>
        <div style={panelStyle}>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${tokens.borderColor.level1}` }}>
                  {["部位", "组件级 Token", "公开语义 Token", "用途说明"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: `${SPACING["2"]}px ${SPACING["3"]}px`, color: tokens.textColor.secondary, fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {([
                  { part: "未选中边框", compToken: "tokens.checkbox.unchecked", pubToken: "borderColor.level2", desc: "未选中态描边，表达可选但未激活", color: tokens.checkbox.unchecked },
                  { part: "选中填充/描边", compToken: "tokens.checkbox.checked", pubToken: "borderColor.focus", desc: "选中态背景与描边，全黑/全白高对比", color: tokens.checkbox.checked },
                  { part: "对勾标记", compToken: "tokens.checkbox.checkmark", pubToken: "固定色 STATIC.white / STATIC.black", desc: "勾选标记，需 100% 不透明度", color: tokens.checkbox.checkmark },
                  { part: "标签文字", compToken: "tokens.textColor.primary", pubToken: "textColor.primary", desc: "跟随 Checkbox 的标签文字颜色", color: tokens.textColor.primary },
                  { part: "未选中背景", compToken: "—", pubToken: "固定色 STATIC.transparent", desc: "未选中态背景透明", color: "transparent" },
                ] as const).map((row) => (
                  <tr key={row.part} style={{ borderBottom: `1px solid ${tokens.borderColor.level1}` }}>
                    <td style={{ padding: `${SPACING["2"]}px ${SPACING["3"]}px`, fontWeight: 500, color: tokens.textColor.primary }}>{row.part}</td>
                    <td style={{ padding: `${SPACING["2"]}px ${SPACING["3"]}px` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 20, height: 20, borderRadius: 4, backgroundColor: row.color, border: `1px solid ${tokens.borderColor.level1}`, flexShrink: 0 }} />
                        <code style={{ fontSize: 12, color: tokens.textColor.link }}>{row.compToken}</code>
                      </div>
                    </td>
                    <td style={{ padding: `${SPACING["2"]}px ${SPACING["3"]}px` }}>
                      <code style={{ fontSize: 12, color: tokens.textColor.secondary }}>{row.pubToken}</code>
                    </td>
                    <td style={{ padding: `${SPACING["2"]}px ${SPACING["3"]}px`, color: tokens.textColor.tertiary }}>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: SPACING["4"], padding: SPACING["3"], borderRadius: RADIUS.xl, backgroundColor: tokens.bgColor.container, border: `1px solid ${tokens.borderColor.level1}` }}>
            <p style={{ fontSize: 13, color: tokens.textColor.secondary, lineHeight: 1.6 }}>
              <strong>排版 Token：</strong>标签行高使用 <code>tokens.typography.body.primary.lineHeight</code> (1.4)。
              <br />
              <strong>禁用态：</strong>组件整体 opacity 降低，不单独定义禁用色 token。
            </p>
          </div>
        </div>
      </div>

      {isSheetOpen ? (
        <div style={overlayStyle} onClick={() => setIsSheetOpen(false)}>
          <div style={sheetStyle} onClick={(event) => event.stopPropagation()}>
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
              <div>
                <p className="text-lg font-semibold" style={{ color: tokens.textColor.primary }}>偏好设置</p>
                <p className="text-sm mt-2" style={{ color: tokens.textColor.secondary }}>
                  请选择希望在车机内开启的辅助功能。
                </p>
              </div>
              {SHEET_OPTIONS.map((item) => (
                <div
                  key={item.key}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: SPACING["3"],
                    padding: `${SPACING["2"]}px 0`,
                    borderTop: `1px solid ${tokens.borderColor.level1}`,
                  }}
                >
                  <CheckboxComponent checked={sheetValues.includes(item.key)} onChange={() => toggleSheetValue(item.key)} />
                  <div>
                    <p className="text-base font-semibold" style={{ color: tokens.textColor.primary }}>{item.title}</p>
                    <p className="text-sm mt-2" style={{ color: tokens.textColor.secondary }}>{item.description}</p>
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: SPACING["2"] }}>
                <p className="text-sm" style={{ color: tokens.textColor.secondary }}>
                  已选择 {sheetValues.length} 项
                </p>
                <button type="button" style={actionButtonStyle} onClick={() => setIsSheetOpen(false)}>
                  完成
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
