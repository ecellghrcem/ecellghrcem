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

// Function to handle login
export async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User logged in:", user);

        // Store user info in Firestore
        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            lastLogin: new Date()
        });
        alert("Login successful");
    } catch (error) {
        console.error("Error logging in:", error);
        alert("Login failed. Please check your credentials.");
    }
}

// Track authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is logged in:", user.email);
        // Optionally, redirect or take actions
    } else {
        console.log("No user is signed in.");
    }
});
