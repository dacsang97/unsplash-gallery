<template>
  <div class="row mb-5">
    <div class="col-md-12 text-center">
      <img :src="user.profile_image.large" class="rounded-circle">
      <h2 class="mt-3">{{ user.name }}</h2>
      <div class="user__info">
        <span v-if="user.location" class="ml-3">
          <i class="fa fa-map-marker" aria-hidden="true"></i> {{ user.location }}
        </span>
        <span v-if="user.portfolio_url" class="ml-3">
          <i class="fa fa-globe" aria-hidden="true"></i> {{ user.portfolio_url }}
        </span>
      </div>
      <div class="user__bio mt-3" v-if="user.bio">
        "{{user.bio}}"
      </div>
    </div>
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

<style lang="scss" scoped>
.user {
  &__info {
    color: #999;
    font-size: 15px;
  }
  &__bio {
    font-size: 15px;
    font-weight: 400;
  }
}
</style>

