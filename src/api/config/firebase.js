import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyDF8QusstyjG6K4xRFbabmsGs3se3WYA_o",
  authDomain: "addressbook-4960c.firebaseapp.com",
  databaseURL: "https://addressbook-4960c.firebaseio.com",
  projectId: "addressbook-4960c",
  storageBucket: "addressbook-4960c.appspot.com",
  messagingSenderId: "71457068040"
};
firebase.initializeApp(config);

window.firebase = firebase;
