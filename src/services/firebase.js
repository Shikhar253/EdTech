import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyAl6n-Ws-btSCuonsJCgMlspW6sEg3kkXI",
  authDomain: "good-space-1b61c.firebaseapp.com",
  projectId: "good-space-1b61c",
  storageBucket: "good-space-1b61c.appspot.com",
  messagingSenderId: "225114188693",
  appId: "1:225114188693:web:1a5393ab7115b6f759649c",
  measurementId: "G-6LPVK0DSSR"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export {firestore, auth, app}
