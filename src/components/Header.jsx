import React from "react";
import Navbar from "./Navbar";

const Header = () => {
    return(
        <>
            <Navbar/>
            <header id="home" className="header">
                <div className="overlay"></div>
                <div className="header-content container">
                    <h1 className="header-title">
                        <span className="up">HI!</span>
                        <span className="down">I am John Doe</span>
                    </h1>
                    <p className="header-subtitle">FRONTEND WEB DESIGNER</p>            

                    <button className="btn btn-primary">Visit My Works</button>
                </div>              
            </header>
        </>
    )
}

export default Header;