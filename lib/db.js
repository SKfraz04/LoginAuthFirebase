import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    // Your Firebase configuration object
  };
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db };
