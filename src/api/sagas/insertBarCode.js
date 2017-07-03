import { takeLatest, call, put } from 'redux-saga/effects';
import actions from 'api/config/actions';

function* insertBarCode() {
  console.log("INSERT CAMERA!")
}

export default function* addClient() {
  yield takeLatest(actions.insertBarCode, insertBarCode);
}
