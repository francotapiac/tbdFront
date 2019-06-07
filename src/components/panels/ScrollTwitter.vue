<template>
<v-layout
      id="scroll-target"
      style="max-height: 620px"
      class="scroll-y"
    >
      <v-layout
        v-scroll:#scroll-target="onScroll"
        column
        align-center
        justify-center
        style="height: 520px"
      >
      <v-flex d-flex xs10 sm4 md4>
          <a class="twitter-timeline" href="https://twitter.com/TwitterMusic/timelines/393773266801659904?ref_src=twsrc%5Etfw">Artistas en Twitter</a> 
       </v-flex>

      </v-layout>
    </v-layout>
    
</template>


<script>
  export default {
    data: () => ({
      offsetTop: 0,
    }),

    methods: {
      onScroll (e) {
        this.offsetTop = e.target.scrollTop
      },
    },
  }
</script>



