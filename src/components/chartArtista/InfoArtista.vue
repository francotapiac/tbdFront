<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade"
      transition="fade"
    >
    <div class="title">
      {{ item.title }}
    </div>
    <div class="subtitle">
     <h1>{{ item.subtitle }}</h1>
    </div>
    </v-carousel-item>
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

.title{
  position: absolute;
  bottom: 150px;
  left: 100px;
  font-size: 60px !important;
  color: #6FFFE9;
}
.subtitle h1 {
  position: absolute;
  bottom: 105px;
  left: 100px;
  color: #6FFFE9;
}
</style>

<script>
  export default {
    data () {
      return {
        items: [
              {
            src: 'http://factmag-images.s3.amazonaws.com/wp-content/uploads/2013/04/twitter_music.png',
            title: 'Artistas más comentados',
            subtitle: 'Encuentra cuales son los artistas de los que habla la gente.'
          },
          {
            src: 'https://www.youredm.com/wp-content/uploads/2018/09/marshmello-gucci-ultra-taiwan-2018-rukes.jpg',
            title: 'Análisis de sentimientos',
            subtitle: 'Descubre lo que se piensa de cada artista.'
           
          },
        
          {
            src: 'https://www.billboard.com/files/styles/article_main_image/public/stylus/1101289-best-new-artist-sliver-kesha-bruno-nicki-taio-617-409.jpg',
            title: 'Popularidad en el tiempo',
            subtitle: 'Observa la popularidad de un artista.'
          },
          {
            src: 'https://media.pitchfork.com/photos/5bc0a37362826d2cdbfaad28/2:1/w_790/Coldplay.jpg',
            title: 'Artistas más comentados',
            subtitle: 'Encuentra cuales son los Artistas de los que habla la gente.'
          }
        ]
      }
    }
  }
</script>
content_copy
