import { createApp } from 'vue'
import store from './Store'
import router from './router'
import App from './App.vue'
import "./assets/styles/main.css";

createApp(App).use(store).use(router).mount('#app')
