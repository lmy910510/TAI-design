import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import { RADIUS, SPACING, useTheme } from "@tai-design/components";
import { CheckboxComponent } from "../CheckboxComponent";

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
  const { colors } = useTheme();
  const [demoCheckbox, setDemoCheckbox] = useState(false);
  const [sheetValues, setSheetValues] = useState<string[]>(["map"]);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

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

  const guidePanelStyle: CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.brand}`,
    background: `linear-gradient(to right, ${colors.bg.brandSubtle}, ${colors.bg.secondary})`,
  };

  const actionButtonStyle: CSSProperties = {
    padding: `${SPACING["2"]}px ${SPACING["4"]}px`,
    borderRadius: RADIUS["4xl"],
    border: `1px solid ${colors.button.primary.border}`,
    backgroundColor: colors.button.primary.bg,
    color: colors.button.primary.text,
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
    backgroundColor: colors.bg.overlay,
  };

  const sheetStyle: CSSProperties = {
    width: "min(720px, 100%)",
    padding: SPACING["5"],
    borderRadius: RADIUS["4xl"],
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.elevated,
  };

  const selectedLabel = useMemo(() => (demoCheckbox ? "已选中" : "未选中"), [demoCheckbox]);

  const toggleSheetValue = (key: string) => {
    setSheetValues((prev) => (prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]));
  };

  return (
    <div className="pb-24">
      <div className="mb-12">
        <div style={chipStyle}>Components / 组件</div>
        <h1 className="text-4xl font-bold mb-4">多选 Checkbox</h1>
        <p className="text-lg" style={{ color: colors.text.secondary }}>
          用于多项选择场景的交互组件，页面说明与演示直接展示组件包中的真实 token，不再额外维护旧色值文案。
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">实际效果</h2>
        <div style={panelStyle}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: SPACING["3"] }}>
            <CheckboxComponent checked={demoCheckbox} onChange={setDemoCheckbox} />
            <span className="text-sm" style={{ color: colors.text.secondary }}>{selectedLabel}</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">状态</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: SPACING["4"] }}>
          <div style={panelStyle}>
            <h3 className="text-lg font-semibold mb-4">未选中</h3>
            <div className="flex justify-center mb-4">
              <CheckboxComponent checked={false} onChange={() => {}} />
            </div>
            <ul className="space-y-2 text-sm" style={{ color: colors.text.secondary }}>
              <li>• 边框使用 `colors.checkbox.unchecked`</li>
              <li>• 背景保持透明，突出可选但未激活状态</li>
              <li>• 适合默认未选择的多选项</li>
            </ul>
          </div>

          <div style={panelStyle}>
            <h3 className="text-lg font-semibold mb-4">已选中</h3>
            <div className="flex justify-center mb-4">
              <CheckboxComponent checked onChange={() => {}} />
            </div>
            <ul className="space-y-2 text-sm" style={{ color: colors.text.secondary }}>
              <li>• 填充色使用 `colors.checkbox.checked`</li>
              <li>• 对勾使用 `colors.checkbox.checkmark`</li>
              <li>• 适合表达已确认、已启用的多选项</li>
            </ul>
          </div>

          <div style={panelStyle}>
            <h3 className="text-lg font-semibold mb-4">禁用状态</h3>
            <div className="flex justify-center gap-4 mb-4">
              <CheckboxComponent checked={false} onChange={() => {}} disabled />
              <CheckboxComponent checked onChange={() => {}} disabled />
            </div>
            <ul className="space-y-2 text-sm" style={{ color: colors.text.secondary }}>
              <li>• 透明度由组件本体统一控制</li>
              <li>• 鼠标与键盘交互均被禁用</li>
              <li>• 适合必选或只读说明项</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">交互演示</h2>
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
                  borderBottom: `1px solid ${colors.border.subtle}`,
                }}
              >
                <CheckboxComponent checked={sheetValues.includes(item.key)} onChange={() => toggleSheetValue(item.key)} />
                <div style={{ display: "flex", flexDirection: "column", gap: SPACING["2"] / 2 }}>
                  <p className="text-2xl font-semibold" style={{ color: colors.text.primary }}>{item.title}</p>
                  <p className="text-sm" style={{ color: colors.text.secondary }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={guidePanelStyle} className="mb-8">
        <h3 className="text-lg font-semibold mb-3">📐 设计规范</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: SPACING["4"] }}>
          <div className="text-sm" style={{ color: colors.text.secondary }}>
            <p className="mb-2"><strong>尺寸体系：</strong></p>
            <ul className="space-y-1 text-xs">
              <li>• 整体触控范围 48×48px</li>
              <li>• 演示与说明统一沿用组件本体尺寸</li>
              <li>• 列表项间距和面板间距均保持 6px 基准栅格</li>
            </ul>
          </div>
          <div className="text-sm" style={{ color: colors.text.secondary }}>
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
        <h2 className="text-2xl font-bold mb-4">颜色规范</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: SPACING["4"] }}>
          <div style={panelStyle}>
            <h3 className="text-lg font-semibold mb-4">未选中边框</h3>
            <div className="text-sm" style={{ color: colors.text.secondary }}>
              <div style={{ width: 48, height: 48, borderRadius: 999, border: `2px solid ${colors.checkbox.unchecked}`, marginBottom: SPACING["2"] }} />
              <div className="font-mono" style={{ color: colors.text.primary }}>{colors.checkbox.unchecked}</div>
              <div>`colors.checkbox.unchecked`</div>
            </div>
          </div>

          <div style={panelStyle}>
            <h3 className="text-lg font-semibold mb-4">选中填充</h3>
            <div className="text-sm" style={{ color: colors.text.secondary }}>
              <div style={{ width: 48, height: 48, borderRadius: 999, backgroundColor: colors.checkbox.checked, marginBottom: SPACING["2"] }} />
              <div className="font-mono" style={{ color: colors.text.primary }}>{colors.checkbox.checked}</div>
              <div>`colors.checkbox.checked`</div>
            </div>
          </div>

          <div style={panelStyle}>
            <h3 className="text-lg font-semibold mb-4">对勾颜色</h3>
            <div className="text-sm" style={{ color: colors.text.secondary }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 999,
                  backgroundColor: colors.checkbox.checked,
                  marginBottom: SPACING["2"],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CheckmarkPreview color={colors.checkbox.checkmark} />
              </div>
              <div className="font-mono" style={{ color: colors.text.primary }}>{colors.checkbox.checkmark}</div>
              <div>`colors.checkbox.checkmark`</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">使用说明</h2>
        <div style={panelStyle}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h3 className="text-lg font-semibold mb-3">多选弹层示例</h3>
            <p className="text-sm mb-6" style={{ color: colors.text.secondary }}>
              通过主题 token 构建的示例弹层，展示多选项列表与底部浮层的组合方式。
            </p>
            <button type="button" style={actionButtonStyle} onClick={() => setIsSheetOpen(true)}>
              打开选择弹层
            </button>
          </div>
        </div>
      </div>

      {isSheetOpen ? (
        <div style={overlayStyle} onClick={() => setIsSheetOpen(false)}>
          <div style={sheetStyle} onClick={(event) => event.stopPropagation()}>
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
              <div>
                <p className="text-lg font-semibold" style={{ color: colors.text.primary }}>偏好设置</p>
                <p className="text-sm mt-2" style={{ color: colors.text.secondary }}>
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
                    borderTop: `1px solid ${colors.border.subtle}`,
                  }}
                >
                  <CheckboxComponent checked={sheetValues.includes(item.key)} onChange={() => toggleSheetValue(item.key)} />
                  <div>
                    <p className="text-base font-semibold" style={{ color: colors.text.primary }}>{item.title}</p>
                    <p className="text-sm mt-2" style={{ color: colors.text.secondary }}>{item.description}</p>
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: SPACING["2"] }}>
                <p className="text-sm" style={{ color: colors.text.secondary }}>
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
