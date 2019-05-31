<template>
  <v-app>
    <Toolbar/>
    <v-content>
        <router-view/>
        <Footer/>
    </v-content>
  </v-app>
</template>


<script>
import Toolbar  from '@/components/core/Toolbar'
import Footer  from '@/components/core/Footer'
export default {
  name: 'App',
  components: {Toolbar,Footer},
  data () {
    return {
      //
    }
  }
}
</script>
