
import './App.css';
import React, {useState, useEffect} from 'react'
import firestore from './firebase/firebase'
import firebase from 'firebase'

function App() {

  //useState initial value & function to update it
  const [input, setInput] = useState('')
  const [parentId, setParentId] = useState('')
  const [categories, setCategories] = useState([])

  const allCategories = []

  useEffect(async()=>{
    //reference to Categories colelction. get all categories where ParentId is equal 0
    //it'll return all sub categories based on Category that choosed
    // setAllCategories(firestore.ref("Categories").orderByChild("ParentId").equalTo(0));
    
    //get all categories
    const cats = await firestore.collection('Categories').get()
    cats.forEach((category) =>{
      allCategories.push(category.data())
    })
    console.log(allCategories)
    setCategories(allCategories)
  },[])

  const insertCategory = async()=>{

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
      <form>
        <label>Category name
          <input type='text' value={input} onChange={(e)=> setInput(e.target.value)}/>
        </label>

        <label>Parent Id
          <input type='text' placeholder='Parent id' value={parentId} onChange={(e)=> setParentId(e.target.value)}/>
        </label>
      </form>
      <button onClick={insertCategory}>Insert new Category</button>


      
        
          {categories.map((c)=> (
            <h1>{c.Category}</h1>
          ))}
        
      
      
    
      
    </div>
  );
}

export default App;
