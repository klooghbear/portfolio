import { createApp } from "vue"
import { createRouter, createWebHashHistory } from "vue-router"

import App from "./components/App/App.vue"
import About from "./components/Pages/About.vue"

import "./assets/main.css"

const routes = [
  { path: "/", component: App },
  { path: "/about", component: About },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
const app = createApp(App)

app.use(router)
app.mount("#app")

export default app
