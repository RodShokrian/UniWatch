export const fetchNews = (searchString) => (
  $.ajax({
    method: 'GET',
    url: `https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=${searchString}&count=5`,
    headers: {
      "Ocp-Apim-Subscription-Key": "596b88d54f6b4b84a277acfb65a6fbc6"
    }
  })
);
// Bing News Search API Endpoint:
// https://api.cognitive.microsoft.com/bing/v7.0/images
// API Keys:
// Key 1: 596b88d54f6b4b84a277acfb65a6fbc6
// Key 2: 39f6e859bdbb4bbc976566e9da2a33f5
