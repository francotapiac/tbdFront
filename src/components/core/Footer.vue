<template>
  <v-footer dark>
    <v-card class="flex" flat tile>
      <v-card-title id="bottom" class="teal">
        <strong class="subheading">Encuentranos en en las siguientes plataformas.!</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions id="bottom" class="grey darken-3 justify-center">
        &copy;2019 — <strong>Vuetify</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    })
  }
</script>

<style scope>

#bottom{
  background-image: linear-gradient(90deg, #613DC1, #9395F2) !important;
}

</style>