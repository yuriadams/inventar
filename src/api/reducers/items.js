import { fromJS } from 'immutable';

const initialState = fromJS({
  id_item_1:{
    id: 1,
    name: 'Toalha de Mesa',
    barcode: 32345678890,
    quantity: 2,
    inventory_id: 1,
    img: 'http://havan.vteximg.com.br/arquivos/ids/2520599-1200-1200/toalha-de-mesa-quadrada-140x140-requinte-dohler-2-13.jpg'
  },
  id_item_2:{
    id: 2,
    name: 'Conjunto de Cama',
    barcode: 364236318979,
    quantity: 5,
    inventory_id: 1,
    img: 'https://images-americanas.b2w.io/produtos/01/00/item/129079/3/129079338_1GG.jpg'
  },
  id_item_3:{
    id: 3,
    name: 'Pano de Prato',
    barcode: 23536437458693,
    quantity: 0,
    inventory_id: 1,
    img: 'https://s-media-cache-ak0.pinimg.com/564x/bf/b2/ae/bfb2aecec155227d7e9388f0a19ef83b.jpg'
  },
  id_item_4:{
    id: 4,
    name: 'Lençol',
    barcode: 992075029571623,
    quantity: 4,
    inventory_id: 1,
    img: 'https://www.dicasemoda.com.br/wp-content/uploads/2011/08/Como-Dobrar-Len%C3%A7ol-com-El%C3%A1stico.jpg'
  },
  id_item_5:{
    id: 5,
    name: 'Fronha',
    barcode: 8236523896513,
    quantity: 1,
    inventory_id: 1,
    img: 'http://www.fortunata.com.br/store/media/catalog/product/cache/1/image/820x/040ec09b1e35df139433887a97daa66f/s/t/store.jpg'
  },
  id_item_6:{
    id: 6,
    name: 'Toalha de banho',
    barcode: 8236523800513,
    quantity: 2,
    inventory_id: 1,
    img: 'http://havan.vteximg.com.br/arquivos/ids/2307852-1200-1200/toalha-de-banho-lumina-karsten-13-46.jpg'
  },
});

export default (state = initialState, action) => {
  return state;
}
