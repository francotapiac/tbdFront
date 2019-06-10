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
      await axios.get('http://localhost:8080/genres/getbydate')
      .then(res=>{
         let fechas = []
         let listasGeneros = ['pop','rock','reggaeton']
         let listasTotalesPop = []
         let listasTotalesRock = []
         let listasTotalesReggaeton = []

        res.data.forEach(element => {
           fechas.push(element[0].fecha)
          element.forEach(item => {
          
          if(item.genero == 'pop'){
            
            listasTotalesPop.push(item.total)
            console.log(listasTotalesPop)
          }
          if(item.genero == 'rock'){
            listasTotalesRock.push(item.total)
          }
          if(item.genero == 'reggaeton'){
            listasTotalesReggaeton.push(item.total)
          }
          });
         
         
          console.log(listasTotalesPop)
        

        });
        console.log(listasTotalesPop)
        this.series = [{
          name: listasGeneros[0],
          data: listasTotalesPop
        },
        {
          name: listasGeneros[1],
          data: listasTotalesRock
        },
        {
          name: listasGeneros[2],
          data: listasTotalesReggaeton
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
