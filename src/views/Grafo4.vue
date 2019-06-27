<template>
  <div class="home">

    

<v-container grid-list-xl text-xs-center>

    <!--Fila 1 -->
    <v-layout row wrap pb-5>
      <v-flex xs12 md12>
        <graph4/>
      </v-flex>
    </v-layout>

</v-container>

  </div>
</template>

<script>
import graph4  from '@/components/graphs/graph4.vue'


export default {
   components: {graph4

    },
  data () {
      return {
       
        
    }
    
  }
  
}
</script>








