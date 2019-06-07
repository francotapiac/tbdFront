<template>
<div class="artistas">
  <v-container grid-list-xl text-xs-center>
    <h1 id="tituloSeccion" class="font-weight-light">Artistas</h1>

    <!--- Fila 1 -->
    <v-layout row wrap pb-5>
      <v-flex xs12 md12>
        <SelectPanel/>
      </v-flex>
    </v-layout>

    <!--- Fila 2 -->

    <v-layout row wrap pb-5>
      <v-flex xs12 md6>
        <Chart1/>
      </v-flex>
    </v-layout>
  </v-container>
</div>
      
</template>


<script>
import Chart1  from '@/components/chartArtista/Chart1'
import SelectPanel  from '@/components/panels/SelectPanel'

export default {
  name: 'Artistas',
  components: {
    Chart1,SelectPanel
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style scope>

#tituloSeccion{
  color:#613DC1;
}

</style>



