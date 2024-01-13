import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ActiveView from '@/views/ActiveView.vue'
import CompletedView from '@/views/CompletedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/active',
      name: 'active',
      component: ActiveView
    },
    {
      path: '/completed',
      name: 'completed',
      component: CompletedView
    },
  ]
})

export default router
