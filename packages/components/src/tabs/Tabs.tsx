import {
  useState,
  useMemo,
  useCallback,
  useContext,
  useRef,
  useEffect,
  CSSProperties,
} from "react";
import { TabsProps, TabsSize, TabsVariant } from "./Tabs.types";
import { createColors, SPACING, RADIUS } from "../tokens";
import { ThemeContext } from "../hooks/ThemeContext";
import { motion } from "framer-motion";

// ============================================================================
// 尺寸配置
// ============================================================================

const SIZE_CONFIG: Record<
  TabsSize,
  {
    height: number;
    paddingX: number;
    fontSize: number;
    gap: number;
    iconSize: number;
  }
> = {
  large: {
    height: 72,
    paddingX: 36,
    fontSize: 30,
    gap: SPACING["2"],
    iconSize: 32,
  },
  medium: {
    height: 60,
    paddingX: 30,
    fontSize: 28,
    gap: SPACING["2"],
    iconSize: 28,
  },
  small: {
    height: 48,
    paddingX: 24,
    fontSize: 24,
    gap: 6,
    iconSize: 24,
  },
};

// ============================================================================
// 组件
// ============================================================================

export function Tabs({
  items,
  activeKey: activeKeyProp,
  defaultActiveKey,
  onChange,
  variant = "line",
  size = "large",
  fullWidth = false,
  showContent = true,
  isDark: isDarkProp,
  className = "",
  style,
  tabBarStyle,
  contentStyle,
}: TabsProps) {
  const ctx = useContext(ThemeContext);
  const isDark = isDarkProp ?? ctx?.isDark ?? false;
  const colors = useMemo(() => createColors(isDark), [isDark]);

  // 受控/非受控模式
  const [internalKey, setInternalKey] = useState(
    defaultActiveKey || items[0]?.key || ""
  );
  const activeKey = activeKeyProp ?? internalKey;

  // 指示器位置
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({});

  const sizeConfig = SIZE_CONFIG[size];

  // 更新指示器位置
  useEffect(() => {
    const el = tabRefs.current.get(activeKey);
    if (el && variant === "line") {
      setIndicatorStyle({
        width: el.offsetWidth,
        transform: `translateX(${el.offsetLeft}px)`,
      });
    }
  }, [activeKey, variant, items]);

  const handleTabClick = useCallback(
    (key: string, disabled?: boolean) => {
      if (disabled) return;
      if (activeKeyProp === undefined) {
        setInternalKey(key);
      }
      onChange?.(key);
    },
    [activeKeyProp, onChange]
  );

  // 容器样式
  const containerStyle = useMemo<CSSProperties>(
    () => ({
      display: "flex",
      flexDirection: "column",
      ...style,
    }),
    [style]
  );

  // 标签栏样式
  const tabBarBaseStyle = useMemo<CSSProperties>(() => {
    const base: CSSProperties = {
      display: "flex",
      alignItems: "center",
      gap: variant === "pill" ? SPACING["2"] : 0,
      position: "relative",
    };

    if (variant === "card") {
      base.backgroundColor = colors.bg.secondary;
      base.borderRadius = RADIUS.xl;
      base.padding = 6;
    }

    if (variant === "pill") {
      base.backgroundColor = colors.bg.secondary;
      base.borderRadius = RADIUS["4xl"];
      base.padding = 6;
    }

    return { ...base, ...tabBarStyle };
  }, [variant, colors, tabBarStyle]);

  // 单个标签样式
  const getTabStyle = useCallback(
    (isActive: boolean, disabled?: boolean): CSSProperties => {
      const base: CSSProperties = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: sizeConfig.gap,
        height: sizeConfig.height,
        paddingLeft: sizeConfig.paddingX,
        paddingRight: sizeConfig.paddingX,
        fontSize: sizeConfig.fontSize,
        fontWeight: isActive ? 600 : 400,
        cursor: disabled ? "not-allowed" : "pointer",
        border: "none",
        background: "transparent",
        transition: "color 150ms ease, background-color 150ms ease",
        flexShrink: 0,
        whiteSpace: "nowrap",
      };

      if (fullWidth) {
        base.flex = 1;
      }

      // 颜色
      if (disabled) {
        base.color = colors.text.disabled;
      } else if (isActive) {
        base.color = colors.text.primary;
      } else {
        base.color = colors.text.tertiary;
      }

      // 变体特定样式
      if (variant === "card" || variant === "pill") {
        if (isActive && !disabled) {
          base.backgroundColor = colors.bg.elevated;
          base.borderRadius = variant === "pill" ? RADIUS["4xl"] : RADIUS.xl;
          base.boxShadow = isDark
            ? "0 2px 8px rgba(0, 0, 0, 0.3)"
            : "0 2px 8px rgba(0, 0, 0, 0.08)";
        }
      }

      return base;
    },
    [sizeConfig, colors, variant, fullWidth, isDark]
  );

  // 图标样式
  const iconStyle = useMemo<CSSProperties>(
    () => ({
      width: sizeConfig.iconSize,
      height: sizeConfig.iconSize,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }),
    [sizeConfig.iconSize]
  );

  // 指示器基础样式（仅 line 变体）
  const indicatorBaseStyle = useMemo<CSSProperties>(
    () => ({
      position: "absolute",
      bottom: 0,
      left: 0,
      height: 4,
      backgroundColor: colors.text.primary,
      borderRadius: 2,
      transition: "transform 200ms ease, width 200ms ease",
    }),
    [colors]
  );

  // 内容区域样式
  const contentBaseStyle = useMemo<CSSProperties>(
    () => ({
      paddingTop: SPACING["4"],
      ...contentStyle,
    }),
    [contentStyle]
  );

  // 当前激活的内容
  const activeContent = useMemo(() => {
    const activeItem = items.find((item) => item.key === activeKey);
    return activeItem?.children;
  }, [items, activeKey]);

  return (
    <div className={`tai-tabs tai-tabs--${variant} ${className}`.trim()} style={containerStyle}>
      {/* 标签栏 */}
      <div className="tai-tabs__bar" style={tabBarBaseStyle}>
        {items.map((item) => {
          const isActive = item.key === activeKey;
          return (
            <button
              key={item.key}
              ref={(el) => {
                if (el) tabRefs.current.set(item.key, el);
              }}
              type="button"
              className={`tai-tabs__tab ${isActive ? "tai-tabs__tab--active" : ""} ${
                item.disabled ? "tai-tabs__tab--disabled" : ""
              }`.trim()}
              style={getTabStyle(isActive, item.disabled)}
              onClick={() => handleTabClick(item.key, item.disabled)}
              disabled={item.disabled}
              aria-selected={isActive}
              role="tab"
            >
              {item.icon && <span style={iconStyle}>{item.icon}</span>}
              <span>{item.label}</span>
            </button>
          );
        })}

        {/* Line 变体的指示器 */}
        {variant === "line" && (
          <motion.div
            className="tai-tabs__indicator"
            style={{ ...indicatorBaseStyle, ...indicatorStyle }}
            layoutId="tab-indicator"
          />
        )}
      </div>

      {/* 内容区域 */}
      {showContent && activeContent && (
        <div className="tai-tabs__content" style={contentBaseStyle}>
          {activeContent}
        </div>
      )}
    </div>
  );
}

Tabs.displayName = "Tabs";
