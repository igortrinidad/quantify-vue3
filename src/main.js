import './styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from "ant-design-vue";
import 'ant-design-vue/dist/reset.css';
// import * as Sentry from "@sentry/vue";
import { clickOutsideDirective } from '@/directives/click-outside'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// if (process.env.NODE_ENV !== 'development') {
//   Sentry.init({
//     app,
//     dsn: 'https://bea3f974035745ca8b85bdb08b15776f@sentry.io/1724884',
//     integrations: [new BrowserTracing()],
//     environment: process.env.NODE_ENV
//   })
// }

app.use(createPinia())
app.use(router)
app.use(Antd)

clickOutsideDirective(app)

app.mount('#app')
