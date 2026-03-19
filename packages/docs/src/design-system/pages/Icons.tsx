import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import * as TDesignIcons from "tdesign-icons-react";

// 常用图标分类
const iconCategories = {
  direction: {
    name: "方向指示",
    icons: [
      "ChevronUpIcon",
      "ChevronDownIcon",
      "ChevronLeftIcon",
      "ChevronRightIcon",
      "ArrowUpIcon",
      "ArrowDownIcon",
      "ArrowLeftIcon",
      "ArrowRightIcon",
      "ExpandIcon",
      "ShrinkIcon",
    ],
  },
  suggestion: {
    name: "提示建议",
    icons: [
      "CheckIcon",
      "CloseIcon",
      "InfoCircleIcon",
      "CheckCircleIcon",
      "CloseCircleIcon",
      "ErrorCircleIcon",
      "HelpCircleIcon",
      "ErrorIcon",
    ],
  },
  edit: {
    name: "编辑类",
    icons: [
      "AddIcon",
      "RemoveIcon",
      "EditIcon",
      "DeleteIcon",
      "SearchIcon",
      "FilterIcon",
      "SettingIcon",
      "RefreshIcon",
    ],
  },
  media: {
    name: "多媒体",
    icons: [
      "PlayCircleIcon",
      "PauseCircleIcon",
      "VideoIcon",
      "MusicIcon",
      "ImageIcon",
      "CameraIcon",
      "VolumeUpIcon",
      "VolumeMuteIcon",
    ],
  },
  communication: {
    name: "交流",
    icons: [
      "MailIcon",
      "MessageIcon",
      "ChatIcon",
      "NotificationIcon",
      "PhoneIcon",
      "UserIcon",
      "UsergroupIcon",
      "ShareIcon",
    ],
  },
  file: {
    name: "文件",
    icons: [
      "FolderIcon",
      "FolderOpenIcon",
      "FileIcon",
      "FileAddIcon",
      "FileExcelIcon",
      "FilePdfIcon",
      "FileWordIcon",
      "AttachmentIcon",
    ],
  },
  navigation: {
    name: "导航",
    icons: [
      "HomeIcon",
      "DashboardIcon",
      "AppIcon",
      "ViewListIcon",
      "ViewModuleIcon",
      "MenuIcon",
      "MoreIcon",
      "EllipsisIcon",
    ],
  },
  device: {
    name: "设备",
    icons: [
      "DesktopIcon",
      "MobileIcon",
      "LaptopIcon",
      "PrintIcon",
      "QrcodeIcon",
      "ScanIcon",
      "BluetoothIcon",
      "WifiIcon",
    ],
  },
  business: {
    name: "商业",
    icons: [
      "ShopIcon",
      "CartIcon",
      "WalletIcon",
      "CreditCardIcon",
      "DiscountIcon",
      "MoneyCircleIcon",
      "GiftIcon",
      "TrophyIcon",
    ],
  },
  other: {
    name: "其他",
    icons: [
      "LocationIcon",
      "TimeIcon",
      "CalendarIcon",
      "LockOnIcon",
      "LockOffIcon",
      "EyeOnIcon",
      "EyeOffIcon",
      "StarIcon",
      "HeartIcon",
      "ThumbUpIcon",
      "FlagIcon",
      "BookmarkIcon",
    ],
  },
};

