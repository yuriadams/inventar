import { takeLatest, call, put } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import actions from 'api/config/actions';

function* changedSuccesfull({ payload }) {
  yield put({ type: actions.openDialog, payload: {
      open: true,
      entityName: payload.props.entityName,
      textAction: payload.props.textAction,
      textProp: payload.props.textProp,
      formValue: payload.value,
      fn: payload.props.fn,
      callback: payload.props.callback,
      entity: payload.props.entity,
    }
  });
}

export default function* formValueChange() {
  yield takeLatest(actions.handleFormValueChange, changedSuccesfull);
}
