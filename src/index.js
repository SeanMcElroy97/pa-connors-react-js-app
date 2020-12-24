import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import {BrowserRouter} from 'react-router-dom'
import  firebase  from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCdBmSFws3xP3HZ8YCDM0Wgq4BfwHd-1uM",
  authDomain: "paconnorsgfc.firebaseapp.com",
  databaseURL: "https://paconnorsgfc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "paconnorsgfc",
  storageBucket: "paconnorsgfc.appspot.com",
  messagingSenderId: "89619719007",
  appId: "1:89619719007:web:2141469f5de7abc264ccea",
  measurementId: "G-8MWESW1YHF"
};

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
