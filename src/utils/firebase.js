import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDw6gcwMDycQezpLHEXYZ2b9uR0r629Yq4",
  authDomain: "fir-webauth-c73b5.firebaseapp.com",
  projectId: "fir-webauth-c73b5",
  storageBucket: "fir-webauth-c73b5.firebasestorage.app",
  messagingSenderId: "115018465290",
  appId: "1:115018465290:web:20ceecd288ab44e7655ff3",
  measurementId: "G-X3K0Y7N0LQ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
