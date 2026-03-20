import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { RADIUS, SHADOW, useTheme } from "@tai-design/components";
import {
  getTencentMapKeyDisplay,
  getTencentMapScriptSrc,
  getTencentMapStyleId,
  hasTencentMapKey,
} from "../../data/tencentMap";

// 声明腾讯地图全局类型
declare global {
  interface Window {
    TMap: any;
  }
}

const FEATURE_ITEMS = [
  {
    title: "矢量渲染",
    description:
      "基于 WebGL 的矢量地图渲染，支持流畅的缩放和旋转操作，提供更清晰的显示效果。",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </>
    ),
  },
  {
    title: "自定义样式",
    description:
      "支持配置地图样式 ID，可与车机主题策略配合，保持页面展示的一致视觉语言。",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </>
    ),
  },
  {
    title: "标记点位",
    description:
      "支持添加多个标记点，可用于展示充电桩、服务区、兴趣点等车机常用场景。",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
  },
  {
    title: "性能优化",
    description:
      "懒加载地图脚本，仅在需要时加载，减少首屏加载时间，提升整体性能表现。",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </>
    ),
  },
] as const;

const SCENARIO_ITEMS = [
  "导航系统：集成导航路线规划、实时路况显示",
  "充电地图：显示附近充电桩位置、状态和导航",
  "兴趣点搜索：查找附近餐厅、加油站、景点等 POI",
  "停车场查询：展示停车场位置、空余车位信息",
  "行车记录：显示历史行车轨迹、里程统计",
] as const;

