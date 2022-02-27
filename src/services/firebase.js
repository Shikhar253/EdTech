import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyAluVbyLpBiASdZB4sJ3TQY2tFK0MspPTA",
  authDomain: "edutech-1d4e1.firebaseapp.com",
  projectId: "edutech-1d4e1",
  storageBucket: "edutech-1d4e1.appspot.com",
  messagingSenderId: "215407200653",
  appId: "1:215407200653:web:0921780701841ac9d255c4",
  measurementId: "G-6XYK4RK88X"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export { firestore, auth, app }
