import { createApp } from "vue";

import "normalize.css";
import "./assets/css/index.css";

import App from "./App.vue";
import router from "./router";
import pinia from "./store";

const app = createApp(App);

//中间件-路由
app.use(router);

app.use(pinia);

app.mount("#app");
