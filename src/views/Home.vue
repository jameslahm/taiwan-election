<template>
  <!-- <div class="mt-5 pt-5" style="height:10vh"></div> -->
  <div>
    <Map></Map>
    <v-container fluid
      >
      <!-- <v-row class="justify-space-between mx-auto" style="height:5vh">
        <v-subheader>2014</v-subheader>
        <v-subheader>2020</v-subheader></v-row> -->
      <v-row class="justify-center pt-5  mx-auto" style="width:75vw"
        ><v-slider
          class="text-center"
          thumb-label="always"
          min="2018"
          max="2020"
          :thumb-size="55"
          thumb-color="success"
          value="2019"
        >
          <template v-slot:thumb-label="{ value }">
            <p class="title mb-0">{{ value }}</p></template
          ></v-slider
        ></v-row
      >
      <p
        class="white--text primary mx-auto hello px-4 pt-2"
        style="width:80vw;word-wrap:break-word;margin-top:-0.7010rem"
      >
        哦我是我是哦我是哇的就爱上了暗淡撒旦看来你萨科三第六届立法的撒代码块记得那时空间
      </p></v-container
    >
  </div>
</template>

<script>
// @ is an alias to /src
import Map from '../components/Map'

export default {
  name: 'home',
  data() {
    return {
      show: true
    }
  },
  computed: {
    year() {
      return this.$store.state.year
    }
  },
  components: {
    Map
  },
  methods: {
    clicked() {
      console.log('Clicked!')
    }
  }
}
</script>

<style>
.v-slider__thumb-label-container::after{
  content: '';
  display: block;
  border-width: 15px;
  border-style: solid;
  border-color: transparent transparent #2196f3 transparent;
  left: -0.903rem;
  position: relative;
  top: -0.1875rem;
}
</style>