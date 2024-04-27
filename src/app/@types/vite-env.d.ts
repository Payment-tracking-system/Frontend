// / <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_NODE_MODE: string
    readonly VITE_PUBLIC_SERVER_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}