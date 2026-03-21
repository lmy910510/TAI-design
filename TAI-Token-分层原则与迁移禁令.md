# TAI Token 分层原则 · 迁移禁令 · Review Checklist

> 本文档是 TAI Design 组件库 token 体系的**唯一治理规范**。  
> 所有新增代码、组件变更、文档页修改、review 评审必须以此为准。  
> 最后更新：2026-03-21

---

## 一、为什么需要这份文档

在 TAI Design 的建设过程中，我们经历了反复的 token 调整。每一轮看起来都只差"最后一个问题"，但下一轮 review 又总能冒出新问题。

复盘后，根因不是规范本身没设计好，而是：

1. **旧入口没有关闸** — 兼容层始终公开暴露，调用方无法区分"正式入口"还是"过渡入口"
2. **映射还在协商** — 语义 token 值允许"近似"，导致每次 review 都可以继续挑战
3. **规范停在认知层** — 写在文档里但没在实现层强制执行，组件仍有手写值
4. **主题接入不统一** — 不同组件用了不同的 hook/context 模式
5. **文档层未被视为生产代码** — 改了组件但遗漏了 docs 包装组件、展示页、预览产物

本文档的目的是把这些共识**冻结成可执行的条款**，让后续的每一次 review 都变成机械校验，而不是再重复讨论。

---

## 二、分层架构

TAI Design 的 token 体系只有三个层级，从底到顶：

```
┌──────────────────────────────────────────────┐
│  Layer 3 · Component Implementation          │
│  组件内部消费 semantic token + primitive 常量  │
│  不新增组件级颜色 token 包装层                 │
├──────────────────────────────────────────────┤
│  Layer 2 · Semantic Token（唯一公开层）        │
│  textColor / bgColor / borderColor /          │
│  functionalColor                              │
│  + SPACING / RADIUS / SHADOW / Typography     │
├──────────────────────────────────────────────┤
│  Layer 1 · Primitive（仅内部使用）             │
│  alpha / blueGray / COLD_GRAY / STATIC /      │
│  BRAND / FUNCTIONAL / status / theme / BG     │
└──────────────────────────────────────────────┘
```

### 各层职责

| 层级 | 谁定义 | 谁消费 | 对外暴露？ |
|------|--------|--------|-----------|
| **Primitive** | `tokens/primitives.ts` | 仅 `semanticTokens.ts` 内部 | ❌ 不出现在文档和用户 API |
| **Semantic Token** | `tokens/semanticTokens.ts` | 组件实现、文档页 | ✅ 唯一公开入口 |
| **Component Impl** | 各组件 `.tsx` | 最终渲染 | — |

### 关键约束

- **公开语义颜色 token 只有 4 类**：`textColor`、`bgColor`、`borderColor`、`functionalColor`
- **不允许为新组件创建组件级颜色 token 包装层**
- **历史存量组件 token**（switch / checkbox / input / dialog / toast / tips / push / list / loading / tag）保留，但冻结，不新增

---

## 三、唯一入口规则

### 3.1 推荐入口（必须使用）

| 场景 | 入口 | 用法 |
|------|------|------|
| 组件内获取 token | `useTheme()` 或 `useThemeOptional()` | `const { tokens, isDark } = useTheme();` |
| 组件内脱离 context | `getTokens(isDark)` | 仅用于无法接入 ThemeProvider 的极端场景 |
| 间距 | `SPACING["2"]` ~ `SPACING["6"]` | 所有间距必须是 6 的倍数 |
| 圆角 | `RADIUS.xl` / `RADIUS["2xl"]` / `RADIUS["4xl"]` | 不使用其他数值 |
| 阴影 | `SHADOW.xl` | 不使用其他阴影值 |
| 排版 | `tokens.typography.<类别>.<名称>` | 5 大类：title / body / label / meta / display |

### 3.2 废弃入口（禁止在新代码中使用）

| 废弃入口 | 替代方案 | 当前状态 |
|----------|---------|---------|
| `createColors(isDark)` | `getTokens(isDark)` | 保留兼容，禁止新引用 |
| `c(isDark)` | `getTokens(isDark)` | 保留兼容，禁止新引用 |
| `BG_COLORS.*` | `tokens.bgColor.*` | 保留兼容，禁止新引用 |
| `type Colors` | `type SemanticTokens` | 保留兼容，禁止新引用 |
| `type ColorTokens` | `type SemanticTokens` | 保留兼容，禁止新引用 |
| `FONT_SIZE.*` / `FONT_WEIGHT.*` / `LINE_HEIGHT.*` | `tokens.typography.*` | 静态配置中可保留 + 注释，动态代码中迁移 |

### 3.3 兼容层退场策略

