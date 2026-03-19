import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  Button,
  Card,
  Checkbox,
  Divider,
  SPACING,
  Tips as TaiTips,
  createColors,
} from "@tai-design/components";

export function Tips() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const colors = createColors(isDark);
  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(true);

  const tagStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 36,
    paddingLeft: SPACING["2"],
    paddingRight: SPACING["2"],
    borderRadius: 24,
    backgroundColor: colors.bg.secondary,
    border: `1px solid ${colors.border.default}`,
    color: colors.text.secondary,
    fontSize: 18,
  } as const;

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
    setVisible(!nextChecked);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"], paddingBottom: SPACING["6"] * 2 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: SPACING["3"] }}>
        <div style={tagStyle}>Components / 组件</div>
        <h1 style={{ margin: 0, fontSize: 42, lineHeight: 1.2, color: colors.text.primary }}>提示 Tips</h1>
        <p style={{ margin: 0, fontSize: 24, lineHeight: 1.6, color: colors.text.tertiary }}>
          用于对当前页面的某个目标元素进行引导或说明，统一为中性气泡样式，解决原来页面规范互相冲突的问题。
        </p>
      </div>

      <Card variant="white" isDark={isDark}>
        <div style={{ display: "flex", flexDirection: "column", gap: SPACING["6"] }}>
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, fontSize: 30, color: colors.text.primary }}>实时预览</h2>
            <div
              style={{
                position: "relative",
                minHeight: 320,
                borderRadius: 30,
                border: `1px dashed ${colors.border.default}`,
                backgroundColor: colors.bg.secondary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: SPACING["4"] }}>
                {visible ? (
                  <div style={{ position: "absolute", bottom: 96, left: "50%", transform: "translateX(-50%)" }}>
                    <TaiTips isDark={isDark} placement="top" onClose={() => setVisible(false)}>
                      请先勾选以下协议
                    </TaiTips>
                  </div>
                ) : null}

                <Checkbox
                  isDark={isDark}
                  checked={checked}
                  onChange={handleChange}
                  label="我已阅读并同意服务协议"
                />

                <Button isDark={isDark} size="small" variant="secondary" onClick={() => setVisible(true)}>
                  重新展示提示
                </Button>
              </div>
            </div>
          </div>

          <Divider isDark={isDark} />

          <div style={{ display: "flex", flexDirection: "column", gap: SPACING["4"] }}>
            <h2 style={{ margin: 0, fontSize: 30, color: colors.text.primary }}>规范建议</h2>
            <ul
              style={{
                margin: 0,
                paddingLeft: SPACING["4"],
                display: "flex",
                flexDirection: "column",
                gap: SPACING["2"],
                color: colors.text.secondary,
                fontSize: 24,
                lineHeight: 1.6,
              }}
            >
              <li>提示要贴近目标元素，不承担全局系统通知职责。</li>
              <li>文案尽量短句、直接，避免把规则说明写成大段段落。</li>
              <li>关闭后不应频繁重复打扰；只有必要引导场景才再次出现。</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
