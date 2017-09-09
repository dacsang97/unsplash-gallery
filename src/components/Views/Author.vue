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
          <user-info v-if="user" :user="user"></user-info>
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
import UserInfo from '../UIComponents/UserInfo'
import CardList from '../UIComponents/CardList'
import InfiniteLoading from 'vue-infinite-loading'
import mixin from '@/mixin/viewMixin'

export default {
  components: {
    InfiniteLoading, UserInfo, CardList
  },
  mixins: [mixin],
  data () {
    return {
      username: this.$route.params.userId.substr(1),
      user: null
    }
  },
  methods: {
    onInfinite () {
      if (this.stop) {
        return this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
      }
      this.$unsplash.getUserPhotoList(this.username, this.currentPage)
      .then(response => {
        if (!this.getProp(response, 'data') || !this.getProp(response, 'headers.link')) {
          return
        }
        const result = this.getProp(response, 'data')
        this.link = this.getProp(response, 'headers.link')
        this.totalPage = this.getTotalPage()
        this.user = this.getProp(result[0], 'user')
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
