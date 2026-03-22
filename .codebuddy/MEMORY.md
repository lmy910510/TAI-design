# TAI Design — 长期记忆

## 核心设计准则

### 公开颜色 token 体系（2026-03-21 确认）

- **公开语义颜色 token 只有 4 类**：`textColor`、`bgColor`、`borderColor`、`functionalColor`
- **不允许为新组件创建组件级颜色 token 包装层**（如 `slider.track`、`slider.thumb` 等）
- 组件内部实现可以使用 primitive（`STATIC.*`、`SHADOW.*` 等），但**绝不向文档和用户暴露**
- 文档中标注颜色时，只允许出现这 4 类公开语义 token 名
- 不属于这 4 类的固定色/阴影等，用自然语言描述即可

### 语义排版 token 体系（2026-03-21 迁移完成）

- **排版 token 按语义角色定义**，不按物理尺寸（xl/lg/md）
- 通过 `tokens.typography.<类别>.<名称>` 获取，每个 token 包含 `fontSize` + `fontWeight` + `lineHeight`
- **5 大类**：`title`（标题）、`body`（正文）、`label`（控件标签）、`meta`（元信息）、`display`（展示）
- **4 级字重**：Regular(400)、Medium(500)、Semibold(600)、Bold(700)
- 旧常量 `FONT_SIZE` / `FONT_WEIGHT` / `LINE_HEIGHT` 保留在 `tokens/index.ts` 供过渡期，**组件代码中已全部迁移**
- 静态配置常量（编译时）使用硬编码数值 + 注释标注对应语义 token
- 图标 `fontSize` 属性不属于排版语义，保持硬编码数值

### 组件级 token 中间层已彻底移除（2026-03-22 完成）

历史存量的 10 个组件级 token（`switch`、`checkbox`、`input`、`dialog`、`toast`、`tips`、`push`、`list`、`loading`、`tag`）已从 `semanticTokens.ts` 的接口定义、变量赋值、返回值中全部删除。所有 12 个组件实现文件和 15 个 docs 文件已改为直接引用公开语义 token（`bgColor.*`、`textColor.*`、`borderColor.*`、`functionalColor.*`）。整个项目中零残留。

### 文档页规范

- 不允许出现 primitive 常量名：`STATIC.*`、`SHADOW.*`
- 排版使用 `tokens.typography.*` 语义路径，不暴露旧常量名 `FONT_SIZE.*` 等
- `SPACING.*`、`RADIUS.*` 等间距/圆角常量在信息面板中以纯数值展示，不暴露常量名
- 设计说明中的颜色引用只使用 4 类公开语义色路径
- 全部使用 token-based 内联样式，**禁止 Tailwind 类名**
