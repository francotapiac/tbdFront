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
      imagen: '',
      estado:false,
    },

    resumenGrafo: {
      generoArtistaPopular: '',
      generoArtistaComentado: '',
      usuarioPopular: '',
      seguidoresUsuario: 0,
      cantidadSeguidores: 0,
      cantidadComentarios:0

    }

  },


  mutations: {
    
    //Para resumen de grafos

    cambiarResumen(state,payload){
      state.resumenGrafo.generoArtistaPopular = payload.gaPopular,
      state.resumenGrafo.generoArtistaComentado = payload.gaComentado,
      state.resumenGrafo.usuarioPopular = payload.usuarioPopular,
      state.resumenGrafo.seguidoresUsuario = payload.seguidoresUsuario,
      state.resumenGrafo.cantidadSeguidores = payload.cantidadSeguidores,
      state.resumenGrafo.cantidadComentarios = payload.cantidadComentarios
    },
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
      state.dialogoTopArtista.imagen = payload.imagen,
      state.dialogoTopArtista.estado = true
    },
    
    ocultarArtista(state){
      state.dialogoTopArtista.estado = false
    }


  },
  actions: {
   


  }
})
