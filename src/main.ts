import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from "./App.vue";
import router from './router'

import VueGtag from "vue-gtag";

import './assets/main.css'

const app = createApp(App)

app.use(createPinia());
app.use(router);

app.use(VueGtag, {
  config: { id: "G-7LN6V43277" }
});
app.mount('#app');
