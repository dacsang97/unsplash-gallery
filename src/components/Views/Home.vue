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
        <div v-else>
          <card-list :images="images"></card-list>
          <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading" :spinner="'waveDots'">
            <span slot="no-more">
              There is no more photos :(
            </span>
          </infinite-loading>
        </div>
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
      if (this.stop) {
        return this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
      }
      this.$unsplash.getPhotoList(this.currentPage)
      .then(response => {
        if (!this.getProp(response, 'data')) {
          return
        }
        const result = this.getProp(response, 'data')
        this.totalPage = this.getTotalPage(this.getProp(response, 'headers'))
        this.images = this.images.concat(result)
        this.stop = this.hasNoResult()
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        this.updateCurrentPage()
      })
      .catch(err => {
        this.errors = this.handleErr(this.getProp(err, 'response'))
      })
    }
  }
}
</script>
