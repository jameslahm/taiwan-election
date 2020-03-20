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
import data from '../assets/data/data'

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
      onEnter(){
        console.log(data,this.search)
        const res=data.filter(v=>{
          return v.name===this.search
        })
        console.log(res)
        if(res.length===0){
          this.$message({
            type:'error',
            message:'No Person'
          })
        }
        else{
          this.$router.push(`/person/${res[0].id}`)
        }
      },
      onBlur () {
        this.resetSearch()
      },
      onEsc () {
        this.$refs.search.blur()
      },
      onFocus () {
        clearTimeout(this.timeout)

        this.isFocused = true
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