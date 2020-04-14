import Vue from 'vue'
import VueRouter from 'vue-router'
const Home=()=>import('../views/Home.vue')
const PersonList=()=>import('../views/PersonList.vue')
const Person=()=> import('../views/Person.vue')
const Welcome=()=>import('../views/Welcome.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'welcome',
    component:Welcome
  },
  {
    path: '/home',
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
