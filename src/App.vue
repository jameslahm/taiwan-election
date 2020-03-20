<template>
  <v-app>
    <v-app-bar app dark>
      <!-- <v-container fluid class="pt-1" style="overflow:hidden;max-height:100%">
        <v-row> -->
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
      <!-- </v-row> -->

      <!-- </v-container> -->
      <template v-slot:extension>
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
      </template>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <p v-if="isDropDown" class="text-justify elevation-20 body-1">
          Lorem Ipsum，也称乱数假文或者哑元文本，
          是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
          Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
          Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus
          PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
        </p>
      </v-container>
      <router-view></router-view>
    </v-content>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isDropDown: false
    }
  },
  methods: {},
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
