import React from "react";
import { useState } from "react";

function Time(){
    const [time, setTime] = useState('whats the time?');
    const now = new Date().toLocaleTimeString();
    
    setInterval(() => {setTime(new Date().toLocaleTimeString())},1000)

    return(
        <div>
            <h1>{time}</h1>
            <button onClick={() => {
                setTime(now)}}>Get Time</button>
        </div>
    )
}

export default Time;