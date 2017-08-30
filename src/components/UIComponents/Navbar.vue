<template>
  <b-navbar toggleable="md" type="light" variant="light">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-navbar-brand href="#">
      <img :src="logo" class="navbar__logo" />
      Unsplash Gallery
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
        <b-nav-item to="/">Photos</b-nav-item>
        <b-nav-item to="/user">Authors</b-nav-item>
      </b-nav>
      <b-nav is-nav-bar class="ml-auto">
        <b-nav-item href="https://github.com/dacsang97/unsplash-gallery">
          <i class="fa fa-github" aria-hidden="true"></i> Github
        </b-nav-item>
      </b-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import Logo from '@/assets/logo-svg.svg'

export default {
  data () {
    return {
      logo: Logo
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
    box-shadow: inset 0 -2px transparent;
    border-bottom: 1px solid hsla(0,0%,54%,.3);
}
.navbar__logo {
    width: 32px;
    top: -1px;
    position: relative;
    margin-right: 10px;
}  
</style>

