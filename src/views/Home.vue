<template>
<div>
  <!-- <div class="mt-5 pt-5" style="height:10vh"></div> -->
  <MapController></MapController>
  <people-controller></people-controller>
</div>
</template>

<script>
// @ is an alias to /src
import MapController from '../components/MapController'
import PeopleController from '../components/PersonController/PersonController'

export default {
  name: 'home',
  components: { 
    MapController ,
    PeopleController
  },
  methods: {
    clicked() {
      console.log('Clicked!')
    }
  }
}
</script>
