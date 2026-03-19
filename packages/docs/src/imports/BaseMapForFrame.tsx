import { useEffect, useRef, useState } from "react";
import { getTencentMapScriptSrc, getTencentMapStyleId, hasTencentMapKey } from "../data/tencentMap";

// 声明腾讯地图全局类型
declare global {
  interface Window {
    TMap: any;
  }
}

interface BaseMapForFrameProps {
  className?: string;
}

export function BaseMapForFrame({ className }: BaseMapForFrameProps) {
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

    // 动态加载腾讯地图脚本
    const script = document.createElement("script");
    script.src = getTencentMapScriptSrc();
    script.async = true;

    script.onload = () => {
      initMap();
    };

    script.onerror = () => {
      setLoadError("腾讯地图加载失败");
    };

    document.head.appendChild(script);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
      }
    };
  }, []);

  const initMap = () => {
    if (!mapContainerRef.current || !window.TMap) return;

    try {
      const center = new window.TMap.LatLng(39.908823, 116.39747);

      mapInstanceRef.current = new window.TMap.Map(mapContainerRef.current, {
        center,
        zoom: 12,
        pitch: 0,
        rotation: 0,
        viewMode: "2D",
        mapStyleId: "style1",
      });

      addMarkers();
    } catch (error) {
      console.error("地图初始化失败:", error);
      setLoadError("地图初始化失败");
    }
  };

  const addMarkers = () => {
    if (!window.TMap || !mapInstanceRef.current) return;

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
  };

  if (loadError) {
    return (
      <div className={className}>
        <div className="flex items-center justify-center h-full bg-gray-100 rounded-3xl">
          <div className="text-center">
            <p className="text-red-500 mb-2">⚠️ {loadError}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className || "w-full h-full"}>
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  );
}
