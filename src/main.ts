import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/reset.css'

createApp(App)
.use(createPinia())
.mount('#app')