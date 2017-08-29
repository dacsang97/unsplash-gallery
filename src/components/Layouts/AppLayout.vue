<template>
  <div class="wrapper">
    <navbar></navbar>
    <app-content></app-content>
  </div>
</template>

<script>
import Navbar from '@/components/UIComponents/Navbar'
import AppContent from './Content'

export default {
  components: {
    Navbar, AppContent
  }
}
</script>
