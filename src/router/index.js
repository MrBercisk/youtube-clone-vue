import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Musik from '../views/Musik.vue';
import Live from '../views/Live.vue';
import Game from '../views/Game.vue';
import Berita from '../views/Berita.vue';
import Kartun from '../views/Kartun.vue';
import Memasak from '../views/Memasak.vue';
import Baru from '../views/Baru.vue';
import SyaratKetentuan from '../views/SyaratKetentuan.vue'
import Kebijakan from '../views/Kebijakan.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/musik',
      name: 'Musik',
      component: Musik
    },
    {
      path: '/live',
      name: 'Live',
      component: Live
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/berita',
      name: 'Berita',
      component: Berita
    },
    {
      path: '/kartun',
      name: 'Kartun',
      component: Kartun
    },
    {
      path: '/memasak',
      name: 'Memasak',
      component: Memasak
    },
    {
      path: '/baru',
      name: 'Baru',
      component: Baru
    },
   
    {
      path: '/privacy-policy/',
      name: 'Kebijakan',
      component: Kebijakan
    },
    {
      path: '/terms-and-conditions/',
      name: 'SyaratKetentuan',
      component: SyaratKetentuan
    },
  ]
});

export default router;
