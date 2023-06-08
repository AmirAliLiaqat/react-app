import React, { useState } from "react";

const App = () => {
    const [name, setName] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const inputEvent = (event) => {
        setName(event.target.value);
    }

    return(
        <>
            <div className="main_div">
                <form onSubmit={onSubmit}>
                    <div>
                        <h1>Hello {fullName} {newLastName}</h1>
                        <input type="text" onChange={inputEvent} value={name} placeholder="Enter Your First Name"></input>
                        <input type="text" onChange={inputEvent} value={lastName} placeholder="Enter Your Last Name"></input>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default App;