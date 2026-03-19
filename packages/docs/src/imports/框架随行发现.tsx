import svgPaths from "./svg-46lsrdahx5";
import { BaseMapForFrame } from "./BaseMapForFrame";
import { useState, useRef, useEffect } from "react";
import {
  GlobalLeftTab,
  GlobalLeftTabSimplifiedBottomButton,
  GlobalLeftTabSimplifiedItem,
} from "../design-system";
import {
  LocationIcon,
  TimeIcon,
  CallIcon,
  StarFilledIcon,
  StarIcon,
  ArrowRightIcon,
  HeartIcon,
  PoweroffIcon,
} from "tdesign-icons-react";

// 用 Lucide 图标替代 tdesign 中不存在的图标
import { Train, Navigation, ParkingCircle } from "lucide-react";

type PageType = "home" | "detail" | "map";

// 二级导航栏 - 标题组件
function NavTitle({ text = "一级页面标题" }: { text?: string }) {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="标签">
      <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[42px] text-black whitespace-nowrap">
        <p className="leading-[42px]">{text}</p>
      </div>
    </div>
  );
}

// 二级导航栏 - 标题区域
function NavTitleFrame({ text, onBack }: { text?: string; onBack?: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[36px] items-center min-h-px min-w-px relative">
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center justify-center w-[84px] h-[84px] bg-[#eaedf2] rounded-[42px] shrink-0 hover:bg-[#d8dce3] transition-colors"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M20 24L12 16L20 8" stroke="rgba(0,0,0,0.92)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="标题">
        <NavTitle text={text} />
      </div>
    </div>
  );
}

// 二级导航栏 - 按钮组
function NavButtonsFrame() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0">
      <div className="bg-[#eaedf2] content-stretch flex h-[84px] items-center justify-center px-[42px] relative rounded-[42px] shrink-0" data-name="btn">
        <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">
          <p className="leading-[32px]">文本</p>
        </div>
      </div>
      <div className="bg-[#eaedf2] content-stretch flex h-[84px] items-center justify-center px-[42px] relative rounded-[42px] shrink-0" data-name="btn">
        <div className="flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">
          <p className="leading-[32px]">文本</p>
        </div>
      </div>
    </div>
  );
}

