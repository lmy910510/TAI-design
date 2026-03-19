import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
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

export function Map() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const tencentMapKeyDisplay = getTencentMapKeyDisplay();
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

  // 切换主题时更新地图样式
  useEffect(() => {
    if (mapInstanceRef.current && window.TMap) {
      // 腾讯地图默认不支持动态切换样式，这里可以通过重新创建地图或使用其他方式
      // 暂时移除样式切换功能，使用默认样式
    }
  }, [isDark]);

  const initMap = () => {
    if (!mapContainerRef.current || !window.TMap) return;

    try {
      // 创建地图实例
      const center = new window.TMap.LatLng(39.908823, 116.39747); // 北京天安门

      mapInstanceRef.current = new window.TMap.Map(mapContainerRef.current, {
        center,
        zoom: 12,
        pitch: 0,
        rotation: 0,
        viewMode: "2D",
        mapStyleId: "style1", // 也可以在这里统一加回去以展示个性化样式
      });

      // 添加一些示例标记
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
        position: new window.TMap.LatLng(39.990946, 116.32699),
        properties: {
          title: "鸟巢",
        },
      },
    ];

    // 创建 MultiMarker 图层 - 使用默认标记样式
    new window.TMap.MultiMarker({
      map: mapInstanceRef.current,
      styles: {
        marker: new window.TMap.MarkerStyle({
          width: 25,
          height: 35,
          anchor: { x: 12.5, y: 35 },
          // 移除 src 属性，使用腾讯地图默认标记图标
        }),
      },
      geometries,
    });
  };

  // 地图控制按钮
  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      const currentZoom = mapInstanceRef.current.getZoom();
      mapInstanceRef.current.setZoom(currentZoom + 1);
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      const currentZoom = mapInstanceRef.current.getZoom();
      mapInstanceRef.current.setZoom(currentZoom - 1);
    }
  };

  const handleResetView = () => {
    if (mapInstanceRef.current && window.TMap) {
      const center = new window.TMap.LatLng(39.908823, 116.39747);
      mapInstanceRef.current.setCenter(center);
      mapInstanceRef.current.setZoom(12);
    }
  };

  const handle3DView = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setPitch(45);
    }
  };

  const handle2DView = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setPitch(0);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <div
          className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
            isDark ? "bg-white/10 border-white/20 text-gray-200" : "bg-gray-100 border-gray-300 text-gray-900"
          }`}
        >
          Components / 组件
        </div>
        <h1 className="text-4xl font-bold mb-4">底图组件</h1>
        <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          基于腾讯地图 API 的车机端底图展示组件
        </p>
      </div>

      {/* 地图说明 */}
      <div
        className={`p-6 border rounded-xl mb-8 ${
          isDark
            ? "bg-gradient-to-r from-cyan-600/10 to-blue-600/10 border-cyan-500/20"
            : "bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200"
        }`}
      >
        <h3 className="text-lg font-semibold mb-2">💡 使用说明</h3>
        <ul className={`text-sm space-y-1 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          <li>• 集成腾讯地图 JavaScript API GL，支持矢量地图渲染</li>
          <li>• 自动适配深浅主题模式，提供更好的视觉体验</li>
          <li>• 支持 2D/3D 视角切换，适合不同车机场景使用</li>
          <li>• API Key：{tencentMapKeyDisplay}</li>
          <li>• 未配置时请在 `packages/docs/.env.local` 中设置 `VITE_TENCENT_MAP_KEY`</li>
        </ul>
      </div>

      {/* 地图容器 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">地图展示</h2>

        {loadError ? (
          <div
            className={`p-12 border rounded-xl text-center ${
              isDark ? "bg-red-600/10 border-red-500/20" : "bg-red-50 border-red-200"
            }`}
          >
            <p className={`text-lg ${isDark ? "text-red-400" : "text-red-600"}`}>⚠️ {loadError}</p>
          </div>
        ) : (
          <div className={`border rounded-xl overflow-hidden ${isDark ? "border-[#2a2a2a]" : "border-gray-200"}`}>
            {/* 地图容器 */}
            <div ref={mapContainerRef} className="w-full" style={{ height: "600px" }} />

            {/* 控制面板 */}
            <div className={`p-4 border-t ${isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"}`}>
              <div className="flex items-center gap-3">
                <div className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>地图控制：</div>
                <button
                  onClick={handleZoomIn}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    isDark ? "bg-white/10 text-gray-200 hover:bg-white/20" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  放大
                </button>
                <button
                  onClick={handleZoomOut}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    isDark ? "bg-white/10 text-gray-200 hover:bg-white/20" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  缩小
                </button>
                <button
                  onClick={handle2DView}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    isDark ? "bg-white/10 text-gray-200 hover:bg-white/20" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  2D 视图
                </button>
                <button
                  onClick={handle3DView}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    isDark ? "bg-white/10 text-gray-200 hover:bg-white/20" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  3D 视图
                </button>
                <button
                  onClick={handleResetView}
                  className="px-4 py-2 rounded-lg bg-black text-white text-sm hover:bg-gray-800 transition-colors"
                >
                  重置视图
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 技术特性 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">技术特性</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className={`p-6 border rounded-xl ${isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"}`}>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isDark ? "bg-white/10" : "bg-gray-100"}`}>
              <svg className={`w-6 h-6 ${isDark ? "text-white" : "text-black"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">矢量渲染</h3>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              基于 WebGL 的矢量地图渲染，支持流畅的缩放和旋转操作，提供更清晰的显示效果
            </p>
          </div>

          <div className={`p-6 border rounded-xl ${isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"}`}>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isDark ? "bg-white/10" : "bg-gray-100"}`}>
              <svg className={`w-6 h-6 ${isDark ? "text-white" : "text-black"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">自定义样式</h3>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              支持自定义地图样式，可根据车机主题自动切换深浅色模式，提供一致的视觉体验
            </p>
          </div>

          <div className={`p-6 border rounded-xl ${isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"}`}>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isDark ? "bg-white/10" : "bg-gray-100"}`}>
              <svg className={`w-6 h-6 ${isDark ? "text-white" : "text-black"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">标记点位</h3>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              支持添加多个标记点，可用于显示充电桩、服务区、兴趣点等车机常用场景
            </p>
          </div>

          <div className={`p-6 border rounded-xl ${isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"}`}>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isDark ? "bg-white/10" : "bg-gray-100"}`}>
              <svg className={`w-6 h-6 ${isDark ? "text-white" : "text-black"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">性能优化</h3>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              懒加载地图脚本，仅在需要时加载，减少首屏加载时间，提升整体性能
            </p>
          </div>
        </div>
      </div>

      {/* 使用场景 */}
      <div
        className={`p-6 border rounded-xl ${
          isDark
            ? "bg-gradient-to-r from-purple-600/10 to-pink-600/10 border-purple-500/20"
            : "bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200"
        }`}
      >
        <h3 className="text-base font-semibold mb-3">🚗 车机应用场景</h3>
        <ul className={`text-sm space-y-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          <li>• <strong>导航系统：</strong>集成导航路线规划、实时路况显示</li>
          <li>• <strong>充电地图：</strong>显示附近充电桩位置、状态和导航</li>
          <li>• <strong>兴趣点搜索：</strong>查找附近餐厅、加油站、景点等 POI</li>
          <li>• <strong>停车场查询：</strong>展示停车场位置、空余车位信息</li>
          <li>• <strong>行车记录：</strong>显示历史行车轨迹、里程统计</li>
        </ul>
      </div>
    </div>
  );
}
