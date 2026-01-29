import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Exercise1 from '../views/Exercise1.vue'
import Exercise2 from '../views/Exercise2.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exercise1',
    name: 'Exercise1',
    component: Exercise1
  },
  {
    path: '/exercise2',
    name: 'Exercise2',
    component: Exercise2
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router