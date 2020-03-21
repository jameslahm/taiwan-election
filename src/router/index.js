import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PersonList from '../views/PersonList.vue'
import Person from '../views/Person.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/search',
    name:'Search',
    component:PersonList
  },
  {
    path: '/person/:id',
    name: 'Person',
    component: Person,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
