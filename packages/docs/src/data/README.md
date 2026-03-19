# TAI Design System - Color Token 使用指南

## 架构概览

```
┌─────────────────────────────────────────────────────────────────┐
│  Component Layer (组件层)                                        │
│  └── 组件直接使用语义 Token                                       │
├─────────────────────────────────────────────────────────────────┤
│  Semantic Layer (语义层) - semanticTokens.ts                     │
│  └── text / icon / surface / border / action / status / state   │
├─────────────────────────────────────────────────────────────────┤
│  Primitive Layer (基础层) - primitives.ts                        │
│  └── alpha / blueGray / status / theme / static                 │
└─────────────────────────────────────────────────────────────────┘
```

## 核心原则

1. **组件只使用语义 Token**：不直接使用 primitive 色板
2. **主题色只作为输入**：通过 `themeName` 参数传入，自动计算语义色
3. **统一命名规范**：使用 `Pressed` 而非 `Active`
4. **完整的类型支持**：所有 Token 都有完整的 TypeScript 类型

## 快速开始

### 1. 获取 Token

```tsx
import { getTokens } from '@/data/colorTokens';

function MyComponent() {
  const { isDark } = useOutletContext();
  const tokens = getTokens(isDark);
  
  return (
    <div style={{ color: tokens.text.primary }}>
      Hello World
    </div>
  );
}
```

### 2. 支持主题色切换

```tsx
import { getTokens } from '@/data/colorTokens';
import type { ThemeName } from '@/data/colorTokens';

function MyComponent({ themeName = 'darkBlue' }: { themeName?: ThemeName }) {
  const { isDark } = useOutletContext();
  const tokens = getTokens(isDark, themeName);
  
  return (
    <button style={{ 
      backgroundColor: tokens.action.primary.bg,
      color: tokens.action.primary.text,
    }}>
      品牌按钮
    </button>
  );
}
```

## 按钮颜色使用指南

### Action Token 结构

每个按钮 variant 都有完整的颜色定义：

```typescript
interface InteractiveActionToken {
  // 背景色
  bg: string;
  bgHover: string;
  bgPressed: string;
  bgDisabled: string;
  
  // 文字色
  text: string;
  textHover: string;
  textPressed: string;
  textDisabled: string;
  
  // 图标色
  icon: string;
  iconHover: string;
  iconPressed: string;
  iconDisabled: string;
  
  // 边框色（可选）
  border?: string;
  borderHover?: string;
  borderPressed?: string;
  borderDisabled?: string;
}
```

### 可用的按钮 Variant

| Variant | 用途 | 特点 |
|---------|------|------|
| `primary` | 主要操作 | 品牌色实心背景 |
| `secondary` | 次要操作 | 透明背景 + 边框 |
| `tertiary` | 三级操作 | 灰色弱化背景 |
| `ghost` | 幽灵按钮 | 纯文字，hover 显示背景 |
| `danger` | 危险操作 | 红色实心背景 |
| `link` | 链接按钮 | 纯文字，品牌色 |

### 按钮组件示例

```tsx
import { getTokens, type InteractiveActionToken } from '@/data/colorTokens';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'link';

interface ButtonProps {
  variant?: ButtonVariant;
  disabled?: boolean;
  children: React.ReactNode;
}

function Button({ variant = 'primary', disabled, children }: ButtonProps) {
  const { isDark } = useOutletContext();
  const tokens = getTokens(isDark);
  
  // 直接获取对应 variant 的 token
  const actionToken = tokens.action[variant];
  
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  
  // 根据状态选择颜色
  const getBgColor = () => {
    if (disabled) return actionToken.bgDisabled;
    if (isPressed) return actionToken.bgPressed;
    if (isHovered) return actionToken.bgHover;
    return actionToken.bg;
  };
  
  const getTextColor = () => {
    if (disabled) return actionToken.textDisabled;
    if (isPressed) return actionToken.textPressed;
    if (isHovered) return actionToken.textHover;
    return actionToken.text;
  };
  
  return (
    <button
      style={{
        backgroundColor: getBgColor(),
        color: getTextColor(),
        border: actionToken.border ? `1px solid ${actionToken.border}` : 'none',
      }}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsPressed(false); }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      {children}
    </button>
  );
}
```

