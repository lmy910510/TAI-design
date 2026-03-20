/**
 * 车机端设计系统组件库
 * 统一导出入口
 */

// 导航栏组件
export { PageTopNavBar } from './PageTopNavBar';
export type { PageTopNavBarProps, PageTopNavBarAction } from './PageTopNavBar';

export { PageSubNavBar } from './PageSubNavBar';
export type { PageSubNavBarProps, PageSubNavBarAction } from './PageSubNavBar';

// 基础组件
export { CardComponent } from './CardComponent';
export type { CardComponentProps, CardVariant } from './CardComponent';

export { ButtonComponent } from './ButtonComponent';
export type { ButtonComponentProps } from './ButtonComponent';

export { CheckboxComponent } from './CheckboxComponent';

export { SwitchComponent } from './SwitchComponent';

export { ListComponent, ListItemComponent } from './ListComponent';
export type { ListComponentProps, ListItemProps } from './ListComponent';

export { 
  GlobalLeftTab, 
  GlobalLeftTabSimplifiedItem, 
  GlobalLeftTabSimplifiedBottomButton, 
  GlobalLeftTabExtendedBottomButton 
} from './TabsComponent';
export type { GlobalLeftTabProps, GlobalLeftTabItemProps } from './TabsComponent';

export { BaseMapComponent } from './BaseMapComponent';

// 反馈组件
export { TagComponent, TAG_SPECS, resolveTagPalette } from './TagComponent';
export type { TagComponentProps, TagType, TagLevel, TagSize, TagColor } from './TagComponent';

export { DialogComponent } from './DialogComponent';
export type { DialogComponentProps, DialogType, DialogSize } from './DialogComponent';

export { ToastComponent } from './ToastComponent';
export type { ToastComponentProps, ToastType } from './ToastComponent';

export { TipsComponent } from './TipsComponent';
export type { TipsComponentProps } from './TipsComponent';

export { PushComponent } from './PushComponent';
export type { PushComponentProps } from './PushComponent';

export { LoadingComponent } from './LoadingComponent';
export type { LoadingComponentProps, LoadingSize } from './LoadingComponent';

// 随行发现组件
export { DiscoveryCarousel } from './DiscoveryCarousel';
export type { DiscoveryCarouselProps, DiscoveryCard } from './DiscoveryCarousel';