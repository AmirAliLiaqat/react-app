import React, { useState } from "react";

const App = () => {
    const [name, setName] = useState();
    const [fullName, setFullName] = useState();
    const inputEvent = (event) => {
        // console.log();
        setName(event.target.value)
    }
    const changeText = () => {
        setFullName(name);
    }

    return(
        <>
            <div>
                <h1>Hello {fullName}</h1>
                <input type="text" onChange={inputEvent} value={name} placeholder="Enter Your Name"></input>
                <button onClick={changeText}>Submit</button>
            </div>
        </>
    );
}

export default App;