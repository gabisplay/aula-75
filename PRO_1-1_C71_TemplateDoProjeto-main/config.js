import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyAm-0Tw0DU-_kCR9H5_3UjDbfiNOL3mrtc",
    authDomain: "projeto-a6988.firebaseapp.com",
    databaseURL: "https://projeto-a6988-default-rtdb.firebaseio.com",
    projectId: "projeto-a6988",
    storageBucket: "projeto-a6988.appspot.com",
    messagingSenderId: "743144634620",
    appId: "1:743144634620:web:f8c90d8880617b1f6abf79",
    measurementId: "G-Z1RRBW0VKF"
  }

};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
