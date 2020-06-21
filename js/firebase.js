//Initialize firebase (2)
const firebaseConfig = {
    apiKey: "AIzaSyBLWg1TEltttb3pHRM52ghNAAvraadGKaU",
    authDomain: "coinapp-cd164.firebaseapp.com",
    databaseURL: "https://coinapp-cd164.firebaseio.com",
    projectId: "coinapp-cd164",
    // storageBucket: "coinapp-cd164.appspot.com",
    // messagingSenderId: "500046127527",
    // appId: "1:500046127527:web:9c03b60f1d55fc474b9682",
    // measurementId: "G-LWNBB5LYCQ"
  };

  //Reference for form collection(3)
firebase.initializeApp(firebaseConfig);