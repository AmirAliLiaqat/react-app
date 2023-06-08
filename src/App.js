import React, { useState } from "react";

const App = () => {
    let currTime = new Date().toLocaleTimeString();

    const [newTime, setTime] = useState(currTime);

    const updateTime = () => {
        let newUpdateTime = new Date().toLocaleTimeString();
        setTime(newUpdateTime);
    }
    setInterval(updateTime,1000);
    return(
        <>
            <h1>{newTime}</h1>
        </>
    );
}

export default App;