import {
  Col,
  Row,
} from 'ant-design-vue';
import Vue from 'vue';

import App from './App.vue';

// Registration for global components
Vue.component('Col', Col);
Vue.component('Row', Row);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
