# TAI Design System - Color Token 使用指南

## 架构概览

```
┌─────────────────────────────────────────────────────────────────┐
│  Docs Compatibility Layer                                       │
│  └── colorTokens.ts（仅保留历史导入路径）                        │
├─────────────────────────────────────────────────────────────────┤
│  @tai-design/components / tokens                                │
│  ├── semanticTokens.ts   # 公开语义 Token（4 组 TDesign 风格） │
│  ├── legacyColors.ts     # 组件运行时兼容色值结构               │
│  └── primitives.ts       # alpha / blueGray / status / theme   │
└─────────────────────────────────────────────────────────────────┘
```

## 核心原则

1. **TDesign 风格命名**：textColor / bgColor / borderColor / functionalColor（4 类）
2. **文字与图标统一**：不再区分 text 和 icon，一律用 `textColor`（对标 TDesign @text-color-*）
3. **车机端无 hover**：没有鼠标，不需要悬停态
4. **按下态统一蒙层**：所有组件按下时上层叠加 `rgba(0, 0, 0, 0.12)` 蒙层（`PRESSED_OVERLAY`），不在 token 层逐个定义 active 色
5. **功能色三态**：每种功能色只提供 main + disabled + light
6. **按钮配色归组件**：交互状态（hover/pressed/disabled）下沉到 `_action`，不公开
7. **完整的类型支持**：所有 Token 都有完整的 TypeScript 类型
8. **向后兼容**：旧路径 content/surface/border/feedback 仍可使用

## 快速开始

### 1. 获取 Token

```tsx
import { getTokens } from '@/data/colorTokens';

function MyComponent() {
  const { isDark } = useOutletContext();
  const tokens = getTokens(isDark);
  
  return (
    <div style={{ color: tokens.textColor.primary }}>
      Hello World
    </div>
  );
}
```

### 2. 车机端按下态实现

```tsx
import { PRESSED_OVERLAY } from '@/data/colorTokens';

function PressableCard({ children }) {
  const [pressed, setPressed] = useState(false);
  
  return (
    <div
      style={{ position: 'relative' }}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
    >
      {children}
      {pressed && (
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: PRESSED_OVERLAY, // rgba(0, 0, 0, 0.12)
          borderRadius: 'inherit',
          pointerEvents: 'none',
        }} />
      )}
    </div>
  );
}
```

### 3. 支持主题色切换

```tsx
import { getTokens } from '@/data/colorTokens';
import type { ThemeName } from '@/data/colorTokens';

function MyComponent({ themeName = 'darkBlue' }: { themeName?: ThemeName }) {
  const { isDark } = useOutletContext();
  const tokens = getTokens(isDark, themeName);
  
  return (
    <a
      style={{
        color: tokens.textColor.link,
        borderBottom: `1px solid ${tokens.borderColor.brand}`,
      }}
    >
      品牌语义链接
    </a>
  );
}
```

## 公开语义 Token 分类（4 组 TDesign 风格）

### textColor — 文字色（对标 TDesign @text-color-*）

```tsx
tokens.textColor.primary      // 主要文字 — @text-color-primary
tokens.textColor.secondary    // 次要文字 — @text-color-secondary
tokens.textColor.tertiary     // 辅助文字
tokens.textColor.disabled     // 禁用态文字 — @text-color-disabled
tokens.textColor.placeholder  // 占位符文字 — @text-color-placeholder
tokens.textColor.anti         // 反色文字 — @text-color-anti
tokens.textColor.brand        // 品牌色文字 — @text-color-brand
tokens.textColor.link         // 链接文字 — @text-color-link
```

### bgColor — 背景色（对标 TDesign @bg-color-*）

```tsx
tokens.bgColor.page                    // 页面背景 — @bg-color-page
tokens.bgColor.container               // 容器背景 — @bg-color-container
tokens.bgColor.secondaryContainer      // 次级容器 — @bg-color-secondarycontainer
tokens.bgColor.component               // 组件背景（蓝灰色板）— @bg-color-component
tokens.bgColor.componentDisabled       // 组件禁用（蓝灰色板）— @bg-color-component-disabled
tokens.bgColor.specialComponent        // 特殊组件（蓝灰色板）— @bg-color-specialcomponent
tokens.bgColor.elevated                // 悬浮/弹出层背景
tokens.bgColor.overlay                 // 遮罩 — @mask-active
tokens.bgColor.maskDisabled            // 禁用遮罩 — @mask-disabled
tokens.bgColor.pressedOverlay          // 按下态蒙层 rgba(0,0,0,0.12)
tokens.bgColor.code                    // 代码块背景
tokens.bgColor.glass                   // 毛玻璃背景
tokens.bgColor.brand                   // 品牌色背景
tokens.bgColor.brandLight              // 品牌浅底 — @brand-color-light
tokens.bgColor.successLight            // 成功浅底 — @success-color-light
tokens.bgColor.warningLight            // 警告浅底 — @warning-color-light
tokens.bgColor.errorLight              // 错误浅底 — @error-color-light
tokens.bgColor.infoLight               // 信息浅底
```

### borderColor — 边框色（对标 TDesign @border-level-*）

```tsx
tokens.borderColor.level1     // 一级分割线 — @border-level-1-color
tokens.borderColor.level2     // 二级边框 — @border-level-2-color
tokens.borderColor.component  // 组件描边 — @component-stroke
tokens.borderColor.focus      // 聚焦边框
tokens.borderColor.inverse    // 反色边框
tokens.borderColor.brand      // 品牌色边框
```

### functionalColor — 功能色（对标 TDesign @brand/success/warning/error-color 三态）

