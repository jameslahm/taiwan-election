<template>
	<!-- <div class="mt-5 pt-5" style="height:10vh"></div> -->
	<v-container>
		<Map></Map>
		<v-container fluid>
			<!-- <v-row class="justify-space-between mx-auto" style="height:5vh">
        <v-subheader>2014</v-subheader>
        <v-subheader>2020</v-subheader></v-row> -->
			<v-row class="justify-center pt-5 px-4  mx-auto"
				><v-slider
					thumb-label="always"
					min="2018"
					max="2020"
					:thumb-size="55"
					color="#3B9ECF"
					thumb-color="white"
					value="2019"
				>
					<template v-slot:thumb-label="{ value }">
						<p class="subtitle-1 black--text mb-0">
							{{ value }}
						</p></template
					>
				</v-slider>
			</v-row>
			<p
				class="white--text mx-auto px-5 pt-2"
				style="word-wrap:break-word;margin-top:-0.7010rem;background-color:#45463f"
			>
				2020年1月11日台湾地区领导人选举投票，民进党候选人蔡英文、赖清德当选台湾地区正、副领导人，得票817万余张，得票率为57.1%
				。得票第二的中国国民党候选人韩国瑜于晚间承认败选。
			</p></v-container
		>
	</v-container>
</template>

<script>
// @ is an alias to /src
import Map from '../components/Map'

export default {
	name: 'home',
	data() {
		return {
			show: true,
		}
	},
	computed: {
		year() {
			return this.$store.state.year
		},
	},
	components: {
		Map,
	},
	methods: {
		clicked() {
			console.log('Clicked!')
		},
	},
}
</script>

<style>
.v-slider__thumb-label-container::after {
	content: '';
	display: block;
	border-width: 15px;
	border-style: solid;
	border-color: transparent transparent #45463f transparent;
	left: -0.903rem;
	position: relative;
	top: -0.1875rem;
}
</style>
