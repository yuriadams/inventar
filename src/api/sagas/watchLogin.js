import { takeLatest, put } from 'redux-saga/effects';
import actions from 'api/config/actions'

function* prepareLoginGoogle() {
  const authProvider = new window.firebase.auth.GoogleAuthProvider();
  const { user: payload } = yield window.firebase.auth().signInWithPopup(authProvider);
  const { displayName, photoURL, email, uid } = payload;
  const ref =  yield window.firebase.database().ref(`/users/${uid}`);
  yield ref.update({ displayName, photoURL, email });
}

function* prepareLogin({ payload }) {
  console.log(payload)
}

export default function* watchLogin() {
  yield takeLatest(actions.loginGoogle, prepareLoginGoogle);
  yield takeLatest(actions.login, prepareLogin);
}
