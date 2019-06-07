import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  
  state: {

    loading:{
      titulo:'',
      estado: false,
      color: "loading.color"
    },

    fecha:{
      fechaInicio: new Date().toISOString().substr(0,10),
      fechaFinal: new Date().toISOString().substr(0,10),
    },
    
    tipoInformacion: null,
    filtroGrafico: ['comentario','sentimiento']

  },


  mutations: {
    
    //Mutations: para calendario
    mostrarLoading(state,payload){
      state.loading.titulo = payload.titulo,
      state.loading.color = payload.color,
      state.loading.estado = true
    },

    ocultarLoading(state){
      state.loading.estado = false
    },

    //Mutations: para tipo de información
    cambiarTipoInformacion(state,tipo){
      state.tipoInformacion = tipo
    }
  


  },
  actions: {
   


  }
})
