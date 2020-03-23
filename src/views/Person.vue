<template>
  <v-container>
    <v-card>
      <v-img src="../assets/0.svg" aspect-ratio=1.0 max-height="15vh" contain ></v-img>
      <v-card-subtitle class="text-center">
        {{person.name}}<br/>
        {{person.enName}}
      </v-card-subtitle>
      <v-divider></v-divider>
      <v-card-text class="text-left">
        <p class="mb-1">{{person.name}}</p>
        <p>党派: {{person.party}}</p>
        <p class="mb-1">个人经历:</p>
        <p style="white-space:pre-line;line-height:2">{{person.experience}}</p>
      </v-card-text>
    </v-card>
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
    person(){
      return this.$store.getters.persons[this.id]
    }
  },
  mounted() {
  },
  created() {
  }
}
</script>
