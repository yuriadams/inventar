import { takeLatest, call, put } from 'redux-saga/effects';
import actions from 'api/config/actions';

function* deleteSuccessfull() {
  console.log("FUCK DELETE ITEM!")
}

export default function* deleteItem() {
  yield takeLatest(actions.deleteItem, deleteSuccessfull);
}
