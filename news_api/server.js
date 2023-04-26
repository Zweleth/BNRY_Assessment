const port = 3000;
let allNews, headlines, sports, searchResults = null;

const NewsAPI = require('newsapi');
const news = new NewsAPI('acf1bc40b76548b2b4e2d7cd2124b02b');

news.v2.everything({
    q: 'everything',
    sources: "bbc.co.uk, the-verge",
    domains: 'bbc.co.uk',
    from: '2023-03-30',
    to: '2023-04-21',
    language: 'en',
    sortBy: 'date',
    page: 1
  }).then(response => {
    // console.log(response);
    allNews = response;
    return allNews;
   
  });

  news.v2.everything({
    q: 'sport',
    sources: "bbc.co.uk, the-verge",
    domains: 'bbc.co.uk',
    from: '2023-03-30',
    to: '2023-04-21',
    language: 'en',
    sortBy: 'date',
    page: 1
  }).then(response => {
    // console.log(response);
    sports = response;
    return sports;
   
  });

  
  

  news.v2.everything({
    q: 'headlines',
    sources: "bbc.co.uk, the-verge",
    domains: 'bbc.co.uk',
    from: '2023-03-30',
    to: '2023-04-21',
    language: 'en',
    sortBy: 'date',
    page: 1
  }).then(response => {
    // console.log(response);
    headlines = response;
    return headlines;
   
  });

  
const express = require('express');
const app = express();

app.use((req, res, next)=> {
    // the http://localh... allows you to access the api's from the local host root on vue js       
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next();
});

app.get('/news', (req, res) => {
    res.send(allNews);
});
app.get('/headlines', (req, res) => {
  res.send(headlines);
});
app.get('/sports', (req, res) => {
  res.send(sports);
});
app.get(`/search/:value`, (req, res) => {
  news.v2.everything({
    q: `${req.params.value}`,
    sources: "bbc.co.uk, the-verge",
    domains: 'bbc.co.uk',
    from: '2023-03-25',
    to: '2023-04-21',
    language: 'en',
    sortBy: 'date',
    page: 1
  }).then(response => {
    // console.log(response);
    searchResults = response;
    return searchResults;
   
  });
  res.send(searchResults);
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})