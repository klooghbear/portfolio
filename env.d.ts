/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VUE_APP_CONFIGCAT_SDK: string
	readonly USER_ID: string
	readonly USER_EMAIL: string
	protected readonly AUTH_PASSWORD: string
	protected readonly HEADER: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}