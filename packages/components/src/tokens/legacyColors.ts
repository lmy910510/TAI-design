/**
 * @deprecated 此文件已废弃。所有颜色定义已收敛到 semanticTokens.ts。
 * 仅保留 createColors 作为过渡兼容，内部反转为从 getTokens 派生。
 * 新代码请直接使用 getTokens() 或 useTheme() 获取 SemanticTokens。
 */
import { getTokens, type SemanticTokens } from "./semanticTokens";
import type { ThemeName } from "./primitives";

/**
 * @deprecated 请使用 getTokens(isDark) 获取 SemanticTokens
 */
export const createColors = (isDark: boolean, _themeName?: ThemeName): SemanticTokens => {
  return getTokens(isDark, _themeName);
};

export type Colors = SemanticTokens;
