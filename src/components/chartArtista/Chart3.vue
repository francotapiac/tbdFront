<template>
  <div class="example">
    <v-breadcrumbs id="indice" :items="items" divider=">"></v-breadcrumbs>
      <v-divider></v-divider>
      <v-card elevation = 5>

      <v-toolbar id="grafico">
          <v-toolbar-title id="titulo-card" class ="font-weight-light"> Popularidad en el tiempo artistas más comentados</v-toolbar-title>
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
       items: [
        {
          text: 'Inicio',
          disabled: false,
          href: '/'
        },
        {
          text: 'Géneros',
          disabled: false,
          href: '#/generos'
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
      await axios.get('http://localhost:8080/artists/getbydate')
      .then(res=>{
         let fechas = []
         let listaArtistas = ['Noche de Brujas','Bad Bunny','Daddy Yankee','Queen','Rihanna']
         let listasTotales1 = []
         let listasTotales2 = []
         let listasTotales3 = []
         let listasTotales4 = []
         let listasTotales5 = []
         


        res.data.forEach(element => {
           fechas.push(element[0].fecha)
          element.forEach(item => {
          
          if(item.artista == listaArtistas[0]){
            
            listasTotales1.push(item.total)
          }
          if(item.artista == listaArtistas[1]){
            listasTotales2.push(item.total)
          }
          if(item.artista == listaArtistas[2]){
            listasTotales3.push(item.total)
          }
          if(item.artista == listaArtistas[3]){
            listasTotales4.push(item.total)
          }
          if(item.artista == listaArtistas[4]){
            listasTotales5.push(item.total)
          }
          });
         
         
          
        

        });
        
        this.series = [{
          name: listaArtistas[0],
          data: listasTotales1
        },
        {
          name: listaArtistas[1],
          data: listasTotales2
        },
        {
          name: listaArtistas[2],
          data: listasTotales3
        },
         {
          name: listaArtistas[3],
          data: listasTotales4
        },
         {
          name: listaArtistas[4],
          data: listasTotales5
        },],
      
      this.chartOptions = {
            xaxis: {
            categories: fechas
          }
        }
       
      
      })

      }catch{
        console.log(error)

      }
      finally{
        this.ocultarLoading()
      }
    },


  },

  created(){
    this.actualizarGeneros()

    
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
