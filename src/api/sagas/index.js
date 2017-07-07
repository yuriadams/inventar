import { fork } from 'redux-saga/effects';
import watchNavigation from 'api/sagas/navigation';
import addClient from 'api/sagas/addClient';
import editClient from 'api/sagas/editClient';
import deleteClient from 'api/sagas/deleteClient';
import updateItem from 'api/sagas/updateItem';
import deleteItem from 'api/sagas/deleteItem';
import searchItem from 'api/sagas/searchItem';
import deleteInventory from 'api/sagas/deleteInventory';
import searchManually from 'api/sagas/searchManually';
import searchBarCode from 'api/sagas/searchBarCode';
import formValueChange from 'api/sagas/formValueChange';

function* rootSaga() {
  yield fork(watchNavigation);
  yield fork(addClient);
  yield fork(editClient);
  yield fork(updateItem);
  yield fork(searchItem);
  yield fork(deleteClient);
  yield fork(deleteInventory);
  yield fork(deleteItem);
  yield fork(searchManually);
  yield fork(searchBarCode);
  yield fork(formValueChange);
}

export default rootSaga;
