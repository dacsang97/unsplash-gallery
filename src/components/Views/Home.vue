<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>This is Home page</h1>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      images: [],
      currentPage: 1
    }
  },
  created () {
    this.$unsplash.getPhotoList(this.currentPage)
      .then(response => {
        this.images = response.body
      })
      .catch(error => console.log(error))
  }
}
</script>
