<template>
  <div class="example">
      <v-breadcrumbs id="indice" :items="items" divider=">"></v-breadcrumbs>
      <v-divider></v-divider>
      <v-card elevation = 5>
        <v-toolbar id="grafico">
          <v-toolbar-title id="titulo-card"> Gráfico artistas más comentados</v-toolbar-title>

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
import store from '@/store';
import axios from 'axios';
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
          text: 'Artistas más comentados',
          disabled: true,
          href: '#/artistasPopulares'
        }
      ],
      chartOptions: {
        chart: {
          id: "basic-bar",
          animations: {
            speed: 200
          }
        },
        legend: {
          show: true,
          showForSingleSeries: false,
          position: 'bottom',
          onItemClick: {
            toggleDataSeries: true
          },
        },
       title: {
          text: '',
          aling: 'left'
        },
        dataLabels: {
          enabled: false,
        },
          yaxis:{
          title: {
            text: 'Nº de comentarios'
          }
        },
        xaxis:{
          title: {
            text: 'Artistas'
          }
        },
        plotOptions: {
          bar: {
            distributed: true
          }
        },
       
      },
      series: [
        {
          name: [],
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
          palette: e
        }
      };
    }, 
    async actualizarArtistas(){
      try{
        this.mostrarLoading({titulo:'Accediendo a la información',color:'blue'})
        await axios.get('http://localhost:8080/artists/popularArtists')
          .then(res=>{
          console.log(res);
          this.chartOptions = {
            xaxis: {
            categories: res.data.map(item => item.artista)
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
      await axios.get('http://localhost:8080/artists/popularArtists')
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
    this.actualizarArtistas()
    this.actualizarComentarios()
  }

 
};
</script>

<style scope>

.v-breadcrumbs.active{
  color:#5BC0BE !important;
}

#grafico{  
  background-image: linear-gradient(90deg, #5BC0BE,#6FFFE9) !important;
}

</style>
