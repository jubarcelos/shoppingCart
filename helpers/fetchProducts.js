const fetchProducts = () => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produtos}`;
  fetch(url)
  .then((result) => result.json())
  .then((data) => console.log(data.value))
  .catch
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

fetchProducts('computador');