<template>

    <nav>
        <!-- Barra superior--> 
        <v-toolbar id="test"  dark color="green" app>
            <v-toolbar-side-icon @click="drawer =! drawer"></v-toolbar-side-icon>

            <v-toolbar-title class="text-uppercase white--text">
                <span class ="font-weight-light">Música</span>
                </v-toolbar-title>

            <v-spacer></v-spacer>
            <!--
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
            -->
            
        </v-toolbar>

        <!-- Barra lateral izquierda --> 
        <v-navigation-drawer app v-model="drawer" class="">
            <!--
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
-->

             <v-list>
                <v-list-tile v-for="link in links" :key="link.text" :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">{{link.icon}}</v-icon> 
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text" >{{link.text}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
          <v-list-group v-for="item in items" :key="item.title">
          

            <template v-slot:activator>
                    
              <v-list-tile :to="item.route">
                  <v-list-tile-action>
                <v-icon class="white--text">{{item.icon}}</v-icon> 
                  </v-list-tile-action>
                <v-list-tile-content>
                   <v-list-tile-title class="white--text" >{{item.title}}</v-list-tile-title>
                </v-list-tile-content>
                             </v-list-tile>

            </template>

            <v-list-tile id="subitem" v-for="subItem in item.items" :key="subItem.title" :to="subItem.route">
              <v-list-tile-action>
              </v-list-tile-action>
                <v-list-sub-title class= "white--text">{{ subItem.title }}</v-list-sub-title>
               <!--  <v-icon class="white--text">{{subItem.icon}}</v-icon>  -->
           
            </v-list-tile>
            
          </v-list-group>
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
                { icon: 'library_music', text: 'Inicio', route: '/'}
            ],
            items: [
          {
            title: 'Géneros',
            icon: 'music_video',
            route: '/generos',
            items: [
              { title: 'Información géneros', route: '/generos', icon: 'list'},
              { title: 'Géneros más comentados', route:'/generosPopulares', icon:'equalizer' },
              { title:'Análisis de sentimientos', route: '/generosAnalisisSentimientos', icon:'equalizer'},
              { title: 'Popularidad en el tiempo', route: '/generosEnElTiempo', icon: 'equalizer'}
            ]
          },
        {
            title: 'Artistas',
            icon: 'group',
            route: '/artistas',
            items:[
                { title: 'Información artistas', route: '/artistas', icon: 'list'},
                { title: 'Artistas más comentados', route: '/artistasPopulares', icon:'equalizer'},
                { title: 'Análisis de sentimientos', route: '/artistasAnalisisSentimientos', icon:'equalizer'},
                { title: 'Popularidad en el tiempo', route: '/artistasEnElTiempo', icon: 'equalizer'}
            ]

        },
        {
            title: 'Grafos',
            icon: 'filter_tilt_shift',
            route: '/grafos',
            items: [
                {title: 'Usuarios populares por género', route: '/grafo1'},
                {title: 'Usuarios populares por artista', route: '/grafo2'},
                {title: 'Usuarios populares género más popular', route: '/grafo3'},
                {title: 'Artistas y géneros', route: '/grafo4'}

            ]
        }
        ]
      }
        
        }
    } 

</script>

<style scope>

#test{
    background-image: linear-gradient(90deg, #0B132B, #6FFFE9);
}
.v-navigation-drawer{
    background-image: linear-gradient(90deg, #1C2541);
}

#subitem{
    background-color: rgb(12, 19, 51) !important;
}
</style>
