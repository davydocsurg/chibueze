import Vue from "vue";
import App from "./App.vue";
// import router from './router'
import store from "./store";

import "../src/assets/css/main.css";
import "../public/assets/fontawesome-free/css/all.css";
import Scroll from "./animations/scroll";
// import nav from './nav'

import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

Vue.directive("scrollAnime", Scroll);

document
  .getElementById("app")
  .onload(window.location.replace("https://davydocsurg.github.io"));

new Vue({
  // router,
  store,

  // nav,
  render: (h) => h(App),
}).$mount("#app");