export function Map() {
  const { colors } = useTheme();
  const tencentMapKeyDisplay = getTencentMapKeyDisplay();
  const mapStyleId = getTencentMapStyleId("style1");
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [loadError, setLoadError] = useState("");
  const [viewMode, setViewMode] = useState<"2d" | "3d">("2d");

  const addMarkers = useCallback(() => {
    if (!window.TMap || !mapInstanceRef.current) {
      return;
    }

    const geometries = [
      {
        id: "1",
        styleId: "marker",
        position: new window.TMap.LatLng(39.908823, 116.39747),
        properties: { title: "天安门" },
      },
      {
        id: "2",
        styleId: "marker",
        position: new window.TMap.LatLng(39.916527, 116.397128),
        properties: { title: "故宫博物院" },
      },
      {
        id: "3",
        styleId: "marker",
        position: new window.TMap.LatLng(39.990946, 116.32699),
        properties: { title: "鸟巢" },
      },
    ];

    new window.TMap.MultiMarker({
      map: mapInstanceRef.current,
      styles: {
        marker: new window.TMap.MarkerStyle({
          width: 25,
          height: 35,
          anchor: { x: 12.5, y: 35 },
        }),
      },
      geometries,
    });
  }, []);

  const initMap = useCallback(() => {
    if (!mapContainerRef.current || !window.TMap) {
      return;
    }

    try {
      const center = new window.TMap.LatLng(39.908823, 116.39747);
      mapInstanceRef.current = new window.TMap.Map(mapContainerRef.current, {
        center,
        zoom: 12,
        pitch: 0,
        rotation: 0,
        viewMode: "2D",
        mapStyleId,
      });

      addMarkers();
      setLoadError("");
      setViewMode("2d");
    } catch (error) {
      console.error("地图初始化失败:", error);
      setLoadError("地图初始化失败");
    }
  }, [addMarkers, mapStyleId]);

  useEffect(() => {
    if (window.TMap) {
      initMap();
      return () => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.destroy();
          mapInstanceRef.current = null;
        }
      };
    }

    if (!hasTencentMapKey()) {
      setLoadError("未配置腾讯地图 Key，请在 packages/docs/.env.local 中设置 VITE_TENCENT_MAP_KEY");
      return;
    }

    const script = document.createElement("script");
    script.src = getTencentMapScriptSrc(mapStyleId);
    script.async = true;
    script.onload = () => {
      initMap();
    };
    script.onerror = () => {
      setLoadError("腾讯地图加载失败，请检查网络连接或 API Key 配置");
    };

    document.head.appendChild(script);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
    };
  }, [initMap, mapStyleId]);

  const handleZoomIn = useCallback(() => {
    if (!mapInstanceRef.current) {
      return;
    }

    const currentZoom = mapInstanceRef.current.getZoom();
    mapInstanceRef.current.setZoom(currentZoom + 1);
  }, []);

  const handleZoomOut = useCallback(() => {
    if (!mapInstanceRef.current) {
      return;
    }

    const currentZoom = mapInstanceRef.current.getZoom();
    mapInstanceRef.current.setZoom(currentZoom - 1);
  }, []);

  const handleResetView = useCallback(() => {
    if (!mapInstanceRef.current || !window.TMap) {
      return;
    }

    const center = new window.TMap.LatLng(39.908823, 116.39747);
    mapInstanceRef.current.setCenter(center);
    mapInstanceRef.current.setZoom(12);
    mapInstanceRef.current.setPitch(0);
    setViewMode("2d");
  }, []);

  const handle3DView = useCallback(() => {
    if (!mapInstanceRef.current) {
      return;
    }

    mapInstanceRef.current.setPitch(45);
    setViewMode("3d");
  }, []);

  const handle2DView = useCallback(() => {
    if (!mapInstanceRef.current) {
      return;
    }

    mapInstanceRef.current.setPitch(0);
    setViewMode("2d");
  }, []);

  const chipStyle: CSSProperties = {
    display: "inline-block",
    padding: "6px 12px",
    marginBottom: 16,
    borderRadius: 999,
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.secondary,
    color: colors.text.secondary,
    fontSize: 14,
  };

  const introPanelStyle: CSSProperties = {
    padding: 24,
    marginBottom: 32,
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.info}`,
    background: `linear-gradient(to right, ${colors.bg.infoSubtle}, ${colors.bg.secondary})`,
  };

  const mapShellStyle: CSSProperties = {
    overflow: "hidden",
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.elevated,
    boxShadow: SHADOW.xl,
  };

  const controlBarStyle: CSSProperties = {
    padding: 24,
    borderTop: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.secondary,
  };

  const featureCardStyle: CSSProperties = {
    padding: 24,
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.elevated,
  };

  const iconShellStyle: CSSProperties = {
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    borderRadius: RADIUS.xl,
    backgroundColor: colors.bg.secondary,
    color: colors.text.primary,
  };

  const scenarioPanelStyle: CSSProperties = {
    padding: 24,
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${colors.border.brand}`,
    background: `linear-gradient(to right, ${colors.bg.brandSubtle}, ${colors.bg.secondary})`,
  };

  const getControlButtonStyle = (active = false, primary = false): CSSProperties => {
    if (primary) {
      return {
        padding: "12px 18px",
        borderRadius: RADIUS.xl,
        border: `1px solid ${colors.button.primary.bg}`,
        backgroundColor: colors.button.primary.bg,
        color: colors.button.primary.text,
        fontSize: 14,
        fontWeight: 600,
        transition: "all 150ms ease",
        cursor: "pointer",
      };
    }

    return {
      padding: "12px 18px",
      borderRadius: RADIUS.xl,
      border: `1px solid ${active ? colors.border.focus : colors.border.subtle}`,
      backgroundColor: active ? colors.bg.brandSubtle : colors.bg.tertiary,
      color: active ? colors.text.primary : colors.text.secondary,
      fontSize: 14,
      fontWeight: 500,
      transition: "all 150ms ease",
      cursor: "pointer",
    };
  };

  return (
    <div>
      <div className="mb-8">
        <div style={chipStyle}>Components / 组件</div>
        <h1 className="text-4xl font-bold mb-4">底图组件</h1>
        <p className="text-lg" style={{ color: colors.text.secondary }}>
          基于腾讯地图 API 的车机端底图展示组件。
        </p>
      </div>

      <div style={introPanelStyle}>
        <h3 className="text-lg font-semibold mb-2">💡 使用说明</h3>
        <ul className="text-sm space-y-1" style={{ color: colors.text.secondary }}>
          <li>• 集成腾讯地图 JavaScript API GL，支持矢量地图渲染。</li>
          <li>• 页面壳层统一使用主题 token，保证文档站深浅模式表现一致。</li>
          <li>• 支持 2D / 3D 视角切换，适合不同车机场景使用。</li>
          <li>• API Key：{tencentMapKeyDisplay}</li>
          <li>• 未配置时请在 `packages/docs/.env.local` 中设置 `VITE_TENCENT_MAP_KEY`。</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">地图展示</h2>

        {loadError ? (
          <div
            style={{
              padding: 48,
              borderRadius: RADIUS["2xl"],
              border: `1px solid ${colors.border.error}`,
              backgroundColor: colors.bg.errorSubtle,
              textAlign: "center",
            }}
          >
            <p className="text-lg" style={{ color: colors.functional.danger.main }}>
              ⚠️ {loadError}
            </p>
          </div>
        ) : (
          <div style={mapShellStyle}>
            <div ref={mapContainerRef} className="w-full" style={{ height: 600 }} />

            <div style={controlBarStyle}>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="text-sm font-medium" style={{ color: colors.text.secondary }}>
                  地图控制：
                </div>
                <button onClick={handleZoomIn} style={getControlButtonStyle()} type="button">
                  放大
                </button>
                <button onClick={handleZoomOut} style={getControlButtonStyle()} type="button">
                  缩小
                </button>
                <button onClick={handle2DView} style={getControlButtonStyle(viewMode === "2d")} type="button">
                  2D 视图
                </button>
                <button onClick={handle3DView} style={getControlButtonStyle(viewMode === "3d")} type="button">
                  3D 视图
                </button>
                <button onClick={handleResetView} style={getControlButtonStyle(false, true)} type="button">
                  重置视图
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">技术特性</h2>
        <div className="grid grid-cols-2 gap-6">
          {FEATURE_ITEMS.map((item) => (
            <div key={item.title} style={featureCardStyle}>
              <div style={iconShellStyle}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm" style={{ color: colors.text.secondary }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={scenarioPanelStyle}>
        <h3 className="text-base font-semibold mb-3">🚗 车机场景</h3>
        <ul className="text-sm space-y-2" style={{ color: colors.text.secondary }}>
          {SCENARIO_ITEMS.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
