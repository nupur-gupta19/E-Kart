import firebase from "firebase"
import 'firebase/firestore'
import "firebase/auth"

var firebaseApp = firebase.initializeApp({
  
})
var db = firebaseApp.firestore()
export const auth = firebaseApp.auth()
export {db};
