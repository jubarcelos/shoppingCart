// para concluir a questão 1 o Josué, Lucas, Brunão, Leandro e mais algumas pessoas que estavam na memorável sala 3 me ajudaram muito a parar de patinar, me ajudaram também nos testes da questão 4.
// para concluir os testes da questão 1 o prof Bernardo apareceu também e deu uma mini aula noturna para os alunos corujões.
// para a questão 7 o Lucas me deu um toque de posicionamento do remove que resolveu meu problema.
// para a 4 o Guilherme Augusto me deu uns toques bem legais e ele ficou acompanhando minha lógica para desenvolver a questão 5, fizemos bem diferentes, mas ele tava ali junto, então toma crédito!

const insertLoading = document.querySelector('.loading');
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

itemElements.addEventListener('click', cartItemClickListener);

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

window.onload = async () => {
  allProducts();
  setSavedCart();
  setCartPrice();
};
