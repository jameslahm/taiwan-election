<template>
<div>

  <v-container fluid style="height:80vh" class="mt-5">
  <MapController></MapController>
  </v-container>
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
