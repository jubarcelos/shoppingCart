const saveCartItems = (items) => {
  localStorage.setItem('cartItems', items);
};

// .addEventListener('click', saveCartItems);
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
