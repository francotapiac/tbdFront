<template>
<div class="home">
    <v-container grid-list-xl text-xs-center>
      <!--Fila 1 -->
      <v-layout row wrap pb-7>
        <v-flex d-flex xs12 sm5 md9>
          <graph3/>
        </v-flex>

        <v-flex d-flex xs12 sm4 md3>

          <tablaGrafo3/>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import graph3  from '@/components/graphs/graph3.vue'
import tablaGrafo3 from '@/components/tablas/tablaGrafo3.vue'


export default {
   components: {
     graph3,
     tablaGrafo3,

    },
  data () {
      return {
       
        
    }
    
  }
  
}
</script>








