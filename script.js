function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}
function cartItemClickListener(event) {

}

function createCartItemElement({ sku, name, salePrice }) {
  const itemElements = document.querySelector('.cart__items');
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  itemElements.appendChild(li);
}
async function addItemToCart(sku) {
  const allItens = await fetchItem(sku);
  const { title: name, price: salePrice } = allItens;
  createCartItemElement({ sku, name, salePrice });
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  const productSection = document.querySelector('.items');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const addButton = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  addButton.addEventListener('click', () => {
    addItemToCart(sku);
  });
  section.appendChild(addButton);
  productSection.appendChild(section);
}

const allProducts = () => {
  fetchProducts('computador').then((response) => {
    response.results.forEach((products) => createProductItemElement(products));
  });
};

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

window.onload = () => {
  allProducts();
};
