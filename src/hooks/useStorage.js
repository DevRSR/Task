import { useState, useEffect } from 'react';
import { ref, getDownloadURL,uploadBytesResumable } from 'firebase/storage';
import { collection,serverTimestamp, addDoc  } from 'firebase/firestore';
import { projectStorage, db } from '../Firebase/Config.js';

const useStorage = (file) => {
  
  const [progress,setProgress] = useState(0)
  const [error,setError] = useState(null)
  
  
  useEffect(() => {
    const storageRef = ref(projectStorage,file.name);
    const colRef = collection(db, 'images');
    const uploadTask = uploadBytesResumable(storageRef,file)
    
   uploadTask.on('state_changed',(snap) => {
    let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage)
    }, (err) => {
      setError(err.message)
    },() => {
    getDownloadURL(uploadTask.snapshot.ref).then((sou) => {
        const createdAt = serverTimestamp();
        addDoc(colRef, {
          url: sou,
          createdAt
        }) 
      })
    })
  },[file]);
  return { progress, error }
}

export default useStorage;