## 语义 Token 分类

### text - 文字颜色

```tsx
tokens.text.primary      // 主要文字：标题、重要内容
tokens.text.secondary    // 次要文字：正文、描述
tokens.text.tertiary     // 三级文字：辅助说明、备注
tokens.text.placeholder  // 占位符文字
tokens.text.disabled     // 禁用文字
tokens.text.inverse      // 反转文字（用于深色背景上）
tokens.text.link         // 链接文字
tokens.text.success      // 成功状态文字
tokens.text.warning      // 警告状态文字
tokens.text.error        // 错误状态文字
tokens.text.info         // 信息状态文字
```

### icon - 图标颜色

```tsx
tokens.icon.primary      // 主要图标
tokens.icon.secondary    // 次要图标
tokens.icon.tertiary     // 三级图标
tokens.icon.disabled     // 禁用图标
tokens.icon.inverse      // 反转图标
tokens.icon.brand        // 品牌色图标
tokens.icon.success      // 成功状态图标
// ... 类似 text
```

### surface - 背景/容器颜色

```tsx
tokens.surface.page          // 页面背景
tokens.surface.container     // 主容器背景
tokens.surface.containerLow  // 次级容器背景
tokens.surface.card          // 卡片背景
tokens.surface.cardElevated  // 悬浮卡片背景
tokens.surface.subtle        // 微妙背景
tokens.surface.muted         // 柔和背景
tokens.surface.overlay       // 遮罩背景
tokens.surface.code          // 代码块背景
tokens.surface.brandSubtle   // 品牌色浅底
tokens.surface.successSubtle // 成功状态浅底
// ...
```

### border - 边框颜色

```tsx
tokens.border.default   // 默认边框
tokens.border.subtle    // 轻量边框
tokens.border.medium    // 中等边框
tokens.border.strong    // 强调边框
tokens.border.focus     // 焦点边框
tokens.border.brand     // 品牌色边框
tokens.border.success   // 成功状态边框
// ...
```

### action - 交互元素颜色

```tsx
tokens.action.primary    // 主要操作
tokens.action.secondary  // 次要操作
tokens.action.tertiary   // 三级操作
tokens.action.ghost      // 幽灵操作
tokens.action.danger     // 危险操作
tokens.action.link       // 链接操作
```

### status - 状态颜色

```tsx
tokens.status.success.bg       // 成功状态背景
tokens.status.success.bgSubtle // 成功状态浅底
tokens.status.success.border   // 成功状态边框
tokens.status.success.text     // 成功状态文字
tokens.status.success.icon     // 成功状态图标

// 同样有 warning / error / info / notice
```

### state - 交互状态颜色

```tsx
tokens.state.hover.bg         // Hover 背景
tokens.state.active.bg        // Active 背景
tokens.state.selected.bg      // 选中背景
tokens.state.selected.border  // 选中边框
tokens.state.focused.ring     // 焦点环
tokens.state.disabled.bg      // 禁用背景
tokens.state.disabled.text    // 禁用文字
```

## 迁移指南

如果你的代码还在使用旧的 `button.*` 或 `c(isDark)` 接口，请参考 `action-token-migration.ts` 文件进行迁移。

### 主要变更

1. `bgActive` → `bgPressed`
2. `textActive` → `textPressed`
3. `iconActive` → `iconPressed`
4. `colors.button.xxx` → `tokens.action.xxx`

### 迁移示例

```tsx
// ❌ 旧写法
const colors = c(isDark);
const bg = colors.button.primary.bg;
const bgActive = colors.button.primary.bgActive;

// ✅ 新写法
const tokens = getTokens(isDark, themeName);
const bg = tokens.action.primary.bg;
const bgPressed = tokens.action.primary.bgPressed;
```

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
packages/docs/src/data/
├── primitives.ts          # 基础色板定义
├── semanticTokens.ts      # 语义 Token 定义
├── colorTokens.ts         # 统一导出入口
├── action-token-migration.ts  # 迁移工具和映射表
└── README.md              # 本文档
```
