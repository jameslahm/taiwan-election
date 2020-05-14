<template>
  <v-list>
    <v-list-item-group color="primary">
      <v-list-item
        v-for="(item, i) in persons"
        :key="i"
        :to="`/person/${i}`"
      >
        <v-list-item-avatar>
            <v-img :src="`/static/${item.id}.svg`"></v-img>
          </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  computed:{
    persons(){
      return this.$store.getters.persons
    }
  },
  mounted(){
  }
}
</script>
