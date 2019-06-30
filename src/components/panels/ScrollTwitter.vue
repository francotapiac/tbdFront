<template>
<v-card>
  <v-toolbar id="grafico">
          <v-toolbar-title id="titulo-card" class ="font-weight-light">Twitter</v-toolbar-title>
        </v-toolbar>
      <v-layout
        column
        align-center
        justify-center
        style="height: 520px"
      >
      <v-flex d-flex xs10 sm4 md4>
          <a  class="twitter-timeline"   v-bind:href="ruta" data-height="480px" data-width="480px">Artistas en Twitter</a> 
       </v-flex>

      </v-layout>
    </v-card>
    
</template>


<script>
  export default {
    data(){
        
        return {
          offsetTop: 0,
          ruta: ""
  
        }
    },

    mounted(){
      this.ruta = "https://twitter.com/TwitterMusic?ref_src=twsrc%5Etfw"
    }


  }
</script>



