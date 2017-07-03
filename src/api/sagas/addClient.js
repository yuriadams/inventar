import { takeLatest, call, put } from 'redux-saga/effects';
import actions from 'api/config/actions';

function* addSuccessfull() {
  console.log("FUCK!")
}

export default function* addClient() {
  yield takeLatest(actions.addClient, addSuccessfull);
}
