import React, { useState } from "react";

const App = () => {
    const [name, setName] = useState();
    const [lastName, setLastlName] = useState();
    const [fullName, setFullName] = useState();
    const [newLastName, setNewLastlName] = useState();

    const inputEvent = (event) => {
        setName(event.target.value);
    }

    const inputEventTwo = (event) => {
        setLastlName(event.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setFullName(name);
        setNewLastlName(lastName);
    }

    return(
        <>
            <div className="main_div">
                <form onSubmit={onSubmit}>
                    <div>
                        <h1>Hello {fullName} {newLastName}</h1>
                        <input type="text" onChange={inputEvent} value={name} placeholder="Enter Your First Name"></input>
                        <input type="text" onChange={inputEventTwo} value={lastName} placeholder="Enter Your Last Name"></input>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default App;