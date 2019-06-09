<template>
  <div class="home">

    

<v-container grid-list-xl text-xs-center>

    <!--Fila 1 -->
    <v-layout row wrap pb-5>
      <v-flex xs12 md12>
        <grafico3/>
     </v-flex>
    </v-layout>
  
</v-container>

  </div>
</template>

<script>
import grafico3  from '@/components/chartGenero/Chart3'


export default {
   components: {grafico3
    },
  data () {
      return {  
        
    }
  } 
}
</script>
