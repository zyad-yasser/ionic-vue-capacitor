import Vue from 'vue';
import { IonicVueRouter } from '@ionic/vue';
import Home from '@/pages/Home';
const About = () => import('@/pages/About.vue');
const Search = () => import('@/pages/Search.vue');
const Profile = () => import('@/pages/Profile.vue');
const Notifications = () => import('@/pages/Notifications.vue');

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: Notifications,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    }
  ]
});
