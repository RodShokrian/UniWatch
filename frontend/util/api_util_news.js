export const fetchNews = (searchString) => (
  $.ajax({
    method: 'GET',
    url: `https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=${searchString}&count=5`,
    headers: {
      "Ocp-Apim-Subscription-Key": "2156dee73fa9490b893a1786cd02db67"
    }
  })
);
// Bing News Search API Endpoint:
// https://api.cognitive.microsoft.com/bing/v7.0/images
// API Keys:
// Key 1: 2156dee73fa9490b893a1786cd02db67
// Key 2: 47cb35d2c1e24b748cf8d8e6ce2c9325
