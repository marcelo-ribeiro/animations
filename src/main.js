import Vue from 'vue';
import Ionic from '@ionic/vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@ionic/core/css/ionic.bundle.css';
import App from './App.vue';
import router from './router';
import Animate from '@/components/Animation';
import '@/components/Animation/index.scss';

Vue.directive('animate', Animate);

Vue.use(Ionic);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
