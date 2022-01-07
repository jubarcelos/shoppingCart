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
    const itemPrice = item.innerText.split('PRICE UNI: R$');
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
  const prices = getAllPrices();
  const total = prices.reduce((acc, current) => acc + current, 0);
  totalToPay.innerHTML = `Total R$: ${total.toFixed(2)}`;
  // console.log(prices);
}

function cartItemClickListener(event) {
  if (event.target.className !== 'cart__item') {
    event.target.parentNode.parentNode.remove();
  }
  if (event.target.className !== 'cart') {
    event.target.remove();
  }
  saveCartItems(itemElements.innerHTML);
  setCartPrice();
}

itemElements.addEventListener('click', cartItemClickListener);
async function createCartItemElement({ sku, name, salePrice, image }) {
  const li = document.createElement('li');
  const div = document.createElement('div');
  const nameCart = document.createElement('p');
  const img = document.createElement('img');
  img.src = image;
  li.className = 'cart__item';
  div.className = 'image-price';
  img.className = 'cart-img';
  nameCart.className = 'textCart';
  nameCart.innerText = `SKU: ${sku}
  NAME: ${name}
  PRICE UNI: R$${salePrice}`;
  div.appendChild(img);
  div.appendChild(nameCart);
  li.appendChild(div);
  li.addEventListener('click', cartItemClickListener);
  itemElements.appendChild(li);
  setCartPrice();
}

async function addItemToCart(sku) {
  const allItens = await fetchItem(sku);
  const { title: name, price: salePrice, thumbnail: image } = allItens;
  createCartItemElement({ sku, image, name, salePrice });
  setCartPrice();
  saveCartItems(itemElements.innerHTML);
}

function createProductItemElement({ id: sku, price: salePrice, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  const productSection = document.querySelector('.items');
  section.className = 'item';
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('span', 'item__price', `Valor: R$ ${salePrice}`));
  const addButton = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  section.appendChild(addButton);
  productSection.appendChild(section);
  addButton.addEventListener('click', () => {
    saveCartItems(itemElements.innerHTML);
    addItemToCart(sku);
  });
}

const searchProducts = document.querySelector('.search-button');
const search = document.querySelector('#search');
  function changeProducts() {
    insertLoading.innerText = 'Loading...';
    const section = document.querySelector('.items');
    section.innerHTML = '';
    fetchProducts(search.value).then((response) => {
      response.results.forEach((products) => createProductItemElement(products));
      insertLoading.innerText = '';
    });
    search.value = '';
  };

  searchProducts.addEventListener('click', changeProducts);
  search.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      changeProducts();
    }
  });

  const allProducts = () => {
    fetchProducts('computador').then((response) => {
      response.results.forEach((products) => createProductItemElement(products));
      insertLoading.innerText = '';
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
