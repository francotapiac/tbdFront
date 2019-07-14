<template>
  <div class="home">
    <v-container grid-list-xl text-xs-center>
      <!--Fila 1 -->
      <v-layout row wrap pb-7>
        <v-flex d-flex xs12 sm5 md9>
          <graph1/>
        </v-flex>

        <v-flex d-flex xs12 sm4 md3>

          <tablaGrafo1/>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import graph1  from '@/components/graphs/graph1.vue'
import tablaGrafo1 from '@/components/tablas/tablaGrafo1.vue'


export default {
   components: {
     graph1,
     tablaGrafo1,
    },
}
</script>








