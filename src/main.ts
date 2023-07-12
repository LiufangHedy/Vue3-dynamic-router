import { createApp } from 'vue'
// import './style.css'
// 引入vue-router
import router from './router/index'
import { useUserStore } from './store/index'
import App from './App.vue'
// 引入pinia
import store from './store/index'
const app = createApp(App).use(store)
void useUserStore().getData()
app.use(router).mount('#app')
