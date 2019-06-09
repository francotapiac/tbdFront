<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade"
      transition="fade"
    ></v-carousel-item>
  </v-carousel>
</template>

<style lang="stylus">
  #example-custom-transition
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0
</style>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://hipertextual.com/archivo/wp-content/uploads/2013/04/Twitter-Music2.jpg'
           
          },
          {
            src: 'https://elrescatemusical.com/wp-content/uploads/2018/01/Los-mejores-metodos-para-descargar-musica-en-Android-3.jpg'
          },
          {
            src: 'https://promocionmusical.es/wp-content/uploads/2018/07/la-musica-mejora-la-vida-810x513.jpg'
          },
          {
             src: 'https://static.rfstat.com/bloggers_folders/user_2540376/my_media/aab8b888-e24f-43af-83db-cc4cd88de9b3.jpeg'
          }
        ]
      }
    }
  }
</script>
content_copy
