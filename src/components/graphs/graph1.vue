<template>
   <v-card elevation = 5>
      <v-toolbar id="grafico">
          <v-toolbar-title id="titulo-card">Usuarios populares por Género</v-toolbar-title>
      </v-toolbar>
      <div id="chartdiv"></div>
   </v-card>
</template>


<!-- Styles -->
<style>
#chartdiv {
  width: 100%;
  height:650px !important;
}
</style>

<!-- Chart code -->
<script>
import axios from 'axios'
import store from '@/store';
import {mapState, mapMutations} from "vuex";
let networkSeries
export default {
   
   
   async mounted() {
      
      am4core.ready(function() {
      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);

      networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
      networkSeries.dataFields.linkWith = "linkWith";
      networkSeries.dataFields.name = "name";
      networkSeries.dataFields.id = "name";
      networkSeries.dataFields.value = "followers";
      networkSeries.dataFields.comentarios = "value";
      networkSeries.dataFields.children = "children";

      networkSeries.nodes.template.label.text = "{name}"
      networkSeries.fontSize = 12;
      networkSeries.linkWithStrength = 0;

      var nodeTemplate = networkSeries.nodes.template;
      nodeTemplate.tooltipText = "Nombre: {name} \n Comentarios: {comentarios} \n Seguidores: {followers}";
      nodeTemplate.fillOpacity = 1;
      nodeTemplate.label.hideOversized = true;
      nodeTemplate.label.truncate = true;

      var linkTemplate = networkSeries.links.template;
      linkTemplate.strokeWidth = 3;
      var linkHoverState = linkTemplate.states.create("hover");
      linkHoverState.properties.strokeOpacity = 1;
      linkHoverState.properties.strokeWidth = 2;

      nodeTemplate.events.on("over", function (event) {
         var dataItem = event.target.dataItem;
         dataItem.childLinks.each(function (link) {
            link.isHover = true;
         })
      })

      nodeTemplate.events.on("out", function (event) {
         var dataItem = event.target.dataItem;
         dataItem.childLinks.each(function (link) {
            link.isHover = false;
         })
      })

      networkSeries.data = []
  
      }) // end am4core.ready()
   }, //end mounted

   methods: {
      ...mapMutations(['mostrarLoading','ocultarLoading']),
      async actualizarGrafo(){
         try{
            this.mostrarLoading({titulo:'Accediendo a la información',color:'blue'})
            await axios.get('http://localhost:8080/neo4j/usuarioGenero')
            .then(res=>{
               console.log(this.networkSeries)
               networkSeries.data  = res.data
            })
         }catch{
            console.log(error)

         }
         finally{
            this.ocultarLoading()
         }
      }

   },

    created(){
    this.actualizarGrafo()

    
  }

} //end export
</script>
