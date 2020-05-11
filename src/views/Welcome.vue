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
			历年来台湾地区的选举之争都是两岸人民热烈讨论的话题，我们意图通过交互设计使得人们可以快速地了解各个候选人之间的主张政策以及历年选举后各党的版图变化。
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
