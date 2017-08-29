<template>
  <div class="wrapper">
    <navbar></navbar>
    <app-content></app-content>
  </div>
</template>

<script>
import Navbar from '@/components/UIComponents/Navbar'
import AppContent from '@/components/Layouts/Content'

export default {
  name: 'app',
  components: {
    Navbar, AppContent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
