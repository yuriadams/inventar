import { takeLatest, call, put } from 'redux-saga/effects';
import { actions } from 'api/actions/clients';
import uuid from 'uuid';

function* addSuccessfull() {
  console.log("FUCK!")
}

export default function* addClient() {
  yield takeLatest(actions.add, addSuccessfull);
}
