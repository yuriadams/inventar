import { takeLatest, call, put } from 'redux-saga/effects';
import { clientActions } from 'api/actions/clients';

function* addSuccessfull() {
  console.log("FUCK!")
}

export default function* addClient() {
  yield takeLatest(clientActions.add, addSuccessfull);
}
