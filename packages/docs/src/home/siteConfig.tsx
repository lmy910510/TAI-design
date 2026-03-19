import type { ComponentType } from "react";
import {
  BooksIcon,
  ChatIcon,
  LinkIcon,
  LocationIcon,
  ShopIcon,
} from "tdesign-icons-react";

export const APP_ROUTES = {
  home: "/",
  designSystem: "/design-system",
  discovery: "/discovery",
  market: "/market",
  chat: "/chat",
  connect: "/connect",
} as const;

export type PortalEntryKey =
  | "design-system"
  | "discovery"
  | "market"
  | "chat"
  | "connect";

export interface PortalEntry {
  key: PortalEntryKey;
  title: string;
  shortTitle: string;
  path: string;
  description: string;
  status: string;
  readiness: string;
  demoHint: string;
  icon: ComponentType<any>;
  notes: string[];
}

export const portalEntries: PortalEntry[] = [
  {
    key: "design-system",
    title: "TAI Design 规范库",
    shortTitle: "规范库",
    path: APP_ROUTES.designSystem,
    description: "进入现有 TAI Design 规范与组件示例，方便同事随时查阅、学习和对照开发。",
    status: "长期可查阅",
    readiness: "已就绪",
    demoHint: "继续沿用当前规范路由页。",
    icon: BooksIcon,
    notes: [
      "查看基础规范与组件示例",
      "作为产品 demo 的统一设计参照",
      "适合同事日常学习与对照开发",
    ],
  },
  {
    key: "discovery",
    title: "随行发现",
    shortTitle: "随行发现",
    path: APP_ROUTES.discovery,
    description: "承接探索、地图、POI 与周边服务等体验验证，为后续产品 demo 预留独立入口。",
    status: "产品入口",
    readiness: "已就绪",
    demoHint: "已接入精简版基础框架，可继续补充发现类业务 demo。",
    icon: LocationIcon,
    notes: [
      "已接入精简版框架，可直接承载发现类 demo",
      "适合列表、地图、详情联动场景",
      "可继续补充示意流与交互验证",
    ],
  },
  {
    key: "market",
    title: "随行市集",
    shortTitle: "随行市集",
    path: APP_ROUTES.market,
    description: "承接商品、推荐、活动与交易链路等演示需求，作为市集产品的独立 demo 工作区。",
    status: "产品入口",
    readiness: "已就绪",
    demoHint: "已接入精简版基础框架，可继续补充点餐与订单类业务 demo。",
    icon: ShopIcon,
    notes: [
      "已接入精简版框架，可直接承载点餐与订单 demo",
      "适合商品卡片、详情和下单流程",
      "便于继续扩展推荐和活动场景",
    ],
  },
  {
    key: "chat",
    title: "随行Chat",
    shortTitle: "随行Chat",
    path: APP_ROUTES.chat,
    description: "承接单聊、群聊、协同和语音互动等体验验证，作为聊天产品的独立 demo 入口。",
    status: "产品入口",
    readiness: "已就绪",
    demoHint: "已接入扩展版基础框架，可继续补充聊天类业务 demo。",
    icon: ChatIcon,
    notes: [
      "已接入扩展版框架，可直接承载聊天类 demo",
      "适合会话流、群聊和组队体验",
      "可用于验证协同和语音互动场景",
    ],
  },
  {
    key: "connect",
    title: "随行互联",
    shortTitle: "随行互联",
    path: APP_ROUTES.connect,
    description: "承接车机互联、设备连接与服务协同等能力演示，为互联产品保留独立入口。",
    status: "产品入口",
    readiness: "待接入",
    demoHint: "当前已预留壳页，适合后续持续扩展连接能力 demo。",
    icon: LinkIcon,
    notes: [
      "适合设备发现、连接状态与服务协同",
      "便于拆分连接前、中、后的状态演示",
      "后续可逐步接入互联能力模块",
    ],
  },
];

export type ProductEntryKey = "discovery" | "market" | "chat" | "connect";

export const productEntries = portalEntries.filter(
  (entry) => entry.key !== "design-system"
) as PortalEntry[];

export const productEntryMap = Object.fromEntries(
  productEntries.map((entry) => [entry.key, entry])
) as Record<ProductEntryKey, PortalEntry>;