```tsx
// 品牌色
tokens.functionalColor.brand.main      // 品牌标准色 — @brand-color
tokens.functionalColor.brand.disabled  // 品牌禁用 — @brand-color-disabled
tokens.functionalColor.brand.light     // 品牌浅底 — @brand-color-light

// 成功色
tokens.functionalColor.success.main    // 成功标准色 — @success-color
tokens.functionalColor.success.disabled// 成功禁用 — @success-color-disabled
tokens.functionalColor.success.light   // 成功浅底 — @success-color-light

// 警告色
tokens.functionalColor.warning.main    // 警告标准色 — @warning-color
tokens.functionalColor.warning.disabled// 警告禁用 — @warning-color-disabled
tokens.functionalColor.warning.light   // 警告浅底 — @warning-color-light

// 错误色
tokens.functionalColor.error.main      // 错误标准色 — @error-color
tokens.functionalColor.error.disabled  // 错误禁用 — @error-color-disabled
tokens.functionalColor.error.light     // 错误浅底 — @error-color-light

// 信息色
tokens.functionalColor.info.main       // 信息标准色
tokens.functionalColor.info.disabled   // 信息禁用
tokens.functionalColor.info.light      // 信息浅底
```

## 向后兼容（@deprecated）

旧路径仍可使用但标记为 `@deprecated`，后续版本将移除：

| 旧路径 | 新路径（TDesign 风格） |
|--------|----------------------|
| `tokens.content.primary` | `tokens.textColor.primary` |
| `tokens.content.inverse` | `tokens.textColor.anti` |
| `tokens.content.onBrand` | `tokens.textColor.brand` |
| `tokens.surface.page` | `tokens.bgColor.page` |
| `tokens.surface.container` | `tokens.bgColor.container` |
| `tokens.surface.brandSubtle` | `tokens.bgColor.brandLight` |
| `tokens.surface.successSubtle` | `tokens.bgColor.successLight` |
| `tokens.border.default` | `tokens.borderColor.level2` |
| `tokens.border.subtle` | `tokens.borderColor.level1` |
| `tokens.border.medium` | `tokens.borderColor.component` |
| `tokens.feedback.success.main` | `tokens.functionalColor.success.main` |
| `tokens.feedback.success.subtle` | `tokens.functionalColor.success.light` |
| `tokens.text.primary` | `tokens.textColor.primary` |
| `tokens.icon.primary` | `tokens.textColor.primary` |
| `tokens.action.primary.bg` | `tokens._action.primary.bg`（组件内部） |

## TDesign 对标关系

| TAI Token | TDesign 变量 | 说明 |
|-----------|-------------|------|
| `textColor.*` | `@text-color-*` | 文字色 |
| `bgColor.page` | `@bg-color-page` | 页面背景 |
| `bgColor.container` | `@bg-color-container` | 容器背景 |
| `bgColor.component` | `@bg-color-component` | 组件背景 |
| `bgColor.overlay` | `@mask-active` | 遮罩 |
| `borderColor.level1` | `@border-level-1-color` | 一级分割线 |
| `borderColor.level2` | `@border-level-2-color` | 二级边框 |
| `borderColor.component` | `@component-stroke` | 组件描边 |
| `functionalColor.brand.*` | `@brand-color-*` | 品牌色三态 |
| `functionalColor.success.*` | `@success-color-*` | 成功色三态 |
| `functionalColor.warning.*` | `@warning-color-*` | 警告色三态 |
| `functionalColor.error.*` | `@error-color-*` | 错误色三态 |

## 车机端按下态设计原则

**所有组件的按下态统一为：在组件上层叠加 `rgba(0, 0, 0, 0.12)` 蒙层。**

- 使用 `PRESSED_OVERLAY` 常量 或 `tokens.bgColor.pressedOverlay`
- 不在 token 层为每个颜色单独定义 active/pressed 变体
- 蒙层通过 `position: absolute; inset: 0` 覆盖在组件上

## 按钮配色（组件内部）

按钮的交互配色已从公开语义层下沉到 `_action`（下划线前缀表示内部）。

**一般业务代码不需要直接使用**——直接用 `<Button variant="primary">` 组件即可。

如果确实需要自定义按钮样式：

```tsx
const tokens = getTokens(isDark);
const btnColors = tokens._action.primary;

// btnColors.bg / .bgHover / .bgPressed / .bgDisabled
// btnColors.text / .textHover / .textPressed / .textDisabled
// btnColors.border（可选）
```

可用的 variant：`primary` / `secondary` / `ghost` / `danger` / `link`

## 主题色列表

可用的主题色名称（`ThemeName`）：

- `yellowGreen` - 黄绿
- `grassGreen` - 草绿
- `mossGreen` - 苔绿
- `teal` - 蓝绿
- `cyan` - 青
- `lightBlue` - 浅蓝
- `darkBlue` - 深蓝（默认）
- `indigo` - 靛蓝
- `darkPurple` - 深紫
- `purple` - 紫
- `copper` - 紫红
- `fuchsia` - 品红
- `pink` - 粉

## 文件结构

```
packages/components/src/tokens/
├── primitives.ts              # 基础色板定义（单一事实源）
├── legacyColors.ts            # 组件运行时色值工厂
├── semanticTokens.ts          # 公开语义 Token（4 组 TDesign 风格）+ 向后兼容别名
├── action-token-migration.ts  # 按钮迁移工具（向后兼容）
└── index.ts                   # 统一导出 + SPACING / RADIUS / SHADOW

packages/docs/src/data/
├── colorTokens.ts             # 兼容入口（转发 @tai-design/components）
└── README.md                  # 本文档
```
