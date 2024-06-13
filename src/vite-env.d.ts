/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NODE_ENV: string;
  readonly VITE_APP_API_BASEURL: string;
  readonly VITE_APP_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
