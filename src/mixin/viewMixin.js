import get from 'lodash.get'

const mixin = {
  data () {
    return {
      images: [],
      errors: null,
      link: '',
      currentPage: 1,
      totalPage: -1,
      stop: false
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
    hasNoResult () {
      return (this.totalPage === -1 || this.currentPage >= this.totalPage)
    },
    getTotalPage (headers) {
      const perPage = this.getProp(headers, 'x-per-page')
      const totalPage = this.getProp(headers, 'x-total')
      return Math.ceil(totalPage / perPage)
    },
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
    },
    getProp (object, path, defaultValue) {
      return get(object, path, defaultValue)
    }
  }
}

export default mixin
