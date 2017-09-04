<template>
  <div class="card">
    <card-header :user="image.user" :updateAt="image.updated_at"></card-header>
    <photo v-if="urls && urls.regular" :src="urls.regular"></photo>
    <card-love :loves="image.likes"></card-love>
  </div>
</template>

<script>
import CardHeader from './CardHeader'
import Photo from './Photo'
import CardLove from './CardLove'

export default {
  components: {
    CardHeader, Photo, CardLove
  },
  props: {
    image: {
      type: Object,
      required: true
    }
  },
  computed: {
    urls () {
      return this.image.urls
    }
  }
}

</script>
