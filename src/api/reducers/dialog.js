import { fromJS } from 'immutable';
import actions from 'api/config/actions'

const initialState = fromJS({
  modalProps: {
    open: false,
    textAction: '',
    textProp: '',
    entityName: '',
    entity: {},
    fn: () => {
      return false;
    }
  }
});

export default (state = initialState, action) => {
  if (action.type === actions.openDialog) {
    return fromJS({
      modalProps: {
        open: action.payload.open,
        entityName: action.payload.entityName,
        textAction: action.payload.textAction,
        textProp: action.payload.textProp,
        entity: action.payload.entity,
        fn: action.payload.fn
      }
    })
  }

  return state;
}
