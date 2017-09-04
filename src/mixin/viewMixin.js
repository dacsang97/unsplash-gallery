const mixin = {
  data () {
    return {
      images: [],
      errors: null,
      link: '',
      currentPage: 1
    }
  },
  created () {
    this.currentPage = this.getCurrentPage()
  },
  computed: {
    totalPage () {
      if (!this.link) return 0
      this.currentPage = this.updateCurrent()
      const tmp = this.link.split(',')
      let num = 1
      tmp.forEach(str => {
        let name = str.match(/(?!")\w+(?=")/g)[0]
        if (name !== 'last') return
        num = str.match(/(?!page=)\d+(?=&)/g)[0]
      })
      return num
    },
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
