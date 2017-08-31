<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-12">
        <template v-if="errors.length !== 0">
          <h3>Something went wrong</h3>
          <ul>
            <li v-for="(error, index) in errors" :key="index">
              {{ error }}
            </li>
          </ul>
        </template>
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

export default {
  components: {
    InfiniteLoading, UserInfo, CardList
  },
  data () {
    return {
      username: this.$route.params.userId.substr(1),
      user: null,
      currentPage: 1,
      images: [],
      errors: []
    }
  },
  methods: {
    onInfinite () {
      this.$unsplash.getUserPhotoList(this.username, this.currentPage)
      .then(response => {
        const result = response.body
        if (result.length) {
          if (this.currentPage === 1) {
            this.user = result[0].user
          }
          this.images = this.images.concat(result)
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
          this.currentPage++
        } else {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
        }
      })
      .catch(err => {
        this.errors = err.body.errors
      })
    }
  }
}
</script>
