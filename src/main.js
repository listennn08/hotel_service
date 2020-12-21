import Vue from 'vue';
import WOW from 'wow.js/dist/wow';
import 'wow.js/css/libs/animate.css';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';

import './filters/numberConverter';

import './plugins/swal';
import './plugins/swiper';

import './assets/main.scss';

Vue.config.productionTip = false;

new Vue({
  i18n,
  store,
  router,
  created() {
    new WOW().init();
  },
  render: (h) => h(App),
}).$mount('#app');
