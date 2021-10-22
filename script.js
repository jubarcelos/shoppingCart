const insertLoading = document.querySelector('.loading');

window.onload = async () => {
  allProducts();
  setSavedCart();
  setCartPrice();
};

const itemElements = document.querySelector('.cart__items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function getAllPrices() {
  const arrayAllItems = itemElements.childNodes;
  const itemValues = [];
  arrayAllItems.forEach((item) => {
    const itemPrice = item.innerHTML.split('PRICE: $');
    itemValues.push(parseFloat(itemPrice[1]));
  });
  return itemValues;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function setCartPrice() {
  const totalToPay = document.querySelector('.total-price');
  totalToPay.innerHTML = getAllPrices().reduce((acc, current) => acc + current, 0);
}
setCartPrice();

function cartItemClickListener(event) {
  setCartPrice();
  event.target.remove();
}
// vai ser usada para remover do storage tbm.

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  itemElements.appendChild(li);
}

async function addItemToCart(sku) {
  const allItens = await fetchItem(sku);
  const { title: name, price: salePrice, thumbnail: image } = allItens;
  createCartItemElement({ sku, image, name, salePrice });
  saveCartItems(itemElements.innerHTML);
  setCartPrice();
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  const productSection = document.querySelector('.items');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const addButton = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  section.appendChild(addButton);
  productSection.appendChild(section);
  addButton.addEventListener('click', () => {
    saveCartItems(itemElements.innerHTML);
    addItemToCart(sku);
  });
}

const allProducts = () => {
  fetchProducts('computador').then((response) => {
    response.results.forEach((products) => createProductItemElement(products));
    insertLoading.remove();
  });
};

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

const setSavedCart = () => {
  const memory = getSavedCartItems();
  itemElements.innerHTML = memory;
};
// ativa botão de limpar.
const clearAllCart = document.querySelector('.empty-cart');
clearAllCart.addEventListener('click', () => {
  const allItems = document.querySelector('.cart__items');
  allItems.innerHTML = '';
  setCartPrice();
  saveCartItems(itemElements.innerHTML);
});

itemElements.addEventListener('click', cartItemClickListener);

function removeLoadingPage () {
  document.querySelector('.loading').innerText = 'carregando...';
}
removeLoadingPage ()
