<template>
  <div>
    <img :src="user.profile_image.small" class="rounded-circle">
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style> 

</style>
