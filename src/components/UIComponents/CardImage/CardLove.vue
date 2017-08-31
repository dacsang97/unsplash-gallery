<template>
  <div class="card__love text-muted float-right">
    {{loves}} Likes
  </div>
</template>

<script>
export default {
  props: {
    loves: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  &__love {
    padding: 16px;
    font-size: 12px;
    font-weight: 400;

    &__heart {
      position: relative;
      top: -1px;
      width: 15px;
      fill: #f15151;
    }
  }
}
</style>

