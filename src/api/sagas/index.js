import { fork } from 'redux-saga/effects';
import watchNavigation from 'api/sagas/navigation';
import addClient from 'api/sagas/addClient';
import editClient from 'api/sagas/editClient';
import deleteClient from 'api/sagas/deleteClient';

function* rootSaga() {
  yield fork(watchNavigation);
  yield fork(addClient);
  yield fork(editClient);
  yield fork(deleteClient);
}

export default rootSaga;
