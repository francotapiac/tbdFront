<template>
  <div class="home">

    

<v-container grid-list-xl text-xs-center>

    <!--Fila 1 -->
    <v-layout row wrap pb-5>
      <v-flex xs12 md12>
        <InfoGenero/>
      </v-flex>
    </v-layout>
  



       
    </v-layout>


</v-container>

  </div>
</template>

<script>
import InfoGenero  from '@/components/chartGenero/InfoGenero'


export default {
   components: {InfoGenero

    },
  data () {
      return {
       
        
    }
    
  }
  
}
</script>




