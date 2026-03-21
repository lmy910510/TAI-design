import {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
  CSSProperties,
} from "react";
import { TabsProps, TabsSize, TabsVariant } from "./Tabs.types";
import { SPACING, RADIUS, SHADOW } from "../tokens";
import { useThemeOptional } from "../hooks/ThemeContext";
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
    fontSize: 30,  // → tokens.typography.label.tab (large 变体)
    gap: SPACING["2"],
    iconSize: 32,
  },
  medium: {
    height: 60,
    paddingX: 30,
    fontSize: 28,  // → tokens.typography.label.tab
    gap: SPACING["2"],
    iconSize: 28,
  },
  small: {
    height: 48,
    paddingX: 24,
    fontSize: 24,  // → tokens.typography.meta.caption
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
  const { isDark: ctxDark, tokens: ctxTokens } = useThemeOptional();
  const isDark = isDarkProp ?? ctxDark;
  const tokens = ctxTokens;

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
      base.backgroundColor = tokens.bgColor.container;
      base.borderRadius = RADIUS.xl;
      base.padding = 6;
    }

    if (variant === "pill") {
      base.backgroundColor = tokens.bgColor.container;
      base.borderRadius = RADIUS["4xl"];
      base.padding = 6;
    }

    return { ...base, ...tabBarStyle };
  }, [variant, tokens, tabBarStyle]);

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
        fontWeight: isActive ? tokens.typography.label.badge.fontWeight : tokens.typography.label.tab.fontWeight,
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
        base.color = tokens.textColor.disabled;
      } else if (isActive) {
        base.color = tokens.textColor.primary;
      } else {
        base.color = tokens.textColor.tertiary;
      }

      // 变体特定样式
      if (variant === "card" || variant === "pill") {
        if (isActive && !disabled) {
          base.backgroundColor = tokens.bgColor.elevated;
          base.borderRadius = variant === "pill" ? RADIUS["4xl"] : RADIUS.xl;
          base.boxShadow = SHADOW.xl;
        }
      }

      return base;
    },
    [sizeConfig, tokens, variant, fullWidth]
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
      backgroundColor: tokens.textColor.primary,
      borderRadius: 2,
      transition: "transform 200ms ease, width 200ms ease",
    }),
    [tokens]
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
