<template>
    <!-- <div class="mt-5 pt-5" style="height:10vh"></div> -->
    <Map></Map>
</template>

<script>
// @ is an alias to /src
import Map from '../components/Map'

export default {
  name: 'home',
  data() {
    return {}
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
