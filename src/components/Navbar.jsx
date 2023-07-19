import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <>
            <nav className="custom-navbar" data-spy="affix" data-offset-top="20">
                <div className="container">
                    <a className="logo" href="/">Meyawo</a>         
                    <ul className="list-unstyled d-flex ml-auto">
                        <li className="item mx-3">
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className="item mx-3">
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li className="item mx-3">
                            <NavLink to='/services'>Services</NavLink>
                        </li>
                        <li className="item mx-3">
                            <NavLink to='/portfolio'>Portfolio</NavLink>
                        </li>
                        <li className="item mx-3">
                            <NavLink to='/blog'>Blog</NavLink>
                        </li>
                        <li className="item mx-3">
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                        <li className="item mx-3">
                            <NavLink to='/search'>🔍</NavLink>
                        </li>
                    </ul>
                    {/* <a href="javascript:void(0)" id="nav-toggle" className="hamburger hamburger--elastic">
                        <div className="hamburger-box">
                            <div className="hamburger-inner"></div>
                        </div>
                    </a> */}
                </div>          
            </nav>
        </>
    )
}

export default Navbar;