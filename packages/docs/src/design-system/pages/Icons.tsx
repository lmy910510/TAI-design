import type { CSSProperties } from "react";
import { useState } from "react";
import * as TDesignIcons from "tdesign-icons-react";
import { Input as TaiInput, RADIUS, SPACING, useTheme } from "@tai-design/components";
import { DocPageHeader } from "../DocComponents";

const iconCategories = {
  direction: {
    name: "方向指示",
    icons: ["ChevronUpIcon", "ChevronDownIcon", "ChevronLeftIcon", "ChevronRightIcon", "ArrowUpIcon", "ArrowDownIcon", "ArrowLeftIcon", "ArrowRightIcon", "ExpandIcon", "ShrinkIcon"],
  },
  suggestion: {
    name: "提示建议",
    icons: ["CheckIcon", "CloseIcon", "InfoCircleIcon", "CheckCircleIcon", "CloseCircleIcon", "ErrorCircleIcon", "HelpCircleIcon", "ErrorIcon"],
  },
  edit: {
    name: "编辑类",
    icons: ["AddIcon", "RemoveIcon", "EditIcon", "DeleteIcon", "SearchIcon", "FilterIcon", "SettingIcon", "RefreshIcon"],
  },
  media: {
    name: "多媒体",
    icons: ["PlayCircleIcon", "PauseCircleIcon", "VideoIcon", "MusicIcon", "ImageIcon", "CameraIcon", "VolumeUpIcon", "VolumeMuteIcon"],
  },
  communication: {
    name: "交流",
    icons: ["MailIcon", "MessageIcon", "ChatIcon", "NotificationIcon", "PhoneIcon", "UserIcon", "UsergroupIcon", "ShareIcon"],
  },
  file: {
    name: "文件",
    icons: ["FolderIcon", "FolderOpenIcon", "FileIcon", "FileAddIcon", "FileExcelIcon", "FilePdfIcon", "FileWordIcon", "AttachmentIcon"],
  },
  navigation: {
    name: "导航",
    icons: ["HomeIcon", "DashboardIcon", "AppIcon", "ViewListIcon", "ViewModuleIcon", "MenuIcon", "MoreIcon", "EllipsisIcon"],
  },
  device: {
    name: "设备",
    icons: ["DesktopIcon", "MobileIcon", "LaptopIcon", "PrintIcon", "QrcodeIcon", "ScanIcon", "BluetoothIcon", "WifiIcon"],
  },
  business: {
    name: "商业",
    icons: ["ShopIcon", "CartIcon", "WalletIcon", "CreditCardIcon", "DiscountIcon", "MoneyCircleIcon", "GiftIcon", "TrophyIcon"],
  },
  other: {
    name: "其他",
    icons: ["LocationIcon", "TimeIcon", "CalendarIcon", "LockOnIcon", "LockOffIcon", "EyeOnIcon", "EyeOffIcon", "StarIcon", "HeartIcon", "ThumbUpIcon", "FlagIcon", "BookmarkIcon"],
  },
} as const;

