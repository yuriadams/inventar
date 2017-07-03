import { fromJS } from 'immutable';

const initialState = fromJS({
  id_123_inv:{
    id: 1,
    name: '23/06/2017 14:35 ',
    client_id: 3,
    itens: 5
  },
  id_456_inv:{
    id: 2,
    name: '30/06/2017 20:35 ',
    client_id: 3,
    itens: 2
  },
  id_789_inv:{
    id: 3,
    name: '01/07/2017 11:00 ',
    client_id: 3,
    itens: 10
  }
});

export default (state = initialState, action) => {
  return state;
}
