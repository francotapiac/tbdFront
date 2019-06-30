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
    filtroGrafico: ['comentario','sentimiento'],
    
    dialogoTopArtista: {
      nombre: '',
      descripcion: '',
      imagen: 'https://legismusic.com/wp-content/uploads/2018/05/alexby11-musica-de-fondo-180x180.png',
      estado:false,
    }

  },


  mutations: {
    
    //Para calendario
    mostrarLoading(state,payload){
      state.loading.titulo = payload.titulo,
      state.loading.color = payload.color,
      state.loading.estado = true
    },

    ocultarLoading(state){
      state.loading.estado = false
    },

    //Para tipo de información
    cambiarTipoInformacion(state,tipo){
      state.tipoInformacion = tipo
    },
    
    //Para fecha
    cambiarFechaInicio(state,fecha){
      state.fecha.fechaInicio = fecha

    },

    //Para mostrar detalle de artista
    mostrarArtista(state,payload){
      state.dialogoTopArtista.nombre = payload.nombre,
      state.dialogoTopArtista.descripcion = payload.descripcion,
      state.dialogoTopArtista.estado = true
    },
    
    ocultarArtista(state){
      state.dialogoTopArtista.estado = false
    }


  },
  actions: {
   


  }
})
