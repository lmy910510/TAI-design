const TENCENT_MAP_KEY = import.meta.env.VITE_TENCENT_MAP_KEY?.trim() ?? "";
const TENCENT_MAP_STYLE_ID = import.meta.env.VITE_TENCENT_MAP_STYLE_ID?.trim() ?? "";

export function getTencentMapKey() {
  return TENCENT_MAP_KEY;
}

export function hasTencentMapKey() {
  return TENCENT_MAP_KEY.length > 0;
}

export function getTencentMapStyleId(fallback = "style1") {
  return TENCENT_MAP_STYLE_ID || fallback;
}

export function getTencentMapScriptSrc(mapStyleId?: string) {
  const url = new URL("https://map.qq.com/api/gljs");
  url.searchParams.set("v", "1.exp");
  url.searchParams.set("key", TENCENT_MAP_KEY);

  const resolvedStyleId = mapStyleId || getTencentMapStyleId("");
  if (resolvedStyleId) {
    url.searchParams.set("mapStyleId", resolvedStyleId);
  }

  return url.toString();
}

export function getTencentMapKeyDisplay() {
  if (!TENCENT_MAP_KEY) {
    return "未配置";
  }

  if (TENCENT_MAP_KEY.length <= 10) {
    return "已配置";
  }

  return `${TENCENT_MAP_KEY.slice(0, 6)}...${TENCENT_MAP_KEY.slice(-4)}`;
}
