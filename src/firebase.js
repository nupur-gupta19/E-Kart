import firebase from "firebase"
import 'firebase/firestore'
import "firebase/auth"

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBjmHeRajO2FGJ48xsNUvbaibRyNUp1cB4",
  authDomain: "temp-b2e0d.firebaseapp.com",
  databaseURL: "https://temp-b2e0d-default-rtdb.firebaseio.com",
  projectId: "temp-b2e0d",
  storageBucket: "temp-b2e0d.appspot.com",
  messagingSenderId: "327849470486",
  appId: "1:327849470486:web:dff061207d43d00ebb6337",
  measurementId: "G-8YMTB8EQ7P"
})
var db = firebaseApp.firestore()
export const auth = firebaseApp.auth()
export {db};
