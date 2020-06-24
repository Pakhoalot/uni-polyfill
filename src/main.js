import Vue from "vue";
// #ifdef H5-WEIXIN
import { injectComponent } from "./uni-polyfill";
injectComponent(Vue);
// #endif
import App from "./App";
Vue.config.productionTip = false;
Vue.config.devTools = process.env.NODE_ENV !== "production";

App.mpType = "app";

const app = new Vue(App);
app.$mount();
