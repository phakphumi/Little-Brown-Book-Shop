import Vue from 'vue'
import App from './App.vue'
import { 
  Col,
  Row,
} from 'ant-design-vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// Registration for global components
Vue.component('Col', Col);
Vue.component('Row', Row);
