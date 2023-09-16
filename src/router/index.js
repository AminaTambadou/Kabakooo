import { createRouter, createWebHistory } from 'vue-router'

import Tourism from '@/components/Tourism.vue'
import Gastronomie from '@/components/Gastronomie.vue'
import Home from '@/components/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tourism',
      name: 'Tourism',
      component: Tourism
    },
    {
      path: '/gastronomie',
      name: 'Gastronomie',
      component:Gastronomie
    },
    
   
  ]
})

export default router
