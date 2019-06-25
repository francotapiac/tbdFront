<template>
  <div class="example">
    <v-breadcrumbs id="indice" :items="items" divider=">"></v-breadcrumbs>
      <v-divider></v-divider>
      <v-card elevation = 5>

      <v-toolbar id="grafico">
          <v-toolbar-title id="titulo-card" > Popularidad en el tiempo géneros más comentados</v-toolbar-title>
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
            text: '',
            align: 'left'
          },
          dataLabels: {
            enabled: true,
          },
          xaxis:{
            title: {
              text: 'Géneros musicales'
            }
          },
          yaxis:{
            title: {
              text: 'Nº de comentarios'
            }
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
        }
      ]
    };
  },
  methods: {
    ...mapMutations(['mostrarLoading','ocultarLoading']),

    async actualizarGeneros(){
      try{
      let listasGeneros = []
      this.mostrarLoading({titulo:'Accediendo a la información',color:'blue'})
      //Obteniendo datos de generos más populares
      await axios.get('http://localhost:8080/genres/popularGenres')
      .then(res=>{
        listasGeneros = res.data.map(item=>item.genero)
      })
      //Obteniendo datos de géneros según fechas
      await axios.get('http://localhost:8080/genres/getbydate')
      .then(res=>{
        let fechas = []
        let listasTotales1 = []
        let listasTotales2 = []
        let listasTotales3 = []
        let listasTotales4 = []
        let listasTotales5 = []

        res.data.forEach(element => {
           fechas.push(element[0].fecha)
          element.forEach(item => {
          
          if(item.genero == listasGeneros[0]){
            listasTotales1.push(item.total)
          }
          if(item.genero == listasGeneros[1]){
            listasTotales2.push(item.total)
          }
          if(item.genero == listasGeneros[2]){
            listasTotales3.push(item.total)
          }
          if(item.genero == listasGeneros[3]){
            listasTotales4.push(item.total)
          }
          if(item.genero == listasGeneros[4]){
            listasTotales5.push(item.total)
          }
          
          });
    

        });
    
        this.series = [{
          name: listasGeneros[0],
          data: listasTotales1
        },
        {
          name: listasGeneros[1],
          data: listasTotales2
        },
        {
          name: listasGeneros[2],
          data: listasTotales3
        },
         {
          name: listasGeneros[3],
          data: listasTotales4
        },
         {
          name: listasGeneros[4],
          data: listasTotales5
        },
        
        ],
      
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
