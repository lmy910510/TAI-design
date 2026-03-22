import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// 占位图 base64（透明 1x1 PNG）
const PLACEHOLDER_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

// 自定义插件：处理 figma:asset 协议，替换为占位图
function figmaAssetPlugin(): Plugin {
  return {
    name: 'figma-asset-plugin',
    enforce: 'pre', // 在其他插件之前运行
    async resolveId(source, importer) {
      if (source.startsWith('figma:asset/')) {
        // 返回一个虚拟模块 ID
        return '\0figma-asset:' + source.slice(12);
      }
      return null;
    },
    load(id) {
      if (id.startsWith('\0figma-asset:')) {
        // 返回占位图
        return `export default "${PLACEHOLDER_IMAGE}"`;
      }
      return null;
    },
    // 在 transform 阶段也处理，确保所有 figma:asset 都被替换
    transform(code, id) {
      if (code.includes('figma:asset/')) {
        // 用正则替换所有 figma:asset 导入
        return code.replace(
          /from\s+["']figma:asset\/[^"']+["']/g,
          `from "data:text/javascript,export default '${PLACEHOLDER_IMAGE}'"`
        );
      }
      return null;
    }
  };
}

export default defineConfig({
  plugins: [figmaAssetPlugin(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'motion/react': 'framer-motion',
    },
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    exclude: ['@tai-design/components'],
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react-router')) {
            return 'router-vendor';
          }

          if (
            id.includes('react-dom') ||
            id.includes('/react/') ||
            id.includes('react/jsx-runtime') ||
            id.includes('scheduler')
          ) {
            return 'react-vendor';
          }

          if (id.includes('framer-motion') || id.includes('/motion/')) {
            return 'motion-vendor';
          }

          if (id.includes('lucide-react') || id.includes('tdesign-icons-react')) {
            return 'icon-vendor';
          }

          if (id.includes('/packages/components/')) {
            return 'tai-components';
          }

          if (id.includes('node_modules')) {
            return 'vendor';
          }

          return undefined;
        },
      },
    },
  },
});
