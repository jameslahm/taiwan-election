<template>
<div>
  <!-- <div class="mt-5 pt-5" style="height:10vh"></div> -->
  <MapController></MapController>
</div>
</template>

<script>
// @ is an alias to /src
import MapController from '../components/MapController'

export default {
  name: 'home',
  components: { 
    MapController 
  },
  methods: {
    clicked() {
      console.log('Clicked!')
    }
  }
}
</script>
