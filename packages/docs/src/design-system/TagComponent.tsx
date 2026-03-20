import React, { ReactNode, CSSProperties } from 'react';
import { STATIC, useTheme, type Colors } from '@tai-design/components';

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
} as const;

type TagPalette = {
  main: string;
  bg: string;
  border: string;
  borderLow: string;
  lightBg: string;
  inverseText: string;
  mutedText: string;
  secondaryBg: string;
  divider: string;
};

export const resolveTagPalette = (colors: Colors, color: TagColor): TagPalette => {
  const inverseText = colors.static.white;
  const mutedText = colors.text.secondary;
  const secondaryBg = colors.bg.primary;
  const divider = colors.border.subtle;

  if (color === "warning") {
    return {
      main: colors.functional.danger.main,
      bg: colors.functional.danger[6],
      border: colors.functional.danger[30],
      borderLow: colors.functional.danger[12],
      lightBg: colors.functional.danger[12],
      inverseText,
      mutedText,
      secondaryBg,
      divider,
    };
  }

  if (color === "notice") {
    return {
      main: colors.functional.notice.main,
      bg: colors.functional.notice[6],
      border: colors.functional.notice[30],
      borderLow: colors.functional.notice[12],
      lightBg: colors.functional.notice[12],
      inverseText,
      mutedText,
      secondaryBg,
      divider,
    };
  }

  if (color === "success") {
    return {
      main: colors.functional.success.main,
      bg: colors.functional.success[6],
      border: colors.functional.success[30],
      borderLow: colors.functional.success[12],
      lightBg: colors.functional.success[12],
      inverseText,
      mutedText,
      secondaryBg,
      divider,
    };
  }

  if (color === "regular") {
    return {
      main: colors.brand.primary,
      bg: colors.bg.brandSubtle,
      border: colors.border.brand,
      borderLow: colors.border.brand,
      lightBg: colors.bg.brandSubtle,
      inverseText,
      mutedText,
      secondaryBg,
      divider,
    };
  }

  return {
    main: colors.tag.default.main,
    bg: colors.tag.default[6],
    border: colors.tag.default[30],
    borderLow: colors.tag.default[12],
    lightBg: colors.tag.default[12],
    inverseText,
    mutedText,
    secondaryBg,
    divider,
  };
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
  const { colors } = useTheme();
  const spec = TAG_SPECS[size];
  const palette = resolveTagPalette(colors, color);

  if (type === "regular") {
    let style: CSSProperties = {};

    if (level === "high") {
      style = { backgroundColor: palette.main, color: palette.inverseText };
    } else if (level === "medium") {
      if (solidBorder) {
        style = {
          border: `2px solid ${palette.main}`,
          color: palette.main,
          backgroundColor: STATIC.transparent,
        };
      } else {
        style = {
          border: `1px solid ${palette.border}`,
          backgroundColor: palette.bg,
          color: palette.main,
        };
      }
    } else {
      style = {
        border: `1px solid ${palette.borderLow}`,
        backgroundColor: palette.bg,
        color: palette.main,
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
          gap: `${spec.gap}px`,
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

  if (level === "high") {
    return (
      <div className={`inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0] ${className}`}>
        <div
          className="col-start-1 row-start-1 flex items-center justify-start relative w-full justify-self-stretch"
          style={{
            backgroundColor: palette.main,
            height: `${spec.height}px`,
            paddingLeft: `${Math.max(4, spec.padding - 2)}px`,
            borderRadius: `${spec.radius}px`,
          }}
        >
          <div style={{ width: `${spec.iconSize}px`, height: `${spec.iconSize}px` }} className="relative shrink-0">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d="M16.0133 2.40015H7.42171L4.00049 21.5999H7.44743L8.60499 15.1324H13.4667C17.2224 15.1324 18.5085 14.0164 19.2031 10.1359L19.6404 7.72637C19.8719 6.38213 20.0005 5.49443 20.0005 4.83499C20.0005 2.93277 18.7915 2.40015 16.0133 2.40015ZM16.1934 7.72637L15.9619 9.07061C15.5246 11.6069 15.113 12.4185 13.0552 12.4185H9.09374L10.3799 5.11398H14.4957C15.9362 5.11398 16.4249 5.26616 16.4249 6.05241C16.4249 6.35677 16.322 7.01621 16.1934 7.72637Z" fill={palette.inverseText} />
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
          <div className="absolute inset-0" style={{ backgroundColor: palette.secondaryBg }} aria-hidden="true" />
          <div className="absolute inset-0" style={{ backgroundColor: palette.lightBg }} aria-hidden="true" />
          <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none" style={{ borderColor: palette.main, borderRadius: `${spec.radius}px` }} />
          <div className="relative z-10 flex items-center h-full" style={{ padding: `0 ${spec.padding}px` }}>
            <span className="font-['Noto_Sans_S_Chinese:Medium']" style={{ color: palette.main, fontSize: `${spec.fontSize}px`, lineHeight: 1 }}>空</span>
            <span className="font-['DIN:Medium'] ml-[2px]" style={{ color: palette.main, fontSize: `${spec.fontSize}px`, lineHeight: 1 }}>36</span>
            <span className="font-['DIN:Regular'] mx-[4px]" style={{ color: palette.mutedText, fontSize: `${spec.fontSize}px`, lineHeight: 1 }}>/</span>
            <span className="font-['Noto_Sans_S_Chinese:Medium']" style={{ color: palette.mutedText, fontSize: `${spec.fontSize}px`, lineHeight: 1 }}>共</span>
            <span className="font-['DIN:Medium'] ml-[2px]" style={{ color: palette.mutedText, fontSize: `${spec.fontSize}px`, lineHeight: 1 }}>320</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex ${className}`} style={{ height: `${spec.height}px` }}>
      <div
        className="flex items-center justify-center box-border"
        style={{
          backgroundColor: palette.bg,
          border: `1px solid ${palette.border}`,
          borderRightStyle: 'none',
          padding: `0 ${spec.padding}px`,
          borderTopLeftRadius: `${spec.radius}px`,
          borderBottomLeftRadius: `${spec.radius}px`,
          gap: `${spec.gap}px`,
        }}
      >
        <span className="font-['Noto_Sans_S_Chinese:Regular']" style={{ color: palette.main, fontSize: `${spec.fontSize}px` }}>即将营业</span>
      </div>
      <div
        className="flex items-center justify-center box-border"
        style={{
          backgroundColor: palette.secondaryBg,
          border: `1px solid ${palette.border}`,
          borderLeftStyle: 'none',
          padding: `0 ${spec.padding}px`,
          borderTopRightRadius: `${spec.radius}px`,
          borderBottomRightRadius: `${spec.radius}px`,
          gap: `${spec.gap * 2}px`,
        }}
      >
        <span className="font-['DIN:Regular']" style={{ color: palette.mutedText, fontSize: `${spec.fontSize}px` }}>16:30-21:30</span>
        <div className="w-px h-[12px]" style={{ backgroundColor: palette.divider }} />
        <span className="font-['DIN:Regular']" style={{ color: palette.mutedText, fontSize: `${spec.fontSize}px` }}>最晚入...</span>
      </div>
    </div>
  );
}

export { TAG_SPECS };
