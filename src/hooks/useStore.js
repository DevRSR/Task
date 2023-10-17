import { useState, useEffect } from 'react';
import { 
  collection,orderBy,query,
  onSnapshot
} from 'firebase/firestore'
import { db } from '../Firebase/Config'

const useStore = ( col ) => {
  
  const [docs, setDoc] = useState([]);
  
  useEffect(() => {
    const colRef = collection(db,col);
    const q = query(colRef,orderBy('createdAt','desc'));
    
   const unsub = onSnapshot(q,(snap) => {
      let documents = [];
      snap.docs.forEach(doc => {
        documents.push({...doc.data(), id: doc.id })
      })
      setDoc(documents)
    })
    return () => unsub();
  },[col])
  
  return { docs }
}
export default useStore;