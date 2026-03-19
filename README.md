## TAI Design

TAI Design 是一个基于 `pnpm workspace` 的组件库仓库，当前包含组件包与文档站两部分，适合继续维护和给团队内部复用。

### 仓库结构

- `packages/components`：`@tai-design/components` 组件源码与构建配置
- `packages/docs`：组件文档站、示例页与设计稿过渡页面

### 环境要求

- `Node.js >= 18`
- `pnpm >= 8`

### 快速开始

1. 在仓库根目录安装依赖：`pnpm install`
2. 启动文档站：`pnpm dev`
3. 如需预览地图示例页，再复制 `packages/docs/.env.example` 为 `packages/docs/.env.local`
4. 在 `packages/docs/.env.local` 中填写 `VITE_TENCENT_MAP_KEY`

> 说明：`pnpm dev` 会先自动构建一次 `@tai-design/components`，然后并行启动组件监听与文档站。
>
> 未配置 `VITE_TENCENT_MAP_KEY` 时，仓库其余页面仍可正常预览，只有地图相关示例会提示缺少配置。

### 常用命令

- `pnpm dev`：开箱即用启动文档站，同时自动准备组件构建结果并监听变更
- `pnpm build`：构建组件包与文档站
- `pnpm build:components`：仅构建组件包
- `pnpm build:docs`：仅构建文档站
- `pnpm preview`：预览文档站构建结果

### 交接说明

- 仓库使用根目录 `pnpm-lock.yaml` 统一管理依赖
- `packages/docs/src/imports` 与 `packages/docs/src/figma-demos` 中仍有部分 Figma 生成过渡文件，后续新增能力建议优先沉淀到正式组件与文档页
- 构建产物如 `dist`、安装目录如 `node_modules` 不应作为源码交接内容保留
- 交接给同事时，优先一起提供 `HANDOVER.md`、`PROMPTS.md` 与 `WORKING-AREAS.md`
- 如果接手同事连 Git 都不熟，可以优先按 `HANDOVER.md` 里的“把项目下载到电脑”步骤操作
- 如果接手同事使用 CodeBuddy，建议先让它读取上述文档和 `.codebuddy/rules` 下的规则文件，再开始操作