- 兼容层代码（`legacyColors.ts`、`index.ts` 中的 `c` / `BG_COLORS`）**继续保留**，不删除
- 但必须满足：
  - 不出现在任何新增代码中
  - 不出现在文档页主叙事中
  - 不作为推荐用法出现在任何教学/交接材料中
- 每季度评估一次是否可以安全移除

---

## 四、实现层硬约束

以下不是"建议"，而是必须机械执行的规则。

### 4.1 颜色

| ✅ 允许 | ❌ 禁止 |
|---------|---------|
| `tokens.textColor.primary` | `#333333` |
| `tokens.bgColor.page` | `"gray"` |
| `tokens.borderColor.level1` | `rgba(0,0,0,0.1)` |
| `tokens.functionalColor.error` | `"red"` |
| Primitive 值在 `semanticTokens.ts` 内使用 | Primitive 值在组件 `.tsx` 中直接使用 |

**唯一例外**：`#FFFFFF` / `#000000` / `transparent` 可在确实需要固定色的场景使用，但应优先检查是否有对应 token。

### 4.2 间距

所有 `padding` / `margin` / `gap` / 布局尺寸必须是 **6 的倍数**。

| ✅ 允许 | ❌ 禁止 |
|---------|---------|
| `SPACING["4"]`（24px） | `20` |
| `48`（6 × 8） | `15` |
| `72`（6 × 12） | `10` |

**组件内部的尺寸常量**（如按钮高度 `84 / 72 / 60 / 48`）也必须是 6 的倍数。  
**图标 gap**（如 `iconGap: 8`、`iconGap: 10`）如果不是 6 的倍数，需要在迁移计划中逐步修正。

### 4.3 圆角

只允许使用 `RADIUS` 常量定义的三个值：

| Token | 值 | 用途 |
|-------|-----|------|
| `RADIUS.xl` | 24px | 操作按钮、输入框 |
| `RADIUS["2xl"]` | 30px | 卡片、面板 |
| `RADIUS["4xl"]` | 42px | 弹窗、大按钮 |

组件内部如果有计算圆角（如 `height / 2` 实现胶囊形），不受此限制，但需注释说明。

### 4.4 阴影

只允许 `SHADOW.xl`。如需新增阴影等级，必须先在 `tokens/index.ts` 定义常量。

### 4.5 排版

- 动态代码中使用 `tokens.typography.*`
- 静态配置常量中可使用数值 + 注释标注对应 token
- 图标 `fontSize` 保持硬编码数值，不属于排版语义

### 4.6 交互状态模型（车机端）

| 状态 | 是否在 token 层定义 | 实现方式 |
|------|-------------------|---------|
| default | ✅ | 直接使用 token 颜色 |
| pressed | ✅ `bgColor.pressedOverlay` | 组件上叠加 `rgba(0,0,0,0.12)` 蒙层 |
| disabled | ✅ 有对应 disabled token | 使用 disabled 颜色 + 降低不透明度 |
| hover | ❌ 车机端无鼠标 | 不在 token 层定义 |

---

## 五、主题接入标准模板

所有组件必须按以下**唯一模板**接入主题：

```tsx
import { useThemeOptional } from '../hooks/ThemeContext';
import { getTokens } from '../tokens/semanticTokens';

function MyComponent({ isDark: isDarkProp, ...props }) {
  const theme = useThemeOptional();
  const isDark = isDarkProp ?? theme.isDark;
  const tokens = useMemo(
    () => theme.tokens ?? getTokens(isDark),
    [theme.tokens, isDark]
  );

  // 使用 tokens.textColor / tokens.bgColor / ...
}
```

### 关键点

- **必须用 `useThemeOptional()`**，不直接 `useContext(ThemeContext)`
- **必须有 `isDarkProp` 覆盖能力**
- **必须有 `getTokens` 兜底**，确保无 ThemeProvider 时也能工作
- **tokens 必须用 `useMemo` 包裹**

---

## 六、文档层同步规则

文档层是完整链路的一部分，不是"附属品"。任何组件或 token 变更，必须同步检查以下环节：

### 6.1 同步检查清单

| 环节 | 内容 | 位置 |
|------|------|------|
| 源组件 | 组件实现代码 | `packages/components/src/<组件>/` |
| 文档包装组件 | docs 侧对组件的二次包装 | `packages/docs/src/design-system/` |
| 文档展示页 | 规范页面中对组件的展示和说明 | `packages/docs/src/design-system/pages/` |
| 颜色文档 | Colors 页面中的 token 叙事 | `packages/docs/src/design-system/pages/Colors.tsx` |
| 预览产物 | 构建后的可视预览 | `pnpm dev` 验证 |

### 6.2 docs 侧颜色导出 (`colorTokens.ts`)

- 允许继续导出 primitive 色板（供颜色展示页使用）
- 但文档叙事的主线必须围绕 semantic token
- 不允许在"推荐用法"或"最佳实践"部分引导用户使用旧入口

