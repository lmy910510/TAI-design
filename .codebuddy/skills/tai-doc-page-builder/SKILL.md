---
name: tai-doc-page-builder
description: 当新增或重构 TAI Design 文档页时使用；指导同步组件 API、文档包装组件、路由入口和目录导航，生成真实可维护的 docs 页面。
---

# TAI Doc Page Builder

## Overview

这个 skill 用于在 TAI Design 文档站中新增、重做或扩展组件文档页，确保页面结构、交互预览、路由接入和目录页信息一起完成。
当任务涉及 `packages/docs/src/design-system/pages/*`、`packages/docs/src/design-system/*Component.tsx`，或者用户要求"给组件补 docs / demo / 预览页"时，应使用本 skill。

## When to Use

- 为现有组件新增文档页
- 重构已有 docs 页面，使其与组件源码重新对齐
- 给文档页补状态预览、属性切换、信息面板或设计说明
- 新增 `*Component.tsx` 形式的文档包装组件
- 新增组件后需要接入 `main.tsx` 路由

## Required Touchpoints

新增或重构文档页时，至少检查这些位置：

- `packages/components/src/<component>/`：组件真实 API、类型、尺寸/变体常量
- `packages/docs/src/design-system/pages/<Page>.tsx`：页面主体
- `packages/docs/src/design-system/DocComponents.tsx`：共享文档骨架组件（**必须优先使用**）
- `packages/docs/src/design-system/<ComponentName>Component.tsx`：文档展示包装层（如果有）
- `packages/docs/src/main.tsx`：懒加载、路由、旧路径重定向

## DocComponents 共享骨架（必须使用）

所有新建/重构的文档页面**必须使用**以下共享组件，不允许手写等价样式：

| 组件 | 用途 |
|------|------|
| `DocPageHeader` | 页面头部（分类标签 + 标题 + 描述） |
| `DocSection` | 区块容器（h2 标题 + 可选描述 + children） |
| `DocPanel` | 说明卡片（6 种变体：elevated/subtle/accent/code/notice/success） |
| `DocSubsection` | h3 级别子区块 |
| `DocTokenTable` | Token 使用清单表格（自动双列/单列） |
| `DocGuidePanel` | 带标题的设计规范/使用指南面板 |
| `DocInlineCode` | 行内代码样式 |

```tsx
import { DocPageHeader, DocSection, DocPanel, DocTokenTable } from "../DocComponents";

export default function MyComponentPage() {
  return (
    <div>
      <DocPageHeader
        category="Components / 组件"
        title="Button 按钮"
        description="用于触发操作的交互元素"
      />
      <DocSection title="实时预览">
        {/* 预览内容 */}
      </DocSection>
      <DocSection title="🎨 Token 使用清单">
        <DocTokenTable rows={[...]} note={...} />
      </DocSection>
    </div>
  );
}
```

## Page-Build Workflow

### 1. 先读组件，不要先编页面

- 从组件包确认真实导出：组件名、props、尺寸、变体、状态枚举、辅助常量。
- 页面上的选项、说明文案、示例状态必须以组件真实能力为准。
- 不要在文档页里发明源码中不存在的 props 或状态。

### 2. 优先使用 DocComponents 骨架

- 页面头部必须使用 `DocPageHeader`，不要手写标题样式。
- 区块容器必须使用 `DocSection`/`DocSubsection`，不要手写 h2/h3 样式。
- Token 清单必须使用 `DocTokenTable`，不要手写表格。
- 说明面板使用 `DocPanel`（各种变体），设计规范面板用 `DocGuidePanel`。

### 3. 优先复用展示组件

- 如果一个组件需要更复杂的排版或组合示例，优先抽到 `packages/docs/src/design-system/*Component.tsx`。
- 包装组件应复用 `@tai-design/components` 的真实组件，不要重新手写一套样式。
- 文档包装层只负责展示组织，不负责重新定义视觉规范。

### 4. 页面结构保持稳定

TAI Design 的组件页优先采用以下结构：

1. 页面头部：`DocPageHeader`（分类 chip、标题、简介）
2. 左侧或首屏：实时预览区（`DocSection`）
3. 配置区：尺寸、变体、图标、状态等控制项
4. 信息面板：当前配置、尺寸值、行为说明（`DocPanel`）
5. Token 清单：`DocTokenTable`
6. 设计说明：`DocGuidePanel`

