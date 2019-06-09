<template>

    <nav>
        <!-- Barra superior--> 
        <v-toolbar  dark color="green" app>
            <v-toolbar-side-icon @click="drawer =! drawer"></v-toolbar-side-icon>

            <v-toolbar-title class="text-uppercase white--text">
                <span class ="font-weight-light">Música</span>
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
          <v-list-group v-for="item in items" :key="item.title" >
          




            <template v-slot:activator>
                    
              <v-list-tile>
                  <v-list-tile-action>
                <v-icon class="white--text">{{item.icon}}</v-icon> 
                  </v-list-tile-action>
                <v-list-tile-content>
                   <v-list-tile-title class="white--text" >{{item.title}}</v-list-tile-title>
                </v-list-tile-content>
                             </v-list-tile>

            </template>

            <v-list-tile v-for="subItem in item.items" :key="subItem.title" :to="subItem.route">
              <v-list-tile-action>
                <v-icon class="white--text">{{subItem.icon}}</v-icon> 
              </v-list-tile-action>
                <v-list-sub-title class= "white-text">{{ subItem.title }}</v-list-sub-title>
           
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
                { icon: 'library_music', text: 'Dashboard', route: '/'}
            ],
            items: [
          {
            title: 'Géneros',
            icon: 'music_video',
            items: [
              { title: 'Info géneros', route: '/generos', icon: 'list'},
              { title: 'Gráfico1', route:'/artistas', icon:'equalizer' },
              {title:'Gráfico2', route: '/', icon:'equalizer'}
            ]
          },
        {
            title: 'Artistas',
            icon: 'group',
            items:[
                { title: 'Info artistas', route: '/artistas', icon: 'list'},
                { title: 'Gráfico 1', route: '/artistas', icon:'equalizer'},
                { title: 'Gráfico 2', route: '/artistas', icon:'equalizer'},


                
            ]

        }
        ]
      }
        
        }
    } 

</script>

<style scope>

.v-toolbar{
    background-image: linear-gradient(90deg, #0B132B, #6FFFE9);
}
.v-navigation-drawer{
    background-image: linear-gradient(90deg, #1C2541);

}

</style>
