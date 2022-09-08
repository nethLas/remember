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
// console.log('process.env.VITE_SOME_KEY', import.meta.env);

const firebaseConfig = {
  apiKey: "AIzaSyByrPGMc6ozfloBtCeqPDSTx_XsF9gDYoA",
  authDomain: "rememberthem-5f0a2.firebaseapp.com",
  projectId: "rememberthem-5f0a2",
  storageBucket: "rememberthem-5f0a2.appspot.com",
  messagingSenderId: "240323565408",
  appId: "1:240323565408:web:6c49c2b47e0d5779b4f005"
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