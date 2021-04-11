import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBa0XFLnJ0UnW0XUgX861LOPAaJvQ-o4-U",
    authDomain: "subcategories-87921.firebaseapp.com",
    projectId: "subcategories-87921",
    storageBucket: "subcategories-87921.appspot.com",
    messagingSenderId: "830640049969",
    appId: "1:830640049969:web:c28db6286f9214140baa10",
    measurementId: "G-TZMPWZEXGV"
  };

  //initializing firebaseApp & providing config for app
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  //getting hold of firestore
  const firestore = firebaseApp.firestore()

  export default firestore;