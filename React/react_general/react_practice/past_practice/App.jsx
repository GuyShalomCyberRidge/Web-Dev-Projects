import React from "react";
import { useState } from "react";

function App() {

  const [hText, setHText] = useState("Hello");
  const [bgColor, setBgColor] = useState("white");

  function submitted(){
    setHText("submitted");
  }

  function hoverOn(){
    setBgColor("black");
  }

  function hoverOff(){
    setBgColor("white");
  }
  
  return (
    <div className="container">
      <h1>{hText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      style={{background: bgColor}}
      onClick={submitted} 
      onMouseOver={hoverOn} 
      onMouseLeave={hoverOff}>Submit</button>

    </div>
  );
}

export default App;
