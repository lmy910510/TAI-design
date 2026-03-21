import { useThemeOptional } from "@tai-design/components";

interface CheckboxComponentProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const SIZE = 48;
const STROKE_WIDTH = 3;

function Checkmark({ color }: { color: string }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5.5 12.5L10 17L18.5 8.5"
        stroke={color}
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckboxComponent({
  checked,
  onChange,
  disabled = false,
}: CheckboxComponentProps) {
  const { tokens } = useThemeOptional();

  return (
    <button
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      className="relative inline-flex items-center justify-center cursor-pointer disabled:cursor-not-allowed"
      style={{
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        opacity: disabled ? 0.2 : 1,
        backgroundColor: checked ? tokens.checkbox.checked : "transparent",
        border: checked ? "none" : `2px solid ${tokens.checkbox.unchecked}`,
        transition: "background-color 150ms ease, border-color 150ms ease",
      }}
      type="button"
      aria-pressed={checked}
    >
      {checked ? <Checkmark color={tokens.checkbox.checkmark} /> : null}
    </button>
  );
}
