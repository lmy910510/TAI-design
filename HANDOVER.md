## TAI Design 交接说明

这份文档是给接手同事看的，目标是让同事在**几乎不需要懂代码**的情况下，也能继续维护 `TAI Design` 组件库与规范站点。

### 你接手的是什么

这是一个基于 `pnpm workspace` 的前端仓库，主要有两部分：

- `packages/components`：正式组件库源码
- `packages/docs`：组件规范文档站、示例页、设计稿过渡展示页

### 你最常用的工作方式

如果你也在用 CodeBuddy，**优先直接对 CodeBuddy 说话**，不要先自己折腾命令行。

首次接手时，直接把下面这句话发给 CodeBuddy：

> 这是一个 `pnpm workspace` 的 TAI Design 组件库仓库，请你先阅读 `README.md`、`HANDOVER.md`、`PROMPTS.md`、`WORKING-AREAS.md`、`package.json`、`pnpm-workspace.yaml`、`packages/docs/.env.example` 以及 `.codebuddy/rules` 下的规则文件；然后帮我检查本机 Node 和 pnpm 是否满足要求，不满足就告诉我最少操作步骤；如果环境没问题，就安装依赖、检查我是否缺少 `packages/docs/.env.local`、提醒我填写 `VITE_TENCENT_MAP_KEY`，然后启动项目，并用非技术语言告诉我：这个仓库现在应该优先在哪些目录继续维护，哪些目录只是过渡内容。

### 环境要求

- `Node.js >= 18`
- `pnpm >= 8`

### 如果你连“克隆仓库”都不知道是什么意思

你可以把“克隆仓库”直接理解成：**把这个项目完整下载到你的电脑里，并且以后还能继续同步和上传修改。**

如果你完全不想碰命令行，最简单的方法是用 `GitHub Desktop`：

1. 打开这个链接：`https://github.com/lmy910510/TAI-design`
2. 安装并打开 `GitHub Desktop`
3. 在 `GitHub Desktop` 顶部菜单点 `File` -> `Clone repository...`
4. 切到 `URL` 标签
5. 把这个地址贴进去：`https://github.com/lmy910510/TAI-design.git`
6. 选一个你自己容易找到的位置，比如桌面或文稿
7. 点 `Clone`
8. 下载完成后，点 `Show in Finder` 或 `Open in Visual Studio Code`
9. 再打开 CodeBuddy，把 `PROMPTS.md` 里的第一段话直接发给它

如果别人对你说“先 clone 一下”，你就把它理解成上面这 9 步，不需要额外学术语。

### 首次启动

标准流程如下：

1. 在仓库根目录执行 `pnpm install`
2. 运行 `pnpm dev`
3. 如需查看地图示例页，再复制 `packages/docs/.env.example` 为 `packages/docs/.env.local`
4. 在 `packages/docs/.env.local` 中填写 `VITE_TENCENT_MAP_KEY`

补充说明：

- `pnpm dev` 现在会先自动生成 `packages/components/dist`，然后同时启动组件监听和文档站
- 如果没有配置 `VITE_TENCENT_MAP_KEY`，不是项目启动失败，而是只有地图相关示例页无法完整预览
- 地图 key 请私下安全传递，不要直接写进仓库

### 交接时不要传什么

这些内容不要作为源码交接的一部分：

- `node_modules`
- `dist`
- `.vite`
- `packages/docs/.env.local`
- `.codebuddy/memory/`

### 规范入口

接手后，所有 UI 相关工作都要优先遵循仓库里的 CodeBuddy 规则与 token，而不是自由发挥。

重点包括：

- 间距必须是 `6` 的倍数
- 颜色必须优先通过主题获取，支持浅色/暗色模式
- 圆角、阴影使用统一 token
- 优先复用现有组件，不重复造轮子

### 继续维护时的建议顺序

当你要新增或修改内容时，优先按这个顺序判断：

1. 这是不是应该成为正式组件能力？如果是，优先改 `packages/components`
2. 这是不是应该成为正式规范页面或示例？如果是，优先改 `packages/docs`
3. 如果只是 Figma 过渡展示，不要把它当成长期正式实现

### 如果你不是技术同学

你不需要先学会 Git、pnpm、Vite 或 TypeScript。

你只需要：

- 先按上面的步骤把项目下载到电脑
- 打开下载好的项目文件夹
- 把上面的固定提示词发给 CodeBuddy
- 按 CodeBuddy 提示补 1 到 2 个必要步骤
- 后续继续用自然语言描述你想改的规范、组件或页面

### 如果需要把仓库再交给别人

请一起交接这些内容：

- 完整仓库源码
- `README.md`
- `HANDOVER.md`
- `PROMPTS.md`
- `WORKING-AREAS.md`
- `.codebuddy/rules` 下的规则文件
- 必要的账号、权限和地图 key（私下安全传递，不要写进仓库）
