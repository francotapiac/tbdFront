<template>
  <div class="home">

    

<v-container grid-list-xl text-xs-center>

    <!--Fila 1 -->
    <v-layout row wrap pb-5>
      <v-flex xs12 md12>
        <graph1/>
      </v-flex>
    </v-layout>

</v-container>

  </div>
</template>

<script>
import graph1  from '@/components/graphs/graph1.vue'


export default {
   components: {graph1

    },
  data () {
      return {
       
        
    }
    
  }
  
}
</script>








