import { takeLatest, call, put } from 'redux-saga/effects';
import actions from 'api/config/actions';

function* updateSuccessfull({ payload }) {
  console.log("FUCK EDIT ITEM!", payload)
}

export default function* updateItem() {
  yield takeLatest(actions.updateItem, updateSuccessfull);
}
