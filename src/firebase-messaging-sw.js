importScripts('https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBviFQz5C3tVN2iDkpL5yqaUgwMCjZpmGs",
    authDomain: "snv-mart.firebaseapp.com",
    databaseURL: "https://snv-mart.firebaseio.com",
    projectId: "snv-mart",
    storageBucket: "snv-mart.appspot.com",
    messagingSenderId: "776194675648",
    appId: "1:776194675648:web:d568e82945faff1315ee25",
    measurementId: "G-6PW0VX90LP",
    vapidKey: "BN0culhVzemC5xRhMZu8AFw9BNyKsrUg3HMU5VUZnVX1wu53cPJuxxcdjPCRzqhaqr-2MRKxyqo3EoVmJrHBEwY"
  });

const messaging = firebase.messaging();

