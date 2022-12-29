import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqDSBiSbnhEbY1xL0Z9tGSp6Xv9fJnRcg",
  authDomain: "proyecto-coder-react-3a399.firebaseapp.com",
  projectId: "proyecto-coder-react-3a399",
  storageBucket: "proyecto-coder-react-3a399.appspot.com",
  messagingSenderId: "884885924949",
  appId: "1:884885924949:web:dc62b2f4de933bfd01f8dc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
