import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBacVAoGDn8hnqyRmIU5wyQKmB5XQ-zDCY",
  authDomain: "resellit-fe727.firebaseapp.com",
  databaseURL: "https://resellit-fe727-default-rtdb.firebaseio.com",
  projectId: "resellit-fe727",
  storageBucket: "resellit-fe727.appspot.com",
  messagingSenderId: "1004841212027",
  appId: "1:1004841212027:web:f23185ce0e9c944a4e2ade",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage, app };
