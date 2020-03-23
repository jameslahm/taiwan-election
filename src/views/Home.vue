<template>
  <!-- <div class="mt-5 pt-5" style="height:10vh"></div> -->
  <div>
    <Map></Map>
    <v-container fluid
      ><v-row class="justify-space-between mx-auto" style="height:5vh">
        <v-subheader>2014</v-subheader>
        <v-subheader>2020</v-subheader></v-row
      >
      <v-row class="justify-center mx-auto" style="width:85vw"
        ><v-slider
          class="text-center"
          v-model="year"
          thumb-label="always"
          min="2014"
          max="2020"
          :thumb-size="60"
          thumb-color="success"
        >
          <template v-slot:thumb-label="{ value }">
            <p class="title mb-0">{{ value }}</p></template
          ></v-slider
        ></v-row
      >
      <p
        class="text-left white--text primary mx-auto hello"
        style="width:85vw;margin-top:-3vh;word-wrap:break-word"
      >
        aslcnjdabchdlsacnsjdlkbcjsdhlkjcvshfbvfdvslcnjdabchdlsacnsjdlkbcjsdhlkjcvshfblcnjdabchdlsacnsjdlkbcjsdhlkjcvshfbvfdvslcnjdabchdlsacnsjdlkbcjsdhlkjcvshfb
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
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent rgb(58, 135, 170) transparent;
  left: -9px;
  position: relative;
  top: -3px;
}
</style>