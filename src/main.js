import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { router } from './router'

const root = createApp(App)

root
  .use(router)
  .mount('#app')
