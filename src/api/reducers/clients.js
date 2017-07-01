import { fromJS } from 'immutable';

const initialState = fromJS({
  id_123:{
    id: 1,
    name: 'Casablanca',
    inventaries: 4,
  },
  id_456:{
    id: 2,
    name: 'Leroy Merlin',
    inventaries: 3,
  },
  id_789:{
    id: 3,
    name: 'Tok Stok',
    inventaries: 0,
  },
  id_7891:{
    id: 4,
    name: 'Tok Stok Washington',
    inventaries: 0,
  }
});

export default (state = initialState, action) => {
  return state;
}