---

## 七、Review Checklist

每次 PR / 代码审查时，按以下清单逐项检查：

### Token 来源

- [ ] 新代码没有引入 `createColors` / `c(isDark)` / `BG_COLORS` / `type Colors`
- [ ] 颜色值全部通过 `tokens.*` 获取，无硬编码十六进制或 rgba
- [ ] Primitive 常量（`alpha` / `blueGray` / `COLD_GRAY` 等）只出现在 `semanticTokens.ts` 内部

### 设计规范

- [ ] 所有间距值是 6 的倍数
- [ ] 圆角值来自 `RADIUS` 常量（或 `height / 2` 胶囊形 + 注释）
- [ ] 阴影值来自 `SHADOW` 常量
- [ ] 排版使用 `tokens.typography.*`（静态配置除外，需注释）

### 主题适配

- [ ] 使用 `useThemeOptional()` 接入主题
- [ ] 有 `isDarkProp` 覆盖和 `getTokens` 兜底
- [ ] tokens 用 `useMemo` 包裹
- [ ] UI 在浅色和暗色模式下均正常

### 文档同步（如涉及组件变更）

- [ ] docs 包装组件已同步更新
- [ ] docs 展示页文案与实际渲染一致
- [ ] 颜色文档页未引入旧入口作为推荐用法

### 兼容层管理

- [ ] 未新增任何兼容别名
- [ ] 已有兼容层未被删除（除非经过季度评估确认安全）

---

## 八、落地优先级

按收益/成本比排序，建议逐步执行：

| 优先级 | 事项 | 原因 |
|--------|------|------|
| **P0** | 冻结词汇表（本文档） | 让所有人对"什么是正确入口"达成共识 |
| **P1** | 统一主题接入模板 | 消除组件间的写法差异，降低 review 心智负担 |
| **P2** | 清理 docs `colorTokens.ts` 导出，收敛文档叙事 | 堵住文档层继续传播旧入口的通道 |
| **P3** | 逐组件消除手写间距/圆角/颜色值 | 让规范从"建议"变成"事实" |
| **P4** | 建立自动化 lint 检查 | 让规范从"人工 review"变成"CI 拦截" |

---

## 九、词汇表

为了避免沟通歧义，以下术语在本项目中有且只有一个含义：

| 术语 | 含义 | 不要叫 |
|------|------|--------|
| **Primitive** | `primitives.ts` 中的原始色板和常量 | "基础色"、"底层色" |
| **Semantic Token** | `semanticTokens.ts` 中的语义色，通过 `getTokens()` 获取 | "主题色"、"配色方案" |
| **组件级 token** | 历史存量的 `switch` / `input` 等组件 token | "组件色"、"组件主题" |
| **兼容层** | `legacyColors.ts` / `createColors` / `c()` / `BG_COLORS` | "旧 API"、"v1 入口" |
| **文档包装组件** | `packages/docs/src/design-system/` 下的组件 | "demo 组件"、"示例组件" |

---

## 附录：踩坑记录

这些是我们在实际建设中遇到的典型问题，记录在此避免重蹈覆辙。

### A. 旧入口没关闸

**现象**：`createColors` / `c()` / `BG_COLORS` 标了 `@deprecated` 但继续公开导出，docs 侧仍在重新导出。  
**后果**：团队脑子里始终有两套入口，review 反复争论"该用哪个"。  
**教训**：废弃不等于关闸。只要还能 import，就一定会有人用。

### B. "近似映射"导致无限争论

**现象**：semantic token 值允许"近似"——72% vs 84%、`COLD_GRAY[0]` vs `COLD_GRAY[10]`。  
**后果**：每轮 review 都能继续挑战"为什么这里是近似"。  
**教训**：映射关系一旦确定，必须冻结。允许的偏差应该明确记录，不接受开放式讨论。

### C. 规范停在认知层

**现象**：规范文档写了 `SPACING / RADIUS / SHADOW`，但组件源码里仍有 `iconGap: 8`、`iconGap: 10`。  
**后果**：每次 review 都在逐个抓手写值，感觉"怎么还有"。  
**教训**：规范必须下沉到实现层。最终目标是 lint 规则自动拦截。

### D. 主题接入写法不统一

**现象**：Button 直接读 `ThemeContext`，Badge 用 `useThemeOptional()`，Toast 又是另一种。  
**后果**：review 时无法一眼判断"标准写法"是什么。  
**教训**：提供唯一模板，新组件必须 copy-paste 这个模板。

### E. 文档层遗漏

**现象**：改了组件 token 但没同步 docs 包装组件和展示页。  
**后果**：下一轮 review 指出"这里还不一致"。  
**教训**：文档层是生产代码链路的一部分，不是事后补的文档。
