import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { RADIUS, SHADOW, SPACING, useTheme } from "@tai-design/components";
import { DocPageHeader } from "../DocComponents";
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
  const { tokens } = useTheme();
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

  /* ── 排版 shorthand ── */
  const typoTitlePage = tokens.typography.title.page;
  const typoTitleSection = tokens.typography.title.section;
  const typoTitleCard = tokens.typography.title.card;
  const typoBodySecondary = tokens.typography.body.secondary;
  const typoBodyPrimary = tokens.typography.body.primary;
  const typoMetaCaption = tokens.typography.meta.caption;
  const typoLabelSmall = tokens.typography.label.buttonSmall;

  const chipStyle: CSSProperties = {
    display: "inline-block",
    padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`,
    marginBottom: SPACING["3"],
    borderRadius: 999,
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.container,
    color: tokens.textColor.secondary,
    fontSize: typoMetaCaption.fontSize,
    fontWeight: typoMetaCaption.fontWeight,
    lineHeight: typoMetaCaption.lineHeight,
  };

  const introPanelStyle: CSSProperties = {
    padding: SPACING["4"],
    marginBottom: SPACING["5"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.functionalColor.info.main}`,
    background: `linear-gradient(to right, ${tokens.functionalColor.info.light}, ${tokens.bgColor.container})`,
  };

  const mapShellStyle: CSSProperties = {
    overflow: "hidden",
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.elevated,
    boxShadow: SHADOW.xl,
  };

  const controlBarStyle: CSSProperties = {
    padding: SPACING["4"],
    borderTop: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.container,
  };

  const featureCardStyle: CSSProperties = {
    padding: SPACING["4"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.elevated,
  };

  const iconShellStyle: CSSProperties = {
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING["4"],
    borderRadius: RADIUS.xl,
    backgroundColor: tokens.bgColor.container,
    color: tokens.textColor.primary,
  };

  const scenarioPanelStyle: CSSProperties = {
    padding: SPACING["4"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.brand}`,
    background: `linear-gradient(to right, ${tokens.bgColor.brandLight}, ${tokens.bgColor.container})`,
  };

  const getControlButtonStyle = (active = false, primary = false): CSSProperties => {
    if (primary) {
      return {
        padding: `${SPACING["2"]}px ${SPACING["3"]}px`,
        borderRadius: RADIUS.xl,
        border: `1px solid ${tokens.textColor.primary}`,
        backgroundColor: tokens.textColor.primary,
        color: tokens.textColor.anti,
        fontSize: typoMetaCaption.fontSize,
        fontWeight: 600,
        transition: "all 150ms ease",
        cursor: "pointer",
      };
    }

    return {
      padding: `${SPACING["2"]}px ${SPACING["3"]}px`,
      borderRadius: RADIUS.xl,
      border: `1px solid ${active ? tokens.borderColor.focus : tokens.borderColor.level1}`,
      backgroundColor: active ? tokens.bgColor.brandLight : tokens.bgColor.secondaryContainer,
      color: active ? tokens.textColor.primary : tokens.textColor.secondary,
      fontSize: typoMetaCaption.fontSize,
      fontWeight: 500,
      transition: "all 150ms ease",
      cursor: "pointer",
    };
  };

  /* ── Token 表格 ── */
  const TOKEN_TABLE: { part: string; path: string; desc: string }[] = [
    { part: "地图壳层背景", path: "bgColor.elevated", desc: "地图外壳容器" },
    { part: "控制栏背景", path: "bgColor.container", desc: "缩放/视角控制区" },
    { part: "特性卡片背景", path: "bgColor.elevated", desc: "技术特性展示卡片" },
    { part: "图标容器背景", path: "bgColor.container", desc: "特性卡片前缀图标底色" },
    { part: "品牌渐变背景", path: "bgColor.brandLight", desc: "车机场景面板渐变起始色" },
    { part: "信息渐变背景", path: "functionalColor.info.light", desc: "使用说明面板渐变起始色" },
    { part: "主要文字", path: "textColor.primary", desc: "标题、图标色" },
    { part: "次要文字", path: "textColor.secondary", desc: "描述、说明文案" },
    { part: "反色文字", path: "textColor.anti", desc: "主按钮文字" },
    { part: "默认边框", path: "borderColor.level1", desc: "面板外边框、分割线" },
    { part: "聚焦边框", path: "borderColor.focus", desc: "当前激活的视角按钮" },
    { part: "品牌边框", path: "borderColor.brand", desc: "车机场景面板" },
    { part: "错误提示", path: "functionalColor.error.main", desc: "地图加载失败文字" },
    { part: "错误背景", path: "functionalColor.error.light", desc: "错误提示面板" },
  ];

  const thStyle: CSSProperties = {
    padding: `${SPACING["2"]}px ${SPACING["3"]}px`,
    textAlign: "left",
    fontSize: typoMetaCaption.fontSize,
    fontWeight: 600,
    lineHeight: typoMetaCaption.lineHeight,
    color: tokens.textColor.secondary,
    borderBottom: `1px solid ${tokens.borderColor.level1}`,
  };

  const tdStyle: CSSProperties = {
    padding: `${SPACING["2"]}px ${SPACING["3"]}px`,
    fontSize: typoMetaCaption.fontSize,
    fontWeight: typoMetaCaption.fontWeight,
    lineHeight: typoMetaCaption.lineHeight,
    color: tokens.textColor.primary,
    borderBottom: `1px solid ${tokens.borderColor.level1}`,
  };

  return (
    <div style={{ paddingBottom: SPACING["6"] * 2 }}>
      {/* ── 头部 ── */}
      <DocPageHeader category="Components / 组件" title="底图组件" description="基于腾讯地图 API 的车机端底图展示组件。" />

      {/* ── 使用说明 ── */}
      <div style={introPanelStyle}>
        <h3 style={{ fontSize: typoBodySecondary.fontSize, fontWeight: 600, lineHeight: typoBodySecondary.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["2"] }}>
          💡 使用说明
        </h3>
        <ul style={{ fontSize: typoMetaCaption.fontSize, lineHeight: 1.8, color: tokens.textColor.secondary }}>
          <li>• 集成腾讯地图 JavaScript API GL，支持矢量地图渲染。</li>
          <li>• 页面壳层统一使用主题 token，保证文档站深浅模式表现一致。</li>
          <li>• 支持 2D / 3D 视角切换，适合不同车机场景使用。</li>
          <li>• API Key：{tencentMapKeyDisplay}</li>
          <li>• 未配置时请在 <code>packages/docs/.env.local</code> 中设置 <code>VITE_TENCENT_MAP_KEY</code>。</li>
        </ul>
      </div>

      {/* ── 地图展示 ── */}
      <section style={{ marginBottom: SPACING["4"] }}>
        <h2 style={{ fontSize: typoTitleSection.fontSize, fontWeight: typoTitleSection.fontWeight, lineHeight: typoTitleSection.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["2"] }}>
          地图展示
        </h2>

        {loadError ? (
          <div
            style={{
              padding: SPACING["6"] + SPACING["2"],
              borderRadius: RADIUS["2xl"],
              border: `1px solid ${tokens.functionalColor.error.main}`,
              backgroundColor: tokens.functionalColor.error.light,
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: typoBodySecondary.fontSize, fontWeight: typoBodySecondary.fontWeight, color: tokens.functionalColor.error.main }}>
              ⚠️ {loadError}
            </p>
          </div>
        ) : (
          <div style={mapShellStyle}>
            <div ref={mapContainerRef} style={{ width: "100%", height: 600 }} />

            <div style={controlBarStyle}>
              <div style={{ display: "flex", alignItems: "center", gap: SPACING["3"], flexWrap: "wrap" }}>
                <div style={{ fontSize: typoMetaCaption.fontSize, fontWeight: 500, color: tokens.textColor.secondary }}>
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
      </section>

      {/* ── 技术特性 ── */}
      <section style={{ marginBottom: SPACING["4"] }}>
        <h2 style={{ fontSize: typoTitleSection.fontSize, fontWeight: typoTitleSection.fontWeight, lineHeight: typoTitleSection.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["2"] }}>
          技术特性
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: SPACING["3"] }}>
          {FEATURE_ITEMS.map((item) => (
            <div key={item.title} style={featureCardStyle}>
              <div style={iconShellStyle}>
                <svg style={{ width: 24, height: 24 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {item.icon}
                </svg>
              </div>
              <h3 style={{ fontSize: typoBodySecondary.fontSize, fontWeight: 600, lineHeight: typoBodySecondary.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["2"] }}>
                {item.title}
              </h3>
              <p style={{ fontSize: typoMetaCaption.fontSize, fontWeight: typoMetaCaption.fontWeight, lineHeight: 1.6, color: tokens.textColor.secondary }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 车机场景 ── */}
      <section style={{ marginBottom: SPACING["6"] }}>
        <div style={scenarioPanelStyle}>
          <h3 style={{ fontSize: typoLabelSmall.fontSize, fontWeight: 600, lineHeight: typoLabelSmall.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["3"] }}>
            🚗 车机场景
          </h3>
          <ul style={{ fontSize: typoMetaCaption.fontSize, lineHeight: 1.8, color: tokens.textColor.secondary }}>
            {SCENARIO_ITEMS.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 🎨 Token 使用清单 ── */}
      <section>
        <h2 style={{ fontSize: typoTitleSection.fontSize, fontWeight: typoTitleSection.fontWeight, lineHeight: typoTitleSection.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>
          🎨 Token 使用清单
        </h2>
        <div style={{ padding: SPACING["6"], borderRadius: RADIUS["2xl"], border: `1px solid ${tokens.borderColor.level1}`, backgroundColor: tokens.bgColor.elevated }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={thStyle}>部位</th>
                <th style={thStyle}>Token 路径</th>
                <th style={thStyle}>用途说明</th>
              </tr>
            </thead>
            <tbody>
              {TOKEN_TABLE.map((row) => (
                <tr key={row.part}>
                  <td style={tdStyle}>{row.part}</td>
                  <td style={{ ...tdStyle, fontFamily: "monospace" }}>
                    <code style={{ padding: `0 ${SPACING["2"] / 2}px`, borderRadius: 6, backgroundColor: tokens.bgColor.secondaryContainer, color: tokens.textColor.brand }}>
                      {`tokens.${row.path}`}
                    </code>
                  </td>
                  <td style={{ ...tdStyle, color: tokens.textColor.secondary }}>{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: SPACING["4"], fontSize: typoMetaCaption.fontSize, lineHeight: 1.8, color: tokens.textColor.tertiary }}>
            <p>补充说明：</p>
            <ul style={{ listStyleType: "disc", paddingLeft: SPACING["4"] }}>
              <li><strong>排版 Token</strong>：标题使用 <code>tokens.typography.title.page</code> (42px/600/1.2)；正文使用 <code>tokens.typography.body.secondary</code> (26px/400/1.5)</li>
              <li><strong>布局常量</strong>：面板内边距 24px、卡片间距 18px、图标容器 48×48px（均为 6 倍数）</li>
              <li><strong>阴影</strong>：地图壳层使用统一投影（自然语言描述，不暴露常量名）</li>
              <li><strong>圆角</strong>：面板 30px、按钮/图标容器 24px</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
