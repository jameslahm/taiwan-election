<template>
  <v-container>
    <v-card class="mx-auto mb-5" style="max-height:100%;">
      <v-img
        :src="'/mobile/static/'+id+'.svg'"
        aspect-ratio="1.0"
        max-height="15vh"
        contain
      ></v-img>
      <v-card-subtitle class="text-center">
        {{ person.name }}<br />
        {{ person.enName }}
      </v-card-subtitle>
      <v-divider></v-divider>
      <v-card-text class="text-left">
        <p class="mb-1">{{ person.name }}</p>
        <p>党派: {{ person.party }}</p>
        <p class="mb-1">个人经历:</p>
        <p style="white-space:pre-line;line-height:2">
          {{ person.experience }}
        </p>
      </v-card-text>
      <v-divider></v-divider>
      <v-row class="justify-center"
        ><v-subheader>相关候选人</v-subheader></v-row
      >
      <v-card-actions class="ml-3">
        <v-avatar
          color="primary"
          size="55"
          class="mr-4"
          v-for="(item, index) in relevantPersons"
          :key="index"
          style="cursor:pointer;"
          @click="navigateToPerson(item)"
          ><v-img :src="'/mobile/static/'+item.id+'.svg'"></v-img
        ></v-avatar>
      </v-card-actions>
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
  computed: {
    person() {
      return this.$store.getters.persons[this.id]
    },
    relevantPersons() {
      return this.$store.state.persons.filter(v => {
        return v.id !== parseInt(this.id)
      })
    }
  },
  methods:{
    navigateToPerson(item){
      this.$router.push(`/person/${item.id}`)
    }
  },
  mounted() {},
  created() {}
}
</script>
