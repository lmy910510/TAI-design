---
name: tai-token-migration
description: 当需要把旧颜色/按钮状态/排版写法迁到 TAI Design 语义 token 和 action token 体系时使用；覆盖映射关系、兼容层检查和调用方同步。
---

# TAI Token Migration

## Overview

这个 skill 用于把旧的颜色、按钮状态字段、兼容写法和未收口的硬编码值，迁移到 TAI Design 当前的语义 token / action token 体系，避免同一语义出现多套来源。
当任务涉及 `packages/components/src/tokens/*`、历史按钮颜色对象、`colors.button.*`、`bgActive`/`textActive` 这类旧字段，或者发现未收口的颜色/排版写法时，应优先使用本 skill。

## Primary Files

- `packages/components/src/tokens/action-token-migration.ts`
- `packages/components/src/tokens/semanticTokens.ts`（`tokens.typography.*` 定义处）
- `packages/components/src/tokens/primitives.ts`（`STATIC` 常量定义处）
- `packages/components/src/tokens/legacyColors.ts`
- `packages/components/src/tokens/index.ts`（旧排版常量 `FONT_SIZE` / `FONT_WEIGHT` / `LINE_HEIGHT` 定义处，过渡期兼容）
- 任何直接消费旧 token 的组件和 docs 页面

## Migration Signals

出现以下任一情况时，通常说明应该进入迁移流程：

### 旧 action token 模式
- 代码里出现 `colors.button.`、`c(isDark).button.`
- 使用 `bgActive`、`textActive`、`iconActive`、`borderActive`
- 仍然直接依赖 `FUNCTIONAL.danger`、`status.red[`、`brand[` 这类旧色板入口
- 组件逻辑在运行时把同一变体重新映射多次，导致定义前后打架
- 用户反馈"token 改了但运行时/文档没变"

### 未收口写法
- **`_meta.brandColor`** — 应迁移到 `bgColor.brand` 或 `functionalColor.brand.main`
- **`"transparent"` 裸字符串** — 应迁移到 `STATIC.transparent`
- **`"white"` / `stroke="white"` / `fill="white"`** — 应迁移到 `STATIC.white` 或 `textColor.anti`
- **`"black"` / `stroke="black"` / `fill="black"`** — 应迁移到 `STATIC.black` 或 `textColor.primary`
- **直接使用 primitive 色板** 如 `blueGray[10]`、`COLD_GRAY[90]` — 应优先使用语义 token

### 旧排版写法
- **旧排版常量** `FONT_SIZE.*`、`FONT_WEIGHT.*`、`LINE_HEIGHT.*` — 应迁移到 `tokens.typography.*`
- **裸数值字号** `fontSize: 14`、`fontSize: 32` — 应迁移到 `tokens.typography.*` 对应 token
- **裸数值字重** `fontWeight: 600` — 应迁移到 `tokens.typography.*` 对应 token
- **裸数值行高** `lineHeight: 1.5` — 应迁移到 `tokens.typography.*` 对应 token
- **Tailwind 文字类** `text-lg`、`font-bold` — 应迁移到内联 `tokens.typography.*` 样式

### 排版迁移参考表

| 旧写法 | 迁移目标（按上下文选择最匹配的） |
|--------|-------------------------------|
| `FONT_SIZE["5xl"]` (42) | `tokens.typography.title.page` 或 `tokens.typography.display.hero` |
| `FONT_SIZE["4xl"]` (36) | `tokens.typography.title.section` |
| `FONT_SIZE["3xl"]` (32) | `tokens.typography.title.card` 或 `tokens.typography.label.buttonLarge` |
| `FONT_SIZE["2xl"]` (30) | `tokens.typography.title.subsection` 或 `tokens.typography.label.buttonMedium` |
| `FONT_SIZE.xl` (28) | `tokens.typography.body.primary` 或 `tokens.typography.label.buttonSmall` |
| `FONT_SIZE.lg` (26) | `tokens.typography.body.secondary` |
| `FONT_SIZE.base` (24) | `tokens.typography.meta.caption` 或 `tokens.typography.label.tag` |
| `FONT_SIZE.md` (22) | `tokens.typography.meta.time` |
| `FONT_SIZE.sm` (20) | 无精确对应，按上下文就近选择 `meta.time` 或 `meta.footnote` |
| `FONT_SIZE.xs` (18) | `tokens.typography.meta.footnote` |

