import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCUCMv6x5yP03TjfYIjgKpiYWOvOTI2dz8",
    authDomain: "expensetrackerpwa-e2b27.firebaseapp.com",
    databaseURL: "https://expensetrackerpwa-e2b27.firebaseio.com",
    projectId: "expensetrackerpwa-e2b27",
    storageBucket: "expensetrackerpwa-e2b27.appspot.com",
    messagingSenderId: "1044073815997",
    appId: "1:1044073815997:web:fa2749fafae2898b48fcd4"
  };
firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging();
export function initNotification() {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === 'granted'){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("Token: ");
                    console.log(currentToken);
                } else {
                  console.log('No registration token available. Request permission to generate one.');
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                
              });
        }
    
    })
}