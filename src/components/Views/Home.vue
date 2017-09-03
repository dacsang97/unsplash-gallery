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
          <b-pagination-nav align="center" :link-gen="linkGen" :number-of-pages="totalPage" :value="currentPage" @input="handleInput" @change="handleChange" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardList from '../UIComponents/CardList'
import mixin from '@/mixin/viewMixin'

export default {
  components: {
    CardList
  },
  mixins: [mixin],
  mounted () {
    this.getPhotoList()
  },
  methods: {
    getPhotoList () {
      this.$unsplash.getPhotoList(this.currentPage)
      .then(response => {
        const result = response.data
        this.link = response.headers.link
        if (!result.length) return
        this.images = result
      })
      .catch(err => {
        this.errors = this.handleErr(err.response)
      })
    },
    linkGen (pageNum) {
      return {
        path: '/?page=' + pageNum
      }
    },
    handleInput (page) {
      this.currentPage = page
      this.getPhotoList()
    },
    handleChange (page) {
      console.log('Change:' + page)
    }
  }
}
</script>
