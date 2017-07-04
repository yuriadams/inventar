import { takeLatest, call, put } from 'redux-saga/effects';
import actions from 'api/config/actions';

function* searchSuccessfull({ payload }) {
  console.log(payload);
}

export default function* searchItem() {
  yield takeLatest(actions.searchItem, searchSuccessfull);
}
