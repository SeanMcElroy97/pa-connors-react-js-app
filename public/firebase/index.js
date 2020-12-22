import firebase from "firebase/app";
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCdBmSFws3xP3HZ8YCDM0Wgq4BfwHd-1uM",
    authDomain: "paconnorsgfc.firebaseapp.com",
    projectId: "paconnorsgfc",
    storageBucket: "paconnorsgfc.appspot.com",
    messagingSenderId: "89619719007",
    appId: "1:89619719007:web:2141469f5de7abc264ccea",
    measurementId: "G-8MWESW1YHF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}
//   firebase.analytics();