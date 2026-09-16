// Firebase Configuration & Google Authentication + Firestore Module
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
import { 
    getFirestore, 
    collection, 
    doc, 
    setDoc, 
    getDoc, 
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot, 
    query, 
    where, 
    orderBy, 
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

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

// Initialize Cloud Firestore
const db = getFirestore(app);

// Ensure session persistence across page reloads
setPersistence(auth, browserLocalPersistence).catch((err) => {
    console.warn("Persistence configuration notice:", err);
});

// Expose Firestore API and helpers globally
window.FirebaseDB = {
    db,
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot,
    query,
    where,
    orderBy,
    serverTimestamp,
    // Order helper methods
    saveOrder: async (orderData) => {
        try {
            const docRef = await addDoc(collection(db, "orders"), {
                ...orderData,
                createdAt: serverTimestamp()
            });
            return docRef.id;
        } catch (error) {
            console.error("Firestore saveOrder error:", error);
            throw error;
        }
    },
    getOrders: async () => {
        try {
            const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
            const snap = await getDocs(q);
            return snap.docs.map(d => ({ id: d.id, ...d.data() }));
        } catch (error) {
            console.error("Firestore getOrders error:", error);
            throw error;
        }
    },
    listenOrders: (callback) => {
        const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
        return onSnapshot(q, (snapshot) => {
            const orders = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            callback(orders);
        }, (error) => {
            console.error("Firestore listenOrders error:", error);
        });
    },
    // Tables state helpers
    saveTablesState: async (tablesData) => {
        try {
            await setDoc(doc(db, "hotel_state", "tables"), {
                tables: tablesData,
                updatedAt: serverTimestamp()
            });
        } catch (error) {
            console.error("Firestore saveTablesState error:", error);
            throw error;
        }
    },
    listenTablesState: (callback) => {
        return onSnapshot(doc(db, "hotel_state", "tables"), (docSnap) => {
            if (docSnap.exists()) {
                callback(docSnap.data().tables);
            }
        }, (error) => {
            console.error("Firestore listenTablesState error:", error);
        });
    }
};

// Clean Firebase Auth Service exposed to application
window.FirebaseAuthService = {
    app,
    auth,
    db,
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

// Auto-test Firestore Connection on startup
async function testFirestoreConnection() {
    try {
        const testDocRef = doc(db, "_connection_test", "ping");
        await setDoc(testDocRef, { 
            status: "connected", 
            timestamp: serverTimestamp(),
            app: "HotelBite"
        });
        console.log("%c[Firestore] Connection Successful & Active!", "color: #10b981; font-weight: bold; font-size: 14px;");
    } catch (err) {
        console.warn("%c[Firestore Setup Required]", "color: #f59e0b; font-weight: bold; font-size: 13px;", err.message);
        if (err.code === "permission-denied") {
            console.warn("👉 Fix: Go to Firebase Console -> Firestore Database -> Rules tab and set 'allow read, write: if true;'");
        } else if (err.code === "not-found" || err.message.includes("database")) {
            console.warn("👉 Fix: Go to Firebase Console -> Click 'Create database' under Firestore Database.");
        }
    }
}
testFirestoreConnection();

// Dispatch readiness event so listeners know services are initialized
window.dispatchEvent(new CustomEvent('firebase-ready', { 
    detail: { 
        authService: window.FirebaseAuthService, 
        dbService: window.FirebaseDB 
    } 
}));
console.log("Firebase Auth & Cloud Firestore module loaded successfully for SY Order Management");

