<template>
  <div class="home">
  <v-container grid-list-xl text-xs-center>
    <!--Fila 1 -->
    <v-layout row wrap pb-5>
      <v-flex xs12 md12>
         <InfoGraph/> 
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>


<script>
  import InfoGraph  from '@/components/graphs/InfoGraph'

  export default {
    components: {
      InfoGraph
      }
  }

</script>