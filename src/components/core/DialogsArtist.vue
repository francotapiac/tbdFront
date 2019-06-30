<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialogoTopArtista.estado"
      width="500"
    >   
        <v-layout>
            <v-card>
                <!--Titulo-->
                <v-card-title
                    class="headline grey lighten-2"
                    primary-title
                    >
                    {{dialogoTopArtista.nombre}}
                </v-card-title>
                <v-layout>
                    <!--Imagen-->
                    <v-flex xs5>
                        <v-img v-bind:src="dialogoTopArtista.imagen" height="110px" contain></v-img>
                    </v-flex>
                    <!--Descripción del artista-->
                    <v-flex xs7>
                        <v-card-text>
                            {{dialogoTopArtista.descripcion}}
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <!--Botón para cerrar ventana-->
                <v-card-actions class="justify-center">
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        flat
                        @click="dialogoTopArtista.estado = false"
                    >
                        Cerrar
                    </v-btn>
                </v-card-actions>
                
            </v-card>
        </v-layout>
    </v-dialog>
  </div>
</template>

<script>

import {mapState} from "vuex";
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapState(['dialogoTopArtista'])
    }
    
}
</script>