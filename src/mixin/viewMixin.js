const mixin = {
  data () {
    return {
      images: [],
      currentPage: 1,
      errors: null
    }
  },
  created () {
    this.currentPage = this.getCurrentPage()
  },
  computed: {
    hasErrors () {
      return this.errors && this.errors.status && this.errors.status !== 200
    }
  },
  methods: {
    getCurrentPage () {
      const { query } = this.$route
      if (!query.page) {
        return 1
      }
      if (isNaN(+query.page)) {
        return 1
      }
      return +query.page
    },
    updateCurrentPage () {
      this.$router.push({
        query: {
          page: this.currentPage
        }
      })
      this.currentPage ++
    },
    handleErr (err) {
      const errors = {}
      errors.status = err.status
      if (err.data && err.data.errors && err.data.errors.length) {
        errors.messages = err.data.errors
      }
      return errors
    }
  }
}

export default mixin
