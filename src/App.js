import React, { useState } from "react";

const App = () => {
    const [name, setName] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
    });

    const inputEvent = (event) => {
        const {value,name} = event.target;

        setName((preValue) => {
            console.log(preValue);

            return{
                ...preValue,
                [name]: value
            }
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        alert('form submitted');
    }

    return(
        <>
            <div className="main_div">
                <form onSubmit={onSubmit}>
                    <div>
                        <h1>Hello {name.fname} {name.lname}</h1>
                        <p>{name.email}</p>
                        <p>{name.phone}</p>
                        <input type="text" name='fname' onChange={inputEvent} value={name.fname} placeholder="Enter Your First Name"></input>
                        <input type="text" name='lname' onChange={inputEvent} value={name.lname} placeholder="Enter Your Last Name"></input>
                        <input type="email" name='email' onChange={inputEvent} value={name.email} placeholder="Enter Your Email" autoComplete="off"></input>
                        <input type="number" name='phone' onChange={inputEvent} value={name.phone} placeholder="Enter Your Phone"></input>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default App;