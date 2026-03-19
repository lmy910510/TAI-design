import { motion } from "motion/react";

interface SwitchComponentProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

// 开关尺寸配置 - 基于车机端标准
const SWITCH_CONFIG = {
  width: 90,
  height: 54,
  circleSize: 40,
  padding: 7,
};

export function SwitchComponent({
  checked,
  onChange,
  disabled = false,
}: SwitchComponentProps) {
  const circleOffset = checked
    ? SWITCH_CONFIG.width - SWITCH_CONFIG.circleSize - SWITCH_CONFIG.padding
    : SWITCH_CONFIG.padding;

  return (
    <button
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      className="relative cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
      style={{
        width: `${SWITCH_CONFIG.width}px`,
        height: `${SWITCH_CONFIG.height}px`,
      }}
    >
      {/* 背景 */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          backgroundColor: checked
            ? "rgba(0, 0, 0, 0.8)"
            : "rgba(0, 0, 0, 0.24)",
        }}
        transition={{ duration: 0.2 }}
      />

      {/* 圆形滑块 */}
      <motion.div
        className="absolute bg-white rounded-full shadow-sm"
        style={{
          width: `${SWITCH_CONFIG.circleSize}px`,
          height: `${SWITCH_CONFIG.circleSize}px`,
          top: `${SWITCH_CONFIG.padding}px`,
        }}
        animate={{
          left: `${circleOffset}px`,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </button>
  );
}