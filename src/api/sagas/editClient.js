import { takeLatest, call, put } from 'redux-saga/effects';
import actions from 'api/config/actions';

function* editSuccessfull({ payload }) {
  console.log(payload, "EDIT")
}

export default function* addClient() {
  yield takeLatest(actions.editClient, editSuccessfull);
}
