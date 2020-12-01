import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import jQuery from  'jquery';
import router from './router'
//local declar
// window.$ = jQuery;
// window.jQuery = jQuery;

//global declar
window.$ = window.jQuery;
Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
