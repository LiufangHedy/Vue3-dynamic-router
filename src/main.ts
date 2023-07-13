import { createApp } from 'vue'
// import './style.css'
// 引入vue-router
import router from './router/index'
import store, { useUserStore } from './store/index'
import App from './App.vue'
// 引入pinia
const app = createApp(App).use(store)
await useUserStore().getData()// 记得
app.use(router).mount('#app')
