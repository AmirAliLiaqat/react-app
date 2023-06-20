import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import User from './User';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About name="About"/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/user/amir/ali" element={<User/>}/>
                <Route path="*" element={<Error/>} />
            </Routes>
        </>
    );
}

export default App;