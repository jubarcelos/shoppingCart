const fetchSimulator = require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

window.fetch = jest.fn(fetchSimulator);

describe('2 - Teste a função fecthItem', () => {
  it ('A fetchItem é uma função?', async () => {
    await fetchItem();
    expect(typeof fetchItem).toBe('function');
  });
  it ('A fetchItem("MLB1615760527")', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it ('A função fetchItem foi chamada com o argumento correto?', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527')
  });
  it ('Se a chamada da função fetchItem("MLB1615760527") retorna uma estrutura de dados igual ao objeto item', async () => {
    const result = await fetchItem('MLB1615760527');
    expect(result).toEqual(item);
  });
  it ('Se a chamada da função fetchItem() retorna uma mensagem de erro', async () => {
    const error = new Error ('You must provide an url');
    const result = await fetchItem();
    expect(result).toEqual(error);
  })
});
