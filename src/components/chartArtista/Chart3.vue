<template>
  <div class="example">
    <v-breadcrumbs id="indice" :items="items" divider=">"></v-breadcrumbs>
      <v-divider></v-divider>
      <v-card elevation = 5>

      <v-toolbar id="grafico">
          <v-toolbar-title id="titulo-card" class ="font-weight-light"> Popularidad en el tiempo géneros más comentados</v-toolbar-title>
      </v-toolbar>
      
      <apexcharts 
        width="100%"
        height="350"
        type="line"
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
      items: ['palette1', 'palette2', 'palette3', 'palette4','palette5','palette6','palette7','palette8','palette9'],
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
          text: 'Popularidad en el tiempo',
          disabled: true,
          href: '#/artistasPopulares'
        }
      ],
        chartOptions: {
        
          chart: {
            shadow: {
              enabled: true,
              color: '#000',
              top: 18,
              left: 7,
              blur: 10,
              opacity: 1
            },
            toolbar: {
              show: false
            }
          },
          colors: ['#77B6EA', '#545454'],
           title: {
            text: 'Nº de comentarios',
            align: 'left'
          },
          dataLabels: {
            enabled: true,
          },
          stroke: {
            curve: 'smooth'
          },
          grid: {
            borderColor: '#e7e7e7',
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
        },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 30, 49]
        }
      ]
    };
  },
  methods: {
    ...mapMutations(['mostrarLoading','ocultarLoading']),
    async actualizarGeneros(){
      try{
      this.mostrarLoading({titulo:'Accediendo a la información',color:'blue'})
      await axios.get('http://localhost:8080/artists/popularArtists')
      .then(res=>{
     
      let nombreArtista = res.data.map(item => item.artista)
      let totalGenero = res.data.map(item => item.total)
       console.log(nombreArtista);
      this.series = [{
          name: nombreArtista[0],
          data: [30, 40, 45, 30, 49]
        },
        {
           name: nombreArtista[1],
          data: [20, 50, 35, 1, 30]
        },
        {
           name: nombreArtista[2],
          data: [20, 530, 15, 20, 30]
        },
        {
           name: nombreArtista[3],
          data: [20, 502, 35, 1, 30]
        },
        {
           name: nombreArtista[4],
          data: [20, 501, 25, 1, 30]
        },
        ]
      })

      }catch{
        console.log(error)

      }
      finally{
        this.ocultarLoading()
      }
    },

     actualizarFechas(){
     this.chartOptions = {
            xaxis: {
             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          }
        }
      
      
     // this.chartOptions.series = await cantidadComentarios
      
   
    }

  },

  created(){
    this.actualizarGeneros()
    this.actualizarFechas()
    
  }

 
};
</script>

<style scope>

#titulo-card{
    justify-content: flex-start;
}
#grafico{  
  background-image: linear-gradient(90deg, #5BC0BE,#6FFFE9) !important;
}

</style>
