import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import products from "./mocks/products.json";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq8tezqZWE8EWlfWitQv5TB2_jNFULrys",
  authDomain: "ecommerce-matias-romagnoli.firebaseapp.com",
  projectId: "ecommerce-matias-romagnoli",
  storageBucket: "ecommerce-matias-romagnoli.appspot.com",
  messagingSenderId: "601431545041",
  appId: "1:601431545041:web:1a69de852948e32764e1f0",
  measurementId: "G-P233SHWDS7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const db = getFirestore(app); */

/* products.forEach((products) =>{
  addDoc(collection(db, 'products'),)
  .then((docRef=>{
    console.log('documento agg con id', docRef.id)
  }))
  .catch((error)=>{
    console.error("error al agg doc", error)
  })
}) */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
