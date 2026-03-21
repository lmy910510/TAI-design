import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { RADIUS, useThemeOptional } from "@tai-design/components";
import {
  getTencentMapScriptSrc,
  getTencentMapStyleId,
  hasTencentMapKey,
} from "../data/tencentMap";

// 声明腾讯地图全局类型
declare global {
  interface Window {
    TMap: any;
  }
}

const CUSTOM_MAP_STYLE_ID = "style1";

interface BaseMapComponentProps {
  className?: string;
  style?: CSSProperties;
  mapStyleId?: string;
}

export function BaseMapComponent({ className, style, mapStyleId }: BaseMapComponentProps) {
  const { tokens } = useThemeOptional();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [loadError, setLoadError] = useState("");
  const resolvedMapStyleId = mapStyleId || getTencentMapStyleId(CUSTOM_MAP_STYLE_ID);

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
        position: new window.TMap.LatLng(39.990912, 116.32715),
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
      const mapConfig: any = {
        center,
        zoom: 12,
        pitch: 0,
        rotation: 0,
        viewMode: "2D",
      };

      if (resolvedMapStyleId) {
        mapConfig.mapStyleId = resolvedMapStyleId;
      }

      mapInstanceRef.current = new window.TMap.Map(mapContainerRef.current, mapConfig);
      addMarkers();
      setLoadError("");
    } catch (error) {
      console.error("地图初始化失败:", error);
      setLoadError("地图初始化失败");
    }
  }, [addMarkers, resolvedMapStyleId]);

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
    script.src = getTencentMapScriptSrc(resolvedMapStyleId);
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
  }, [initMap, resolvedMapStyleId]);

  const errorPanelStyle: CSSProperties = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.container,
  };

  if (loadError) {
    return (
      <div className={className} style={style}>
        <div style={errorPanelStyle}>
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                marginBottom: 12,
                color: tokens.functionalColor.error.main,
                fontWeight: 600,
              }}
            >
              ⚠️ {loadError}
            </p>
            <p style={{ color: tokens.textColor.secondary }}>
              请检查网络连接或补充本地环境变量配置
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className} style={style}>
      <div
        ref={mapContainerRef}
        className="w-full h-full"
        style={{ borderRadius: RADIUS["2xl"], overflow: "hidden" }}
      />
    </div>
  );
}
