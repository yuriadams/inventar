import { takeLatest, call, put } from 'redux-saga/effects';
import { clientActions } from 'api/actions/clients';

function* deleteSuccessfull() {
  console.log("FUCK DELETE!")
}

export default function* addClient() {
  yield takeLatest(clientActions.delete, deleteSuccessfull);
}
