import { fork } from 'redux-saga/effects';
import watchNavigation from 'api/sagas/navigation';
import addClient from 'api/sagas/addClient';
import editClient from 'api/sagas/editClient';
import deleteClient from 'api/sagas/deleteClient';
import deleteInventory from 'api/sagas/deleteInventory';
import insertManually from 'api/sagas/insertManually';
import insertBarCode from 'api/sagas/insertBarCode';

function* rootSaga() {
  yield fork(watchNavigation);
  yield fork(addClient);
  yield fork(editClient);
  yield fork(deleteClient);
  yield fork(deleteInventory);
  yield fork(insertManually);
  yield fork(insertBarCode);
}

export default rootSaga;
