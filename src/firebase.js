import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAH2HpXDB17hbTtP2wXGpTIG3-1Cdv_Gvk",
  authDomain: "whatsapp-clone-48dc7.firebaseapp.com",
  projectId: "whatsapp-clone-48dc7",
  storageBucket: "whatsapp-clone-48dc7.appspot.com",
  messagingSenderId: "226901209556",
  appId: "1:226901209556:web:e3b2f9f2680d1d32b66641",
  measurementId: "G-1R7716K2BS"
};
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;