> 选择哪个语义 token 取决于内容角色（标题？正文？标签？元信息？），不仅看数值。

## Canonical Mapping

### 字段映射

- `bgActive` → `bgPressed`
- `textActive` → `textPressed`
- `iconActive` → `iconPressed`
- `borderActive` → `borderPressed`

### 变体映射

- `primary` → `primary`
- `secondary` → `secondary`
- `tertiary` → `secondary`
- `ghost` → `ghost`
- `danger` → `danger`
- `link` / `text` → `link`

## Migration Workflow

### 1. 盘点旧入口和未收口写法

- 先搜索旧模式，不要上来直接替换。
- 重点看 `action-token-migration.ts` 中的 `deprecatedPatterns`、`fieldNameMapping`、`variantMapping`。
- 区分"兼容层仍需保留"与"业务调用应立即迁移"两种场景。
- **同时搜索未收口写法**：`_meta.brandColor`、`"transparent"`、`stroke="white"`、旧排版常量、裸数值排版。

### 2. 确认新的单一事实源

- 颜色语义来源应收敛到 `semanticTokens.ts` / `getTokens()` / `tokens.action.*`。
- 如果 `legacyColors.ts` 还承担兼容输出，只允许它转发新 token，不允许重新定义第二套视觉结果。
- 避免在返回值阶段再次覆盖已经修好的 token。
- **排版值统一收敛到 `tokens.typography.*`**，旧常量 `FONT_SIZE` / `FONT_WEIGHT` / `LINE_HEIGHT` 仅作过渡期兼容。

### 3. 更新调用方

- 把直接消费旧字段的组件、工具函数、docs 页面一起迁掉。
- 如果类型声明仍暴露旧字段，要同步评估是否保留兼容、是否需要别名或注释说明。
- 文档和演示页如果描述了旧命名，也要同步更新。
- **docs 页面的 Tailwind 文字类和旧排版常量也要一并迁移到 `tokens.typography.*`**。

### 4. 验证状态一致性

- 检查默认、hover、pressed、disabled 四类状态是否都对齐。
- 特别注意 `secondary`、`ghost`、`danger` 这类最容易出现边框/透明度差异的变体。
- 如果迁移后文档预览和真实组件不一致，优先查是否存在包装层或重复 token 对象。

### 5. 构建与回归

- 运行 `pnpm build`
- 对受影响的组件页和组合组件做回归检查
- 如果本次迁移影响组件视觉，必须同步应用 `tai-component-sync` 的完成标准

## Common Pitfalls

- 只改了字段名，没有改实际取值来源
- `legacyColors.ts` 既想兼容又自己重写视觉值，导致覆盖新 token
- 迁移了组件包，但 docs 页面仍在消费旧字段
- `tertiary` 实际映射到 `secondary`，却被误当成独立视觉体系维护
- 只检查默认态，漏掉 hover / pressed / disabled
- **`_meta.brandColor` 被误认为公开 token 继续使用**
- **`"transparent"` 裸字符串未替换为 `STATIC.transparent`**
- **排版只迁了颜色没迁排版，旧常量和裸值遗漏**
- **选择语义 token 时只看数值不看角色**（如把标题用的 32 迁到 `label.buttonLarge` 而非 `title.card`）

## Output Expectations

迁移完成时，结果应满足：

- 新 token 来源唯一且清晰
- 旧兼容层仅做转发或明确受控映射
- 受影响调用方与 docs 页面已同步
- 预览构建后的视觉结果与目标语义一致
- **所有未收口写法（裸色值、旧排版常量、裸数值排版、Tailwind 文字类、`_meta` 引用）均已迁移到 `tokens.typography.*` 或语义颜色 token**
