import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Generos from './views/Generos.vue'
import Artistas from './views/Artistas.vue'
import GeneroGrafico1 from './views/GeneroGrafico1.vue'
import GeneroGrafico2 from './views/GeneroGrafico2.vue'
import GeneroGrafico3 from './views/GeneroGrafico3.vue'
import ArtistaGrafico1 from './views/ArtistaGrafico1.vue'
import ArtistaGrafico2 from './views/ArtistaGrafico2.vue'
import ArtistaGrafico3 from './views/ArtistaGrafico3.vue'

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
      path: '/generosPopulares',
      name: 'generoGrafico1',
      component: GeneroGrafico1
    },
    {
      path: '/generosAnalisisSentimientos',
      name: 'generoGrafico2',
      component: GeneroGrafico2
    },
    {
      path: '/generosEnElTiempo',
      name: 'generoGrafico3',
      component: GeneroGrafico3
    },
    {
      path: '/artistasPopulares',
      name: 'artistaGrafico1',
      component: ArtistaGrafico1
    },
    {
      path: '/artistasAnalisisSentimientos',
      name: 'artistaGrafico2',
      component: ArtistaGrafico2
    },
    {
      path: '/artistasEnElTiempo',
      name: 'artistaGrafico3',
      component: ArtistaGrafico3
    },
  

  ]
})
