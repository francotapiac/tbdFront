<template>
  <div class="example">
    <v-breadcrumbs id="indice" :items="items" divider=">"></v-breadcrumbs>
      <v-divider></v-divider>
      <v-card elevation = 5>
       <v-toolbar id="grafico">
          <v-toolbar-title id="titulo-card" class ="font-weight-light"> Gráfico popularidad en el tiempo de artistas</v-toolbar-title>
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
import axios from 'axios'

export default {
  name: "Chart",
  components: {
    apexcharts: VueApexCharts
  },
  data: function() {
    return {
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
          title:{
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
    async actualizarGeneros(){
      await axios.get('http://localhost:3000/generos')
      .then(res=>{
      console.log(res);
      this.chartOptions = {
        xaxis: {
          categories: res.data.map(item => item.nombre)
        }
      }
      })
    },

    async actualizarComentarios(){
      let cantidadComentarios  = []
      await axios.get('http://localhost:3000/comentarios_generos')
      .then((res)=>{
        this.series = [{
          data: res.data.map(item => item.cantidad)
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
#grafico{  
  background-image: linear-gradient(90deg, #5BC0BE,#6FFFE9) !important;
}
</style>
