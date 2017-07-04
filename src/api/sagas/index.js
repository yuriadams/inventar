import { fork } from 'redux-saga/effects';
import watchNavigation from 'api/sagas/navigation';
import addClient from 'api/sagas/addClient';
import editClient from 'api/sagas/editClient';
import deleteClient from 'api/sagas/deleteClient';
import editItem from 'api/sagas/editItem';
import deleteItem from 'api/sagas/deleteItem';
import searchItem from 'api/sagas/searchItem';
import deleteInventory from 'api/sagas/deleteInventory';
import insertManually from 'api/sagas/insertManually';
import insertBarCode from 'api/sagas/insertBarCode';

function* rootSaga() {
  yield fork(watchNavigation);
  yield fork(addClient);
  yield fork(editClient);
  yield fork(editItem);
  yield fork(searchItem);
  yield fork(deleteClient);
  yield fork(deleteInventory);
  yield fork(deleteItem);
  yield fork(insertManually);
  yield fork(insertBarCode);
}

export default rootSaga;
