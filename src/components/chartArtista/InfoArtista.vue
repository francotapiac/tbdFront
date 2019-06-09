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
            src: 'http://factmag-images.s3.amazonaws.com/wp-content/uploads/2013/04/twitter_music.png'
          },
          {
            src: 'https://www.youredm.com/wp-content/uploads/2018/09/marshmello-gucci-ultra-taiwan-2018-rukes.jpg'
           
          },
        
          {
            src: 'https://www.billboard.com/files/styles/article_main_image/public/stylus/1101289-best-new-artist-sliver-kesha-bruno-nicki-taio-617-409.jpg'
          },
          {
             src: 'https://media.pitchfork.com/photos/5bc0a37362826d2cdbfaad28/2:1/w_790/Coldplay.jpg'
          }
        ]
      }
    }
  }
</script>
content_copy
