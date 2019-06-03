<template>
        <v-layout row wrap  align-center justify-center fill-height>
            <v-flex v-for="link in links" :key="link.title" :to="link.route" xs12 sm4>
                <v-card class="rounded-card" elevation = 5> 
                    <v-list two-line>

                        <!--Sección titulo-->
                        <div class="text-md-center ">{{link.title}}</div>
                        <v-divider></v-divider>
                        <v-layout>
                            <!--Sección imagen-->
                            <v-flex xs5>
                                <v-img v-bind:src="link.picture" height="110px" contain></v-img>
                            </v-flex>

                            <v-flex xs7>
                                <!--Sección texto inicial-->
                                <v-card-title primary-title>
                                    <div>
                                        <div>{{link.text1}}</div>
                                        <div class="display-1 font-weight-black">{{link.number}}</div>
                                        <div>{{link.text2}}</div>
                                        
                                    </div>
                                </v-card-title>
                                <!--Sección texto-->
                                <v-card-text> </v-card-text>
                            </v-flex>
                        </v-layout>

                        <v-divider></v-divider>
                        <!--Sección acciones-->
                        <v-card-actions class="justify-center">
                            
                            <v-btn color="info" v-bind:to="link.route" >Ver más</v-btn>
                        </v-card-actions>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    
</template>


<script>
export default {
    data(){
        return {
            links: [
                {   title: 'Géneros musicales', 
                    text1: 'Puedes ver más de',
                    number: '100',
                    text2:'Géneros musicales',
                    route: '/generos', 
                    picture:"https://image.flaticon.com/icons/svg/1810/1810090.svg",
                    textPicture:'Top Géneros',
                    },
                   

                {   title: 'Artistas', 
                    text1: 'Tenemos más de', 
                    number: '100',
                    text2:'Artistas en nuestros análisis',
                    route: '/artistas', 
                    picture:"https://image.flaticon.com/icons/svg/1753/1753416.svg",
                    textPicture:'Top Artistas',
                    },

                {   title: 'Grafos', 
                    text1: 'Encontraras', 
                    number: '100',
                    text2:'Grafo resumen',
                    route: '/grafos', 
                    picture:"https://image.flaticon.com/icons/svg/1809/1809312.svg",
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

