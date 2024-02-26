import React from "react";

function Note(props){
    return(
        <div className="note">
            <button id={props.id} className="red-x" onClick={props.removeNote}>X</button>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

function createNote(note){
    return(
        <Note 
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            removeNote={note.removeNote}
        />
    )
}

export default Note;
export {createNote};