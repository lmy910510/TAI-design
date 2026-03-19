import { useState } from "react";
import {
  ArrowRightIcon,
  LocationIcon,
  PoweroffIcon,
  ShopIcon,
  TimeIcon,
  ViewListIcon,
} from "tdesign-icons-react";
import {
  GlobalLeftTab,
  GlobalLeftTabSimplifiedBottomButton,
  GlobalLeftTabSimplifiedItem,
} from "../design-system";

type MarketTab = "menu" | "orders";
type MarketOrderStatus = "制作中" | "待取餐" | "配送中";

interface MarketOrder {
  id: string;
  title: string;
  store: string;
  status: MarketOrderStatus;
  eta: string;
  code: string;
  detail: string;
  action: string;
}

const MARKET_ORDERS: MarketOrder[] = [
  {
    id: "0836",
    title: "鲜食轻卡双人餐 × 2",
    store: "随行轻食站",
    status: "制作中",
    eta: "预计 12:18 完成出餐",
    code: "取餐码 0836",
    detail: "3 号柜台 · 步行约 180m",
    action: "查看进度",
  },
  {
    id: "1942",
    title: "冰美式 + 可颂套餐 × 1",
    store: "TAI Coffee",
    status: "待取餐",
    eta: "请在 8 分钟内前往取餐",
    code: "取餐码 1942",
    detail: "1 号窗口 · 距离约 96m",
    action: "立即取餐",
  },
  {
    id: "2601",
    title: "能量零食包 × 1",
    store: "旅途补给仓",
    status: "配送中",
    eta: "预计 12:26 送达 A 区休息位",
    code: "骑手已取货",
    detail: "配送中 · 当前位置距你约 240m",
    action: "查看配送",
  },
];

const MARKET_SUMMARY = [
  { label: "进行中", value: "3", tone: "#1A1D28", bg: "rgba(26,29,40,0.06)" },
  { label: "待取餐", value: "1", tone: "#00B578", bg: "rgba(0,181,120,0.12)" },
  { label: "今日完成", value: "12", tone: "#FA6800", bg: "rgba(250,104,0,0.12)" },
  { label: "准时率", value: "98%", tone: "#4C86F9", bg: "rgba(76,134,249,0.12)" },
] as const;

const MARKET_SHORTCUTS = [
  { title: "订单提醒", desc: "查看即将出餐与待取餐订单" },
  { title: "开票记录", desc: "集中管理本周消费订单" },
  { title: "售后入口", desc: "申请退款、联系商家与客服" },
] as const;

const MARKET_REMINDERS = [
  { time: "12:18", text: "随行轻食站即将出餐，请前往 3 号柜台", tone: "#00B578", bg: "rgba(0,181,120,0.12)" },
  { time: "12:26", text: "旅途补给仓配送中，预计送达 A 区休息位", tone: "#4C86F9", bg: "rgba(76,134,249,0.12)" },
  { time: "14:00", text: "下午茶券即将生效，可用于饮品与甜点品类", tone: "#FA6800", bg: "rgba(250,104,0,0.12)" },
] as const;

function MarketMenuIcon() {
  return <ShopIcon className="text-[36px]" />;
}