如果页面已有固定布局，优先沿用而不是重新造版式。

### 5. 接入路由

- 在 `packages/docs/src/main.tsx` 中补齐 lazy import 与路由配置。
- 如仓库保留旧路径重定向，新增页面时评估是否要加入 `legacyDesignSystemPaths`。

### 6. 主题与 token 规则

- 文档页也是 UI 代码，必须遵守 TAI Design 设计规范。
- 优先使用 `useTheme()`、`RADIUS`、`SPACING`、`SHADOW` 等统一 token。
- 页面示例文案必须与组件真实渲染一致，不能出现"无描边"但实际有边框这种偏差。

### 7. 文档页排版规范

**docs 页面自身的文字样式必须使用 `tokens.typography.*` 语义 token，禁止 Tailwind 文字类和裸数值。**

#### 禁止写法
```tsx
// ❌ Tailwind 文字类
<h1 className="text-4xl font-bold">标题</h1>
<p className="text-lg font-medium">描述</p>

// ❌ 裸数值
<span style={{ fontSize: 14, fontWeight: 600 }}>标签</span>

// ❌ 旧常量（过渡期兼容，新代码不应使用）
<span style={{ fontSize: FONT_SIZE.xl, fontWeight: FONT_WEIGHT.medium }}>文字</span>
```

#### 正确写法
```tsx
const { tokens } = useTheme();

// ✅ 使用语义排版 token
<h1 style={{
  fontSize: tokens.typography.title.page.fontSize,
  fontWeight: tokens.typography.title.page.fontWeight,
  lineHeight: tokens.typography.title.page.lineHeight,
}}>标题</h1>

// ✅ 或更方便：直接用 DocPageHeader
<DocPageHeader category="Components / 组件" title="标题" description="描述" />
```

#### 页面角色与排版 token 对应

| 页面角色 | 推荐 token | 字号/字重/行高 |
|---------|-----------|--------------|
| 页面大标题 | `tokens.typography.title.page` | 42/600/1.2 |
| 区块标题 (h2) | `tokens.typography.title.section` | 36/600/1.3 |
| 卡片标题 (h3) | `tokens.typography.title.card` | 32/500/1.5 |
| 正文/描述 | `tokens.typography.body.primary` | 28/400/1.4 |
| 次要描述 | `tokens.typography.body.secondary` | 26/400/1.5 |
| 说明文字 | `tokens.typography.meta.caption` | 24/400/1.5 |
| 脚注/chip | `tokens.typography.meta.footnote` | 18/400/1 |

> **注意**：`DocPageHeader`、`DocSection`、`DocSubsection` 等骨架组件已内置正确的排版 token，使用它们可以自动获得正确的样式。

### 8. 构建并验证

- 根目录构建：`pnpm build`
- 联调：`pnpm dev`
- 文档预览：`pnpm preview`
- 至少确认页面能打开、控制项生效、路由可访问。

## Common Pitfalls

- 只写了页面文件，忘记接 `main.tsx` 路由
- 文档页配置项来自手写数组，和组件真实导出脱节
- 包装组件自己维护样式，导致预览与真实组件不一致
- 页面文案滞后于组件行为变更
- **未使用 DocComponents 骨架组件，手写了等价的标题/区块/表格样式**
- **docs 页面使用 Tailwind 文字类（text-*、font-*）而非 `tokens.typography.*`**
- **docs 页面用裸数值字号（`fontSize: 14`）而非排版 token**
- **使用旧排版常量 `FONT_SIZE` / `FONT_WEIGHT` / `LINE_HEIGHT` 而非 `tokens.typography.*`**

## Done Criteria

满足以下条件后，文档页任务才算完成：

- 页面主体与组件真实 API 对齐
- 包装组件与基础组件没有样式分叉
- **页面使用了 DocComponents 骨架组件（DocPageHeader、DocSection 等）**
- **页面所有文字样式均使用 `tokens.typography.*` 语义 token**
- 路由入口已接入
- 预览构建通过，页面表现与文案一致
