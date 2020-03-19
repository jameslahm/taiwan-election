<template>
  <div id="map-controller">
    <div class="container" style="height: 100%;">
      <div style="position: relative; height: 100%;">
        <svg class="center" id="map" height="50%">
          <image
            v-if="year"
            :xlink:href="'img/maps/' + year + '.svg'"
            height="100%"
          />
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "map-controller",
  data: function() {
    return {
      /**
       * @type {Number} the selected year
       */
      year: null
    };
  },
  methods: {
    /**
     * Show the map according to the year given.
     * @param {number} year
     */
    showMapByYear(year) {
      this.year = year;
    }
  }
};
</script>

<style scoped>
.center {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: auto;
}

.rect {
  height: 33%;
  width: 100%;
}

#map-controller {
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
  vertical-align: middle;
}
</style>
