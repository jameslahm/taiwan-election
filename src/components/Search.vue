<template>
<div style="position:relative">
	<v-responsive
		class="mr-0 mr-md-6 hidden-xxs-only transition-swing"
		:max-width="isFocused ? 300 : 200"
	>
		<v-text-field
			id="search"
			ref="search"
			v-model="search"
			:label="label"
			color="primary"
			dense
			flat
			hide-details
			prepend-inner-icon="mdi-magnify"
			rounded
			solo-inverted
			@blur="onBlur"
			@focus="onFocus"
			@keydown.esc="onEsc"
			@keydown.enter="onEnter"
		/>
	</v-responsive>
  <person-list class="person-list" v-if="isFocused"></person-list>
</div>
</template>

<script>
import PersonList from './PersonList'


export default {
	name: 'Search',
  components:{
    PersonList
  },
	data: () => ({
		isFocused: false,
		isSearching: false,
		label: 'Search',
		search: '',
		timeout: null,
	}),

	watch: {
		isSearching(val) {
			if (val) {
				this.$refs.search.focus()

				return
			}

			this.resetSearch()
		},
		search(val) {
			if (val) return
		},
	},

	mounted() {},
	methods: {
		onEnter() {
			const person = this.$store.state.persons.filter((e) => {
				console.log(e.name === this.search)
				return e.name === this.search
			})
			this.$router.push(`/person/${person[0].id}`)
		},
		onBlur() {
			this.resetSearch()
		},
		onEsc() {
			this.$refs.search.blur()
		},
		onFocus() {
			clearTimeout(this.timeout)
			this.isFocused = true
		},
		resetSearch(timeout = 200) {
			clearTimeout(this.timeout)
			this.$nextTick(() => {
				this.search = undefined
				this.isSearching = false

				this.timeout = setTimeout(
					() => (this.isFocused = false),
					timeout
				)
			})
		},
	},
}
</script>

<style>
.person-list{
  position: absolute;
  left: 0;
  top: 56px;
  right: 20px;
}
</style>