function MarketOrdersIcon({ active }: { active: boolean }) {
  return (
    <div style={{ position: "relative", width: 42, height: 42 }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ViewListIcon className="text-[36px]" />
      </div>
      <div
        style={{
          position: "absolute",
          right: -1,
          bottom: -1,
          minWidth: 16,
          height: 16,
          padding: "0 4px",
          borderRadius: 999,
          background: active ? "#FFFFFF" : "rgba(20,199,65,0.16)",
          color: active ? "#1A1D28" : "#14C741",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 9,
          lineHeight: "9px",
          fontWeight: 700,
          boxSizing: "border-box",
        }}
      >
        3
      </div>
    </div>
  );
}

function getOrderStatusStyle(status: MarketOrderStatus) {
  if (status === "制作中") {
    return {
      color: "#4C86F9",
      background: "rgba(76,134,249,0.12)",
      border: "rgba(76,134,249,0.24)",
    };
  }

  if (status === "待取餐") {
    return {
      color: "#00B578",
      background: "rgba(0,181,120,0.12)",
      border: "rgba(0,181,120,0.24)",
    };
  }

  return {
    color: "#FA6800",
    background: "rgba(250,104,0,0.12)",
    border: "rgba(250,104,0,0.24)",
  };
}

function SummaryCard({
  label,
  value,
  tone,
  bg,
}: {
  label: string;
  value: string;
  tone: string;
  bg: string;
}) {
  return (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        borderRadius: 24,
        padding: 24,
        background: bg,
        border: `1px solid ${bg}`,
        boxSizing: "border-box",
      }}
    >
      <div style={{ color: "#697181", fontSize: 24, lineHeight: "24px", marginBottom: 18 }}>
        {label}
      </div>
      <div style={{ color: tone, fontSize: 42, lineHeight: "42px", fontWeight: 700 }}>
        {value}
      </div>
    </div>
  );
}

function ShortcutCard({ title, desc }: { title: string; desc: string }) {
  return (
    <button
      style={{
        width: "100%",
        border: "1px solid rgba(68,76,92,0.08)",
        borderRadius: 24,
        background: "rgba(246,247,250,0.9)",
        padding: 24,
        textAlign: "left",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 18 }}>
        <div>
          <div style={{ color: "#1A1D28", fontSize: 28, lineHeight: "32px", fontWeight: 600, marginBottom: 12 }}>
            {title}
          </div>
          <div style={{ color: "#697181", fontSize: 22, lineHeight: "30px" }}>{desc}</div>
        </div>
        <ArrowRightIcon className="shrink-0 text-[24px] text-[#697181]" />
      </div>
    </button>
  );
}

function OrderCard({ order }: { order: MarketOrder }) {
  const statusStyle = getOrderStatusStyle(order.status);

  return (
    <div
      style={{
        borderRadius: 30,
        padding: 30,
        background: "rgba(255,255,255,0.92)",
        border: "1px solid rgba(68,76,92,0.08)",
        boxShadow: "0px 18px 42px rgba(31,41,55,0.05)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 18, marginBottom: 18 }}>
        <div style={{ color: "#1A1D28", fontSize: 24, lineHeight: "24px", fontWeight: 600 }}>{order.store}</div>
        <div
          style={{
            borderRadius: 999,
            padding: "12px 18px",
            fontSize: 20,
            lineHeight: "20px",
            fontWeight: 600,
            color: statusStyle.color,
            background: statusStyle.background,
            border: `1px solid ${statusStyle.border}`,
            boxSizing: "border-box",
          }}
        >
          {order.status}
        </div>
      </div>

      <div style={{ color: "#1A1D28", fontSize: 30, lineHeight: "36px", fontWeight: 700, marginBottom: 18 }}>
        {order.title}
      </div>

      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#697181", fontSize: 22, lineHeight: "22px" }}>
          <TimeIcon className="text-[24px]" />
          <span>{order.eta}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#697181", fontSize: 22, lineHeight: "22px" }}>
          <LocationIcon className="text-[24px]" />
          <span>{order.detail}</span>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 18 }}>
        <div style={{ color: "#444C5C", fontSize: 24, lineHeight: "24px", fontWeight: 600 }}>{order.code}</div>
        <button
          style={{
            border: "none",
            borderRadius: 999,
            background: "rgba(26,29,40,0.92)",
            color: "#FFFFFF",
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            lineHeight: "22px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          <span>{order.action}</span>
          <ArrowRightIcon className="text-[20px]" />
        </button>
      </div>
    </div>
  );
}

function MarketMenuHome() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 540,
          borderRadius: 36,
          padding: 48,
          background: "rgba(255,255,255,0.88)",
          border: "1px solid rgba(68,76,92,0.08)",
          textAlign: "center",
          boxShadow: "0px 24px 60px rgba(31,41,55,0.06)",
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            margin: "0 auto 30px",
            borderRadius: 30,
            background: "rgba(26,29,40,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1A1D28",
          }}
        >
          <ShopIcon className="text-[54px]" />
        </div>
        <div style={{ color: "#1A1D28", fontSize: 42, lineHeight: "42px", fontWeight: 700, marginBottom: 24 }}>
          点餐首页暂留当前入口
        </div>
        <div style={{ color: "#697181", fontSize: 26, lineHeight: "38px" }}>
          本轮先补齐订单总览页，商品、分类与下单流程二级页后续再接入。
        </div>
      </div>
    </div>
  );
}

