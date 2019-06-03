<template>
  <v-layout row wrap>
    <v-flex xs12 sm12 offset-sm>
      <v-card pb-5 >
        Ranking de los artistas más comentados
        <v-divider></v-divider>
        <v-list two-line>
          <template v-for="(item, index) in items">
             <!--Si es un header-->    
            <v-subheader v-if="item.header" :key="item.header">
              {{ item.header }}
                </v-subheader>
            <!--Si es un divider-->    
            <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>
             <!--Si es un titulo-->    
            <v-list-tile v-else :key="item.title" avatar @click="">
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { header: 'Top 10' },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Artista 1',
            subtitle: "<span class='text--primary'>800 comentarios"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Artista 2',
            subtitle: "<span class='text--primary'>800 comentarios"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Artista 3',
            subtitle: "<span class='text--primary'>800 comentarios"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Artista 4',
            subtitle: "<span class='text--primary'>800 comentarios"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Artista 5',
            subtitle: "<span class='text--primary'>800 comentarios"
          },

          
         
        ]
      }
    }
  }
</script>