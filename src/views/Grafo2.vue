<template>
  <div class="home">
    <v-container grid-list-xl text-xs-center>
      <!--Fila 1 -->
      <v-layout row wrap pb-7>
        <v-flex d-flex xs12 sm5 md9>
          <graph2/>
        </v-flex>

        <v-flex d-flex xs12 sm4 md3>

          <tablaGrafo2/>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import graph2  from '@/components/graphs/graph2.vue'
import tablaGrafo2 from '@/components/tablas/tablaGrafo2.vue'


export default {
   components: {
     graph2,
     tablaGrafo2,
    },
  data () {
      return {
       
        
    }
    
  }
  
}
</script>








