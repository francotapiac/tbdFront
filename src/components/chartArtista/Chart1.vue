<template>
  <div class="example">
      <v-divider></v-divider>
      <v-card elevation = 5>
      <h1 id="tituloGrafico" class ="font-weight-light">Gráfico</h1>
      <p>
        <v-flex xs12 sm6 d-flex>
        <v-select
          :items="items"
          v-model="selectedItem"
          label="Paletas"
          @change="updateTheme"
        ></v-select>
      </v-flex>
      <!--  <select @change="updateTheme">
          <option value="palette1">palette1</option>
          <option value="palette2">palette2</option>
          <option value="palette3">palette3</option>
          <option value="palette4">palette4</option>
          <option value="palette5">palette5</option>
          <option value="palette6">palette6</option>
          <option value="palette7">palette7</option>
          <option value="palette8">palette8</option>
          <option value="palette9">palette9</option>
          <option value="palette10">palette10</option>
        </select>-->
      </p>
      
      <apexcharts 
        width="100%"
        height="350"
        type="bar"
        :options="chartOptions"
        :series="series"
      ></apexcharts>
  </v-card>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "Chart",
  components: {
    apexcharts: VueApexCharts
  },
  data: function() {
    return {
      selectedItem: undefined,
      items: ['palette1', 'palette2', 'palette3', 'palette4','palette5','palette6','palette7','palette8','palette9'],
      chartOptions: {
        chart: {
          id: "basic-bar",
          animations: {
            speed: 200
          }
        },
        
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            distributed: true
          }
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 30, 49]
        }
      ]
    };
  },
  methods: {
    updateTheme(e) {
      this.chartOptions = {
        theme: {
          palette: this.selectedItem
        }
      };
    }
  }
};
</script>

<style scope>

#tituloGrafico{
  color:#613DC1 ;
}

</style>
