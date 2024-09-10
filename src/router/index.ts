import { createRouter, createWebHistory } from 'vue-router'
import CreateTrip from '../views/CreateTrip.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CreateTrip
    }
  ]
})

export default router
