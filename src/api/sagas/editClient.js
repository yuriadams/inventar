import { takeLatest, call, put } from 'redux-saga/effects';
import actions from 'api/config/actions';

function* editSuccessfull() {
  console.log("FUCK EDIT!")
}

export default function* addClient() {
  yield takeLatest(actions.editClient, editSuccessfull);
}
