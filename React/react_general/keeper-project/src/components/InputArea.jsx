import React from "react";
import { useState } from "react";

function InputArea(props){
    const [currentInput, setCurrentInput] = useState({
        titleInput: "",
        contentInput: ""
    })

    function handleChange(event){
        setCurrentInput((prev) => {
            return (event.target.id === "title" ? 
            {
                titleInput: event.target.value,
                contentInput: prev.contentInput,
            } : {
                titleInput: prev.titleInput,
                contentInput: event.target.value,
            })
        }); 
    }

    function addNote(){
        console.log();
        const newID = props.notes.length === 0 ? 1 : props.notes[props.notes.length-1].id + 1;
        const newNote = {
            id: newID,
            title: currentInput.titleInput,
            content: currentInput.contentInput,
            removeNote: removeNote,
        }
        setCurrentInput({
            titleInput: "",
            contentInput: ""
        });
        props.setNotes((prev) => {
            return([...prev, newNote]);
        })
    }

    function removeNote(event){
        const removeID = event.target.id;
        props.setNotes((prev) => {
            return prev.filter(p => p.id.toString() !== removeID);
        })
    }

    return(
        <div className="input-container">
            <div>
                <h1>Post note:</h1>
                <textarea onChange={handleChange} value={currentInput.titleInput} id="title" type="text" placeholder="Title"/>
                <textarea onChange={handleChange} value={currentInput.contentInput} id="content" type="text" placeholder="What are we keeping?"/>
                <button onClick={addNote} title="Add note">Add</button>
            </div>
        </div>
    )
}

export default InputArea;