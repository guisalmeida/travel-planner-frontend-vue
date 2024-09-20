import { createRouter, createWebHistory } from 'vue-router'
import CreateTrip from '../views/CreateTrip.vue'
import TripDetails from '../views/TripDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CreateTrip
    },
    {
      path: '/trips/:tripId',
      component: TripDetails
    }
  ]
})

export default router
