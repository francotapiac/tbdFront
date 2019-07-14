<template>
   <v-card elevation = 5>
      <v-toolbar id="grafico">
          <v-toolbar-title id="titulo-card">Usuarios populares por artistas</v-toolbar-title>
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
      networkSeries.dataFields.children = "children";
      networkSeries.dataFields.comentarios = "value";

      networkSeries.nodes.template.label.text = "{name}"
      networkSeries.fontSize = 12;
      networkSeries.linkWithStrength = 0;
      

      var nodeTemplate = networkSeries.nodes.template;
      nodeTemplate.tooltipText = "Nombre: {name} \n Comentarios: {comentarios} \n Seguidores: {value}";
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
            await axios.get('http://localhost:8080/neo4j/usuarioArtista')
            .then(res=>{
            
               //Se crea nuevo atributo para guardar numero de seguidores de forma homogenea
               //debido a que se borran datos cuando se conectan nodos repetidos
               for(var z = 0; z < res.data.length; z++){
                  let seguidores = 0
                  for(var x = 0; x < res.data[z].children.length; x++){
                     seguidores = seguidores + res.data[z].children[x].followers
                  }
                  res.data[z].followers = seguidores
               }
              

                //Se recorre todo el json hasta la penultima posición
               for(var i= 0; i < res.data.length-1; i++){
                  let arregloChildrenActual = res.data[i].children 
                  //Para cada posición del json se recorre los arreglos de children
                  for(var j=0; j <arregloChildrenActual.length; j++){
                     let elementoChildrenActual = arregloChildrenActual[j]
                     //Para cada children se compara con los de las posición del json siguiente al actual
                     for(var k= i + 1; k < res.data.length; k++){
                        let arregloChildrenSiguiente = res.data[k].children
                        let followers = 0
                        //Para cada posición siguiente se recorre su children
                        for(var l=0; l<arregloChildrenSiguiente.length; l++){
                           let elementoChildrenSiguiente = arregloChildrenSiguiente[l]
                          
                           //Si el elemento del children actual con el siguiente tienen un nombre igual, 
                           // se borra el objeto en el siguiente y se entrega este elemento
                           //al linkWith de siguiente
                           if(elementoChildrenActual.name == elementoChildrenSiguiente.name){
                              res.data[k].children.splice(l,1)
                              res.data[k].linkWith.push(elementoChildrenActual.name)
                              
                           }
                        } 
                     }
                  }
                  
               }
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

