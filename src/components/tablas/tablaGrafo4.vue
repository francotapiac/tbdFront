<template>
<v-card pb-5>
  <v-toolbar id="tabla">
          <v-toolbar-title id="titulo-card" class ="">Características</v-toolbar-title>
          
        </v-toolbar>
  <v-container fluid grid-list-md>
    <v-data-iterator
      :items="items"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      content-tag="v-layout"
      row
      wrap
    >
      <template v-slot:item="props">
        <v-flex
          xs12
          sm12
        >
          
            <v-card-title><h4>{{ props.item.name }}</h4></v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-tile>
                <v-list-tile-content>{{props.item.contenido1}}</v-list-tile-content>
                <div v-if="props.item.id == 1">{{resumenGrafoArtistaGeneros.totalComentariosGenero}}</div>
                <div v-else-if="props.item.id == 2">{{resumenGrafoArtistaGeneros.generoPopu}}</div>
                <div v-else-if="props.item.id == 3">{{resumenGrafoArtistaGeneros.artistaPopu}}</div>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>{{props.item.contenido2}}</v-list-tile-content>
                <div v-if="props.item.id == 1">{{resumenGrafoArtistaGeneros.totalComentariosArtista}}</div>
                <div v-if="props.item.id == 2">{{resumenGrafoArtistaGeneros.comentarioGeneroPopu}}</div>
                <div v-else-if="props.item.id == 3">{{resumenGrafoArtistaGeneros.comentarioArtistaPopu}}</div>
              </v-list-tile>
         
             
            </v-list>
         
        </v-flex>
      </template>
    </v-data-iterator>
  </v-container>
</v-card>
</template>

<script>
import {mapState} from "vuex";
  export default {
    data: () => ({
      rowsPerPageItems: [1, 2, 3],
      pagination: {
        rowsPerPage: 3
      },
      items: [
        {
          id: 1,
          name: 'Resumen general',
          contenido1: 'Total de comentarios por género:',
          contenido2: 'Total de comentarios por artista:',
          dato1: '',
          dato2: ''

        },
        {
          id: 2,
          name: 'Resumen de género',
          contenido1: 'Género más popular:',
          contenido2: 'Cantidad de comentarios:',
          dato1: '',
          dato2: ''
        
        },
        {
          id:3,
          name: 'Resumen de artista',
          contenido1: 'Artista más popular:',
          contenido2: 'Cantidad de comentarios:',
          dato1: '',
          dato2: ''
         
        }
      ]
    }),

   
    computed:{
        ...mapState(['resumenGrafoArtistaGeneros']),

    }
    
  }

  
</script>

<style >

#titulo-card{
    color:#FFFFFF;
    align-content: center;
}
#tabla{  
  background-image: linear-gradient(90deg, #5BC0BE,#6FFFE9) !important;
}
</style>


