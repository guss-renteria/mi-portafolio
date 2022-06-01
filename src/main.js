import { createApp } from 'vue'

import './normalize.css'
import './index.scss'
import App from './App.vue'

import store from './store/store'
import router from './router/router'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
