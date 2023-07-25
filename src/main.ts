import './assets/main.css'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import axios from '@/plugin/axios'
import '@/plugin/mock'
import compRegistered from '@/share'
const app = createApp(App)
compRegistered(app)
  .use(createPinia())
  .use(router)
  .use(ElementPlus as any)
  .use(axios)
  .mount('#app')
