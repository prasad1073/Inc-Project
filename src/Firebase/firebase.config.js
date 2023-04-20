import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDL4HUrwhxSBV44WwveSTkPC6FzXFlld2o",
  authDomain: "brain-tumor-636d3.firebaseapp.com",
  databaseURL: "https://brain-tumor-636d3-default-rtdb.firebaseio.com",
  projectId: "brain-tumor-636d3",
  storageBucket: "brain-tumor-636d3.appspot.com",
  messagingSenderId: "57427899254",
  appId: "1:57427899254:web:8edd41d27df5de8b4ac057",
  measurementId: "G-PYRL3NVS48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default firebaseConfig;