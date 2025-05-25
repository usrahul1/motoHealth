"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
	signOut,
	updateProfile,
} from "firebase/auth";
import { toast } from "react-hot-toast";

// Firebase config
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

// Create context
const FirebaseContext = createContext(null);

// Provider component
export const FirebaseProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		onAuthStateChanged(firebaseAuth, (user) => {
			if (user) {
				setUser(user);
				profDetails();
			} else setUser(null);
		});
	}, []);

	// Auth functions
	const signUpUser = async (email, password) => {
		return await createUserWithEmailAndPassword(firebaseAuth, email, password);
	};

	const signInUser = async (email, password) => {
		return await signInWithEmailAndPassword(firebaseAuth, email, password);
	};

	const googleSignIn = async () => {
		return await signInWithPopup(firebaseAuth, googleProvider);
	};

	const profDetails = () => {
		try {
			if (user) {
				const createdAt = user.metadata.creationTime;
				const createdDate = new Date(createdAt).toDateString();

				const lastLogin = user.metadata.lastSignInTime;
				const lastLoginDate = new Date(lastLogin).toDateString();

				return {
					id: user.uid,
					name: user.displayName,
					email: user.email,
					photoURL: user.photoURL,
					createdAt: createdDate,
					lastLoggedIn: lastLoginDate,
				};
			}
			return null;
		} catch (error) {
			toast.error(`Error: ${error.message}`);
			return null;
		}
	};

	const isLoggedIn = user ? true : false;

	const logOut = async () => {
		try {
			await signOut(firebaseAuth);
		} catch (error) {
			toast.error(`Error: ${error.message}`);
		}
	};

	const updateUserName = async (newName) => {
		try {
			await updateProfile(user, {
				displayName: newName,
			});
			console.log("User name updated successfully!");
		} catch (error) {
			console.error("Failed to update user name:", error.message);
		}
	};

	return (
		<FirebaseContext.Provider
			value={{
				user,
				isLoggedIn,
				signUpUser,
				signInUser,
				googleSignIn,
				profDetails,
				logOut,
				updateUserName,
			}}
		>
			{children}
		</FirebaseContext.Provider>
	);
};

// Custom hook
export const useFirebase = () => useContext(FirebaseContext);
