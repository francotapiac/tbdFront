import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Generos from './views/Generos.vue'
import Artistas from './views/Artistas.vue'
import Grafos from './views/Grafos.vue'
import GeneroGrafico1 from './views/GeneroGrafico1.vue'
import GeneroGrafico2 from './views/GeneroGrafico2.vue'
import GeneroGrafico3 from './views/GeneroGrafico3.vue'
import ArtistaGrafico1 from './views/ArtistaGrafico1.vue'
import ArtistaGrafico2 from './views/ArtistaGrafico2.vue'
import ArtistaGrafico3 from './views/ArtistaGrafico3.vue'
import Grafo1 from  './views/Grafo1.vue'
import Grafo2 from  './views/Grafo2.vue'
import Grafo3 from  './views/Grafo3.vue'
import Grafo4 from './views/Grafo4.vue'


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
      path: '/grafos',
      name: 'grafos',
      component: Grafos
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
    {
      path: '/grafo1',
      name: 'grafo1',
      component: Grafo1
    },
    {
      path: '/grafo2',
      name: 'grafo2',
      component: Grafo2
    },
    {
      path: '/grafo3',
      name: 'grafo3',
      component: Grafo3
    },
    {
      path: '/grafo4',
      name: 'grafo4',
      component: Grafo4
    }
  ]
})