function MarketOrdersHome() {
  const priorityOrder = MARKET_ORDERS[0];

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 30,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
        <div>
          <div style={{ color: "#1A1D28", fontSize: 42, lineHeight: "42px", fontWeight: 700, marginBottom: 18 }}>
            订单首页
          </div>
          <div style={{ color: "#697181", fontSize: 24, lineHeight: "36px" }}>
            聚合查看制作中、待取餐与配送中的订单状态，先完成首页总览，不进入二级订单详情。
          </div>
        </div>
        <div
          style={{
            borderRadius: 999,
            padding: "18px 24px",
            background: "rgba(255,255,255,0.84)",
            border: "1px solid rgba(68,76,92,0.08)",
            color: "#1A1D28",
            fontSize: 22,
            lineHeight: "22px",
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          今日订单 16 单
        </div>
      </div>

      <div style={{ display: "flex", gap: 18 }}>
        {MARKET_SUMMARY.map((item) => (
          <SummaryCard key={item.label} {...item} />
        ))}
      </div>

      <div style={{ display: "flex", flex: 1, gap: 24, minHeight: 0 }}>
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              borderRadius: 36,
              padding: 36,
              background: "linear-gradient(135deg, rgba(26,29,40,0.96), rgba(54,63,84,0.9))",
              color: "#FFFFFF",
              boxShadow: "0px 30px 72px rgba(31,41,55,0.18)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 24, alignItems: "flex-start", marginBottom: 30 }}>
              <div>
                <div style={{ fontSize: 24, lineHeight: "24px", opacity: 0.72, marginBottom: 18 }}>当前优先订单</div>
                <div style={{ fontSize: 42, lineHeight: "48px", fontWeight: 700, marginBottom: 18 }}>
                  {priorityOrder.title}
                </div>
                <div style={{ fontSize: 24, lineHeight: "24px", opacity: 0.8 }}>{priorityOrder.store}</div>
              </div>
              <div
                style={{
                  borderRadius: 999,
                  padding: "12px 18px",
                  background: "rgba(255,255,255,0.14)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  fontSize: 20,
                  lineHeight: "20px",
                  fontWeight: 600,
                }}
              >
                {priorityOrder.status}
              </div>
            </div>

            <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 36 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22, lineHeight: "22px", opacity: 0.88 }}>
                <TimeIcon className="text-[24px]" />
                <span>{priorityOrder.eta}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22, lineHeight: "22px", opacity: 0.88 }}>
                <LocationIcon className="text-[24px]" />
                <span>{priorityOrder.detail}</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: 18, marginBottom: 30 }}>
              {[
                { label: "已下单", active: true },
                { label: "制作中", active: true },
                { label: "待取餐", active: false },
              ].map((step) => (
                <div key={step.label} style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: 999,
                        background: step.active ? "#00B578" : "rgba(255,255,255,0.24)",
                      }}
                    />
                    <div style={{ fontSize: 20, lineHeight: "20px", opacity: step.active ? 0.92 : 0.54 }}>
                      {step.label}
                    </div>
                  </div>
                  <div
                    style={{
                      height: 6,
                      borderRadius: 999,
                      background: step.active ? "rgba(0,181,120,0.84)" : "rgba(255,255,255,0.12)",
                    }}
                  />
                </div>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 18 }}>
              <div style={{ fontSize: 24, lineHeight: "24px", opacity: 0.86 }}>{priorityOrder.code}</div>
              <button
                style={{
                  border: "none",
                  borderRadius: 999,
                  background: "#FFFFFF",
                  color: "#1A1D28",
                  padding: "18px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  fontSize: 22,
                  lineHeight: "22px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                <span>{priorityOrder.action}</span>
                <ArrowRightIcon className="text-[20px]" />
              </button>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {MARKET_ORDERS.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        </div>

        <div style={{ width: 432, display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              borderRadius: 30,
              padding: 30,
              background: "rgba(255,255,255,0.92)",
              border: "1px solid rgba(68,76,92,0.08)",
            }}
          >
            <div style={{ color: "#1A1D28", fontSize: 30, lineHeight: "36px", fontWeight: 700, marginBottom: 24 }}>
              订单提醒
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {MARKET_REMINDERS.map((item) => (
                <div
                  key={`${item.time}-${item.text}`}
                  style={{
                    borderRadius: 24,
                    padding: 24,
                    background: item.bg,
                    border: `1px solid ${item.bg}`,
                  }}
                >
                  <div style={{ color: item.tone, fontSize: 22, lineHeight: "22px", fontWeight: 700, marginBottom: 12 }}>
                    {item.time}
                  </div>
                  <div style={{ color: "#444C5C", fontSize: 22, lineHeight: "32px" }}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              borderRadius: 30,
              padding: 30,
              background: "rgba(255,255,255,0.92)",
              border: "1px solid rgba(68,76,92,0.08)",
            }}
          >
            <div style={{ color: "#1A1D28", fontSize: 30, lineHeight: "36px", fontWeight: 700, marginBottom: 24 }}>
              常用入口
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {MARKET_SHORTCUTS.map((item) => (
                <ShortcutCard key={item.title} title={item.title} desc={item.desc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketContent({ activeTab }: { activeTab: MarketTab }) {
  return (
    <div
      style={{
        position: "absolute",
        left: 186,
        top: 48,
        width: 1668,
        height: 984,
        padding: 36,
        boxSizing: "border-box",
      }}
    >
      {activeTab === "orders" ? <MarketOrdersHome /> : <MarketMenuHome />}
    </div>
  );
}

function MarketLeftTab({
  activeTab,
  onTabChange,
}: {
  activeTab: MarketTab;
  onTabChange: (tab: MarketTab) => void;
}) {
  return (
    <GlobalLeftTab
      variant="simplified"
      className="absolute left-[30px] top-[30px] h-[1020px]"
      bottomContent={
        <GlobalLeftTabSimplifiedBottomButton
          icon={<PoweroffIcon className="text-[30px]" />}
          onClick={() => undefined}
        />
      }
    >
      <GlobalLeftTabSimplifiedItem
        active={activeTab === "menu"}
        onClick={() => onTabChange("menu")}
        icon={<MarketMenuIcon />}
      />
      <GlobalLeftTabSimplifiedItem
        active={activeTab === "orders"}
        onClick={() => onTabChange("orders")}
        icon={<MarketOrdersIcon active={activeTab === "orders"} />}
      />
    </GlobalLeftTab>
  );
}

export default function MarketFrame() {
  const [activeTab, setActiveTab] = useState<MarketTab>("menu");

  return (
    <div className="bg-[#eaedf2] overflow-clip relative rounded-[60px] size-full" data-name="框架-随行市集">
      <div
        style={{
          position: "absolute",
          left: 156,
          top: 30,
          width: 1734,
          height: 1020,
          borderRadius: 42,
          background: "rgba(255,255,255,0.7)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 186,
          top: 48,
          width: 1668,
          height: 984,
          borderRadius: 42,
          border: `2px solid ${activeTab === "menu" ? "rgba(198,219,255,0.92)" : "rgba(210,224,235,0.92)"}`,
          boxSizing: "border-box",
        }}
      />

      <MarketContent activeTab={activeTab} />
      <MarketLeftTab activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
