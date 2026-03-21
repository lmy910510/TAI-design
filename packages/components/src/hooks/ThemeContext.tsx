import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import { getTokens, type SemanticTokens } from "../tokens/semanticTokens";

// ============================================================================
// Types
// ============================================================================

export interface ThemeContextValue {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  toggle: () => void;
  tokens: SemanticTokens;
}

export interface ThemeProviderProps {
  children: ReactNode;
  defaultDark?: boolean;
}

// ============================================================================
// Context
// ============================================================================

export const ThemeContext = createContext<ThemeContextValue | null>(null);

// ============================================================================
// Provider
// ============================================================================

export function ThemeProvider({
  children,
  defaultDark = false,
}: ThemeProviderProps) {
  const [isDark, setIsDark] = useState(defaultDark);

  const toggle = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  const tokens = useMemo(() => getTokens(isDark), [isDark]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      isDark,
      setIsDark,
      toggle,
      tokens,
    }),
    [isDark, toggle, tokens]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// ============================================================================
// Hooks
// ============================================================================

/**
 * 获取主题上下文（必须在 ThemeProvider 内使用）
 */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error(
      "[TAI Design] useTheme must be used within a ThemeProvider"
    );
  }
  return ctx;
}

/**
 * 可选的主题上下文（在 ThemeProvider 外使用时返回默认值）
 */
export function useThemeOptional(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (ctx) return ctx;

  return {
    isDark: false,
    setIsDark: () => {
      console.warn("[TAI Design] setIsDark called outside ThemeProvider");
    },
    toggle: () => {
      console.warn("[TAI Design] toggle called outside ThemeProvider");
    },
    tokens: getTokens(false),
  };
}

/**
 * 解析主题（支持 prop 覆盖 context）
 */
export function resolveTheme(
  isDarkProp?: boolean,
  isDarkContext?: boolean
): { isDark: boolean; tokens: SemanticTokens } {
  const isDark = isDarkProp ?? isDarkContext ?? false;
  return {
    isDark,
    tokens: getTokens(isDark),
  };
}
