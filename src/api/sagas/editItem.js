import { takeLatest, call, put } from 'redux-saga/effects';
import actions from 'api/config/actions';

function* editSuccessfull() {
  console.log("FUCK EDIT ITEM!")
}

export default function* editItem() {
  yield takeLatest(actions.editItem, editSuccessfull);
}
