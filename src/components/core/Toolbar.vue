<template>
    <nav>

        <!-- Barra superior--> 
        <v-toolbar  dark color="green" app>
            <v-toolbar-side-icon @click="drawer =! drawer"></v-toolbar-side-icon>

            <v-toolbar-title class="text-uppercase white--text">
                <span class ="font-weight-light">Pantalón</span>
                </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
            <v-icon>search</v-icon>
            </v-btn>

            <v-btn icon>
            <v-icon>apps</v-icon>
            </v-btn>

            <v-btn icon>
            <v-icon>refresh</v-icon>
            </v-btn>

            <v-btn icon>
            <v-icon>more_vert</v-icon>
            </v-btn>
            
            
        </v-toolbar>

        <!-- Barra lateral izquierda --> 
        <v-navigation-drawer app v-model="drawer" class="purple lighten-2">
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">{{link.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>   

    </nav>
</template>

<script>
export default {
    data(){
        return {
            drawer:false,
            links: [
                { icon: 'dashboard', text: 'Dashboard', route: '/'},
                { icon: 'person', text: 'Perfil', route: '/usuario'},
            ]
        }
    } 
}
</script>

<style scope>

.v-toolbar{
    background-image: linear-gradient(90deg, #613DC1, #9395F2);
}
</style>