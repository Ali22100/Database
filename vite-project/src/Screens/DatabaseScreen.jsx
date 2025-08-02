import React from 'react'

import { db } from '../config/firebase';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

const DatabaseScreen = () => {
    const saveData = async ()=>{
        let userObj={
            name:"hello",
            age:21,
        };

      

        const saveData = await addDoc(collection(db,"users"), userObj);
    
        console.log(saveData);
        
    }
  return (
    <button onClick={saveData}>asd</button>
  )
}

export default DatabaseScreen
