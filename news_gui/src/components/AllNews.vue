<template lang="">
  <div class="allNews d-" >
    <div
      class="point"
      v-for="story in news"
      :style="{ backgroundImage: `url(${story.urlToImage})` }"
    >
      <div class="content">
        <h5>{{ story.source.name}}</h5>
        <h6>{{ story.description }}</h6>
        <a class="read-more" :href="story.url" target="_blank">Read more</a>
      </div>
      <div class="description">
        <h6>{{ story.title }}</h6>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "allNews",
  computed: {
    ...mapGetters(["news","visible"]),
  },
  methods: {
    ...mapActions(["fetchNews","toggleShow"]),
  },
  created() {
    this.fetchNews();
    this.toggleShow();
  },
};
</script>
<style scoped>
.allNews {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 5rem 1rem 3rem 1rem;
}

.point {
  border: none;
  border: 0.2rem solid gray;
  border-radius: 1rem;
  width: 100%;
  height: 13rem;
  background-image: url(https://i.postimg.cc/26hnSrpw/no-image.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
}
.description {
  height: 20%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  border-radius: 0 0 0.8rem 0.8rem;
}
.content {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  bottom: -15rem;
  border-radius: 0.8rem 0.8rem;
  display: grid;
  place-items: center;
  position: relative;
}

.point:hover .description {
  animation: popDown 0.6s ease-in-out forwards;
}
.point:hover .content {
  animation: popUp 0.6s ease-in-out forwards;
}

.description h6,
.content h6 {
  color: var(--bgColor);
}
.read-more {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: var(--bgColor);
}

.content h5 {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  color: var(--bgColor);
}

@keyframes popUp {
  0% {
    bottom: -15rem;
  }
  100% {
    bottom: 0;
  }
}
@keyframes popDown {
  0% {
    bottom: 0;
  }
  100% {
    bottom: -15rem;
  }
}

@media (min-width: 300px) and (max-width: 520px) {
  .allNews {
    width: 100vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
  }
  
  .point {
    height: 13rem;
  }
}

@media (min-width: 521px) and (max-width: 841px) {
  .allNews {
   grid-template-columns: repeat(2, 1fr); 
  }
  
  .point {
    height: 13rem;
  }
}

@media (min-width: 841px) and (max-width: 1280px) {
  .allNews {
    grid-template-columns: repeat(3, 1fr);
  }
  * {
    color:black;
  }
  .point {
    height: 13rem;
  }
}
</style>
