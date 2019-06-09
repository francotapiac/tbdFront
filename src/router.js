import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Generos from './views/Generos.vue'
import Artistas from './views/Artistas.vue'
import Grafico1 from './views/Grafico1.vue'


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
    },
    {
      path: '/artistas',
      name: 'artistas',
      component: Artistas
    },

    {
      path: '/graficos1',
      name: 'grafico1',
      component: Grafico1
    }
  ]
})
