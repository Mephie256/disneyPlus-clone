import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZsxeNOVP79z4HB6kPazrhTRXG1WsvPLo",
  authDomain: "incred-disneyplusclone.firebaseapp.com",
  projectId: "incred-disneyplusclone",
  storageBucket: "incred-disneyplusclone.appspot.com",
  messagingSenderId: "1062593534096",
  appId: "1:1062593534096:web:aeae8ca6c1959f1b2f6015",
  measurementId: "G-QXGWMD88QT"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;