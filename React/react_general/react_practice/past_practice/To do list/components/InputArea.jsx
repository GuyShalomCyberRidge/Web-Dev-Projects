import React from "react";

function InputArea(props){
    return(
    <div className="form">
        <input value={props.value} onChange={props.functions.inputChange} type="text" />
        <button onClick={props.functions.addItem}>
          <span>Add</span>
        </button>
    </div>
    )
}

export default InputArea;