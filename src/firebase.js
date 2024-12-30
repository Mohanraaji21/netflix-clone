import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword,
    signOut} from "firebase/auth";
import { 
    addDoc, 
    collection, 
    getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZolGUwBYqYjU8JM0muMPWvTiNmuH4Un4",
  authDomain: "netflix-clone-bf9c5.firebaseapp.com",
  projectId: "netflix-clone-bf9c5",
  storageBucket: "netflix-clone-bf9c5.firebasestorage.app",
  messagingSenderId: "91135963918",
  appId: "1:91135963918:web:3565f9787470a667259d5f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const login = async(email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};