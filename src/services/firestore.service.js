import { initializeApp } from "firebase/app";
import {
    addDoc, collection, deleteDoc, getDoc, doc,
    getDocs, getFirestore, updateDoc, query, orderBy, startAt, endAt
} from "firebase/firestore";

export const firebaseService = {
    queryData,
    getEntityById,
    saveEntity,
    removeEntity,
}

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//Gets a Collection Reference
const heroRef = collection(db, 'Hero')
// @TODO: need to add Hero collection like tasksRef

async function queryData(filterBy) {
    let q = heroRef
    if (filterBy?.txt) {
        const txt = filterBy.txt.toLowerCase()
        q = query(heroRef, orderBy("title"), startAt(txt), endAt(txt + '\uf8ff'))
    }else q = query(heroRef)
    try {
        const heroSnapshot = await getDocs(q)
        return heroSnapshot.docs.map((doc) => {
            return { _id: doc.id, ...doc.data() }
        })
    } catch (e) {
        console.error("Error geting documents: ", e);
    }
}

async function getEntityById(entityId) {
    const docRef = doc(heroRef, entityId)
    try {
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            return { _id: entityId, ...docSnap.data() }
        } else {
            console.log('No such document!')
        }
    } catch (e) {
        console.error("Error finding document: ", e);
    }
}

async function saveEntity(entity) {
    if (entity._id) {
        const copyEntitiy = JSON.parse(JSON.stringify(entity))
        const entityRef = doc(heroRef, entity._id)
        delete copyEntitiy._id
        try {
            await updateDoc(entityRef, copyEntitiy)
            return entity
        } catch (e) {
            console.error("Error updating document: ", e);
        }
    } else {
        try {
            const hero = await addDoc(heroRef, entity)
            return { _id: hero.id, ...entity }
        } catch (e) {
            console.error("Error saving document: ", e);
        }
    }
}

async function removeEntity(entityId) {
    try {
        await deleteDoc(doc(heroRef, entityId))
    } catch (e) {
        console.error("Error deleting document: ", e);
    }
}