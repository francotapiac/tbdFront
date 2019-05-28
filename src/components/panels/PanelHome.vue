<template>
  <div class="panelHome">
    

    <v-container grid-list-md>
      
      <v-layout row wrap>
        <v-flex xs12 sm4 > 
          <v-card >

            <!--Sección imagen-->
            <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" >
            </v-img>

             <!--Sección titulo-->
            <v-card-title>
              <h2>Géneros musicales</h2>
            </v-card-title>

             <!--Sección texto-->
            <v-card-text>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto atque porro officia ducimus tempora rerum, aliquam non minima odit consequatur qui, consequuntur nostrum esse saepe quis velit at corporis accusantium.</p>
            </v-card-text>

             <!--Sección acciones-->
            <v-card-actions>
              <v-btn color="info" flat >Entrar</v-btn>
            </v-card-actions>

          </v-card>
        </v-flex>

        <v-flex xs12 sm4>
          <v-card>

            <!--Sección imagen-->
            <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
            </v-img>

             <!--Sección titulo-->
            <v-card-title>
              <h2>Artistas</h2>
            </v-card-title>

             <!--Sección texto-->
            <v-card-text>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto atque porro officia ducimus tempora rerum, aliquam non minima odit consequatur qui, consequuntur nostrum esse saepe quis velit at corporis accusantium.</p>
            </v-card-text>

             <!--Sección acciones-->
            <v-card-actions>
              <v-btn color="info" flat>Entrar</v-btn>
            </v-card-actions>

          </v-card>
        </v-flex>

        <v-flex xs12 sm4>
          <v-card>

            <!--Sección imagen-->
            <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
            </v-img>

             <!--Sección titulo-->
            <v-card-title>
              <h2>Grafos</h2>
            </v-card-title>

             <!--Sección texto-->
            <v-card-text>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto atque porro officia ducimus tempora rerum, aliquam non minima odit consequatur qui, consequuntur nostrum esse saepe quis velit at corporis accusantium.</p>
            </v-card-text>

             <!--Sección acciones-->
            <v-card-actions>
              <v-btn color="info" flat>Entrar</v-btn>
            </v-card-actions>

          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>


export default {
  data () {
      return {
        components: {

    },
        textoIzquierda: 'Encuentra los géneros musicales más escuchados'
    }
    
  }
}
</script>
