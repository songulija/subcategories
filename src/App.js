
import './App.css';
import React, { useState, useEffect } from 'react'
import firestore from './firebase/firebase'
import HomeScreen from './screens/HomeScreen';

function App() {

  //useState initial value & function to update it
  const [input, setInput] = useState('')
  const [parentId, setParentId] = useState('')


  const insertCategory = async () => {
    // add new document to Categories colection. doc() will auto add unique id
    //check if document with that parentId exist
    firestore.collection('Categories').doc().set({
      Category: input,
      ParentId: parentId
    }).then(() => {
      console.log("Document successfully written!");
      setInput('')
      setParentId('')
    }).catch((error) => {
      console.error("Error writing document: ", error);
    });
  }

  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
}

export default App;
