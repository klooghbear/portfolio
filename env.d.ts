/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VUE_APP_CONFIGCAT_SDK: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}