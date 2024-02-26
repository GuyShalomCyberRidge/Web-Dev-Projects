import React from "react";
import { useState } from "react";

function Item(props){
    const [isCrossed, setCrossed] = useState(false);

    return(
        <li onClick={() => {setCrossed(!isCrossed)}} style={{textDecoration: isCrossed && "line-through"}}>
        {props.content}
        <button id={props.id} onClick={props.functions.remove}>Remove</button>
        </li>
    )
}

function createItem(item){
    return(
            <Item 
            key={item.id}
            id={item.id} 
            content={item.content} 
            functions={item.functions}/>
    )
}

export default Item;
export { createItem };