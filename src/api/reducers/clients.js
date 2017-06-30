import { fromJS } from 'immutable';

const initialState = fromJS({
  id_123:{
    id: 1,
    name: 'Maicol Santos',
    inventaries: 4,
  },
  id_456:{
    id: 2,
    name: 'Fulano de tal',
    inventaries: 3,
  },
  id_789:{
    id: 3,
    name: 'Beltrano de tal',
    inventaries: 0,
  }
});

export default (state = initialState, action) => {
  return state;
}
