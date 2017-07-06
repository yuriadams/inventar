import { takeLatest, call, put } from 'redux-saga/effects';
import actions from 'api/config/actions';

function* searchSuccessfull() {
  console.log("INSERT CAMERA!")
}

export default function* searchBarCode() {
  yield takeLatest(actions.searchBarCode, searchSuccessfull);
}
