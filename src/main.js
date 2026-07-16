import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // ⬅️ Imports the routing directory we just built

const app = createApp(App)

app.use(router) // ⬅️ Instructs Vue to bind the router logic

app.mount('#app')