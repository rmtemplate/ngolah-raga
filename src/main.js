import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './assets/css/style.css'
import './assets/js/script.js'


const app = createApp(App)
app.use(router)
app.mount('#app')