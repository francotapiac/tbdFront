<template>
  <v-footer dark absolute="true">
    
    <v-card class="flex" flat tile>
      <v-card-title id="bottom" class="teal">
        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions id="bottom" class="grey darken-3 justify-center">
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
  background-image: linear-gradient(90deg, #0B132B, #6FFFE9) !important;
}

</style>