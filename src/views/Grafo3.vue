<template>
  <div class="home">

    

<v-container grid-list-xl text-xs-center>

    <!--Fila 1 -->
    <v-layout row wrap pb-5>
      <v-flex xs12 md12>
        <graph3/>
      </v-flex>
    </v-layout>

</v-container>

  </div>
</template>

<script>
import graph3  from '@/components/graphs/graph3.vue'


export default {
   components: {graph3

    },
  data () {
      return {
       
        
    }
    
  }
  
}
</script>








