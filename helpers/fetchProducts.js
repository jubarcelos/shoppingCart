const fetchProducts = (products) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${products}`;
  return fetch(url)
  .then((response) => response.json())
  .then((data) => (data.results))
  .catch ((error) => console.log('temos um erro'));
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}