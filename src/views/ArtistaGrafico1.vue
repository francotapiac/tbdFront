<template>
  <div class="home">

    

<v-container grid-list-xl text-xs-center>

    <!--Fila 1 -->
    <v-layout row wrap pb-5>
      <v-flex xs12 md12>
        <grafico1/>
     </v-flex>
    </v-layout>
  



       


</v-container>

  </div>
</template>

<script>
import grafico1  from '@/components/chartArtista/Chart1'


export default {
   components: {grafico1
    },
  data () {
      return {  
        
    }
  } 
}
</script>
