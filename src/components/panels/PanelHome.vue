<template>
  <div class="panelHome">
    

    <v-container grid-list-md>
      
      <v-layout row wrap>
        <v-flex xs12 sm4 > 
          <v-card >
            <!-- Ejemplo -->
             <v-hover>
              <v-card slot-scope="{ hover }" class="mx-auto" color="grey lighten-4" max-width="600">
                  <!--Sección imagen-->
                  <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" >
                  <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 black--text" style="height: 100%;font-size:25px !important;">
                 Top géneros
                </div>
        
                  </v-expand-transition>
                  </v-img>
              </v-card>
            </v-hover>

             <!--Sección titulo-->
            <v-card-title >
              <h2 class="text-md-center">Géneros musicales</h2>
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
            <v-hover>
              <v-card slot-scope="{ hover }" class="mx-auto" color="grey lighten-4" max-width="600">
                  <!--Sección imagen-->
                  <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" >
                  <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 black--text" style="height: 100%;font-size:25px !important;">
                 Top artistas
                </div>
        
              </v-expand-transition>
                  </v-img>
          </v-card>
        </v-hover>

             <!--Sección titulo-->
            <v-card-title>
              <h2>Artistas</h2>
            </v-card-title>

             <!--Sección texto-->
            <v-card-text>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto atque porro officia ducimus tempora rerum, aliquam non minima odit consequatur qui, consequuntur nostrum esse saepe quis velit at corporis accusantium.</p>
            </v-card-text>

             <!--Sección acciones-->
            <v-card-actions >
              <v-btn color="info" flat>Entrar</v-btn>
            </v-card-actions>

          </v-card>
        </v-flex>

        <v-flex xs12 sm4>
          <v-card>
            <v-hover>
              <v-card slot-scope="{ hover }" class="mx-auto" color="grey lighten-4" max-width="600">
                  <!--Sección imagen-->
                  <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" >
                  <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 black--text" style="height: 100%;font-size:25px !important;">
                 Top grafos)?
                </div>
        
              </v-expand-transition>
                  </v-img>
          </v-card>
        </v-hover>

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

