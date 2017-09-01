<template>
  <b-card-group columns>
    <card-image v-for="image in images" :image="image" :key="image.id"></card-image>
  </b-card-group>
</template>

<script>
import CardImage from './CardImage/index'

export default {
  components: {
    CardImage
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  }
}
</script>

