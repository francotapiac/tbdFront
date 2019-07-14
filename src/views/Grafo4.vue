<template>
 <div class="home">
    <v-container grid-list-xl text-xs-center>
      <!--Fila 1 -->
      <v-layout row wrap pb-7>
        <v-flex d-flex xs12 sm5 md9>
          <graph4/>
        </v-flex>

        <v-flex d-flex xs12 sm4 md3>

          <tablaGrafo4/>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import graph4  from '@/components/graphs/graph4.vue'
import tablaGrafo4 from '@/components/tablas/tablaGrafo4.vue'


export default {
   components: {
     graph4,
     tablaGrafo4,

    },
  data () {
      return {
       
        
    }
    
  }
  
}
</script>








