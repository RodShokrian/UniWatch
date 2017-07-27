export const fetchNews = (searchString) => (
  $.ajax({
    method: 'GET',
    url: `https://api.cognitive.microsoft.com/bing/v5.0/news/search?q=${searchString}&count=5`,
    headers: {
      "Ocp-Apim-Subscription-Key": "3b9bc7de7d144851a7dd175275170d00"
    }
  })
);
// Bing News Search API Endpoint:
// https://api.cognitive.microsoft.com/bing/v5.0/images
// API Keys:
// Key 1: 3b9bc7de7d144851a7dd175275170d00
// Key 2: ac2080c8a7e9487ea4c441b0bfe5a86b
export const newsTest = () => (
  $.ajax({
    method: 'GET',
    url: `https://api.cognitive.microsoft.com/bing/v5.0/news/search?q=Stanford+University&mkt=en-us&count=10`,
    headers: {
      "Ocp-Apim-Subscription-Key": "3b9bc7de7d144851a7dd175275170d00"
    }
  })
);
