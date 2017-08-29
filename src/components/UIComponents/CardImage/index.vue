<template>
  <div class="card">
    <card-header :user="image.user"></card-header>
    <p class="card-text">
      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
    </p>
  </div>
</template>

<script>
import CardHeader from './CardHeader'

export default {
  components: {
    CardHeader
  },
  props: [
    'image'
  ]
}

</script>
