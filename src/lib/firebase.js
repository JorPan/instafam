import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyA_RuWh5tBPIqtzZNy7eux_8qiaGpCG3Qs",
  authDomain: "instafammmmm.firebaseapp.com",
  projectId: "instafammmmm",
  storageBucket: "instafammmmm.appspot.com",
  messagingSenderId: "1017869244003",
  appId: "1:1017869244003:web:aabc169b92a380b7284a56",
  measurementId: "G-16MHY56P36",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//seedDatabase(firebase)
console.log("firebase", firebase);

export { firebase, FieldValue };
