import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
import data from '../assets/data/data'

const store = new Vuex.Store({
  state: {
    persons: data,
    year:2018
  },
  getters:{
    persons:state=>state.persons
  }
})

export default store
