import { takeLatest, call, put } from 'redux-saga/effects';
import { clientActions } from 'api/actions/clients';

function* editSuccessfull() {
  console.log("FUCK EDIT!")
}

export default function* addClient() {
  yield takeLatest(clientActions.edit, editSuccessfull);
}
