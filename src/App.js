import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return(
        <>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/about" Component={About}/>
                <Route path="/contact" Component={Contact}/>
                <Route path="*" Component={Error} />
            </Routes>
        </>
    );
}

export default App;