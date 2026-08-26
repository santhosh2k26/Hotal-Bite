// Firebase Configuration & Google Authentication Module
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut, 
    onAuthStateChanged,
    setPersistence,
    browserLocalPersistence,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

// Web app's Firebase configuration provided by user
const firebaseConfig = {
    apiKey: "AIzaSyBizIccZUFgxTGQNfGsMc-eV-cLTz9lwY4",
    authDomain: "sy-order-management-c8c22.firebaseapp.com",
    projectId: "sy-order-management-c8c22",
    storageBucket: "sy-order-management-c8c22.firebasestorage.app",
    messagingSenderId: "521788140285",
    appId: "1:521788140285:web:de3a11d3a1d7641103ec94",
    measurementId: "G-1LSG8V8BS7"
};

// Initialize Firebase Core
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics if supported
let analytics = null;
isSupported().then((supported) => {
    if (supported) {
        analytics = getAnalytics(app);
        console.log("Firebase Analytics active");
    }
}).catch((err) => {
    console.log("Firebase Analytics check:", err);
});

// Initialize Firebase Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Ensure session persistence across page reloads
setPersistence(auth, browserLocalPersistence).catch((err) => {
    console.warn("Persistence configuration notice:", err);
});

// Clean Firebase Auth Service exposed to application
window.FirebaseAuthService = {
    app,
    auth,
    getAnalytics: () => analytics,
    onAuthStateChange: (callback) => onAuthStateChanged(auth, callback),
    signInWithGoogle: async () => {
        try {
            await setPersistence(auth, browserLocalPersistence);
        } catch (e) {
            console.warn("Persistence setting notice:", e);
        }
        return signInWithPopup(auth, googleProvider);
    },
    signInWithEmail: async (email, password) => {
        try {
            await setPersistence(auth, browserLocalPersistence);
        } catch (e) {
            console.warn("Persistence setting notice:", e);
        }
        return signInWithEmailAndPassword(auth, email, password);
    },
    registerWithEmail: async (email, password, displayName) => {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        if (displayName && userCred.user) {
            await updateProfile(userCred.user, { displayName });
        }
        return userCred;
    },
    resetPassword: (email) => sendPasswordResetEmail(auth, email),
    logout: () => signOut(auth),
    getCurrentUser: () => auth.currentUser
};

// Dispatch readiness event so listeners know service is initialized
window.dispatchEvent(new CustomEvent('firebase-ready', { detail: window.FirebaseAuthService }));
console.log("Firebase & Google Auth initialized successfully for SY Order Management");
