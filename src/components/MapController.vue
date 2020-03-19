<template>
  <svg height="100%" width=100%>
    <image v-if="year" href="../assets/2018.svg" width="100%" height="100%" />
    <rect
      class="rect"
      opacity="0"
      y="0%"
      @click="$emit('select', '台北')"
    ></rect>
    <rect
      class="rect"
      opacity="0"
      y="33%"
      @click="$emit('select', '台中')"
    ></rect>
    <rect
      class="rect"
      opacity="0"
      y="66%"
      @click="$emit('select', '台南')"
    ></rect>
  </svg>
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
