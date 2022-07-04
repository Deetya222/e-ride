import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC0RocStj7cP56-HRsMU0sNB6Mra0KiVfI",
  authDomain: "e-ride-f9ee1.firebaseapp.com",
  projectId: "e-ride-f9ee1",
  storageBucket: "e-ride-f9ee1.appspot.com",
  messagingSenderId: "737504852",
  appId: "1:737504852:web:fbb495d6fd7b6db12ec7c1"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
