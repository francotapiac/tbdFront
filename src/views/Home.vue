<template>
  <div class="home">

    

<v-container grid-list-xl text-xs-center >

    <!--Fila 1 -->
    <v-layout row wrap>
      <!-- Primer panel: Cantidad comentarios -->
      <v-flex xs12 md12>
        <FirstCardHome/>
      </v-flex>
    </v-layout>

    <!--Fila 2 -->
    <v-layout row wrap>
      <!-- Primer panel: Gráfico artista -->
      <v-flex xs12 md7>
        <v-card elevation = 5 >
          <ChartArtista/>
        </v-card>
      </v-flex>

      <!-- Segundo panel: lista Artistas comentados -->
      <v-flex xs12 md5>
        <TopArtista/>
      </v-flex>
      
    </v-layout>

    <!--Fila 3: Comentarios por componente -->
    <v-layout row wrap>
      <SecondCardHome/>
      
    </v-layout>
    

    


</v-container>
  </div>
</template>

<script>
import FirstCardHome  from '@/components/panels/FirstCardHome'
import SecondCardHome  from '@/components/panels/SecondCardHome'
import ChartArtista  from '@/components/chartArtista/Chart1.vue'
import TopArtista  from '@/components/panels/TopArtistaPanel.vue'
export default {
   components: {FirstCardHome,SecondCardHome,ChartArtista,TopArtista

    },
  data () {
      return {
       
        textoIzquierda: 'Encuentra los géneros musicales más escuchados'
    }
    
  }
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
