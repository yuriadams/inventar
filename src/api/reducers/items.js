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
    img: 'https://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwialdOpmO7UAhVQPJAKHaAQDM8QjRwIBw&url=http%3A%2F%2Fwww.americanas.com.br%2Fcategoria%2Fcama-mesa-e-banho%2Fjogo-de-cama%2Fjogo-de-cama-casal&psig=AFQjCNEP5rB6G9NzS_hZss_SxaBBPay8GA&ust=1499208311466811'
  },
  id_item_3:{
    id: 3,
    name: 'Pano de Prato',
    barcode: 23536437458693,
    quantity: 0,
    inventory_id: 1,
    img: 'https://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiVuu61mO7UAhXIh5AKHVPaDPkQjRwIBw&url=https%3A%2F%2Fbr.pinterest.com%2Fexplore%2Fpanos-de-prato%2F&psig=AFQjCNHKqLBajoS6bq1jPL7MwtB5wkjZuw&ust=1499208338390971'
  },
  id_item_4:{
    id: 4,
    name: 'Lençol',
    barcode: 992075029571623,
    quantity: 4,
    inventory_id: 1,
    img: 'https://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiJpbvGmO7UAhVSl5AKHS5qAEUQjRwIBw&url=https%3A%2F%2Fwww.dicasemoda.com.br%2Fcomo-dobrar-lencol-com-elastico%2F&psig=AFQjCNH4TvCRq1y5z3W0_fY10rWJdu6XOA&ust=1499208357872064'
  },
  id_item_5:{
    id: 5,
    name: 'Fronha',
    barcode: 8236523896513,
    quantity: 1,
    inventory_id: 1,
    img: 'https://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiH18jSmO7UAhUJI5AKHRmYAZgQjRwIBw&url=http%3A%2F%2Fwww.fortunata.com.br%2Fstore%2Ffronhas.html&psig=AFQjCNHsls6N8G5q6Y_CndGnOYo4Oo7nmQ&ust=1499208395050280'
  },
});

export default (state = initialState, action) => {
  return state;
}
