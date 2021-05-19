import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7dKDrYGYsG2q5YE6CWPwf5NTjKiH6Obs",
  authDomain: "bingo-d82d9.firebaseapp.com",
  projectId: "bingo-d82d9",
  storageBucket: "bingo-d82d9.appspot.com",
  messagingSenderId: "319144252221",
  appId: "1:319144252221:web:d700f4eddeb0665c506b54",
  measurementId: "G-909TC3GNG6",
};

const fireApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
