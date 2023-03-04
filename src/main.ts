import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./assets/tailwind.css";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);


Vue.config.productionTip = false;



new Vue({
  router,
  store,
  vuetify,
  // i18n,
  render: (h) => h(App),
}).$mount("#app");
