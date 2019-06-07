<template>
  <div class="home">

    

<v-container grid-list-xl text-xs-center>

    <!--Fila 1 -->
    <v-layout row wrap pb-5>
      <!-- Primer panel: Cantidad comentarios -->
      <v-flex xs12 md12>
        <FirstCardHome/>
      </v-flex>
    </v-layout>
  

    <!--Fila 4: Comentarios por componente -->

     <!-- Primer panel-->
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md8>
          <TopArtista/>
      </v-flex>
<!--
      <!-- Segundo panel
      <v-flex d-flex xs12 md4>
        <v-card elevation = 5> 
          Comentarios en Twitter
          <v-divider></v-divider>
          <v-flex d-flex xs12 sm12 md12>
            <v-flex d-flex>
              <SecondCardHome/>
            </v-flex>
            </v-flex>
          </v-card>
        </v-flex>
-->
<meta name="twitter:dnt" content="on">

<v-flex
<a class="twitter-share-button"
href="https://twitter.com/share"
data-dnt="true">
Tweet</a>
</v-flex>
      </v-layout>
    

    


</v-container>
  </div>
</template>

<script async defer
src="//platform.twitter.com/widgets.js"
charset="utf-8">
</script>

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

.rounded-card{
    border-radius:8px;
}

</style>


