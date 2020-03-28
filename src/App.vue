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
        <transition :name=transitionName>
				<router-view class="child"></router-view>
        </transition>
		</v-content>

		<v-footer app><p class="text-center mx-auto mb-0">copyright 2020 TaiWanElection</p></v-footer>
	</v-app>
</template>

<script>
import Search from './components/Search'
export default {
	data() {
		return {
      isDropDown: false,
      transitionName:"slide-down"
		}
	},
	computed: {},
	components: {
		Search
	},
	methods: {
		goHome() {
			this.$router.push('/')
		}
  },
  watch:{
    '$route'(to){
      if(to.path=='/home'){
        this.transitionName='slide-up'
      }
      console.log(to.path)
      if(to.path==='/'){
        this.transitionName="slide-down"
      }
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

.slide-up-enter,.slide-down-leave-to{
	transform: translateY(70%);
	opacity: 0;
}

.slide-down-enter,.slide-up-leave-to{
  transform: translateY(-70%);
  opacity: 0;
}

.slide-up-enter-active,.slide-down-enter-active {
	transition: all 2.5s ease;
}

.slide-up-leave-active,.slide-down-leave-active{
  transition: all 2.5s ease;
}

.child{
  position: absolute;
}

#app{
  overflow: auto;
}
</style>
