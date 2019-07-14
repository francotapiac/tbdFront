<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialogoTopArtista.estado"
      width="500"
    >   
        <v-layout>
            <v-card style="width:600px !important;">
                <!--Titulo-->
                <v-toolbar id="grafico">
                    <v-toolbar-title id="titulo-card">{{dialogoTopArtista.nombre}}</v-toolbar-title>
                </v-toolbar>
                <v-layout align-center justify-center>
                    <!--Imagen-->
                    <v-flex xs5>
                        <v-img v-bind:src="dialogoTopArtista.imagen" id="imagenArtista"></v-img>
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
                        id="boton"
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

<style>

#imagenArtista{
    border-radius:50%;
    margin: 15px;
    padding: 28px;
}

</style>
