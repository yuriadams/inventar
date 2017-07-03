import { takeLatest, call, put } from 'redux-saga/effects';
import actions from 'api/config/actions';

function* deleteSuccessfull() {
  console.log("FUCK DELETE!")
}

export default function* deleteClient() {
  yield takeLatest(actions.deleteClient, deleteSuccessfull);
}
