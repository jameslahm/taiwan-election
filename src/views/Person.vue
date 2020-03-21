<template>
  <v-container>
    <li v-for="(person,index) in persons" :key="index">{{person.name}}</li>
  </v-container>
</template>

<script>
export default {
  props: {
    id: String
  },
  data() {
    return {
      messages: []
    }
  },
  computed:{
    persons(){
      console.log(this.$store.state)
      return this.$store.getters.persons
    }
  },
  mounted() {
  },
  created() {
  }
}
</script>
