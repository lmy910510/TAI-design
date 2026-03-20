import { motion } from "motion/react";
import { useThemeOptional } from "@tai-design/components";

interface SwitchComponentProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const SWITCH_CONFIG = {
  width: 90,
  height: 54,
  circleSize: 40,
  padding: 7,
} as const;

export function SwitchComponent({
  checked,
  onChange,
  disabled = false,
}: SwitchComponentProps) {
  const { colors } = useThemeOptional();

  const circleOffset = checked
    ? SWITCH_CONFIG.width - SWITCH_CONFIG.circleSize - SWITCH_CONFIG.padding
    : SWITCH_CONFIG.padding;

  return (
    <button
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      className="relative cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
      style={{
        width: SWITCH_CONFIG.width,
        height: SWITCH_CONFIG.height,
      }}
      type="button"
      aria-pressed={checked}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          backgroundColor: checked ? colors.switch.on : colors.switch.off,
        }}
        transition={{ duration: 0.2 }}
      />

      <motion.div
        className="absolute rounded-full"
        style={{
          width: SWITCH_CONFIG.circleSize,
          height: SWITCH_CONFIG.circleSize,
          top: SWITCH_CONFIG.padding,
          backgroundColor: colors.switch.thumb,
          boxShadow: `0 2px 6px ${colors.bg.overlay}`,
        }}
        animate={{ left: circleOffset }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </button>
  );
}
