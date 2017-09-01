const mixin = {
  data () {
    return {
      images: [],
      currentPage: 1,
      errors: null
    }
  },
  computed: {
    hasErrors () {
      return this.errors && this.errors.status && this.errors.status !== 200
    }
  },
  methods: {
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
