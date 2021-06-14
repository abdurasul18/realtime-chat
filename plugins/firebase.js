import Vue from 'vue';
import firebase from 'firebase/app';
require('firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyB4AN4p4LCoLYcXGGO0N40M2avaAJEqUdU",
    authDomain: "realtime-chat-5ee16.firebaseapp.com",
    projectId: "realtime-chat-5ee16",
    storageBucket: "realtime-chat-5ee16.appspot.com",
    messagingSenderId: "38981368696",
    appId: "1:38981368696:web:5a994802e36122bf03a68d"
  };
  firebase.initializeApp(firebaseConfig)
  var db = firebase.firestore()
  db.settings({
      timestampsInSnapShots : true
  })
  window.db= db
  Vue.use(firebase)
