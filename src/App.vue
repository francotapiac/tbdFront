<template>
<div id="app">
  <v-app>
    <Toolbar/>
    <v-content>
        <router-view/>
        <v-container>
        <!--dialogo dinámico-->
        <Dialogs/>
    </v-container>
    <Footer/>
    </v-content> 
  </v-app>
</div>
</template>


<script>
import Toolbar  from '@/components/core/Toolbar'
import Footer  from '@/components/core/Footer'
import Dialogs from '@/components/core/Dialogs'


export default {
  name: 'App',
  components: {Toolbar,Footer,Dialogs},
  data () {
    return {
      //
    }
  },
  
}
</script>

<style>
  

</style>

