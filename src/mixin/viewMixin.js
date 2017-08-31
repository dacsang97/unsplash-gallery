const mixin = {
  data () {
    return {
      images: [],
      currentPage: 1,
      errors: null
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
