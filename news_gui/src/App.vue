<template>
  <navbar/>
  <router-view/>
  <mobilenav/>
</template>
<script>
import navbar from '@/components/Navbar.vue'
import mobilenav from '@/components/MobileNav.vue'
export default {
  components: {
    navbar,
    mobilenav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}




</style>

