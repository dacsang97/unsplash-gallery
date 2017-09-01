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
      if (err.body && err.body.errors && err.body.errors.length) {
        errors.messages = err.body.errors
      }
      return errors
    }
  }
}

export default mixin
