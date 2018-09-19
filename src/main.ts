import Vue from 'vue';
import Web3 from 'web3';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

declare global {
  interface Window { web3: Web3; }
}

window.web3 = window.web3 || {};
