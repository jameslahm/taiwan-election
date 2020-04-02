<template>
	<v-app>
		<v-app-bar dark app>
			<!-- <v-container fluid class="pt-1" style="overflow:hidden;max-height:100%">
        <v-row> -->
			<v-btn
				class="d-flex-shrink-0"
				@click="goHome"
				style="cursor:pointer"
			>
				<v-img
					alt="Vuetify Logo"
					src="https://picsum.photos/1080/1080?random"
					transition="scale-transition"
					max-width="30"
				/>

			</v-btn>

			<v-spacer></v-spacer>

			<Search ref="search"></Search>

		</v-app-bar>
		<v-content>
			<transition :name="transitionName" mode="out-in">
				<router-view ></router-view>
			</transition>
		</v-content>

		<v-footer app absolute
			><p class="text-center mx-auto mb-0">
				copyright 2020 TaiWanElection
			</p></v-footer
		>
	</v-app>
</template>

<script>
import Search from './components/Search'
export default {
	data() {
		return {
			isDropDown: false,
			transitionName: 'slide-down'
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
	watch: {
		$route(to) {
			if (to.path == '/home') {
				this.transitionName = 'slide-up'
			}
			console.log(to.path)
			if (to.path === '/') {
				this.transitionName = 'slide-down'
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

.slide-up-enter,
.slide-down-leave-to {
	transform: translateY(10%);
	opacity: 0;
}

.slide-down-enter,
.slide-up-leave-to {
	transform: translateY(-10%);
	opacity: 0;
}

.slide-up-enter-active,
.slide-down-enter-active {
	transition: transform 1s ease;
}

.slide-up-leave-active,
.slide-down-leave-active {
	transition: all 1s ease;
}
</style>
