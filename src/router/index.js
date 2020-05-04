import Vue from 'vue';
import { IonicVueRouter } from '@ionic/vue';
import Home from '@/pages/Home';
const About = () => import('@/pages/About.vue');

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
});
