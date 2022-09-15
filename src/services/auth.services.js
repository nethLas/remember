import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { FirebaseConfig } from "./firebaseConfig.js";




const app = initializeApp(FirebaseConfig);


const auth = getAuth();

async function signUp(email, password, phoneNumber, firstName, lastName, city) {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.email, "signed up successfully to auth DB");
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage);
    // ..
  });
}

export const AuthService = {
  signUp
}