// ─── POI详情卡片（带多层事件隔离）────────────────────────────────────────────
//
// 问题根因：腾讯地图 GL JSAPI 会在 document / window 层注册 wheel、touchmove
// 监听器（passive:false），并调用 preventDefault()，导致整个页面内的所有滚动
// 行为（包括与地图无关的浮层卡片）都被阻止。
//
// 解决方案（三重防御）：
//   1. 在卡片容器上用原生 addEventListener 注册冒泡阶段的 stopPropagation()，
//      截断事件冒泡链，使事件无法到达 document 层的地图监听器。
//   2. 在滚动容器上设置 touch-action: pan-y，告知浏览器此区域处理垂直滑动，
//      浏览器原生滚动不经过 JS 事件链。
//   3. overflowY: 'scroll' + -webkit-overflow-scrolling: touch 保证 iOS 惯性滚动。
// ─────────────────────────────────────────────────────────────────────────────
function POIDetailCard({ cardHeight }: { cardHeight: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // 在冒泡阶段拦截所有会被地图SDK消费的事件类型
    const stopBubble = (e: Event) => {
      e.stopPropagation();
    };

    // passive:true → 不阻止浏览器默认滚动行为，仅截断冒泡
    card.addEventListener("wheel",      stopBubble, { passive: true });
    card.addEventListener("touchstart", stopBubble, { passive: true });
    card.addEventListener("touchmove",  stopBubble, { passive: true });
    card.addEventListener("touchend",   stopBubble, { passive: true });
    // 鼠标事件：防止地图SDK响应鼠标拖拽（非passive，确保stopPropagation有效）
    card.addEventListener("mousedown",  stopBubble);
    card.addEventListener("mousemove",  stopBubble);
    card.addEventListener("mouseup",    stopBubble);
    card.addEventListener("click",      stopBubble);

    return () => {
      card.removeEventListener("wheel",      stopBubble);
      card.removeEventListener("touchstart", stopBubble);
      card.removeEventListener("touchmove",  stopBubble);
      card.removeEventListener("touchend",   stopBubble);
      card.removeEventListener("mousedown",  stopBubble);
      card.removeEventListener("mousemove",  stopBubble);
      card.removeEventListener("mouseup",    stopBubble);
      card.removeEventListener("click",      stopBubble);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="absolute left-[48px] top-[48px] w-[580px] bg-white/95 backdrop-blur-xl rounded-[24px] shadow-2xl z-20"
      style={{
        height: cardHeight,
        display: "flex",
        flexDirection: "column",
        pointerEvents: "auto",
      }}
    >
      {/*
        滚动容器关键样式：
        - overflowY: scroll     → 始终显示滚动条，明确启用滚动
        - minHeight: 0          → flex子元素能正确收缩
        - touchAction: pan-y    → 浏览器原生垂直滚动，绕过JS事件
        - WebkitOverflowScrolling: touch → iOS惯性滚动
      */}
      <div
        style={{
          flex: "1 1 0",
          overflowY: "scroll",
          overflowX: "hidden",
          minHeight: 0,
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-y",
        }}
      >
        <div className="p-[48px]">
          {/* POI头图 */}
          <div className="w-full h-[280px] bg-gradient-to-br from-[#4a90e2] to-[#7b4fd4] rounded-[18px] mb-[36px] flex items-center justify-center overflow-hidden relative">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='g' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.15)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/svg%3E")`,
              }}
            />
            <div className="text-[96px] relative z-10">🏢</div>
          </div>

          {/* POI基本信息 */}
          <div className="mb-[36px]">
            <h2
              className="mb-[18px] text-[42px] text-[rgba(0,0,0,0.92)]"
              style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700 }}
            >
              华贸中心
            </h2>
            <div className="flex items-center gap-[12px] mb-[24px]">
              <div className="px-[18px] py-[6px] bg-[rgba(0,82,217,0.08)] rounded-[24px]">
                <span
                  className="text-[26px] text-[#0052d9]"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 500 }}
                >
                  商业综合体
                </span>
              </div>
              <div className="px-[18px] py-[6px] bg-[rgba(0,168,84,0.1)] rounded-[24px]">
                <span
                  className="text-[26px] text-[#00a854]"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 500 }}
                >
                  营业中
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[12px] text-[rgba(0,0,0,0.6)] mb-[18px]">
              <LocationIcon size="28px" className="shrink-0" />
              <span
                className="text-[28px] text-[rgba(0,0,0,0.6)]"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 400 }}
              >
                北京市朝阳区建国路79号
              </span>
            </div>
            <div className="flex items-center gap-[12px] text-[rgba(0,0,0,0.6)]">
              <TimeIcon size="28px" className="shrink-0" />
              <span
                className="text-[28px] text-[rgba(0,0,0,0.6)]"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 400 }}
              >
                距离您 500m
              </span>
            </div>
          </div>

          {/* 分隔线 */}
          <div className="w-full h-[1px] bg-[rgba(0,0,0,0.06)] mb-[36px]" />

          {/* 详细信息 */}
          <div className="space-y-[30px]">
            <div>
              <h3
                className="text-[32px] text-[rgba(0,0,0,0.92)] mb-[12px]"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700 }}
              >
                营业时间
              </h3>
              <p
                className="text-[28px] text-[rgba(0,0,0,0.6)]"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 400 }}
              >
                周一至周日 10:00 - 22:00
              </p>
            </div>

            <div>
              <h3
                className="text-[32px] text-[rgba(0,0,0,0.92)] mb-[12px]"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700 }}
              >
                联系电话
              </h3>
              <p
                className="text-[28px] text-[#0052d9]"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 500 }}
              >
                <CallIcon size="26px" style={{ verticalAlign: "middle", marginRight: 8 }} />
                010-8888-8888
              </p>
            </div>

            <div>
              <h3
                className="text-[32px] text-[rgba(0,0,0,0.92)] mb-[12px]"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700 }}
              >
                设施服务
              </h3>
              <div className="flex flex-wrap gap-[12px]">
                {["停车场", "充电桩", "WiFi", "无障碍通道", "母婴室"].map((facility) => (
                  <div key={facility} className="px-[18px] py-[8px] bg-[#f6f7fa] rounded-[18px]">
                    <span
                      className="text-[26px] text-[rgba(0,0,0,0.72)]"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 400 }}
                    >
                      {facility}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3
                className="text-[32px] text-[rgba(0,0,0,0.92)] mb-[12px]"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700 }}
              >
                简介
              </h3>
              <p
                className="text-[28px] text-[rgba(0,0,0,0.6)]"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 400, lineHeight: "42px" }}
              >
                华贸中心位于北京CBD核心区域，是集购物、餐饮、娱乐、办公于一体的大型商业综合体。建筑面积超过30万平方米，汇聚了众多国际知名品牌和特色餐饮。
              </p>
            </div>

            <div>
              <h3
                className="text-[32px] text-[rgba(0,0,0,0.92)] mb-[12px]"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700 }}
              >
                周边推荐
              </h3>
              <div className="space-y-[6px]">
                {[
                  { name: "国贸商城", distance: "300m", type: "购物中心" },
                  { name: "中国尊",   distance: "500m", type: "地标建筑" },
                  { name: "银泰中心", distance: "800m", type: "购物中心" },
                  { name: "SKP商场",  distance: "1.2km", type: "奢侈品购物" },
                  { name: "朝阳公园", distance: "1.5km", type: "城市公园" },
                  { name: "三里屯太古里", distance: "2km", type: "时尚商圈" },
                ].map((place, idx) => (
                  <div key={idx} className="flex items-center justify-between px-[18px] py-[18px] bg-[#f6f7fa] rounded-[18px]">
                    <div>
                      <p
                        className="text-[28px] text-[rgba(0,0,0,0.92)]"
                        style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 500 }}
                      >
                        {place.name}
                      </p>
                      <p
                        className="text-[24px] text-[rgba(0,0,0,0.4)] mt-[4px]"
                        style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 400 }}
                      >
                        {place.type}
                      </p>
                    </div>
                    <span
                      className="text-[26px] text-[#0052d9]"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 500 }}
                    >
                      {place.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3
                className="text-[32px] text-[rgba(0,0,0,0.92)] mb-[12px]"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700 }}
              >
                用户评价
              </h3>
              <div className="space-y-[12px]">
                {[
                  { user: "张先生", rating: 5, comment: "环境很好，购物体验很棒！", time: "2天前" },
                  { user: "李女士", rating: 5, comment: "品牌齐全，停车方便，经常来这里。", time: "3天前" },
                  { user: "王先生", rating: 4, comment: "地理位置优越，就是周末人比较多。", time: "1周前" },
                ].map((review, idx) => (
                  <div key={idx} className="px-[18px] py-[18px] bg-[#f6f7fa] rounded-[18px]">
                    <div className="flex items-center justify-between mb-[8px]">
                      <span
                        className="text-[28px] text-[rgba(0,0,0,0.92)]"
                        style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 500 }}
                      >
                        {review.user}
                      </span>
                      <span
                        className="text-[24px] text-[rgba(0,0,0,0.36)]"
                        style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 400 }}
                      >
                        {review.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-[4px] mb-[8px]">
                      {[...Array(5)].map((_, i) => (
                        i < review.rating
                          ? <StarFilledIcon key={i} size="22px" style={{ color: "#faad14" }} />
                          : <StarIcon key={i} size="22px" style={{ color: "rgba(0,0,0,0.15)" }} />
                      ))}
                    </div>
                    <p
                      className="text-[26px] text-[rgba(0,0,0,0.6)]"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 400, lineHeight: "36px" }}
                    >
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3
                className="text-[32px] text-[rgba(0,0,0,0.92)] mb-[12px]"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700 }}
              >
                交通信息
              </h3>
              <div className="space-y-[6px]">
                <div className="flex items-start gap-[18px] px-[18px] py-[18px] bg-[rgba(0,82,217,0.06)] rounded-[18px]">
                  <Train size={28} style={{ color: "#0052d9", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p
                      className="text-[28px] text-[rgba(0,0,0,0.92)] mb-[4px]"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 500 }}
                    >
                      地铁
                    </p>
                    <p
                      className="text-[24px] text-[rgba(0,0,0,0.6)]"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 400 }}
                    >
                      1号线/10号线 国贸站 C口出 步行200米
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[18px] px-[18px] py-[18px] bg-[rgba(0,168,84,0.06)] rounded-[18px]">
                  <Navigation size={28} style={{ color: "#00a854", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p
                      className="text-[28px] text-[rgba(0,0,0,0.92)] mb-[4px]"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 500 }}
                    >
                      公交
                    </p>
                    <p
                      className="text-[24px] text-[rgba(0,0,0,0.6)]"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 400 }}
                    >
                      28路、43路、120路 建国路站下车即到
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[18px] px-[18px] py-[18px] bg-[rgba(0,0,0,0.03)] rounded-[18px]">
                  <ParkingCircle size={28} style={{ color: "rgba(0,0,0,0.6)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p
                      className="text-[28px] text-[rgba(0,0,0,0.92)] mb-[4px]"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 500 }}
                    >
                      停车场
                    </p>
                    <p
                      className="text-[24px] text-[rgba(0,0,0,0.6)]"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 400 }}
                    >
                      地下停车场共3层，1200个车位
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 底部操作按钮 */}
          <div className="flex gap-[12px] mt-[42px]">
            <button
              className="flex-1 bg-[#0052d9] text-white py-[22px] rounded-[42px] hover:bg-[#0041b0] transition-colors flex items-center justify-center gap-[10px]"
              style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 500, fontSize: "28px" }}
            >
              <Navigation size={28} />
              开始导航
            </button>
            <button
              className="flex-1 bg-[#eaedf2] text-[rgba(0,0,0,0.92)] py-[22px] rounded-[42px] hover:bg-[#d8dce3] transition-colors flex items-center justify-center gap-[10px]"
              style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 500, fontSize: "28px" }}
            >
              <StarIcon size="28px" />
              收藏
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 内容区域（包含二级导航栏）
function Frame1({
  currentPage,
  onNavigateDetail,
  onNavigateMap,
  onBack,
}: {
  currentPage: PageType;
  onNavigateDetail: () => void;
  onNavigateMap: () => void;
  onBack: () => void;
}) {
  const getPageTitle = () => {
    switch (currentPage) {
      case "detail": return "内容详情页";
      case "map":    return "地图导航页";
      default:       return "一级页面标题";
    }
  };

  return (
    <div className="absolute bg-[#f7f8fa] h-[1032px] left-[144px] rounded-[42px] top-[24px] w-[1752px] overflow-hidden">
      {/* 二级文字导航栏 */}
      <div
        className="absolute content-stretch flex gap-[90px] items-center left-0 overflow-clip p-[24px] rounded-[18px] top-0 w-[1752px] z-10"
        data-name="二级文字导航栏-全页面"
      >
        <NavTitleFrame
          text={getPageTitle()}
          onBack={currentPage !== "home" ? onBack : undefined}
        />
        <NavButtonsFrame />
      </div>

      {/* 内容区域 */}
      <div className="absolute top-[132px] left-0 w-full h-[900px] px-[24px]">
        {currentPage === "home" ? (
          // 一级页面内容 - 两个触发区域
          <div className="w-full h-full flex gap-[24px]">
            {/* 左侧触发区 - 进入内容详情页 */}
            <button
              onClick={onNavigateDetail}
              className="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 rounded-[24px] flex flex-col items-center justify-center hover:from-blue-100 hover:to-purple-100 transition-all group cursor-pointer border-2 border-blue-200 hover:border-blue-300"
            >
              <div className="w-[120px] h-[120px] bg-white rounded-[24px] flex items-center justify-center mb-[32px] shadow-sm group-hover:shadow-md transition-shadow">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <rect x="12" y="12" width="40" height="40" rx="4" stroke="#3B82F6" strokeWidth="3" fill="none"/>
                  <line x1="20" y1="24" x2="44" y2="24" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="20" y1="32" x2="36" y2="32" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="20" y1="40" x2="40" y2="40" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="text-[32px] font-medium text-gray-700 mb-[12px] group-hover:text-gray-900 transition-colors">内容详情页</div>
              <div className="text-[20px] text-gray-500 group-hover:text-gray-600 transition-colors">卡片网格布局</div>
            </button>

            {/* 右侧触发区 - 进入地图页面 */}
            <button
              onClick={onNavigateMap}
              className="flex-1 bg-gradient-to-br from-green-50 to-teal-50 rounded-[24px] flex flex-col items-center justify-center hover:from-green-100 hover:to-teal-100 transition-all group cursor-pointer border-2 border-green-200 hover:border-green-300"
            >
              <div className="w-[120px] h-[120px] bg-white rounded-[24px] flex items-center justify-center mb-[32px] shadow-sm group-hover:shadow-md transition-shadow">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <path d="M32 16C26.48 16 22 20.48 22 26C22 33 32 46 32 46C32 46 42 33 42 26C42 20.48 37.52 16 32 16Z" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="32" cy="26" r="3" stroke="#10B981" strokeWidth="3" fill="none"/>
                  <path d="M12 32L20 28V44L12 48V32Z" stroke="#10B981" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                  <path d="M44 28L52 32V48L44 44V28Z" stroke="#10B981" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-[32px] font-medium text-gray-700 mb-[12px] group-hover:text-gray-900 transition-colors">地图导航页</div>
              <div className="text-[20px] text-gray-500 group-hover:text-gray-600 transition-colors">地图打底布局</div>
            </button>
          </div>
        ) : currentPage === "detail" ? (
          // 内容详情二级页面
          <div className="w-full h-full bg-white/60 rounded-[24px] p-[48px] overflow-auto">
            <div className="grid grid-cols-3 gap-[24px]">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-[24px] p-[32px] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-full h-[200px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-[18px] mb-[24px] flex items-center justify-center">
                    <span className="text-[64px] font-bold text-white/80">{item}</span>
                  </div>
                  <h3 className="text-[28px] font-medium text-gray-900 mb-[12px]">卡片标题 {item}</h3>
                  <p className="text-[20px] text-gray-500 leading-[32px]">这是二级页面的示例内容卡片</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // 地图二级页面 - POI详情页
          <div className="w-full h-full relative">
            {/* 全屏地图背景 */}
            <div className="absolute inset-0 rounded-[24px] overflow-hidden">
              <BaseMapForFrame />
            </div>

            {/* 地图上的POI标记 */}
            <div className="absolute top-[280px] right-[400px] flex flex-col items-center z-10 pointer-events-none">
              <div className="w-[60px] h-[60px] bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 8C13.79 8 12 9.79 12 12C12 15 16 20 16 20C16 20 20 15 20 12C20 9.79 18.21 8 16 8Z" fill="white"/>
                </svg>
              </div>
            </div>

            {/* POI详情卡片 —— 独立组件，内部做事件隔离 */}
            <POIDetailCard cardHeight="calc(100% - 96px)" />

            {/* 地图控制按钮 */}
            <div className="absolute top-[48px] right-[48px] flex flex-col gap-[12px] z-20">
              <button className="w-[72px] h-[72px] bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                <span className="text-[32px]">+</span>
              </button>
              <button className="w-[72px] h-[72px] bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                <span className="text-[32px]">−</span>
              </button>
            </div>

            {/* 当前位置按钮 */}
            <div className="absolute bottom-[48px] right-[48px] z-20">
              <button className="w-[72px] h-[72px] bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="4" fill="#3B82F6"/>
                  <circle cx="16" cy="16" r="10" stroke="#3B82F6" strokeWidth="2" fill="none"/>
                  <path d="M16 2V6M16 26V30M30 16H26M6 16H2" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CommonIconExit({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative shrink-0 size-[42px]"} data-name="Common/icon_exit">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[29.75px] left-[calc(50%-0.38px)] top-[calc(50%-0.13px)] w-[29.238px]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.2378 29.75">
          <g id="Union">
            <path d={svgPaths.p199fd500} fill="var(--fill-0, #444C5C)" style={{ fill: "color(display-p3 0.2667 0.2980 0.3608)", fillOpacity: "1" }} />
            <path d={svgPaths.p2de52500} fill="var(--fill-0, #444C5C)" style={{ fill: "color(display-p3 0.2667 0.2980 0.3608)", fillOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DiscoveryLikeIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[42px]" data-name="Common/icon_like">
      <div className="absolute inset-[14.58%_10.42%_13.75%_10.42%]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.2498 30.1014">
          <path clipRule="evenodd" d={svgPaths.p1b3ff6c0} fill="var(--fill-0, #444C5C)" fillRule="evenodd" id="Union" style={{ fill: "color(display-p3 0.2667 0.2980 0.3608)", fillOpacity: "1" }} />
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[32.32px] left-[5px] top-[5px] w-[33.5px]">
      <div className="absolute inset-[-4.64%_0_-3.65%_-4.48%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 34.9999">
          <g id="Group 2036084730">
            <path d={svgPaths.p34e58680} id="Ellipse 23941" stroke="var(--stroke-0, white)" strokeWidth="3.49999" style={{ stroke: "white", strokeOpacity: "1" }} />
            <path d={svgPaths.p266b2600} id="Ellipse 23942" stroke="var(--stroke-0, white)" strokeWidth="2.99999" style={{ stroke: "white", strokeOpacity: "1" }} />
            <path d={svgPaths.p1b0ca880} fill="var(--fill-0, white)" id="Intersect" style={{ fill: "white", fillOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame3({ className }: { className?: string }) {
  return (
    <div className={className || "relative shrink-0 size-[42px]"}>
      <Group />
    </div>
  );
}

function DiscoveryLeftTab() {
  return (
    <GlobalLeftTab
      variant="simplified"
      className="absolute left-[24px] top-[24px] h-[1032px]"
      bottomContent={
        <GlobalLeftTabSimplifiedBottomButton
          icon={<PoweroffIcon className="text-[30px]" />}
          onClick={() => undefined}
        />
      }
    >
      <GlobalLeftTabSimplifiedItem active icon={<LocationIcon className="text-[36px]" />} />
      <GlobalLeftTabSimplifiedItem icon={<HeartIcon className="text-[36px]" />} />
    </GlobalLeftTab>
  );
}

export default function Component() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  return (
    <div className="bg-[#eaedf2] overflow-clip relative rounded-[60px] size-full" data-name="框架-随行发现">
      <Frame1
        currentPage={currentPage}
        onNavigateDetail={() => setCurrentPage("detail")}
        onNavigateMap={() => setCurrentPage("map")}
        onBack={() => setCurrentPage("home")}
      />
      <DiscoveryLeftTab />
    </div>
  );
}