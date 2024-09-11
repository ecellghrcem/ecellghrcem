// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// Your web app's Firebase configuration
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
const auth = getAuth(app);
const db = getFirestore(app);

// Sign up and add user to Firestore
export const signUpUser = async (name, regNo, email, password) => {
    try {
        // Create a new user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Add user data to Firestore
        await setDoc(doc(db, "users", user.uid), {
            name: name,
            regNo: regNo,
            email: email,
            uid: user.uid,
            createdAt: new Date()
        });
        alert("Sign up successful!");
    } catch (error) {
        console.error("Error signing up: ", error);
        alert(error.message);
    }
};