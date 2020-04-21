<template>
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
</template>


<script>

  export default {
    name: 'Search',

    data: () => ({
      isFocused: false,
      isSearching: false,
      label: 'Search',
      search: '',
      timeout: null,
    }),

    watch: {
      isSearching (val) {
        if (val) {
          this.$refs.search.focus()

          return
        }

        this.resetSearch()
      },
      search (val) {
        if (val) return
      },
    },

    mounted () {
    },
    methods: {
      onBlur () {
        this.resetSearch()
        this.$router.back()
      },
      onEsc () {
        this.$refs.search.blur()
      },
      onFocus () {
        clearTimeout(this.timeout)
        this.isFocused = true
        if(!/search/.test(this.$route.path))this.$router.push('/search')
      },
      resetSearch (timeout = 0) {
        clearTimeout(this.timeout)

        this.$nextTick(() => {
          this.search = undefined
          this.isSearching = false

          this.timeout = setTimeout(() => (this.isFocused = false), timeout)
        })
      },
    },
  }
</script>