import { ReactNode } from "react";
import { RADIUS, useThemeOptional } from "@tai-design/components";

export interface GlobalLeftTabProps {
  variant?: "simplified" | "extended";
  className?: string;
  children: ReactNode;
  bottomContent?: ReactNode;
}

/**
 * 全局左侧标签页 (Global Left Tab)
 * 文档站保留布局壳层，但颜色统一由主题 token 提供。
 */
export function GlobalLeftTab({
  variant = "simplified",
  className = "",
  children,
  bottomContent,
}: GlobalLeftTabProps) {
  const { colors } = useThemeOptional();

  if (variant === "simplified") {
    return (
      <div className={`relative h-full w-[96px] ${className}`}>
        <div
          className="absolute left-0 top-0 flex w-[96px] flex-col items-start gap-[18px] overflow-clip p-[6px]"
          style={{
            backgroundColor: colors.bg.glass,
            borderRadius: 117.073,
            border: `1px solid ${colors.border.inverse}`,
            backdropFilter: "blur(12px)",
          }}
        >
          {children}
        </div>
        {bottomContent ? <div className="absolute bottom-[48px] left-0">{bottomContent}</div> : null}
      </div>
    );
  }

  return (
    <div
      className={`relative w-[278px] ${className}`}
      data-name="Window"
      style={{
        borderRadius: 40,
        backgroundColor: colors.bg.glass,
        border: `1px solid ${colors.border.inverse}`,
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="flex size-full flex-col items-center overflow-clip rounded-[inherit] py-[20px]">
        <div className="relative min-h-px flex-[1_0_0] shrink-0 w-full">
          <div className="flex size-full flex-col items-center">
            <div className="relative flex size-full flex-col items-center justify-between px-[20px]">
              <div className="mb-[20px] flex min-h-px flex-[1_0_0] shrink-0 flex-col items-start gap-[20px] w-full">
                {children}
              </div>
              {bottomContent ? (
                <div className="relative flex w-full shrink-0 flex-col items-center justify-center gap-[20px]">
                  {bottomContent}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export interface GlobalLeftTabItemProps {
  active?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
}

export function GlobalLeftTabSimplifiedItem({
  active,
  onClick,
  icon,
  className = "",
}: GlobalLeftTabItemProps) {
  const { colors } = useThemeOptional();

  return (
    <button
      onClick={onClick}
      type="button"
      className={`relative flex shrink-0 items-center overflow-clip p-[21px] transition-colors ${className}`}
      style={{
        borderRadius: 107.692,
        backgroundColor: active ? colors.interactive.default : colors.static.transparent,
        color: active ? colors.text.inverse : colors.text.secondary,
      }}
    >
      <div className="relative flex size-[42px] shrink-0 items-center justify-center">{icon}</div>
    </button>
  );
}

export function GlobalLeftTabSimplifiedBottomButton({
  onClick,
  icon,
  className = "",
}: Omit<GlobalLeftTabItemProps, "active">) {
  const { colors } = useThemeOptional();

  return (
    <button
      onClick={onClick}
      type="button"
      className={`flex h-[96px] w-[96px] items-center justify-center overflow-clip transition-colors ${className}`}
      style={{
        backgroundColor: colors.bg.glass,
        borderRadius: 100,
        color: colors.text.secondary,
        border: `1px solid ${colors.border.inverse}`,
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="relative flex h-[42px] w-[42px] shrink-0 items-center justify-center">{icon}</div>
    </button>
  );
}

export function GlobalLeftTabExtendedBottomButton({
  onClick,
  icon,
  className = "",
}: Omit<GlobalLeftTabItemProps, "active">) {
  const { colors } = useThemeOptional();

  return (
    <button
      onClick={onClick}
      type="button"
      className={`relative flex h-[80px] w-full shrink-0 items-center justify-center ${className}`}
      style={{
        backgroundColor: colors.bg.secondary,
        borderRadius: RADIUS.xl,
      }}
    >
      <div
        className="relative min-h-px min-w-px flex-[1_0_0]"
        style={{
          height: "100%",
          borderRadius: RADIUS.xl,
          backgroundColor: colors.bg.glass,
          border: `1px solid ${colors.border.inverse}`,
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex size-full flex-row items-center justify-center">
          <div className="relative flex size-full items-center justify-center py-[30px]">
            <div
              className="relative flex size-[48px] shrink-0 items-center justify-center"
              style={{ color: colors.text.primary }}
            >
              {icon}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

export interface ContentTopTabProps {
  className?: string;
  children: ReactNode;
}

export function ContentTopTab({ className = "", children }: ContentTopTabProps) {
  const { colors } = useThemeOptional();

  return (
    <div
      className={`relative flex w-max shrink-0 items-center gap-[36px] p-[6px] ${className}`}
      data-name="top tab"
      style={{
        backgroundColor: colors.bg.secondary,
        borderRadius: 50,
      }}
    >
      {children}
    </div>
  );
}

export interface ContentTopTabItemProps {
  active?: boolean;
  onClick?: () => void;
  label: string;
  className?: string;
}

export function ContentTopTabItem({ active, onClick, label, className = "" }: ContentTopTabItemProps) {
  const { colors } = useThemeOptional();

  return (
    <button
      onClick={onClick}
      type="button"
      className={`relative flex shrink-0 items-center overflow-clip transition-colors ${className}`}
      style={{
        padding: active ? "18px 48px" : "18px 24px",
        borderRadius: 100,
        backgroundColor: active ? colors.interactive.default : colors.static.transparent,
        color: active ? colors.text.inverse : colors.text.secondary,
      }}
      data-name={active ? "State=Active" : "State=Default"}
    >
      <p className="relative shrink-0 whitespace-nowrap font-['Noto_Sans_SC:Regular',sans-serif] text-[28px] leading-[28px]">
        {label}
      </p>
    </button>
  );
}
