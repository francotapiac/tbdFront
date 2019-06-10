<template>
  <div class="example">
      <v-divider></v-divider>
      <v-card elevation = 5>
      <v-toolbar>
          <v-toolbar-title id="titulo-card" class ="font-weight-light"> Generos más comentados</v-toolbar-title>
          <v-menu bottom right>
            <template v-slot:activator="{ on }">
              <v-btn
                dark
                icon
                v-on="on"
              >
                <v-icon>more_vert</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-tile
                v-for="(item, i) in items"
                :key="item"
                @click="updateTheme(item)"
              >
                <v-list-tile-title>{{ item }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar>
      
      
      <apexcharts 
        width="100%"
        height="350"
        type="bar"
        :options="chartOptions"
        :series="series"
      ></apexcharts>
  </v-card>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import axios from 'axios'
import store from '@/store';
import {mapState, mapMutations} from "vuex";

export default {
  name: "Chart",
  components: {
    apexcharts: VueApexCharts
  },
  store:store,
  data: function() {
    return {
      selectedItem: undefined,
      items: ['palette1', 'palette2', 'palette3', 'palette4','palette5','palette6','palette7','palette8','palette9'],
      chartOptions: {
        chart: {
          id: "basic-bar",
          animations: {
            speed: 200
          }
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          position: 'bottom',
          onItemClick: {
            toggleDataSeries: true
          },
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            distributed: true
          }
        },
       
      },
      series: [
        {
          name: "N° comentarios",
          data: []
        }
      ]
    };
  },
  methods: {
    ...mapMutations(['mostrarLoading','ocultarLoading']),
    updateTheme(e) {
      this.chartOptions = {
        theme: {
          palette: this.selectedItem
        }
      };
    }, 
    async actualizarGeneros(){
      try{
        this.mostrarLoading({titulo:'Accediendo a información',color:'secondary'})
        await axios.get('http://localhost:8080/genres/popularGenres')
          .then(res=>{
          console.log(res);
          this.chartOptions = {
            xaxis: {
            categories: res.data.map(item => item.genero)
          }
        }
      })
      }catch{
        consol.log(errror)
      }
      finally{
        this.ocultarLoading()
      }
      
    },

    async actualizarComentarios(){
      let cantidadComentarios  = []
      await axios.get('http://localhost:8080/genres/popularGenres')
      .then((res)=>{
        this.series = [{
          data: res.data.map(item => item.total)
        }]
      })
      
     // this.chartOptions.series = await cantidadComentarios
      
      console.log(cantidadComentarios)
    }

  },

  created(){
    this.actualizarGeneros()
    this.actualizarComentarios()
  }

 
};
</script>

<style scope>

#tituloGrafico{
  color:#5BC0BE ;
}

</style>
