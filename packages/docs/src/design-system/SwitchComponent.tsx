import {
  Switch as TaiSwitch,
  type SwitchProps,
  useThemeOptional,
} from "@tai-design/components";

type SwitchComponentProps = Pick<
  SwitchProps,
  "checked" | "onChange" | "disabled"
>;

export function SwitchComponent(props: SwitchComponentProps) {
  const { isDark } = useThemeOptional();

  return <TaiSwitch {...props} isDark={isDark} />;
}
