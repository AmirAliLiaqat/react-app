import React, { useState } from "react";

const App = () => {
    let currTime = new Date().toLocaleTimeString();

    const [newTime, setTime] = useState(currTime);

    const updateTime = () => {
        let newUpdateTime = new Date().toLocaleTimeString();
        setTime(newUpdateTime);
    }
    return(
        <>
            <h1>{newTime}</h1>
            <button onClick={updateTime}>Get Time</button>
        </>
    );
}

export default App;