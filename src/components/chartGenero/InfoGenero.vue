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
            src: 'https://hipertextual.com/archivo/wp-content/uploads/2013/04/Twitter-Music2.jpg',
            title: 'Géneros más comentados',
            subtitle: 'Encuentra cuales son los géneros de los que habla la gente.'
          },
          {
            src: 'https://elrescatemusical.com/wp-content/uploads/2018/01/Los-mejores-metodos-para-descargar-musica-en-Android-3.jpg',
            title: 'Análisis de sentimientos',
            subtitle: 'Descubre lo que la gente piensa sobre cada género.'
          },
          {
            src: 'https://promocionmusical.es/wp-content/uploads/2018/07/la-musica-mejora-la-vida-810x513.jpg',
            title: 'Popularidad en el tiempo',
            subtitle: 'Observa como cambia la popularidad de un género.'
          },
          {
             src: 'https://static.rfstat.com/bloggers_folders/user_2540376/my_media/aab8b888-e24f-43af-83db-cc4cd88de9b3.jpeg',
             title: 'hola4',
             subtitle: 'holiwis'
          }
        ]
      }
    }
  }
</script>
content_copy
