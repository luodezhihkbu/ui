import "./lib/gulu.scss" // UI 库基础样式的导入语句要放在最前面
import { router } from './router'
import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import 'github-markdown-css'

const app = createApp(App)
app.use(router)
app.mount('#app')