export function Icons() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  // 搜索过滤
  const filteredCategories = Object.entries(iconCategories).reduce(
    (acc, [key, category]) => {
      const filteredIcons = category.icons.filter((icon) =>
        icon.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filteredIcons.length > 0) {
        acc[key] = { ...category, icons: filteredIcons };
      }
      return acc;
    },
    {} as typeof iconCategories
  );

  // 复制图标名称
  const handleCopyIcon = (iconName: string) => {
    navigator.clipboard.writeText(iconName);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  return (
    <div>
      <div className="mb-8">
        <div
          className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
            isDark
              ? "bg-white/10 border-white/20 text-gray-200"
              : "bg-gray-100 border-gray-300 text-gray-900"
          }`}
        >
          Foundation / 基础
        </div>
        <h1 className="text-4xl font-bold mb-4">图标库</h1>
        <p className={`text-lg mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          基于 TDesign Icons 的车机端图标系统
        </p>
        <a
          href="https://tdesign.tencent.com/icons"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm ${
            isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
          }`}
        >
          查看完整图标库 →
        </a>
      </div>

      {/* 搜索框 */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="搜索图标..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${
              isDark
                ? "bg-[#141414] border-[#2a2a2a] text-white placeholder-gray-500"
                : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <TDesignIcons.SearchIcon
            className={`absolute right-4 top-1/2 -translate-y-1/2 ${
              isDark ? "text-gray-500" : "text-gray-400"
            }`}
            size={20}
          />
        </div>
      </div>

      {/* 使用说明 */}
      <div
        className={`mb-8 p-4 border rounded-xl ${
          isDark
            ? "bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border-blue-500/20"
            : "bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200"
        }`}
      >
        <h3 className="text-base font-semibold mb-2">💡 使用方法</h3>
        <div className={`text-sm space-y-1 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          <p>
            <code
              className={`px-2 py-0.5 rounded ${
                isDark ? "bg-black/30" : "bg-white/50"
              }`}
            >
              import {"{ IconName }"} from 'tdesign-icons-react'
            </code>
          </p>
          <p>• 点击图标可复制名称</p>
          <p>• 支持通过 size 和 style 属性自定义大小和颜色</p>
        </div>
      </div>

      {/* 图标分类展示 */}
      <div className="space-y-8">
        {Object.entries(filteredCategories).map(([key, category]) => (
          <div key={key}>
            <h2 className="text-xl font-bold mb-4">{category.name}</h2>
            <div className="grid grid-cols-6 gap-3">
              {category.icons.map((iconName) => {
                const IconComponent = (TDesignIcons as any)[iconName];
                if (!IconComponent) return null;

                return (
                  <button
                    key={iconName}
                    onClick={() => handleCopyIcon(iconName)}
                    className={`relative group p-4 border rounded-lg transition-all hover:scale-105 ${
                      isDark
                        ? "bg-[#141414] border-[#2a2a2a] hover:border-blue-500/50 hover:bg-[#1a1a1a]"
                        : "bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <IconComponent size={32} />
                      <span
                        className={`text-xs text-center line-clamp-2 ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {iconName.replace("Icon", "")}
                      </span>
                    </div>

                    {/* 复制提示 */}
                    {copiedIcon === iconName && (
                      <div
                        className={`absolute inset-0 flex items-center justify-center rounded-lg ${
                          isDark ? "bg-black/80" : "bg-white/90"
                        }`}
                      >
                        <div className="flex items-center gap-1 text-green-500">
                          <TDesignIcons.CheckIcon size={16} />
                          <span className="text-xs font-medium">已复制</span>
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 无结果提示 */}
      {Object.keys(filteredCategories).length === 0 && (
        <div className="text-center py-12">
          <TDesignIcons.SearchIcon
            className={`mx-auto mb-4 ${isDark ? "text-gray-600" : "text-gray-300"}`}
            size={48}
          />
          <p className={isDark ? "text-gray-500" : "text-gray-400"}>
            未找到匹配的图标
          </p>
        </div>
      )}

      {/* 尺寸示例 */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">尺寸规范</h2>
        <div
          className={`p-6 border rounded-xl ${
            isDark ? "bg-[#141414] border-[#2a2a2a]" : "bg-white border-gray-200"
          }`}
        >
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <TDesignIcons.HomeIcon size={16} />
              <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                16px
              </span>
              <span className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                小图标
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <TDesignIcons.HomeIcon size={20} />
              <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                20px
              </span>
              <span className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                常规
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <TDesignIcons.HomeIcon size={24} />
              <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                24px
              </span>
              <span className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                标准
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <TDesignIcons.HomeIcon size={32} />
              <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                32px
              </span>
              <span className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                大图标
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <TDesignIcons.HomeIcon size={48} />
              <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                48px
              </span>
              <span className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                特大
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}