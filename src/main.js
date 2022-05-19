import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import AppLayout from './layouts/AppLayout'
import quasarUserOptions from './quasar-user-options'

const app = createApp(App)
app.use(Quasar, quasarUserOptions)
app.use(router)
app.use(store)
app.component('AppLayout', AppLayout)
app.mount('#app')
