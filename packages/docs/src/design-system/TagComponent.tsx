import React, { ReactNode } from 'react';

export type TagType = "regular" | "combined";
export type TagLevel = "high" | "medium" | "low";
export type TagSize = "large" | "medium" | "small";
export type TagColor = "warning" | "notice" | "success" | "regular" | "default";

export interface TagComponentProps {
  /** 标签类型 */
  type?: TagType;
  /** 强调层级 */
  level?: TagLevel;
  /** 尺寸大小 */
  size?: TagSize;
  /** 语义颜色 */
  color?: TagColor;
  /** 标签文本（常规标签） */
  children?: ReactNode;
  /** 是否显示图标（常规标签） */
  showIcon?: boolean;
  /** 自定义图标（常规标签） */
  icon?: ReactNode;
  /** 是否使用实线描边（中级常规标签） */
  solidBorder?: boolean;
  /** 自定义类名 */
  className?: string;
}

const TAG_SPECS = {
  large: { height: 36, fontSize: 24, padding: 8, iconSize: 22, gap: 4, radius: 6 },
  medium: { height: 30, fontSize: 20, padding: 6, iconSize: 18, gap: 2, radius: 6 },
  small: { height: 24, fontSize: 16, padding: 4, iconSize: 14, gap: 2, radius: 4 },
};

const COLOR_MAP = {
  warning: { 
    main: "#ff293b", 
    bg: "rgba(255,41,59,0.06)", 
    border: "rgba(255,41,59,0.3)", 
    borderLow: "rgba(255,41,59,0.12)" 
  },
  notice: { 
    main: "#fa6800", 
    bg: "rgba(250,104,0,0.06)", 
    border: "rgba(250,104,0,0.3)", 
    borderLow: "rgba(250,104,0,0.12)" 
  },
  success: { 
    main: "#00b578", 
    bg: "rgba(0,181,120,0.06)", 
    border: "rgba(0,181,120,0.3)", 
    borderLow: "rgba(0,181,120,0.12)" 
  },
  regular: { 
    main: "#2965ff", 
    bg: "rgba(41,101,255,0.06)", 
    border: "rgba(41,101,255,0.3)", 
    borderLow: "rgba(41,101,255,0.12)", 
    lightBg: "#e5eeff" 
  },
  default: { 
    main: "#697181", 
    bg: "rgba(105,113,129,0.06)", 
    border: "rgba(105,113,129,0.3)", 
    borderLow: "rgba(105,113,129,0.12)" 
  }
};

/**
 * 标签组件
 * 用于表明主体的类目、属性或状态；是静态文本，不具有交互功能
 * 提供常规和组合两类标签，支持多层级、尺寸和颜色
 */
