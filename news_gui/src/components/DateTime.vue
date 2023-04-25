<template lang="">
  <div class="date">
    <h3>{{getCurrentDate()}}</h3>
  </div>
</template>
<script>
export default {
    name: 'datetime',
    methods: {

    getCurrentDate() {
      let date = new Date();
    //   return date.getTime().
      let arrTime = date.toString().split(" ")[4].split(':');
      return `${arrTime[0]}:${arrTime[1]}`
    //   return date.toString().split(" ")[4]
    },
    created() {
    setInterval(this.getCurrentDate, 500);   
    },
    computed: {
        
    }
  },
};
</script>
<style scoped>
.date {
    position: absolute;
    right: 6rem;
    top: 6rem;

}
.date h3 {
    font-size: 6rem;
}

@media (min-width: 300px) and (max-width: 1024px) {
  .date{
    display: none;
  }  
}
</style>
