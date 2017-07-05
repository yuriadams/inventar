import { fromJS } from 'immutable';
import actions from 'api/config/actions'

const initialState = fromJS({
  modalProps: { open: false }
});

export default (state = initialState, action) => {
  if (action.type === actions.toggleModal) {
    return fromJS({
      modalProps: { open: action.payload }
    })
  }

  return state;
}
