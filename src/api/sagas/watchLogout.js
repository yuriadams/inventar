import { takeLatest, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from 'api/config/actions'

function* prepareLogout() {
  yield window.firebase.auth().signOut();
  yield put(push('/login'));
}

export default function* watchLogout() {
  yield takeLatest(actions.logout, prepareLogout);
}
