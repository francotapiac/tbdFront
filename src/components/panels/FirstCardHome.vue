<template>
    
        <v-layout row wrap  align-center justify-center fill-height>
            <v-flex v-for="link in links" :key="link.icon" :to="link.route" xs12 sm4>
                <v-card class="rounded-card" elevation = 5 > 
                 
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
                    picture:"https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
                    textPicture:'Top Géneros',
                    },
                   

                {   icon: 'music_note', 
                    title: 'Artistas', 
                    text:'19 géneros',
                    route: '/artistas', 
                    picture:"https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
                    textPicture:'Top Artistas',
                    },

                {   icon: 'person', 
                    title: 'Grafos', 
                    text:'19 géneros',
                    route: '/grafos', 
                    picture:"https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
                    textPicture:'Top Artistas',
                    },
                    
            ]
        }
    } 
}
</script>


<style >

.rounded-card{
    border-radius:8px;
}
</style>

