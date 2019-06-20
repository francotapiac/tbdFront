<template>
  <div class="example">
    <v-breadcrumbs id="indice" :items="items" divider=">"></v-breadcrumbs>
    <v-card elevation = 5>
      <v-toolbar id="grafico">
          <v-toolbar-title id="titulo-card" class ="font-weight-light"> Gráfico comentarios positivos y negativos de artistas (%)</v-toolbar-title>
      </v-toolbar>
      <apexchart type=bar height=500 :options="chartOptions" :series="series" />
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
        apexchart: VueApexCharts,
      },
      store:store,
      
      data: function() {
        return{
          items: [
        {
          text: 'Inicio',
          disabled: false,
          href: '/'
        },
        {
          text: 'Artistas',
          disabled: false,
          href: '#/artistas'
        },
        {
          text: 'Análisis de sentimientos',
          disabled: true,
          href: '#/artistasPopulares'
        }
      ],
        series: [{
            name: '',
            data: []
          },
          
        ],
        chartOptions: {
          chart: {
            stacked: true
          },
          colors: ['#FF4560','#74DA48'],
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '80%',

            },
          },
           title: {
             text: 'Artistas',
            align: 'left'

          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 1,
            colors: ["#fff"]
          },

          grid: {
            xaxis: {
              showLines: false
            }
          },
          yaxis: {
            min: -100,
            max: 100,
            title: {
              // text: 'Age',
            },
          },
          tooltip: {
            shared: false,
            x: {
              formatter: function (val) {
                return val
              }
            },
            y: {
              formatter: function (val) {
                return Math.abs(val) + "%"
              }
            }
          },
          xaxis: {
           
            title: {
              text: 'Porcentaje'
            },
            labels: {
              formatter: function (val) {
                return Math.abs(Math.round(val)) + "%"
              }
            }
          },
        }
      }
      },

      methods: {
    ...mapMutations(['mostrarLoading','ocultarLoading']),
 
    async actualizarArtistas(){
      try{
        this.mostrarLoading({titulo:'Accediendo a información',color:'blue'})
        await axios.get('http://localhost:8080/artists/getArtistStadistic')
          .then(res=>{
          console.log(res);
          this.chartOptions = {
            xaxis: {
            categories: res.data.map(item => item.artist)
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
      await axios.get('http://localhost:8080/artists/getArtistStadistic')
      .then((res)=>{
        console.log(res.data)
            this.series = [{
          name: 'Negativos',
          data: res.data.map(item => (item.negative * -100/item.total).toFixed(2))
          },
        { 
          name: 'Positivos',
          data: res.data.map(item => (item.positive*100/item.total).toFixed(2))
        }
        ]
      })
      
     // this.chartOptions.series = await cantidadComentarios
      
      console.log(cantidadComentarios)
    }

  },

  created(){
    this.actualizarArtistas()
    this.actualizarComentarios()
  }
};
</script>
<style>
#grafico{  
  background-image: linear-gradient(90deg, #5BC0BE,#6FFFE9) !important;
}
</style>
