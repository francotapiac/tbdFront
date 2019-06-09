<template>
  <div class="home">

    

<v-container grid-list-xl text-xs-center>

    <!--Fila 1 -->
    <v-layout row wrap pb-5>
      <v-flex xs12 md12>
       <grafico2/>
      </v-flex>
    </v-layout>
  



       


</v-container>

  </div>
</template>

<script>
import grafico2  from '@/components/chartGenero/Chart2'


export default {
   components: {grafico2
    },
  data () {
      return {  
        
    }
  } 
}
</script>
