<template>
  <v-layout row wrap>
    <v-flex xs12 sm12 offset-sm>
      <v-card pb-5 >
        <v-toolbar id="graficogit ">
          <v-toolbar-title id="titulo-card" class ="font-weight-light"> Ranking de los artistas más comentados</v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list two-line>
          <template v-for="(artista, index) in topArtistas">
            <v-divider :key="index"></v-divider>
            <v-list-tile :key="artista.artista" avatar @click="">
              <v-list-tile-content >
                  <v-list-tile-title v-html="artista.artista"></v-list-tile-title>
                  <v-list-tile-sub-title>N° comentarios: {{artista.total}}</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
            

          </template>

        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";

  export default {
    data () {
      return {

        cantidadTop: 5,
        header : 'top 5',
        topArtistas: [],
      }
      
    },

    methods:{
      async getTopArtista(){
        try{
          let artistas = await axios.get('http://localhost:8080/artists/popularArtists',{
            params: {
              limit: this.cantidadTop,
            }
            
          })
          this.topArtistas = artistas.data
          console.log(artistas.data)
        
        }catch(error){
          console.log(error)
        }

        finally{
          
        }
      }
    },

    created(){
      this.getTopArtista()
      
      
    }

    

  }
</script>

<style >

#titulo-card{
    color:#FFFFFF;
    align-content: center;
}
#grafico{  
  background-image: linear-gradient(90deg, #5BC0BE,#6FFFE9) !important;
}
</style>