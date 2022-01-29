import Vue from 'vue';
import App from './App.vue';
import filters from '@/filters'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
