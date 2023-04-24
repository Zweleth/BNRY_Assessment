<template>
  <div class="home">
    
    <headlines/>
    <div class="bottom"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import headlines from '@/components/Headlines.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    headlines
  }
}
</script>
<style scoped>
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.bottom {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-bottom: 9rem solid var(--highlight);
    border-left: 40rem solid transparent;
}
</style>
