import Vue from 'vue';
import App from './App.vue';
import './css/index.css';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';

import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as falStar } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fasStar, falStar);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
