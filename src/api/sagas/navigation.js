import { takeLatest, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from 'api/config/actions';

function* navigate({ payload }) {
  switch (payload.to) {
    case 'inventories':
      yield put(push(`/clients/${payload.memberId}/inventories`));
      break;
    case 'items':
      yield put(push(`/inventories/${payload.memberId}/items`));
      break;
    default:
      console.log('Sorry, we are out of ' + payload + '.');
  }
}

export default function* watchNavigation() {
  yield takeLatest(actions.navigate, navigate);
}
