import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const uniqueClass = location.pathname === `/` ? "text-white" : "";
    
    return(
        <>
            <nav className="custom-navbar" data-spy="affix" data-offset-top="20">
                <div className="container">
                    <h1><NavLink to='/' className={ uniqueClass }>Meyawo</NavLink></h1>
                    <ul className="list-unstyled d-flex ml-auto">
                        <li className="item mx-3">
                            <NavLink to='/' className={ uniqueClass }>Home</NavLink>
                        </li>
                        <li className="item mx-3">
                            <NavLink to='/about' className={ uniqueClass }>About</NavLink>
                        </li>
                        <li className="item mx-3">
                            <NavLink to='/services' className={ uniqueClass }>Services</NavLink>
                        </li>
                        <li className="item mx-3">
                            <NavLink to='/portfolio' className={ uniqueClass }>Portfolio</NavLink>
                        </li>
                        <li className="item mx-3">
                            <NavLink to='/blog' className={ uniqueClass }>Blog</NavLink>
                        </li>
                        <li className="item mx-3">
                            <NavLink to='/contact' className={ uniqueClass }>Contact</NavLink>
                        </li>
                        <li className="item mx-3">
                            <NavLink to='/search' className={ uniqueClass }><i class="fa-solid fa-magnifying-glass"></i></NavLink>
                        </li>
                        <li className="item mx-3">
                            <div className="dropdown d-inline-block">
                                <button className="btn text-white dropdown-toggle p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Projects
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item mx-0" href="/weather-app/">Weather App</a></li>
                                    <li><a className="dropdown-item mx-0" href="/todo-list/">Todo List</a></li>
                                </ul>
                            </div>
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