<template>
	<!-- <div class="mt-5 pt-5" style="height:10vh"></div> -->
	<v-container>
		<Map></Map>
		<v-container fluid>
			<!-- <v-row class="justify-space-between mx-auto" style="height:5vh">
        <v-subheader>2014</v-subheader>
        <v-subheader>2020</v-subheader></v-row> -->
			<v-row class="justify-center pt-5  mx-auto"
				><v-slider
					class="text-center"
					thumb-label="always"
					min="2018"
					max="2020"
					:thumb-size="55"
					thumb-color="success"
					value="2019"
				>
					<template v-slot:thumb-label="{ value }">
						<p class="title mb-0">{{ value }}</p></template
					></v-slider
				></v-row
			>
			<p
				class="white--text mx-auto hello px-4 pt-2"
				style="width:75vw;word-wrap:break-word;margin-top:-0.7010rem;background-color:#45463f"
			>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad est
				vero sed quidem. Sequi nobis molestias illo aspernatur, quo vel
				excepturi, omnis possimus quia sint cum repudiandae. Eveniet,
				possimus. Incidunt?
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
