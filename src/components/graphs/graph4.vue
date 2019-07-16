<template>
   <v-card elevation = 5>
      <v-toolbar id="grafico">
          <v-toolbar-title id="titulo-card">Artistas por género</v-toolbar-title>
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
      networkSeries.dataFields.value = "value";
      networkSeries.dataFields.children = "children";

      networkSeries.nodes.template.label.text = "{name}"
      networkSeries.fontSize = 12;
      networkSeries.linkWithStrength = 0;

      var nodeTemplate = networkSeries.nodes.template;
      nodeTemplate.tooltipText = "Nombre: {name} \n Comentarios: {value}";
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
      ...mapMutations(['mostrarLoading','ocultarLoading','cambiarResumenArtistaGenero']),
      async actualizarGrafo(){
         try{
            
            this.mostrarLoading({titulo:'Accediendo a la información',color:'blue'})
            this.cambiarResumenArtistaGenero({totalComentariosGenero:0,totalComentariosArtista:0,generoPopu:'',artistaPopu:'',
               comentarioGeneroPopu:0,comentarioArtistaPopu:0})
            
            let jsonArtistas = []
            let jsonGeneros = []
            await axios.get('http://localhost:8080/artists/getArtistStadistic')
                .then(res=>{
                jsonArtistas = res.data
            })
            await axios.get('http://localhost:8080/genres/getGenreStadistic')
                .then(res=>{
                jsonGeneros = res.data
            })


            await axios.get('http://localhost:8080/neo4j/artistasGenero')
            .then(res=>{    
               
                let comentariosTotalGenero = 0
                let comentariosTotalArtista = 0
                let comentariosArtistaPopu = 0
                let comentariosGeneroPopu = 0
                let artistaComentado = ''
                let GeneroComentado = ''

                for(var x = 0; x < jsonArtistas.length; x++){
                    if(jsonArtistas[x].total > comentariosArtistaPopu){
                        artistaComentado = jsonArtistas[x].artist
                        comentariosArtistaPopu = jsonArtistas[x].total
                    }
                    comentariosTotalArtista = comentariosTotalArtista +jsonArtistas[x].total
                }

                for(var y = 0; y < jsonGeneros.length; y++){
                    if(jsonGeneros[y].total > comentariosGeneroPopu){
                        GeneroComentado = jsonGeneros[y].genre
                        comentariosGeneroPopu = jsonGeneros[y].total
                    }
                    comentariosTotalGenero = comentariosTotalGenero + jsonGeneros[y].total
                }

               //Modificando radio de generos según cantidad de comentarios totales
               for(var i = 0; i < res.data.length; i++){
                   for(var j = 0; j < jsonGeneros.length; j++){
                       if(res.data[i].name == jsonGeneros[j].genre){
                           res.data[i].value = jsonGeneros[j].total
                       }
                   }

                    //Modificando radio de artistas según cantidad de comentarios totales
                    for(var k= 0; k < res.data[i].children.length; k++){
                        for(var l= 0; l < jsonArtistas.length; l++){
                           if(res.data[i].children[k].name == jsonArtistas[l].artist){
                                res.data[i].children[k].value = jsonArtistas[l].total
                           } 
                        }
                   }
                   
               }

               this.cambiarResumenArtistaGenero({totalComentariosGenero:comentariosTotalGenero,totalComentariosArtista:comentariosTotalArtista,
               generoPopu:GeneroComentado,artistaPopu:artistaComentado,
               comentarioGeneroPopu:comentariosGeneroPopu,comentarioArtistaPopu: comentariosArtistaPopu})
              

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
