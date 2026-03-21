import { RADIUS, SPACING, statusOrange, useTheme } from "@tai-design/components";
import { InfoCircleFilledIcon } from "tdesign-icons-react";
import { hasTencentMapKey } from "../data/tencentMap";

export function MapEnvNotice() {
  const { tokens } = useTheme();

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
        border: `1px solid ${statusOrange[30]}`,
        backgroundColor: tokens.functionalColor.warning.light,
        color: tokens.textColor.primary,
      }}
    >
      <InfoCircleFilledIcon
        style={{
          flexShrink: 0,
          marginTop: 3,
          fontSize: 24,
          color: tokens.functionalColor.warning.main,
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: SPACING["2"] }}>
        <div style={{ fontSize: 16, lineHeight: "22px", fontWeight: 600 }}>
          未配置腾讯地图 Key
        </div>
        <div style={{ color: tokens.textColor.secondary, fontSize: 14, lineHeight: "20px" }}>
          项目其他页面可以正常预览；只有地图相关示例需要在
          <code
            style={{
              margin: `0 ${SPACING["2"] / 2}px`,
              padding: `0 ${SPACING["2"] / 2}px`,
              borderRadius: RADIUS.xl,
              backgroundColor: tokens.bgColor.page,
              color: tokens.textColor.primary,
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
              backgroundColor: tokens.bgColor.page,
              color: tokens.textColor.primary,
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
