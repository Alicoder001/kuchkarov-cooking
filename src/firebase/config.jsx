import { initializeApp } from "firebase/app";
import { onSnapshot } from "firebase/firestore";
import {
	getFirestore,
	collection,
	getDocs,
	getDoc,
	doc,
	addDoc,
	deleteDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseConfig = {
	apiKey: "AIzaSyDnm1eqHkBSb3B4oJGyhFuTp0owZR6X9hc",
	authDomain: "kuchkarov-cooking.firebaseapp.com",
	projectId: "kuchkarov-cooking",
	storageBucket: "kuchkarov-cooking.appspot.com",
	messagingSenderId: "330964414754",
	appId: "1:330964414754:web:23b1f46d6c7f1c9e59b57b",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, "recipies");
const useData = () => {
	const [data, setData] = useState(null);
	const [pending, setPending] = useState(false);
	const [error, setError] = useState(null);
	const getData = async () => {
		setPending(true);
		try {
			onSnapshot(colRef, (snapshot) => {
				const docsData = [];
				snapshot.docs.forEach((doc) => {
					docsData.push({ id: doc.id, ...doc.data() });
				});
				setPending(false);
				setData(docsData);
			});
		} catch (err) {
			setPending(false);
			setError(err.message);
		}
	};

	return { data, pending, error, getData };
};

const useItem = (id) => {
	const [data, setData] = useState(null);
	const [pending, setPending] = useState(false);
	const [error, setError] = useState(null);
	const getItem = async () => {
		setPending(true);
		try {
			const docRef = doc(db, "recipies", id);
			const docSnap = await getDoc(docRef);
			setPending(false);
			if (docSnap.exists()) {
				setData(docSnap.data());
			} else {
				throw new Error("No such document!");
			}
		} catch (err) {
			setPending(false);
			setError(err.message);
		}
	};

	return { data, error, pending, getItem };
};

// Add a new document in collection "cities"
const useAddData = () => {
	const addItem = async (item) => {
		await addDoc(collection(db, "recipies"), item);
	};

	return { addItem };
};

const deleteItem = async (id) => {
	await deleteDoc(doc(db, "recipies", id));
};
export { useData, useItem, useAddData, deleteItem };

// const useData = () => {
// 	const [data, setData] = useState(null);
// 	const [pending, setPending] = useState(false);
// 	const [error, setError] = useState(null);
// 	const getData = async () => {
// 		const docsData = [];
// 		setPending(true);
// 		try {
// 			const req = await getDocs(collection(db, "recipies"));
// 			req.docs.forEach((doc) => {
// 				docsData.push({ id: doc.id, ...doc.data() });
// 			});
// 			setPending(false);
// 			setData(docsData);
// 		} catch (err) {
// 			setPending(false);
// 			setError(err.message);
// 		}
// 	};

// 	return { data, pending, error, getData };
// };
