import React, { useState } from "react";

const App = () => {
    const [name, setName] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
    });

    const inputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;

        const {value,name} = event.target;

        setName((preValue) => {
            // console.log(preValue);
            if(name === 'fname') {
                return{
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: preValue.phone,
                }
            } else if(name === 'lname') {
                return{
                    fname: preValue.fname,
                    lname: value,
                    email: preValue.email,
                    phone: preValue.phone,
                }
            } else if(name === 'email') {
                return{
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: value,
                    phone: preValue.phone,
                }
            } else if(name === 'phone') {
                return{
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: value,
                }
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