import { useState, useMemo, CSSProperties } from "react";
import { Volume1, Volume2 } from "lucide-react";
import { DocPageHeader } from "../DocComponents";
import {
  Slider,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  RADIUS,
  SHADOW,
  SPACING,
  useTheme,
} from "@tai-design/components";

/* ------------------------------------------------------------------ */
/* 常量 — 来自组件真实 API                                              */
/* ------------------------------------------------------------------ */

const SIZES = ["large", "medium", "small"] as const;
type SliderSize = (typeof SIZES)[number];

const SIZE_LABELS: Record<SliderSize, string> = {
  large: "Large",
  medium: "Medium",
  small: "Small",
};

const SIZE_SPECS: Record<SliderSize, { trackHeight: number; thumbSize: number; valueFontSize: string; height: number }> = {
  large: { trackHeight: 12, thumbSize: 48, valueFontSize: "28px", height: 60 },
  medium: { trackHeight: 10, thumbSize: 40, valueFontSize: "24px", height: 52 },
  small: { trackHeight: 8, thumbSize: 32, valueFontSize: "20px", height: 44 },
};

/* ------------------------------------------------------------------ */
/* 页面                                                                 */
/* ------------------------------------------------------------------ */

export function SliderPage() {
  const { tokens } = useTheme();

  const [selectedSize, setSelectedSize] = useState<SliderSize>("large");
  const [showValue, setShowValue] = useState(true);
  const [showIcons, setShowIcons] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [sliderValue, setSliderValue] = useState(40);

  /* ---------- 通用样式 ---------- */

  const panelStyle = useMemo<CSSProperties>(
    () => ({
      padding: SPACING["4"],
      borderRadius: RADIUS["2xl"],
      border: `1px solid ${tokens.borderColor.level1}`,
      backgroundColor: tokens.bgColor.elevated,
      boxShadow: SHADOW.xl,
    }),
    [tokens],
  );

  const sectionTitleStyle = useMemo<CSSProperties>(
    () => ({
      fontSize: FONT_SIZE["2xl"],
      fontWeight: FONT_WEIGHT.bold,
      lineHeight: LINE_HEIGHT.tight,
      color: tokens.textColor.primary,
      marginBottom: SPACING["3"],
    }),
    [tokens],
  );

  const labelStyle = useMemo<CSSProperties>(
    () => ({
      fontSize: FONT_SIZE.base,
      fontWeight: FONT_WEIGHT.semibold,
      lineHeight: LINE_HEIGHT.normal,
      color: tokens.textColor.primary,
      marginBottom: SPACING["2"],
    }),
    [tokens],
  );

  const optionBase = useMemo<CSSProperties>(
    () => ({
      padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`,
      borderRadius: RADIUS.xl,
      border: "1px solid",
      cursor: "pointer",
      fontSize: FONT_SIZE.sm,
      fontWeight: FONT_WEIGHT.medium,
      lineHeight: LINE_HEIGHT.none,
      transition: "all 120ms ease",
    }),
    [],
  );

  const optionStyle = (active: boolean): CSSProperties => ({
    ...optionBase,
    borderColor: active ? tokens.borderColor.brand : tokens.borderColor.level1,
    backgroundColor: active ? tokens.bgColor.brandLight : tokens.bgColor.container,
    color: active ? tokens.textColor.brand : tokens.textColor.secondary,
  });

  const toggleStyle = (active: boolean): CSSProperties => ({
    ...optionBase,
    borderColor: active ? tokens.functionalColor.success.main : tokens.borderColor.level1,
    backgroundColor: active ? tokens.functionalColor.success.light : tokens.bgColor.container,
    color: active ? tokens.functionalColor.success.main : tokens.textColor.secondary,
  });

  const infoRowStyle = useMemo<CSSProperties>(
    () => ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: `${SPACING["2"] / 2}px 0`,
    }),
    [],
  );

  const infoKeyStyle = useMemo<CSSProperties>(
    () => ({
      fontSize: FONT_SIZE.sm,
      fontWeight: FONT_WEIGHT.regular,
      color: tokens.textColor.secondary,
    }),
    [tokens],
  );

  const infoValStyle = useMemo<CSSProperties>(
    () => ({
      fontSize: FONT_SIZE.sm,
      fontWeight: FONT_WEIGHT.medium,
      color: tokens.textColor.primary,
    }),
    [tokens],
  );

  const specs = SIZE_SPECS[selectedSize];

  /* ---------- 渲染 ---------- */

  return (
    <div style={{ paddingBottom: SPACING["6"] * 3 }}>
      {/* -------- 页面头 -------- */}
      <DocPageHeader
        category="Components / 组件"
        title="滑块 Slider"
        description="用于控制连续有限区间内的数值，支持三种尺寸、数值显示、前后缀图标和禁用态。"
      />

      {/* -------- 主体双列 -------- */}
      <div style={{ display: "flex", gap: SPACING["4"], alignItems: "flex-start" }}>
        {/* -------- 左列：预览 -------- */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
          {/* 预览区 */}
          <div
            style={{
              ...panelStyle,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 240,
              gap: SPACING["4"],
            }}
          >
            <div style={{ width: "100%", maxWidth: 480, padding: `0 ${SPACING["4"]}px` }}>
              <Slider
                value={sliderValue}
                onChange={setSliderValue}
                size={selectedSize}
                disabled={isDisabled}
                showValue={showValue}
                prefixIcon={showIcons ? <Volume1 size={20} /> : undefined}
                suffixIcon={showIcons ? <Volume2 size={20} /> : undefined}
              />
            </div>
            <span
              style={{
                fontSize: FONT_SIZE.sm,
                fontWeight: FONT_WEIGHT.regular,
                color: tokens.textColor.tertiary,
              }}
            >
              当前值: {sliderValue}
            </span>
          </div>

          {/* 三种尺寸对比 */}
          <div style={panelStyle}>
            <div style={sectionTitleStyle}>尺寸对比</div>
            <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
              {SIZES.map((s) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: SPACING["3"] }}>
                  <span
                    style={{
                      width: 72,
                      fontSize: FONT_SIZE.sm,
                      fontWeight: FONT_WEIGHT.medium,
                      color: tokens.textColor.secondary,
                      flexShrink: 0,
                    }}
                  >
                    {SIZE_LABELS[s]}
                  </span>
                  <div style={{ flex: 1 }}>
                    <Slider defaultValue={60} size={s} showValue />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 禁用态 */}
          <div style={panelStyle}>
            <div style={sectionTitleStyle}>禁用态</div>
            <Slider defaultValue={35} disabled showValue />
          </div>
        </div>

        {/* -------- 右列：配置 + 信息 -------- */}
        <div style={{ width: 320, flexShrink: 0, display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
          {/* 配置区 */}
          <div style={panelStyle}>
            <div style={sectionTitleStyle}>配置</div>

            {/* 尺寸 */}
            <div style={{ marginBottom: SPACING["3"] }}>
              <div style={labelStyle}>尺寸</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: SPACING["2"] }}>
                {SIZES.map((s) => (
                  <div key={s} style={optionStyle(s === selectedSize)} onClick={() => setSelectedSize(s)}>
                    {SIZE_LABELS[s]}
                  </div>
                ))}
              </div>
            </div>

            {/* 开关 */}
            <div style={{ marginBottom: SPACING["3"] }}>
              <div style={labelStyle}>功能</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: SPACING["2"] }}>
                <div style={toggleStyle(showValue)} onClick={() => setShowValue((v) => !v)}>
                  显示数值
                </div>
                <div style={toggleStyle(showIcons)} onClick={() => setShowIcons((v) => !v)}>
                  前后缀图标
                </div>
                <div style={toggleStyle(isDisabled)} onClick={() => setIsDisabled((v) => !v)}>
                  禁用
                </div>
              </div>
            </div>
          </div>

          {/* 信息面板 */}
          <div style={panelStyle}>
            <div style={sectionTitleStyle}>当前配置信息</div>
            <div style={infoRowStyle}>
              <span style={infoKeyStyle}>尺寸</span>
              <span style={infoValStyle}>{SIZE_LABELS[selectedSize]}</span>
            </div>
            <div style={infoRowStyle}>
              <span style={infoKeyStyle}>轨道高度</span>
              <span style={infoValStyle}>{specs.trackHeight}px</span>
            </div>
            <div style={infoRowStyle}>
              <span style={infoKeyStyle}>滑块尺寸</span>
              <span style={infoValStyle}>{specs.thumbSize}px</span>
            </div>
            <div style={infoRowStyle}>
              <span style={infoKeyStyle}>数值字号</span>
              <span style={infoValStyle}>{specs.valueFontSize}</span>
            </div>
            <div style={infoRowStyle}>
              <span style={infoKeyStyle}>容器高度</span>
              <span style={infoValStyle}>{specs.height}px</span>
            </div>
            <div style={infoRowStyle}>
              <span style={infoKeyStyle}>显示数值</span>
              <span style={infoValStyle}>{showValue ? "是" : "否"}</span>
            </div>
            <div style={infoRowStyle}>
              <span style={infoKeyStyle}>前后缀图标</span>
              <span style={infoValStyle}>{showIcons ? "是" : "否"}</span>
            </div>
            <div style={infoRowStyle}>
              <span style={infoKeyStyle}>禁用</span>
              <span style={infoValStyle}>{isDisabled ? "是" : "否"}</span>
            </div>
          </div>

          {/* 🎨 Token 使用清单 */}
          <div style={panelStyle}>
            <div style={sectionTitleStyle}>🎨 Token 使用清单</div>
            <p
              style={{
                fontSize: FONT_SIZE.sm,
                color: tokens.textColor.secondary,
                marginBottom: SPACING["3"],
              }}
            >
              Slider <strong>没有组件级 token</strong>，全部直接使用公开语义 token。
            </p>
            <div
              style={{
                borderRadius: 18,
                border: `1px solid ${tokens.borderColor.level1}`,
                overflow: "hidden",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: FONT_SIZE.sm,
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: tokens.bgColor.container }}>
                    {["部位", "Token 路径", "用途"].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: "12px 18px",
                          textAlign: "left",
                          fontWeight: FONT_WEIGHT.semibold,
                          color: tokens.textColor.secondary,
                          borderBottom: `1px solid ${tokens.borderColor.level1}`,
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["轨道底色", "bgColor.secondaryContainer", "未填充区域的背景"],
                    ["填充色", "textColor.primary", "已填充区域和数值文字"],
                    ["图标", "textColor.secondary", "前后缀图标颜色"],
                  ].map(([part, token, desc], i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: i < 2 ? `1px solid ${tokens.borderColor.level1}` : "none",
                      }}
                    >
                      <td style={{ padding: "10px 18px", color: tokens.textColor.primary }}>{part}</td>
                      <td style={{ padding: "10px 18px" }}>
                        <code
                          style={{
                            padding: "3px 8px",
                            borderRadius: 6,
                            backgroundColor: tokens.bgColor.code,
                            color: tokens.textColor.brand,
                            fontSize: FONT_SIZE.xs,
                          }}
                        >
                          {token}
                        </code>
                      </td>
                      <td style={{ padding: "10px 18px", color: tokens.textColor.secondary }}>{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              style={{
                marginTop: SPACING["2"],
                fontSize: FONT_SIZE.xs,
                lineHeight: LINE_HEIGHT.relaxed,
                color: tokens.textColor.tertiary,
              }}
            >
              <p style={{ marginBottom: 4 }}>
                <strong style={{ color: tokens.textColor.secondary }}>排版 token：</strong>数值字重使用
                <code> typography.display.numeric.fontWeight</code>（600）。
              </p>
              <p style={{ marginBottom: 4 }}>
                <strong style={{ color: tokens.textColor.secondary }}>滑块圆点：</strong>固定纯白 + 投影，保持浅深色模式一致的高可见性。
              </p>
              <p>
                <strong style={{ color: tokens.textColor.secondary }}>禁用态：</strong>整体 opacity 降至 0.5，cursor 设为 not-allowed。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
