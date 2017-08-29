<template>
  <b-card-group columns>
    <card-image v-for="(image, index) in images" :image="image" :key="index"></card-image>
  </b-card-group>
</template>

<script>
import CardImage from './CardImage/index'

export default {
  components: {
    CardImage
  },
  props: ['images']
}
</script>

