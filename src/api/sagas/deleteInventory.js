import { takeLatest, call, put } from 'redux-saga/effects';
import actions from 'api/config/actions';

function* deleteSuccessfull() {
  console.log("FUCK DELETE INVENTORY!")
}

export default function* deleteInventory() {
  yield takeLatest(actions.deleteInventory, deleteSuccessfull);
}
