<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-12">
        <div v-if="errors && Object.keys(errors).length">
          <h3>Something went wrong: {{ errors.status }}</h3>
          <ul v-if="errors.messages && errors.messages.length">
            <li v-for="(error, index) in errors.messages" :key="index">
              {{ error }}
            </li>
          </ul>
        </div>
        <h2 v-else>
          <card-list :images="images"></card-list>
          <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading" :spinner="'waveDots'">
            <span slot="no-more">
              There is no more photos :(
            </span>
          </infinite-loading>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import CardList from '../UIComponents/CardList'

export default {
  components: {
    InfiniteLoading, CardList
  },
  data () {
    return {
      images: [],
      currentPage: 1,
      errors: null
    }
  },
  methods: {
    onInfinite () {
      this.$unsplash.getPhotoList(this.currentPage)
      .then(response => {
        const result = response.body
        if (result.length) {
          this.images = this.images.concat(result)
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
          this.currentPage++
        } else {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
        }
      })
      .catch(err => {
        this.errors = {}
        this.errors.status = err.status
        if (err.body.errors && err.body.errors.length) {
          this.errors.messages = err.body.errors
        }
      })
    }
  }
}
</script>
