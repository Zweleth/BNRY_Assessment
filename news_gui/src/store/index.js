import { createStore } from 'vuex'
const URL = 'http://localhost:3000/'

export default createStore({
  state: {
    news: null,
    headlines: null,
    sports: null
  },
  getters: {
    news(state) {
      return state.news;
    },
    headlines(state) {
      return state.headlines;
    },
    sports(state) {
      return state.sports;
    }
  },
  mutations: {
    setNews(state, news) {
      state.news = news;
    },
    setHeadlines(state, headlines) {
      state.headlines = headlines;
    },
    setSports(state, sports) {
      state.sports = sports;
    }
  },
  actions: {
    async fetchHeadlines(context) {
      try {
        let res = await fetch(`${URL}headlines`);
        let results = await res.json();
        context.commit(
          "setHeadlines",
          results.articles.length !== 0 ? results.articles : null
        );
      } catch (e) {
        console.log(e);
      }
    },
    async fetchNews(context) {
      try {
        let res = await fetch(`${URL}news`);
        let results = await res.json();
        console.log(results.articles);

        context.commit(
          "setNews",
          results.articles.length !== 0 ? results.articles : null
        );
      } catch (e) {
        console.log(e);
      }
    },async search(context, value) {
      try {
        let res = await fetch(`${URL}search/${value}`);
        let results = await res.json();
        console.log(results.articles);

        context.commit(
          "setNews",
          results.articles.length !== 0 ? results.articles : null
        );
      } catch (e) {
        console.log(e);
      }
    },
    async fetchSports(context) {
      try {
        let res = await fetch(`${URL}sports`);
        let results = await res.json();
        console.log(results.articles);

        context.commit(
          "setSports",
          results.articles.length !== 0 ? results.articles : null
        );
      } catch (e) {
        console.log(e);
      }
    }
    
    
  }
})
