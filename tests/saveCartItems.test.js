const saveCartItems = require('../helpers/saveCartItems');

Object.defineProperty(window, 'localStorage', {
  value: {
    setItem: jest.fn(),
  },
});

describe('4 - Teste a função saveCartItems', () => {
  it ('A chamada de saveCartItems("<ol><li>Item</li></ol>" retorna o localStorage) ', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it ('Ao executar a função, o método localStorage.getItem é chamado com o parâmetro `cartItems`', () => {
    saveCartItems('cartItems');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems','<ol><li>Item</li></ol>' );
  });
});
