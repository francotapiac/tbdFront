<template>

    <v-layout row wrap >
        <v-flex v-for="link in links" :key="link.icon" :to="link.route" xs12 d-flex>
         
            <v-card class="mx-auto" color="#26c6da" dark max-width="500"> 
                <!--Imagen-->
                <!--<v-hover>
                    <v-card slot-scope="{ hover }" class="mx-auto" color="grey lighten-4" max-width="600" >
                        <v-img v-bind:src="link.picture" aspect-ratio="8" >
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 black--text" style="height: 100%;font-size:25px !important;">
                                {{link.textPicture}}
                                </div>
                            </v-expand-transition>
                            
                        </v-img>
                    </v-card>
                </v-hover>-->
                <!--Sección titulo-->
                <v-card-title>
                    <v-icon large left>mdi-twitter</v-icon>
                    <span class="title font-weight-light">Twitter</span>
                </v-card-title>

                <!--Sección texto-->
                <v-card-text class="headline font-weight-bold">
                    "{{link.text}}"
                </v-card-text>
                <v-card-text> </v-card-text>

                <!--Sección acciones-->
                <v-card-actions>
                    <v-list-tile class="grow">
                        <v-list-tile-avatar color="grey darken-3">
                            <v-img 
                            class="elevation-6"
                            v-bind:src="link.picture"
                            ></v-img>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>{{link.usuario}}</v-list-tile-title>
                        </v-list-tile-content>

                        <v-layout align-center justify-end>
                            <v-icon class="mr-1">mdi-heart</v-icon>
                            <span class="subheading mr-2">256</span>
                            <span class="mr-1">·</span>
                            <v-icon class="mr-1">mdi-share-variant</v-icon>
                            <span class="subheading">45</span>
                        </v-layout>
                    </v-list-tile>
                </v-card-actions>
            </v-card>
          
        </v-flex>
    </v-layout>
</template>


<script>
export default {
    data(){
        return {
            links: [
                {   title: 'Comentario género musical',
                    usuario: 'juanito perez',
                    icon: 'view_list', 
                    text:'19 géneros',
                    route: '/generos', 
                    picture:"https://png.pngtree.com/thumb_back/fw800/background/20190220/ourmid/pngtree-purple-concise-background-hd-image_5494.jpg",
                    textPicture:'Top Géneros',
                    },
                   

                {   title: 'Comentario artista',
                    usuario: 'juanito perez',
                    icon: 'music_note', 
                    text:'19 géneros',
                    route: '/artistas', 
                    picture:"https://png.pngtree.com/thumb_back/fw800/background/20190220/ourmid/pngtree-purple-concise-background-hd-image_5494.jpg",
                    textPicture:'Top Artistas',
                    },

           
                    
            ]
        }
    } 
}
</script>


<style >


</style>

