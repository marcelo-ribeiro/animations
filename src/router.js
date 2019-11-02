import Vue from 'vue';
import { IonicVueRouter } from '@ionic/vue';
import Home from './views/Home.vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'AnimateOnScroll' },
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: 'About' },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});