export function TagComponent({
  type = "regular",
  level = "high",
  size = "large",
  color = "notice",
  children = "标签文案",
  showIcon = false,
  icon,
  solidBorder = true,
  className = "",
}: TagComponentProps) {
  const spec = TAG_SPECS[size];
  const colors = COLOR_MAP[color];

  // 常规标签
  if (type === "regular") {
    let style: React.CSSProperties = {};
    
    if (level === "high") {
      style = { backgroundColor: colors.main, color: "white" };
    } else if (level === "medium") {
      if (solidBorder) {
        style = { 
          border: `2px solid ${colors.main}`, 
          color: colors.main, 
          backgroundColor: "transparent" 
        };
      } else {
        style = { 
          border: `1px solid ${colors.border}`, 
          backgroundColor: colors.bg, 
          color: colors.main 
        };
      }
    } else { // low
      style = { 
        border: `1px solid ${colors.borderLow}`, 
        backgroundColor: colors.bg, 
        color: colors.main 
      };
    }

    return (
      <div 
        className={`flex items-center justify-center relative box-border ${className}`}
        style={{
          ...style,
          height: `${spec.height}px`,
          padding: `0 ${spec.padding}px`,
          borderRadius: `${spec.radius}px`,
          gap: `${spec.gap}px`
        }}
      >
        {showIcon && icon && (
          <div style={{ width: `${spec.iconSize}px`, height: `${spec.iconSize}px` }}>
            {icon}
          </div>
        )}
        <span 
          className="font-['Noto_Sans_S_Chinese:Medium',sans-serif] whitespace-nowrap"
          style={{ fontSize: `${spec.fontSize}px`, lineHeight: `${spec.height}px` }}
        >
          {children}
        </span>
      </div>
    );
  }

  // 组合标签
  if (level === "high") {
    return (
      <div className={`inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0] ${className}`}>
        <div 
          className="col-start-1 row-start-1 flex items-center justify-start relative w-full justify-self-stretch"
          style={{ 
            backgroundColor: colors.main,
            height: `${spec.height}px`,
            paddingLeft: `${Math.max(4, spec.padding - 2)}px`,
            borderRadius: `${spec.radius}px`
          }}
        >
          <div style={{ width: `${spec.iconSize}px`, height: `${spec.iconSize}px` }} className="relative shrink-0">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d="M16.0133 2.40015H7.42171L4.00049 21.5999H7.44743L8.60499 15.1324H13.4667C17.2224 15.1324 18.5085 14.0164 19.2031 10.1359L19.6404 7.72637C19.8719 6.38213 20.0005 5.49443 20.0005 4.83499C20.0005 2.93277 18.7915 2.40015 16.0133 2.40015ZM16.1934 7.72637L15.9619 9.07061C15.5246 11.6069 15.113 12.4185 13.0552 12.4185H9.09374L10.3799 5.11398H14.4957C15.9362 5.11398 16.4249 5.26616 16.4249 6.05241C16.4249 6.35677 16.322 7.01621 16.1934 7.72637Z" fill="white" />
            </svg>
          </div>
        </div>
        <div 
          className="col-start-1 row-start-1 flex items-center relative box-border overflow-hidden"
          style={{
            height: `${spec.height}px`,
            marginLeft: `calc(${spec.iconSize}px + ${spec.padding}px + 3px)`,
            borderRadius: `${spec.radius}px`,
          }}
        >
          <div className="absolute inset-0 bg-white" aria-hidden="true" />
          <div className="absolute inset-0" style={{ backgroundColor: colors.lightBg || colors.bg }} aria-hidden="true" />
          <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none" style={{ borderColor: colors.main, borderRadius: `${spec.radius}px` }} />
          <div className="relative z-10 flex items-center h-full" style={{ padding: `0 ${spec.padding}px` }}>
            <span className="font-['Noto_Sans_S_Chinese:Medium']" style={{ color: colors.main, fontSize: `${spec.fontSize}px`, lineHeight: 1 }}>空</span>
            <span className="font-['DIN:Medium'] ml-[2px]" style={{ color: colors.main, fontSize: `${spec.fontSize}px`, lineHeight: 1 }}>36</span>
            <span className="font-['DIN:Regular'] text-[rgba(0,0,0,0.54)] mx-[4px]" style={{ fontSize: `${spec.fontSize}px`, lineHeight: 1 }}>/</span>
            <span className="font-['Noto_Sans_S_Chinese:Medium'] text-[rgba(0,0,0,0.54)]" style={{ fontSize: `${spec.fontSize}px`, lineHeight: 1 }}>共</span>
            <span className="font-['DIN:Medium'] text-[rgba(0,0,0,0.54)] ml-[2px]" style={{ fontSize: `${spec.fontSize}px`, lineHeight: 1 }}>320</span>
          </div>
        </div>
      </div>
    );
  } else { // medium or low for combined
    return (
      <div className={`flex ${className}`} style={{ height: `${spec.height}px` }}>
        <div 
          className="flex items-center justify-center box-border"
          style={{ 
            backgroundColor: colors.bg,
            border: `1px solid ${colors.border}`,
            borderRightStyle: 'none',
            padding: `0 ${spec.padding}px`,
            borderTopLeftRadius: `${spec.radius}px`,
            borderBottomLeftRadius: `${spec.radius}px`,
            gap: `${spec.gap}px`
          }}
        >
          <span className="font-['Noto_Sans_S_Chinese:Regular']" style={{ color: colors.main, fontSize: `${spec.fontSize}px` }}>即将营业</span>
        </div>
        <div 
          className="flex items-center justify-center box-border bg-white"
          style={{
            border: `1px solid ${colors.border}`,
            borderLeftStyle: 'none',
            padding: `0 ${spec.padding}px`,
            borderTopRightRadius: `${spec.radius}px`,
            borderBottomRightRadius: `${spec.radius}px`,
            gap: `${spec.gap * 2}px`
          }}
        >
          <span className="font-['DIN:Regular'] text-[rgba(0,0,0,0.72)]" style={{ fontSize: `${spec.fontSize}px` }}>16:30-21:30</span>
          <div className="w-px h-[12px] bg-[rgba(0,0,0,0.24)]" />
          <span className="font-['DIN:Regular'] text-[rgba(0,0,0,0.72)]" style={{ fontSize: `${spec.fontSize}px` }}>最晚入...</span>
        </div>
      </div>
    );
  }
}

// 导出常量供外部使用
export { TAG_SPECS, COLOR_MAP };
