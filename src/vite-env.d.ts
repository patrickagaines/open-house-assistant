/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTH0_DOMAIN: string;
  readonly VITE_AUTH0_CLIENT_ID: string;
  readonly VITE_AUTH0_CALLBACK_URL: string;
  readonly VITE_API_SERVER_URL: string;
  readonly VITE_AUTH0_AUDIENCE: string;
  readonly VITE_APP_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
