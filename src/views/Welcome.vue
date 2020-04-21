<template>
	<v-container class="justify-center">
		<v-img
			contain
			src="../assets/2018.svg"
			width="30%"
			height="30%"
			class="mx-auto"
		>
		</v-img>
		<v-row class="justify-center ">
			<p class="headline">海峡两岸一线牵</p>
		</v-row>
		<p class="text-left mx-auto" style="width:80vw;">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
			voluptate incidunt, harum voluptatem asperiores repellendus, iste
			eius, facilis exercitationem eligendi ad deserunt optio magni? In
			expedita aliquam consequatur. Culpa, molestias.
		</p>
		<v-row class="justify-center mt-5">
			<v-avatar
				@click="navigateToHome"
				style="cursor:pointer;"
				color="black"
				size="55"
				><v-icon size="45">mdi-chevron-down</v-icon></v-avatar
			>
		</v-row>
	</v-container>
</template>

<script>
export default {
	methods: {
		navigateToHome() {
			this.$router.push('/home')
		},
	},
}
</script>
