import svgPathsChecked from "../assets/svg-data/svg-oznl9js8qm";
import svgPathsUnchecked from "../assets/svg-data/svg-kojoco54sr";

interface CheckboxComponentProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export function CheckboxComponent({
  checked,
  onChange,
  disabled = false,
}: CheckboxComponentProps) {
  return (
    <button
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      className="relative cursor-pointer disabled:cursor-not-allowed"
      style={{
        width: "48px",
        height: "48px",
        opacity: disabled ? 0.2 : 1,
      }}
    >
      {checked ? (
        // 选中状态 - 黑色圆形带对勾
        <div className="absolute left-0 overflow-clip size-[48px] top-0">
          <div className="absolute inset-[10.42%]">
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 38 38"
            >
              <path
                clipRule="evenodd"
                d={svgPathsChecked.p2b164270}
                fill="black"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      ) : (
        // 未选中状态 - 灰色边框空心圆
        <div className="absolute left-0 overflow-clip size-[48px] top-0">
          <div className="absolute inset-[10.42%]">
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 38 38"
            >
              <path
                clipRule="evenodd"
                d={svgPathsUnchecked.p1ca6f0f0}
                fill="rgba(0,0,0,0.24)"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      )}
    </button>
  );
}
