<template>
  <v-container fluid grid-list-xl>
    <v-layout wrap align-center>

      <!--
        <v-flex xs12 sm4 d-flex>
            <v-select
                :items="items1"
                label="Tipo de gráfico"
            ></v-select>
        </v-flex>
      -->

      <v-flex xs12 sm4 d-flex>
          <v-select
              @input="cambiarTipoInformacion"
              :items="filtroGrafico"
              label="Tipo de información"
              :value="tipoInformacion"
          ></v-select>
      </v-flex>
      <p>{{tipoInformacion}}</p>
       <p>{{fecha.fechaInicio}}</p>

      <v-flex xs12 sm4 d-flex>
          <DatePicker/>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>

import DatePicker  from '@/components/panels/DatePicker';
import store from '@/store';
import {mapState, mapMutations} from "vuex";

  export default {
    store:store,
    components: {
    DatePicker
  },
    data(){
        return{
           
        }
    },

    methods:{
      ...mapMutations(['cambiarTipoInformacion']),
     

    },

    computed:{
      ...mapState(['filtroGrafico','tipoInformacion','fecha'])

    }
  }
</script>