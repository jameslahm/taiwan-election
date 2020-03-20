<template>
  <v-container style="width:100%;height:100vh">
    <v-img
      ref="map"
      contain
      src="../assets/2018.svg"
      width="100%"
      height="100%"
      @click="selectArea"
    />
  </v-container>
</template>

<script>
export default {
  name: 'map-controller',
  data: function() {
    return {
      /**
       * @type {Number} the selected year
       */
      year: 2018
    }
  },
  methods: {
    showPerson(n){
      console.log(n)
      
    },
    selectArea(event) {
      console.log(event.offsetX / this.$refs.map.$el.offsetWidth)
      if (
        event.offsetX / this.$refs.map.$el.offsetWidth > 0.4 &&
        event.offsetX / this.$refs.map.$el.offsetWidth < 0.7
      ) {
        if (event.offsetY / this.$refs.map.$el.offsetHeight < 0.33)
          this.showPerson(0)
        else if (event.offsetY / this.$refs.map.$el.offsetHeight < 0.66)
          this.showPerson(1)
        else this.showPerson(2)
      }
    },
    /**
     * Show the map according to the year given.
     * @param {number} year
     */
    showMapByYear(year) {
      this.year = year
    }
  }
}
</script>

<style>
.rect {
  margin-left: auto;
  margin-right: auto;
}
</style>
