import { createApp } from 'vue'
import './style.css'
// 引入vue-router
import router from './router/index'
import App from './App.vue'

createApp(App).use(router).mount('#app')
