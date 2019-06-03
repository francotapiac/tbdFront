<template>
<div class="artistas">
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap pb-5>
      <v-flex xs12 md6>
        <Chart1/>
      </v-flex>
      <v-flex xs12 md6>
        <DatePicker/>
      </v-flex>
    </v-layout>
     <v-layout row wrap pb-5>
      <v-flex xs12 md6>
        <Chart1/>
      </v-flex>
      <v-flex xs12 md6>
        <DatePicker/>
      </v-flex>
    </v-layout>
  </v-container>
</div>
      
</template>


<script>
import Chart1  from '@/components/chartArtista/Chart1'
import DatePicker  from '@/components/panels/DatePicker'

export default {
  name: 'Artistas',
  components: {
    Chart1,DatePicker
  },
  data () {
    return {
      //
    }
  }
}
</script>
