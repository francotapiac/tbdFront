<template>
  <v-layout row wrap>
    <v-flex xs12 sm12 offset-sm>
      <v-card pb-5 >
        <v-toolbar>
          <v-toolbar-title id="titulo-card" class ="font-weight-light"> Ranking de los artistas más comentados</v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list two-line>
          <!--
          <template v-for="(artistas, index) in items">
             Si es un header  
            <v-subheader v-if="item.header" :key="item.header">
              {{ item.header }}
                </v-subheader>
            <!--Si es un divider    
            <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>
             <!--Si es un titulo-    
            <v-list-tile v-else :key="item.title" avatar @click="">
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          -->
          <v-subheader>
              {{ header }}
          </v-subheader>
          <v-divider></v-divider> 
      
          <template v-for="(artista, index) in topArtistas">
            <v-divider :key="index"></v-divider>
            <v-list-tile :key="artista.nombre" avatar @click="">

              <v-list-tile-content >
                  <v-list-tile-title v-html="artista.nombre"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="artista.subtitle"></v-list-tile-sub-title>
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
        header : 'top 10',
        topArtistas: [],
      }
      
    },

    methods:{
      async getTopArtista(){
        try{
          let artistas = await axios.get('http://localhost:3000/artistas',{
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

</style>