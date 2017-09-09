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
      return (this.totalPage === -1 || this.currentPage === this.totalPage)
    },
    getTotalPage () {
      if (!this.link) return 0
      const tmp = this.link.split(',')
      let num = this.totalPage
      tmp.forEach(str => {
        let name = str.match(/(?!")\w+(?=")/g)[0]
        if (name !== 'last') return
        num = str.match(/(?!page=)\d+(?=&)/g)[0]
      })
      return +num
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
