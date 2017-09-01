<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-12">
        <div v-if="hasErrors">
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
import mixin from '@/mixin/viewMixin'

export default {
  components: {
    InfiniteLoading, CardList
  },
  mixins: [mixin],
  methods: {
    onInfinite () {
      this.$unsplash.getPhotoList(this.currentPage)
      .then(response => {
        const result = response.data
        if (result.length) {
          this.images = this.images.concat(result)
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
          this.currentPage++
          return
        }
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
      })
      .catch(err => {
        this.errors = this.handleErr(err.response)
      })
    }
  }
}
</script>
