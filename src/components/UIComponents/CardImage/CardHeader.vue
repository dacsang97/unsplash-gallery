<template>
  <div class="card__header">
    <!-- <img :src="user.profile_image.small" class="rounded-circle"> -->
    <img class="d-flex mr-3 rounded-circle float-left" :src="user.profile_image.small" width="32px" height="32px">
    <div class="card__header__username">
      <router-link :to='href'>{{user.name}}</router-link>
    </div>
    <div class="card__header__date text-muted">{{fromNow}}</div>
  </div>
</template>

<script>
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    updateAt: {
      type: String,
      required: true
    }
  },
  computed: {
    fromNow () {
      return distanceInWordsToNow(this.updateAt)
    },
    href () {
      return `/@${this.user.username}`
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  &__header {
    padding: 16px;

    &__username {
      font-size: 14px;
      font-weight: 600;
      height: 16px;
      line-height: 16px;
    }

    &__date {
      font-weight: 400;
      font-size: 12px;
      height: 16px;
      line-height: 16px;
    }
  }
}
</style>
