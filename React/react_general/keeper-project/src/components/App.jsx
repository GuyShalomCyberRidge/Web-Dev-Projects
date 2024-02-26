import React from "react";
import { useState } from "react";
import Header from "./Header";
import InputArea from "./InputArea";
import Footer from "./Footer";
import { createNote } from "./Note";

function App(){
    const [notes, setNotes] = useState([])
    
    return(
    <div>
        <Header />
        <InputArea notes={notes} setNotes={setNotes}/>
        {notes.map(createNote)}
        <Footer />
    </div> 
    )
}

export default App; 