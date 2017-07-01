import { fork } from 'redux-saga/effects';
import addClient from 'api/sagas/addClient';

function* rootSaga() {
  yield fork(addClient);
}

export default rootSaga;
