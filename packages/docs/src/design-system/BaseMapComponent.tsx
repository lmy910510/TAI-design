import { useEffect, useRef, useState } from "react";
import { getTencentMapScriptSrc, hasTencentMapKey } from "../data/tencentMap";

// 声明腾讯地图全局类型
declare global {
  interface Window {
    TMap: any;
  }
}

const CUSTOM_MAP_STYLE_ID = "style1"; // 自定义地图样式 ID

interface BaseMapComponentProps {
  className?: string;
  style?: React.CSSProperties;
  mapStyleId?: string; // 允许外部传入自定义样式 ID
}

export function BaseMapComponent({ className, style, mapStyleId }: BaseMapComponentProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [loadError, setLoadError] = useState<string>("");

  useEffect(() => {
    // 检查脚本是否已加载
    if (window.TMap) {
      initMap();
      return;
    }

    if (!hasTencentMapKey()) {
      setLoadError("未配置腾讯地图 Key，请在 packages/docs/.env.local 中设置 VITE_TENCENT_MAP_KEY");
      return;
    }

    // 动态加载腾讯地图脚本，并在 URL 中指定自定义样式
    const script = document.createElement("script");
    const styleId = mapStyleId || CUSTOM_MAP_STYLE_ID;
    script.src = getTencentMapScriptSrc(styleId);
    script.async = true;

    script.onload = () => {
      initMap();
    };

    script.onerror = () => {
      setLoadError("腾讯地图加载失败，请检查网络连接或 API Key 配置");
    };

    document.head.appendChild(script);

    return () => {
      // 清理地图实例
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
      }
    };
  }, []);

  const initMap = () => {
    if (!mapContainerRef.current || !window.TMap) return;

    try {
      // 创建地图实例
      const center = new window.TMap.LatLng(39.908823, 116.39747); // 北京天安门

      const mapConfig: any = {
        center,
        zoom: 12,
        pitch: 0,
        rotation: 0,
        viewMode: "2D",
      };

      // 如果有自定义样式 ID，则应用
      const styleId = mapStyleId || getTencentMapStyleId();
      if (styleId) {
        mapConfig.mapStyleId = styleId;
      }

      mapInstanceRef.current = new window.TMap.Map(mapContainerRef.current, mapConfig);

      // 添加示例标记
      addMarkers();
    } catch (error) {
      console.error("地图初始化失败:", error);
      setLoadError("地图初始化失败");
    }
  };

  const addMarkers = () => {
    if (!window.TMap || !mapInstanceRef.current) return;

    // 创建标记点数据
    const geometries = [
      {
        id: "1",
        styleId: "marker",
        position: new window.TMap.LatLng(39.908823, 116.39747),
        properties: {
          title: "天安门",
        },
      },
      {
        id: "2",
        styleId: "marker",
        position: new window.TMap.LatLng(39.916527, 116.397128),
        properties: {
          title: "故宫博物院",
        },
      },
      {
        id: "3",
        styleId: "marker",
        position: new window.TMap.LatLng(39.990912, 116.32715),
        properties: {
          title: "鸟巢",
        },
      },
    ];

    // 创建 MultiMarker
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
  };

  if (loadError) {
    return (
      <div className={className} style={style}>
        <div className="flex items-center justify-center h-full bg-gray-100 rounded-3xl">
          <div className="text-center">
            <p className="text-red-500 mb-2">⚠️ {loadError}</p>
            <p className="text-sm text-gray-500">请检查网络连接或补充本地环境变量配置</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className} style={style}>
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  );
}
