import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;
Vue.config.devTools = process.env.NODE_ENV !== "production";

App.mpType = "app";

const app = new Vue(App);
app.$mount();
