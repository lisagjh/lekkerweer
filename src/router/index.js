import { createRouter, createWebHistory } from 'vue-router'

// views importeren (die maken we zo aan)
import Home from '../views/Home.vue'
import Tutorial from '../views/Tutorial.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/tutorial', name: 'Tutorial', component: Tutorial },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
