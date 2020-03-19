<template>
  <v-app>
    <v-app-bar app dark shrink-on-scroll prominent>
      <v-container fluid class="pt-1" style="overflow:hidden;max-height:100%">
        <v-row>
          <div class="d-flex align-center">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2 rounded"
              contain
              src="https://picsum.photos/1080/1080?random"
              transition="scale-transition"
              width="35"
              round
            />
            <span class="headline">TaiWan Election</span>
          </div>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-row>
        <p class="blockquote body-1 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
          maiores modi quidem veniam, expedita quis laboriosam, ullam facere
          adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo
          numquam fuga ab at.
        </p>
      </v-container>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>2014</v-tab>
          <v-tab>2015</v-tab>
          <v-tab>2016</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app> </v-footer>
  </v-app>
</template>
<style lang="scss">
.rounded {
  border-radius: 25%;
}
</style>
