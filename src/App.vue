<template>
	<v-app>
		<v-app-bar dark app>
			<v-app-bar-nav-icon
				@click.stop="drawer = !drawer"
			><v-icon>mdi-chevron-left</v-icon></v-app-bar-nav-icon>

			<div class="d-flex-shrink-0" @click.stop="drawer=!drawer" style="cursor:pointer">
				返回
			</div>

			<v-spacer></v-spacer>

			<Search ref="search"></Search>
		</v-app-bar>
		<v-navigation-drawer app v-model="drawer" temporary>
			<v-list>
				<v-list-item :to="`/`" exact>
					<v-list-item-icon>
						<v-icon>mdi-home</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						首页
					</v-list-item-content>
				</v-list-item>
				<v-list-item  :to="`/home`">
					<v-list-item-icon>
						<v-icon>
							mdi-view-dashboard
						</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						选举情况
					</v-list-item-content>
				</v-list-item>
				<v-list-item :to="`/search`">
					<v-list-item-icon>
						<v-icon>mdi-account-box</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						选举人
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-content>
			<transition :name="transitionName" mode="out-in">
				<router-view></router-view>
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
			transitionName: 'slide-down',
			drawer: null,
		}
	},
	computed: {},
	components: {
		Search,
	},
	methods: {
		goHome() {
			this.$router.push('/')
		},
	},
	watch: {
		$route(to) {
			if (to.path === '/home') {
				this.transitionName = 'slide-up'
			}
			if (to.path === '/') {
				this.transitionName = 'slide-down'
			}
		},
	},
	created() {
		this.$vuetify.theme.dark = true
	},
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
