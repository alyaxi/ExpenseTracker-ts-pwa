importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCUCMv6x5yP03TjfYIjgKpiYWOvOTI2dz8",
    authDomain: "expensetrackerpwa-e2b27.firebaseapp.com",
    databaseURL: "https://expensetrackerpwa-e2b27.firebaseio.com",
    projectId: "expensetrackerpwa-e2b27",
    storageBucket: "expensetrackerpwa-e2b27.appspot.com",
    messagingSenderId: "1044073815997",
    appId: "1:1044073815997:web:fa2749fafae2898b48fcd4"
  };

firebase.initializeApp(firebaseConfig) // pass the object that you have created above.
firebase.messaging();