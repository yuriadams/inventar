import { fromJS } from 'immutable';
import actions from 'api/config/actions'

const initialState = fromJS({
  modalProps: {
    open: false,
    textAction: '',
    textProp: '',
    entityName: '',
    formValue: '',
    entity: {},
    fn: () => {
      return false;
    },
    callback: () => {
      return false;
    },
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
        formValue: action.payload.formValue,
        entity: action.payload.entity,
        fn: action.payload.fn,
        callback: action.payload.callback,
      }
    })
  }

  return state;
}
