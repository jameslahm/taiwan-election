<template>
  <svg :height="radius * 2" :width="radius * 2">
    <circle :cx="radius" :cy="radius" :r="radius" :fill="filledColor"></circle>
    <defs>
      <clipPath id="cut-out-circle">
        <circle :cx="radius" :cy="radius" :r="radius"></circle>
      </clipPath>
    </defs>
    <image
      :xlink:href="img"
      :width="radius * 2"
      :height="radius * 2"
      clip-path="url(#cut-out-circle)"
    />
  </svg>
</template>

<script>
export default {
  name: "avatar",
  props: {
    /**
     * @type {number} The radius of the avatar
     */
    radius: {
      type: Number,
      default: 10
    },
    /**
     * @type {string} The party of the avatar, used to render the corresponding color
     */
    party: {
      type: String,
      default: ""
    },
    /**
     * @type {string} The src url of the rendered image
     */
    img: {
      type: String,
      default: ""
    }
  },
  computed: {
    filledColor() {
      let color;
      //TODO: the colors here should be modified,
      //      and it should support any amounts of custom parties.
      switch (this.party) {
        case "国民党":
          color = "cyan";
          break;
        case "民进党":
          color = "pink";
          break;
        default:
          color = "grey";
          break;
      }
      return color;
    }
  }
};
</script>
