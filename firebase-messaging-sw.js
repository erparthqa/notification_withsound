importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBDswpCQP0RYtKWrXhv9SnA9gkRxnE_EOg",
    authDomain: "web-test-462bb.firebaseapp.com",
    databaseURL: "https://web-test-462bb.firebaseio.com",
    projectId: "web-test-462bb",
    storageBucket: "web-test-462bb.appspot.com",
    messagingSenderId: "547115742706",
    appId: "1:547115742706:web:ac204f317be9dfa610676b",
    measurementId: "G-9RPKWD1XY8"
  };

  firebase.initializeApp(config);
  const messaging = firebase.messaging();
