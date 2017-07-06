import { takeLatest, call, put } from 'redux-saga/effects';
import actions from 'api/config/actions';

function* updateSuccessfull() {
  console.log("FUCK EDIT ITEM!")
}

export default function* updateItem() {
  yield takeLatest(actions.updateItem, updateSuccessfull);
}
