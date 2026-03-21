/**
 * TAI Design - 车机端设计系统组件库
 *
 * @packageDocumentation
 */

// ============================================================================
// Tokens
// ============================================================================

export * from "./tokens";

// ============================================================================
// Hooks
// ============================================================================

export {
  ThemeContext,
  ThemeProvider,
  useTheme,
  useThemeOptional,
  resolveTheme,
} from "./hooks";

export type { ThemeContextValue, ThemeProviderProps } from "./hooks";

// ============================================================================
// Components
// ============================================================================

export {
  Button,
  BUTTON_SIZE_CONFIG,
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  BUTTON_ICON_POSITIONS,
  BUTTON_VISUAL_STATES,
} from "./button";
export type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  ButtonIconPosition,
  ButtonVisualState,
} from "./button";

export { Card } from "./card";
export type { CardProps, CardVariant } from "./card";

export { Input } from "./input";
export type { InputProps, InputType } from "./input";

export { Checkbox } from "./checkbox";
export type { CheckboxProps } from "./checkbox";

export { Switch } from "./switch";
export type { SwitchProps } from "./switch";

export { Slider } from "./slider";
export type { SliderProps } from "./slider";

export { Tag } from "./tag";
export type { TagProps } from "./tag";

export { Badge } from "./badge";
export type { BadgeProps } from "./badge";

export { Divider } from "./divider";
export type { DividerProps } from "./divider";

export { List, ListItem } from "./list";
export type { ListProps, ListItemProps } from "./list";

export { Comment } from "./comment";
export type { CommentAction, CommentProps } from "./comment";

export { Dialog } from "./dialog";
export type { DialogProps } from "./dialog";

export { Toast } from "./toast";
export type { ToastProps } from "./toast";

export { Tips } from "./tips";
export type { TipsProps } from "./tips";

export { Push } from "./push";
export type { PushProps } from "./push";

export { Loading } from "./loading";
export type { LoadingProps } from "./loading";

export { ActionSheet } from "./action-sheet";
export type { ActionSheetProps, ActionSheetAction } from "./action-sheet";

export { Tabs } from "./tabs";
export type { TabsProps, TabItem, TabsVariant, TabsSize } from "./tabs";

export { Image } from "./image";
export type { ImageProps, ImageRadius } from "./image";

export { Video } from "./video";
export type { VideoProps, VideoVariant } from "./video";

export { AudioPlayer } from "./audio-player";
export type { AudioPlayerProps, AudioPlayerVariant } from "./audio-player";

export { ChoicePicker } from "./choice-picker";
export type {
  ChoicePickerProps,
  ChoicePickerMode,
  ChoiceOption,
} from "./choice-picker";
