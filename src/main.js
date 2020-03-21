import {
  Col,
  Row,
} from 'ant-design-vue';
import Vue from 'vue';

import App from './App.vue';
import store from './store';

// Registration for global components
Vue.component('Col', Col);
Vue.component('Row', Row);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
