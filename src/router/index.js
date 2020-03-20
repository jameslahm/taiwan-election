import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/person/:id',
    name: 'Person',
    component: () => import(/* webpackChunkName: "Person" */ '../views/Person'),
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
