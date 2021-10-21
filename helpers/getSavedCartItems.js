const getSavedCartItems = () => {
  const items = localStorage.getItem('cartItems');
  return items;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
