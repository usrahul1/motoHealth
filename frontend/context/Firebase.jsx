import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
	const signUpUser = (email, password) => {
		createUserWithEmailAndPassword(firebaseAuth, email, password);
	};

	const signInUser = (email, password) => {
		signInWithEmailAndPassword(firebaseAuth, email, password);
	};

	const googleSignIn = () => signInWithPopup(firebaseAuth, googleProvider);

	const [user, setUser] = useState(null);

	useEffect(() => {
		onAuthStateChanged(firebaseAuth, (user) => {
			if (user) {
				setUser(user);
				// console.log(user);
			} else setUser(null);
		});
	});

	const isLoggedIn = user ? true : false;

	return (
		<FirebaseContext.Provider
			value={{
				signUpUser,
				signInUser,
				googleSignIn,
				isLoggedIn,
				handleCreateNewListing,
				listAllBooks,
				getImageURL,
				getBookById,
				placeOrder,
				fetchMyOrders,
			}}
		>
			{props.children}
		</FirebaseContext.Provider>
	);
};

export const useFirebase = () => useContext(FirebaseContext);
