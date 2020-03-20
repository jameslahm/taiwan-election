<template>
  <v-container style="width:100%;height:100vh;">
    <v-img
      ref="map"
      contain
      src="../assets/2018.svg"
      width="100%"
      height="100%"
      class="elevation-1"
    >
      <v-avatar
        ref="avatars"
        v-for="(person, index) in persons"
        :key="index"
        color="success"
        v-bind:style="{ left: person.x + 'vw', top: person.y + 'vh' }"
        @click="navigateToPerson(index)"
        style="cursor:pointer;"
        @mousedown="onMouseDown"
        @mousemove="move($event, index)"
        @mouseup="onMouseUp"
        @mouseleave="onMouseLeave"
        size="62"
      >
        <img :src="'/img/' + index + '.svg'" />
      </v-avatar>
    </v-img>
  </v-container>
</template>

<script>
import data from '../assets/data/data'

export default {
  name: 'Map',
  data: function() {
    return {
      /**
       * @type {Number} the selected year
       */
      year: 2018,
      persons: [],
      isDown: false,
      timer: undefined,
      mouseX: 0,
      mouseY: 0,
      moving: false
    }
  },
  mounted() {
    setTimeout(this.initTimer,1000)
  },
  methods: {
    onMouseLeave(event){
      event.preventDefault()
      this.moving=false
      this.isDown=false
      console.log('Leave', this.isDown)
      setTimeout(this.initTimer,1000)
    },
    onMouseUp(event) {
      event.preventDefault()
      this.isDown = false
      console.log('Up', this.isDown)
      setTimeout(this.initTimer,1000)
    },
    onMouseDown(event) {
      this.isDown = true
      this.mouseX = event.x
      this.mouseY = event.y
      console.log('Down', this.isDown)
      console.log(this.timer)
      clearInterval(this.timer)
      this.timer=undefined
      event.preventDefault()
    },
    initTimer() {
      this.isDown = false
      this.timer = setInterval(() => {
        this.persons.forEach((v, index) => {
          const x = v.x + Math.random() * 0.1 - 0.05
          const y = v.y + Math.random() * 0.1 - 0.05
          this.$set(
            this.persons,
            index,
            Object.assign({}, this.persons[index], { x: x, y: y })
          )
        })
      }, 100)
    },
    move(event, index) {
      console.log('Over')
      event.preventDefault()
      if (this.isDown) {
        this.moving = true
        const x =
          this.persons[index].x +
          ((event.x - this.mouseX) / window.innerWidth) * 100
        const y =
          this.persons[index].y +
          ((event.y - this.mouseY) / window.innerHeight) * 100
        console.log(x, y)
        console.log(this.persons[index].x)
        this.$set(
          this.persons,
          index,
          Object.assign({}, this.persons[index], { x: x, y: y })
        )
        this.mouseX = event.x
        this.mouseY = event.y
      }
    },
    // showPerson(n) {
    //   console.log(n)
    // },
    // selectArea(event) {
    //   console.log(event.offsetX / this.$refs.map.$el.offsetWidth)
    //   if (
    //     event.offsetX / this.$refs.map.$el.offsetWidth > 0.4 &&
    //     event.offsetX / this.$refs.map.$el.offsetWidth < 0.7
    //   ) {
    //     if (event.offsetY / this.$refs.map.$el.offsetHeight < 0.33)
    //       this.showPerson(0)
    //     else if (event.offsetY / this.$refs.map.$el.offsetHeight < 0.66)
    //       this.showPerson(1)
    //     else this.showPerson(2)
    //   }
    // },
    // /**
    //  * Show the map according to the year given.
    //  * @param {number} year
    //  */
    // showMapByYear(year) {
    //   this.year = year
    // },
    navigateToPerson(index) {
      if (!this.moving) {
        this.$router.push(`/person/${index}`)
      } else {
        this.moving = false
      }
    }
  },
  created() {
    this.persons = data
    this.persons.forEach(v => {
      v.x = Math.random() * 25 + 25
      v.y = Math.random() * 70 + 10
    })
  }
}
</script>

<style>
.rect {
  margin-left: auto;
  margin-right: auto;
}
</style>
