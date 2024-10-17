import { createSSRApp } from "vue";
import * as Pinia from "pinia";
import { createUnistorage } from 'pinia-plugin-unistorage'
// import "./assets/scss/variable.scss"

import App from "./App.vue";
export function createApp() {
  const pinia = Pinia.createPinia()
  const app = createSSRApp(App);

  pinia.use(createUnistorage())
  app.use(pinia)

  return {
    app,
    Pinia,
  };
}
