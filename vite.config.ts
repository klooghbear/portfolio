import { fileURLToPath, URL } from "node:url"

import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), "")

  return defineConfig({
    plugins: [
      vue()
    ],

    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    },

    define: {
      process: {
        "env": {
          CONFIGCAT_KEY: env.VITE_CONFIGCAT_KEY
        } 
      }
    }
  })
}
