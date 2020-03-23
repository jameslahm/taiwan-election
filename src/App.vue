<template>
  <v-app>
    <v-app-bar dark app>
      <!-- <v-container fluid class="pt-1" style="overflow:hidden;max-height:100%">
        <v-row> -->
      <div
        class="d-flex align-center d-flex-shrink-0"
        @click="goHome"
        style="cursor:pointer"
      >
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2 rounded"
          contain
          src="https://picsum.photos/1080/1080?random"
          transition="scale-transition"
          width="30"
          round
        />
        <!-- <span class="body-1">TaiWan Election</span> -->
      </div>

      <v-spacer></v-spacer>

      <Search ref="search"></Search>

      <!-- </v-row> -->

      <!-- </v-container> -->
      <!-- <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>2014</v-tab>
          <v-tab>2015</v-tab>
          <v-tab>2016</v-tab>
        </v-tabs>
        <v-icon v-if="!isDropDown" @click="isDropDown = !isDropDown" large
          >mdi-chevron-down</v-icon
        >
        <v-icon v-else @click="isDropDown = !isDropDown" large
          >mdi-chevron-up</v-icon
        >
      </template> -->
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
import Search from './components/Search'
export default {
  data() {
    return {
      isDropDown: false
    }
  },
  computed:{
  },
  components:{
    Search
  },
  methods: {
    goHome(){
      this.$router.push('/')
    }
  },
  created() {
    this.$vuetify.theme.dark = true
  }
}
</script>

<style lang="scss">
.rounded {
  border-radius: 25%;
}
</style>
