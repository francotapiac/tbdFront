<template>
  <v-layout row>
    <v-flex xs12 sm12 offset-sm>
      <v-card >

        <v-toolbar color="cyan" dark>
          <v-toolbar-title>Artistas más comentados</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar
              @click=""
            >
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
          { header: 'Top 5' },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Artista 1',
            subtitle: "<span class='text--primary'>800 comentarios"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Artista 1',
            subtitle: "<span class='text--primary'>800 comentarios"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Artista 1',
            subtitle: "<span class='text--primary'>800 comentarios"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Artista 1',
            subtitle: "<span class='text--primary'>800 comentarios"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Artista 1',
            subtitle: "<span class='text--primary'>800 comentarios"
          },
         
        ]
      }
    }
  }
</script>