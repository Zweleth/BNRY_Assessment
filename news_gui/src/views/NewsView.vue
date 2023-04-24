<template lang="">
    <div class="news">
    <allnews/>
    </div>
</template>
<script>
import allnews from '@/components/AllNews.vue'
export default {
    components: {
        allnews
    }
}
</script>
<style scoped>
.news {
    width: 100vw;
    height: 100vh;
}
</style>