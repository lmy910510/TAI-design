/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TENCENT_MAP_KEY?: string;
  readonly VITE_TENCENT_MAP_STYLE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
