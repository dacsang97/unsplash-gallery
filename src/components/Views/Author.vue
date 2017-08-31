<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-12">
        <div v-if="errors && errors.status && errors.status !== 200">
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
        this.errors = this.handleErr(err)
      })
    }
  }
}
</script>
