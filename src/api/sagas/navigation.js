import { takeLatest, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from 'api/config/actions';

function* navigate({ payload }) {
  console.log(payload);
  switch (payload.to) {
    case 'inventories':
      yield put(push(`/clients/${payload.memberId}/inventories`));
      break;
    default:
      console.log('Sorry, we are out of ' + payload + '.');
  }
}

export default function* watchNavigation() {
  yield takeLatest(actions.navigate, navigate);
}
