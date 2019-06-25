<template>
  <div class="example">
    <v-breadcrumbs id="indice" :items="items" divider=">"></v-breadcrumbs>
      <v-divider></v-divider>
      <v-card elevation = 5>
      <v-toolbar id="grafico">
          <v-toolbar-title id="titulo-card"> Géneros más comentados </v-toolbar-title>
  
        </v-toolbar>
      
    
     <apexcharts  width="100%" height="350" type="bar" :options="chartOptions" :series="series"></apexcharts>
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
          text: 'Géneros más comentados',
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
          show: false,
          showForSingleSeries: true,
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
            text: 'Géneros musicales'
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
          palette: this.selectedItem
        }
      };
    }, 
    async actualizarGeneros(){
      try{
        this.mostrarLoading({titulo:'Accediendo a información',color:'blue'})
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
#grafico{  
  background-image: linear-gradient(90deg, #5BC0BE,#6FFFE9) !important;
}
#titulo-card{
  color:rgb(0, 0, 0) ;
}
</style>
