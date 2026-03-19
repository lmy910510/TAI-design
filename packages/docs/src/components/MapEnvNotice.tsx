import { RADIUS, SPACING, useTheme } from "@tai-design/components";
import { InfoCircleFilledIcon } from "tdesign-icons-react";
import { hasTencentMapKey } from "../data/tencentMap";

export function MapEnvNotice() {
  const { colors } = useTheme();

  if (hasTencentMapKey()) {
    return null;
  }

  return (
    <div
      role="status"
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: SPACING["3"],
        padding: SPACING["4"],
        borderRadius: RADIUS["2xl"],
        border: `1px solid ${colors.functional.notice[30]}`,
        backgroundColor: colors.functional.notice[12],
        color: colors.text.primary,
      }}
    >
      <InfoCircleFilledIcon
        style={{
          flexShrink: 0,
          marginTop: 3,
          fontSize: 24,
          color: colors.functional.notice.main,
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: SPACING["2"] }}>
        <div style={{ fontSize: 16, lineHeight: "22px", fontWeight: 600 }}>
          未配置腾讯地图 Key
        </div>
        <div style={{ color: colors.text.secondary, fontSize: 14, lineHeight: "20px" }}>
          项目其他页面可以正常预览；只有地图相关示例需要在
          <code
            style={{
              margin: `0 ${SPACING["2"] / 2}px`,
              padding: `0 ${SPACING["2"] / 2}px`,
              borderRadius: RADIUS.xl,
              backgroundColor: colors.bg.primary,
              color: colors.text.primary,
            }}
          >
            packages/docs/.env.local
          </code>
          中设置
          <code
            style={{
              marginLeft: SPACING["2"] / 2,
              padding: `0 ${SPACING["2"] / 2}px`,
              borderRadius: RADIUS.xl,
              backgroundColor: colors.bg.primary,
              color: colors.text.primary,
            }}
          >
            VITE_TENCENT_MAP_KEY
          </code>
          。
        </div>
      </div>
    </div>
  );
}
