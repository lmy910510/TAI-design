import { useState } from "react";
import { PoweroffIcon, ShopIcon, ViewListIcon } from "tdesign-icons-react";
import {
  GlobalLeftTab,
  GlobalLeftTabSimplifiedBottomButton,
  GlobalLeftTabSimplifiedItem,
} from "../design-system";

type MarketTab = "menu" | "orders";

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

      <MarketLeftTab activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
