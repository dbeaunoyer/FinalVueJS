import Vue from "vue";
import App from "./App.vue";
import "./assets/css/index.css";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';



Vue.use(BootstrapVueIcons)
Vue.use(BootstrapVue);


new Vue({
  render: (h) => h(App),
}).$mount("#app");