export function Icons() {
  const { tokens, isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const filteredCategories = Object.entries(iconCategories).reduce((acc, [key, category]) => {
    const filteredIcons = category.icons.filter((icon) => icon.toLowerCase().includes(searchQuery.toLowerCase()));
    if (filteredIcons.length > 0) {
      acc[key as keyof typeof iconCategories] = { ...category, icons: filteredIcons };
    }
    return acc;
  }, {} as typeof iconCategories);

  const handleCopyIcon = (iconName: string) => {
    navigator.clipboard.writeText(iconName);
    setCopiedIcon(iconName);
    window.setTimeout(() => setCopiedIcon(null), 2000);
  };

  const chipStyle: CSSProperties = {
    display: "inline-block",
    padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`,
    marginBottom: SPACING["3"],
    borderRadius: 999,
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.container,
    color: tokens.textColor.secondary,
    fontSize: 14,
  };

  const guidePanelStyle: CSSProperties = {
    padding: SPACING["4"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.brand}`,
    background: `linear-gradient(to right, ${tokens.bgColor.brandLight}, ${tokens.bgColor.container})`,
  };

  const categoryCardStyle: CSSProperties = {
    padding: SPACING["4"],
    borderRadius: RADIUS["2xl"],
    border: `1px solid ${tokens.borderColor.level1}`,
    backgroundColor: tokens.bgColor.elevated,
  };

  return (
    <div>
      <DocPageHeader category="Foundation / 基础" title="图标库" description="基于 TDesign Icons 的车机端图标系统。" />
      <div className="mb-8">
        <a href="https://tdesign.tencent.com/icons" target="_blank" rel="noopener noreferrer" style={{ color: tokens.textColor.link, fontSize: 14 }}>
          查看完整图标库 →
        </a>
      </div>

      <div className="mb-8">
        <TaiInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="搜索图标..."
          prefixIcon={<TDesignIcons.SearchIcon size={20} />}
          isDark={isDark}
          style={{ width: "100%" }}
        />
      </div>

      <div style={guidePanelStyle} className="mb-8">
        <h3 className="text-base font-semibold mb-2">💡 使用方法</h3>
        <div className="text-sm space-y-1" style={{ color: tokens.textColor.secondary }}>
          <p>
            <code style={{ padding: `${SPACING["2"] / 2}px ${SPACING["2"]}px`, borderRadius: RADIUS.xl, backgroundColor: tokens.bgColor.elevated }}>
              import {'{ IconName }'} from 'tdesign-icons-react'
            </code>
          </p>
          <p>• 点击图标可复制名称</p>
          <p>• 支持通过 `size` 和 `style` 属性自定义大小和颜色</p>
        </div>
      </div>

      <div className="space-y-8">
        {Object.entries(filteredCategories).map(([key, category]) => (
          <div key={key}>
            <h2 className="text-xl font-bold mb-4">{category.name}</h2>
            <div className="grid grid-cols-6 gap-3">
              {category.icons.map((iconName) => {
                const IconComponent = (TDesignIcons as Record<string, React.ComponentType<{ size?: number }>>)[iconName];
                if (!IconComponent) return null;

                return (
                  <button key={iconName} type="button" onClick={() => handleCopyIcon(iconName)} style={{ ...categoryCardStyle, position: "relative" }}>
                    <div className="flex flex-col items-center gap-2">
                      <div style={{ color: tokens.textColor.primary }}>
                        <IconComponent size={32} />
                      </div>
                      <span className="text-xs text-center line-clamp-2" style={{ color: tokens.textColor.secondary }}>
                        {iconName.replace("Icon", "")}
                      </span>
                    </div>

                    {copiedIcon === iconName ? (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: RADIUS["2xl"],
                          backgroundColor: tokens.bgColor.glass,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div className="flex items-center gap-1" style={{ color: tokens.functionalColor.success.main }}>
                          <TDesignIcons.CheckIcon size={16} />
                          <span className="text-xs font-medium">已复制</span>
                        </div>
                      </div>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {Object.keys(filteredCategories).length === 0 ? (
        <div className="py-12 text-center">
          <div style={{ color: tokens.textColor.tertiary }}>
            <TDesignIcons.SearchIcon className="mx-auto mb-4" size={48} />
          </div>
          <p style={{ color: tokens.textColor.tertiary }}>未找到匹配的图标</p>
        </div>
      ) : null}

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">尺寸规范</h2>
        <div style={categoryCardStyle}>
          <div className="flex items-center gap-8">
            {[16, 20, 24, 32, 48].map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <TDesignIcons.HomeIcon size={size} />
                <span className="text-xs" style={{ color: tokens.textColor.secondary }}>{size}px</span>
                <span className="text-xs" style={{ color: tokens.textColor.tertiary }}>
                  {size === 16 ? "小图标" : size === 20 ? "常规" : size === 24 ? "标准" : size === 32 ? "大图标" : "特大"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
