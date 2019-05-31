<template>
    
        <v-layout row wrap  align-center justify-center fill-height>
            <v-flex v-for="link in links" :key="link.icon" :to="link.route" xs12 sm4>
                <v-card  elevation = 5 > 
                    <!--Imagen-->
                    <v-hover>
                       
                        <v-card slot-scope="{ hover }" class="mx-auto" color="grey lighten-4" max-width="600" >
                            <v-img v-bind:src="link.picture" aspect-ratio="8" >
                                <v-expand-transition>
                                    <div v-if="hover" class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 black--text" style="height: 100%;font-size:25px !important;">
                                    {{link.textPicture}}
                                    </div>
                                </v-expand-transition>
                               
                            </v-img>
                        </v-card>
                    </v-hover>
                    <!--Sección titulo-->
                     <v-card-title>
                        <h2 class="text-md-center black--text">{{link.title}}</h2>
                    </v-card-title>

                    <!--Sección texto-->
                    <v-card-text> {{link.text}}</v-card-text>

                    <!--Sección acciones-->
                    <v-card-actions >
                        
                        <v-btn color="info" flat>Entrar</v-btn>
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
                {   icon: 'view_list', 
                    title: 'Géneros musicales',
                    text:'19 géneros',
                    route: '/generos', 
                    picture:"https://png.pngtree.com/thumb_back/fw800/background/20190220/ourmid/pngtree-purple-concise-background-hd-image_5494.jpg",
                    textPicture:'Top Géneros',
                    },
                   

                {   icon: 'music_note', 
                    title: 'Artistas', 
                    text:'19 géneros',
                    route: '/artistas', 
                    picture:"https://png.pngtree.com/thumb_back/fw800/background/20190220/ourmid/pngtree-purple-concise-background-hd-image_5494.jpg",
                    textPicture:'Top Artistas',
                    },

                {   icon: 'person', 
                    title: 'Grafos', 
                    text:'19 géneros',
                    route: '/grafos', 
                    picture:"https://png.pngtree.com/thumb_back/fw800/background/20190220/ourmid/pngtree-purple-concise-background-hd-image_5494.jpg",
                    textPicture:'Artista más valorado',
                    },
                    
            ]
        }
    } 
}
</script>


<style >


</style>

