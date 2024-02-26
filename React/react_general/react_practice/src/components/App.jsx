import React from "react";
import { useState } from "react";
import InputArea from "./InputArea";
import { createItem } from "./Item";

function App() {

  const [items, setItems] = useState([])
  const [currentInput, setCurrentInput] = useState("")

  function inputChange(event){
    const input = event.target.value;
    setCurrentInput(input);
  }

  function addItem(){
    setItems(prev => {
      if(prev.length === 0){
        return [...prev, {id: 1 , content: currentInput, functions: {remove: removeItem, add: addItem}}]
      } else {
        let currentID = prev[prev.length-1].id + 1;
        return [...prev, {id:  currentID, content: currentInput, functions: {remove: removeItem, add: addItem}}]
      }  
    });
    setCurrentInput("");
  }

  function removeItem(event){ //removes item with the "remove button". Using filter() doesnt mutate the array so re-render goes through.
    let ID = event.target.id;
    setItems(prev => {
      return prev.filter(p => p.id != ID);
    });
  }

  // function removeItem(event){ //removes item with the "remove button". doesnt rerender automatically after setState because array is mutated usind splice().
  //   let ID = event.target.id;
  //   setItems(prev => {
  //     let rmIndex = prev.findIndex(Arr => Arr.id == ID);
  //     if(rmIndex != -1){
  //       prev.splice(rmIndex, 1)
  //     }
  //     return prev;
  //   });
  // }

    return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <InputArea value={currentInput} functions={{removeItem: removeItem, addItem: addItem, inputChange: inputChange}}/>
      <div>
        <ul>
          {items.map(createItem)}
        </ul>
      </div>
    </div>
  );
}

export default App;
