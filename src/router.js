import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Generos from './views/Generos.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/generos',
      name: 'generos',
      component: Generos
    }
  ]
})
