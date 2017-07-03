import { takeLatest, call, put } from 'redux-saga/effects';
import actions from 'api/config/actions';

function* insertManually() {
  console.log("INSERT MANUAL!")
}

export default function* addClient() {
  yield takeLatest(actions.insertManually, insertManually);
}
