<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-12">
        <h1 v-if="error">Có gì đó sai sai</h1>
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
      error: 0
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
        console.log(err)
        this.error = 1
      })
    }
  }
}
</script>
