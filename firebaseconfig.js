import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Your Firebase configuration details
const firebaseConfig = {
    apiKey: "AIzaSyBg1RAWUGjcPUzljJE1AOBRz1Yqz7VNg4k",
    authDomain: "ecellghrecm1.firebaseapp.com",
    projectId: "ecellghrecm1",
    storageBucket: "ecellghrecm1.appspot.com",
    messagingSenderId: "462234501811",
    appId: "1:462234501811:web:3400c04e97f7a0e2b4a6c6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  
  // Function to handle user registration
  export const signUpUser = async (name, regNo, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Optionally save additional user info to Firestore or Realtime Database
      console.log("User created: ", user);
      alert(`Welcome, ${name}! You have signed up successfully.`);
  
      // Redirect to homepage after successful sign-up
      window.location.href = 'index.html';
    } catch (error) {
      console.error(`Error [${error.code}]: ${error.message}`);
      alert(`Sign-up failed: ${error.message}`);
    }
  };
 
