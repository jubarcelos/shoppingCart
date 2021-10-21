const fetchProducts = (products) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${products}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
