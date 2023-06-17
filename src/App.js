import React, { useEffect, useState } from "react";
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [num, setNum] = useState('');
    const [name, setName] = useState('');

    const myFunction = (event) => {
        setNum(event.target.value);
    }

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${num}`);
            console.log(res);
            setName(res.data.name);
        }
        getData();
    })

    return(
        <>
            <div className="container-fluid p-5">
                <h1>You choose <span className="text-danger">{num}</span> value</h1>
                <h1>My name is <span className="text-danger">{name}</span></h1>
                <select value={num} className="form-select w-50" onChange={myFunction}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="25">25</option>
                </select>
            </div>
        </>
    );
}

export default App;