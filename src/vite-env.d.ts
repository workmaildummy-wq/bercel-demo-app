/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BERCEL_COMMIT_SHA?: string;
  readonly VITE_BERCEL_DEPLOYMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
