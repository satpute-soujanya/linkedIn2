import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyDPZhLD0BriXgNAnQz2_mhRJq4RaL5v9Q8',
  authDomain: 'linked-in-c4167.firebaseapp.com',
  projectId: 'linked-in-c4167',
  storageBucket: 'linked-in-c4167.appspot.com',
  messagingSenderId: '1083453109295',
  appId: '1:1083453109295:web:d3a4b672d5982c637042da',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
export { db, auth }
