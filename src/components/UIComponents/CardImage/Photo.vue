<template>
  <img :src="src" alt="image" class="img-fluid">
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>
