<template>
    <div>
        <v-layout wrap>

            <!--Fecha inicio-->
            <v-flex xs6>
                <!--Barra calendario-->
                <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="fecha"
                persistent
                lazy
                full-width
                width="290px"
                >
                <template v-slot:activator="{ on }">
                    <v-text-field
                    v-model="fecha.fechaInicio"
                    label="Fecha inicial"
                    prepend-icon="event"
                    readonly
                    v-on="on"
                    ></v-text-field>
                </template>

                <!--calendario-->
                <v-card>
                    <v-date-picker 
                    @input="menu = false"
                    v-model="fecha.fechaInicio" 
                   
                    locale="es-cl"
                    :min="minimo"
                    :max="maximo"
                    @change="getDolar(fecha.fechaInicio)"
                    >
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog.save(
                        
                    )">OK</v-btn>
                    </v-date-picker>
                </v-card>
                
                <!--Datos de calendario-->
                <v-card color="error" dark>
                    <v-card-text class="display-1 text-xs-center">
                       {{valor}}
                    </v-card-text>
                </v-card>
                </v-dialog>
            </v-flex>

            <!--Fecha Final-->
            <v-flex xs6>
                <!--Barra calendario-->
                <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="fecha"
                persistent
                lazy
                full-width
                width="290px"
                >
                <template v-slot:activator="{ on }">
                    <v-text-field
                    v-model="fecha.fechaFinal"
                    prepend-icon="event"
                    readonly
                    v-on="on"
                    ></v-text-field>
                </template>

                <!--calendario-->
                <v-card>
                    <v-date-picker 
                    @input="menu = false"
                    v-model="fecha.fechaFinal" 
                   
                    locale="es-cl"
                    :min="minimo"
                    :max="maximo"
                    @change="getDolar(fecha.fechaFinal)"
                    >
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog.save(
                        
                    )">OK</v-btn>
                    </v-date-picker>
                </v-card>
                
                <!--Datos de calendario-->
                <v-card color="error" dark>
                    <v-card-text class="display-1 text-xs-center">
                       {{valor}}
                    </v-card-text>
                </v-card>
                </v-dialog>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import axios from "axios";
import store from '@/store';
import {mapState, mapMutations} from "vuex";

export default {
    store:store,
    data(){
        return{
            modal: false,
            minimo:'1984',
            maximo: new Date().toISOString().substr(0,10),
            valor:null
        }
    },
    methods:{
       ...mapMutations(['mostrarLoading','ocultarLoading']),

        async getDolar(dia){
            let ddmmyy = dia.split('-').reverse().join('-')  
            try{
                this.mostrarLoading({titulo:'Accediendo a información',color:'secondary'})
                let datos = await axios.get('https://mindicador.cl/api/dolar/' + ddmmyy)
                if(datos.data.serie.length > 0){
                    this.valor = await datos.data.serie[0].valor
                    this.mostrarLoading({titulo:'Accediendo a información',color:'secondary'})
                }
                else{
                    this.valor = 'Sin resultados'
                }
            } catch (error){
                console.log(error)
            }
                finally{
                    this.ocultarLoading()

            }
           
        }
    },

    computed:{
      ...mapState(['fecha'])

    },
    
    created(){
        this.getDolar(this.fecha)
    }
}
</script>


